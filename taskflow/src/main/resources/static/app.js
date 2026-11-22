const form = document.querySelector('#task-form');
const taskId = document.querySelector('#task-id');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const filter = document.querySelector('#status-filter');
const list = document.querySelector('#task-list');
const message = document.querySelector('#message');
const cancelButton = document.querySelector('#cancel-button');
const saveButton = document.querySelector('#save-button');
const formHeading = document.querySelector('#form-heading');
let latestLoad = 0;

const statusNames = { TODO: 'Do zrobienia', IN_PROGRESS: 'W toku', DONE: 'Gotowe' };

async function api(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });
  if (!response.ok) throw new Error(`Operacja nie powiodła się (HTTP ${response.status}).`);
  return response.status === 204 ? null : response.json();
}

function resetForm() {
  form.reset();
  taskId.value = '';
  cancelButton.hidden = true;
  saveButton.textContent = 'Dodaj zadanie';
  formHeading.textContent = 'Nowe zadanie';
}

function button(label, className, onClick) {
  const element = document.createElement('button');
  element.type = 'button';
  element.textContent = label;
  if (className) element.className = className;
  element.addEventListener('click', onClick);
  return element;
}

function render(tasks) {
  list.replaceChildren();
  if (tasks.length === 0) {
    const empty = document.createElement('li');
    empty.textContent = 'Brak zadań w tym widoku.';
    list.append(empty);
    return;
  }

  for (const task of tasks) {
    const item = document.createElement('li');
    const top = document.createElement('div');
    top.className = 'task-top';
    const heading = document.createElement('h3');
    heading.textContent = task.title || '(bez tytułu)';
    top.append(heading);

    const controls = document.createElement('div');
    controls.className = 'task-controls';
    const statusLabel = document.createElement('label');
    statusLabel.textContent = 'Status';
    const statusSelect = document.createElement('select');
    statusSelect.setAttribute('aria-label', `Status zadania ${task.id}`);
    for (const [value, name] of Object.entries(statusNames)) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = name;
      statusSelect.append(option);
    }
    statusSelect.value = task.status;
    statusSelect.addEventListener('change', async () => {
      try {
        message.textContent = '';
        await api(`/api/tasks/${task.id}/status`, {
          method: 'PATCH', body: JSON.stringify({ status: statusSelect.value }),
        });
        task.status = statusSelect.value;
      } catch (error) {
        statusSelect.value = task.status;
        message.textContent = error.message;
      }
    });
    statusLabel.append(statusSelect);
    controls.append(statusLabel);
    controls.append(button('Edytuj', 'secondary', () => {
      taskId.value = task.id;
      titleInput.value = task.title ?? '';
      descriptionInput.value = task.description ?? '';
      cancelButton.hidden = false;
      saveButton.textContent = 'Zapisz zmiany';
      formHeading.textContent = 'Edycja zadania';
      titleInput.focus();
    }));
    controls.append(button('Usuń', 'danger', async () => {
      try {
        await api(`/api/tasks/${task.id}`, { method: 'DELETE' });
        await loadTasks();
      } catch (error) {
        message.textContent = error.message;
      }
    }));
    top.append(controls);
    item.append(top);
    if (task.description) {
      const description = document.createElement('p');
      description.className = 'task-description';
      description.textContent = task.description;
      item.append(description);
    }
    list.append(item);
  }
}

async function loadTasks() {
  const load = ++latestLoad;
  try {
    message.textContent = '';
    const query = filter.value ? `?status=${encodeURIComponent(filter.value)}` : '';
    const tasks = await api(`/api/tasks${query}`);
    if (load === latestLoad) render(tasks);
  } catch (error) {
    if (load === latestLoad) message.textContent = error.message;
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const editing = Boolean(taskId.value);
  try {
    await api(editing ? `/api/tasks/${taskId.value}` : '/api/tasks', {
      method: editing ? 'PUT' : 'POST',
      body: JSON.stringify({ title: titleInput.value, description: descriptionInput.value }),
    });
    resetForm();
    await loadTasks();
  } catch (error) {
    message.textContent = error.message;
  }
});

cancelButton.addEventListener('click', resetForm);
filter.addEventListener('change', loadTasks);
loadTasks();
