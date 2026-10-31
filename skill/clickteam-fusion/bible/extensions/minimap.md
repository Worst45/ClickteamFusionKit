# Extension minimap

- Fichier : `minimap.mfx` — extension tierce (fournie avec un projet téléchargé)
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
