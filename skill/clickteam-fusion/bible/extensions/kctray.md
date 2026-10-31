# Extension kctray

- Fichier : `kctray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Tray Icon Object Conditions | `Never-you-mind.` |  | (paramètres non fiables) | — |  |
| 1 | -82 | User clicks on tray icon... | `<objet>: User <p0> on tray icon.` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Tray Icon Object Actions | `Does nothing.` |  |  | — |  |
| 1 | 81 | Icon > Change Icon Image | `Change Icon to <p0>.` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Tool Tip > Change Tool Tip | `Change Tool Tip to <p0>.` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Icon > Reset Icon Image | `Reset Icon.` |  |  | — |  |
| 4 | 84 | Tool Tip > Reset Tool Tip | `Reset Tool Tip.` |  |  | — |  |
| 5 | 85 | Window > Enable Auto-hide | `Enable Auto-hide mode.` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Window > Disable Auto-hide | `Disable Auto-hide mode.` |  |  | — |  |
| 7 | 87 | Window > Minimize/Hide Window | `Minimize/Hide window.` |  |  | — |  |
| 8 | 88 | Window > Restore/Show Window | `Restore/Show window.` |  |  | — |  |
| 9 | 89 | Window > Hide mode > Set minimize and hide mode. | `Set Minimize and Hide mode.` |  |  | — |  |
| 10 | 90 | Window > Hide mode > Set instant Hide mode. | `Set Instant Hide mode.` |  |  | — |  |
