# Extension trackbar

- Fichier : `trackbar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is visible? | `Is <objet> visible` |  |  | — |  |
| 1 | -82 | Is enabled? | `Is <objet> enabled` |  |  | — |  |
| 2 | -83 | Has input focus? | `<objet> has input focus` |  |  | — |  |
| 3 | -84 | Value changed? | `<objet> value has changed` |  |  | — |  |
| 6 | -87 | Thumb released? | `<objet> thumb Released` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Visibility > Make object reappear | `Reappear` |  |  | — |  |
| 1 | 81 | Visibility > Make object invisible | `Invisible` |  |  | — |  |
| 2 | 82 | Enable > On | `Enabled` |  |  | — |  |
| 3 | 83 | Enable > Off | `Disabled` |  |  | — |  |
| 5 | 85 | Position > Set horizontal position | `Set x <p0>` |  | expression numérique « Set x %0 » | — |  |
| 6 | 86 | Position > Set vertical position | `Set y <p0>` |  | expression numérique « Set y %0 » | — |  |
| 8 | 88 | Size > Set horizontal size | `Set x size <p0>` |  | expression numérique « Set x size %0 » | — |  |
| 9 | 89 | Size > Set vertical size | `Set y size <p0>` |  | expression numérique « Set y size %0 » | — |  |
| 10 | 90 | Focus > On | `Focus on` |  |  | — |  |
| 11 | 91 | Focus > Off | `Focus off` |  |  | — |  |
| 12 | 92 | Selection > Set starting position | `Selection: set starting position <p0>` |  | expression numérique « Selection: set starting position %0 » | — |  |
| 13 | 93 | Selection > Set ending position | `Selection: set ending position <p0>` |  | expression numérique « Selection: set ending position %0 » | — |  |
| 14 | 94 | Selection > Clear selection | `Selection: clear` |  |  | — |  |
| 15 | 95 | Set thumb position | `Set thumb position: <p0>` |  | expression numérique « Set thumb position: %0 » | — |  |
| 16 | 96 | Set range... | `Set range <p0> to <p1>` |  | expression numérique « Set range » ; expression numérique « Set range » | — |  |
| 17 | 97 | Colour > Use system colours | `Use systemcolours` |  |  | — |  |
| 18 | 98 | Colour > Choose colour | `Colour: <p0>` |  | couleur « Colour: %0 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current value | `value(` |  |  | — |  |
| 1 | 81 | Size > Get horizontal size | `sizex(` |  |  | — |  |
| 2 | 82 | Size > Get vertical size | `sizey(` |  |  | — |  |
| 3 | 83 | Position > Get X | `⡸` |  |  | — |  |
| 4 | 84 | Position > Get Y | `⡹` |  |  | — |  |
