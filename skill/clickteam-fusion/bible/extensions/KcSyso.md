# Extension KcSyso

- Fichier : `KcSyso.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « OS »
- Usage dans le corpus : 4 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Environment Variable |  |  |  | — |  |
| 1 | 81 | Computer Name |  |  |  | 1 (1 proj.) | `Expression ID 81("OS")` |
| 2 | 82 | User Name |  |  |  | 1 (1 proj.) | `Expression ID 82("OS")` |
| 3 | 83 | System Default Language ID |  |  |  | — |  |
| 4 | 84 | User Default Language ID |  |  |  | — |  |
| 5 | 85 | Windows Version (index) |  |  |  | — |  |
| 6 | 86 | Windows Version (text) |  | Version de Windows (texte) |  | 1 (1 proj.) | `Expression ID 86("OS")` |
| 7 | 87 | System Default Language Name |  |  |  | 1 (1 proj.) | `Expression ID 87("OS")` |
| 8 | 88 | User Default Language Name |  |  |  | — |  |
