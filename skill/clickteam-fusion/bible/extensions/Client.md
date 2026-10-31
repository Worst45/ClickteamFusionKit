# Extension Client

- File: `Client.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On connect | `<object> : on connect` |  |  | — |  |
| 1 | -82 | On disconnect | `<object> : on disconnect` |  |  | — |  |
| 2 | -83 | On recieve | `<object> : on recieve` |  |  | — |  |
| 3 | -84 | On recieve (UDP) | `<object> : on recieve (UDP)` |  |  | — |  |
| 4 | -85 | On error | `<object> : on error` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connect | `Connect to <p0> on port <p1>` |  | string expression “Host”; numeric expression “Port” | — |  |
| 1 | 81 | Disconnect | `Disconnect` |  |  | — |  |
| 2 | 82 | Send string | `Send string <p0>` |  | string expression “String to send” | — |  |
| 3 | 83 | Send integer | `Send integer <p0>` |  | numeric expression “Integer to send” | — |  |
| 4 | 84 | Send byte | `Send byte <p0>` |  | numeric expression “Byte to send (0-255)” | — |  |
| 5 | 85 | Send buffer | `Send buffer at <p0>, size <p1>` |  | numeric expression “Address”; numeric expression “Size” | — |  |
| 6 | 86 | Send float | `Send float <p0>` |  | numeric expression “Float to send” | — |  |
| 7 | 87 | Send string (UDP) | `Send string <p0> via UDP` |  | string expression “String to send” | — |  |
| 8 | 88 | Send integer (UDP) | `Send integer <p0> via UDP` |  | numeric expression “Integer to send” | — |  |
| 9 | 89 | Send byte (UDP) | `Send byte <p0> via UDP` |  | numeric expression “Byte to send (0-255)” | — |  |
| 10 | 90 | Send buffer (UDP) | `Send buffer at <p0>, size <p1> via UDP` |  | numeric expression “Address”; numeric expression “Size” | — |  |
| 11 | 91 | Send float (UDP) | `Send float <p0> via UDP` |  | numeric expression “Float to send” | — |  |
| 12 | 92 | Add string to packet stack | `Add string <p0> to packet stack` |  | string expression “String to add” | — |  |
| 13 | 93 | Add integer to packet stack | `Add integer <p0> to packet stack` |  | numeric expression “Integer to add” | — |  |
| 14 | 94 | Add byte to packet stack | `Add byte <p0> to packet stack` |  | numeric expression “Byte to add” | — |  |
| 15 | 95 | Add buffer to packet stack | `Add buffer at <p0>, size <p1> to packet stack` |  | numeric expression “Address”; numeric expression “Size” | — |  |
| 16 | 96 | Add float to packet stack | `Add float <p0> to packet stack` |  | numeric expression “Float to add” | — |  |
| 17 | 97 | Clear packet stack | `Clear packet stack` |  |  | — |  |
| 18 | 98 | Send packet stack | `Send packet stack` |  |  | — |  |
| 19 | 99 | Send packet stack via UDP | `Send packet stack via UDP` |  |  | — |  |
| 20 | 100 | Set recieve buffer address | `Set recieve buffer address to <p0>` |  | numeric expression “Address” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get string | `GetString$(` |  | number “Position”; number “Size (-1 for null terminated)” → string | — |  |
| 1 | 81 | Get integer | `GetInteger(` |  | number “Position” | — |  |
| 2 | 82 | Get byte | `GetByte(` |  | number “Position” | — |  |
| 3 | 83 | Get float | `GetFloat(` |  | number “Position” | — |  |
| 4 | 84 | Get address of internal recieve buffer | `InternalRecieveBufferAddress(` |  |  | — |  |
| 5 | 85 | Get error number | `error(` |  |  | — |  |
| 6 | 86 | Get error string | `error$(` |  | → string | — |  |
| 7 | 87 | Get recieved packet size | `GetRecievedSize(` |  |  | — |  |
