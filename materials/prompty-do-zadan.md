# Przykładowe prompty do zadań TaskFlow

Poniższe prompty pochodzą z materiałów prowadzącego i odpowiadają zadaniom w workbooku. Są punktem wyjścia: dopasuj je do stanu swojej gałęzi, a pola w nawiasach kwadratowych zastąp ustaleniami z wcześniejszych ćwiczeń.

Pracuj z katalogu taskflow/. Przed zadaniem 8D utwórz osobną gałąź od workshop-start, zgodnie z instrukcją w workbooku.

## Zadanie 1 — mapa TaskFlow

> Przeanalizuj TaskFlow bez edytowania plików. Pokaż przepływ utworzenia zadania od formularza przez API i serwis do bazy. Dla każdej warstwy wskaż plik i metodę. Odczytaj komendy uruchomienia i testów z repozytorium; oddziel fakty potwierdzone w plikach od rzeczy, których jeszcze nie uruchomiłeś. Zaproponuj krótki `CLAUDE.md` zawierający wyłącznie potwierdzone konwencje.

## Zadanie 2A — diagnoza pustego tytułu

> Zdiagnozuj, dlaczego TaskFlow pozwala zapisać zadanie bez poprawnego tytułu. Nie zmieniaj kodu. Porównaj walidację formularza z żądaniem `POST /api/tasks` zawierającym same spacje. Prześledź dane aż do zapisu i podaj kroki odtworzenia, obserwowaną odpowiedź serwera, przyczynę potwierdzoną w kodzie oraz proponowany kontrakt API. Każde twierdzenie powiąż z dowodem.

## Zadanie 2B — test i naprawa tytułu

> Na podstawie diagnozy z 2A dodaj najpierw testy API dla pustego, białoznakowego i brakującego tytułu przy `POST` oraz `PUT`. Pokaż wynik testów przed poprawką. Następnie wprowadź najmniejszą zmianę obejmującą obie ścieżki i uruchom testy ponownie. Sprawdź, że błędny `PUT` nie zmienia istniejącego rekordu. Na końcu przejrzyj diff i wskaż, co zostało potwierdzone żądaniem do działającej aplikacji.

## Zadanie 3A — plan priorytetów

> Zaplanuj dodanie priorytetów `LOW`, `MEDIUM`, `HIGH` w TaskFlow. Na razie nie edytuj kodu. Sprawdź wpływ na model, H2, `POST`, `PUT`, odpowiedzi API, formularz, listę i testy. Uwzględnij starszego klienta pomijającego pole oraz rekordy istniejące przed zmianą. Wypisz decyzje, których wymagania nie rozstrzygają, zaproponuj jedną spójną wersję kontraktu i podaj sprawdzalne kryteria akceptacji.

## Zadanie 3B — backend priorytetów

> Zrealizuj tylko backend priorytetów według kontraktu ustalonego w 3A: [wklej decyzje o `POST`, `PUT` i starszych rekordach]. Zacznij od testów API. Sprawdź osobno nowy rekord bez pola i rekord zapisany w H2 przed zmianą schematu; nie zakładaj, że inicjalizator pola Java uzupełnia stare wiersze. Uruchom `mvn test` i podaj dowody wartości po restarcie. Nie zmieniaj UI.

## Zadanie 3C — priorytet w UI

> Backend priorytetów jest gotowy zgodnie z 3A. Dodaj w TaskFlow wybór priorytetu przy tworzeniu i edycji oraz jego czytelne wyświetlanie na liście. Sprawdź reset formularza i anulowanie edycji. Następnie wykonaj scenariusz w przeglądarce: utwórz `HIGH`, zmień na `LOW`, odczytaj API i uruchom aplikację ponownie. Podaj wynik testów i obserwacji oraz ograniczenia, których nie sprawdziłeś.

## Zadanie 4 — selektywny odczyt logu

> Zbadaj problem listy zadań w `workshop/incident.log` bez wczytywania całego logu do rozmowy. Zacznij od wąskiego wyszukania błędów i połącz wpisy po `requestId`. Porównaj wartości filtra z kodem API. W diagnozie podaj numery wierszy, odróżnij przyczynę od skutków i zaznacz, co jest wnioskiem. Na koniec oceń, czy dalsza praca wymaga `/compact`, `/clear`, czy kontynuacji, po sprawdzeniu `/context`.

## Zadanie 5A — skill `/review-change`

> Utwórz projektowy skill `/review-change`, który przegląda bieżący diff albo wskazany plik diff. Raport ma dla każdej istotnej uwagi zawierać miejsce w kodzie, dowód, możliwy skutek, niepewność i sposób weryfikacji. Wypróbuj go na `workshop/review-sample.diff`. Nie poprawiaj patcha; sprawdź w kodzie co najmniej jedną uwagę z raportu i oddziel potwierdzony problem od hipotezy.

## Zadanie 5B — hook przed zapisem

> Skonfiguruj projektowy hook `PreToolUse`, który odmawia wybranym narzędziom edycji zapisu do testowego `.env` w TaskFlow. Najpierw sprawdź aktualny format wejścia hooka i decyzji odmownej. Pokaż jedno dozwolone i jedno zablokowane wywołanie na bezpiecznych plikach. W raporcie wymień nazwy narzędzi i ścieżki objęte próbą oraz drogi zapisu, których ten hook nie przechwytuje.

