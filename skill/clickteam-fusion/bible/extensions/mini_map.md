# Extension mini_map

- Fichier : `mini_map.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Working Area | `Set Working Area - Position (<p0>, <p1>) - Size (<p2>, <p3>)` |  | expression numérique « Work Area X » ; expression numérique « Work Area Y » ; expression numérique « Work Area Width » ; expression numérique « Work Area Height » | — |  |
| 1 | 81 | Drawing > Clear | `Clear Minimap` |  |  | — |  |
| 2 | 82 | Drawing > Blit X,Y | `Blit at (<p0>, <p1>) - Type (<p2>) - Size (<p3>) - Color (<p4>)` |  | expression numérique « X Position to Blit » ; expression numérique « Y Position to Blit » ; expression numérique « Shape: 0=Rectangle, 1=Circle, 2=Cross » ; expression numérique « Size of Dot to Blit » ; couleur « Color of Dot to Blit » | — |  |
| 3 | 83 | Drawing > Blit Object | `Blit (<p0>) - Type (<p1>) - Size (<p2>) - Color (<p3>)` |  | objet « Object to Blit » ; expression numérique « Shape: 0=Rectangle, 1=Circle, 2=Cross » ; expression numérique « Size of Dot to Blit » ; couleur « Color of Dot to Blit » | — |  |
| 4 | 84 | Appearence > Set Background Color | `Set Background Color (<p0>)` |  | couleur « Background Color » | — |  |
| 5 | 85 | Appearence > Set Border Color | `Set Border Color (<p0>)` |  | couleur « Border Color » | — |  |
| 6 | 86 | Appearence > Set Border Thickness | `Set Background Thickness (<p0>)` |  | expression numérique « Thickness of Border » | — |  |
| 7 | 87 | Appearence > Show/Hide Background | `Set Background Visibility State (<p0>)` |  | expression numérique « Background Visibility State (0=Hidden, 1=Visible) » | — |  |
| 8 | 88 | Drawing > Advanced > Minimap Coordinates > Blit Line | `Blit Line (Minimap) - (<p0>, <p1>) to (<p2>, <p3>) - Thickness (<p4>) - Color (<p5>)` |  | expression numérique « X Position in Minimap Coordinates » ; expression numérique « Y Position in Minimap Coordinates » ; expression numérique « Second X Position in Minimap Coordinates » ; expression numérique « Second Y Position in Minimap Coordinates » ; expression numérique « Thickness » ; couleur « Color » | — |  |
| 9 | 89 | Drawing > Advanced > Minimap Coordinates > Blit Rectangle | `Blit Rectangle (Minimap) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | expression numérique « X Position in Minimap Coordinates » ; expression numérique « Y Position in Minimap Coordinates » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill Color » ; expression numérique « Thickness of Border » ; couleur « Border Color » | — |  |
| 10 | 90 | Drawing > Advanced > Minimap Coordinates > Blit Ellipse | `Blit Ellipse (Minimap) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | expression numérique « X Position in Minimap Coordinates » ; expression numérique « Y Position in Minimap Coordinates » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill Color » ; expression numérique « Thickness of Border » ; couleur « Border Color » | — |  |
| 11 | 91 | Drawing > Advanced > Global Coordinates > Blit Line | `Blit Line (Global) - (<p0>, <p1>) to (<p2>, <p3>) - Thickness (<p4>) - Color (<p5>)` |  | expression numérique « X Position in Global Coordinates » ; expression numérique « Y Position in Global Coordinates » ; expression numérique « Second X Position in Global Coordinates » ; expression numérique « Second Y Position in Global Coordinates » ; expression numérique « Thickness » ; couleur « Color » | — |  |
| 12 | 92 | Drawing > Advanced > Global Coordinates > Blit Rectangle | `Blit Rectangle (Global) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | expression numérique « X Position in Global Coordinates » ; expression numérique « Y Position in Global Coordinates » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill Color » ; expression numérique « Thickness of Border » ; couleur « Border Color » | — |  |
| 13 | 93 | Drawing > Advanced > Global Coordinates > Blit Ellipse | `Blit Ellipse (Global) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | expression numérique « X Position in Global Coordinates » ; expression numérique « Y Position in Global Coordinates » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill Color » ; expression numérique « Thickness of Border » ; couleur « Border Color » | — |  |
| 14 | 94 | Position  Size > Resize Minimap | `Resize Minimap (<p0>, <p1>)` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 15 | 95 | Position  Size > Set Position | `Set Position (<p0>, <p1>)` |  | expression numérique « X Position » ; expression numérique « Y Position » | — |  |
| 16 | 96 | Drawing > Flash X,Y | `Flash at (<p0>, <p1>) for (<p2>) loops - Type (<p3>) - Size (<p4>) - Color (<p5>)` |  | expression numérique « X Position to Blit » ; expression numérique « Y Position to Blit » ; expression numérique « Duration (In MMF Loops) » ; expression numérique « Blink Duration (In MMF Loops) » ; expression numérique « Shape: 0=Rectangle, 1=Circle, 2=Cross » ; expression numérique « Size of Dot to Blit » ; couleur « Color of Dot to Blit » | — |  |
| 17 | 97 | Drawing > Flash Object | `Flash (<p0>) for (<p1>) loops - Type (<p2>) - Size (<p3>) - Color (<p4>)` |  | objet « Object to Blit » ; expression numérique « Duration (In MMF Loops) » ; expression numérique « Blink Duration (In MMF Loops) » ; expression numérique « Shape: 0=Rectangle, 1=Circle, 2=Cross » ; expression numérique « Size of Dot to Blit » ; couleur « Color of Dot to Blit » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Conversions > Convert X to Minimap X | `XtoMapX(` |  | nombre « X Position » | — |  |
| 1 | 81 | Conversions > Convert Y to Minimap Y | `YtoMapY(` |  | nombre « Y Position » | — |  |
| 2 | 82 | Conversions > Convert Minimap X to X | `MapXtoX(` |  | nombre « X Position » | — |  |
| 3 | 83 | Conversions > Convert Minimap Y to Y | `MapYtoY(` |  | nombre « Y Position » | — |  |
