# Extension UHSD

- Fichier : `UHSD.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Has an Error Occured? | `<objet>: On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add a Field | `Add Field <p0> with Data <p1>` |  | expression chaîne « Enter the Name of the Field » ; expression chaîne « Enter the Data to be Stored in the Field » | — |  |
| 1 | 81 | Set a Field | `Set Data of Field <p0> to <p1>` |  | expression chaîne « Enter the Name of the Field » ; expression chaîne « Enter the Data to be Stored in the Field » | — |  |
| 2 | 82 | Set Encryption Key | `Set Encryption Key to <p0>` |  | expression chaîne « Enter the Encryption Key » | — |  |
| 3 | 83 | Set Fields to be Encrypted | `Encrypt <p0> and <p1> into <p2>` |  | expression chaîne « Enter the First Field to Encrypt (Order Matters) » ; expression chaîne « Enter the Second Field to Encrypt (Order Matters) » ; expression chaîne « Enter the Field in Which to Store the Encrypted Fields » | — |  |
| 4 | 84 | Set Address of Add.cgi | `Set Address of Add.cgi to <p0>` |  | expression chaîne « Enter the Address of Add.cgi (http://www.domain.com/folders/add.cgi) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Data from a Field | `FieldData$(` |  | chaîne → chaîne | — |  |
| 1 | 81 | Generate Query String | `QueryString$(` |  | → chaîne | — |  |
| 2 | 82 | Generate Full URL | `URL$(` |  | → chaîne | — |  |
| 3 | 83 | Get Current Error Code | `ErrorCode(` |  |  | — |  |