## Zadanie 5C — hook po edycji

> Dodaj prosty projektowy hook `PostToolUse` uruchamiany po edycji pliku i sprawdzający końcowy znak nowej linii. Zweryfikuj go na pliku poprawnym i niepoprawnym, a potem wykonaj sam odczyt pliku. Zapisz, kiedy hook się uruchomił, co zwrócił i czy zmienił zapisany plik. Porównaj jego rolę z hookiem `PreToolUse` z 5B i skillem `/review-change` z 5A.

## Zadanie 6A — definicja `test-reviewer`

> Przygotuj definicję subagenta `test-reviewer` w `.claude/agents/`. Ma przyjmować diff lub zakres testów, analizować je bez edycji plików i zwracać raport: dowód, hipoteza, skutek, sposób sprawdzenia. Ogranicz narzędzia do odczytu i wyszukiwania zgodnie z możliwościami tej instalacji Claude Code. Pokaż, jak sprawdziłeś, że agent jest rozpoznawany i nie ma dostępu do narzędzi edycji.

## Zadanie 6B — weryfikacja subagenta

> Zleć `test-reviewer` ocenę `workshop/review-sample.diff` pod kątem jakości testów i możliwych regresji. Poproś o lokalizacje oraz dowody, bez zmian w kodzie. Po otrzymaniu raportu sam sprawdź w kodzie co najmniej jedną uwagę. Oznacz każde ustalenie jako potwierdzone, odrzucone albo wymagające reprodukcji i oceń, czy delegowanie pomogło w tym zadaniu.

## Zadanie 7A — Playwright MCP

> Użyj podłączonego Playwright MCP, aby otworzyć lokalny TaskFlow pod `http://localhost:8080`. Utwórz zadanie o unikalnym tytule i potwierdź w przeglądarce, że pojawiło się na liście. Zapisz konkretne obserwacje z narzędzia: widoczny formularz, wykonane działanie i wynik na liście. Oddziel je od wniosków o stanie bazy lub trwałości po restarcie. Nie edytuj kodu aplikacji.

## Zadanie 7B — rozbieżność listy i API

> Użyj Playwright MCP na lokalnym TaskFlow. Utwórz zadanie `TODO` o unikalnym tytule, ustaw filtr „Do zrobienia” i zmień status zadania na „W toku”. Bez przeładowania zapisz, czy zadanie nadal jest widoczne. Porównaj wynik z `GET /api/tasks?status=TODO`, a potem odśwież stronę. Podaj kroki reprodukcji i zaproponuj test Playwright niezależny od danych pozostawionych przez inne ćwiczenia. Na razie nie naprawiaj UI.

## Zadanie 8A — specyfikacja terminu

> Klient chce terminu wykonania i filtrowania zadań po terminie. Nie edytuj aplikacji. Wypisz decyzje potrzebne do jednoznacznego kontraktu: format daty, strefa, granice filtra, stare rekordy, brak daty i edycja. Zapisz propozycję specyfikacji z przykładami żądań i kryteriami akceptacji. Wskaż jeden mały wycinek do wykonania w 8B oraz funkcje, które pozostaną poza tym wycinkiem. Oznacz swoje propozycje jako decyzje do uzgodnienia.

## Zadanie 8B — jeden wycinek terminu

> Oto uzgodniona specyfikacja z 8A: [wklej decyzje i kryteria]. W tym etapie wykonaj wyłącznie wycinek: opcjonalny termin w `POST` i `GET`, bez filtra i UI. Najpierw zaproponuj krótki plan i sprawdź jego zakres, potem dodaj kod oraz test integracyjny dla daty obecnej i pominiętej. Uruchom `mvn test`. Zapisz odstępstwa od planu i decyzje, których nie dało się wywnioskować z repozytorium.

## Zadanie 8C — karta dowodów

> Zweryfikuj wycinek wykonany w 8B względem kryteriów z 8A: [wklej kryteria]. Uruchom właściwe testy projektu, przejrzyj diff i sprawdź przypadki, których testy nie obejmują. Przygotuj kartę dowodów w układzie: kryterium, test lub obserwacja, wynik, niepewność. Oddziel błędy wycinka od niewykonanego zakresu, zwłaszcza filtra i UI. Nie nazywaj całej funkcji ukończoną na podstawie samego `mvn test`.

## Zadanie 8D — potwierdzenie regresji w patchu

> Na osobnej gałęzi od `workshop-start` przejrzyj `workshop/review-sample.diff` jako propozycję zmiany. Ustal, jaki przypadek `PUT` zmienia patch i czy dodany test go sprawdza. W katalogu `taskflow/` zastosuj patch, uruchom `mvn test`, a potem sprawdź przez API utworzenie zadania z opisem i wyczyszczenie opisu pustym ciągiem. Napisz uwagę do review z miejscem, reprodukcją, skutkiem i minimalnym testem regresyjnym. Nie poprawiaj błędu.
