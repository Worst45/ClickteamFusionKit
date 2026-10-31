# Extension AdvComment

- Fichier : `AdvComment.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Comment (Blank) | `<p0>` |  | expression chaîne « Comment » | — |  |
| 1 | -82 | Comment (Object) | `<objet>: <p0>` |  | expression chaîne « Comment » | — |  |
| 2 | -83 | Comments (Text) > Regular > Comment | `Comment: <p0>` |  | expression chaîne « Comment » | — |  |
| 3 | -84 | Comments (Text) > Regular > Note | `Note: <p0>` |  | expression chaîne « Comment » | — |  |
| 4 | -85 | Comments (Text) > Regular > Reminder | `Reminder: <p0>` |  | expression chaîne « Comment » | — |  |
| 5 | -86 | Comments (Text) > Regular > Important | `Important: <p0>` |  | expression chaîne « Comment » | — |  |
| 6 | -87 | Comments (Text) > Regular > About This Event | `About This Event: <p0>` |  | expression chaîne « Comment » | — |  |
| 7 | -88 | Comments (Text) > All Caps > Comment | `COMMENT: <p0>` |  | expression chaîne « Comment » | — |  |
| 8 | -89 | Comments (Text) > All Caps > Note | `NOTE: <p0>` |  | expression chaîne « Comment » | — |  |
| 9 | -90 | Comments (Text) > All Caps > Reminder | `REMINDER: <p0>` |  | expression chaîne « Comment » | — |  |
| 10 | -91 | Comments (Text) > All Caps > Important | `IMPORTANT: <p0>` |  | expression chaîne « Comment » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Comment | `<p0>` |  | expression chaîne « Comment » | — |  |
| 1 | 81 | Comments (Text) > Regular > Comment | `Comment: <p0>` |  | expression chaîne « Comment » | — |  |
| 2 | 82 | Comments (Text) > Regular > Note | `Note: <p0>` |  | expression chaîne « Comment » | — |  |
| 3 | 83 | Comments (Text) > Regular > Reminder | `Reminder: <p0>` |  | expression chaîne « Comment » | — |  |
| 4 | 84 | Comments (Text) > Regular > Important | `Important: <p0>` |  | expression chaîne « Comment » | — |  |
| 5 | 85 | Comments (Text) > Regular > About Action Above | `About Action Above: <p0>` |  | expression chaîne « Comment » | — |  |
| 6 | 86 | Comments (Text) > Regular > About Action Below | `About Action Below: <p0>` |  | expression chaîne « Comment » | — |  |
| 7 | 87 | Comments (Text) > All Caps > Comment | `COMMENT: <p0>` |  | expression chaîne « Comment » | — |  |
| 8 | 88 | Comments (Text) > All Caps > Note | `NOTE: <p0>` |  | expression chaîne « Comment » | — |  |
| 9 | 89 | Comments (Text) > All Caps > Reminder | `REMINDER: <p0>` |  | expression chaîne « Comment » | — |  |
| 10 | 90 | Comments (Text) > All Caps > Important | `IMPORTANT: <p0>` |  | expression chaîne « Comment » | — |  |
