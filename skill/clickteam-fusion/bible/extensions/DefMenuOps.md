# Extension DefMenuOps

- File: `DefMenuOps.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Are Samples On? | `<object>: Samples are On` |  |  |
| 1 | -82 | Are Samples in a Particular State? | `<object>: Samples are in State <p0>` |  | numeric expression “Enter the state (0 = off; 1 = on)” |
| 2 | -83 | Is Music On? | `<object>: Music is On` |  |  |
| 3 | -84 | Is Music in a Particular State? | `<object>: Music is in State <p0>` |  | numeric expression “Enter the state (0 = off; 1 = on)” |
| 4 | -85 | Is the Menu Hidden? | `<object>: Menu is Hidden` |  |  |
| 5 | -86 | Is the Menu in a Particular State? | `<object>: Menu is in State <p0>` |  | numeric expression “Enter the state (0 = off; 1 = on)” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | File > New | `File->New` |  |  |
| 1 | 81 | File > Password | `File->Password` |  |  |
| 2 | 82 | File > Pause | `File->Pause` |  |  |
| 3 | 83 | File > Players | `File->Players` |  |  |
| 4 | 84 | File > Quit | `File->Quit` |  |  |
| 5 | 85 | Options > Play samples > Toggle Samples | `Options->Play samples (Toggle Samples)` |  |  |
| 6 | 86 | Options > Play samples > Set Samples On | `Options->Play samples (Set Samples On)` |  |  |
| 7 | 87 | Options > Play samples > Set Samples Off | `Options->Play samples (Set Samples Off)` |  |  |
| 8 | 88 | Options > Play samples > Set Samples State | `Options->Play samples (Set Samples to <p0>)` |  | numeric expression “Enter the state (0 = off; 1 = on)” |
| 9 | 89 | Options > Play musics > Toggle Music | `Options->Play musics (Toggle Music)` |  |  |
| 10 | 90 | Options > Play musics > Set Music On | `Options->Play musics (Set Music On)` |  |  |
| 11 | 91 | Options > Play musics > Set Music Off | `Options->Play musics (Set Music Off)` |  |  |
| 12 | 92 | Options > Play musics > Set Music State | `Options->Play musics (Set Music to <p0>)` |  | numeric expression “Enter the state (0 = off; 1 = on)” |
| 13 | 93 | Options > Hide the menu > Toggle Menu Visibility | `Options->Hide the menu (Toggle Menu Visibility)` |  |  |
| 14 | 94 | Options > Hide the menu > Hide Menu | `Options->Hide the menu (Hide Menu)` |  |  |
| 15 | 95 | Options > Hide the menu > Show Menu | `Options->Hide the menu (Show Menu)` |  |  |
| 16 | 96 | Options > Hide the menu > Set Menu Visibility | `Options->Hide the menu (Set Hide Menu to <p0>)` |  | numeric expression “Enter the state (0 = off; 1 = on)” |
| 17 | 97 | Help > Contents | `Help->Contents` |  |  |
| 18 | 98 | Help > About... | `Help->About...` |  |  |
| 19 | 99 | Options > Full Screen | `Options->Full Screen` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | State of Samples | `SamplesState(` |  |  |
| 1 | 81 | State of Music | `MusicState(` |  |  |
| 2 | 82 | State of Menu | `MenuState(` |  |  |
