# Extension kctaskpr

- File: `kctaskpr.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is task priority low? | `Task priority is low` | La priorité de tâche est basse |  | — |  |
| 1 | -82 | Is task priority medium? | `Task priority is medium` | La priorité de tâche est moyenne |  | — |  |
| 2 | -83 | Is task priority high? | `Task priority is high` | La priorité de tâche est haute |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Task Priority > Low | `Set low task priority` | Fixer la priorité de tâche à basse |  | — |  |
| 1 | 81 | Set Task Priority > Medium | `Set medium task priority` | Fixer la priorité de tâche à moyenne |  | — |  |
| 2 | 82 | Set Task Priority > High | `Set high task priority` | Fixer la priorité de tâche à haute |  | — |  |
| 3 | 83 | Wake up application every... | `Wake up application every <p0>` | Réveiller l'application tous les <p0> | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Task priority | `task priority(` | Priorité de tâche |  | — |  |
