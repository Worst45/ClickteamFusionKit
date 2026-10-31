# Extension Location

- Fichier : `Location.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Location services enabled? | `Are location services enabled?` | Les services GPS sont disponibles? |  | — |  |
| 1 | -82 | A new location is available | `A new location is available` | Une nouvelle position est disponible |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get location | `Force location retrieval` | Force la recupération de la position |  | — |  |
| 1 | 81 | Set distance filter | `Set distance filter to <p0>` | Fixer la distance à <p0> | expression numérique « Enter the distance filter in meters » | — |  |
| 2 | 82 | Set accuracy | `Set location accuracy to <p0>` | Fixer la précision à <p0> | expression numérique « Enter the accuracy (0 to 4) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Coordinates > Latitude | `Latitude(` | Latitude |  | — |  |
| 1 | 81 | Coordinates > Longitude | `Longitude(` | Longitude |  | — |  |
| 2 | 82 | Coordinates > Altitude | `Altitude(` | Altitude |  | — |  |
| 3 | 83 | Other values > Course | `Course(` | Parcours |  | — |  |
| 4 | 84 | Other values > Speed | `Speed(` | Vitesse |  | — |  |
| 5 | 85 | Other values > Time since last update | `TimeLast(` | Temps depuis la dernière mise a jour |  | — |  |
| 6 | 86 | Other values > Distance filter | `DistFilter(` | Filtre de distance |  | — |  |
| 7 | 87 | Other values > Accuracy | `Accuracy(` | Précision |  | — |  |
