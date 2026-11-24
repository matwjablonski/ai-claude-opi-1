# Lektury uzupełniające do warsztatów Claude Code / TaskFlow

Zestawienie odpowiada modułom prezentacji i ćwiczeniom z workbooka. Materiały są po angielsku. Zacznij od pozycji związanej z zadaniem, które chcesz pogłębić; nie trzeba czytać całej listy po kolei. Linki sprawdzone 24 listopada 2026 r.

## 1. Poznanie projektu i instrukcje dla agenta

- [Best practices for Claude Code — Anthropic](https://code.claude.com/docs/en/best-practices) — jak zaczynać od zrozumienia repozytorium, podawać kontekst i weryfikować wynik. Przydatne do zadań 1, 2 i 8.
- [How Claude remembers your project — Anthropic](https://code.claude.com/docs/en/memory) — zakres i utrzymanie instrukcji `CLAUDE.md`; uzupełnienie zadania 1.

## 2. Zmiana kodu i agentic workflow

- [Building effective agents — Anthropic](https://www.anthropic.com/research/building-effective-agents) — wzorce przepływów i agentów; materiał koncepcyjny do zadań 2–3 i 8, a nie instrukcja obsługi Claude Code.
- [Humans and Agents in Software Engineering Loops — Martin Fowler](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) — gdzie człowiek podejmuje decyzje i jak ocenia pracę agenta. Warto przeczytać przed planowaniem zadania 3A i specyfikacją 8A.

## 3. Kontekst, tokeny i koszty

- [Effective context engineering for AI agents — Anthropic](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) — selekcja informacji, odczyt na żądanie i kompakcja kontekstu; rozwija zadanie 4.
- [Context Engineering for Coding Agents — Martin Fowler](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) — jak pliki instrukcji, narzędzia i historia rozmowy wpływają na kontekst agenta; przydatne także do zadań 1 i 6.

## 4. Skills, hooks i subagenci

- [Extend Claude with skills — Anthropic](https://code.claude.com/docs/en/skills) — tworzenie i zakres projektowych skills; do zadania 5A.
- [Automate actions with hooks — Anthropic](https://code.claude.com/docs/en/hooks-guide) — zdarzenia, wejście i wynik hooków; do zadań 5B–5C.
- [Create custom subagents — Anthropic](https://code.claude.com/docs/en/sub-agents) — definicja, narzędzia i uruchamianie subagentów; do zadań 6A–6B.

## 5. MCP i testowanie w przeglądarce

- [Connect Claude Code to tools via MCP — Anthropic](https://code.claude.com/docs/en/mcp) — połączenie klienta z serwerem MCP i zarządzanie narzędziami; do modułu 7.
- [Playwright MCP — Microsoft](https://playwright.dev/docs/getting-started-mcp) — uruchomienie i możliwości automatyzacji przeglądarki; do zadań 7A–7B.
- [Playwright best practices — Microsoft](https://playwright.dev/docs/best-practices) — testy oparte na zachowaniu widocznym dla użytkownika oraz izolacja danych; do zadania 7B.

## 6. Kontrola jakości zmian

- [The role of developer skills in agentic coding — Martin Fowler / Thoughtworks](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html) — konkretne przykłady błędnych diagnoz, zbędnych zmian i ograniczeń testów tworzonych przez agenta; do zadań 8A–8D.
- [Assessing internal quality while coding with an agent — Martin Fowler / Thoughtworks](https://martinfowler.com/articles/exploring-gen-ai/ccmenu-quality.html) — studium przypadku oceny jakości kodu po zmianie wykonanej z agentem; do przeglądu w zadaniach 8C–8D.
