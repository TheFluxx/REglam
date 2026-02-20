# 03 Review Log (ReviewIssueV2)

| issue_id | category | severity | location | environment | steps | expected | actual | frequency | regression_risk | developer_comment | decision | status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| UI-001 | UI | Minor | Hero / карточка статуса | Win11, Chrome 122, 1280x720 | Открыть главную страницу и сравнить иерархию заголовков в Hero и карточке справа | Ясная визуальная иерархия H1 и вторичных заголовков | Заголовки визуально близки по весу, читаемость контекста ниже ожидаемой | Always | Low | Улучшить размерный шаг и контраст в v04 | Defer to Final+1 | Open |
| UX-001 | UX | Major | Форма / submit | Win11, Chrome 122, 1280x720 | Оставить поля пустыми, нажать отправку | Поля с ошибкой подсвечены и сообщение направляет к исправлению | Есть общее сообщение, нет явной поэлементной подсветки | Intermittent | Medium | Требование v2.0: локальная индикация каждого поля | Accepted with rationale (DEC-004, expiry RC) | Resolved |
| A11Y-001 | A11y | Critical | Mobile menu / keyboard | Win11, Chrome 122, 360x740 | Открыть меню, пройти Tab/Shift+Tab, попытаться вернуться к триггеру | Управляемый цикл фокуса в пределах открытого меню | Нет trap-focus, фокус уходит за пределы меню | Always | High | Блокер финальной приемки до исправления | Planned for v04 | Open |
