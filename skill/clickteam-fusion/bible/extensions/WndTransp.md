# Extension WndTransp

- Fichier : `WndTransp.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Transparency | `Set Transparency value to <p0>` |  | expression numérique « Enter the Transparency value (between 0 = Transparent and 255 = Opaque) » | — |  |
| 1 | 81 | Set Alpha Color | `Set Alpha color to <p0>` |  | couleur « Set Alpha Color » | — |  |
| 2 | 82 | Set Use for Sub-Apps | `Set Sub-Apps use to <p0>` |  | expression numérique | — |  |
