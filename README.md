# Single-Developer UI/UX Review Sandbox (v2.0)

Локальный статический проект для одиночной фронтенд-разработки с усложненным регламентом UI/UX-ревью.

## Запуск

1. Вариант без сервера: открыть `index.html` в браузере.
2. Рекомендуемый вариант:
```powershell
cd d:\REglam
python -m http.server 8080
```
Открыть: `http://localhost:8080`

## Что проверять

1. Два обязательных UX-сценария с happy/invalid/recovery проходами.
2. Quality-gates: Defects, UX, A11y, Performance, Content.
3. Полный прогон матрицы тестов в `docs/07_test_matrix.md`.
4. Соответствие релизному циклу `v01-v04 -> RC -> Final`.
5. Корректность журналов: gaps, defects, decisions, risks, release notes.

## Ограничения

1. Без backend, БД, хостинга.
2. Стек: `HTML/CSS/JS`.
3. Приемка только `Pass/Fail`.
4. Доказательства проверки: заполненный чеклист и записи в тест-матрице.

## Документы

1. Базовый регламент: `docs/00_reglament_single_dev.md`.
2. Quality-gates: `docs/06_quality_gates.md`.
3. Матрица тестов: `docs/07_test_matrix.md`.
4. История итераций: `docs/08_release_notes.md`.
5. Реестр рисков: `docs/09_risk_register.md`.
