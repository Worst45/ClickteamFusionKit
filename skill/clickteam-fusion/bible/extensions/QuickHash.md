# Extension QuickHash

- Fichier : `QuickHash.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set file | `Set current file to: <p0>` |  | expression chaîne « Current file » | — |  |
| 6 | 86 | GHash > GHash | `Perform a GHash hash` |  |  | — |  |
| 7 | 87 | GOST > GOST-Hash | `Perform a GOST-Hash hash` |  |  | — |  |
| 8 | 88 | MD > MD2 | `Perform a MD2 hash` |  |  | — |  |
| 9 | 89 | MD > MD4 | `Perform a MD4 hash` |  |  | — |  |
| 10 | 90 | MD > MD5 | `Perform a MD5 hash` |  |  | — |  |
| 11 | 91 | SHA > SHA-1 | `Perform a SHA-1 hash` |  |  | — |  |
| 12 | 92 | SHA > SHA-2-256 | `Perform a SHA-2 256bit hash` |  |  | — |  |
| 13 | 93 | SHA > SHA-2-384 | `Perform a SHA-2 384bit hash` |  |  | — |  |
| 14 | 94 | SHA > SHA-2-512 | `Perform a SHA-2 512bit hash` |  |  | — |  |
| 15 | 95 | Tiger > Tiger | `Perform a Tiger hash` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get hash | `get Hash$(` |  | → chaîne | — |  |
| 1 | 81 | Get hash length | `get Hash Length(` |  |  | — |  |
| 2 | 82 | MD > MD2 | `get MDTwo Hash$(` |  | chaîne → chaîne | — |  |
| 3 | 83 | MD > MD4 | `get MDFour Hash$(` |  | chaîne → chaîne | — |  |
| 4 | 84 | SHA > SHA-1 | `get SHAOne Hash$(` |  | chaîne → chaîne | — |  |
| 5 | 85 | MD > MD5 | `get MDFive Hash$(` |  | chaîne → chaîne | — |  |
