# Extension dynamicgrid

- Fichier : `dynamicgrid.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Grid Size | `Set Grid Size = <p0> x <p1>` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 1 | 81 | Set Cell Size | `Set Cell Size = <p0> x <p1>` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 2 | 82 | Vertical Component > Enable | `Enable Vertical Component` |  |  | — |  |
| 3 | 83 | Vertical Component > Disable | `Disable Vertical Component` |  |  | — |  |
| 4 | 84 | Horizonal Component > Enable | `Enable Horizonal Component` |  |  | — |  |
| 5 | 85 | Horizonal Component > Disable | `Disable Horizonal Component` |  |  | — |  |
| 6 | 86 | Intersect Component > Enable | `Enable Intersect Component` |  |  | — |  |
| 7 | 87 | Intersect Component > Disable | `Disable Intersect Component` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Grid Width | `Width(` |  |  | — |  |
| 1 | 81 | Grid Height | `Height(` |  |  | — |  |
| 2 | 82 | Cell Width | `CellWidth(` |  |  | — |  |
| 3 | 83 | Cell Height | `CellHeight(` |  |  | — |  |
| 4 | 84 | Components > Vertical Enabled | `VerticalEnabled(` |  |  | — |  |
| 5 | 85 | Components > Horizontal Enabled | `HorizontalEnabled(` |  |  | — |  |
| 6 | 86 | Components > Intersect Enabled | `IntersectEnabled(` |  |  | — |  |
