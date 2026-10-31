# Extension TimeString

- Fichier : `TimeString.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get TimeString | `TimeString$(` |  | chaîne « Format (See Help) » → chaîne | — |  |
| 1 | 81 | Create TimeString | `CustomTimeString$(` |  | chaîne « Format (See Help) » ; nombre « Year » ; nombre « Day of the Year (0-365) » ; nombre « Month (0-11) » ; nombre « Day of the Month (1-31) » ; nombre « Day of the Week (0-6) » ; nombre « Hour (0-23) » ; nombre « Minute (0-59) » ; nombre « Second (0-59) » → chaîne | — |  |
