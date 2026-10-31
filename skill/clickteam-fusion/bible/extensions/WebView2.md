# Extension WebView2

- Fichier : `WebView2.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Load complete | `<objet>: On Load complete` |  |  | — |  |
| 1 | -82 | On Status Change | `<objet>: On Status Change` |  |  | — |  |
| 2 | -83 | Started loading | `<objet>: Started Loading?` |  |  | — |  |
| 3 | -84 | On Navigate | `<objet>: On Navigate` |  |  | — |  |
| 4 | -85 | On Click | `<objet>: On Click` |  |  | — |  |
| 5 | -86 | On Error | `<objet>: On Error` |  |  | — |  |
| 6 | -87 | On Progress | `<objet>: On Progress` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load URL | `Load URL=<p0>` |  | expression chaîne « URL string » | — |  |
| 1 | 81 | Load HTML | `Load HTML=<p0>` |  | expression chaîne « HTML  string » | — |  |
| 2 | 82 | Navigation > Go Forward | `Go Forward` |  |  | — |  |
| 3 | 83 | Navigation > Go Back | `Go Back` |  |  | — |  |
| 4 | 84 | Navigation > Stop | `Stop` |  |  | — |  |
| 5 | 85 | Navigation > Refresh | `Refresh` |  |  | — |  |
| 6 | 86 | Javascript > Execute Snippet | `Execute Snippet=<p0> with Arguments=<p1>` |  | expression chaîne « Function or Procedure name » ; expression chaîne « Arguments string separated by comma, example: 1.23,'hello' » | — |  |
| 9 | 89 | Size/Control > Hide Web | `Hide Web` |  |  | — |  |
| 10 | 90 | Size/Control > Show Web | `Show Web` |  |  | — |  |
| 11 | 91 | Size/Control > Set X Position | `Set X position to <p0>` |  | expression numérique « Set X Position » | — |  |
| 12 | 92 | Size/Control > Set Y Position | `Set Y position to <p0>` |  | expression numérique « Set Y Position » | — |  |
| 13 | 93 | Size/Control > Set Horizontal Size | `Set Horizontal size to <p0>` |  | expression numérique « Set Horizontal size » | — |  |
| 14 | 94 | Size/Control > Set Vertical Size | `Set Vertical size to <p0>` |  | expression numérique « Set Vertical size » | — |  |
| 15 | 95 | Special Control > Resize to Fit | `Resize HTML to fit=<p0>` |  | expression numérique « Values (1: Enabled, 0: Disabled) » | — |  |
| 16 | 96 | Special Control > Set inline HTML5 playback | `Allow inline playback of HTML5 media?=<p0>` |  | expression numérique « Values (1: Enabled, 0: Disabled) » | — |  |
| 17 | 97 | Special Features > Load local document | `Load local HTML=<p0>, with MIME-type: <p1> and directory: <p2>` |  | expression chaîne « HTML String » ; expression chaîne « Type/Mime String (exam: txt/html, text/plain) » ; expression chaîne « Directory String (optional) » | — |  |
| 18 | 98 | Scroll > Scroll to Top | `Scroll to Top` |  |  | — |  |
| 19 | 99 | Scroll > Scroll to End | `Scroll to End` |  |  | — |  |
| 20 | 100 | Scroll > Scroll to X, Y position | `Scroll to X=<p0>, Y=<p1>` |  | expression numérique « Set X Position » ; expression numérique « Set Y Position » | — |  |
| 21 | 101 | Set Optical Zoom | `Set Optical Zoom <p0>` |  | expression numérique « Set Zoom Level (0.10 .... 4.00) » | — |  |
| 22 | 102 | Grab Image | `Grab Image to filename <p0>` |  | expression chaîne « Filename string with extension (.jpg, .png, bmp allowed) » | — |  |
| 23 | 103 | Insert HTML Code | `InsertHTML to ElemId=<p0> at=<p1> with=<p2>` |  | expression numérique « Element ID, ejem: HTML=1 » ; expression numérique « Where to Insert(0:beforeBegin, 1:afterBegin 2: beforeEnd 3:afterEnd) » ; expression chaîne « HTML code to insert » | — |  |
| 24 | 104 | Navigation > Mode | `Navigation mode=<p0>` |  | expression numérique « Navigation Mode(0: Default, 1: Internal) » | — |  |
| 25 | 105 | Special Control > Set User Agent | `Set User-Agent to <p0>` |  | expression chaîne « User Agent String » | — |  |
| 26 | 106 | Download URL to file | `Download File <p0>, to dir <p1> with name <p2>` |  | expression chaîne « URL to download » ; expression chaîne « Destination Dir » ; expression chaîne « File name » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Error Value | `GetErrorVal(` |  |  | — |  |
| 1 | 81 | Get Status String | `GetStatusStr$(` |  | → chaîne | — |  |
| 2 | 82 | Get Current URL | `GetCurrentURL$(` |  | → chaîne | — |  |
| 3 | 83 | Get Navigate URL | `GetNavigateURL$(` |  | → chaîne | — |  |
| 4 | 84 | Get Clicked link | `GetLastClicked$(` |  | → chaîne | — |  |
| 5 | 85 | Get HTML Source | `GetHTMLSource$(` |  | → chaîne | — |  |
| 7 | 87 | Javascript > Call Function and return int | `CallFunctionInt(` |  | chaîne « Function Name » ; chaîne « Argument String » | — |  |
| 8 | 88 | Javascript > Call Function and return float | `CallFunctionFloat(` |  | chaîne « Function Name » ; chaîne « Argument String » | — |  |
| 9 | 89 | Javascript > Call Function and return string | `CallFunctionStr$(` |  | chaîne « Function Name » ; chaîne « Argument String » → chaîne | — |  |
| 10 | 90 | Get Web page width | `GetPageWidth(` |  |  | — |  |
| 11 | 91 | Get Web page height | `GetPageHeight(` |  |  | — |  |
| 12 | 92 | Get Web optical zoom | `GetOpticalZoom(` |  |  | — |  |
| 13 | 93 | Get Form item | `GetFormItem$(` |  | chaîne « tag name » → chaîne | — |  |
| 14 | 94 | Get Html-Tag Id | `GetTagId(` |  | chaîne « Tag Name » | — |  |
| 15 | 95 | DOM Elements > Get Inner text by Id | `GetInnerTextbyId$(` |  | chaîne « id_name » ; chaîne « Tag_name » ; nombre « Index » → chaîne | — |  |
| 16 | 96 | DOM Elements > Get Inner text by Classname | `GetInnerTextbyClass$(` |  | chaîne « class_name » ; chaîne « Tag_name » ; nombre « Index » → chaîne | — |  |
| 17 | 97 | Get Web Progress | `WebProgress(` |  |  | — |  |
| 18 | 98 | Get User Agent | `GetUserAgent$(` |  | → chaîne | — |  |
