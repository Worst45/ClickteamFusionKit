# Extension BitMask

- Fichier : `BitMask.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Bit mask on two numbers (first,second,mask) | `BitMask(` |  | nombre ; nombre ; chaîne | — |  |
| 1 | 81 | Bit mask on one number (number,mask) | `SingleMask(` |  | nombre ; chaîne | — |  |
| 2 | 82 | Get Nth Bit | `NthBit(` |  | nombre ; nombre | — |  |
