# Extension LacewingServer

- Fichier : `LacewingServer.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<objet> : On error` |  |  | — |  |
| 1 | -82 | Connection > On connect request | `<objet> : On connect request` |  |  | — |  |
| 2 | -83 | Connection > On disconnect | `<objet> : On disconnect` |  |  | — |  |
| 3 | -84 | Channel > On join request | `<objet> : On join request` |  |  | — |  |
| 4 | -85 | Channel > On leave request | `<objet> : On leave request` |  |  | — |  |
| 5 | -86 | Channel > On all channels loop | `<objet> : On all channels loop` |  |  | — |  |
| 6 | -87 | Channel > On client channels loop | `<objet> : On client channels loop` |  |  | — |  |
| 7 | -88 | Client > On all clients loop | `<objet> : On all clients loop` |  |  | — |  |
| 8 | -89 | Client > On channel clients loop | `<objet> : On channel clients loop` |  |  | — |  |
| 9 | -90 | Client > Client is the channel master | `<objet> : Client is the channel master` |  |  | — |  |
| 10 | -91 | Client > On name set request | `<objet> : On name set request` |  |  | — |  |
| 12 | -93 | Message > Sent > On text message to server | `<objet> : On text message to server on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 13 | -94 | Message > Sent > On number message to server | `<objet> : On number message to server on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 14 | -95 | Message > Sent > On binary message to server | `<objet> : On binary message to server on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 15 | -96 | Message > Sent > On any message to server | `<objet> : On any message to server on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 16 | -97 | Message > Sent > On text message to channel | `<objet> : On text message to channel on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 17 | -98 | Message > Sent > On number message to channel | `<objet> : On number message to channel on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 18 | -99 | Message > Sent > On binary message to channel | `<objet> : On binary message to channel on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 19 | -100 | Message > Sent > On any message to channel | `<objet> : On any message to channel on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 20 | -101 | Message > Sent > On text message to peer | `<objet> : On text message to peer on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 21 | -102 | Message > Sent > On number message to peer | `<objet> : On number message to peer on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 22 | -103 | Message > Sent > On binary message to peer | `<objet> : On binary message to peer on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 23 | -104 | Message > Sent > On any message to peer | `<objet> : On any message to peer on subchannel <p0>` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 24 | -105 | Message > Blasted > On text message to server | `<objet> : On text message to server on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 25 | -106 | Message > Blasted > On number message to server | `<objet> : On number message to server on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 26 | -107 | Message > Blasted > On binary message to server | `<objet> : On binary message to server on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 27 | -108 | Message > Blasted > On any message to server | `<objet> : On any message to server on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 28 | -109 | Message > Blasted > On text message to channel | `<objet> : On text message to channel on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 29 | -110 | Message > Blasted > On number message to channel | `<objet> : On number message to channel on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 30 | -111 | Message > Blasted > On binary message to channel | `<objet> : On binary message to channel on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 31 | -112 | Message > Blasted > On any message to channel | `<objet> : On any message to channel on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 32 | -113 | Message > Blasted > On text message to peer | `<objet> : On text message to peer on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 33 | -114 | Message > Blasted > On number message to peer | `<objet> : On number message to peer on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 34 | -115 | Message > Blasted > On binary message to peer | `<objet> : On binary message to peer on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 35 | -116 | Message > Blasted > On any message to peer | `<objet> : On any message to peer on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 36 | -117 | Channel > [With loop name] On all channels loop | `<objet> : On all channels loop <p0>` |  | expression chaîne « Loop name » | — |  |
| 37 | -118 | Channel > [With loop name] On client channels loop | `<objet> : On client channels loop <p0>` |  | expression chaîne « Loop name » | — |  |
| 38 | -119 | Client > [With loop name] On all clients loop | `<objet> : On all clients loop <p0>` |  | expression chaîne « Loop name » | — |  |
| 39 | -120 | Client > [With loop name] On channel clients loop | `<objet> : On channel clients loop <p0>` |  | expression chaîne « Loop name » | — |  |
| 40 | -121 | Client > [With loop name] On channel clients loop finished | `<objet> : On channel clients loop <p0> finished` |  | expression chaîne « Loop name » | — |  |
| 41 | -122 | Channel > [With loop name] On all channels loop finished | `<objet> : On all channels loop <p0> finished` |  | expression chaîne « Loop name » | — |  |
| 43 | -124 | Channel > [With loop name] On client channels loop finished | `<objet> : On client channels loop <p0> finished` |  | expression chaîne « Loop name » | — |  |
| 44 | -125 | Client > On channel clients loop finished | `<objet> : On channel clients loop finished` |  |  | — |  |
| 45 | -126 | Channel > On all channels loop finished | `<objet> : On all channels loop finished` |  |  | — |  |
| 46 | -127 | Client > On all clients loop finished | `<objet> : On all clients loop finished` |  |  | — |  |
| 47 | -128 | Channel > On client channels loop finished | `<objet> : On client channels loop finished` |  |  | — |  |
| 48 | -129 | Lacewing server is hosting | `<objet> : Server is hosting` |  |  | — |  |
| 49 | -130 | Flash Player policy server is hosting | `<objet> : Flash Player policy server is hosting` |  |  | — |  |
| 50 | -131 | Channel > Channel is hidden from the channel list | `<objet> : Channel is hidden from channel list` |  |  | — |  |
| 51 | -132 | Channel > Channel is set to close automatically | `<objet> : Channel is set to close automatically` |  |  | — |  |
| 52 | -133 | Client > [With loop name] On all clients loop finished | `<objet> : On all clients loop <p0> finished` |  | expression chaîne « Loop name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Relay Server > Host | `Host on port <p0>` |  | expression numérique « Port (default 6121) » | — |  |
| 1 | 81 | Relay Server > Stop hosting | `Stop hosting` |  |  | — |  |
| 2 | 82 | Set welcome message | `Set welcome message to <p0>` |  | expression chaîne « Welcome message » | — |  |
| 9 | 89 | Enable conditions > On message to channel | `Enable condition "On message to channel"` |  |  | — |  |
| 11 | 91 | Enable conditions > On message to peer | `Enable condition "On message to peer"` |  |  | — |  |
| 19 | 99 | On interactive condition > Deny (for on [..] request) | `Deny request` |  |  | — |  |
| 20 | 100 | On interactive condition > Change name (for name set/change request) | `Change requested name to <p0>` |  | expression chaîne « New name » | — |  |
| 21 | 101 | On interactive condition > Change channel name (for channel join request) | `Change requested channel name to <p0>` |  | expression chaîne « New name » | — |  |
| 25 | 105 | Channel > Close channel | `Close channel` |  |  | — |  |
| 26 | 106 | Channel > Select the channel master | `Select the channel master` |  |  | — |  |
| 27 | 107 | Channel > Select by name | `Select channel by name <p0>` |  | expression chaîne « Name » | — |  |
| 28 | 108 | Channel > Loop all channels | `Loop all channels` |  |  | — |  |
| 29 | 109 | Client > Disconnect | `Disconnect client` |  |  | — |  |
| 30 | 110 | Client > Loop client channels | `Loop client channels` |  |  | — |  |
| 31 | 111 | Client > Select by name | `Select client by name <p0>` |  | expression chaîne « Name » | — |  |
| 32 | 112 | Client > Select by ID | `Select client by ID <p0>` |  | expression numérique « ID » | — |  |
| 33 | 113 | Client > Loop all clients | `Loop all clients` |  |  | — |  |
| 34 | 114 | Send > Text > To client | `Send text <p1> to client on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to send » | — |  |
| 35 | 115 | Send > Text > To channel | `Send text <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to send » | — |  |
| 36 | 116 | Send > Number > To client | `Send number <p1> to client on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 37 | 117 | Send > Number > To channel | `Send number <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 38 | 118 | Send > Stack > To client | `Send binary to client on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » | — |  |
| 39 | 119 | Send > Stack > To channel | `Send binary to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » | — |  |
| 40 | 120 | Blast > Text > To client | `Blast text <p1> to client on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to send » | — |  |
| 41 | 121 | Blast > Text > To channel | `Blast text <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to send » | — |  |
| 42 | 122 | Blast > Number > To client | `Blast number <p1> to client on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 43 | 123 | Blast > Number > To channel | `Blast number <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 44 | 124 | Blast > Stack > To client | `Blast binary to client on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » | — |  |
| 45 | 125 | Blast > Stack > To channel | `Blast binary to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » | — |  |
| 46 | 126 | Binary to send > Add byte > ASCII character | `Add byte <p0>` |  | expression chaîne « Byte » | — |  |
| 47 | 127 | Binary to send > Add byte > Integer value | `Add byte <p0>` |  | expression numérique « Byte » | — |  |
| 48 | 128 | Binary to send > Add short | `Add short <p0>` |  | expression numérique « Short » | — |  |
| 49 | 129 | Binary to send > Add integer | `Add integer <p0>` |  | expression numérique « Integer » | — |  |
| 50 | 130 | Binary to send > Add float | `Add float <p0>` |  | expression numérique « Float » | — |  |
| 51 | 131 | Binary to send > Add string > Without null terminator | `Add string <p0> without null terminator` |  | expression chaîne « String » | — |  |
| 52 | 132 | Binary to send > Add string > With null terminator | `Add string <p0> with null terminator` |  | expression chaîne « String » | — |  |
| 53 | 133 | Binary to send > Add binary | `Add binary at address <p0> with size <p1>` |  | expression numérique « Address » ; expression numérique « Size » | — |  |
| 54 | 134 | Binary to send > Add file | `Add file <p0> onto the binary to send` |  | nom de fichier « File to push » | — |  |
| 55 | 135 | Binary to send > Compress (ZLIB) | `Compress send binary (ZLIB)` |  |  | — |  |
| 56 | 136 | Binary to send > Clear | `Clear binary to send` |  |  | — |  |
| 57 | 137 | Received binary > Save to a file | `Save received binary (position <p0> with size <p1>) to file <p2>` |  | expression numérique « Position » ; expression numérique « Size » ; expression chaîne « Filename » | — |  |
| 58 | 138 | Received binary > Append to a file | `Append received binary (position <p0> with size <p1>) to file <p2>` |  | expression numérique « Position » ; expression numérique « Size » ; expression chaîne « Filename » | — |  |
| 59 | 139 | Received binary > Uncompress (ZLIB) | `Uncompress received binary (ZLIB)` |  |  | — |  |
| 60 | 140 | Channel > Loop clients | `Loop clients on channel` |  |  | — |  |
| 61 | 141 | On interactive condition > Drop message (for on message to channel/peer) | `Drop message` |  |  | — |  |
| 62 | 142 | Client > Select sender (for "on message to peer") | `Select sender` |  |  | — |  |
| 63 | 143 | Client > Select receiver (for "on message to peer") | `Select receiver` |  |  | — |  |
| 64 | 144 | Channel > Loop all channels (with loop name) | `Loop all channels [Loop name: <p0>]` |  | expression chaîne « Loop name » | — |  |
| 65 | 145 | Client > Loop all clients (with loop name) | `Loop all clients [Loop name: <p0>]` |  | expression chaîne « Loop name » | — |  |
| 66 | 146 | Client > Loop client channels (with loop name) | `Loop client channels [Loop name: <p0>]` |  | expression chaîne « Loop name » | — |  |
| 68 | 148 | Flash Player Policy Server > Host | `Host Flash Player policy server from XML file <p0> on port 843` |  | nom de fichier « XML policy file » | — |  |
| 69 | 149 | Flash Player Policy Server > Stop hosting | `Stop hosting Flash Player policy server` |  |  | — |  |
| 70 | 150 | Client > Set local client data | `Set local client data at <p0> to <p1>` |  | expression chaîne « Key » ; expression chaîne « Value » | — |  |
| 71 | 151 | Received binary > Move cursor | `Move received binary cursor to <p0>` |  | expression numérique « Position » | — |  |
| 72 | 152 | Channel > Set local channel data | `Set local channel data at <p0> to <p1>` |  | expression chaîne « Key » ; expression chaîne « Value » | — |  |
| 73 | 153 | Binary to send > Resize | `Resize binary to send to <p0> bytes` |  | expression numérique « New size (in bytes) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Error string (for on error) | `Error$(` |  | → chaîne | — |  |
| 1 | 81 | Lacewing version string | `Version$(` |  | → chaîne | — |  |
| 2 | 82 | Binary to send size | `SendBinarySize(` |  |  | — |  |
| 3 | 83 | Requested name (for name set/change request) | `RequestedName$(` |  | → chaîne | — |  |
| 4 | 84 | Requested channel name (for channel join request) | `RequestedChannelName$(` |  | → chaîne | — |  |
| 5 | 85 | Channel > Name | `Channel_Name$(` |  | → chaîne | — |  |
| 6 | 86 | Channel > Client count | `Channel_ClientCount(` |  |  | — |  |
| 7 | 87 | Client > Name | `Client_Name$(` |  | → chaîne | — |  |
| 8 | 88 | Client > ID | `Client_ID(` |  |  | — |  |
| 9 | 89 | Client > IP address | `Client_IP$(` |  | → chaîne | — |  |
| 10 | 90 | Client > Connection time | `REMOVED_EXPRESSION(` |  |  | — |  |
| 11 | 91 | Client > Channel count | `Client_ChannelCount(` |  |  | — |  |
| 12 | 92 | Received > Get text | `Received$(` |  | → chaîne | — |  |
| 13 | 93 | Received > Get number | `Received(` |  |  | — |  |
| 14 | 94 | Received > Get binary size | `ReceivedBinarySize(` |  |  | — |  |
| 15 | 95 | Received > Get binary memory address | `ReceivedBinaryAddress(` |  |  | — |  |
| 16 | 96 | Received > Get binary data > Byte > ASCII character | `Byte$(` |  | nombre « Index » → chaîne | — |  |
| 17 | 97 | Received > Get binary data > Byte > Integer value > Unsigned | `Byte(` |  | nombre « Index » | — |  |
| 18 | 98 | Received > Get binary data > Byte > Integer value > Signed | `SignedByte(` |  | nombre « Index » | — |  |
| 19 | 99 | Received > Get binary data > Short > Unsigned | `Short(` |  | nombre « Index » | — |  |
| 20 | 100 | Received > Get binary data > Short > Signed | `SignedShort(` |  | nombre « Index » | — |  |
| 21 | 101 | Received > Get binary data > Integer > Unsigned | `Integer(` |  | nombre « Index » | — |  |
| 22 | 102 | Received > Get binary data > Integer > Signed | `SignedInteger(` |  | nombre « Index » | — |  |
| 23 | 103 | Received > Get binary data > Float | `Float(` |  | nombre « Index » | — |  |
| 24 | 104 | Received > Get binary data > String > With size | `StringWithSize$(` |  | nombre « Index » ; nombre « Size » → chaîne | — |  |
| 25 | 105 | Received > Get binary data > String > Null terminated | `String$(` |  | nombre « Index » → chaîne | — |  |
| 26 | 106 | Received > Get subchannel | `Subchannel(` |  |  | — |  |
| 27 | 107 | Channel > Number of channels on the server | `ChannelCount(` |  |  | — |  |
| 28 | 108 | Client > Get local client data | `Client_LocalData$(` |  | chaîne « Key » → chaîne | — |  |
| 29 | 109 | Received > Get binary data (with cursor) > Byte > ASCII character | `CursorByte$(` |  | → chaîne | — |  |
| 30 | 110 | Received > Get binary data (with cursor) > Byte > Integer value > Unsigned | `CursorByte(` |  |  | — |  |
| 31 | 111 | Received > Get binary data (with cursor) > Byte > Integer value > Signed | `CursorSignedByte(` |  |  | — |  |
| 32 | 112 | Received > Get binary data (with cursor) > Short > Unsigned | `CursorShort(` |  |  | — |  |
| 33 | 113 | Received > Get binary data (with cursor) > Short > Signed | `CursorSignedShort(` |  |  | — |  |
| 34 | 114 | Received > Get binary data (with cursor) > Integer > Unsigned | `CursorInteger(` |  |  | — |  |
| 35 | 115 | Received > Get binary data (with cursor) > Integer > Signed | `CursorSignedInteger(` |  |  | — |  |
| 36 | 116 | Received > Get binary data (with cursor) > Float | `CursorFloat(` |  |  | — |  |
| 37 | 117 | Received > Get binary data (with cursor) > String > With size | `CursorStringWithSize$(` |  | nombre « Size » → chaîne | — |  |
| 38 | 118 | Received > Get binary data (with cursor) > String > Null terminated | `CursorString$(` |  | → chaîne | — |  |
| 39 | 119 | Client > Get client protocol implementation | `REMOVED_EXPRESSION$(` |  | → chaîne | — |  |
| 40 | 120 | Channel > Get local channel data | `Channel_LocalData$(` |  | chaîne « Key » → chaîne | — |  |
| 41 | 121 | Port | `Port(` |  |  | — |  |
| 42 | 122 | Binary to send address | `SendBinaryAddress(` |  |  | — |  |
