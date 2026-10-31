# Extension XNAGamerServices

- Fichier : `XNAGamerServices.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Can player purchase game? | `Player can purchase game` |  | expression numérique « Enter the player index, 1, 2, 3 or 4 » | — |  |
| 1 | -82 | Are Gamer Services connected? | `Gamer Services are connected` |  |  | — |  |
| 2 | -83 | Has player signed in? | `Player(s) has(ve) signed in` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connect | `Connect to Gamer Services` |  |  | — |  |
| 1 | 81 | Show Marketplace | `Show Marketplace for player <p0>` |  | expression numérique « Enter the player index, 1, 2, 3 or 4 » | — |  |
| 2 | 82 | Sign in | `Sign in for <p0> panes, online <p1>` |  | expression numérique « Enter the number of players to sign in » ; expression numérique « Enter 0 for local players (+ online), and 1 for online only » | — |  |
| 3 | 83 | Set presence | `Set presence of player #<p0> to <p1>` |  | expression numérique « Enter the player index, 1, 2, 3 or 4 » ; expression chaîne « Enter one of the presence describers as listed in the object's documentation » | — |  |
| 4 | 84 | Set presence value | `Set presence value of player #0 to <p1>` |  | expression numérique « Enter the player index, 1, 2, 3 or 4 » ; expression numérique « Enter the value you wish to associate to the presence string » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of players signed in | `NSignedIn(` |  |  | — |  |
| 1 | 81 | Get player alias | `Alias$(` |  | nombre « Player index » → chaîne | — |  |
| 2 | 82 | Get player presence | `Presence$(` |  | nombre « Player index » → chaîne | — |  |
| 3 | 83 | Get player presence value | `PresenceValue(` |  | nombre « Player index » | — |  |
