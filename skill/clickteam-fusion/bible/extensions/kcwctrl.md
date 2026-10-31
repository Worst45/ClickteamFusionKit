# Extension kcwctrl

- Fichier : `kcwctrl.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Window Control »
- Usage dans le corpus : 146 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Window is minimized ? | `Window is minimized` | La fenêtre est minimisée |  | — |  |
| 1 | -82 | Window is maximized ? | `Window is maximized` | La fenêtre est maximisée |  | — |  |
| 2 | -83 | Window is visible ? | `Window is visible` | La fenêtre est visible |  | — |  |
| 3 | -84 | Application is active ? | `Application is active` | L'application est active |  | — |  |
| 4 | -85 | Window has focus ? | `Window has focus` | La fenêtre a le focus |  | — |  |
| 5 | -86 | Window is attached to desktop ? | `Window is attached to desktop` | La fenêtre est attachée au bureau |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Position > Set X Coordinate... | `Set horizontal position to <p0>` | Fixer la position horizontale à <p0> | (paramètres non fiables) | 16 (5 proj.) | `Window control : Event ID 80, 1 Parameters { 100 }` |
| 1 | 81 | Position > Set Y Coordinate... | `Set vertical position to <p0>` | Fixer la position verticale à <p0> | (paramètres non fiables) | 16 (5 proj.) | `Window control : Event ID 81, 1 Parameters { 100 }` |
| 2 | 82 | Position > Set Position | `Set position n°<p0>` | Fixer la position à <p0> | (paramètres non fiables) | 1 (1 proj.) | `Window Control : Event ID 82, 1 Parameters { 0 }` |
| 3 | 83 | Resize > X Size... | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (paramètres non fiables) | 16 (1 proj.) |  |
| 4 | 84 | Resize > Y Size... | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (paramètres non fiables) | 16 (1 proj.) |  |
| 5 | 85 | Position > Bring Window to Top | `Bring window to top` | Passer la fenêtre devant |  | — |  |
| 6 | 86 | Position > Bring Window to Back | `Bring window to bottom` | Passer la fenêtre en arrière-plan |  | — |  |
| 7 | 87 | Position > Window Always on Top | `Set window topmost` | Passer la fenêtre devant toutes les autres |  | 1 (1 proj.) | `Window Control : Event ID 87, 0 Parameters` |
| 8 | 88 | Position > Window Not Always on Top | `Set window non topmost` | Ne pas mettre toujours devant |  | — |  |
| 9 | 89 | Visibility > Make Window Reappear | `Show window` | Montrer la fenêtre |  | — |  |
| 10 | 90 | Visibility > Make Window Invisible | `Hide window` | Cacher la fenêtre |  | 3 (1 proj.) | `Window Control : Event ID 90, 0 Parameters` |
| 11 | 91 | Resize > Minimize Window | `Set window minimized` | Minimiser la fenêtre |  | — |  |
| 12 | 92 | Resize > Maximize Window | `Set window maximized` | Maximiser la fenêtre |  | — |  |
| 13 | 93 | Resize > Restore Window | `Set window normal` | fixer la fenêtre à normale |  | — |  |
| 17 | 97 | Position > Immediate Move... | `Move to (<p0>, <p1>)` | Bouger vers (<p0>, <p1>) | (paramètres non fiables) | 2 (1 proj.) | `Window Control : Event ID 97, 2 Parameters { Expression ID 80("Window Control") + 1, Expression ID 81("Window Control") }` |
| 18 | 98 | Set Title | `Set title to <p0>` | Fixer le titre à <p0> | (paramètres non fiables) | 10 (2 proj.) | `Window Control : Event ID 98, 1 Parameters { Str$(NObjects("Ball")) + " Balls in play, Press Spacebar for more!" }` |
| 19 | 99 | Focus > Save Focus | `Save Focus` | Sauver Focus |  | 1 (1 proj.) |  |
| 20 | 100 | Focus > Restore Focus | `Restore Focus` | Restaurer Focus |  | 3 (1 proj.) |  |
| 21 | 101 | Focus > Set Focus | `Set Focus` | Mettre focus |  | 1 (1 proj.) |  |
| 22 | 102 | Visibility > Flash Window in Taskbar | `Flash window in taskbar` | Faire flasher la fenêtre dans la barre de tâches |  | — |  |
| 23 | 103 | Visibility > Set Background Color | `Set Background Color to <p0>` | Fixer couleur de fond à <p0> | (paramètres non fiables) | — |  |
| 24 | 104 | Position > Attach to desktop | `Attach window to desktop` | Attacher la fenêtre au bureau |  | — |  |
| 25 | 105 | Position > Detach from desktop | `Detach window from destop` | Détacher la fenêtre du bureau |  | — |  |
| 26 | 106 | Frame Window > Set X Position | `Set X Position of Frame window to <p0>` | Fixer position en X fenêtre scène à <p0> | (paramètres non fiables) | — |  |
| 27 | 107 | Frame Window > Set Y Position | `Set Y Position of Frame window to <p0>` | Fixer position en Y fenêtre scène à <p0> | (paramètres non fiables) | — |  |
| 28 | 108 | Frame Window > Set Width | `Set width of Frame window to <p0>, adjust frame size = <p1>` | Fixer largeur fenêtre scène à <p0>, ajuster taille scène = <p1> | (paramètres non fiables) | — |  |
| 29 | 109 | Frame Window > Set Height | `Set height of Frame window to <p0>, adjust frame size = <p1>` | Fixer hauteur fenêtre scène à <p0>, ajuster taille scène = <p1> | (paramètres non fiables) | — |  |
| 30 | 110 | Resize > Minimum X Size | `Set minimum width to <p0>` | Définir la largeur minimale à <p0> | (paramètres non fiables) | — |  |
| 31 | 111 | Resize > Minimum Y Size | `Set minimum height to <p0>` | Définir la hauteur minimale à <p0> | (paramètres non fiables) | — |  |
| 32 | 112 | Resize > Maximum X Size | `Set maximum width to <p0>` | Définir la largeur maximale à <p0> | (paramètres non fiables) | — |  |
| 33 | 113 | Resize > Maximum Y Size | `Set maximum height to <p0>` | Définir la hauteur maximale à <p0> | (paramètres non fiables) | — |  |
| -49 | 31 | ? | ? |  |  | 8 (1 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Application Window > Horizontal position of the window | `WinXPos(` | Position horizontale de la fenêtre |  | 3 (1 proj.) | `Expression ID 80("Window Control")` |
| 1 | 81 | Application Window > Vertical position of the window | `WinYPos(` | Position verticale de la fenêtre |  | 3 (1 proj.) | `Expression ID 81("Window Control")` |
| 2 | 82 | Application Window > Horizontal size of the window | `WinXSize(` | Taille horizontale de la fenêtre |  | 2 (1 proj.) |  |
| 3 | 83 | Application Window > Vertical size of the window | `WinYSize(` | Taille verticale de la fenêtre |  | 1 (1 proj.) |  |
| 4 | 84 | Screen > Horizontal size of the screen | `ScreenXSize(` | Taille horizontale de l'écran |  | — |  |
| 5 | 85 | Screen > Vertical size of the screen | `ScreenYSize(` | Taille verticale de l'écran |  | — |  |
| 6 | 86 | Screen > Screen Depth | `ScreenDepth(` | Profondeur d'écran |  | — |  |
| 7 | 87 | Application Window > Horizontal size of the client area | `ClientWidth(` | Taille horizontale de partie client de la fenêtre |  | 3 (1 proj.) | `Expression ID 87("Window Control")` |
| 8 | 88 | Application Window > Vertical size of the client area | `ClientHeight(` | Taille verticale de la partie client de la fenêtre |  | 3 (1 proj.) | `Expression ID 88("Window Control")` |
| 9 | 89 | Application Window > Window Title | `WindowTitle$(` | Titre de la fenêtre |  | 5 (1 proj.) | `Expression ID 89("Window Control")` |
| 10 | 90 | Application Window > Background color | `WinBackColor(` | Couleur de fond |  | — |  |
| 11 | 91 | Frame Window > Get X Position | `FrameWinXPos(` | Position X |  | — |  |
| 12 | 92 | Frame Window > Get Y Position | `FrameWinYPos(` | Position Y |  | — |  |
| 13 | 93 | Frame Window > Get Width | `FrameWinXSize(` | Largeur |  | — |  |
| 14 | 94 | Frame Window > Get Height | `FrameWinYSize(` | Hauteur |  | — |  |
| -64 | 16 | ? | ? |  |  | 32 (1 proj.) |  |
