# Extension kcmslot

- Fichier : `kcmslot.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Network »
- Usage dans le corpus : 20 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Message available | `<objet> : Message available on channel <p0>` | <objet>: Message disponible sur le canal <p0> | (paramètres non fiables) | 2 (2 proj.) | `Network: Event ID -81, 1 Parameters { 0 }` |
| 1 | -82 | Error | `<objet> : Error` | <objet>: Erreur |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open channel | `Open channel <p0> as <p1>` | Ouvrir le canal <p0> comme <p1> | (paramètres non fiables) | 6 (2 proj.) | `Network : Event ID 80, 2 Parameters { "Master", 0 }` |
| 1 | 81 | Close channel | `Close channel <p0>` | Fermer le canal <p0> | (paramètres non fiables) | 2 (2 proj.) | `Network : Event ID 81, 1 Parameters { 0 }` |
| 2 | 82 | Send number | `Send number <p0> to slot <p1>` | Envoyer nombre <p0> au canal <p1> | (paramètres non fiables) | — |  |
| 3 | 83 | Send string | `Send string <p0> to slot <p1>` | Envoyer une chaîne <p0> au canal <p1> | (paramètres non fiables) | 8 (2 proj.) | `Network : Event ID 83, 2 Parameters { "Master", Expression ID 80("Edit") }` |
| 4 | 84 | Reset error | `Reset error` | RAZ erreur |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number | `Net Number(` | Récupérer un nombre | (paramètres non fiables) | — |  |
| 1 | 81 | Get string | `Net String$(` | Récupérer chaîne | (paramètres non fiables) | 2 (2 proj.) | `Expression ID 81("Network")` |
| 2 | 82 | Get last error string | `Net LastError$(` | Dernière chaîne d'erreur |  | — |  |
| 3 | 83 | Get last error | `Net LastError(` | Dernière erreur |  | — |  |
| 4 | 84 | Get current status | `Net Status(` | Récupérer l'état courant |  | — |  |
