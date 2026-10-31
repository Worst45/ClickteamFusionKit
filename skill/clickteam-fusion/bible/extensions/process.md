# Extension process

- Fichier : `process.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Process | `Process Viewer: This object is not compatible with this version of MMF` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Processes > Update Process List | `Process Viewer: This object is not compatible with this version of MMF` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Processes > Process ID | `Process Viewer: This object is not compatible with this version of MMF` |  |  | — |  |
