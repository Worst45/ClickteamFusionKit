# Extension CRC32

- Fichier : `CRC32.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | CRC32 of string (numeric) | `CRC32(` |  | chaîne « String » | — |  |
| 1 | 81 | CRC32 of string (text) | `CRC32$(` |  | chaîne « String » → chaîne | — |  |
| 2 | 82 | CRC32 of file (numeric) | `FileCRC32(` |  | chaîne « Filename » | — |  |
| 3 | 83 | CRC32 of file (text) | `FileCRC32$(` |  | chaîne « Filename » → chaîne | — |  |
