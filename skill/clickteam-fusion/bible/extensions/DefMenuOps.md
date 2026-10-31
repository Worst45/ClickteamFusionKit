# Extension DefMenuOps

- Fichier : `DefMenuOps.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Are Samples On? | `<objet>: Samples are On` |  |  | — |  |
| 1 | -82 | Are Samples in a Particular State? | `<objet>: Samples are in State <p0>` |  | expression numérique « Enter the state (0 = off; 1 = on) » | — |  |
| 2 | -83 | Is Music On? | `<objet>: Music is On` |  |  | — |  |
| 3 | -84 | Is Music in a Particular State? | `<objet>: Music is in State <p0>` |  | expression numérique « Enter the state (0 = off; 1 = on) » | — |  |
| 4 | -85 | Is the Menu Hidden? | `<objet>: Menu is Hidden` |  |  | — |  |
| 5 | -86 | Is the Menu in a Particular State? | `<objet>: Menu is in State <p0>` |  | expression numérique « Enter the state (0 = off; 1 = on) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File > New | `File->New` |  |  | — |  |
| 1 | 81 | File > Password | `File->Password` |  |  | — |  |
| 2 | 82 | File > Pause | `File->Pause` |  |  | — |  |
| 3 | 83 | File > Players | `File->Players` |  |  | — |  |
| 4 | 84 | File > Quit | `File->Quit` |  |  | — |  |
| 5 | 85 | Options > Play samples > Toggle Samples | `Options->Play samples (Toggle Samples)` |  |  | — |  |
| 6 | 86 | Options > Play samples > Set Samples On | `Options->Play samples (Set Samples On)` |  |  | — |  |
| 7 | 87 | Options > Play samples > Set Samples Off | `Options->Play samples (Set Samples Off)` |  |  | — |  |
| 8 | 88 | Options > Play samples > Set Samples State | `Options->Play samples (Set Samples to <p0>)` |  | expression numérique « Enter the state (0 = off; 1 = on) » | — |  |
| 9 | 89 | Options > Play musics > Toggle Music | `Options->Play musics (Toggle Music)` |  |  | — |  |
| 10 | 90 | Options > Play musics > Set Music On | `Options->Play musics (Set Music On)` |  |  | — |  |
| 11 | 91 | Options > Play musics > Set Music Off | `Options->Play musics (Set Music Off)` |  |  | — |  |
| 12 | 92 | Options > Play musics > Set Music State | `Options->Play musics (Set Music to <p0>)` |  | expression numérique « Enter the state (0 = off; 1 = on) » | — |  |
| 13 | 93 | Options > Hide the menu > Toggle Menu Visibility | `Options->Hide the menu (Toggle Menu Visibility)` |  |  | — |  |
| 14 | 94 | Options > Hide the menu > Hide Menu | `Options->Hide the menu (Hide Menu)` |  |  | — |  |
| 15 | 95 | Options > Hide the menu > Show Menu | `Options->Hide the menu (Show Menu)` |  |  | — |  |
| 16 | 96 | Options > Hide the menu > Set Menu Visibility | `Options->Hide the menu (Set Hide Menu to <p0>)` |  | expression numérique « Enter the state (0 = off; 1 = on) » | — |  |
| 17 | 97 | Help > Contents | `Help->Contents` |  |  | — |  |
| 18 | 98 | Help > About... | `Help->About...` |  |  | — |  |
| 19 | 99 | Options > Full Screen | `Options->Full Screen` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | State of Samples | `SamplesState(` |  |  | — |  |
| 1 | 81 | State of Music | `MusicState(` |  |  | — |  |
| 2 | 82 | State of Menu | `MenuState(` |  |  | — |  |
