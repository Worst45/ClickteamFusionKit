# Extension DirectShow

- File: `DirectShow.mfx` — installed with Fusion
- Name(s) shown in projects: “Direct Show”
- Usage in the corpus: 18 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | General > Is Playing | `<object>: Is Playing ?` | <object>: En train de jouer? |  | 1 (1 proj.) | `NOT Direct Show: Event ID -81, 0 Parameters` |
| 1 | -82 | DVD > Is Full Screen | `<object>: Is Full Screen ?` | <object>: En plein écran? |  | — |  |
| 2 | -83 | General > Compare Time Position | `<object>: Compare Time Position (<p0>)` | <object>: Comparer à la position temps (<p0>) | time comparison “Position (ms)” | 1 (1 proj.) | `Direct Show: Event ID -83, 1 Parameters { 00''-00 }` |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | General > Load | `<object>: Load Video (<p0>)` | <object>: Charger vidéo (<p0>) | file name “Pathname” | 1 (1 proj.) | `Direct Show : Event ID 80, 1 Parameters { Apppath$ + "Data\" + Expression ID 81("Play List") }` |
| 1 | 81 | General > Close | `<object>: Close Video` | <object>: Fermer la vidéo |  | — |  |
| 2 | 82 | General > Play | `<object>: Play Video` | <object>: Jouer vidéo |  | 3 (1 proj.) | `Direct Show : Event ID 82, 0 Parameters` |
| 3 | 83 | General > Stop | `<object>: Stop Video` | <object>: Arrêter la vidéo |  | 2 (1 proj.) | `Direct Show : Event ID 83, 0 Parameters` |
| 4 | 84 | General > Window > Set Width | `<object>: Set Width (<p0>)` | <object>: Fixer la largeur (<p0>) | numeric expression “Width” | — |  |
| 5 | 85 | General > Window > Set Height | `<object>: Set Height (<p0>)` | <object>: Fixer hauteur (<p0>) | numeric expression “Height” | — |  |
| 6 | 86 | General > Set Position | `<object>: Set Position (<p0>)` | <object>: Fixer la position (<p0>) | numeric expression “Position (ms)” | 1 (1 proj.) | `Direct Show : Event ID 86, 1 Parameters { 0 }` |
| 7 | 87 | DVD > Create Window | `<object>: Create DVD Window` | %i: Créer fenêtre DVD |  | — |  |
| 8 | 88 | DVD > Play | `<object>: Play` | <object>: Jouer |  | — |  |
| 9 | 89 | DVD > Pause | `<object>: Pause` | <object>: Pause |  | — |  |
| 10 | 90 | DVD > Destroy Window | `<object>: Destroy DVD Window` | <object>: Détruire fenêtre vidéo |  | — |  |
| 11 | 91 | DVD > Set Chapter | `<object>: Set Chapter (<p0>)` | <object>: Fixer chapitre (<p0>) | numeric expression “Chapter Index” | — |  |
| 12 | 92 | DVD > Previous Chapter | `<object>: Previous Chapter` | <object>: Chapitre précédent |  | — |  |
| 13 | 93 | DVD > Next Chapter | `<object>: Next Chapter` | <object>: Chapitre suivant |  | — |  |
| 14 | 94 | DVD > Toggle Full Screen | `<object>: Toggle Full Screen` | <object>: Inverser plein écran |  | — |  |
| 15 | 95 | General > Mute Audio | `<object>: Mute Audio` | <object>: Couper le son |  | — |  |
| 16 | 96 | General > Resume Audio | `<object>: Resume Audio` | <object>: Remettre le son |  | — |  |
| 17 | 97 | General > Set Rate | `<object>: Set Rate (<p0>)` | <object>: Fixer la vitesse (<p0>) | numeric expression “Speed Ratio (100 is normal, for 2x enter 200)” | — |  |
| 18 | 98 | DVD > Show Menu | `<object>: Show Menu` | <object>: Montrer menu |  | — |  |
| 19 | 99 | DVD > Set Window Text | `<object>: Set Window Text (<p0>)` | <object>: Fixer le texte de la fenêtre (<p0>) | string expression “Text” | — |  |
| 20 | 100 | General > Window > Show | `<object>: Show` | <object>: Montrer |  | 1 (1 proj.) | `Direct Show : Event ID 100, 0 Parameters` |
| 21 | 101 | General > Window > Hide | `<object>: Hide` | <object>: Cacher |  | 2 (1 proj.) | `Direct Show : Event ID 101, 0 Parameters` |
| 22 | 102 | General > Set Volume | `<object>: Set Volume (<p0>)` | <object>: Fixer le volume (<p0>) | numeric expression “Volume: 0 to 1000” | — |  |
| 23 | 103 | General > Set Loop > On | `<object>: Set Loop On` | <object>: Boucle ON |  | 1 (1 proj.) | `Direct Show : Event ID 103, 0 Parameters` |
| 24 | 104 | General > Set Loop > Off | `<object>: Set Loop Off` | <object>: Boucle OFF |  | 1 (1 proj.) | `Direct Show : Event ID 104, 0 Parameters` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
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
| 12 | 92 | DVD > Get Chapter Count | `GetChapterCount(` | Nombre de chapitres | number “Title number” | — |  |
| 13 | 93 | General > Get Volume | `GetVolume(` | Volume |  | — |  |
