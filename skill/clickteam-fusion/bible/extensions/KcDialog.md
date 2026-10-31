# Extension KcDialog

- Fichier : `KcDialog.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | was ABORT | `<objet> was ABORT` |  |  | — |  |
| 1 | -82 | was CANCEL | `<objet> was CANCEL` |  |  | — |  |
| 2 | -83 | was IGNORE | `<objet> was IGNORE` |  |  | — |  |
| 3 | -84 | was NO | `<objet> was NO` |  |  | — |  |
| 4 | -85 | was OK | `<objet> was OK` |  |  | — |  |
| 5 | -86 | was RETRY | `<objet> was RETRY` |  |  | — |  |
| 6 | -87 | was YES | `<objet> was YES` |  |  | — |  |
| 7 | -88 | Is Asker Text equal | `<objet> Is Asker text equal  <p0>` |  | expression chaîne « Text to compare » | — |  |
| 8 | -89 | Is Asker Text not equal | `<objet> Is Asker text not equal  <p0>` |  | expression chaîne « Text to compare » | — |  |
| 9 | -90 | was IGNORE ALL | `<objet> was IGNORE ALL` |  |  | — |  |
| 10 | -91 | was NOTOAll | `<objet> was NOTOALL` |  |  | — |  |
| 11 | -92 | was YESTOALL | `<objet> was YESTOALL` |  |  | — |  |
| 12 | -93 | was SKIP | `<objet> was SKIP` |  |  | — |  |
| 13 | -94 | was SKIP ALL | `<objet> was SKIP ALL` |  |  | — |  |
| 14 | -95 | was TRY AGAIN | `<objet> was TRY AGAIN` |  |  | — |  |
| 15 | -96 | was CUSTOM BUTTON #1 | `<objet> was CUSTOM #1` |  |  | — |  |
| 16 | -97 | was CUSTOM BUTTON #2 | `<objet> was CUSTOM #2` |  |  | — |  |
| 17 | -98 | was CUSTOM BUTTON #3 | `<objet> was CUSTOM #3` |  |  | — |  |
| 18 | -99 | was CUSTOM BUTTON #4 | `<objet> was CUSTOM #4` |  |  | — |  |
| 19 | -100 | was HELP | `<objet> was HELP` |  |  | — |  |
| 20 | -101 | CheckBox Clicked? | `<objet> CheckBox Clicked?` |  |  | — |  |
| 21 | -102 | was CONTINUE | `<objet> was CONTINUE` |  |  | — |  |
| 22 | -103 | TimeOut occurred? | `<objet> TimeOut Occurred?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Message Box > Set Title | `Set Title to <p0>` |  | expression chaîne « Set Title Text » | — |  |
| 1 | 81 | Message Box > Set Message | `Set Message to <p0>` |  | expression chaîne « Set Message Text » | — |  |
| 2 | 82 | Message Box > Set Icon... > Hand\|Stop | `Set Box Icon Hand¦Stop` |  |  | — |  |
| 3 | 83 | Message Box > Set Icon... > Question | `Set Box Icon Question` |  |  | — |  |
| 4 | 84 | Message Box > Set Icon... > Exclamation | `Set Box Icon Exclamation` |  |  | — |  |
| 5 | 85 | Message Box > Set Icon... > Information\|Asterisk | `Set Box Icon Info¦Asterisk` |  |  | — |  |
| 6 | 86 | Message Box > Set Type... > Yes/No | `Box Yes/No` |  |  | — |  |
| 7 | 87 | Message Box > Set Type... > Yes/No/Cancel | `Box Yes/No/Cancel` |  |  | — |  |
| 8 | 88 | Message Box > Set Type... > Abort/Retry/Ignore | `Box Abort/Retry/Ignore` |  |  | — |  |
| 9 | 89 | Message Box > Set Type... > Retry/Cancel | `Box Retry/Cancel` |  |  | — |  |
| 10 | 90 | Message Box > Set Type... > Ok/Cancel | `Box Ok/Cancel` |  |  | — |  |
| 11 | 91 | Message Box > Set Type... > Ok | `Box Ok` |  |  | — |  |
| 12 | 92 | Message Box > Set Default Button | `Set Default Button to <p0>` |  | expression numérique « Set Default Button to (1,2,3,4,5,6) » | — |  |
| 15 | 95 | Message Box > Clear RetMsgBox | `Clean Return MsgBox` |  |  | — |  |
| 16 | 96 | Message Box > Do MsgBox | `Do MsgBox()` |  |  | — |  |
| 17 | 97 | Asker  > Set Title | `Set Asker Title to <p0>` |  | expression chaîne « Set Title Text » | — |  |
| 18 | 98 | Asker  > Set Message | `Set Asker Message to <p0>` |  | expression chaîne « Set Message Text » | — |  |
| 19 | 99 | Asker  > Define as Password > On | `Set password ON for asker` |  |  | — |  |
| 20 | 100 | Asker  > Define as Password > Off | `Set password OFF for asker` |  |  | — |  |
| 21 | 101 | Asker  > Do Asker | `Do Asker()` |  |  | — |  |
| 22 | 102 | Asker  > Do AskerButton | `Do AskerButton()` |  |  | — |  |
| 23 | 103 | Asker  > Set Result | `Set Asker result to <p0>` |  | expression chaîne « Set Result Message Text » | — |  |
| 24 | 104 | Pause Box > Set Title | `Set Pause Title to <p0>` |  | expression chaîne « Set Title Text » | — |  |
| 25 | 105 | Pause Box > Set Button text | `Set Button Text to <p0>` |  | expression chaîne « Set Message Text » | — |  |
| 26 | 106 | Pause Box > Do Pause | `Do Pause` |  |  | — |  |
| 27 | 107 | Other Functions > Redraw Window | `Redraw Window` |  |  | — |  |
| 28 | 108 | Message Box > Set Icon... > To Internal Image | `Set Box Icon with image# <p0>` |  | expression numérique « Set Image number » | — |  |
| 29 | 109 | Message Box > Set Style > Font Color | `Set Text Color to <p0>` |  | expression numérique « Set Font Color » | — |  |
| 30 | 110 | Message Box > Set Style > Use Choosen Font | `Use Choosen Font (<p0>)` |  | expression numérique « Use Styled Font (0:Off 1:Yes) » | — |  |
| 31 | 111 | Message Box > Set Style > Background Color | `Set Backgroung Color to <p0>` |  | expression numérique « Set Background Color » | — |  |
| 32 | 112 | Other Functions > Refresh Window | `Refresh Window` |  |  | — |  |
| 33 | 113 | Message Box > Set Style > Background Image | `Set Backgroung Image# <p0>` |  | expression numérique « Set Image number » | — |  |
| 34 | 114 | Message Box > Set Style > Reset Styles | `Reset the styles` |  |  | — |  |
| 35 | 115 | Message Box > Set Style > Set Transparency value | `Set Transparency to <p0>` |  | expression numérique « 0=Transparent, 255=Opaque » | — |  |
| 36 | 116 | Message Box > Set Button Text... > Custom #1 | `Set Text to <p0> for Custom #1` |  | expression chaîne « Button text » | — |  |
| 37 | 117 | Message Box > Set Button Text... > Custom #2 | `Set Text to <p0> for Custom #2` |  | expression chaîne « Button text » | — |  |
| 38 | 118 | Message Box > Set Button Text... > Custom #3 | `Set Text to <p0> for Custom #3` |  | expression chaîne « Button text » | — |  |
| 40 | 120 | Message Box > Set Button Text... > Custom #4 | `Set Text to <p0> for Custom #4` |  | expression chaîne « Button text » | — |  |
| 41 | 121 | Message Box > Set Style > Set Time Out | `Set Time Out to <p0>` |  | expression numérique « Time in Second » | — |  |
| 42 | 122 | Message Box > Set Type... > Cancel/Try/Continue | `Box Cancel/Try/Continue` |  |  | — |  |
| 43 | 123 | Message Box > Set Type... > Continue/Abort | `Box Continue/Abort` |  |  | — |  |
| 44 | 124 | Message Box > Set Type... > Skip/SkipAll/Cancel | `Box Skip/SkipAll/Cancel` |  |  | — |  |
| 45 | 125 | Message Box > Set Type... > Ignore/IgnoreAll/Cancel | `Box Ignore/IgnoreAll/Cancel` |  |  | — |  |
| 46 | 126 | Message Box > Add Button... > Button Help | `Add Button Help` |  |  | — |  |
| 47 | 127 | Message Box > Add Button... > Button 'No To All' | `Add Button 'No to All'` |  |  | — |  |
| 48 | 128 | Message Box > Add Button... > Button 'Yes To All' | `Add Button 'Yes to All'` |  |  | — |  |
| 49 | 129 | Message Box > Add Checkbox... > Box Don't Ask me again | `Add CheckBox Don't Ask me again` |  |  | — |  |
| 50 | 130 | Message Box > Add Checkbox... > Box Don't Tell me again | `Add CheckBox Don't Tell me again` |  |  | — |  |
| 51 | 131 | Message Box > Add Checkbox... > Box Don't Show again | `Add CheckBox Don't Show again` |  |  | — |  |
| 52 | 132 | Message Box > Set Style > Set Vista Style Box | `Use Vista Style Box (<p0>)` |  | expression numérique « Use Vista Style (0:Off 1:Yes) » | — |  |
| 53 | 133 | Message Box > Set Style > Set Right Justified Buttons | `Use Right Justified (<p0>)` |  | expression numérique « Use Right Justified (0:Off 1:Yes) » | — |  |
| 54 | 134 | Message Box > Set Style > Set Disable Time | `Set Disable Time to <p0>` |  | expression numérique « Time in Second » | — |  |
| 55 | 135 | Message Box > Set Button Text... > Button Abort | `Set to <p0> for Abort Text` |  | expression chaîne « Button text » | — |  |
| 56 | 136 | Message Box > Set Button Text... > Button Cancel | `Set to <p0> for Cancel Text` |  | expression chaîne « Button text » | — |  |
| 57 | 137 | Message Box > Set Button Text... > Button Continue | `Set to <p0> for Continue Text` |  | expression chaîne « Button text » | — |  |
| 58 | 138 | Message Box > Set Button Text... > Button Don't Ask me Again | `Set to <p0> for Don't Ask me Again Text` |  | expression chaîne « Button text » | — |  |
| 59 | 139 | Message Box > Set Button Text... > Button Don't Tell me Again | `Set to <p0> for Don't Tell me Again Text` |  | expression chaîne « Button text » | — |  |
| 60 | 140 | Message Box > Set Button Text... > Button Don't Show Again | `Set to <p0> for Don't Show Again Text` |  | expression chaîne « Button text » | — |  |
| 61 | 141 | Message Box > Set Button Text... > Button Help | `Set to <p0> for Help Text` |  | expression chaîne « Button text » | — |  |
| 62 | 142 | Message Box > Set Button Text... > Button Ignore | `Set to <p0> for Ignore Text` |  | expression chaîne « Button text » | — |  |
| 63 | 143 | Message Box > Set Button Text... > Button Ignore All | `Set to <p0> for Ignore All Text` |  | expression chaîne « Button text » | — |  |
| 64 | 144 | Message Box > Set Button Text... > Button No | `Set to <p0> for No Text` |  | expression chaîne « Button text » | — |  |
| 65 | 145 | Message Box > Set Button Text... > Button 'No to All' | `Set to <p0> for 'No to All' Text` |  | expression chaîne « Button text » | — |  |
| 66 | 146 | Message Box > Set Button Text... > Button Ok | `Set to <p0> for Ok Text` |  | expression chaîne « Button text » | — |  |
| 67 | 147 | Message Box > Set Button Text... > Button Retry | `Set to <p0> for Retry Text` |  | expression chaîne « Button text » | — |  |
| 68 | 148 | Message Box > Set Button Text... > Button Skip | `Set to <p0> for Skip Text` |  | expression chaîne « Button text » | — |  |
| 69 | 149 | Message Box > Set Button Text... > Button SkipAll | `Set to <p0> for Skip All Text` |  | expression chaîne « Button text » | — |  |
| 70 | 150 | Message Box > Set Button Text... > Button TryAgain | `Set to <p0> for Try Again Text` |  | expression chaîne « Button text » | — |  |
| 71 | 151 | Message Box > Set Button Text... > Button Yes | `Set to <p0> for Yes Text` |  | expression chaîne « Button text » | — |  |
| 72 | 152 | Message Box > Set Button Text... > Button 'Yes to All' | `Set to <p0> for 'Yes to All' Text` |  | expression chaîne « Button text » | — |  |
| 73 | 153 | Message Box > Set Type... > Custom Buttons | `Box Custom Buttons (<p0>)` |  | expression numérique « Use Custom Buttons (0:Off 1:Yes) » | — |  |
| 74 | 154 | Message Box > Set Icon... > Filename Image | `Set Icon filename to <p0>` |  | expression chaîne « Icon Filename » | — |  |
| 75 | 155 | Message Box > Set Style > Background Filename | `Set Background filename to <p0>` |  | expression chaîne | — |  |
| 76 | 156 | Message Box > Set Style > Sizing, prefer width | `Sizing Prefer width` |  |  | — |  |
| 77 | 157 | Message Box > Set Style > No Sound | `No Sound` |  |  | — |  |
| 78 | 158 | Message Box > Set Style > Enable Close button | `Enable Close Button` |  |  | — |  |
| 79 | 159 | Message Box > Set Style > No Title Bar | `Hide Title Bar` |  |  | — |  |
| 80 | 160 | Message Box > Set Style > Use Aero Glass | `Use Glass with <p0> percentage of MsgBox` |  | expression numérique « Set Glass Percentage (0-100) » | — |  |
| 81 | 161 | Message Box > Set Style > No Button Frame | `Hide Frame Button` |  |  | — |  |
| 82 | 162 | Message Box > Set Show Position > Show at... | `Show at position <p0>` |  | position « Show at... » | — |  |
| 83 | 163 | Message Box > Set Style > Set Icon Title Bar | `Set Icon# <p0> in Title bar` |  | expression numérique « Image Number for Icon title » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | MsgBoxRetStr | `MsgBox$(` |  | → chaîne | — |  |
| 1 | 81 | MsgBoxRetVal | `MsgBox(` |  |  | — |  |
| 2 | 82 | Get Asker Text | `Asker$(` |  | → chaîne | — |  |
| 3 | 83 | RTrim Text | `RTrim$(` |  | chaîne « String to Trim » → chaîne | — |  |
| 4 | 84 | Str Trim Text | `StrToTrim$(` |  | chaîne « String to Trim » ; chaîne « Trim Text » → chaîne | — |  |
| 5 | 85 | CHR$() | `CHR$(` |  | nombre « ASCII number » → chaîne | — |  |
| 6 | 86 | Replicate Chars | `Replicate$(` |  | chaîne « String to Trim » ; nombre « Time to repeat » → chaîne | — |  |
