# Extension LiveReceiver

- Fichier : `LiveReceiver.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Data received | `<objet> : Data received` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start download (POST) | `Start download from <p0> with POST string <p1>` |  | expression chaîne « URL » ; expression chaîne « POST string (id=value##id2=value2##id3=value3) » | — |  |
| 1 | 81 | Start download (GET) | `Start download from <p0>` |  | expression chaîne « URL » | — |  |
| 2 | 82 | Set cookie file | `Set cookie file to <p0>` |  | nom de fichier « Cookie file » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get received data | `Received$(` |  | → chaîne | — |  |
