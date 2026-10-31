# Extension kcplugin

- Fichier : `kcplugin.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Downloading > Is loading? | `Is <p0> loading` | <p0> est-il en train d'être chargé? | (paramètres non fiables) | — |  |
| 1 | -82 | Downloading > Is loaded? | `Is <p0> loaded` | <p0> est-il chargé? | (paramètres non fiables) | — |  |
| 2 | -83 | Downloading > Has download failed? | `Has download of <p0> failed` | Le téléchargement de <p0> a-t-il échoué | (paramètres non fiables) | — |  |
| 3 | -84 | Downloading > Is file in loading list? | `Is <p0> in loading list` | <p0> est-il dans la liste de téléchargement | (paramètres non fiables) | — |  |
| 4 | -85 | JavaScript > On Error | `On error` | En cas d'erreur |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open URL > in plug-in window (.ccn only) | `Open URL <p0> in plug-in window` | Ouvrir l'URL <p0> dans la fenêtre du plug-in | (paramètres non fiables) | — |  |
| 1 | 81 | Open URL > in current window | `Open URL <p0> in current window` | Ouvrir l'URL <p0> dans la fenêtre courante | (paramètres non fiables) | — |  |
| 2 | 82 | Open URL > in parent window | `Open URL <p0> in parent window` | Ouvrir l'URL <p0> dans la fenêtre parent | (paramètres non fiables) | — |  |
| 3 | 83 | Open URL > in top-level window | `Open URL <p0> in top-level window` | Ouvrir l'URL <p0> dans la fenêtre de premier niveau | (paramètres non fiables) | — |  |
| 4 | 84 | Open URL > in a new window | `Open URL <p0> in new window` | Ouvrir l'URL <p0> dans une nouvelle fenêtre | (paramètres non fiables) | — |  |
| 5 | 85 | Display Status Message | `Display Status Message <p0>` | Afficher le message d'information <p0> | (paramètres non fiables) | — |  |
| 6 | 86 | Open URL > in target window | `Open URL <p0> in window <p1>` | Ouvrir l'URL <p0> dans la fenêtre <p1> | (paramètres non fiables) | — |  |
| 7 | 87 | Download > Download file | `Download <p0>` | Télécharger <p0> | (paramètres non fiables) | — |  |
| 8 | 88 | Download > Abort file downloading | `Abort downloading of <p0>` | Anulation du téléchargement de <p0> | (paramètres non fiables) | — |  |
| 10 | 90 | Javascript > Reset Parameter List | `Reset Parameters` | Mettre liste paramètres à zéro |  | — |  |
| 11 | 91 | Javascript > Add Integer Parameter | `Add Integer Parameter <p0>` | Ajouter Paramètre Entier <p0> | (paramètres non fiables) | — |  |
| 12 | 92 | Javascript > Add Float Parameter | `Add Float Parameter <p0>` | Ajouter Paramètre Virgule Flottante <p0> | (paramètres non fiables) | — |  |
| 13 | 93 | Javascript > Add String Parameter | `Add String Parameter <p0>` | Ajouter Paramètre Chaîne <p0> | (paramètres non fiables) | — |  |
| 14 | 94 | Javascript > Call Function | `Call Function <p0>` | Appeler Fonction <p0> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current URL | `Current URL$(` | URL courante |  | — |  |
| 1 | 81 | Vitalize! Version > Main version number | `VitalizeVersion(` | Numéro de version principal |  | — |  |
| 2 | 82 | Vitalize! Version > Sub-version number | `VitalizeSubVersion(` | Numéro de sous-version |  | — |  |
| 3 | 83 | Vitalize! Version > Build number | `VitalizeBuild(` | Numéro de build |  | — |  |
| 4 | 84 | Browser name | `BrowserName$(` | Nom du navigateur |  | — |  |
| 6 | 86 | Download > Percentage | `DownloadPercentage(` | Pourcentage | (paramètres non fiables) | — |  |
| 7 | 87 | Download > Read size | `DownloadReadSize(` | Taille lue | (paramètres non fiables) | — |  |
| 8 | 88 | Download > Total size | `DownloadTotalSize(` | Taille totale | (paramètres non fiables) | — |  |
| 9 | 89 | Javascript > Get Integer Result | `JSIntResult(` | Résultat entier |  | — |  |
| 10 | 90 | Javascript > Get Float Result | `JSFloatResult(` | Résultat virgule flottante |  | — |  |
| 11 | 91 | Javascript > Get String Result | `JSStrResult$(` | Résultat chaîne |  | — |  |
