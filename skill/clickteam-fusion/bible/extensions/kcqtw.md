# Extension kcqtw

- Fichier : `kcqtw.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is QuickTime at start position ? | `<objet>:start of video` | <objet>: début de vidéo |  | — |  |
| 1 | -82 | Is QuickTime at end position ? | `<objet>:end of video` | <objet>: fin de vidéo |  | — |  |
| 2 | -83 | Mouse clicks within the QuickTime Window ? | `21User <p0> within <p1>` | L'utilisateur <p0> au milieu de <objet> | (paramètres non fiables) | — |  |
| 3 | -84 | Check whether a file is open ? | `<objet>:a file is opened` | <objet>: Un fichier est présent |  | — |  |
| 4 | -85 | Compare to current time position ? | `<objet>:current time <p0>` | <objet>: temps courant <p0> | (paramètres non fiables) | — |  |
| 5 | -86 | Is visible ? | `<objet>: visible` | <objet>: visible |  | — |  |
| 6 | -87 | Tracks > Video track present ? | `<objet>: Video track present` | <objet>: Piste vidéo présente |  | — |  |
| 7 | -88 | Tracks > Sound track present ? | `<objet>: Sound track present` | <objet>: Piste sonore présente |  | — |  |
| 8 | -89 | Tracks > Text track present ? | `<objet>: Text track present` | <objet>: Piste texte présente |  | — |  |
| 9 | -90 | Tracks > Music track present ? | `<objet>: Music track present` | <objet>: Piste musique présente |  | — |  |
| 10 | -91 | Tracks > Mpeg track present ? | `<objet>: Mpeg track present` | <objet>: piste Mpeg présente |  | — |  |
| 11 | -92 | Tracks > Video track enabled ? | `<objet>: Video track enable` | <objet>: Piste vidéo activée |  | — |  |
| 12 | -93 | Tracks > Sound track enabled ? | `<objet>: Sound track enable` | <objet>: piste sonore activée |  | — |  |
| 13 | -94 | Tracks > Text track enabled ? | `<objet>: Text track enable` | <objet>: Piste texte activée |  | — |  |
| 14 | -95 | Tracks > Music track enabled ? | `<objet>: Music track enable` | <objet>: piste musique activée |  | — |  |
| 15 | -96 | Tracks > Mpeg track enabled ? | `<objet>: Mpeg track enable` | <objet>: piste Mpeg activée |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Play > Forward | `Play` | Jouer |  | — |  |
| 1 | 81 | Stop | `Stop` | Stop |  | — |  |
| 2 | 82 | Pause | `Pause` | Pause |  | — |  |
| 3 | 83 | Resume | `Resume` | Reprendre |  | — |  |
| 4 | 84 | Play > Backward | `Play backward` | Jouer en arrière |  | — |  |
| 5 | 85 | Play > Step by Step (in frames) | `Play <p0> frames` | Jouer <p0> images | (paramètres non fiables) | — |  |
| 6 | 86 | Play > A new file | `New file <p0>` | Nouveau fichier <p0> | (paramètres non fiables) | — |  |
| 7 | 87 | Play > A new file via a file selector | `New file from selector` | Nouveau fichier avec sélecteur |  | — |  |
| 8 | 88 | Visibility > Make Object Invisible | `Hide` | Cacher |  | — |  |
| 9 | 89 | Visibility > Make Object Reappear | `Show` | Montrer |  | — |  |
| 10 | 90 | Set Volume | `Set volume to <p0>` | Fixer le volume à <p0> | (paramètres non fiables) | — |  |
| 11 | 91 | Play > Looping On | `Looping ON` | Boucle ON |  | — |  |
| 12 | 92 | Play > Looping Off | `Looping OFF` | Boucle OFF |  | — |  |
| 13 | 93 | Set QuickTime Play Position to.. > Beginning | `Goto beginning` | Aller au début |  | — |  |
| 14 | 94 | Set QuickTime Play Position to.. > End | `Goto end` | Aller à la fin |  | — |  |
| 15 | 95 | Set QuickTime Play Position to.. > A Time Position | `Goto time <p0>` | Aller au temps <p0> | (paramètres non fiables) | — |  |
| 18 | 98 | Size > Set Horizontal size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (paramètres non fiables) | — |  |
| 19 | 99 | Size > Set Vertical size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (paramètres non fiables) | — |  |
| 20 | 100 | Tracks > Enable video track | `Enable video track` | Activer la piste vidéo |  | — |  |
| 21 | 101 | Tracks > Disable video track | `Disable video track` | Désactiver la piste vidéo |  | — |  |
| 22 | 102 | Tracks > Enable sound track | `Enable sound track` | Activer la piste sons |  | — |  |
| 23 | 103 | Tracks > Disable sound track | `Disable sound track` | Désactiver la piste sons |  | — |  |
| 24 | 104 | Tracks > Enable text track | `Enable text track` | Activer la piste textes |  | — |  |
| 25 | 105 | Tracks > Disable text track | `Disable text track` | Désactiver la piste texte |  | — |  |
| 26 | 106 | Tracks > Enable music track | `Enable music track` | Activer la piste musique |  | — |  |
| 27 | 107 | Tracks > Disable music track | `Disable music track` | Désactiver la piste musicale |  | — |  |
| 28 | 108 | Tracks > Enable mpeg track | `Enable mpeg track` | Activer la piste Mpeg |  | — |  |
| 29 | 109 | Tracks > Disable mpeg track | `Disable mpeg track` | Désactiver la piste Mpeg |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current time position | `Video Time(` | Position temps courante |  | — |  |
| 1 | 81 | Total time | `Video Total Time(` | Durée totale |  | — |  |
| 2 | 82 | Horizontal size | `Video X Size(` | Ligne horizontale |  | — |  |
| 3 | 83 | Vertical size | `Video Y Size(` | Taille verticale |  | — |  |
| 4 | 84 | Last error number | `Last Error(` | Dernier numéro de message d'erreur |  | — |  |
| 5 | 85 | Track count | `Video Tracks(` | Nombre de pistes |  | — |  |
