# Extension kcprint

- File: `kcprint.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Print Screen | `Print screen` | Imprimer l'écran |  |
| 1 | 81 | Print Window | `Print window` | Imprimer la fenêtre |  |
| 2 | 82 | Print Client zone | `Print client zone` | Imprimer la zone client |  |
| 3 | 83 | Print zone... | `Print zone <p0>` | Imprimer zone <p0> | (unreliable parameters) |
| 4 | 84 | Printer Setup | `Setup printer` | Configuration imprimante |  |
| 5 | 85 | Printing method > Best fit | `Change printing method to best fit` | Changer la méthode d'impression à "meilleure dimension" |  |
| 6 | 86 | Printing method > Stretch to page | `Change printing method to stretch to page` | Changer la méthode d'impression à Etirer à la page |  |
| 7 | 87 | Printing method > Scale | `Change printing method to scale` | Changer la méthode d'impression à Redimensionner |  |
| 8 | 88 | Printing method > Set x scale | `Set x scale to <p0>` | Fixer échelle en X à <p0> | (unreliable parameters) |
| 9 | 89 | Printing method > Set y scale | `Set y scale to <p0>` | Fixer échelle en Y à <p0> | (unreliable parameters) |
| 10 | 90 | Print Text | `Print Text <p0>` | Imprimer texte <p0> | (unreliable parameters) |
| 11 | 91 | Print Text file | `Print Text file <p0>` | Imprimer fichier texte <p0> | (unreliable parameters) |
| 12 | 92 | Print blank page | `Print blank page` | Imprimer une page blanche |  |
