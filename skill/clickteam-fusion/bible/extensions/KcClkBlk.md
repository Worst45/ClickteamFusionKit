# Extension KcClkBlk

- File: `KcClkBlk.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Block > Left click | `Block left click` | Bloquer le clic à gauche |  |
| 1 | 81 | Block > Middle click | `Block middle click` | Bloquer le clic du milieu |  |
| 2 | 82 | Block > Right click | `Block right click` | Bloquer le clic à droite |  |
| 3 | 83 | Unblock > Left click | `Unblock left click` | Débloquer le clic à gauche |  |
| 4 | 84 | Unblock > Middle click | `Unblock middle click` | Débloquer le clic du milieu |  |
| 5 | 85 | Unblock > Right click | `Unblock right click` | Débloquer le clic droit |  |
