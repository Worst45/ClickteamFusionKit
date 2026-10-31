# Extension Scan

- Fichier : `Scan.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Scan complete? | `<objet>: On Scan Complete?` |  |  | — |  |
| 1 | -82 | On Scan cancelled? | `<objet>: On Scan Cancelled?` |  |  | — |  |
| 2 | -83 | On Scan Error? | `<objet>: On Scan Error?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start Scan Code | `<objet>: Start Scan Code` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Scan String | `ScanResult$(` |  | → chaîne | — |  |
