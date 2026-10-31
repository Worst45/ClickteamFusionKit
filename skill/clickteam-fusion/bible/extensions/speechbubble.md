# Extension speechbubble

- Fichier : `speechbubble.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Settings > Colors > Outline | `<objet>Set outline color to <p0>` |  | couleur « Outline Color » | — |  |
| 1 | 81 | Settings > Outline thickness | `<objet>Set outline thickness to <p0>` |  | expression numérique « Outline thickness » | — |  |
| 2 | 82 | Settings > Colors > Fill | `<objet>Set fill color to <p0>` |  | couleur « Fill Colour » | — |  |
| 3 | 83 | Settings > Shadow > Color | `<objet>Set shadow color to <p0>` |  | couleur « Color » | — |  |
| 4 | 84 | Settings > Font > Set Font Color | `<objet>Set font color to <p0>` |  | couleur « Color » | — |  |
| 5 | 85 | Settings > Shadow > Opacity | `<objet>Set shadows oppacity to <p0>` |  | expression numérique « Opacity 0% = transparent , 100% = opaque » | — |  |
| 6 | 86 | Set Width | `<objet>Set width to <p0>` |  | expression numérique « Width in pixels » | — |  |
| 7 | 87 | Target Position > Set Position... | `<objet>Set target position to <p0>` |  | position « Target Position » | — |  |
| 8 | 88 | Target Position > Set X Coordinate... | `<objet>Set target X position to <p0>` |  | expression numérique « Set X Coordinate... » | — |  |
| 9 | 89 | Target Position > Set Y Coordinate... | `<objet>Set target Y position to <p0>` |  | expression numérique « Set Y Coordinate... » | — |  |
| 10 | 90 | Set Text | `<objet>Set text to <p0>` |  | expression chaîne « Text that is shown in the speech bubble » | — |  |
| 11 | 91 | Set Margin > Set Left | `<objet>Set left margin to <p0>` |  | expression numérique « Pixels » | — |  |
| 12 | 92 | Set Margin > Set Right | `<objet>Set right margin to <p0>` |  | expression numérique « Pixels » | — |  |
| 13 | 93 | Set Margin > Set Top | `<objet>Set top margin to <p0>` |  | expression numérique « Pixels » | — |  |
| 14 | 94 | Set Margin > Set Bottom | `<objet>Set bottom margin to <p0>` |  | expression numérique « Pixels » | — |  |
| 15 | 95 | Force Update ( shouldn't be needed ) | `<objet>Update` |  |  | — |  |
| 16 | 96 | Arrow > Set Arrow size | `<objet>Set Arrow size to <p0>` |  | expression numérique « Size » | — |  |
| 17 | 97 | Arrow > Visibility > Hide | `<objet>Show arrow` |  |  | — |  |
| 18 | 98 | Arrow > Visibility > Show | `<objet>Show arrow` |  |  | — |  |
| 19 | 99 | Settings > Font > Set Font... | `<objet>Set font to ( <p0>, size <p1> (bool bold <p2>, italic <p3>)` |  | expression chaîne « Font name » ; expression numérique « Size » ; expression numérique « Bold ? 1 = yes  0 = no » ; expression numérique « Italic ? 1 = yes  0 = no » | — |  |
| 20 | 100 | Settings > Set Corner radius | `<objet>Set corner radius to <p0>` |  | expression numérique « Size » | — |  |
| 21 | 101 | Hotspot > Custom... | `<objet>Set hotspot to ( <p0>, <p1> )` |  | expression numérique « Set X Coordinate... » ; expression numérique « Set Y Coordinate... » | — |  |
| 22 | 102 | Hotspot > Top-left | `<objet>Set hotspot to top-left` |  |  | — |  |
| 23 | 103 | Hotspot > Top-center | `<objet>Set hotspot to top-center` |  |  | — |  |
| 24 | 104 | Hotspot > Top-right | `<objet>Set hotspot to top-right` |  |  | — |  |
| 25 | 105 | Hotspot > Left-center | `<objet>Set hotspot to left-center` |  |  | — |  |
| 26 | 106 | Hotspot > Center | `<objet>Set hotspot to center` |  |  | — |  |
| 27 | 107 | Hotspot > Right-center | `<objet>Set hotspot to right-center` |  |  | — |  |
| 28 | 108 | Hotspot > Bottom-left | `<objet>Set hotspot to bottom-left` |  |  | — |  |
| 29 | 109 | Hotspot > Bottom-center | `<objet>Set hotspot to bottom-center` |  |  | — |  |
| 31 | 111 | Settings > Font > Align > Left | `<objet> Allign text to the left` |  |  | — |  |
| 32 | 112 | Settings > Font > Align > Centre | `<objet> Allign text to the center` |  |  | — |  |
| 33 | 113 | Settings > Font > Align > Right | `<objet> Allign text to the right` |  |  | — |  |
| 34 | 114 | Arrow > Position > Custom... | `<objet> Set arrow origin to (<p0>,<p1>)` |  | expression numérique « Set X Coordinate... » ; expression numérique « Set Y Coordinate... » | — |  |
| 35 | 115 | Arrow > Position > Top-left | `<objet> Set arrow origin to top-left` |  |  | — |  |
| 36 | 116 | Arrow > Position > Top-center | `<objet> Set arrow origin to top-center` |  |  | — |  |
| 37 | 117 | Arrow > Position > Top-right | `<objet> Set arrow origin to top-right` |  |  | — |  |
| 38 | 118 | Arrow > Position > Left-center | `<objet> Set arrow origin to left-center` |  |  | — |  |
| 39 | 119 | Arrow > Position > Center | `<objet> Set arrow origin to centre` |  |  | — |  |
| 40 | 120 | Arrow > Position > Right-center | `<objet> Set arrow origin to right-center` |  |  | — |  |
| 41 | 121 | Arrow > Position > Bottom-left | `<objet> Set arrow origin to bottom-left` |  |  | — |  |
| 42 | 122 | Arrow > Position > Bottom-center | `<objet> Set arrow origin to bottom-center` |  |  | — |  |
| 43 | 123 | Arrow > Position > Bottom-right | `<objet> Set arrow origin to bottom-right` |  |  | — |  |
| 44 | 124 | Arrow > Position > Auto-Decide | `<objet> Set arrow origin ( auto )` |  |  | — |  |
| 45 | 125 | Settings > Shadow > X offset | `<objet> Set Shadow X offset to <p0>` |  | expression numérique « X offset » | — |  |
| 46 | 126 | Settings > Shadow > Y offset | `<objet> Set Shadow Y offset to <p0>` |  | expression numérique « Y offset » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get margin left | `Marginleft(` |  |  | — |  |
| 1 | 81 | Get margin right | `Marginright(` |  |  | — |  |
| 2 | 82 | Get margin top | `Margintop(` |  |  | — |  |
| 3 | 83 | Get margin bottom | `Marginbottom(` |  |  | — |  |
| 4 | 84 | Get fill color | `Fill(` |  |  | — |  |
| 5 | 85 | Get outline color | `Outline(` |  |  | — |  |
| 6 | 86 | Get outline thickness | `Outlinesize(` |  |  | — |  |
| 7 | 87 | Get shadow color | `Shadow(` |  |  | — |  |
| 8 | 88 | Get font color | `Fontcolor(` |  |  | — |  |
| 9 | 89 | Get shadow opacity | `ShadowOpacity(` |  |  | — |  |
| 10 | 90 | Get width | `Width(` |  |  | — |  |
| 11 | 91 | Find width of text ( without word wrap ) | `FindWidth(` |  |  | — |  |
| 12 | 92 | Get text | `GetText$(` |  | → chaîne | — |  |
| 13 | 93 | Get corner radius | `CornerRadius(` |  |  | — |  |
| 14 | 94 | Get height | `Height(` |  |  | — |  |
