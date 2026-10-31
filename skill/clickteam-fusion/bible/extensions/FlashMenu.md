# Extension FlashMenu

- Fichier : `FlashMenu.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Menu Item Clicked | `<objet> Menu Item Clicked (<p0>)` |  | expression chaîne « Menu Item Text » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Default Menu Items > Forward and Back | `Default Item (Forward and Back) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 1 | 81 | Default Menu Items > Rewind | `Default Item (Rewind) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 2 | 82 | Default Menu Items > Play | `Default Item (Play) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 3 | 83 | Default Menu Items > Loop | `Default Item (Loop) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 4 | 84 | Default Menu Items > Print | `Default Item (Print) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 5 | 85 | Default Menu Items > Quality | `Default Item (Quality) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 6 | 86 | Default Menu Items > Save | `Default Item (Save) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 7 | 87 | Default Menu Items > Zoom | `Default Item (Zoom) - (<p0>)` |  | expression numérique « Hide or Show - (0 = Hide, 1 = Show) » | — |  |
| 8 | 88 | Default Menu Items > Hide All | `Default Items - Hide All` |  |  | — |  |
| 9 | 89 | Default Menu Items > Show All | `Default Items - Show All` |  |  | — |  |
| 10 | 90 | Add New Menu Item | `Add New Menu Item (<p0>), State (<p1>), Separator (<p2>)` |  | expression chaîne « Menu Item Text » ; expression numérique « Menu Item State - (0 = Disabled, 1 = Enabled) » ; expression numérique « Menu Item - Add Separator Before? - (0 = No, 1 = Yes) » | — |  |
| 11 | 91 | Show New Menu | `Show New Menu` |  |  | — |  |
