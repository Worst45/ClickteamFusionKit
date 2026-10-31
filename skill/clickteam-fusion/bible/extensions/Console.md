# Extension Console

- File: `Console.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Console > Console is open | `<object> : Console is open` |  |  | — |  |
| 1 | -82 | Input > Character read | `<object>: Character read` |  |  | — |  |
| 2 | -83 | Input > String read | `<object>: String read` |  |  | — |  |
| 3 | -84 | Input > Number read | `<object>: Number read` |  |  | — |  |
| 4 | -85 | Events > Key down | `<object>: Key down` |  |  | — |  |
| 5 | -86 | Events > Key up | `<object>: Key up` |  |  | — |  |
| 6 | -87 | Events > Mouse moved | `<object>: Mouse moved` |  |  | — |  |
| 7 | -88 | Events > Mouse wheeled | `<object>: Mouse wheeled` |  |  | — |  |
| 8 | -89 | Events > Mouse left down | `<object>: Mouse left down` |  |  | — |  |
| 9 | -90 | Events > Mouse middle down | `<object>: Mouse middle down` |  |  | — |  |
| 10 | -91 | Events > Mouse right down | `<object>: Mouse right down` |  |  | — |  |
| 11 | -92 | Events > Window resized | `<object>: Window resized` |  |  | — |  |
| 12 | -93 | Pipe > Application ended | `<object>: Pipe application ended` |  |  | — |  |
| 13 | -94 | Events > Mouse state changed | `<object>: Mouse state changed` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Console > Open | `Open` |  |  | — |  |
| 1 | 81 | Console > Close | `Close` |  |  | — |  |
| 2 | 82 | Settings > Set title | `Set title to <p0>` |  | string expression “New title” | — |  |
| 3 | 83 | Settings > Set window dimensions | `Set window dimensions to <p0>, <p1>` |  | numeric expression “New width”; numeric expression “New height” | — |  |
| 4 | 84 | Settings > Set buffer dimensions | `Set buffer dimensions to <p0>, <p1>` |  | numeric expression “New width”; numeric expression “New height” | — |  |
| 5 | 85 | Settings > Set cursor position | `Set cursor position to <p0> , <p1>` |  | numeric expression “New X position”; numeric expression “New Y position” | — |  |
| 6 | 86 | Settings > Set output colours | `Set output colours to <p0> and <p1>` |  | numeric expression “Background colour (0-15)”; numeric expression “Foreground colour (0-15)” | — |  |
| 7 | 87 | Input > Read character | `Read character` |  |  | — |  |
| 8 | 88 | Input > Read string | `Read string` |  |  | — |  |
| 9 | 89 | Input > Read number | `Read number` |  |  | — |  |
| 10 | 90 | Output > Clear | `Clear` |  |  | — |  |
| 11 | 91 | Output > Write string | `Write string <p0>` |  | string expression “String to write” | — |  |
| 12 | 92 | Output > Write number | `Write number <p0>` |  | numeric expression “Number to write” | — |  |
| 13 | 93 | Output > Write string with escape sequences | `Write string <p0> with escape sequences` |  | string expression “String to write” | — |  |
| 14 | 94 | Output > Write ASCII character | `Write ASCII character <p0>` |  | numeric expression “ASCII index of character to write” | — |  |
| 15 | 95 | Output > Write newline | `Write newline` |  |  | — |  |
| 16 | 96 | Pipe > Run application in it's own console | `Run <p0> <p1> in it's own console with environment variables <p2> (using delimiter <p3>)` |  | file name “Application to run”; string expression “Arguments”; string expression “Environment variables (seperated by delimiter of your choice, delimiter is next parameter, end with delimiter)”; string expression “Environment variable delimiter (single character)” | — |  |
| 17 | 97 | Pipe > Run application without a console | `Run <p0> <p1> without a console with environment variables <p2> (using delimiter <p3>)` |  | file name “Application to run”; string expression “Arguments”; string expression “Environment variables (seperated by delimiter of your choice, delimiter is next parameter, end with delimiter)”; string expression “Environment variable delimiter (single character)” | — |  |
| 18 | 98 | Settings > Hide cursor | `Hide cursor` |  |  | — |  |
| 19 | 99 | Settings > Show cursor | `Show cursor` |  |  | — |  |
| 20 | 100 | Input > Set character to read until | `Set character to read until to <p0>` |  | string expression “New character” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Input > Get character read | `CharacterRead(` |  |  | — |  |
| 1 | 81 | Input > Get string read | `StringRead$(` |  | → string | — |  |
| 2 | 82 | Input > Get number read | `NumberRead(` |  |  | — |  |
| 3 | 83 | Settings > Get cursor X position | `CursorX(` |  |  | — |  |
| 4 | 84 | Settings > Get cursor Y position | `CursorY(` |  |  | — |  |
| 5 | 85 | Events > Get repeat count for key down | `KeyDownRepeatCount(` |  |  | — |  |
| 6 | 86 | Events > Get ASCII value for key up/down | `KeyUpDownASCII(` |  |  | — |  |
| 7 | 87 | Events > Get mouse X position for mouse events | `MouseX(` |  |  | — |  |
| 8 | 88 | Events > Get mouse Y position for mouse events | `MouseY(` |  |  | — |  |
| 9 | 89 | Events > Get window width for window resize | `ResizeWindowWidth(` |  |  | — |  |
| 10 | 90 | Events > Get window height for window resize | `ResizeWindowHeight(` |  |  | — |  |
| 11 | 91 | Pipe > Get output | `PipeOutput$(` |  | → string | — |  |
