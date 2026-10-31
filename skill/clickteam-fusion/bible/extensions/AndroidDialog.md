# Extension AndroidDialog

- Fichier : `AndroidDialog.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Alert Dialog | `<objet>: On Alert Dialog with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 1 | -82 | On Login Dialog | `<objet>: On Login Dialog with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 2 | -83 | On Password Dialog | `<objet>: On Password Dialog with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 3 | -84 | On Prompt Dialog | `<objet>: On Prompt Dialog with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 4 | -85 | On PopUp Dialog | `<objet>: On PopUp List with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 5 | -86 | On PopUp Choice | `<objet>: On PopUp List with Id <p0> and Choice <p1>` |  | expression chaîne « Dialog Id » ; expression numérique « Choice value » | — |  |
| 6 | -87 | On Agreement Dialog | `<objet>: On Agreement Dialog with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 7 | -88 | On Slider Dialog | `<objet>: On Slider Dialog with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 8 | -89 | On Slider Changed | `<objet>: On Slider Dialog with Id <p0> Changed` |  | expression chaîne « Dialog Id » | — |  |
| 9 | -90 | On File Picker | `<objet>: On File Picker with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 10 | -91 | On Color Picker | `<objet>: On Color Picker with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 11 | -92 | On Date Picker | `<objet>: On Date Picker  with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 12 | -93 | On Time Picker | `<objet>: On Time Picker with Id <p0> and Button <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Pressed Button Id (button text or number) » | — |  |
| 13 | -94 | On Quick Message ended | `<objet>:On Quick Message End` |  |  | — |  |
| 14 | -95 | On Notification Sent | `<objet>:On Notification Sent` |  |  | — |  |
| 15 | -96 | On Menu Picker | `<objet>: On Menu Picker with Id <p0> and Item <p1>` |  | expression chaîne « Dialog Id » ; expression numérique « Pressed Item Id (number or -1 for any) » | — |  |
| 16 | -97 | On Last Error | `<objet>: On Last error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dialogs > Common Features > Set Title | `Set Dialog Title to <p0>` |  | expression chaîne « Dialog Title Text » | — |  |
| 1 | 81 | Dialogs > Common Features > Set Icon | `Set Dialog Icon to <p0>` |  | expression chaîne « Dialog Icon to display (URL, internal image number or drawable - check help) » | — |  |
| 2 | 82 | Dialogs > Common Features > Set Message | `Set Dialog Message to <p0>` |  | expression chaîne « Dialog Message Text (doesn't work in popup list or file selector) » | — |  |
| 3 | 83 | Dialogs > Common Features > Set Buttons Text | `Set Dialog Buttons text to <p0>` |  | expression chaîne « Buttons text list (separated by comma, max: 3 buttons, blank for no button) representing POSITIVE-NEUTRAL-NEGATIVE » | — |  |
| 4 | 84 | Dialogs > Common Features > Set Size | `Set Dialog Size to <p0>` |  | expression numérique « Dialog Size (0:Full, 1:Large, 2:Medium, 3:Small, 4:Wide, 5:Fit Inside, 6:Best Width) » | — |  |
| 5 | 85 | Dialogs > Common Features > Set Dialog Alignment | `Set Dialog Alignment to <p0>` |  | expression numérique « Dialog Alignment (0:Bottom, 1:Center, 2:Top) » | — |  |
| 6 | 86 | Dialogs > Alert Dialog > Save Alert Dialog ... | `Save Info to Alert Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 7 | 87 | Dialogs > Alert Dialog > Open Alert Dialog | `Open Alert dialog with Id <p0> with message <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Message text » | — |  |
| 8 | 88 | Dialogs > Login Dialog > Set User hint and initial text | `Set User Hint to <p0> and Initial text to <p1>` |  | expression chaîne « User Hint Text » ; expression chaîne « User Initial Text » | — |  |
| 9 | 89 | Dialogs > Login Dialog > Set Password hint | `Set Password Hint to <p0>` |  | expression chaîne « Password Hint Text » | — |  |
| 10 | 90 | Dialogs > Login Dialog > Set Remember hint | `Set Remember Label to <p0>` |  | expression chaîne « Remember Label Text » | — |  |
| 11 | 91 | Dialogs > Login Dialog > Set Remember flag | `Set Remember flag to <p0>` |  | expression numérique « Remember flag (0: Off, 1:On) » | — |  |
| 12 | 92 | Dialogs > Login Dialog > Save Login Dialog ... | `Save Info to Login Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 13 | 93 | Dialogs > Login Dialog > Open Login Dialog | `Open Login dialog with Id <p0> and User <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « User Initial Text » | — |  |
| 14 | 94 | Dialogs > Password Dialog > Set Old Password Hint | `Set Old Password Hint to <p0>` |  | expression chaîne « Old Password Hint text » | — |  |
| 15 | 95 | Dialogs > Password Dialog > Set New Password Hint | `Set New Password Hint to <p0>` |  | expression chaîne « Old Password Hint text » | — |  |
| 16 | 96 | Dialogs > Password Dialog > Set Confirm Password hint | `Set Confirm Password Hint to <p0>` |  | expression chaîne « Old Password Hint text » | — |  |
| 17 | 97 | Dialogs > Password Dialog > Save Password Dialog ... | `Save Info to Password Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 18 | 98 | Dialogs > Password Dialog > Open Password Dialog | `Open Password dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 19 | 99 | Dialogs > Prompt Dialog > Set Prompt hint and initial text | `Set Prompt Hint to <p0> and Initial text to <p1>` |  | expression chaîne « Prompt Hint Text » ; expression chaîne « Prompt Initial Text » | — |  |
| 20 | 100 | Dialogs > Prompt Dialog > Save Prompt Dialog ... | `Save Info to Prompt Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 21 | 101 | Dialogs > Prompt Dialog > Open Prompt Dialog | `Open Prompt dialog with Id <p0> and initial text <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Prompt Initial Text » | — |  |
| 22 | 102 | Dialogs > Popup List Dialog > Set Header | `Set Popup List Header Title to <p0>` |  | expression chaîne « Title Text » | — |  |
| 23 | 103 | Dialogs > Popup List Dialog > Set List | `Set Popup List to <p0>` |  | expression chaîne « Text List (separated by commas) » | — |  |
| 24 | 104 | Dialogs > Popup List Dialog > Set Initial Selection | `Set Popup List initial selection to <p0>` |  | expression chaîne « List of selected items (e.g. '1,0,1,1,0,1,1' for multiselection or '3' for single selection) » | — |  |
| 25 | 105 | Dialogs > Popup List Dialog > Set Multi Selection | `Set Popup List multiselection to <p0>` |  | expression numérique « Multiselection  (1: Multi, 0: Single) » | — |  |
| 26 | 106 | Dialogs > Popup List Dialog > Save Popup Dialog ... | `Save Info to Popup List with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 27 | 107 | Dialogs > Popup List Dialog > Open Popup Dialog | `Open Popup List with Id <p0> and initial selection <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « List of selected items (e.g. '1,0,1,1,0,1,1' for multiselection or '3' for single selection) » | — |  |
| 28 | 108 | Dialogs > Progress Dialog > Set Style | `Set Progress Style to <p0>` |  | expression numérique « Style (0:Circular, 1:Horizontal) » | — |  |
| 29 | 109 | Dialogs > Progress Dialog > Set Min | `Set Progress Min to <p0>` |  | expression numérique « Define min. value » | — |  |
| 30 | 110 | Dialogs > Progress Dialog > Set Max | `Set Progress Max to <p0>` |  | expression numérique « Define max. value (normally 100%) » | — |  |
| 31 | 111 | Dialogs > Progress Dialog > Set Value | `Set Progress Value to <p0> for Id <p1>` |  | expression numérique « Set value (between min and max) » ; expression chaîne « Dialog Id » | — |  |
| 32 | 112 | Dialogs > Progress Dialog > Set Timeout or allow to show | `Set Progress timeout to <p0>` |  | expression numérique « Timeout/Receive Values (in milliseconds, set to -1 to receive values) » | — |  |
| 33 | 113 | Dialogs > Progress Dialog > Save Progress Dialog ... | `Save Info to Progress Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 34 | 114 | Dialogs > Progress Dialog > Open Progress Dialog | `Open Progress dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 35 | 115 | Dialogs > Progress Dialog > Dismiss Prog Dialog | `Dismiss Prog Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 36 | 116 | Dialogs > File Selector > Set Default Dir and Text | `Set File Sel. Default dir to <p0> and texts for parent dir:<p1>, folder:<p2> and filesize: <p3>` |  | expression chaîne « Default Directory » ; expression chaîne « Text for parent directory (exam: Parent Directory) » ; expression chaîne « Text for folder (exam: Folder) » ; expression chaîne « Text for file size (exam: File Size) » | — |  |
| 37 | 117 | Dialogs > File Selector > Save File Selector Dialog ... | `Save Info to File Selector Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 38 | 118 | Dialogs > File Selector > Open File Selector | `Open File Selector with Id <p0> and start directory <p1>` |  | expression chaîne « Dialog Id » ; expression chaîne « Default Directory » | — |  |
| 39 | 119 | Dialogs > Agreement Dialog > Set Html Message | `Set Html message to <p0>` |  | expression chaîne « HTML text » | — |  |
| 40 | 120 | Dialogs > Agreement Dialog > Set Check Label and Status | `Set Agreeement Checkbox Label to <p0> and Status <p1>` |  | expression chaîne « Check Label Text » ; expression numérique « Checked value (0: No, 1: Yes) » | — |  |
| 41 | 121 | Dialogs > Agreement Dialog > Save Agreement Dialog ... | `Save Info to Agreement Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 42 | 122 | Dialogs > Agreement Dialog > Open Agreement | `Open Agreement dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 43 | 123 | Dialogs > Slider Dialog > Set Minimum | `Set Slider Minimum to <p0>` |  | expression numérique « Minimum value (typical 0) » | — |  |
| 44 | 124 | Dialogs > Slider Dialog > Set Maximum | `Set Slider Maximum to <p0>` |  | expression numérique « Maximum value (typical 100) » | — |  |
| 45 | 125 | Dialogs > Slider Dialog > Set Value | `Set Slider Value to <p0>` |  | expression numérique « Initial value (typical 0 to 100) » | — |  |
| 46 | 126 | Dialogs > Slider Dialog > Save Slider Dialog ... | `Save Info to Slider Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 47 | 127 | Dialogs > Slider Dialog > Open Slider | `Open Slider dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 48 | 128 | Color Picker > Save Color Picker Dialog ... | `Save Info to Color Picker Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 49 | 129 | Color Picker > Open Color Picker | `Open Color Picker with Id <p0> and initial color <p1>` |  | expression chaîne « Id String » ; expression numérique « Color value » | — |  |
| 50 | 130 | Date Picker > Set What to display | `Set What to display to <p0> and calendar <p1>` |  | expression numérique « What to show (1: Days, 2: Months, 4: Years) exam: 7 show all » ; expression numérique « Display Calendar (0:On, 1:Off) » | — |  |
| 51 | 131 | Date Picker > Set Initial date | `Set Date Initial time to year: <p0>, month: <p1>, day:<p2>` |  | expression numérique « Year initial value (-1:current, or set value, min 1900) » ; expression numérique « Month initial value (-1:current, Range from: 1 to 12) » ; expression numérique « Day initial value (-1:current, Range from: 1 to 31) » | — |  |
| 52 | 132 | Date Picker > Save Date Picker Dialog ... | `Save Info to Date Picker Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 53 | 133 | Date Picker > Open Date Picker | `Open Date Picker with Id <p0> and date <p1>, <p2>, <p3>` |  | expression chaîne « Id String » ; expression numérique « Day initial value (-2:saved, -1: current, Range from: 1 to 31) » ; expression numérique « Month initial value (-2:saved, -1: current, Range from: 1 to 12) » ; expression numérique « Year initial value (-2:saved, -1: current, or set value, min 1900) » | — |  |
| 54 | 134 | Time Picker > Set What to display | `Set Time what to display to <p0>` |  | expression numérique « What to show (1: Hour, 2: Minutes) exam: 3 show all » | — |  |
| 55 | 135 | Time Picker > Set Initial time | `Set Time Initial time to hour: <p0>, mins: <p1>` |  | expression numérique « Hour initial value (-1:current, range from: 0 to 23) » ; expression numérique « Minutes initial value (-1:current, Range from: 0 to 59) » | — |  |
| 56 | 136 | Time Picker > Set Style | `Set Time Style to <p0>` |  | expression numérique « Style (0:0-23, 1:1-12, default is 0) » | — |  |
| 57 | 137 | Time Picker > Save Time Picker Dialog ... | `Save Info to Time Picker Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 58 | 138 | Time Picker > Open Time Picker | `Open Time Picker with Id <p0> and time <p1>:<p2>` |  | expression chaîne « Id Number » ; expression numérique « Hour initial value (-2:saved, -1:current, range from: 0 to 23) » ; expression numérique « Minutes initial value (-2:saved, -1:current, Range from: 0 to 59) » | — |  |
| 59 | 139 | Quick Messages > Set Message and Icon | `Set Quick Message to <p0> and Icon <p1>` |  | expression chaîne « Quick Message Text » ; expression chaîne « Icon to display (URL, internal image number or drawable - check help) » | — |  |
| 60 | 140 | Quick Messages > Set Message Alignment and Theme | `Set Quick Message Alignment to <p0> and theme <p1>` |  | expression numérique « Alignment (0:Bottom, 1:Center, 2:Top) » ; expression numérique « Themes (0:Default, 1:Light, 2:Dark, 3:Internal, 4:Application) » | — |  |
| 61 | 141 | Quick Messages > Set Message TimeOut | `Set Quick Message timeout to <p0>` |  | expression numérique « Time out (in milliseconds or 0 for 3.5 sec and -1 for 2.0 sec) » | — |  |
| 62 | 142 | Quick Messages > Open Quick Message | `Open Quick Message` |  |  | — |  |
| 63 | 143 | Notifications > Set Title and Count | `Set Notification title <p0> and count <p1>` |  | expression chaîne « Title Text » ; expression numérique « Notification Count » | — |  |
| 64 | 144 | Notifications > Set Large and Small Icon | `Set Notification Large Icon to <p0> and Small Icon to <p1>` |  | expression chaîne « Large Icon to display (URL, internal image number or drawable - check help) » ; expression chaîne « Small Icon to display (from resource in lowercase) » | — |  |
| 65 | 145 | Notifications > Set Message and Ticker | `Set Notification Message <p0> and ticker <p1>` |  | expression chaîne « Message Text » ; expression chaîne « Ticker Text » | — |  |
| 66 | 146 | Notifications > Set Action Intent | `Set Notification Intent <p0> and action <p1>` |  | expression chaîne « Intent String » ; expression numérique « Intent Type (0:VIEW, 1:DIAL, 2:EDIT, 3:PICK, 4:MAIN) » | — |  |
| 67 | 147 | Notifications > Set Sound | `Set Notification Sound to <p0>` |  | expression numérique « Sound Enable (0:No, 1: Yes) » | — |  |
| 68 | 148 | Notifications > Set Vibrate | `Set Notification Vibrate to <p0>` |  | expression numérique « Vibrate Enable (0:No, 1: Yes) » | — |  |
| 69 | 149 | Notifications > Send Notification | `Send Notification` |  |  | — |  |
| 70 | 150 | Menu Picker > Set Items and Icons | `Set Menu Picker List to <p0> and Icons <p1>` |  | expression chaîne « Menu Items List (separated by commas) » ; expression chaîne « Icon List (numeric values from image bank separated by commas) » | — |  |
| 71 | 151 | Menu Picker > Set Menu Alignment | `Set Menu Picker Alignment to <p0>` |  | expression numérique « Alignment (0:Bottom, 1:Center, 2:Top) » | — |  |
| 72 | 152 | Menu Picker > Set Menu TimeOut | `Set Menu Picker timeout to <p0>` |  | expression numérique « Time out (in milliseconds or -1 for infinite) » | — |  |
| 73 | 153 | Menu Picker > Save Menu Picker Dialog ... | `Save Info to Menu Picker Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 74 | 154 | Menu Picker > Open Menu Picker | `Open Menu Picker with Id <p0>` |  | expression chaîne « Menu Picker Id » | — |  |
| 75 | 155 | Special Config > Set Dialog Theme | `Set Dialog Theme to <p0>` |  | expression numérique « Dialog themes (0:Default, 1:Light, 2:Dark, 3:Internal, 4:Application) » | — |  |
| 76 | 156 | Special Config > File Picker Specials ... > Set Images for File Picker | `Set Images for File Picker to Folders: <p0> and Files: <p1>` |  | expression numérique « Image Icon to display folders (internal image number or drawable - check help) » ; expression numérique « Image Icon to display files (internal image number or drawable - check help) » | — |  |
| 77 | 157 | Special Config > File Picker Specials ... > Set Type for File Picker | `Set File Picker type to <p0>` |  | expression numérique « Types (0: Files, 1:Dir) » | — |  |
| 78 | 158 | Special Config > Set Dialog Title Color | `Set Title Color <p0>` |  | couleur « Set Title Color » | — |  |
| 79 | 159 | Dismiss Dialog | `Dismiss Dialog with Id <p0>` |  | expression chaîne « Dialog Id » | — |  |
| 80 | 160 | Special Config > Disable Theme Control | `Set Font Control to <p0>` |  | expression numérique « Font Size Control (On/Default:0 Off:1) » | — |  |
| 81 | 161 | Special Config > File Picker Specials ... > Set Filter for File Picker | `Set File filter to <p0>` |  | expression chaîne « Filter String (e.g: .jpg) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dialogs > Alert Button Return | `AlertButtonRet(` |  |  | — |  |
| 1 | 81 | Dialogs > Login Username | `LoginUsername$(` |  | → chaîne | — |  |
| 2 | 82 | Dialogs > Login Password | `LoginPassword$(` |  | → chaîne | — |  |
| 3 | 83 | Dialogs > Login Remember | `LoginRememberFlag(` |  |  | — |  |
| 4 | 84 | Dialogs > Login Button Return | `LoginButtonRet(` |  |  | — |  |
| 5 | 85 | Dialogs > Password Password | `PasswordPassword$(` |  | → chaîne | — |  |
| 6 | 86 | Dialogs > Password New Pass | `PasswordNewPass$(` |  | → chaîne | — |  |
| 7 | 87 | Dialogs > Password Confirm Pass | `PasswordConfPass$(` |  | → chaîne | — |  |
| 8 | 88 | Dialogs > Password Button Return | `PasswordButtonRet(` |  |  | — |  |
| 9 | 89 | Dialogs > Prompt text | `PromptText$(` |  | → chaîne | — |  |
| 10 | 90 | Dialogs > Prompt Button Return | `PromptButtonRet(` |  |  | — |  |
| 11 | 91 | Dialogs > Popup Item text | `PopupItemText$(` |  | → chaîne | — |  |
| 12 | 92 | Dialogs > Popup Item id | `PopupItemId(` |  |  | — |  |
| 13 | 93 | Dialogs > Popup Button return | `PopupButtonRet(` |  |  | — |  |
| 14 | 94 | Dialogs > Agreement CheckBox Return | `AgreeCheckBox(` |  |  | — |  |
| 15 | 95 | Dialogs > Agreement Button Return | `AgreeButtonRet(` |  |  | — |  |
| 16 | 96 | Dialogs > Slider Value Return | `SliderValue(` |  |  | — |  |
| 17 | 97 | Dialogs > Slider Button Return | `SliderButtonRet(` |  |  | — |  |
| 18 | 98 | File Picker > File Name Return | `FilePickedName$(` |  | → chaîne | — |  |
| 19 | 99 | File Picker > File Button Return | `FileButtonRet(` |  |  | — |  |
| 20 | 100 | Color Picker > Color Picker Value | `ColorPickerValue(` |  |  | — |  |
| 21 | 101 | Color Picker > Color Picker Alpha | `ColorPickerAlpha(` |  |  | — |  |
| 22 | 102 | Color Picker > Color Button Return | `ColorButtonRet(` |  |  | — |  |
| 23 | 103 | Date Picker > Date Year | `DateYear(` |  |  | — |  |
| 24 | 104 | Date Picker > Date Month | `DateMonth(` |  |  | — |  |
| 25 | 105 | Date Picker > Date day | `DateDay(` |  |  | — |  |
| 26 | 106 | Date Picker > Date Button Return | `DateButtonRet(` |  |  | — |  |
| 27 | 107 | Time Picker > Time hour | `TimeHour(` |  |  | — |  |
| 28 | 108 | Time Picker > Time mins | `TimeMins(` |  |  | — |  |
| 29 | 109 | Time Picker > Time secs | `TimeSecs(` |  |  | — |  |
| 30 | 110 | Time Picker > Time Button Return | `TimeButtonRet(` |  |  | — |  |
| 31 | 111 | Menu Picker > Menu Item Number | `MenuValueRet(` |  |  | — |  |
| 32 | 112 | Menu Picker > Menu Item String | `MenuStringRet$(` |  | → chaîne | — |  |
