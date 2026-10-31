# Extension Kcftp

- Fichier : `Kcftp.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Ftp »
- Usage dans le corpus : 35 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Error occured? | `<objet> encountered an error` | <objet> a rencontré une erreur |  | 1 (1 proj.) | `Ftp: Event ID -81, 0 Parameters` |
| 1 | -82 | Directory > Scanned name is a file? | `For <objet>, <p0> is a file` | Pour <objet>, <p0> est un fichier | (paramètres non fiables) | 1 (1 proj.) | `Ftp: Event ID -82, 1 Parameters { Expression ID 82("Ftp") }` |
| 2 | -83 | Directory > Scanned name is a directory? | `For <objet>, <p0> is a directory` | Pour <objet>, <p0> est un répertoire | (paramètres non fiables) | 1 (1 proj.) | `Ftp: Event ID -83, 1 Parameters { Expression ID 82("Ftp") }` |
| 3 | -84 | Directory > Remaining names to scan? | `Remaining names to scan for object <objet>` | Encore des fichiers à scanner pour l'objet <objet> |  | 3 (1 proj.) | `Ftp: Event ID -84, 0 Parameters` |
| 4 | -85 | File > Transfer in progress? | `Transfer in progress for <objet>` | Transfert en progression pour <objet> |  | 2 (1 proj.) | `Ftp: Event ID -85, 0 Parameters` |
| 5 | -86 | Connection > Connected? | `<objet> is connected` | <objet> est connecté |  | 2 (1 proj.) | `Ftp: Event ID -86, 0 Parameters` |
| 6 | -87 | File > Is transfer mode binary? | `Is transfer mode binary` | <objet>: Le mode de transfert est-il binaire? |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connection > Open URL | `Open connection at URL <p0>` | Ouvrir la connexion à l'URL <p0> | (paramètres non fiables) | 2 (1 proj.) | `Ftp : Event ID 80, 1 Parameters { Expression ID 80("FTP Site Name") }` |
| 1 | 81 | Connection > Close | `Close connection` | Fermer la connexion |  | 4 (1 proj.) | `Ftp : Event ID 81, 0 Parameters` |
| 2 | 82 | File > Download | `Download <p0> from <p1>` | Télécharger <p0> depuis <p1> | (paramètres non fiables) | 1 (1 proj.) | `Ftp : Event ID 82, 2 Parameters { Expression ID 81("Directories and Files"), Expression ID 80("Download Path") + Expression ID 81("Director…` |
| 3 | 83 | File > Upload | `Upload <p0> to <p1>` | Uploader <p0> vers <p1> | (paramètres non fiables) | — |  |
| 4 | 84 | Directory > Set current | `Set current directory of <objet> to <p0>` | Fixer le répertoire courant de <objet> à <p0> | (paramètres non fiables) | 1 (1 proj.) | `Ftp : Event ID 84, 1 Parameters { Expression ID 82("Directories and Files") }` |
| 5 | 85 | Directory > Load | `Load directory with wildcard  <p0>` | Charger le répertoire avec le joker <p0> | (paramètres non fiables) | 2 (1 proj.) | `Ftp : Event ID 85, 1 Parameters { "*" }` |
| 6 | 86 | Directory > Scan | `<objet> scans directory` | <objet> scanne les répertoires |  | 4 (1 proj.) | `Ftp : Event ID 86, 0 Parameters` |
| 7 | 87 | Connection > Set user and password | `Set user name to <p0> and password to <p1>` | Fixer le nom d'utilisateur à <p0> et le mot de passe à <p1> | (paramètres non fiables) | 2 (1 proj.) | `Ftp : Event ID 87, 2 Parameters { "anonymous", "guest" }` |
| 8 | 88 | Directory > Create | `Create directory <p0>` | Créer répertoire <p0> | (paramètres non fiables) | — |  |
| 9 | 89 | Directory > Remove | `Remove directory <p0>` | Détruire répertoire <p0> | (paramètres non fiables) | — |  |
| 10 | 90 | File > Delete | `delete file <p0>` | Détruire fichier <p0> | (paramètres non fiables) | — |  |
| 11 | 91 | File > Abort data transfer | `Abort data transfer` | Abandonner le transfert |  | — |  |
| 13 | 93 | Connection > Set port number | `Set port number to <p0>` | Fixer le numéro de port à <p0> | (paramètres non fiables) | — |  |
| 14 | 94 | File > Set binary transfer mode | `Set binary transfer mode` | Passer en mode de transfert binaire |  | — |  |
| 15 | 95 | File > Set ASCII transfer mode | `Set ASCII transfer mode` | Passer en mode de transfert ASCII |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connection > Current URL | `CurrentURL$(` | URL courante |  | — |  |
| 1 | 81 | Last error number | `LastError(` | Dernier numéro de message d'erreur |  | — |  |
| 2 | 82 | Directory > Scanned name | `Scanned name$(` | Nom scanné |  | 4 (1 proj.) | `Expression ID 82("Ftp")` |
| 3 | 83 | Directory > Current directory | `Current directory$(` | Répertoire courant |  | 1 (1 proj.) | `Expression ID 83("Ftp")` |
| 4 | 84 | File > Average transfer rate | `Average transfer rate(` | Taux moyen de transfert |  | — |  |
| 5 | 85 | File > Real Time transfer rate | `Real time transfer rate(` | Taux de transfert réel |  | — |  |
| 6 | 86 | File > Current bytes transfered | `Bytes Transfered(` | Nombre d'octets transférés |  | 1 (1 proj.) | `Expression ID 86("Ftp")` |
| 7 | 87 | File > Size of file | `Size of file(` | Taille du fichier | (paramètres non fiables) | 1 (1 proj.) | `Expression ID 87("Ftp")` |
| 8 | 88 | Last error string | `Last error string$(` | Dernière chaîne d'erreur |  | 2 (1 proj.) | `Expression ID 88("Ftp")` |
| 9 | 89 | Connection > User name | `User name$(` | Nom d'utilisateur |  | — |  |
| 10 | 90 | Connection > Password | `Password$(` | Mot de passe |  | — |  |
| 11 | 91 | Connection > Port number | `Port number$(` | Numéro de port |  | — |  |
| 12 | 92 | File > Modification date of file | `Date of file$(` | Date de modification du fichier | (paramètres non fiables) | — |  |
| 13 | 93 | Directory > Scanned file size | `Scanned size(` | Taille du fichier scanné |  | — |  |
