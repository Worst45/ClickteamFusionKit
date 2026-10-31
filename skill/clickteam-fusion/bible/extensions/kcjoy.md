# Extension kcjoy

- Fichier : `kcjoy.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Raw X Value | `joy val x(` | Valeur brute X |  | — |  |
| 1 | 81 | Raw Y Value | `joy val y(` | Valeur brute Y |  | — |  |
| 2 | 82 | Raw Button A Value | `joy btn a(` | Valeur brute du bouton A |  | — |  |
| 3 | 83 | Raw Button B Value | `joy btn b(` | Valeur brute du bouton B |  | — |  |
| 4 | 84 | Raw Z Value | `joy val z(` | Valeur brute Z |  | — |  |
| 5 | 85 | Raw Button C Value | `joy btn c(` | Valeur brute du bouton C |  | — |  |
| 6 | 86 | Raw Button D Value | `joy btn d(` | Valeur brute du bouton D |  | — |  |
