# Extension Instance Communicator

- File: `Instance Communicator.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Another instance is already running? | `Another instance is already running` |  |  | — |  |
| 1 | -82 | Compare to number of running instances | `Running instances <p0>` |  | numeric comparison “Compare to the number of running instances” | — |  |
| 2 | -83 | Is this the first instance? | `This is the first instance` |  |  | — |  |
| 3 | -84 | Message received | `Message received (any type)` |  |  | — |  |
| 4 | -85 | Message received of certain type | `Message received of type <p0>` |  | string comparison “Type of message received” | — |  |
| 5 | -86 | Compare message data (string) | `Message data <p0>` |  | string comparison “Compare to message data (as a string)” | — |  |
| 6 | -87 | Compare message data (value) | `Message data <p0>` |  | numeric comparison “Compare to message data (as a value)” | — |  |
| 7 | -88 | Is instance X running? | `Is instance <p0> running?` |  | numeric expression “Instance number” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Show and focus first instance | `Show and focus first instance` |  |  | — |  |
| 1 | 81 | Send a message to first instance > String | `Send message to first instance: type <p0> ; data <p1>` |  | string expression “Message type”; string expression “Message data” | — |  |
| 2 | 82 | Send a message to first instance > Integer | `Send message to first instance: type <p0> ; data <p1>` |  | string expression “Message type”; numeric expression “Message data” | — |  |
| 3 | 83 | Send a message to all instances > String | `Send message to all instances: type <p0> ; data <p1>` |  | string expression “Message type”; string expression “Message data” | — |  |
| 4 | 84 | Send a message to all instances > Integer | `Send message to all instances: type <p0> ; data <p1>` |  | string expression “Message type”; numeric expression “Message data” | — |  |
| 5 | 85 | Send a message to first instance > Float | `Send message to first instance: type <p0> ; data <p1>` |  | string expression “Message type”; numeric expression “Message data” | — |  |
| 6 | 86 | Send a message to first instance > Binary | `Send message to first instance: type <p0> ; data at address <p1> ; length <p2>` |  | string expression “Message type”; numeric expression “Address of data to send”; numeric expression “Length of data” | — |  |
| 7 | 87 | Send a message to all instances > Float | `Send message to all instances: type <p0> ; data <p1>` |  | string expression “Message type”; numeric expression “Message data” | — |  |
| 8 | 88 | Send a message to all instances > Binary | `Send message to all instance: type <p0> ; data at address <p1> ; length <p2>` |  | string expression “Message type”; numeric expression “Address of data to send”; numeric expression “Length of data” | — |  |
| 9 | 89 | Reorder instance numbers | `Reorder instance numbers` |  |  | — |  |
| 10 | 90 | Show and focus one instance | `Show and focus instance <p0>` |  | numeric expression “Instance number (starting from 1)” | — |  |
| 11 | 91 | Send a message to one instance > String | `Send message to instance <p0> : type <p1> ; data <p2>` |  | numeric expression “Instance number (starting from 1)”; string expression “Message type”; string expression “Message data” | — |  |
| 12 | 92 | Send a message to one instance > Integer | `Send message to instance <p0> : type <p1> ; data <p2>` |  | numeric expression “Instance number (starting from 1)”; string expression “Message type”; numeric expression “Message data” | — |  |
| 13 | 93 | Send a message to one instance > Float | `Send message to instance <p0> : type <p1> ; data <p2>` |  | numeric expression “Instance number (starting from 1)”; string expression “Message type”; numeric expression “Message data” | — |  |
| 14 | 94 | Send a message to one instance > Binary | `Send message to instance <p0> : type <p1> ; data at address <p2> ; length <p3>` |  | numeric expression “Instance number (starting from 1)”; string expression “Message type”; numeric expression “Address of data to send”; numeric expression “Length of data” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of instances running | `Instance Count(` |  |  | — |  |
| 1 | 81 | Get message type | `Message Type$(` |  | → string | — |  |
| 2 | 82 | Get message data (string) | `Message Data$(` |  | → string | — |  |
| 3 | 83 | Get message data (integer) | `Message Data(` |  |  | — |  |
| 4 | 84 | Get unique instance number | `Get Instance No(` |  |  | — |  |
| 5 | 85 | Get message data (float) | `Message Data Float(` |  |  | — |  |
| 6 | 86 | Get message data (binary, address) | `Message Data Address(` |  |  | — |  |
| 7 | 87 | Get message data (binary, length) | `Message Data Length(` |  |  | — |  |
