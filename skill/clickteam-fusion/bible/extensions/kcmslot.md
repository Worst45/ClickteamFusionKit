# Extension kcmslot

- File: `kcmslot.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Message available | `<object> : Message available on channel <p0>` | <object>: Message disponible sur le canal <p0> | (unreliable parameters) |
| 1 | -82 | Error | `<object> : Error` | <object>: Erreur |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Open channel | `Open channel <p0> as <p1>` | Ouvrir le canal <p0> comme <p1> | (unreliable parameters) |
| 1 | 81 | Close channel | `Close channel <p0>` | Fermer le canal <p0> | (unreliable parameters) |
| 2 | 82 | Send number | `Send number <p0> to slot <p1>` | Envoyer nombre <p0> au canal <p1> | (unreliable parameters) |
| 3 | 83 | Send string | `Send string <p0> to slot <p1>` | Envoyer une chaîne <p0> au canal <p1> | (unreliable parameters) |
| 4 | 84 | Reset error | `Reset error` | RAZ erreur |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get number | `Net Number(` | Récupérer un nombre | (unreliable parameters) |
| 1 | 81 | Get string | `Net String$(` | Récupérer chaîne | (unreliable parameters) |
| 2 | 82 | Get last error string | `Net LastError$(` | Dernière chaîne d'erreur |  |
| 3 | 83 | Get last error | `Net LastError(` | Dernière erreur |  |
| 4 | 84 | Get current status | `Net Status(` | Récupérer l'état courant |  |
