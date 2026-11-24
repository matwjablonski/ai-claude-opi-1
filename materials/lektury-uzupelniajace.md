# Lektury uzupełniające do warsztatów Claude Code / TaskFlow

Zestawienie odpowiada modułom prezentacji i ćwiczeniom z workbooka. Większość materiałów jest po angielsku; artykuł Mateusza jest po polsku. Zacznij od pozycji związanej z zadaniem, które chcesz pogłębić; nie trzeba czytać całej listy po kolei. Linki sprawdzone 24 listopada 2026 r.

## 1. Poznanie projektu i instrukcje dla agenta

- [Best practices for Claude Code — Anthropic](https://code.claude.com/docs/en/best-practices) — jak zaczynać od zrozumienia repozytorium, podawać kontekst i weryfikować wynik. Przydatne do zadań 1, 2 i 8.
- [How Claude remembers your project — Anthropic](https://code.claude.com/docs/en/memory) — zakres i utrzymanie instrukcji `CLAUDE.md`; uzupełnienie zadania 1.
- [Markdown. Skromny język, który napisał Internet — Mateusz Jabłoński](https://mateuszjablonski.com/blog/markdown-skromny-jezyk-ktory-napisal-internet) — po polsku o Markdownzie jako formacie dokumentacji, promptów i instrukcji dla agentów; pokazuje też granice takiego opisu. Do zadań 1 i 8A.

## 2. Zmiana kodu i agentic workflow

- [Building effective agents — Anthropic](https://www.anthropic.com/research/building-effective-agents) — wzorce przepływów i agentów; materiał koncepcyjny do zadań 2–3 i 8, a nie instrukcja obsługi Claude Code.
- [Humans and Agents in Software Engineering Loops — Martin Fowler](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) — gdzie człowiek podejmuje decyzje i jak ocenia pracę agenta. Warto przeczytać przed planowaniem zadania 3A i specyfikacją 8A.
- [First run the tests — Simon Willison](https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/) — krótki wzorzec rozpoczęcia pracy agenta od uruchomienia testów i poznania repozytorium; do zadań 1, 2B i 8C.
- [Characterization Testing — Michael Feathers](https://michaelfeathers.silvrback.com/characterization-testing) — tekst autora, który wprowadził pojęcie testów charakterystyki w książce Working Effectively with Legacy Code. Wyjaśnia, jak utrwalić faktyczne zachowanie przed zmianą i dlaczego nie oznacza to uznania go za poprawne; do zadań 2A–2B i 8D.
- [Working Effectively With Characterization Tests — Alberto Savoia](https://www.artima.com/weblogs/viewpost.jsp?thread=198296) — pierwszy tekst z serii z 2007 r. z praktycznym przykładem w Javie i procedurą opartą na podejściu Feathersa; do zadań 2A–2B i 8D.

## 3. Kontekst, tokeny i koszty

- [Effective context engineering for AI agents — Anthropic](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) — selekcja informacji, odczyt na żądanie i kompakcja kontekstu; rozwija zadanie 4.
- [Context Engineering for Coding Agents — Martin Fowler](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) — jak pliki instrukcji, narzędzia i historia rozmowy wpływają na kontekst agenta; przydatne także do zadań 1 i 6.
- [Architecting efficient context-aware multi-agent framework for production — Google Developers](https://developers.googleblog.com/en/architecting-efficient-context-aware-multi-agent-framework-for-production/) — bardziej zaawansowane spojrzenie na selekcję kontekstu i koszt dużych wyników narzędzi; do pogłębienia zadania 4.

## 4. Skills, hooks i subagenci

- [Extend Claude with skills — Anthropic](https://code.claude.com/docs/en/skills) — tworzenie i zakres projektowych skills; do zadania 5A.
- [Automate actions with hooks — Anthropic](https://code.claude.com/docs/en/hooks-guide) — zdarzenia, wejście i wynik hooków; do zadań 5B–5C.
- [Create custom subagents — Anthropic](https://code.claude.com/docs/en/sub-agents) — definicja, narzędzia i uruchamianie subagentów; do zadań 6A–6B.

## 5. MCP i testowanie w przeglądarce

- [Connect Claude Code to tools via MCP — Anthropic](https://code.claude.com/docs/en/mcp) — połączenie klienta z serwerem MCP i zarządzanie narzędziami; do modułu 7.
- [Playwright MCP — Microsoft](https://playwright.dev/docs/getting-started-mcp) — uruchomienie i możliwości automatyzacji przeglądarki; do zadań 7A–7B.
- [Playwright best practices — Microsoft](https://playwright.dev/docs/best-practices) — testy oparte na zachowaniu widocznym dla użytkownika oraz izolacja danych; do zadania 7B.
- [MCP Security — OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html) — ryzyka związane z zewnętrznymi serwerami i wynikami narzędzi MCP oraz sposoby ograniczania uprawnień; do modułu 7.

## 6. Kontrola jakości zmian

- [The role of developer skills in agentic coding — Martin Fowler / Thoughtworks](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html) — konkretne przykłady błędnych diagnoz, zbędnych zmian i ograniczeń testów tworzonych przez agenta; do zadań 8A–8D.
- [Assessing internal quality while coding with an agent — Martin Fowler / Thoughtworks](https://martinfowler.com/articles/exploring-gen-ai/ccmenu-quality.html) — studium przypadku oceny jakości kodu po zmianie wykonanej z agentem; do przeglądu w zadaniach 8C–8D.
- [ReviewBench: An open benchmark for AI code review — GitHub](https://github.blog/ai-and-ml/reviewbench-an-open-benchmark-for-ai-code-review/) — jak mierzyć trafność uwag reviewera i odróżniać wykryte problemy od szumu; do zadań 5A, 6B i 8D.
