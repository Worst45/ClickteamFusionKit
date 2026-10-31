# Extension fglobject

- File: `fglobject.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is the game running in premium mode? | `<object>: Is game running in premium mode?` | <object>: Le jeu fonctionne-t'il en mode premium? |  | — |  |
| 1 | -82 | Is cross-promotion enabled? | `<object>: Is cross-promotion enabled?` | <object>: La promotion croisée est-elle activée? |  | — |  |
| 2 | -83 | Is unlock enabled? | `<object>: Is unlock enabled?` | Le déverrouillage est-il activé? |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Advertisements > Show advertisement | `Show advertisement` | Montrer publicité |  | — |  |
| 1 | 81 | Advertisements > Show more games | `Show more games` | Montrer plus de jeux |  | — |  |
| 2 | 82 | Unlock game | `Unlock game` | Déverrouiller le jeu |  | — |  |
| 4 | 84 | Leaderboards > Submit score | `Submit score` | Envoyer le score | numeric expression “Please enter the score” | — |  |
| 5 | 85 | Leaderboards > Display leaderboard | `Display leaderboard` | Afficher tableau des scores |  | — |  |
| 6 | 86 | Sponsor > Show / hide sponsor logo | `Display sponsor logo <p0>` | Afficher le logo du sponsor <p0> | numeric expression “Enter 1 to display the logo, 0 to hide it” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get branding image URL | `BrandingLogo$(` | URL de l'image de la marque | → string | — |  |
