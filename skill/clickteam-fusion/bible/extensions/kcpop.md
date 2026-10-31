# Extension kcpop

- Fichier : `kcpop.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Ok button clicked | `<objet>: OK button Clicked` |  |  | — |  |
| 1 | -82 | Cancel button clicked | `<objet>: Cancel button Clicked` |  |  | — |  |
| 2 | -83 | Yes button clicked | `<objet>: Yes button Clicked` |  |  | — |  |
| 3 | -84 | No button clicked | `<objet>: No button Clicked` |  |  | — |  |
| 4 | -85 | Abort button clicked | `<objet>: Abort button Clicked` |  |  | — |  |
| 5 | -86 | Retry button clicked | `<objet>: Retry button Clicked` |  |  | — |  |
| 6 | -87 | Ignore button clicked | `<objet>: Ignore button Clicked` |  |  | — |  |
| 7 | -88 | Compare last Message | `<objet>: Last Message <p0>` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ok button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (OK-Normal)` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Ok button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Exclamation)` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Ok button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Information)` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Ok button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Question mark)` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Ok button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Stop sign)` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Ok and Cancel button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Normal)` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Ok and Cancel button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Exclamation)` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Ok and Cancel button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Information)` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Ok and Cancel button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Question mark)` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Ok and Cancel button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Stop sign)` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Yes and No button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Normal)` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Yes and No button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Exclamation)` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Yes and No button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Information)` |  | (paramètres non fiables) | — |  |
| 13 | 93 | Yes and No button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Question mark)` |  | (paramètres non fiables) | — |  |
| 14 | 94 | Yes and No button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Stop sign)` |  | (paramètres non fiables) | — |  |
| 15 | 95 | Yes, No, and Cancel button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Normal)` |  | (paramètres non fiables) | — |  |
| 16 | 96 | Yes, No, and Cancel button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Exclamation)` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Yes, No, and Cancel button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Information)` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Yes, No, and Cancel button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Question mark)` |  | (paramètres non fiables) | — |  |
| 19 | 99 | Yes, No, and Cancel button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Stop sign)` |  | (paramètres non fiables) | — |  |
| 20 | 100 | Retry and Cancel button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Normal)` |  | (paramètres non fiables) | — |  |
| 21 | 101 | Retry and Cancel button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Exclamation)` |  | (paramètres non fiables) | — |  |
| 22 | 102 | Retry and Cancel button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Information)` |  | (paramètres non fiables) | — |  |
| 23 | 103 | Retry and Cancel button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Question mark)` |  | (paramètres non fiables) | — |  |
| 24 | 104 | Retry and Cancel button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Stop sign)` |  | (paramètres non fiables) | — |  |
| 25 | 105 | Abort, Retry, and Ignore button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Normal)` |  | (paramètres non fiables) | — |  |
| 26 | 106 | Abort, Retry, and Ignore button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Exclamation)` |  | (paramètres non fiables) | — |  |
| 27 | 107 | Abort, Retry, and Ignore button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Information)` |  | (paramètres non fiables) | — |  |
| 28 | 108 | Abort, Retry, and Ignore button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Question mark)` |  | (paramètres non fiables) | — |  |
| 29 | 109 | Abort, Retry, and Ignore button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Stop sign)` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Last Message | `lastmsg$(` |  |  | — |  |
