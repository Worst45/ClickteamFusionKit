# Extension Kctp

- Fichier : `Kctp.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare number of days since first use |  | Comparer au nombre de jours depuis la première utilisation |  | — |  |
| 1 | -82 | Never used? |  | Jamais utilisé? |  | — |  |
| 2 | -83 | Data Integrity Problem? |  | Problème d'intégrité des données |  | — |  |
| 3 | -84 | Compare number of days since highest use |  | Comparer au nombre de jours depuis la plus grande utilisation |  | — |  |
| 4 | -85 | Is Trial Period Expired? |  | La période d'essai est achevée? |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Read Info |  | Lire les informations |  | — |  |
| 1 | 81 | Reset Info |  | RAZ informations |  | — |  |
| 2 | 82 | Display Message |  | Afficher message |  | — |  |
| 3 | 83 | Set Private Data |  | Changer donnée privée |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of days since first use |  | Nombre de jours depuis la première utilisation |  | — |  |
| 1 | 81 | Number of days since highest use |  | Nombre de jours depuis la plus grande utilisation |  | — |  |
| 2 | 82 | Private Data |  | Donnée privée |  | — |  |
