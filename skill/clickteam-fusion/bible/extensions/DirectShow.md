# Extension DirectShow

- Fichier : `DirectShow.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Direct Show »
- Usage dans le corpus : 18 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | General > Is Playing | `<objet>: Is Playing ?` | <objet>: En train de jouer? |  | 1 (1 proj.) | `NOT Direct Show: Event ID -81, 0 Parameters` |
| 1 | -82 | DVD > Is Full Screen | `<objet>: Is Full Screen ?` | <objet>: En plein écran? |  | — |  |
| 2 | -83 | General > Compare Time Position | `<objet>: Compare Time Position (<p0>)` | <objet>: Comparer à la position temps (<p0>) | comparaison de temps « Position (ms) » | 1 (1 proj.) | `Direct Show: Event ID -83, 1 Parameters { 00''-00 }` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | General > Load | `<objet>: Load Video (<p0>)` | <objet>: Charger vidéo (<p0>) | nom de fichier « Pathname » | 1 (1 proj.) | `Direct Show : Event ID 80, 1 Parameters { Apppath$ + "Data\" + Expression ID 81("Play List") }` |
| 1 | 81 | General > Close | `<objet>: Close Video` | <objet>: Fermer la vidéo |  | — |  |
| 2 | 82 | General > Play | `<objet>: Play Video` | <objet>: Jouer vidéo |  | 3 (1 proj.) | `Direct Show : Event ID 82, 0 Parameters` |
| 3 | 83 | General > Stop | `<objet>: Stop Video` | <objet>: Arrêter la vidéo |  | 2 (1 proj.) | `Direct Show : Event ID 83, 0 Parameters` |
| 4 | 84 | General > Window > Set Width | `<objet>: Set Width (<p0>)` | <objet>: Fixer la largeur (<p0>) | expression numérique « Width » | — |  |
| 5 | 85 | General > Window > Set Height | `<objet>: Set Height (<p0>)` | <objet>: Fixer hauteur (<p0>) | expression numérique « Height » | — |  |
| 6 | 86 | General > Set Position | `<objet>: Set Position (<p0>)` | <objet>: Fixer la position (<p0>) | expression numérique « Position (ms) » | 1 (1 proj.) | `Direct Show : Event ID 86, 1 Parameters { 0 }` |
| 7 | 87 | DVD > Create Window | `<objet>: Create DVD Window` | %i: Créer fenêtre DVD |  | — |  |
| 8 | 88 | DVD > Play | `<objet>: Play` | <objet>: Jouer |  | — |  |
| 9 | 89 | DVD > Pause | `<objet>: Pause` | <objet>: Pause |  | — |  |
| 10 | 90 | DVD > Destroy Window | `<objet>: Destroy DVD Window` | <objet>: Détruire fenêtre vidéo |  | — |  |
| 11 | 91 | DVD > Set Chapter | `<objet>: Set Chapter (<p0>)` | <objet>: Fixer chapitre (<p0>) | expression numérique « Chapter Index » | — |  |
| 12 | 92 | DVD > Previous Chapter | `<objet>: Previous Chapter` | <objet>: Chapitre précédent |  | — |  |
| 13 | 93 | DVD > Next Chapter | `<objet>: Next Chapter` | <objet>: Chapitre suivant |  | — |  |
| 14 | 94 | DVD > Toggle Full Screen | `<objet>: Toggle Full Screen` | <objet>: Inverser plein écran |  | — |  |
| 15 | 95 | General > Mute Audio | `<objet>: Mute Audio` | <objet>: Couper le son |  | — |  |
| 16 | 96 | General > Resume Audio | `<objet>: Resume Audio` | <objet>: Remettre le son |  | — |  |
| 17 | 97 | General > Set Rate | `<objet>: Set Rate (<p0>)` | <objet>: Fixer la vitesse (<p0>) | expression numérique « Speed Ratio (100 is normal, for 2x enter 200) » | — |  |
| 18 | 98 | DVD > Show Menu | `<objet>: Show Menu` | <objet>: Montrer menu |  | — |  |
| 19 | 99 | DVD > Set Window Text | `<objet>: Set Window Text (<p0>)` | <objet>: Fixer le texte de la fenêtre (<p0>) | expression chaîne « Text » | — |  |
| 20 | 100 | General > Window > Show | `<objet>: Show` | <objet>: Montrer |  | 1 (1 proj.) | `Direct Show : Event ID 100, 0 Parameters` |
| 21 | 101 | General > Window > Hide | `<objet>: Hide` | <objet>: Cacher |  | 2 (1 proj.) | `Direct Show : Event ID 101, 0 Parameters` |
| 22 | 102 | General > Set Volume | `<objet>: Set Volume (<p0>)` | <objet>: Fixer le volume (<p0>) | expression numérique « Volume: 0 to 1000 » | — |  |
| 23 | 103 | General > Set Loop > On | `<objet>: Set Loop On` | <objet>: Boucle ON |  | 1 (1 proj.) | `Direct Show : Event ID 103, 0 Parameters` |
| 24 | 104 | General > Set Loop > Off | `<objet>: Set Loop Off` | <objet>: Boucle OFF |  | 1 (1 proj.) | `Direct Show : Event ID 104, 0 Parameters` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | General > Size > Get Width | `GetWidth(` | Largeur |  | — |  |
| 1 | 81 | General > Size > Get Height | `GetHeight(` | Hauteur |  | — |  |
| 2 | 82 | General > Get Duration | `GetDuration(` | Durée |  | — |  |
| 3 | 83 | General > Get Current Position | `GetPosition(` | Position courante |  | 4 (1 proj.) | `Expression ID 83("Direct Show")` |
| 4 | 84 | General > Size > Get Source Width | `GetSourceWidth(` | Largeur de la source |  | — |  |
| 5 | 85 | General > Size > Get Source Height | `GetSourceHeight(` | Hauteur de la source |  | — |  |
| 6 | 86 | DVD > Get Current Chapter | `GetCurrentChapter(` | Chapitre courant |  | — |  |
| 7 | 87 | General > Get Rate | `GetRate(` | Vitesse |  | — |  |
| 8 | 88 | General > Size > Get Max Ideal Width | `GetMaxIdealWidth(` | Largeur maxi idéale |  | — |  |
| 9 | 89 | General > Size > Get Max Ideal Height | `GetMaxIdealHeight(` | Hauteur maxi idéale |  | — |  |
| 10 | 90 | General > Size > Get Min Ideal Width | `GetMinIdealWidth(` | Largeur mini idéale |  | — |  |
| 11 | 91 | General > Size > Get Min Ideal Height | `GetMinIdealHeight(` | Hauteur mini idéale |  | — |  |
| 12 | 92 | DVD > Get Chapter Count | `GetChapterCount(` | Nombre de chapitres | nombre « Title number » | — |  |
| 13 | 93 | General > Get Volume | `GetVolume(` | Volume |  | — |  |
