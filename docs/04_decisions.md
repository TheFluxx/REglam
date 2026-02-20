# 04 Decisions (DecisionRecordV2)

## Формат записей
`decision_id, date, decision_type, context, options, choice, rationale, impact, expiry, linked_ids`

Где `decision_type`: `Fix`, `Accept`, `Defer`.

## Журнал решений

### DEC-001
- decision_id: `DEC-001`
- date: `2026-02-20`
- decision_type: `Fix`
- context: Базовая архитектура проекта.
- options: `Framework`, `HTML/CSS/JS`
- choice: `HTML/CSS/JS`
- rationale: Максимальная прозрачность и воспроизводимость для локального ревью.
- impact: Быстрый старт, меньше инфраструктуры, проще аудит.
- expiry: `Final`
- linked_ids: `GAP-01`

### DEC-002
- decision_id: `DEC-002`
- date: `2026-02-20`
- decision_type: `Accept`
- context: Модель приемки проекта.
- options: `Балльная`, `Pass/Fail`, `Гибрид`
- choice: `Pass/Fail`
- rationale: Фокус на устранении блокирующих дефектов.
- impact: Бинарная и прозрачная финальная оценка.
- expiry: `Final`
- linked_ids: `UI-001, UX-001, A11Y-001`

### DEC-003
- decision_id: `DEC-003`
- date: `2026-02-20`
- decision_type: `Defer`
- context: Введение quality-gates и расширенного цикла версий `v01-v04 + RC`.
- options: `Сохранить v1`, `Перейти на v2.0`
- choice: `Перейти на v2.0`
- rationale: Текущий контур недостаточно формализует проверяемость качества.
- impact: Добавлены документы `06-09`, обновлены шаблоны `02-05`.
- expiry: `Final`
- linked_ids: `GAP-02, GAP-03`

### DEC-004
- decision_id: `DEC-004`
- date: `2026-02-20`
- decision_type: `Accept`
- context: Статус UX-001 до релиза RC.
- options: `Срочно фиксировать`, `Принять риск до RC`
- choice: `Принять риск до RC`
- rationale: Блокер не критический, но должен быть закрыт или подтвержден на RC.
- impact: Дефект помечен как `Resolved` с ограничением по сроку.
- expiry: `RC`
- linked_ids: `UX-001`

## Шаблон записи post-freeze

### DEC-XXX
- decision_id: `DEC-XXX`
- date: `YYYY-MM-DD`
- decision_type: `Fix/Accept/Defer`
- context: [контекст изменения после RC]
- options: [варианты]
- choice: [принятое решение]
- rationale: [обоснование]
- impact: [влияние]
- expiry: [версия/дата]
- linked_ids: [Issue/GAP]
