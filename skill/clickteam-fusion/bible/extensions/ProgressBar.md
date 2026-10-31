# Extension ProgressBar

- Fichier : `ProgressBar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Cancel clicked | `<objet> : Cancel clicked` |  |  | — |  |
| 1 | -82 | Pause clicked | `<objet> : Pause clicked` |  |  | — |  |
| 2 | -83 | Resume clicked | `<objet> : Resume clicked` |  |  | — |  |
| 3 | -84 | Is Visible | `<objet> is visible` |  |  | — |  |
| 4 | -85 | Progress bar is full | `<objet> : Progress bar is full` |  |  | — |  |
| 5 | -86 | Progress bar is empty | `<objet> : Progress bar is empty` |  |  | — |  |
| 6 | -87 | Compare Value | `<objet> : Value is <p0>` |  | comparaison numérique « Compare the value of the progress bar... » | — |  |
| 7 | -88 | Progress bar clicked | `<objet> : Bar clicked with <p0>` |  | touche (code) « Which mouse button? » | — |  |
| 8 | -89 | Bar clicked then button released | `<objet> : Bar clicked then <p0> released` |  | touche (code) « Which mouse button? » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Visibility > Show | `<objet> : Show` |  |  | — |  |
| 1 | 81 | Visibility > Create Dialogue Box | `<objet> : Create Dialogue Box` |  |  | — |  |
| 2 | 82 | Visibility > Hide | `<objet> : Hide` |  |  | — |  |
| 3 | 83 | Dialogue Box > Centre in Screen | `<objet> : Dialogue Box : Centre in Screen` |  |  | — |  |
| 4 | 84 | Dialogue Box > Change Position | `<objet> : Dialogue Box : Change Position to (<p0> ,<p1> )` |  | expression numérique « X Position » ; expression numérique « Y Position » | — |  |
| 5 | 85 | Dialogue Box > Change Size | `<objet> : Dialogue Box : Change Size to (<p0> ,<p1> )` |  | expression numérique « X Size » ; expression numérique « Y Size » | — |  |
| 6 | 86 | Dialogue Box > Set Title | `<objet> : Dialogue Box : Set Title to <p0>` |  | expression chaîne « Enter a title for the dialogue box. » | — |  |
| 7 | 87 | Dialogue Box > Set Text above Progress Bar | `<objet> : Dialogue Box : Set Text 1 to <p0>` |  | expression chaîne « Enter text that will appear above the progress bar. » | — |  |
| 8 | 88 | Dialogue Box > Set Text below Progress Bar | `<objet> : Dialogue Box : Set Text 2 to <p0>` |  | expression chaîne « Enter text that will appear below the progress bar. » | — |  |
| 9 | 89 | Dialogue Box > Show/Hide Cancel button | `<objet> : Dialogue Box : Set Cancel visibility to <p0>` |  | expression numérique « 0 = hide button, anything else = show button » | — |  |
| 10 | 90 | Dialogue Box > Enable/Disable Cancel button | `<objet> : Dialogue Box : Set Cancel's enabled state to <p0>` |  | expression numérique « 0 = disable button, anything else = enable button » | — |  |
| 11 | 91 | Dialogue Box > Set Text for Cancel button | `<objet> : Dialogue Box : Set Text for Cancel button to <p0>` |  | expression chaîne « The text to display for the Cancel button » | — |  |
| 12 | 92 | Dialogue Box > Show/Hide Pause button | `<objet> : Dialogue Box : Set Pause visibility to <p0>` |  | expression numérique « 0 = hide button, anything else = show button » | — |  |
| 13 | 93 | Dialogue Box > Change state of Paused button | `<objet> : Dialogue Box : Change Pause State to <p0> (0=Resume,1=Pause)` |  | expression numérique « 0 = 'Resume' displayed, 1 = 'Pause' displayed » | — |  |
| 14 | 94 | Dialogue Box > Set Text for Pause button | `<objet> : Dialogue Box : Set Text for Pause button to <p0>` |  | expression chaîne « The text to display for the Pause button » | — |  |
| 15 | 95 | Dialogue Box > Set Text for Resume button | `<objet> : Dialogue Box : Set Text for Resume button to <p0>` |  | expression chaîne « The text to display for the Pause button » | — |  |
| 16 | 96 | Visual Options > Sectioned progress | `<objet> : Visual Options : Sectioned progress bar` |  |  | — |  |
| 17 | 97 | Visual Options > Smooth progress | `<objet> : Visual Options : Smooth progress bar` |  |  | — |  |
| 18 | 98 | Visual Options > Horizontal Bar | `<objet> : Visual Options : Horizontal Bar` |  |  | — |  |
| 19 | 99 | Visual Options > Vertical Bar | `<objet> : Visual Options : Vertical Bar` |  |  | — |  |
| 20 | 100 | Visual Options > Set Bar Colour | `<objet> : Visual Options : Set Bar Colour to <p0>` |  | couleur « Enter the colour of the bar » | — |  |
| 21 | 101 | Visual Options > Set Back Colour | `<objet> : Visual Options : Set Back Colour to <p0>` |  | couleur « Enter the colour of the background » | — |  |
| 22 | 102 | Visual Options > Thin Border | `<objet> : Visual Options : Thin Border` |  |  | — |  |
| 23 | 103 | Visual Options > Thick Border | `<objet> : Visual Options : Thick Border` |  |  | — |  |
| 24 | 104 | Set Range | `<objet> : Set Range from <p0> to <p1>` |  | expression numérique « Enter the start of the range » ; expression numérique « Enter the end of the range » | — |  |
| 25 | 105 | Set amount to Step | `<objet> : Set amount to Step to <p0>` |  | expression numérique « Set the amount to increase by when Stepping » | — |  |
| 26 | 106 | Set Position | `<objet> : Set Value to <p0>` |  | expression numérique « Set the value of the progress bar » | — |  |
| 27 | 107 | Step | `<objet> : Step Progress Bar` |  |  | — |  |
| 28 | 108 | Position  Size > Set Position | `<objet> : Set position in frame to (<p0> ,<p1> )` |  | expression numérique « X Position » ; expression numérique « Y Position » | — |  |
| 29 | 109 | Position  Size > Set Size | `<objet> : Set size to (<p0> ,<p1> )` |  | expression numérique « X Size » ; expression numérique « Y Size » | — |  |
| 30 | 110 | Visibility > Destroy Dialogue Box | `<objet> : Destroy Dialogue Box` |  |  | — |  |
| 31 | 111 | Visibility > Refresh Dialogue Box | `<objet> : Refresh Dialogue Box` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Maximum Value | `Maximum Value(` |  |  | — |  |
| 1 | 81 | Minimum Value | `Minimum Value(` |  |  | — |  |
| 2 | 82 | Amount to Step | `Step(` |  |  | — |  |
| 3 | 83 | Value | `Value(` |  |  | — |  |
| 4 | 84 | Position > X Position | `⡘` |  |  | — |  |
| 5 | 85 | Position > Y Position | `⡙` |  |  | — |  |
| 6 | 86 | Dimensions > X Size | `X Size(` |  |  | — |  |
| 7 | 87 | Dimensions > Y Size | `Y Size(` |  |  | — |  |
| 8 | 88 | Dialogue Box > Get Title | `Title$(` |  | → chaîne | — |  |
| 9 | 89 | Dialogue Box > Get First Text | `First Text$(` |  | → chaîne | — |  |
| 10 | 90 | Dialogue Box > Get Second Text | `Second Text$(` |  | → chaîne | — |  |
| 11 | 91 | Dialogue Box > Get Cancel Text | `Cancel Text$(` |  | → chaîne | — |  |
| 12 | 92 | Dialogue Box > Get Pause Text | `Pause Text$(` |  | → chaîne | — |  |
| 13 | 93 | Dialogue Box > Get Resume Text | `Resume Text$(` |  | → chaîne | — |  |
| 14 | 94 | Get System Colours > Scrollbar Track Area | `SysCol Track(` |  |  | — |  |
| 15 | 95 | Get System Colours > Desktop Background | `SysCol Desktop(` |  |  | — |  |
| 16 | 96 | Get System Colours > Active Caption | `SysCol Active Caption(` |  |  | — |  |
| 17 | 97 | Get System Colours > Inactive Caption | `SysCol Inactive Caption(` |  |  | — |  |
| 18 | 98 | Get System Colours > Menu | `SysCol Menu(` |  |  | — |  |
| 19 | 99 | Get System Colours > Window | `SysCol Window(` |  |  | — |  |
| 20 | 100 | Get System Colours > Window Frame | `SysCol Window Frame(` |  |  | — |  |
| 21 | 101 | Get System Colours > Menu Text | `SysCol Menu Text(` |  |  | — |  |
| 22 | 102 | Get System Colours > Window Text | `SysCol Window Text(` |  |  | — |  |
| 23 | 103 | Get System Colours > Caption Text | `SysCol Caption Text(` |  |  | — |  |
| 24 | 104 | Get System Colours > Active Border | `SysCol Active Border(` |  |  | — |  |
| 25 | 105 | Get System Colours > Inactive Border | `SysCol Inactive Border(` |  |  | — |  |
| 26 | 106 | Get System Colours > MDI Background | `SysCol MDI Background(` |  |  | — |  |
| 27 | 107 | Get System Colours > Highlighted Item | `SysCol Highlight Item(` |  |  | — |  |
| 28 | 108 | Get System Colours > Highlighted Text | `SysCol Highlight Text(` |  |  | — |  |
| 29 | 109 | Get System Colours > 3D Items > 3D Face (dialogue box fill) | `SysCol Button Face(` |  |  | — |  |
| 30 | 110 | Get System Colours > 3D Items > 3D Shadow | `SysCol Button Shadow(` |  |  | — |  |
| 31 | 111 | Get System Colours > Disabled Text | `SysCol Disabled Text(` |  |  | — |  |
| 32 | 112 | Get System Colours > 3D Items > Button Text | `SysCol Button Text(` |  |  | — |  |
| 33 | 113 | Get System Colours > Inactive Caption Text | `SysCol Inactive Caption Text(` |  |  | — |  |
| 34 | 114 | Get System Colours > 3D Items > 3D Highlight | `SysCol Button Highlight(` |  |  | — |  |
| 35 | 115 | Get System Colours > 3D Items > 3D Dark Shadow | `SysCol Button Dark Shadow(` |  |  | — |  |
| 36 | 116 | Get System Colours > 3D Items > 3D Light | `SysCol Button Light(` |  |  | — |  |
| 37 | 117 | Get System Colours > ToolTip Text | `SysCol ToolTip Text(` |  |  | — |  |
| 38 | 118 | Get System Colours > ToolTip Background | `SysCol ToolTip Background(` |  |  | — |  |
