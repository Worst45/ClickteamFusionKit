# Extension Download

- Fichier : `Download.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Download object »
- Usage dans le corpus : 6 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Download in progress? | `<objet>: Download in progress slot <p0>` | <objet>: Téléchargement en cours dans le port <p0> | expression numérique « Enter the slot number (1-4) » | 1 (1 proj.) | `Download object: Event ID -81, 1 Parameters { 1 }` |
| 1 | -82 | Download successfully completed? | `<objet>: Download successfully completed slot <p0>` | <objet>: Téléchargement réussi dans le port <p0> | expression numérique « Enter the slot number (1-4) » | 1 (1 proj.) | `Download object: Event ID -82, 1 Parameters { 1 }` |
| 2 | -83 | Connection error? | `<objet>: Connection error in slot <p0>` | <objet>: Erreur de connection dans le port <p0> | expression numérique « Enter the slot number (1-4) » | 1 (1 proj.) | `Download object: Event ID -83, 1 Parameters { 1 }` |
| 3 | -84 | Download aborted? | `<objet>: Download aborted in slot <p0>` | <objet>: Téléchargement abandonné dans le port <p0> | expression numérique « Enter the slot number (1-4) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Download file | `Download file, Url=<p0>, destination=<p1>, slot <p2>` | Télécharger fichier, Url=<p0>, destination=<p1>, port <p2> | expression chaîne « Enter the URL of the file. It must begin with HTTP:// or HTTPS:// » ; nom de fichier « #Title#Enter the name of the destination file... » ; expression numérique « Enter the slot number (1-4) » | 1 (1 proj.) | `Download object : Event ID 80, 3 Parameters { Expression ID 80("URL"), Expression ID 80("File"), 1 }` |
| 1 | 81 | Abort download | `Abort download slot <p0>` | Abandonner le téléchargement port <p0> | expression numérique « Enter the slot number (1-4) » | 1 (1 proj.) | `Download object : Event ID 81, 1 Parameters { 1 }` |
| 2 | 82 | Pause download | `Pause download slot <p0>` | Mettre le téléchargement en pause port <p0> | expression numérique « Enter the slot number (1-4) » | — |  |
| 3 | 83 | Resume download | `Resume download slot <p0>` | Relancer le téléchargement port <p0> | expression numérique « Enter the slot number (1-4) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Total file size | `TotalFileSize(` | Taille totale du fichier | nombre « Enter the slot number (1-4) » | — |  |
| 1 | 81 | Current download position | `CurrentPos(` | Position du téléchargement | nombre « Enter the slot number (1-4) » | — |  |
| 2 | 82 | Current download percentage | `CurrentPercent(` | Pourcentage de téléchargement | nombre « Enter the slot number (1-4) » | 1 (1 proj.) | `Expression ID 82("Download object")` |
| 3 | 83 | Current speed (bytes per second) | `CurrentSpeed(` | Vitesse courante (octets par seconde) | nombre « Enter the slot number (1-4) » | — |  |
| 4 | 84 | Estimated download time | `TotalTime(` | Durée estimée du téléchargement | nombre « Enter the slot number (1-4) » | — |  |
| 5 | 85 | Current URL | `CurrentUrl$(` | URL courante | nombre « Enter the slot number (1-4) » → chaîne | — |  |
| 6 | 86 | Get file size (without download) | `InstantFileSize(` | Taille du fichier (sans le télécharger) | chaîne « Enter file URL » | — |  |
