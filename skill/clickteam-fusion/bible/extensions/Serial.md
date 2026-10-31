# Extension Serial

- Fichier : `Serial.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Data is waiting | `<objet>: Data is waiting` |  |  | — |  |
| 1 | -82 | COM port is open | `<objet> : COM port is open` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open serial port | `<objet>: Open COM <p0> with a baud rate of <p1>` |  | expression numérique « COM Port (ex: 3) » ; expression numérique « Baud (ex: 9600) » | — |  |
| 1 | 81 | Send data | `<objet>: Send <p0>` |  | expression chaîne « Send data to COM port » | — |  |
| 2 | 82 | Close serial port | `Close connection` |  |  | — |  |
| 3 | 83 | Clear last error | `Clear last error` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get data | `GetData(` |  | → chaîne | — |  |
| 1 | 81 | Get bytes waiting | `BytesWaiting(` |  |  | — |  |
| 2 | 82 | Get last error | `LastError$(` |  | → chaîne | — |  |
