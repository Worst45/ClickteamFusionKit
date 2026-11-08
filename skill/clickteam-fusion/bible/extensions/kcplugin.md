# Extension kcplugin

- File: `kcplugin.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Downloading > Is loading? | `Is <p0> loading` | <p0> est-il en train d'être chargé? | (unreliable parameters) |
| 1 | -82 | Downloading > Is loaded? | `Is <p0> loaded` | <p0> est-il chargé? | (unreliable parameters) |
| 2 | -83 | Downloading > Has download failed? | `Has download of <p0> failed` | Le téléchargement de <p0> a-t-il échoué | (unreliable parameters) |
| 3 | -84 | Downloading > Is file in loading list? | `Is <p0> in loading list` | <p0> est-il dans la liste de téléchargement | (unreliable parameters) |
| 4 | -85 | JavaScript > On Error | `On error` | En cas d'erreur |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Open URL > in plug-in window (.ccn only) | `Open URL <p0> in plug-in window` | Ouvrir l'URL <p0> dans la fenêtre du plug-in | (unreliable parameters) |
| 1 | 81 | Open URL > in current window | `Open URL <p0> in current window` | Ouvrir l'URL <p0> dans la fenêtre courante | (unreliable parameters) |
| 2 | 82 | Open URL > in parent window | `Open URL <p0> in parent window` | Ouvrir l'URL <p0> dans la fenêtre parent | (unreliable parameters) |
| 3 | 83 | Open URL > in top-level window | `Open URL <p0> in top-level window` | Ouvrir l'URL <p0> dans la fenêtre de premier niveau | (unreliable parameters) |
| 4 | 84 | Open URL > in a new window | `Open URL <p0> in new window` | Ouvrir l'URL <p0> dans une nouvelle fenêtre | (unreliable parameters) |
| 5 | 85 | Display Status Message | `Display Status Message <p0>` | Afficher le message d'information <p0> | (unreliable parameters) |
| 6 | 86 | Open URL > in target window | `Open URL <p0> in window <p1>` | Ouvrir l'URL <p0> dans la fenêtre <p1> | (unreliable parameters) |
| 7 | 87 | Download > Download file | `Download <p0>` | Télécharger <p0> | (unreliable parameters) |
| 8 | 88 | Download > Abort file downloading | `Abort downloading of <p0>` | Anulation du téléchargement de <p0> | (unreliable parameters) |
| 10 | 90 | Javascript > Reset Parameter List | `Reset Parameters` | Mettre liste paramètres à zéro |  |
| 11 | 91 | Javascript > Add Integer Parameter | `Add Integer Parameter <p0>` | Ajouter Paramètre Entier <p0> | (unreliable parameters) |
| 12 | 92 | Javascript > Add Float Parameter | `Add Float Parameter <p0>` | Ajouter Paramètre Virgule Flottante <p0> | (unreliable parameters) |
| 13 | 93 | Javascript > Add String Parameter | `Add String Parameter <p0>` | Ajouter Paramètre Chaîne <p0> | (unreliable parameters) |
| 14 | 94 | Javascript > Call Function | `Call Function <p0>` | Appeler Fonction <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Current URL | `Current URL$(` | URL courante |  |
| 1 | 81 | Vitalize! Version > Main version number | `VitalizeVersion(` | Numéro de version principal |  |
| 2 | 82 | Vitalize! Version > Sub-version number | `VitalizeSubVersion(` | Numéro de sous-version |  |
| 3 | 83 | Vitalize! Version > Build number | `VitalizeBuild(` | Numéro de build |  |
| 4 | 84 | Browser name | `BrowserName$(` | Nom du navigateur |  |
| 6 | 86 | Download > Percentage | `DownloadPercentage(` | Pourcentage | (unreliable parameters) |
| 7 | 87 | Download > Read size | `DownloadReadSize(` | Taille lue | (unreliable parameters) |
| 8 | 88 | Download > Total size | `DownloadTotalSize(` | Taille totale | (unreliable parameters) |
| 9 | 89 | Javascript > Get Integer Result | `JSIntResult(` | Résultat entier |  |
| 10 | 90 | Javascript > Get Float Result | `JSFloatResult(` | Résultat virgule flottante |  |
| 11 | 91 | Javascript > Get String Result | `JSStrResult$(` | Résultat chaîne |  |
