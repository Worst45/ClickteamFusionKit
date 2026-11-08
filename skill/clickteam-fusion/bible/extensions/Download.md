# Extension Download

- File: `Download.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Download in progress? | `<object>: Download in progress slot <p0>` | <object>: Téléchargement en cours dans le port <p0> | numeric expression “Enter the slot number (1-4)” |
| 1 | -82 | Download successfully completed? | `<object>: Download successfully completed slot <p0>` | <object>: Téléchargement réussi dans le port <p0> | numeric expression “Enter the slot number (1-4)” |
| 2 | -83 | Connection error? | `<object>: Connection error in slot <p0>` | <object>: Erreur de connection dans le port <p0> | numeric expression “Enter the slot number (1-4)” |
| 3 | -84 | Download aborted? | `<object>: Download aborted in slot <p0>` | <object>: Téléchargement abandonné dans le port <p0> | numeric expression “Enter the slot number (1-4)” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Download file | `Download file, Url=<p0>, destination=<p1>, slot <p2>` | Télécharger fichier, Url=<p0>, destination=<p1>, port <p2> | string expression “Enter the URL of the file. It must begin with HTTP:// or HTTPS://”; file name “#Title#Enter the name of the destination file...”; numeric expression “Enter the slot number (1-4)” |
| 1 | 81 | Abort download | `Abort download slot <p0>` | Abandonner le téléchargement port <p0> | numeric expression “Enter the slot number (1-4)” |
| 2 | 82 | Pause download | `Pause download slot <p0>` | Mettre le téléchargement en pause port <p0> | numeric expression “Enter the slot number (1-4)” |
| 3 | 83 | Resume download | `Resume download slot <p0>` | Relancer le téléchargement port <p0> | numeric expression “Enter the slot number (1-4)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Total file size | `TotalFileSize(` | Taille totale du fichier | number “Enter the slot number (1-4)” |
| 1 | 81 | Current download position | `CurrentPos(` | Position du téléchargement | number “Enter the slot number (1-4)” |
| 2 | 82 | Current download percentage | `CurrentPercent(` | Pourcentage de téléchargement | number “Enter the slot number (1-4)” |
| 3 | 83 | Current speed (bytes per second) | `CurrentSpeed(` | Vitesse courante (octets par seconde) | number “Enter the slot number (1-4)” |
| 4 | 84 | Estimated download time | `TotalTime(` | Durée estimée du téléchargement | number “Enter the slot number (1-4)” |
| 5 | 85 | Current URL | `CurrentUrl$(` | URL courante | number “Enter the slot number (1-4)” → string |
| 6 | 86 | Get file size (without download) | `InstantFileSize(` | Taille du fichier (sans le télécharger) | string “Enter file URL” |
