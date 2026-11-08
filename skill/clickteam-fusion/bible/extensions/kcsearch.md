# Extension kcsearch

- File: `kcsearch.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Text found ? | `Text found` | Texte trouvé |  |
| 1 | -82 | Search in progress ? | `Search in progress` | Recherche en cours |  |
| 2 | -83 | Index Built ? | `Index built` | Index construit |  |
| 3 | -84 | Building index ? | `Building index` | Construction de l'index |  |
| 4 | -85 | Whole word search ? | `Whole word search` | Recherche mot complet |  |
| 5 | -86 | Case search ? | `Case search` | Recherche avec la casse |  |
| 6 | -87 | Search in subdirectories ? | `Search in subdirectories` | Recherche dans les sous-répertoires |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Simple search > Find text | `Find text <p0>` | Trouver le texte <p0> | (unreliable parameters) |
| 1 | 81 | Simple search > Stop searching | `Stop searching` | Arrêt recherche |  |
| 2 | 82 | Simple search > Find previous | `Find previous` | Trouver précédent |  |
| 3 | 83 | Simple search > Find next | `Find next` | Cherche texte |  |
| 4 | 84 | Index search > Build index | `Build index for <p0>` | Construire l'index de <p0> | (unreliable parameters) |
| 5 | 85 | Index search > Stop building index | `Stop build index` | Arrêt construction index |  |
| 6 | 86 | Index search > Load index | `Load index <p0>` | Charger l'index <p0> | (unreliable parameters) |
| 7 | 87 | Index search > Save index | `Save index <p0>` | Sauver l'index <p0> | (unreliable parameters) |
| 8 | 88 | Index search > Find first entry in index | `Find first entry in index` | Trouver la première entrée de l'index |  |
| 9 | 89 | Index search > Find previous entry in index | `Find previous entry in index` | Trouver entrée précédente dans l'index |  |
| 10 | 90 | Index search > Find next entry in index | `Find next entry in index` | Trouver entrée suivante dans l'index |  |
| 11 | 91 | Set priority | `Set priority to <p0>` | Fixer la priorité à <p0> | (unreliable parameters) |
| 12 | 92 | Set search directory | `Set search directory to <p0>` | Fixer le répertoire de recherche à <p0> | (unreliable parameters) |
| 13 | 93 | Set search files wildcards | `Set search files wildcards to <p0>` | Fixer les jokers de recherche à <p0> | (unreliable parameters) |
| 14 | 94 | Whole word search > On | `Set whole word search on` | Recherche sur tout le mot ON |  |
| 15 | 95 | Whole word search > Off | `Set whole word search off` | Recherche sur tout le mot OFF |  |
| 16 | 96 | Case search > On | `Set case search on` | Mode recherche avec casse ON |  |
| 17 | 97 | Case search > Off | `Set case search off` | Mode recherche avec casse OFF |  |
| 18 | 98 | Search in subdirectories > On | `Set subdirectories search on` | Recherche dans les sous-répertoires ON |  |
| 19 | 99 | Search in subdirectories > Off | `Set subdirectories search off` | Recherche dans les sous-répertoires OFF |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get result file name | `Search filename$(` | Nom de fichier résultat |  |
| 1 | 81 | Get result line number | `Search line(` | Numéro de ligne résultat |  |
| 2 | 82 | Get result position in line | `Search position(` | Position dans la ligne résultat |  |
| 3 | 83 | Get index building progression | `Search idx prog(` | Progression de la contruction de l'index |  |
| 4 | 84 | Get searched text | `Search text$(` | Texte recherché |  |
| 5 | 85 | Get searched directory | `Search directory$(` | Répertoire recherché |  |
| 6 | 86 | Get searched wildcards | `Search wildcards$(` | Jokers recherchés |  |
