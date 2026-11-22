# TaskFlow

Niewielka aplikacja do zarządzania zadaniami zespołu. Projekt służy do ćwiczeń
z Claude Code. Dokumentacja opisuje uruchomienie i publiczny kontrakt API;
strukturę kodu poznasz podczas pracy z repozytorium.

## Wymagania

- JDK 21
- Maven 3.6.3+
- Node.js 22, 24 lub 26 oraz npm (tylko do testów UI)

## Uruchomienie

```sh
mvn test
mvn spring-boot:run
```

Interfejs: <http://localhost:8080>. Baza H2 zapisuje dane w ignorowanym przez
Git katalogu `data/`. Po restarcie dane pozostają dostępne. Aby wrócić do
stanu początkowego, zatrzymaj aplikację i usuń katalog `data/`; przy kolejnym
uruchomieniu zostaną dodane przykładowe zadania. Nie potrzeba konta ani
zewnętrznych usług.

## API

| Operacja | Metoda i ścieżka |
| --- | --- |
| Lista, opcjonalnie `?status=TODO` | `GET /api/tasks` |
| Utworzenie | `POST /api/tasks` |
| Edycja | `PUT /api/tasks/{id}` |
| Zmiana statusu | `PATCH /api/tasks/{id}/status` |
| Usunięcie | `DELETE /api/tasks/{id}` |

Statusy: `TODO`, `IN_PROGRESS`, `DONE`. Przykładowe żądanie:

```sh
curl -X POST http://localhost:8080/api/tasks \
  -H 'Content-Type: application/json' \
  -d '{"title":"Przygotować demo","description":"Wersja na piątek"}'
```

Projekt nie zawiera jeszcze priorytetów ani terminów wykonania. Własne zmiany
zapisuj w Git, by łatwo porównywać wyniki kolejnych ćwiczeń.

Materiały pomocnicze do ćwiczeń znajdują się w `workshop/`: log incydentu oraz
przykładowy diff do przeglądu. Nie trzeba ich stosować jako poprawek do projektu.

## Testy UI

Uruchom aplikację w osobnym terminalu. Następnie:

```sh
npm ci
npx playwright install chromium
npm run test:ui
```

Test UI korzysta z lokalnej aplikacji na porcie 8080. Inny adres można podać
przez `TASKFLOW_BASE_URL`. Testy Playwright i eksploracja przez Playwright MCP
to oddzielne sposoby pracy z przeglądarką.
