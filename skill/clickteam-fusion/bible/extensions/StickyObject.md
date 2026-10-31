# Extension StickyObject

- Fichier : `StickyObject.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On broken connection | `<objet> On broken connection` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Relative attach two objects | `Flexible attach object <p0> to parent: <p1>` |  | objet « Select child object » ; objet « Select parent object » ; expression numérique « Rotate with parent: 0=no change, 1=based on directions (32), 2=based on angles (360) » ; expression numérique « Change dir with parent: 0=no change, 1= change dir, 2=change angle, 3=both » | — |  |
| 1 | 81 | Static attach two objects | `Static attach object <p0> and <p1>` |  | objet « Select child object » ; objet « Select parent object » ; expression numérique « Rotate with parent: 0=no change, 1=based on directions (32), 2=based on angles (360) » ; expression numérique « Change dir with parent: 0=no change, 1= change dir, 2=change angle, 3=both » | — |  |
| 2 | 82 | Detach all objects | `Deattach all objects` |  |  | — |  |
| 3 | 83 | Detach object | `Deattach <p0>` |  | objet « Select object to deattach » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of attached objects | `NumAttached(` |  |  | — |  |
| 1 | 81 | Get fixed of remainder after deletion | `FixedOfRemainder(` |  |  | — |  |
