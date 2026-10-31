# Extension maskedit

- Fichier : `maskedit.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Window > Is Edit Mask Visible? | `<objet>: Edit Mask is Visible` |  |  | — |  |
| 1 | -82 | Window > Is Edit Mask Enabled? | `<objet>: Edit Mask is Enabled` |  |  | — |  |
| 2 | -83 | Window > Does Edit Mask Have Focus? | `<objet>: Edit Mask has Focus` |  |  | — |  |
| 3 | -84 | On Successful Modification | `<objet>: On Successful Modification` |  |  | — |  |
| 4 | -85 | On Unsuccessful Modification | `<objet>: On Unsuccessful Modification` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Set X Position | `Set X Position to <p0>` |  | expression numérique « X Position » | — |  |
| 1 | 81 | Window > Set Y Position | `Set Y Position to <p0>` |  | expression numérique « Y Position » | — |  |
| 2 | 82 | Window > Set Width | `Set Width to <p0>` |  | expression numérique « Width » | — |  |
| 3 | 83 | Window > Set Height | `Set Height to <p0>` |  | expression numérique « Height » | — |  |
| 4 | 84 | Window > Enable | `Enable` |  |  | — |  |
| 5 | 85 | Window > Disable | `Disable` |  |  | — |  |
| 6 | 86 | Window > Show | `Show` |  |  | — |  |
| 7 | 87 | Window > Hide | `Hide` |  |  | — |  |
| 8 | 88 | Window > Set Focus On | `Set Focus On` |  |  | — |  |
| 9 | 89 | Window > Set Focus Off | `Set Focus Off` |  |  | — |  |
| 10 | 90 | Set Mask | `Set Mask to <p0>` |  | expression chaîne « Mask » | — |  |
| 11 | 91 | Set Data | `Set Data to <p0>` |  | expression chaîne « Data » | — |  |
| 12 | 92 | Set Prompt Character | `Set Prompt Character to <p0>` |  | expression chaîne « Prompt Character (Default '_') » | — |  |
| 13 | 93 | Set Font | `Set Font to <p0>, Size <p1>` |  | expression chaîne « Font Name » ; expression numérique « Font Size » | — |  |
| 14 | 94 | Set Text Color | `Set Text Color to <p0>` |  | couleur « Text Color » | — |  |
| 15 | 95 | Set Background Color | `Set Background Color to <p0>` |  | couleur « Background Color » | — |  |
| 16 | 96 | Go to Position | `Go to Position <p0>` |  | expression numérique « Position » | — |  |
| 17 | 97 | Set Cell (Character) | `Set Cell <p0> to <p1> (Character)` |  | expression numérique « Cell » ; expression chaîne « Character » | — |  |
| 18 | 98 | Set Cell (Number) | `Set Cell <p0> to <p1> (Number)` |  | expression numérique « Cell » ; expression numérique « Number » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Get X Position | `getX(` |  |  | — |  |
| 1 | 81 | Window > Get Y Position | `getY(` |  |  | — |  |
| 2 | 82 | Window > Get Width | `getW(` |  |  | — |  |
| 3 | 83 | Window > Get Height | `getH(` |  |  | — |  |
| 4 | 84 | Get Data | `getData$(` |  | → chaîne | — |  |
| 5 | 85 | Get Text | `getText$(` |  | → chaîne | — |  |
| 6 | 86 | Get Character at Cell | `getCell$(` |  | nombre → chaîne | — |  |
| 7 | 87 | Get Token (String) | `getToken$(` |  | nombre → chaîne | — |  |
| 8 | 88 | Get Number at Cell | `getCellV(` |  | nombre | — |  |
| 9 | 89 | Window > Get Window Handle (Advanced) | `hwnd(` |  |  | — |  |
