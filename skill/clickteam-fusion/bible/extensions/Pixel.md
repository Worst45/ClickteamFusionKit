# Extension Pixel

- Fichier : `Pixel.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare Color | `<objet> : When pixel at <p0> , <p1> is equal to <p2>` |  | expression numérique « X Position » ; expression numérique « Y Position » ; couleur « Color » | — |  |
| 1 | -82 | Compare Red | `<objet> : When selected pixel's Red <p0>` |  | comparaison numérique « Red » | — |  |
| 2 | -83 | Compare Green | `<objet> : When selected pixel's Green <p0>` |  | comparaison numérique « Green » | — |  |
| 3 | -84 | Compare Blue | `<objet> : When selected pixel's Blue <p0>` |  | comparaison numérique « Blue » | — |  |
| 4 | -85 | Select pixel to compare (Only in compare R/G/B) | `<objet>: The pixel to compare is <p0> , <p1>` |  | expression numérique « X Position » ; expression numérique « Y Position » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Pixel | `Set Pixel at <p0> , <p1> to <p2>` |  | expression numérique « X Position » ; expression numérique « Y Position » ; couleur « Color » | — |  |
| 1 | 81 | Set Red | `Set Red at <p0> , <p1> to <p2>` |  | expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Red » | — |  |
| 2 | 82 | Set Green | `Set Green at <p0> , <p1> to <p2>` |  | expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Green » | — |  |
| 3 | 83 | Set Blue | `Set Blue at <p0> , <p1> to <p2>` |  | expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Blue » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get color at | `GetPixel(` |  | nombre « X » ; nombre « Y » | — |  |
| 1 | 81 | Get Red at | `GetRedAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 2 | 82 | Get Green at | `GetGreenAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 3 | 83 | Get Blue at | `GetBlueAt(` |  | nombre « X » ; nombre « Y » | — |  |
