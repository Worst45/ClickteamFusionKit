# Extension LacewingWebserver

- File: `LacewingWebserver.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<object> : On error` |  |  | — |  |
| 1 | -82 | HTTP server is hosting | `<object> : HTTP server is hosting` |  |  | — |  |
| 2 | -83 | HTTPS server is hosting | `<object> : HTTPS server is hosting` |  |  | — |  |
| 3 | -84 | HTTPS certificate is loaded | `<object> : HTTPS certificate is loaded` |  |  | — |  |
| 5 | -86 | Connection > On disconnect | `<object> : On disconnect` |  |  | — |  |
| 6 | -87 | Connection > Connection is HTTPS | `<object> : Connection is HTTPS` |  |  | — |  |
| 7 | -88 | Request > On GET request | `<object> : On GET request` |  |  | — |  |
| 8 | -89 | Request > On POST request | `<object> : On POST request` |  |  | — |  |
| 9 | -90 | Request > On HEAD request | `<object> : On HEAD request` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | HTTP server > Host | `Host HTTP server on port <p0>` |  | numeric expression “Port (default 80)” | — |  |
| 1 | 81 | HTTP server > Stop hosting | `Stop hosting HTTP server` |  |  | — |  |
| 2 | 82 | HTTPS server > Host | `Host HTTPS server on port <p0>` |  | numeric expression “Port (default 443)” | — |  |
| 3 | 83 | HTTPS server > Stop hosting | `Stop hosting HTTPS server` |  |  | — |  |
| 4 | 84 | HTTPS server > Load certificate from system | `Load HTTPS certificate from store <p0> with common name <p1> and location <p2>` |  | string expression “Store (default is "MY")”; string expression “Common name (usually the hostname)”; string expression “Location (default: "CurrentUser")” | — |  |
| 5 | 85 | On request > Set MIME type | `Set response MIME type to <p0>` |  | string expression “MIME type (default: text/html)” | — |  |
| 7 | 87 | On request > Set cookie | `Set cookie in response : <p0> = <p1>` |  | string expression “Cookie name”; string expression “Cookie value” | — |  |
| 9 | 89 | On request > Caching > Disable response caching | `Disable response caching` |  |  | — |  |
| 10 | 90 | On request > Caching > Set as unmodified | `Set unmodified` |  |  | — |  |
| 11 | 91 | On request > Caching > Set last modified | `Set last modified time to <p0> (UNIX time)` |  | numeric expression “Last modified time (UNIX time)” | — |  |
| 12 | 92 | On request > Add to response > String | `Add string <p0> to response` |  | string expression “String to add” | — |  |
| 13 | 93 | On request > Add to response > File > Guess MIME type | `Add file <p0> to response and guess the MIME type` |  | file name “Filename” | — |  |
| 14 | 94 | On request > Add to response > File > Leave the MIME type alone | `Add file <p0> to response and leave the MIME type alone` |  | file name “Filename” | — |  |
| 15 | 95 | On request > Add to response > Binary > Byte | `Add byte <p0> to response` |  | numeric expression “Value” | — |  |
| 16 | 96 | On request > Add to response > Binary > Short | `Add short <p0> to response` |  | numeric expression “Value” | — |  |
| 17 | 97 | On request > Add to response > Binary > Integer | `Add integer <p0> to response` |  | numeric expression “Value” | — |  |
| 18 | 98 | On request > Add to response > Binary > From memory address | `Add <p1> bytes from memory address <p0> to response` |  | numeric expression “Address”; numeric expression “Size” | — |  |
| 19 | 99 | On request > Redirect to another URL | `Redirect request to <p0>` |  | string expression “New URL” | — |  |
| 22 | 102 | On request > Add to response > Binary > Set big endian | `Set binary mode to big endian` |  |  | — |  |
| 23 | 103 | On request > Add to response > Binary > Set little endian (default) | `Set binary mode to little endian` |  |  | — |  |
| 24 | 104 | On request > Set MIME type (with charset) | `Set response MIME type to <p0> with charset <p1>` |  | string expression “MIME type (default text/html)”; string expression “Charset (default UTF-8)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Error string (for on error) | `Error$(` |  | → string | — |  |
| 1 | 81 | Lacewing version string | `Version$(` |  | → string | — |  |
| 2 | 82 | Get connection IP address | `Connection_IP$(` |  | → string | — |  |
| 3 | 83 | Statistics > Bytes sent | `HTTPBytesSent(` |  |  | — |  |
| 4 | 84 | Statistics > Bytes received | `HTTPBytesReceived(` |  |  | — |  |
| 7 | 87 | Request > Get URL | `Request_URL$(` |  | → string | — |  |
| 8 | 88 | Request > Get header | `Request_Header$(` |  | string “Name” → string | — |  |
| 9 | 89 | Request > Get cookie | `Request_Cookie$(` |  | string “Name” → string | — |  |
| 10 | 90 | Request > Get last modified time | `Request_LastModified(` |  | string “Name” | — |  |
| 11 | 91 | Request > Get GET item | `Request_GET$(` |  | string “Item name” → string | — |  |
| 12 | 92 | Request > Get POST item | `Request_POST$(` |  | string “Item name” → string | — |  |
| 13 | 93 | Request > Get hostname | `Request_Hostname$(` |  | → string | — |  |
| 14 | 94 | Guess MIME type for filename | `GuessMIMEType$(` |  | type 45 “Filename or file extension” → string | — |  |
| 15 | 95 | Get local connection data | `Connection_LocalData$(` |  | string “Key” → string | — |  |
