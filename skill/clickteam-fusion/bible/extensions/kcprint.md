# Extension kcprint

- Fichier : `kcprint.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Print »
- Usage dans le corpus : 14 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Print Screen | `Print screen` | Imprimer l'écran |  | 2 (1 proj.) | `Print : Event ID 80, 0 Parameters` |
| 1 | 81 | Print Window | `Print window` | Imprimer la fenêtre |  | 1 (1 proj.) | `Print : Event ID 81, 0 Parameters` |
| 2 | 82 | Print Client zone | `Print client zone` | Imprimer la zone client |  | 1 (1 proj.) | `Print : Event ID 82, 0 Parameters` |
| 3 | 83 | Print zone... | `Print zone <p0>` | Imprimer zone <p0> | (paramètres non fiables) | 1 (1 proj.) | `Print : Event ID 83, 1 Parameters { (466,186) to (621,320) }` |
| 4 | 84 | Printer Setup | `Setup printer` | Configuration imprimante |  | 1 (1 proj.) | `Print : Event ID 84, 0 Parameters` |
| 5 | 85 | Printing method > Best fit | `Change printing method to best fit` | Changer la méthode d'impression à "meilleure dimension" |  | 1 (1 proj.) | `Print : Event ID 85, 0 Parameters` |
| 6 | 86 | Printing method > Stretch to page | `Change printing method to stretch to page` | Changer la méthode d'impression à Etirer à la page |  | 1 (1 proj.) | `Print : Event ID 86, 0 Parameters` |
| 7 | 87 | Printing method > Scale | `Change printing method to scale` | Changer la méthode d'impression à Redimensionner |  | 2 (1 proj.) | `Print : Event ID 87, 0 Parameters` |
| 8 | 88 | Printing method > Set x scale | `Set x scale to <p0>` | Fixer échelle en X à <p0> | (paramètres non fiables) | 2 (1 proj.) | `Print : Event ID 88, 1 Parameters { value("Scale X% counter") }` |
| 9 | 89 | Printing method > Set y scale | `Set y scale to <p0>` | Fixer échelle en Y à <p0> | (paramètres non fiables) | 2 (1 proj.) | `Print : Event ID 89, 1 Parameters { value("Scale Y% counter") }` |
| 10 | 90 | Print Text | `Print Text <p0>` | Imprimer texte <p0> | (paramètres non fiables) | — |  |
| 11 | 91 | Print Text file | `Print Text file <p0>` | Imprimer fichier texte <p0> | (paramètres non fiables) | — |  |
| 12 | 92 | Print blank page | `Print blank page` | Imprimer une page blanche |  | — |  |
