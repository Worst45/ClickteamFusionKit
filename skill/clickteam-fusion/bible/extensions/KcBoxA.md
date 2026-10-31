# Extension KcBoxA

- File: `KcBoxA.mfx` — installed with Fusion
- Name(s) shown in projects: “Active System Box”, “Boîte Système Active”
- Usage in the corpus: 157 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Button > Is clicked ? | `<object> clicked` | On a cliqué sur <object> |  | 42 (9 proj.) | `ASB Forward: Event ID -81, 0 Parameters` |
| 1 | -82 | Is enabled ? | `<object> enabled` | <object> est activé |  | — |  |
| 2 | -83 | Button > Is checked ? | `<object> checked` | <object> est coché |  | 4 (2 proj.) | `NOT Show Status Bar: Event ID -83, 0 Parameters` |
| 3 | -84 | User clicks > With left button | `User clicks with left button on <object>` | L'utilisateur clique avec le bouton gauche sur <object> |  | 1 (1 proj.) | `Floating tools caption: Event ID -84, 0 Parameters` |
| 4 | -85 | User clicks > With right button | `User clicks with right button on <object>` | L'utilisateur clique avec le bouton droit du <object> |  | — |  |
| 5 | -86 | Mouse is over object | `Mouse is over <object>` | La souris se trouve au dessus de <object> |  | 11 (1 proj.) | `Crosshair ASB: Event ID -86, 0 Parameters` |
| 6 | -87 | Is image shown ? | `Image of <object> is shown` | L'image de <object> est montrée |  | — |  |
| 7 | -88 | Is docked ? | `<object> docked` | <object> est empilé |  | — |  |
| -54 | -27 | ? | ? |  |  | 3 (1 proj.) | `Alterable Value A of Floating tools caption = 0` |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Dimensions | `Set Dimensions to (<p0>, <p1>)` | Fixer les dimensions à (<p0>, <p1>) | numeric expression “Width”; numeric expression “Height” | 1 (1 proj.) | `Active System Box : Event ID 80, 2 Parameters { Sin(timer / 20.0) * 100 + 200, Sin(timer / 50.0) * 100 + 200 }` |
| 1 | 81 | Set Position | `Set Position to (<p0>, <p1>)` | Fixer la position à (<p0>, <p1>) | numeric expression “X”; numeric expression “Y” | 2 (2 proj.) | `Active System Box : Event ID 81, 2 Parameters { Sin(timer / 40.0) * 100 + 200, Sin(timer / 30.0) * 50 + 100 }` |
| 2 | 82 | State > Enable | `Enable` | Activer |  | — |  |
| 3 | 83 | State > Disable | `Disable` | Désactiver |  | — |  |
| 4 | 84 | State > Check | `Check` | Cocher |  | 3 (2 proj.) | `Show Status Bar : Event ID 84, 0 Parameters` |
| 5 | 85 | State > Uncheck | `Uncheck` | Décocher |  | 2 (1 proj.) | `Tool 2 : Event ID 85, 0 Parameters` |
| 6 | 86 | Set Fill color > None | `Set Fill color to None` | Fixer la couleur de remplissage à rien |  | — |  |
| 7 | 87 | Set Fill color > 3D Dark Shadow | `Set Fill color to 3D Dark Shadow` | Fixer la couleur de remplissage à ombre sombre 3D |  | — |  |
| 8 | 88 | Set Fill color > 3D Face (Button Face) | `Set Fill color to 3D Face (Button Face)` | Fixer la couleur de remplissage à face 3D (aspect de bouton) |  | — |  |
| 9 | 89 | Set Fill color > 3D Hilight (Button Highlight) | `Set Fill color to 3D Hilight (Button Highlight)` | Fixer la couleur de remplissage à 3D surbrillant (surbrillant bouton) |  | — |  |
| 10 | 90 | Set Fill color > 3D Light | `Set Fill color to 3D Light` | Fixer la couleur de remplissage à 3D léger |  | — |  |
| 11 | 91 | Set Fill color > 3D Shadow (Button Shadow) | `Set Fill color to 3D Shadow (Button Shadow)` | Fixer la couleur de remplissage à 3D ombrée (ombre bouton) |  | — |  |
| 12 | 92 | Set Fill color > Active Window Caption | `Set Fill color to Active Window Caption` | Fixer la couleur de remplissage à celle du titre d'une fenêtre active |  | — |  |
| 13 | 93 | Set Fill color > MDI background | `Set Fill color to MDI background` | Fixer la couleur de remplissage à celle d'un fond MDI |  | — |  |
| 14 | 94 | Set Fill color > Desktop | `Set Fill color to Desktop` | Fixer la couleur de remplissage à celle du bureau |  | — |  |
| 15 | 95 | Set Fill color > Item selected in a control | `Set Fill color to Item selected in a control` | Fixer la couleur de remplissage à celle d'un élément sélectionné dans un contrôle |  | — |  |
| 16 | 96 | Set Fill color > Inactive caption | `Set Fill color to Inactive caption` | Fixer la couleur de remplissage à celle du titre d'une fenêtre inactive |  | — |  |
| 17 | 97 | Set Fill color > Tooltip background | `Set Fill color to Tooltip background` | Fixer la couleur de remplissage à celle du fond des tooltips |  | — |  |
| 18 | 98 | Set Fill color > Menu background | `Set Fill color to Menu background` | Fixer la couleur de remplissage à celle du fond d'un menu |  | — |  |
| 19 | 99 | Set Fill color > Scroll bar gray area | `Set Fill color to Scroll bar gray area` | Fixer la couleur de remplissage à celle de la partie grise d'une barre de scrolling |  | — |  |
| 20 | 100 | Set Fill color > Window background | `Set Fill color to Window background` | Fixer la couleur de remplissage à celle du fond de fenêtre |  | — |  |
| 21 | 101 | Set Fill color > Window frame | `Set Fill color to Window frame` | Fixer la couleur de remplissage au tour d'une fenêtre |  | — |  |
| 22 | 102 | Set Border color 1 > None | `Set Border color #1 to None` | Fixer la couleur de bordure #1 à rien |  | — |  |
| 23 | 103 | Set Border color 1 > 3D Dark Shadow | `Set Border color #1 to 3D Dark Shadow` | Fixer la couleur de bordure #1 à ombre 3D sombre |  | — |  |
| 24 | 104 | Set Border color 1 > 3D Face (Button Face) | `Set Border color #1 to 3D Face (Button Face)` | Fixer la couleur de bordure #1 à face 3D (devant de bouton) |  | — |  |
| 25 | 105 | Set Border color 1 > 3D Hilight (Button Highlight) | `Set Border color #1 to 3D Hilight (Button Highlight)` | Fixer la couleur de bordure #1 à 3D surbrillance (surbrillance bouton) |  | — |  |
| 26 | 106 | Set Border color 1 > 3D Light | `Set Border color #1 to 3D Light` | Fixer la couleur de bordure #1 à 3D léger |  | — |  |
| 27 | 107 | Set Border color 1 > 3D Shadow (Button Shadow) | `Set Border color #1 to 3D Shadow (Button Shadow)` | Fixer la couleur de bordure #1 à 3D ombrée (ombre bouton) |  | — |  |
| 28 | 108 | Set Border color 1 > Active Window Border | `Set Border color #1 to Active Window Border` | Fixer la couleur de bordure #1 à couleur de bordure de fenêtre active |  | — |  |
| 29 | 109 | Set Border color 1 > Inactive border | `Set Border color #1 to Inactive border` | Fixer la couleur de bordure #1 à bordure inactive |  | — |  |
| 30 | 110 | Set Border color 1 > Window frame | `Set Border color #1 to Window frame` | Fixer la couleur de bordure #1 à bord de fenêtre |  | — |  |
| 31 | 111 | Set Border color 2 > None | `Set Border color #2 to None` | Fixer la couleur de bordure #2 à rien |  | — |  |
| 32 | 112 | Set Border color 2 > 3D Dark Shadow | `Set Border color #2 to 3D Dark Shadow` | Fixer la couleur de bordure #2 à ombre 3D sombre |  | — |  |
| 33 | 113 | Set Border color 2 > 3D Face (Button Face) | `Set Border color #2 to 3D Face (Button Face)` | Fixer la couleur de bordure #2 à face 3D (devant de bouton) |  | — |  |
| 34 | 114 | Set Border color 2 > 3D Hilight (Button Highlight) | `Set Border color #2 to 3D Hilight (Button Highlight)` | Fixer la couleur de bordure #2 à 3D surbrillance (surbrillance bouton) |  | — |  |
| 35 | 115 | Set Border color 2 > 3D Light | `Set Border color #2 to 3D Light` | Fixer la couleur de bordure #2 à 3D léger |  | — |  |
| 36 | 116 | Set Border color 2 > 3D Shadow (Button Shadow) | `Set Border color #2 to 3D Shadow (Button Shadow)` | Fixer la couleur de bordure #2 à 3D ombrée (ombre bouton) |  | — |  |
| 37 | 117 | Set Border color 2 > Active Window Border | `Set Border color #2 to Active Window Border` | Fixer la couleur de bordure #2 à couleur de bordure de fenêtre active |  | — |  |
| 38 | 118 | Set Border color 2 > Inactive border | `Set Border color #2 to Inactive border` | Fixer la couleur de bordure #2 à bordure inactive |  | — |  |
| 39 | 119 | Set Border color 2 > Window frame | `Set Border color #2 to Window frame` | Fixer la couleur de bordure #2 à bord de fenêtre |  | — |  |
| 40 | 120 | Set Text color > None | `Set Text color to None` | Fixer la couleur de texte à rien |  | — |  |
| 41 | 121 | Set Text color > 3D Hilight (Button Highlight) | `Set Text color to 3D Hilight (Button Highlight)` | Fixer la couleur de texte à 3D surbrillant (surbrillant bouton) |  | — |  |
| 42 | 122 | Set Text color > 3D Shadow (Button Shadow) | `Set Text color to 3D Shadow (Button Shadow)` | Fixer la couleur de texte à 3D ombrée (ombre bouton) |  | — |  |
| 43 | 123 | Set Text color > Button text | `Set Text color to Button text` | Fixer la couleur de texte à texte bouton |  | — |  |
| 44 | 124 | Set Text color > Caption text | `Set Text color to Caption text` | Fixer la couleur de texte à titre de texte |  | — |  |
| 45 | 125 | Set Text color > Grayed text | `Set Text color to Grayed text` | Fixer la couleur de texte à texte grisé |  | — |  |
| 46 | 126 | Set Text color > Text of item selected in a control | `Set Text color to Text of item selected in a control` | Fixer la couleur de texte à texte sélectionné dans un contrôle |  | — |  |
| 47 | 127 | Set Text color > Inactive caption text | `Set Text color to Inactive caption text` | Fixer la couleur de texte à titre inactif |  | — |  |
| 48 | 128 | Set Text color > Tooltip text | `Set Text color to Tooltip text` | Fixer la couleur de texte à texte de tooltip |  | — |  |
| 49 | 129 | Set Text color > Menu text | `Set Text color to Menu text` | Fixer la couleur de texte à texte de menu |  | — |  |
| 50 | 130 | Set Text color > Window text | `Set Text color to Window text` | Fixer la couleur de texte à texte de fenêtre |  | — |  |
| 51 | 131 | Set Fill color > Other | `Set Fill color to <p0>` | Fixer la couleur de remplissage à <p0> | numeric expression “System color index” | 3 (2 proj.) | `Animation ASB : Event ID 131, 1 Parameters { GetRGB(200, 200, 250) }` |
| 52 | 132 | Set Border color 1 > Other | `Set Border color 1 to <p0>` | Fixer la couleur de bordure 1 à <p0> | numeric expression “System color index” | — |  |
| 53 | 133 | Set Border color 2 > Other | `Set Border color 2 to <p0>` | Fixer la couleur de bordure 2 à <p0> | numeric expression “System color index” | — |  |
| 54 | 134 | Set Text color > Other | `Set Text color to <p0>` | Fixer la couleur de texte à <p0> | numeric expression “System color index” | — |  |
| 55 | 135 | Set text | `Set text to <p0>` | Changer le texte en <p0> | string expression “Text” | 18 (7 proj.) | `Mouse coordinates : Event ID 135, 1 Parameters { Str$(XMouse) + ", " + Str$(YMouse) }` |
| 56 | 136 | Set tooltip text | `Set tool tip text to <p0>` | Changer le texte du tooltip en <p0> | string expression “Text” | 1 (1 proj.) | `Tool 1 : Event ID 136, 1 Parameters { "A tool to use!" }` |
| 57 | 137 | Docking > Undock | `Undock` | Désempiler |  | 2 (1 proj.) | `Status bar : Event ID 137, 0 Parameters` |
| 58 | 138 | Docking > Dock to left | `Dock to left` | Empiler à gauche |  | — |  |
| 59 | 139 | Docking > Dock to right | `Dock to right` | Empiler à droite |  | 1 (1 proj.) | `Right Status Container : Event ID 139, 0 Parameters` |
| 60 | 140 | Docking > Dock to top | `Dock to top` | Empiler en haut |  | — |  |
| 61 | 141 | Docking > Dock to bottom | `Dock to bottom` | Empiler en bas |  | 2 (1 proj.) | `Status bar : Event ID 141, 0 Parameters` |
| 62 | 142 | Image > Show | `Show image` | Montrer l'image |  | — |  |
| 63 | 143 | Image > Hide | `Hide image` | Cacher l'image |  | — |  |
| 64 | 144 | State > Reset 'Clicked' state | `Reset 'Clicked' state` | Mettre à zéro l'état "cliqué" |  | 2 (1 proj.) | `Show Status Bar : Event ID 144, 0 Parameters` |
| 65 | 145 | Set Hyperlink color > None | `Set Hyperlink color to None` | Fixer la couleur des hyperliens à rien |  | — |  |
| 66 | 146 | Set Hyperlink color > 3D Hilight (Button Highlight) | `Set Hyperlink color to 3D Hilight (Button Highlight)` | Fixer la couleur des hyperliens à 3D surbrillant (surbrillant bouton) |  | — |  |
| 67 | 147 | Set Hyperlink color > 3D Shadow (Button Shadow) | `Set Hyperlink color to 3D Shadow (Button Shadow)` | Fixer la couleur des hyperliens à 3D ombrée (ombre bouton) |  | — |  |
| 68 | 148 | Set Hyperlink color > Button text | `Set Hyperlink color to Button text` | Fixer la couleur des hyperliens à texte bouton |  | — |  |
| 69 | 149 | Set Hyperlink color > Caption text | `Set Hyperlink color to Caption text` | Fixer la couleur des hyperliens à titre texte |  | — |  |
| 70 | 150 | Set Hyperlink color > Grayed text | `Set Hyperlink color to Grayed text` | Fixer la couleur des hyperliens à texte grisé |  | — |  |
| 71 | 151 | Set Hyperlink color > Text of item selected in a control | `Set Hyperlink color to Text of item selected in a control` | Fixer la couleur des hyperliens à texte d'un élément sélectionné dans un contrôle |  | — |  |
| 72 | 152 | Set Hyperlink color > Inactive caption text | `Set Hyperlink color to Inactive caption text` | Fixer la couleur des hyperliens à titre inactif texte |  | — |  |
| 73 | 153 | Set Hyperlink color > Tooltip text | `Set Hyperlink color to Tooltip text` | Fixer la couleur des hyperliens à texte de tooltip |  | — |  |
| 74 | 154 | Set Hyperlink color > Menu text | `Set Hyperlink color to Menu text` | Fixer la couleur des hyperliens à texte de menu |  | — |  |
| 75 | 155 | Set Hyperlink color > Window text | `Set Hyperlink color to Window text` | Fixer la couleur des hyperliens à texte de fenêtre |  | — |  |
| 76 | 156 | Set Hyperlink color > Other | `Set Hyperlink color to <p0>` | Fixer la couleur d'hyperlien à <p0> | numeric expression “System color index” | — |  |
| 77 | 157 | Attach menu option | `Attach menu option <p0>` | Attacher l'option de menu <p0> | menu option “Attach menu option” | 17 (1 proj.) | `Cut : Event ID 157, 1 Parameters { 2008 }` |
| -54 | 26 | ? | ? |  |  | 8 (6 proj.) | `Status bar : Make invisible` |
| -53 | 27 | ? | ? |  |  | 8 (6 proj.) | `Status bar : Reappear` |
| -49 | 31 | ? | ? |  |  | 6 (1 proj.) | `Floating tools caption : Set Alterable Value A to 1` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current color > Fill color | `Fill color(` | Couleur remplissage |  | 1 (1 proj.) | `Expression ID 80("Color")` |
| 1 | 81 | Current color > Border color #1 | `Border color one(` | Couleur de bordure #1 |  | — |  |
| 2 | 82 | Current color > Border color #2 | `Border color two(` | Couleur de bordure #2 |  | — |  |
| 3 | 83 | Current color > Text color | `Text color(` | Couleur du texte |  | — |  |
| 4 | 84 | System color > 3D Dark Shadow | `Dark Shadow(` | 3D ombre foncée |  | — |  |
| 5 | 85 | System color > 3D Face (Button Face) | `Button Face(` | 3D Aspect (aspect bouton) |  | — |  |
| 6 | 86 | System color > 3D Hilight (Button Highlight) | `Button Hilight(` | 3D Surbrillance (Surbrillance bouton) |  | — |  |
| 7 | 87 | System color > 3D Light | `Button Light(` | 3D Légère |  | — |  |
| 8 | 88 | System color > 3D Shadow (Button Shadow) | `Button Shadow(` | Ombre 3D (ombre bouton) |  | — |  |
| 9 | 89 | System color > Active Window Border | `Active Window Border(` | Bordure fenêtre active |  | — |  |
| 10 | 90 | System color > Active Window Caption | `Active Window Caption(` | Titre fenêtre active |  | — |  |
| 11 | 91 | System color > MDI background | `MDI background(` | Fond MDI |  | — |  |
| 12 | 92 | System color > Desktop | `Desktop(` | Bureau |  | — |  |
| 13 | 93 | System color > Button text | `Button text(` | Texte du bouton |  | — |  |
| 14 | 94 | System color > Caption text | `Caption text(` | Texte du titre |  | — |  |
| 15 | 95 | System color > Grayed text | `Grayed text(` | Texte gris |  | — |  |
| 16 | 96 | System color > Item selected in a control | `Item selected in a control(` | Elément sélectionné dans un contrôle |  | — |  |
| 17 | 97 | System color > Text of item selected in a control | `Text of item selected in a control(` | Texte de l'élément sélectionné dans un contrôle |  | — |  |
| 18 | 98 | System color > Inactive border | `Inactive border(` | Bordure inactive |  | — |  |
| 19 | 99 | System color > Inactive caption | `Inactive caption(` | Titre inactif |  | — |  |
| 20 | 100 | System color > Inactive caption text | `Inactive caption text(` | Text titre inactif |  | — |  |
| 21 | 101 | System color > Tooltip background | `Tooltip background(` | Fond du tooltip |  | — |  |
| 22 | 102 | System color > Tooltip text | `Tooltip text(` | Texte du tooltip |  | — |  |
| 23 | 103 | System color > Menu background | `Menu background(` | Fond menu |  | — |  |
| 24 | 104 | System color > Menu text | `Menu text(` | Texte du menu |  | — |  |
| 25 | 105 | System color > Scroll bar gray area | `Scroll bar gray area(` | Zone grise de la barre de défilement |  | — |  |
| 26 | 106 | System color > Window background | `Window background(` | Fond de fenêtre |  | — |  |
| 27 | 107 | System color > Window frame | `Window frame(` | Bordure de fenêtre |  | — |  |
| 28 | 108 | System color > Window text | `Window text(` | Texte de fenêtre |  | — |  |
| 29 | 109 | Text | `Text$(` | Texte | → string | 1 (1 proj.) | `Expression ID 109("Group.Good")` |
| 30 | 110 | Tool tip text | `Tool tip text$(` | Texte du tooltip | → string | — |  |
| 31 | 111 | Dimensions > Width | `Width(` | Largeur |  | 2 (1 proj.) | `Expression ID 111("Active System Box")` |
| 32 | 112 | Dimensions > Height | `Height(` | Hauteur |  | 2 (1 proj.) | `Expression ID 112("Active System Box")` |
| 33 | 113 | Current color > Hyperlink color | `Hyperlink color(` | Couleur d'hyperlien |  | — |  |
| 36 | 116 | Convert System Color To RGB | `SysToRGB(` | Convertir Couleur Système en RVB | number | — |  |
| -79 | 1 | ? | ? |  |  | 1 (1 proj.) | `Y("Floating tools frame")` |
| -73 | 7 | ? | ? |  |  | 4 (1 proj.) | `X Left("Active System Box")` |
| -72 | 8 | ? | ? |  |  | 1 (1 proj.) | `X Right("Active System Box")` |
| -71 | 9 | ? | ? |  |  | 4 (1 proj.) | `Y Top("Active System Box")` |
| -70 | 10 | ? | ? |  |  | 1 (1 proj.) | `Y Bottom("Active System Box")` |
| -69 | 11 | ? | ? |  |  | 1 (1 proj.) | `X("Floating tools frame")` |
| -64 | 16 | ? | ? |  |  | 2 (1 proj.) | `Alterable Value B("Floating tools caption")` |
