# Extension Instance Communicator

- Fichier : `Instance Communicator.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Another instance is already running? | `Another instance is already running` |  |  | — |  |
| 1 | -82 | Compare to number of running instances | `Running instances <p0>` |  | comparaison numérique « Compare to the number of running instances » | — |  |
| 2 | -83 | Is this the first instance? | `This is the first instance` |  |  | — |  |
| 3 | -84 | Message received | `Message received (any type)` |  |  | — |  |
| 4 | -85 | Message received of certain type | `Message received of type <p0>` |  | comparaison de chaînes « Type of message received » | — |  |
| 5 | -86 | Compare message data (string) | `Message data <p0>` |  | comparaison de chaînes « Compare to message data (as a string) » | — |  |
| 6 | -87 | Compare message data (value) | `Message data <p0>` |  | comparaison numérique « Compare to message data (as a value) » | — |  |
| 7 | -88 | Is instance X running? | `Is instance <p0> running?` |  | expression numérique « Instance number » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Show and focus first instance | `Show and focus first instance` |  |  | — |  |
| 1 | 81 | Send a message to first instance > String | `Send message to first instance: type <p0> ; data <p1>` |  | expression chaîne « Message type » ; expression chaîne « Message data » | — |  |
| 2 | 82 | Send a message to first instance > Integer | `Send message to first instance: type <p0> ; data <p1>` |  | expression chaîne « Message type » ; expression numérique « Message data » | — |  |
| 3 | 83 | Send a message to all instances > String | `Send message to all instances: type <p0> ; data <p1>` |  | expression chaîne « Message type » ; expression chaîne « Message data » | — |  |
| 4 | 84 | Send a message to all instances > Integer | `Send message to all instances: type <p0> ; data <p1>` |  | expression chaîne « Message type » ; expression numérique « Message data » | — |  |
| 5 | 85 | Send a message to first instance > Float | `Send message to first instance: type <p0> ; data <p1>` |  | expression chaîne « Message type » ; expression numérique « Message data » | — |  |
| 6 | 86 | Send a message to first instance > Binary | `Send message to first instance: type <p0> ; data at address <p1> ; length <p2>` |  | expression chaîne « Message type » ; expression numérique « Address of data to send » ; expression numérique « Length of data » | — |  |
| 7 | 87 | Send a message to all instances > Float | `Send message to all instances: type <p0> ; data <p1>` |  | expression chaîne « Message type » ; expression numérique « Message data » | — |  |
| 8 | 88 | Send a message to all instances > Binary | `Send message to all instance: type <p0> ; data at address <p1> ; length <p2>` |  | expression chaîne « Message type » ; expression numérique « Address of data to send » ; expression numérique « Length of data » | — |  |
| 9 | 89 | Reorder instance numbers | `Reorder instance numbers` |  |  | — |  |
| 10 | 90 | Show and focus one instance | `Show and focus instance <p0>` |  | expression numérique « Instance number (starting from 1) » | — |  |
| 11 | 91 | Send a message to one instance > String | `Send message to instance <p0> : type <p1> ; data <p2>` |  | expression numérique « Instance number (starting from 1) » ; expression chaîne « Message type » ; expression chaîne « Message data » | — |  |
| 12 | 92 | Send a message to one instance > Integer | `Send message to instance <p0> : type <p1> ; data <p2>` |  | expression numérique « Instance number (starting from 1) » ; expression chaîne « Message type » ; expression numérique « Message data » | — |  |
| 13 | 93 | Send a message to one instance > Float | `Send message to instance <p0> : type <p1> ; data <p2>` |  | expression numérique « Instance number (starting from 1) » ; expression chaîne « Message type » ; expression numérique « Message data » | — |  |
| 14 | 94 | Send a message to one instance > Binary | `Send message to instance <p0> : type <p1> ; data at address <p2> ; length <p3>` |  | expression numérique « Instance number (starting from 1) » ; expression chaîne « Message type » ; expression numérique « Address of data to send » ; expression numérique « Length of data » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of instances running | `Instance Count(` |  |  | — |  |
| 1 | 81 | Get message type | `Message Type$(` |  | → chaîne | — |  |
| 2 | 82 | Get message data (string) | `Message Data$(` |  | → chaîne | — |  |
| 3 | 83 | Get message data (integer) | `Message Data(` |  |  | — |  |
| 4 | 84 | Get unique instance number | `Get Instance No(` |  |  | — |  |
| 5 | 85 | Get message data (float) | `Message Data Float(` |  |  | — |  |
| 6 | 86 | Get message data (binary, address) | `Message Data Address(` |  |  | — |  |
| 7 | 87 | Get message data (binary, length) | `Message Data Length(` |  |  | — |  |
