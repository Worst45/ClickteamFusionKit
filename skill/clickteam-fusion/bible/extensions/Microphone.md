# Extension Microphone

- Fichier : `Microphone.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Recording done | `<objet>: Recording done` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Listen | `Listen for <p0> seconds` |  | expression numérique « Number of seconds » | — |  |
| 1 | 81 | Play from memory | `Play memory buffer at left <p0>, right <p1> with size <p2>` |  | expression numérique « Left address » ; expression numérique « Right address » ; expression numérique « Size » | — |  |
| 2 | 82 | Save to file | `Save to file <p0>` |  | expression chaîne « Filename » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Left buffer address | `LeftBufferAddress(` |  |  | — |  |
| 1 | 81 | Right buffer address | `RightBufferAddress(` |  |  | — |  |
| 2 | 82 | Buffer size | `BufferSize(` |  |  | — |  |
