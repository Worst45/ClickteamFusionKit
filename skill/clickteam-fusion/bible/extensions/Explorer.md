# Extension Explorer

- Fichier : `Explorer.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Explorer »
- Usage dans le corpus : 20 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Folder changed | `<objet>: Folder Changed` | <objet>: Dossier changé |  | 1 (1 proj.) | `Explorer: Event ID -81, 0 Parameters` |
| 1 | -82 | ? | ? |  |  | 2 (1 proj.) | `Explorer: Event ID -82, 0 Parameters` |
| 2 | -83 | ? | ? |  |  | 1 (1 proj.) | `Explorer: Event ID -83, 0 Parameters` |
| 3 | -84 | ? | ? |  |  | 1 (1 proj.) | `Explorer: Event ID -84, 1 Parameters { Expression ID 91("Explorer")LoopIndex("GetSel")) }` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select Folder | `Select Folder: <p0>` | Choisir dossier: <p0> | expression chaîne « Enter folder name » | — |  |
| 1 | 81 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 81, 0 Parameters` |
| 2 | 82 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 82, 0 Parameters` |
| 3 | 83 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 83, 0 Parameters` |
| 4 | 84 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 84, 0 Parameters` |
| 5 | 85 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 85, 0 Parameters` |
| 14 | 94 | ? | ? |  |  | 2 (1 proj.) | `Explorer : Event ID 94, 1 Parameters { Expression ID 80("Edit") }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Folder | `ExplGetCurFolder$(` | Dossier courant | → chaîne | 1 (1 proj.) | `Expression ID 80("Explorer")` |
| 1 | 81 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 81("Explorer")` |
| 2 | 82 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 82("Explorer")` |
| 3 | 83 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 83("Explorer")` |
| 10 | 90 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 90("Explorer")` |
| 11 | 91 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 91("Explorer")` |
