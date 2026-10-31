# Extension urlencoder

- Fichier : `urlencoder.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encode Spaces as '+' | `Encode Spaces as '+'` |  |  | — |  |
| 1 | 81 | Encode Spaces as '%20' | `Encode Spaces as '%<p2>0'` |  |  | — |  |
| 2 | 82 | Encode Control Characters (:/?=#) | `Encode Control Characters` |  |  | — |  |
| 3 | 83 | Don't Encode Control Characters (:/?=#) | `Don't Encode Control Characters` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encode URL | `urlEncode$(` |  | chaîne « Enter URL or URL Part » → chaîne | — |  |
| 1 | 81 | Misc. > Get MD5 Hash | `MD5$(` |  | chaîne « Enter String to be Hashed » → chaîne | — |  |
