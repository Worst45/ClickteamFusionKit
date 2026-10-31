# Extension Location

- File: `Location.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Location services enabled? | `Are location services enabled?` | Les services GPS sont disponibles? |  | — |  |
| 1 | -82 | A new location is available | `A new location is available` | Une nouvelle position est disponible |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get location | `Force location retrieval` | Force la recupération de la position |  | — |  |
| 1 | 81 | Set distance filter | `Set distance filter to <p0>` | Fixer la distance à <p0> | numeric expression “Enter the distance filter in meters” | — |  |
| 2 | 82 | Set accuracy | `Set location accuracy to <p0>` | Fixer la précision à <p0> | numeric expression “Enter the accuracy (0 to 4)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Coordinates > Latitude | `Latitude(` | Latitude |  | — |  |
| 1 | 81 | Coordinates > Longitude | `Longitude(` | Longitude |  | — |  |
| 2 | 82 | Coordinates > Altitude | `Altitude(` | Altitude |  | — |  |
| 3 | 83 | Other values > Course | `Course(` | Parcours |  | — |  |
| 4 | 84 | Other values > Speed | `Speed(` | Vitesse |  | — |  |
| 5 | 85 | Other values > Time since last update | `TimeLast(` | Temps depuis la dernière mise a jour |  | — |  |
| 6 | 86 | Other values > Distance filter | `DistFilter(` | Filtre de distance |  | — |  |
| 7 | 87 | Other values > Accuracy | `Accuracy(` | Précision |  | — |  |
