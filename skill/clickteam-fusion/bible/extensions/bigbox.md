# Extension bigbox

- File: `bigbox.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Mouse/Keyboard > Is Num Lock on ? | `Num Lock on` |  |  | — |  |
| 1 | -82 | Mouse/Keyboard > Is Caps Lock on ? | `Caps Lock on` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Display > Windows > Change wallpaper | `New wallpaper: <p0>` |  | file name “Choose a bitmap file (*.bmp)” | — |  |
| 1 | 81 | Display > Windows > Launch the screensaver | `Launch the screensaver` |  |  | — |  |
| 2 | 82 | Display > Windows > Enable screensaver | `Screensaver: Enable` |  |  | — |  |
| 3 | 83 | Display > Windows > Disable screensaver | `Screensaver: Disable` |  |  | — |  |
| 4 | 84 | Display > Windows > Adjust the screensaver delay | `Adjust the delay of the screensaver to <p0> minutes` |  | numeric expression “Enter the delay, in minutes” | — |  |
| 5 | 85 | Display > Windows > Reduce all opened windows | `Reduce all windows` |  |  | — |  |
| 6 | 86 | Mouse/Keyboard > Change keyboard repetition speed | `Keyboard repetition speed to <p0>` |  | numeric expression “Enter the speed, between 0 and 31” | — |  |
| 7 | 87 | Display > Windows > Change the background color of the desktop | `Background color of the desktop: <p0>` |  | color “Choose a colour” | — |  |
| 8 | 88 | Display > Change screen resolution | `Change resolution mode to <p0>x<p1>` |  | numeric expression “Width of the resolution”; numeric expression “Height of the resolution” | — |  |
| 9 | 89 | Display > Change color depth | `Set screen depth to <p0> bits` |  | numeric expression “[8]=256 coulours, [16]=66356, [24 ou 32]=16M” | — |  |
| 10 | 90 | Display > Change screen refresh rate | `Set screen refresh rate to <p0> hz` |  | numeric expression “Refresh rate, in Hz” | — |  |
| 11 | 91 | System > Shut down the computer | `Shut down the computer` |  |  | — |  |
| 12 | 92 | System > Reboot the computer | `Reboot to computer` |  |  | — |  |
| 13 | 93 | System > Make a BEEP from the internal speaker | `BEEP ! (<p0> Hz, <p1> ms)` |  | numeric expression “Enter the beep frequency (in Hz)”; numeric expression “Beep duration (in milliseconds, 1000ms = 1sec)” | — |  |
| 14 | 94 | Mouse/Keyboard > Set the mouse position | `Set mouse's position (<p0>, <p1>)` |  | numeric expression “X position”; numeric expression “Y position” | — |  |
| 15 | 95 | Mouse/Keyboard > Change the mouse speed | `Mouse speed: <p0> /21` |  | numeric expression “Enter a value between 1 and 20” | — |  |
| 16 | 96 | Mouse/Keyboard > Change keyboard repetition delay | `Keyboard Delay: <p0> /31` |  | numeric expression “Enter a value between 0 and 31” | — |  |
| 17 | 97 | Mouse/Keyboard > Delay of the double-click | `Double-click delay: <p0> ms` |  | numeric expression “Max delay to do a double-click, en milliseconds” | — |  |
| 18 | 98 | Display > Windows > Enable font smoothing | `Enable font smoothing` |  |  | — |  |
| 19 | 99 | Display > Windows > Disable font smoothing | `Disable font smoothing` |  |  | — |  |
| 20 | 100 | Mouse/Keyboard > Mouse's trails | `Mouse trails: <p0>` |  | numeric expression “[0]=No [1~16]=Number of cursors drawn in the trail” | — |  |
| 21 | 101 | System > Kill a process | `Kill process <p0>` |  | string expression “Process name (ex: explorer.exe)” | — |  |
| 22 | 102 | Misc > Open a file / Open a website | `Open website <p0>` |  | string expression “File to open / URL of the website” | — |  |
| 23 | 103 | System > Close the current Windows session | `Close the current Windows session` |  |  | — |  |
| 24 | 104 | System > Tell computer to hibernate | `Tell computer to hibernate` |  |  | — |  |
| 25 | 105 | Mouse/Keyboard >    Simulate a left mouse click | `Simulate a left mouse click` |  |  | — |  |
| 26 | 106 | Mouse/Keyboard >    Simulate a right mouse click | `Simulate a right mouse click` |  |  | — |  |
| 28 | 108 | Mouse/Keyboard > Set Num Lock on | `Turn on the Num Lock` |  |  | — |  |
| 29 | 109 | Mouse/Keyboard > Set Num Lock off | `Turn off the Num Lock` |  |  | — |  |
| 30 | 110 | Mouse/Keyboard > Set Caps Lock on | `Turn on the Caps Lock` |  |  | — |  |
| 31 | 111 | Mouse/Keyboard > Set Caps Lock off | `Turn off the Caps Lock` |  |  | — |  |
| 32 | 112 | Misc > Make a screenshot | `Make a screenshot` |  |  | — |  |
| 33 | 113 | Mouse/Keyboard >    Simulate a middle mouse click | `Simulate a middle mouse click` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Mouse/Keyboard > Keyboard repetition delay (*/31) | `KeybdDelay(` |  |  | — |  |
| 1 | 81 | Display > Width of the current resolution | `ScrWidth(` |  |  | — |  |
| 2 | 82 | Display > Height of the current resolution | `ScrHeight(` |  |  | — |  |
| 3 | 83 | System > Total amount of RAM (MB) | `RAMTotal(` |  |  | — |  |
| 4 | 84 | Display > Windows > Screensaver delay (in minutes) | `ScrSavDelay(` |  |  | — |  |
| 5 | 85 | Mouse/Keyboard > Mouse speed (*/21) | `MouseSpeed(` |  |  | — |  |
| 6 | 86 | Display > Screen refresh rate | `ScrFrequ(` |  |  | — |  |
| 7 | 87 | Display > Screen depth | `ColorDepth(` |  |  | — |  |
| 8 | 88 | System > BEEP music ! > C frequency | `NoteDo(` |  |  | — |  |
| 9 | 89 | System > BEEP music ! > C# frequency | `NoteDo#(` |  |  | — |  |
| 10 | 90 | System > BEEP music ! > D frequency | `NoteRe(` |  |  | — |  |
| 11 | 91 | System > BEEP music ! > D# frequency | `NoteRe#(` |  |  | — |  |
| 12 | 92 | System > BEEP music ! > E frequency | `NoteMi(` |  |  | — |  |
| 13 | 93 | System > BEEP music ! > F frequency | `NoteFa(` |  |  | — |  |
| 14 | 94 | System > BEEP music ! > F# frequency | `NoteFa#(` |  |  | — |  |
| 15 | 95 | System > BEEP music ! > G frequency | `NoteSol(` |  |  | — |  |
| 16 | 96 | System > BEEP music ! > G# frequency | `NoteSol#(` |  |  | — |  |
| 17 | 97 | System > BEEP music ! > A frequency | `NoteLa(` |  |  | — |  |
| 18 | 98 | System > BEEP music ! > A# frequency | `NoteLa#(` |  |  | — |  |
| 19 | 99 | System > BEEP music ! > B frequency | `NoteSi(` |  |  | — |  |
| 20 | 100 | System > CPU speed (MHz) | `PCName(` |  |  | — |  |
| 21 | 101 | System > Hard drive size (MB) | `HDDTotal(` |  | string “Letter of the disk (ex: C:\)” | — |  |
| 22 | 102 | System > Free space on the hard drive (MB) | `HDDFree(` |  | string “Letter of the disk (ex: C:\)” | — |  |
| 23 | 103 | System > Amount of free RAM (MB) | `RAMFree(` |  |  | — |  |
| 24 | 104 | Mouse/Keyboard > Keyboard repetition speed (*/31) | `KeybdSpeed(` |  |  | — |  |
| 25 | 105 | System > Installed OS  (see HELP.TXT) | `OS(` |  |  | — |  |
| 26 | 106 | System > Get Windows Directory | `WinDir$(` |  | → string | — |  |
| 27 | 107 | System > Get System Directory | `SysDir$(` |  | → string | — |  |
| 28 | 108 | System > Get Temp Directory | `TempDir$(` |  | → string | — |  |
