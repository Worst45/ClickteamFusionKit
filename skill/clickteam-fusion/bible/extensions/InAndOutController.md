# Extension InAndOutController

- Fichier : `InAndOutController.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set object | `Set object to <p0>` | Fixer l'objet à <p0> | objet « Select an object » | — |  |
| 1 | 81 | Set object from fixed value | `Set object with fixed value <p0>` | Fixer l'objet à la valeur non modifiable <p0> | expression numérique « fixed value » | — |  |
| 2 | 82 | Position object at start | `Position object at start` | Positionner l'objet au début |  | — |  |
| 3 | 83 | Position object at end | `Position object at end` | Positionner l'objet à la fin |  | — |  |
| 4 | 84 | Move object in | `Move object in` | Faire entrer l'objet |  | — |  |
| 5 | 85 | Move object out | `Move object out` | Faire sortir l'objet |  | — |  |
