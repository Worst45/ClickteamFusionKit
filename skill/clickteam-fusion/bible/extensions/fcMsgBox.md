# Extension fcMsgBox

- Fichier : `fcMsgBox.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « MessageBox object »
- Usage dans le corpus : 18 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Events > On Abort | `<objet>: (ID <p0>) On Abort` |  | expression numérique « Message Box ID » | — |  |
| 1 | -82 | Events > On Cancel | `<objet>: (ID <p0>) On Cancel` |  | expression numérique « Message Box ID » | — |  |
| 2 | -83 | Events > On Continue | `<objet>: (ID <p0>) On Continue` |  | expression numérique « Message Box ID » | — |  |
| 3 | -84 | Events > On Ignore | `<objet>: (ID <p0>) On Ignore` |  | expression numérique « Message Box ID » | — |  |
| 4 | -85 | Events > On No | `<objet>: (ID <p0>) On No` |  | expression numérique « Message Box ID » | — |  |
| 5 | -86 | Events > On OK | `<objet>: (ID <p0>) On OK` |  | expression numérique « Message Box ID » | — |  |
| 6 | -87 | Events > On Retry | `<objet>: (ID <p0>) On Retry` |  | expression numérique « Message Box ID » | — |  |
| 7 | -88 | Events > On Try Again | `<objet>: (ID <p0>) On Try Again` |  | expression numérique « Message Box ID » | — |  |
| 8 | -89 | Events > On Yes | `<objet>: (ID <p0>) On Yes` |  | expression numérique « Message Box ID » | 3 (1 proj.) |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Text > Set title | `Set title to <p0>` |  | expression chaîne « Message Box title » | 3 (1 proj.) |  |
| 1 | 81 | Text > Set text | `Set text to <p0>` |  | expression chaîne « Message Box text » | 3 (1 proj.) |  |
| 3 | 83 | Do > Message box with delayed answer | `Do message box (ID <p0>) with delayed answer` |  | expression numérique « Enter an ID for this message box » | 3 (1 proj.) |  |
| 7 | 87 | Buttons > [ OK ] | `Set buttons to [ OK ]` |  |  | — |  |
| 8 | 88 | Buttons > [ OK ] [ Cancel ] | `Set buttons to [ OK ] [ Cancel ]` |  |  | — |  |
| 9 | 89 | Buttons > [ Yes ] [ No ] | `Set buttons to [ Yes ] [ No ]` |  |  | 3 (1 proj.) |  |
| 10 | 90 | Buttons > [ Yes ] [ No ] [ Cancel ] | `Set buttons to [ Yes ] [ No ] [ Cancel ]` |  |  | — |  |
| 11 | 91 | Buttons > [ Retry ] [ Cancel ] | `Set buttons to [ Retry ] [ Cancel ]` |  |  | — |  |
| 12 | 92 | Buttons > [ Abort ] [ Retry ] [ Ignore ] | `Set buttons to [ Abort ] [ Retry ] [ Ignore ]` |  |  | — |  |
| 13 | 93 | Buttons > [ Cancel ] [ Try again ] [ Continue ] | `Set buttons to [ Cancel ] [ Try again ] [ Continue ]` |  |  | — |  |
| 14 | 94 | Icon > Exclamation | `Use exclamation icon` |  |  | — |  |
| 15 | 95 | Icon > Warning | `Use warning icon` |  |  | 3 (1 proj.) |  |
| 16 | 96 | Icon > Information | `Use information icon` |  |  | — |  |
| 17 | 97 | Icon > Asterisk | `Use asterisk icon` |  |  | — |  |
| 18 | 98 | Icon > Question | `Use question icon` |  |  | — |  |
| 19 | 99 | Icon > Stop | `Use stop icon` |  |  | — |  |
| 20 | 100 | Icon > Error | `Use error icon` |  |  | — |  |
| 21 | 101 | Icon > Hand | `Use hand icon` |  |  | — |  |
| 22 | 102 | Buttons > Set default button number | `Set default button number to <p0>` |  | expression numérique « Default button number (1-4) » | — |  |
| 23 | 103 | Options > Set to System Modal | `Set message box to system modal` |  |  | — |  |
| 24 | 104 | Options > Set to Task Modal | `Set message box to task modal` |  |  | — |  |
| 25 | 105 | Text > Right-justified | `Set text to be right aligned` |  |  | — |  |
| 26 | 106 | Text > Right to left reading | `Set text to be read right to left` |  |  | — |  |
| 27 | 107 | Options > Set to Foreground | `Set message box to the foreground` |  |  | — |  |
| 28 | 108 | Options > Set to Topmost | `Set message box to be always at the top of other windows` |  |  | — |  |
| 31 | 111 | Parent window > Use None | `Set message box without parent window` |  |  | — |  |
| 32 | 112 | Parent window > Use Current | `Set message box parent window to current window` |  |  | — |  |
| 33 | 113 | Reset settings | `Reset settings of message box` |  |  | — |  |
| 34 | 114 | Icon > None | `Don't use icon` |  |  | — |  |
| 35 | 115 | Do > Message box with instant answer | `Do message box (ID <p0>) with instant answer` |  | expression numérique « Enter an ID for this message box » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get last message box ID | `getLastMessageBoxID(` |  |  | — |  |
| 1 | 81 | Get last message box title | `getLastMessageBoxTitle$(` |  | → chaîne | — |  |
| 2 | 82 | Get last message box text | `getLastMessageBoxText$(` |  | → chaîne | — |  |
| 3 | 83 | Get last message box button ID | `getLastMessageBoxButtonID(` |  |  | — |  |
| 4 | 84 | Get Application Name | `getAppName$(` |  | → chaîne | — |  |
| 5 | 85 | Get Application About text | `getAppAbout$(` |  | → chaîne | — |  |
