# Extension fglobject

- Fichier : `fglobject.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is the game running in premium mode? | `<objet>: Is game running in premium mode?` | <objet>: Le jeu fonctionne-t'il en mode premium? |  | — |  |
| 1 | -82 | Is cross-promotion enabled? | `<objet>: Is cross-promotion enabled?` | <objet>: La promotion croisée est-elle activée? |  | — |  |
| 2 | -83 | Is unlock enabled? | `<objet>: Is unlock enabled?` | Le déverrouillage est-il activé? |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Advertisements > Show advertisement | `Show advertisement` | Montrer publicité |  | — |  |
| 1 | 81 | Advertisements > Show more games | `Show more games` | Montrer plus de jeux |  | — |  |
| 2 | 82 | Unlock game | `Unlock game` | Déverrouiller le jeu |  | — |  |
| 4 | 84 | Leaderboards > Submit score | `Submit score` | Envoyer le score | expression numérique « Please enter the score » | — |  |
| 5 | 85 | Leaderboards > Display leaderboard | `Display leaderboard` | Afficher tableau des scores |  | — |  |
| 6 | 86 | Sponsor > Show / hide sponsor logo | `Display sponsor logo <p0>` | Afficher le logo du sponsor <p0> | expression numérique « Enter 1 to display the logo, 0 to hide it » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get branding image URL | `BrandingLogo$(` | URL de l'image de la marque | → chaîne | — |  |
