const { test, expect } = require('@playwright/test');

test('tworzenie, edycja i usuwanie zadania', async ({ page }) => {
  const title = `Próba UI ${Date.now()}`;
  await page.goto('/');

  await page.getByLabel('Tytuł').fill(title);
  await page.getByLabel('Opis').fill('Przykładowy opis');
  await page.getByRole('button', { name: 'Dodaj zadanie' }).click();

  const task = page.getByRole('listitem').filter({ hasText: title });
  await expect(task).toBeVisible();
  await task.getByRole('button', { name: 'Edytuj' }).click();
  await page.getByLabel('Opis').fill('Zmieniony opis');
  await page.getByRole('button', { name: 'Zapisz zmiany' }).click();
  await expect(task).toContainText('Zmieniony opis');

  await task.getByRole('button', { name: 'Usuń' }).click();
  await expect(task).toHaveCount(0);
});
