# Extension Client

- Fichier : `Client.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On connect | `<objet> : on connect` |  |  | — |  |
| 1 | -82 | On disconnect | `<objet> : on disconnect` |  |  | — |  |
| 2 | -83 | On recieve | `<objet> : on recieve` |  |  | — |  |
| 3 | -84 | On recieve (UDP) | `<objet> : on recieve (UDP)` |  |  | — |  |
| 4 | -85 | On error | `<objet> : on error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connect | `Connect to <p0> on port <p1>` |  | expression chaîne « Host » ; expression numérique « Port » | — |  |
| 1 | 81 | Disconnect | `Disconnect` |  |  | — |  |
| 2 | 82 | Send string | `Send string <p0>` |  | expression chaîne « String to send » | — |  |
| 3 | 83 | Send integer | `Send integer <p0>` |  | expression numérique « Integer to send » | — |  |
| 4 | 84 | Send byte | `Send byte <p0>` |  | expression numérique « Byte to send (0-255) » | — |  |
| 5 | 85 | Send buffer | `Send buffer at <p0>, size <p1>` |  | expression numérique « Address » ; expression numérique « Size » | — |  |
| 6 | 86 | Send float | `Send float <p0>` |  | expression numérique « Float to send » | — |  |
| 7 | 87 | Send string (UDP) | `Send string <p0> via UDP` |  | expression chaîne « String to send » | — |  |
| 8 | 88 | Send integer (UDP) | `Send integer <p0> via UDP` |  | expression numérique « Integer to send » | — |  |
| 9 | 89 | Send byte (UDP) | `Send byte <p0> via UDP` |  | expression numérique « Byte to send (0-255) » | — |  |
| 10 | 90 | Send buffer (UDP) | `Send buffer at <p0>, size <p1> via UDP` |  | expression numérique « Address » ; expression numérique « Size » | — |  |
| 11 | 91 | Send float (UDP) | `Send float <p0> via UDP` |  | expression numérique « Float to send » | — |  |
| 12 | 92 | Add string to packet stack | `Add string <p0> to packet stack` |  | expression chaîne « String to add » | — |  |
| 13 | 93 | Add integer to packet stack | `Add integer <p0> to packet stack` |  | expression numérique « Integer to add » | — |  |
| 14 | 94 | Add byte to packet stack | `Add byte <p0> to packet stack` |  | expression numérique « Byte to add » | — |  |
| 15 | 95 | Add buffer to packet stack | `Add buffer at <p0>, size <p1> to packet stack` |  | expression numérique « Address » ; expression numérique « Size » | — |  |
| 16 | 96 | Add float to packet stack | `Add float <p0> to packet stack` |  | expression numérique « Float to add » | — |  |
| 17 | 97 | Clear packet stack | `Clear packet stack` |  |  | — |  |
| 18 | 98 | Send packet stack | `Send packet stack` |  |  | — |  |
| 19 | 99 | Send packet stack via UDP | `Send packet stack via UDP` |  |  | — |  |
| 20 | 100 | Set recieve buffer address | `Set recieve buffer address to <p0>` |  | expression numérique « Address » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get string | `GetString$(` |  | nombre « Position » ; nombre « Size (-1 for null terminated) » → chaîne | — |  |
| 1 | 81 | Get integer | `GetInteger(` |  | nombre « Position » | — |  |
| 2 | 82 | Get byte | `GetByte(` |  | nombre « Position » | — |  |
| 3 | 83 | Get float | `GetFloat(` |  | nombre « Position » | — |  |
| 4 | 84 | Get address of internal recieve buffer | `InternalRecieveBufferAddress(` |  |  | — |  |
| 5 | 85 | Get error number | `error(` |  |  | — |  |
| 6 | 86 | Get error string | `error$(` |  | → chaîne | — |  |
| 7 | 87 | Get recieved packet size | `GetRecievedSize(` |  |  | — |  |
