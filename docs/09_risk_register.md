# 09 Risk Register

| ID | Риск | Вероятность | Влияние | Mitigation | Владелец | Статус |
|---|---|---|---|---|---|---|
| RSK-001 | Открытый A11y блокер в mobile menu (`A11Y-001`) | High | High | Реализовать trap-focus, перепроверить `TC-A11Y-01` и `TC-REG-01` | Author | Open |
| RSK-002 | Ручная фиксация замечаний без автоматизации | Medium | Medium | Строгая дисциплина ведения `ReviewIssueV2` + связь с decisions | Author | Open |
| RSK-003 | Отсутствие автотестов e2e | Medium | Medium | Полный ручной прогон `docs/07_test_matrix.md` на каждом RC | Author | Open |
| RSK-004 | Расхождение микрокопирайта при правках | Low | Medium | Проверка `TC-CNT-01` и фиксация правок в release notes | Author | Monitoring |
