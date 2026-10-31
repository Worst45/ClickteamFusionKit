# Extension edetect

- Fichier : `edetect.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Detect | `<objet> On Detect` |  |  | — |  |
| 1 | -82 | Check for collision in a detector | `Detector number <p0> is overlaping an obscale` |  | expression numérique « Detector id » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select object | `Select <p0> as detect object` |  | objet « Select object » | — |  |
| 1 | 81 | Detect in offset | `Detect overlaps <p0> , <p1> pixels from the object for detector number <p2>` |  | expression numérique « X offset » ; expression numérique « Y offset » ; expression numérique « Detector ID » | — |  |
| 2 | 82 | On detection > Object is overlapping an obstcale | `Object is overlapping an obscale` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | On detection > Detector ID | `detector(` |  |  | — |  |
