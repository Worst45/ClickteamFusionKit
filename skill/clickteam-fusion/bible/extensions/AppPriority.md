# Extension AppPriority

- Fichier : `AppPriority.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | App is at High Priority | `App is at High Priority` |  |  | — |  |
| 1 | -82 | App is at Above Normal Priority | `App is at Above Normal Priority` |  |  | — |  |
| 2 | -83 | App is at Normal Priority | `App is at Normal Priority` |  |  | — |  |
| 3 | -84 | App is at Below Normal Priority | `App is at Below Normal Priority` |  |  | — |  |
| 4 | -85 | App is at Idle Priority | `App is at Idle Priority` |  |  | — |  |
| 5 | -86 | App is at RealTime Priority | `App is at RealTime Priority` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | High Priority (0x80) | `Set Application to High Priority` |  |  | — |  |
| 1 | 81 | Above Normal Priority (0x8000) | `Set Application to Above Normal Priority` |  |  | — |  |
| 2 | 82 | Normal Priority (Default) (0x20) | `Set Application to Normal Priority` |  |  | — |  |
| 3 | 83 | Below Normal Priority (0x4000) | `Set Application to Below Normal Priority` |  |  | — |  |
| 4 | 84 | Idle Priority (0x40) | `Set Application to Idle Priority` |  |  | — |  |
| 5 | 85 | Set Priority from Expression | `Set Application Priority to <p0>` |  | expression numérique « Priority » | — |  |
| 6 | 86 | RealTime Priority (CAUTION!) (0x100) | `Set Application to RealTime Priority` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Priority | `GetPriority(` |  |  | — |  |
| 1 | 81 | Get High Priority Value | `GetHighPriority(` |  |  | — |  |
| 2 | 82 | Get Above Normal Priority Value | `GetAboveNormalPriority(` |  |  | — |  |
| 3 | 83 | Get Normal Priority Value | `GetNormalPriority(` |  |  | — |  |
| 4 | 84 | Get Below Normal Priority Value | `GetBelowNormalPriority(` |  |  | — |  |
| 5 | 85 | Get Idle Priority Value | `GetIdlePriority(` |  |  | — |  |
| 6 | 86 | Get RealTime Priority Value | `GetRealTimePriority(` |  |  | — |  |
