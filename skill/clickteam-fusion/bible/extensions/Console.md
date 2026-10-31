# Extension Console

- Fichier : `Console.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Console > Console is open | `<objet> : Console is open` |  |  | — |  |
| 1 | -82 | Input > Character read | `<objet>: Character read` |  |  | — |  |
| 2 | -83 | Input > String read | `<objet>: String read` |  |  | — |  |
| 3 | -84 | Input > Number read | `<objet>: Number read` |  |  | — |  |
| 4 | -85 | Events > Key down | `<objet>: Key down` |  |  | — |  |
| 5 | -86 | Events > Key up | `<objet>: Key up` |  |  | — |  |
| 6 | -87 | Events > Mouse moved | `<objet>: Mouse moved` |  |  | — |  |
| 7 | -88 | Events > Mouse wheeled | `<objet>: Mouse wheeled` |  |  | — |  |
| 8 | -89 | Events > Mouse left down | `<objet>: Mouse left down` |  |  | — |  |
| 9 | -90 | Events > Mouse middle down | `<objet>: Mouse middle down` |  |  | — |  |
| 10 | -91 | Events > Mouse right down | `<objet>: Mouse right down` |  |  | — |  |
| 11 | -92 | Events > Window resized | `<objet>: Window resized` |  |  | — |  |
| 12 | -93 | Pipe > Application ended | `<objet>: Pipe application ended` |  |  | — |  |
| 13 | -94 | Events > Mouse state changed | `<objet>: Mouse state changed` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Console > Open | `Open` |  |  | — |  |
| 1 | 81 | Console > Close | `Close` |  |  | — |  |
| 2 | 82 | Settings > Set title | `Set title to <p0>` |  | expression chaîne « New title » | — |  |
| 3 | 83 | Settings > Set window dimensions | `Set window dimensions to <p0>, <p1>` |  | expression numérique « New width » ; expression numérique « New height » | — |  |
| 4 | 84 | Settings > Set buffer dimensions | `Set buffer dimensions to <p0>, <p1>` |  | expression numérique « New width » ; expression numérique « New height » | — |  |
| 5 | 85 | Settings > Set cursor position | `Set cursor position to <p0> , <p1>` |  | expression numérique « New X position » ; expression numérique « New Y position » | — |  |
| 6 | 86 | Settings > Set output colours | `Set output colours to <p0> and <p1>` |  | expression numérique « Background colour (0-15) » ; expression numérique « Foreground colour (0-15) » | — |  |
| 7 | 87 | Input > Read character | `Read character` |  |  | — |  |
| 8 | 88 | Input > Read string | `Read string` |  |  | — |  |
| 9 | 89 | Input > Read number | `Read number` |  |  | — |  |
| 10 | 90 | Output > Clear | `Clear` |  |  | — |  |
| 11 | 91 | Output > Write string | `Write string <p0>` |  | expression chaîne « String to write » | — |  |
| 12 | 92 | Output > Write number | `Write number <p0>` |  | expression numérique « Number to write » | — |  |
| 13 | 93 | Output > Write string with escape sequences | `Write string <p0> with escape sequences` |  | expression chaîne « String to write » | — |  |
| 14 | 94 | Output > Write ASCII character | `Write ASCII character <p0>` |  | expression numérique « ASCII index of character to write » | — |  |
| 15 | 95 | Output > Write newline | `Write newline` |  |  | — |  |
| 16 | 96 | Pipe > Run application in it's own console | `Run <p0> <p1> in it's own console with environment variables <p2> (using delimiter <p3>)` |  | nom de fichier « Application to run » ; expression chaîne « Arguments » ; expression chaîne « Environment variables (seperated by delimiter of your choice, delimiter is next parameter, end with delimiter) » ; expression chaîne « Environment variable delimiter (single character) » | — |  |
| 17 | 97 | Pipe > Run application without a console | `Run <p0> <p1> without a console with environment variables <p2> (using delimiter <p3>)` |  | nom de fichier « Application to run » ; expression chaîne « Arguments » ; expression chaîne « Environment variables (seperated by delimiter of your choice, delimiter is next parameter, end with delimiter) » ; expression chaîne « Environment variable delimiter (single character) » | — |  |
| 18 | 98 | Settings > Hide cursor | `Hide cursor` |  |  | — |  |
| 19 | 99 | Settings > Show cursor | `Show cursor` |  |  | — |  |
| 20 | 100 | Input > Set character to read until | `Set character to read until to <p0>` |  | expression chaîne « New character » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Input > Get character read | `CharacterRead(` |  |  | — |  |
| 1 | 81 | Input > Get string read | `StringRead$(` |  | → chaîne | — |  |
| 2 | 82 | Input > Get number read | `NumberRead(` |  |  | — |  |
| 3 | 83 | Settings > Get cursor X position | `CursorX(` |  |  | — |  |
| 4 | 84 | Settings > Get cursor Y position | `CursorY(` |  |  | — |  |
| 5 | 85 | Events > Get repeat count for key down | `KeyDownRepeatCount(` |  |  | — |  |
| 6 | 86 | Events > Get ASCII value for key up/down | `KeyUpDownASCII(` |  |  | — |  |
| 7 | 87 | Events > Get mouse X position for mouse events | `MouseX(` |  |  | — |  |
| 8 | 88 | Events > Get mouse Y position for mouse events | `MouseY(` |  |  | — |  |
| 9 | 89 | Events > Get window width for window resize | `ResizeWindowWidth(` |  |  | — |  |
| 10 | 90 | Events > Get window height for window resize | `ResizeWindowHeight(` |  |  | — |  |
| 11 | 91 | Pipe > Get output | `PipeOutput$(` |  | → chaîne | — |  |
