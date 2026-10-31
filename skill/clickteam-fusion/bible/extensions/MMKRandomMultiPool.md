# Extension MMKRandomMultiPool

- Fichier : `MMKRandomMultiPool.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 1 | -82 | Pool conditions > Pool is empty | `<objet>: Pool <p0> empty` |  | expression chaîne « Pool ID » | — |  |
| 2 | -83 | Generated numbers > On number generated | `<objet>: On number Generated from pool <p0>` |  | expression chaîne « Pool ID » | — |  |
| 3 | -84 | Loop > On number iterated | `<objet>: On number iterated in pool <p0>` |  | expression chaîne « Pool ID » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Setup > Fill Pool | `Fill pool <p0>` |  | expression chaîne « Pool ID » | — |  |
| 1 | 81 | Pool operations > Generate a number | `Generate number from pool <p0>` |  | expression chaîne « Pool ID » | — |  |
| 2 | 82 | Pool operations > Add a number | `Add number <p1> to pool <p0>` |  | expression chaîne « Pool ID » ; expression numérique « Number to add » | — |  |
| 3 | 83 | Pool operations > Remove all occurrences of number | `Remove all occurrences of number <p1> from pool <p0>` |  | expression chaîne « Pool ID » ; expression numérique « Number to remove » | — |  |
| 4 | 84 | Setup > Load pool from string | `Load pool <p0> from string <p1>` |  | expression chaîne « Pool ID » ; expression chaîne « Values » | — |  |
| 5 | 85 | Setup > Files > Load pool from file as list | `Load pool <p0> from file <p1>` |  | expression chaîne « Pool ID » ; expression chaîne « Filename » | — |  |
| 6 | 86 | Setup > Files > Save pool to file as list | `Save pool <p0> to file <p1>` |  | expression chaîne « Pool ID » ; expression chaîne « Filename » | — |  |
| 7 | 87 | Setup > Set pool limits | `Set Limits of pool <p0> to (<p1>-<p2>)` |  | expression chaîne « Pool ID » ; expression numérique « Min » ; expression numérique « Max » | — |  |
| 8 | 88 | Setup > Set manual seed | `Set seed for pool <p0> to <p1>` |  | expression chaîne « Pool ID » ; expression numérique « Seed value » | — |  |
| 9 | 89 | Pool operations > Shuffle (Randomize seed) | `Randomize seed for pool <p0>` |  | expression chaîne « Pool ID » | — |  |
| 10 | 90 | Pool operations > Loops > Iterate over all numbers in pool | `Iterate over all numbers in pool <p0>` |  | expression chaîne « Pool ID » | — |  |
| 11 | 91 | Pool operations > Loops > Iterate over all utilized numbers in pool | `Iterate over all utilized number of pool <p0>` |  | expression chaîne « Pool ID » | — |  |
| 12 | 92 | Setup > Files > Load pool from file as string | `Load pool <p0> from file <p1> as string` |  | expression chaîne « Pool ID » ; expression chaîne « Filename » | — |  |
| 13 | 93 | Setup > Files > Save pool to file as string | `Save pool <p0> to file <p1> as string with delimeter <p2>` |  | expression chaîne « Pool ID » ; expression chaîne « Filename » ; expression chaîne « Delimiter » | — |  |
| 14 | 94 | Pool operations > Sort | `Sort pool <p0> [<p1>] (0:Dsc, 1:Asc) [<p2>] (0:Pool, 1:Utilized, 2:Both)` |  | expression chaîne « Pool ID » ; expression numérique « Order (0:Dsc, 1:Asc) » ; expression numérique « What to sort (0:Pool, 1:Utilized, 2: Both) » | — |  |
| 15 | 95 | Setup > Clear Pool | `Clear pool <p0>` |  | expression chaîne « Pool ID » | — |  |
| 16 | 96 | Setup > Load pool from delimited string (slower) | `Load pool <p0> from delimited string <p1>` |  | expression chaîne « Pool ID » ; expression chaîne « Values » ; expression chaîne « List of Delimiters » | — |  |
| 17 | 97 | Setup > Remove All Pools | `Delete all pools` |  |  | — |  |
| 18 | 98 | Pool operations > Remove occurrences of number and trigger | `Remove all occurrences of number <p1> from pool <p0> and trigger generation` |  | expression chaîne « Pool ID » ; expression numérique « Number to remove » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Generated numbers > Get generated number | `Last Generated Number(` |  | chaîne « Pool ID » | — |  |
| 1 | 81 | Pool > Get number of > Numbers remaining in pool | `Numbers in pool(` |  | chaîne « Pool ID » | — |  |
| 2 | 82 | Loops > Get iterated number | `Iteration value(` |  |  | — |  |
| 3 | 83 | Pool > Get number of > Numbers utilized from pool | `Number of Numbers utilized(` |  | chaîne « Pool ID » | — |  |
| 4 | 84 | Generated numbers > Get and use new generated number | `Fast Generate Number(` |  | chaîne « Pool ID » | — |  |
| 5 | 85 | Pool > Get minimum of pool | `Get Min of Pool(` |  | chaîne « Pool ID » | — |  |
| 6 | 86 | Pool > Get maximum of pool | `Get Max of Pool(` |  | chaîne « Pool ID » | — |  |
| 7 | 87 | Pool > Get as string > Pool numbers | `Get Pool Numbers$(` |  | chaîne « Pool ID » ; chaîne « Delimiter » → chaîne | — |  |
| 8 | 88 | Pool > Get as string > Pool utilized numbers | `Get Utilized Numbers$(` |  | chaîne « Pool ID » ; chaîne « Delimiter » → chaîne | — |  |
| 9 | 89 | Pool > Get seed of pool | `Get seed of pool(` |  | chaîne « Pool ID » → chaîne | — |  |
