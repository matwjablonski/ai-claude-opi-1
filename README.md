# AI Driven development. Warsztaty Claude Code

To repozytorium `ai-claude-opi-1` zawiera projekt warsztatowy TaskFlow i
[workbook z zadaniami](./materials/workbook.pdf) oraz
[prezentację w PDF](./materials/ai-driven-development-warsztaty-claude-code.pdf). Zacznij od
[`taskflow/`](./taskflow/). Projekt zawiera celowe luki i zachowania do zbadania
podczas ćwiczeń; nie wszystkie są opisane w kodzie.

Każdy uczestnik pracuje na własnej kopii. Tag `workshop-start` wskazuje
sprawdzony stan początkowy. Przed przejściem do niezależnego modułu zapisz
bieżącą pracę i utwórz własną gałąź od tego tagu:

```sh
git switch -c exercise/7 workshop-start
```

Zmiana gałęzi nie resetuje lokalnej bazy H2. Aby przywrócić dane przykładowe,
zatrzymaj aplikację i usuń katalog `taskflow/data/`. Nie usuwaj niezapisanych
zmian w kodzie.

Wymagania: JDK 21, Maven 3.6.3 lub nowszy, Git. Aplikacja nie wymaga zewnętrznej
bazy danych.

```sh
git clone https://github.com/matwjablonski/ai-claude-opi-1.git
cd ai-claude-opi-1
cd taskflow
mvn test
mvn spring-boot:run
```

Po uruchomieniu otwórz <http://localhost:8080>.
