# Extension LacewingWebserver

- Fichier : `LacewingWebserver.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<objet> : On error` |  |  | — |  |
| 1 | -82 | HTTP server is hosting | `<objet> : HTTP server is hosting` |  |  | — |  |
| 2 | -83 | HTTPS server is hosting | `<objet> : HTTPS server is hosting` |  |  | — |  |
| 3 | -84 | HTTPS certificate is loaded | `<objet> : HTTPS certificate is loaded` |  |  | — |  |
| 5 | -86 | Connection > On disconnect | `<objet> : On disconnect` |  |  | — |  |
| 6 | -87 | Connection > Connection is HTTPS | `<objet> : Connection is HTTPS` |  |  | — |  |
| 7 | -88 | Request > On GET request | `<objet> : On GET request` |  |  | — |  |
| 8 | -89 | Request > On POST request | `<objet> : On POST request` |  |  | — |  |
| 9 | -90 | Request > On HEAD request | `<objet> : On HEAD request` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | HTTP server > Host | `Host HTTP server on port <p0>` |  | expression numérique « Port (default 80) » | — |  |
| 1 | 81 | HTTP server > Stop hosting | `Stop hosting HTTP server` |  |  | — |  |
| 2 | 82 | HTTPS server > Host | `Host HTTPS server on port <p0>` |  | expression numérique « Port (default 443) » | — |  |
| 3 | 83 | HTTPS server > Stop hosting | `Stop hosting HTTPS server` |  |  | — |  |
| 4 | 84 | HTTPS server > Load certificate from system | `Load HTTPS certificate from store <p0> with common name <p1> and location <p2>` |  | expression chaîne « Store (default is "MY") » ; expression chaîne « Common name (usually the hostname) » ; expression chaîne « Location (default: "CurrentUser") » | — |  |
| 5 | 85 | On request > Set MIME type | `Set response MIME type to <p0>` |  | expression chaîne « MIME type (default: text/html) » | — |  |
| 7 | 87 | On request > Set cookie | `Set cookie in response : <p0> = <p1>` |  | expression chaîne « Cookie name » ; expression chaîne « Cookie value » | — |  |
| 9 | 89 | On request > Caching > Disable response caching | `Disable response caching` |  |  | — |  |
| 10 | 90 | On request > Caching > Set as unmodified | `Set unmodified` |  |  | — |  |
| 11 | 91 | On request > Caching > Set last modified | `Set last modified time to <p0> (UNIX time)` |  | expression numérique « Last modified time (UNIX time) » | — |  |
| 12 | 92 | On request > Add to response > String | `Add string <p0> to response` |  | expression chaîne « String to add » | — |  |
| 13 | 93 | On request > Add to response > File > Guess MIME type | `Add file <p0> to response and guess the MIME type` |  | nom de fichier « Filename » | — |  |
| 14 | 94 | On request > Add to response > File > Leave the MIME type alone | `Add file <p0> to response and leave the MIME type alone` |  | nom de fichier « Filename » | — |  |
| 15 | 95 | On request > Add to response > Binary > Byte | `Add byte <p0> to response` |  | expression numérique « Value » | — |  |
| 16 | 96 | On request > Add to response > Binary > Short | `Add short <p0> to response` |  | expression numérique « Value » | — |  |
| 17 | 97 | On request > Add to response > Binary > Integer | `Add integer <p0> to response` |  | expression numérique « Value » | — |  |
| 18 | 98 | On request > Add to response > Binary > From memory address | `Add <p1> bytes from memory address <p0> to response` |  | expression numérique « Address » ; expression numérique « Size » | — |  |
| 19 | 99 | On request > Redirect to another URL | `Redirect request to <p0>` |  | expression chaîne « New URL » | — |  |
| 22 | 102 | On request > Add to response > Binary > Set big endian | `Set binary mode to big endian` |  |  | — |  |
| 23 | 103 | On request > Add to response > Binary > Set little endian (default) | `Set binary mode to little endian` |  |  | — |  |
| 24 | 104 | On request > Set MIME type (with charset) | `Set response MIME type to <p0> with charset <p1>` |  | expression chaîne « MIME type (default text/html) » ; expression chaîne « Charset (default UTF-8) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Error string (for on error) | `Error$(` |  | → chaîne | — |  |
| 1 | 81 | Lacewing version string | `Version$(` |  | → chaîne | — |  |
| 2 | 82 | Get connection IP address | `Connection_IP$(` |  | → chaîne | — |  |
| 3 | 83 | Statistics > Bytes sent | `HTTPBytesSent(` |  |  | — |  |
| 4 | 84 | Statistics > Bytes received | `HTTPBytesReceived(` |  |  | — |  |
| 7 | 87 | Request > Get URL | `Request_URL$(` |  | → chaîne | — |  |
| 8 | 88 | Request > Get header | `Request_Header$(` |  | chaîne « Name » → chaîne | — |  |
| 9 | 89 | Request > Get cookie | `Request_Cookie$(` |  | chaîne « Name » → chaîne | — |  |
| 10 | 90 | Request > Get last modified time | `Request_LastModified(` |  | chaîne « Name » | — |  |
| 11 | 91 | Request > Get GET item | `Request_GET$(` |  | chaîne « Item name » → chaîne | — |  |
| 12 | 92 | Request > Get POST item | `Request_POST$(` |  | chaîne « Item name » → chaîne | — |  |
| 13 | 93 | Request > Get hostname | `Request_Hostname$(` |  | → chaîne | — |  |
| 14 | 94 | Guess MIME type for filename | `GuessMIMEType$(` |  | type 45 « Filename or file extension » → chaîne | — |  |
| 15 | 95 | Get local connection data | `Connection_LocalData$(` |  | chaîne « Key » → chaîne | — |  |
