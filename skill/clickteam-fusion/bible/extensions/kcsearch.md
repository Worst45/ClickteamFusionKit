# Extension kcsearch

- File: `kcsearch.mfx` — installed with Fusion
- Name(s) shown in projects: “Search”
- Usage in the corpus: 18 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Text found ? | `Text found` | Texte trouvé |  | 1 (1 proj.) | `Search: Event ID -81, 0 Parameters` |
| 1 | -82 | Search in progress ? | `Search in progress` | Recherche en cours |  | — |  |
| 2 | -83 | Index Built ? | `Index built` | Index construit |  | 2 (1 proj.) | `Search: Event ID -83, 0 Parameters` |
| 3 | -84 | Building index ? | `Building index` | Construction de l'index |  | — |  |
| 4 | -85 | Whole word search ? | `Whole word search` | Recherche mot complet |  | — |  |
| 5 | -86 | Case search ? | `Case search` | Recherche avec la casse |  | — |  |
| 6 | -87 | Search in subdirectories ? | `Search in subdirectories` | Recherche dans les sous-répertoires |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Simple search > Find text | `Find text <p0>` | Trouver le texte <p0> | (unreliable parameters) | — |  |
| 1 | 81 | Simple search > Stop searching | `Stop searching` | Arrêt recherche |  | — |  |
| 2 | 82 | Simple search > Find previous | `Find previous` | Trouver précédent |  | — |  |
| 3 | 83 | Simple search > Find next | `Find next` | Cherche texte |  | — |  |
| 4 | 84 | Index search > Build index | `Build index for <p0>` | Construire l'index de <p0> | (unreliable parameters) | 2 (1 proj.) | `Search : Event ID 84, 1 Parameters { Expression ID 80("Word Search Entry") }` |
| 5 | 85 | Index search > Stop building index | `Stop build index` | Arrêt construction index |  | 2 (1 proj.) | `Search : Event ID 85, 0 Parameters` |
| 6 | 86 | Index search > Load index | `Load index <p0>` | Charger l'index <p0> | (unreliable parameters) | — |  |
| 7 | 87 | Index search > Save index | `Save index <p0>` | Sauver l'index <p0> | (unreliable parameters) | 1 (1 proj.) | `Search : Event ID 87, 1 Parameters { Apppath$ + "search.lst" }` |
| 8 | 88 | Index search > Find first entry in index | `Find first entry in index` | Trouver la première entrée de l'index |  | 1 (1 proj.) | `Search : Event ID 88, 0 Parameters` |
| 9 | 89 | Index search > Find previous entry in index | `Find previous entry in index` | Trouver entrée précédente dans l'index |  | — |  |
| 10 | 90 | Index search > Find next entry in index | `Find next entry in index` | Trouver entrée suivante dans l'index |  | 1 (1 proj.) | `Search : Event ID 90, 0 Parameters` |
| 11 | 91 | Set priority | `Set priority to <p0>` | Fixer la priorité à <p0> | (unreliable parameters) | — |  |
| 12 | 92 | Set search directory | `Set search directory to <p0>` | Fixer le répertoire de recherche à <p0> | (unreliable parameters) | 2 (1 proj.) | `Search : Event ID 92, 1 Parameters { Expression ID 80("Directory Entry") }` |
| 13 | 93 | Set search files wildcards | `Set search files wildcards to <p0>` | Fixer les jokers de recherche à <p0> | (unreliable parameters) | 2 (1 proj.) | `Search : Event ID 93, 1 Parameters { Expression ID 80("Wildcard Entry") }` |
| 14 | 94 | Whole word search > On | `Set whole word search on` | Recherche sur tout le mot ON |  | — |  |
| 15 | 95 | Whole word search > Off | `Set whole word search off` | Recherche sur tout le mot OFF |  | 1 (1 proj.) | `Search : Event ID 95, 0 Parameters` |
| 16 | 96 | Case search > On | `Set case search on` | Mode recherche avec casse ON |  | — |  |
| 17 | 97 | Case search > Off | `Set case search off` | Mode recherche avec casse OFF |  | 1 (1 proj.) | `Search : Event ID 97, 0 Parameters` |
| 18 | 98 | Search in subdirectories > On | `Set subdirectories search on` | Recherche dans les sous-répertoires ON |  | — |  |
| 19 | 99 | Search in subdirectories > Off | `Set subdirectories search off` | Recherche dans les sous-répertoires OFF |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get result file name | `Search filename$(` | Nom de fichier résultat |  | 1 (1 proj.) | `Expression ID 80("Search")` |
| 1 | 81 | Get result line number | `Search line(` | Numéro de ligne résultat |  | 1 (1 proj.) | `Expression ID 81("Search")` |
| 2 | 82 | Get result position in line | `Search position(` | Position dans la ligne résultat |  | — |  |
| 3 | 83 | Get index building progression | `Search idx prog(` | Progression de la contruction de l'index |  | — |  |
| 4 | 84 | Get searched text | `Search text$(` | Texte recherché |  | — |  |
| 5 | 85 | Get searched directory | `Search directory$(` | Répertoire recherché |  | — |  |
| 6 | 86 | Get searched wildcards | `Search wildcards$(` | Jokers recherchés |  | — |  |
