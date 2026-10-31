# Extension WaitFor

- Fichier : `WaitFor.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Fractional Chance | `<objet>: <p0> chances` |  | expression numérique « Fraction/percent » | — |  |
| 1 | -82 | Wait For > Wait Before | `<objet> : Wait For <p0> loops before (ID = <p1>)` |  | expression numérique « Number of Loops » ; expression numérique « ID (between 1 and 98) » | — |  |
| 2 | -83 | Wait For > Wait After | `<objet> : Wait For <p0> loops after (ID = <p1>)` |  | expression numérique « Number of Loops » ; expression numérique « ID (between 1 and 98) » | — |  |
| 3 | -84 | Wait For > Delay | `<objet> : Delay <p0> loops before allowing (ID = <p1>)` |  | expression numérique « Number of Loops » ; expression numérique « ID (between 1 and 98) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Generate Chance | `Generate Chance from <p0> to <p1>` |  | expression numérique « Lowest Number » ; expression numérique « Highest Number » | — |  |
| 1 | 81 | Loop the Delay | `Loop the Delay (ID = <p0>)` |  | expression numérique « ID » | — |  |
