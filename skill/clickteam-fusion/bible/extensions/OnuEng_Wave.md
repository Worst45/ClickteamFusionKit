# Extension OnuEng_Wave

- Fichier : `OnuEng_Wave.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Filetypes | `Set Engineer Filetypes` |  | expression chaîne « File types (space seperated, include .) (eg ".it .xm .mod .s3m") » | — |  |
| 1 | 81 | Enable Caching | `Enable Caching` |  |  | — |  |
| 2 | 82 | Disable Caching | `Disable Caching` |  |  | — |  |
