# Extension KcClkBlk

- Fichier : `KcClkBlk.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Click Blocker »
- Usage dans le corpus : 6 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Block > Left click | `Block left click` | Bloquer le clic à gauche |  | 1 (1 proj.) | `Click Blocker : Event ID 80, 0 Parameters` |
| 1 | 81 | Block > Middle click | `Block middle click` | Bloquer le clic du milieu |  | 1 (1 proj.) | `Click Blocker : Event ID 81, 0 Parameters` |
| 2 | 82 | Block > Right click | `Block right click` | Bloquer le clic à droite |  | 1 (1 proj.) | `Click Blocker : Event ID 82, 0 Parameters` |
| 3 | 83 | Unblock > Left click | `Unblock left click` | Débloquer le clic à gauche |  | 1 (1 proj.) | `Click Blocker : Event ID 83, 0 Parameters` |
| 4 | 84 | Unblock > Middle click | `Unblock middle click` | Débloquer le clic du milieu |  | 1 (1 proj.) | `Click Blocker : Event ID 84, 0 Parameters` |
| 5 | 85 | Unblock > Right click | `Unblock right click` | Débloquer le clic droit |  | 1 (1 proj.) | `Click Blocker : Event ID 85, 0 Parameters` |
