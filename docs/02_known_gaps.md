# 02 Known Gaps (GapCardV2)

## Формат
`id, description, reason, expected, risk, impact, mitigation, target_version, status`

## Карточки

### GAP-01
- id: `GAP-01`
- description: Нет автоматизированного хранилища замечаний, используется ручная фиксация.
- reason: Проект ограничен статикой без backend.
- expected: Замечания создаются и отслеживаются автоматически.
- risk: Medium
- impact: Потеря части контекста при ручном переносе комментариев.
- mitigation: Строгий шаблон `ReviewIssueV2` + обязательная трассировка в `docs/04_decisions.md`.
- target_version: `Final+1`
- status: Open

### GAP-02
- id: `GAP-02`
- description: Нет автоматического e2e smoke для ключевых сценариев.
- reason: Не внедрен тест-раннер в обязательный контур.
- expected: Автоматизированный smoke на основной и альтернативный сценарии.
- risk: Medium
- impact: Ручные регрессии могут быть пропущены.
- mitigation: Полный ручной прогон `docs/07_test_matrix.md` на каждом freeze.
- target_version: `Final+1`
- status: Open

### GAP-03
- id: `GAP-03`
- description: Нет выделенного UI-kit документа с токенами компонентов.
- reason: На v01-v04 фокус на сценариях и quality-gates.
- expected: Формализованный UI-kit для масштабирования.
- risk: Low
- impact: Риск несогласованности визуальных решений при расширении проекта.
- mitigation: Фиксировать изменения UI в `docs/08_release_notes.md` до появления UI-kit.
- target_version: `Final+1`
- status: Open
