# Extension kctaskpr

- Fichier : `kctaskpr.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is task priority low? | `Task priority is low` | La priorité de tâche est basse |  | — |  |
| 1 | -82 | Is task priority medium? | `Task priority is medium` | La priorité de tâche est moyenne |  | — |  |
| 2 | -83 | Is task priority high? | `Task priority is high` | La priorité de tâche est haute |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Task Priority > Low | `Set low task priority` | Fixer la priorité de tâche à basse |  | — |  |
| 1 | 81 | Set Task Priority > Medium | `Set medium task priority` | Fixer la priorité de tâche à moyenne |  | — |  |
| 2 | 82 | Set Task Priority > High | `Set high task priority` | Fixer la priorité de tâche à haute |  | — |  |
| 3 | 83 | Wake up application every... | `Wake up application every <p0>` | Réveiller l'application tous les <p0> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Task priority | `task priority(` | Priorité de tâche |  | — |  |
