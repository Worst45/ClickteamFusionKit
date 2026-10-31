# Extension OINC_Client

- Fichier : `OINC_Client.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<objet> : On error` |  |  | — |  |
| 1 | -82 | Connection > On connect | `<objet> : On connect` |  |  | — |  |
| 2 | -83 | Connection > On connection denied | `<objet> : On connection denied` |  |  | — |  |
| 3 | -84 | Connection > On disconnect | `<objet> : On disconnect` |  |  | — |  |
| 4 | -85 | Channel > On join | `<objet> : On channel join` |  |  | — |  |
| 5 | -86 | Channel > On join denied | `<objet> : On channel join denied` |  |  | — |  |
| 6 | -87 | Name > On name set | `<objet> : On name set` |  |  | — |  |
| 7 | -88 | Name > On name denied | `<objet> : On name denied` |  |  | — |  |
| 8 | -89 | Message > Sent > On text server message | `<objet> : On text server message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 9 | -90 | Message > Sent > On text channel message | `<objet> : On text channel message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 10 | -91 | Channel > Peers > On peer connect | `<objet> : On peer connect` |  |  | — |  |
| 11 | -92 | Channel > Peers > On peer disconnect | `<objet> : On peer disconnect` |  |  | — |  |
| 13 | -94 | Channel > Peers > On loop | `<objet> : On channel peer loop` |  |  | — |  |
| 14 | -95 | Channel > On joined channel loop | `<objet> : On joined channel loop` |  |  | — |  |
| 15 | -96 | Message > Sent > On number server message | `<objet> : On number server message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 16 | -97 | Message > Sent > On number channel message | `<objet> : On number channel message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 17 | -98 | Channel > Peers > On loop finished | `<objet> : On channel peer loop finished` |  |  | — |  |
| 18 | -99 | Channel > On joined channel loop finished | `<objet> : On joined channel loop finished` |  |  | — |  |
| 20 | -101 | Message > Blasted > On text server message | `<objet> : On text server message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 21 | -102 | Message > Blasted > On number server message | `<objet> : On number server message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 22 | -103 | Message > Blasted > On text channel message | `<objet> : On text channel message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 23 | -104 | Message > Blasted > On number channel message | `<objet> : On number channel message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 26 | -107 | Channel listing > On list received | `<objet> : On channel list received` |  |  | — |  |
| 27 | -108 | Channel listing > On loop | `<objet> : On channel list loop` |  |  | — |  |
| 28 | -109 | Channel listing > On loop finished | `<objet> : On channel list loop finished` |  |  | — |  |
| 29 | -110 | LAN enumeration > On device | `<objet> : On LAN device` |  |  | — |  |
| 30 | -111 | ICMP ping > On ping success | `<objet> : On ICMP ping success` |  |  | — |  |
| 31 | -112 | ICMP ping > On ping failure | `<objet> : On ICMP ping failure` |  |  | — |  |
| 32 | -113 | Message > Sent > On stack server message | `<objet> : On stack server message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 33 | -114 | Message > Sent > On stack channel message | `<objet> : On stack channel message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 34 | -115 | Message > Blasted > On stack server message | `<objet> : On stack server message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 35 | -116 | Message > Blasted > On stack channel message | `<objet> : On stack channel message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 36 | -117 | Message > Sent > On text peer message | `<objet> : On text peer message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 37 | -118 | Message > Sent > On number peer message | `<objet> : On number peer message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 38 | -119 | Message > Sent > On stack peer message | `<objet> : On stack peer message on subchannel <p0> (sent)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 39 | -120 | Message > Blasted > On text peer message | `<objet> : On text peer message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 40 | -121 | Message > Blasted > On number peer message | `<objet> : On number peer message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 41 | -122 | Message > Blasted > On stack peer message | `<objet> : On stack peer message on subchannel <p0> (blasted)` |  | expression numérique « Subchannel (-1 for any) » | — |  |
| 42 | -123 | Connection > Is connected | `<objet> : Is connected` |  |  | — |  |
| 43 | -124 | Channel > On leave | `<objet> : On channel leave` |  |  | — |  |
| 44 | -125 | Channel > On leave denied | `<objet> : On channel leave denied` |  |  | — |  |
| 45 | -126 | Channel > Peers > On peer changed name | `<objet> : On peer changed name` |  |  | — |  |
| 46 | -127 | HTTP GET > On HTTP GET complete | `<objet> : On HTTP GET complete` |  |  | — |  |
| 47 | -128 | Message > Sent > On any server message | `<objet> : On any server message (sent)` |  |  | — |  |
| 48 | -129 | Message > Sent > On any channel message | `<objet> : On any channel message (sent)` |  |  | — |  |
| 49 | -130 | Message > Sent > On any peer message | `<objet> : On any peer message (sent)` |  |  | — |  |
| 50 | -131 | Message > Blasted > On any server message | `<objet> : On any server message (blasted)` |  |  | — |  |
| 51 | -132 | Message > Blasted > On any channel message | `<objet> : On any channel message (blasted)` |  |  | — |  |
| 52 | -133 | Message > Blasted > On any peer message | `<objet> : On any peer message (blasted)` |  |  | — |  |
| 53 | -134 | Name > On name changed | `<objet> : On name changed` |  |  | — |  |
| 54 | -135 | Name > Client has a name | `<objet> : Client has a name` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connect | `Connect to <p0> on port <p1>` |  | expression chaîne « Host » ; expression numérique « Port (default 6121) » | — |  |
| 1 | 81 | Disconnect | `Disconnect` |  |  | — |  |
| 2 | 82 | Set name | `Set name to <p0>` |  | expression chaîne « Name » | — |  |
| 3 | 83 | Channel > Join | `Join channel <p0> (hidden: <p1>)` |  | expression chaîne « Channel name » ; expression numérique « Hide channel from list if creating? (0 = no, 1 = yes) » | — |  |
| 4 | 84 | Channel > Leave | `Leave channel` |  |  | — |  |
| 5 | 85 | Send > Text > To server | `Send text <p1> to server on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to send » | — |  |
| 6 | 86 | Send > Text > To channel | `Send text <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to send » | — |  |
| 7 | 87 | Send > Text > To peer | `Send text <p1> to peer on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to send » | — |  |
| 8 | 88 | Send > Number > To server | `Send number <p1> to server on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 9 | 89 | Send > Number > To channel | `Send number <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 10 | 90 | Send > Number > To peer | `Send number <p1> to peer on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 11 | 91 | Blast > Text > To server | `Blast text <p1> to server on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to blast » | — |  |
| 12 | 92 | Blast > Text > To channel | `Blast text <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to blast » | — |  |
| 13 | 93 | Blast > Text > To peer | `Blast text <p1> to peer on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression chaîne « Text to blast » | — |  |
| 14 | 94 | Blast > Number > To server | `Blast number <p1> to server on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to blast » | — |  |
| 15 | 95 | Blast > Number > To channel | `Blast number <p1> to channel on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 16 | 96 | Blast > Number > To peer | `Blast number <p1> to peer on subchannel <p0>` |  | expression numérique « Subchannel (0-255) » ; expression numérique « Number to send » | — |  |
| 17 | 97 | Channel > Select > By name | `Select channel by name <p0>` |  | expression chaîne « Name » | — |  |
| 19 | 99 | Channel > Select > Loop | `Loop channels` |  |  | — |  |
| 20 | 100 | Channel > Peer > Select > By name | `Select peer by name <p0>` |  | expression chaîne « Name » | — |  |
| 21 | 101 | Channel > Peer > Select > By ID | `Select peer by ID <p0>` |  | expression numérique « ID » | — |  |
| 22 | 102 | Channel > Peer > Select > Loop | `Loop peers` |  |  | — |  |
| 30 | 110 | Channel listing > Request list | `Request channel list` |  |  | — |  |
| 31 | 111 | Channel listing > Loop listed channels | `Loop listed channels` |  |  | — |  |
| 32 | 112 | Network tools > LAN enumeration > Enumerate devices | `Enumerate LAN devices` |  |  | — |  |
| 33 | 113 | Network tools > ICMP ping > Ping host | `Ping host <p0> <p1> times with a timeout of <p2> ms` |  | expression chaîne « Host » ; expression numérique « Number of times to ping host » ; expression numérique « Timeout (ms) » | — |  |
| 35 | 115 | Send > Stack > To server | `Send stack to server on subchannel <p0>` |  | expression numérique « Subchannel » | — |  |
| 36 | 116 | Send > Stack > To channel | `Send stack to channel on subchannel <p0>` |  | expression numérique « Subchannel » | — |  |
| 37 | 117 | Send > Stack > To peer | `Send stack to peer on subchannel <p0>` |  | expression numérique « Subchannel » | — |  |
| 38 | 118 | Blast > Stack > To server | `Blast stack to server on subchannel <p0>` |  | expression numérique « Subchannel » | — |  |
| 39 | 119 | Blast > Stack > To channel | `Blast stack to channel on subchannel <p0>` |  | expression numérique « Subchannel » | — |  |
| 40 | 120 | Blast > Stack > To peer | `Blast stack to peer on subchannel <p0>` |  | expression numérique « Subchannel » | — |  |
| 41 | 121 | Stack > Push byte > ASCII character | `Push byte <p0>` |  | expression chaîne « Byte » | — |  |
| 42 | 122 | Stack > Push byte > Integer value | `Push byte <p0>` |  | expression numérique « Byte » | — |  |
| 43 | 123 | Stack > Push short | `Push short <p0>` |  | expression numérique « Short » | — |  |
| 44 | 124 | Stack > Push integer | `Push integer <p0>` |  | expression numérique « Integer » | — |  |
| 45 | 125 | Stack > Push float | `Push float <p0>` |  | expression numérique « Float » | — |  |
| 46 | 126 | Stack > Push string > Without null terminator | `Push string <p0> without null terminator` |  | expression chaîne « String » | — |  |
| 47 | 127 | Stack > Push string > With null terminator | `Push string <p0> with null terminator` |  | expression chaîne « String » | — |  |
| 48 | 128 | Stack > Push binary | `Push binary at address <p0> with size <p1>` |  | expression numérique « Address » ; expression numérique « Size » | — |  |
| 49 | 129 | Stack > Clear | `Clear stack` |  |  | — |  |
| 50 | 130 | Save received stack to file | `Save received stack (position <p0> with size <p1>) to file <p2>` |  | expression numérique « Position » ; expression numérique « Size » ; expression chaîne « Filename » | — |  |
| 51 | 131 | Append received stack to file | `Append received stack (position <p0> with size <p1>) to file <p2>` |  | expression numérique « Position » ; expression numérique « Size » ; expression chaîne « Filename » | — |  |
| 52 | 132 | Stack > Push file | `Push file <p0> onto the stack` |  | nom de fichier « File to push » | — |  |
| 54 | 134 | Network tools > HTTP GET > Get URL | `Request URL <p0> via HTTP GET` |  | expression chaîne « URL » | — |  |
| 61 | 141 | OINC server > Start (with OINC.Server file) | `Start OINC server with server file <p0> and configuration file <p1>` |  | nom de fichier « Server file (OINC.Server) » ; nom de fichier « Configuration file (OINC_Server.ini) » | — |  |
| 62 | 142 | OINC server > Stop | `Stop OINC server` |  |  | — |  |
| 63 | 143 | OINC server > Reload configuration file | `Reload OINC server configuration` |  |  | — |  |
| 64 | 144 | Send > File > To server | `Send file <p1> to server on subchannel <p0>` |  | expression numérique « Subchannel » ; nom de fichier « File » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last error | `LastError$(` |  | → chaîne | — |  |
| 1 | 81 | Last error detail | `LastErrorDetail$(` |  | → chaîne | — |  |
| 2 | 82 | Self > Name | `Self_Name$(` |  | → chaîne | — |  |
| 3 | 83 | Self > Number of channels | `Self_ChannelCount$(` |  |  | — |  |
| 4 | 84 | Peer > Name | `Peer_Name$(` |  | → chaîne | — |  |
| 5 | 85 | Received > Get text | `Received$(` |  | → chaîne | — |  |
| 6 | 86 | Received > Get number | `Received(` |  |  | — |  |
| 7 | 87 | Received > Get subchannel | `Subchannel(` |  |  | — |  |
| 8 | 88 | Peer > ID | `Peer_ID(` |  |  | — |  |
| 9 | 89 | Channel > Name | `Channel_Name$(` |  | → chaîne | — |  |
| 10 | 90 | Channel > Number of peers | `Channel_PeerCount(` |  |  | — |  |
| 12 | 92 | Channel listing > Get name | `ChannelListing_Name$(` |  | → chaîne | — |  |
| 13 | 93 | Channel listing > Get peer count | `ChannelListing_PeerCount(` |  |  | — |  |
| 14 | 94 | Self > ID | `Self_ID(` |  |  | — |  |
| 15 | 95 | LAN enumeration > Device hostname | `LANDeviceHostname$(` |  | → chaîne | — |  |
| 16 | 96 | LAN enumeration > Device IP address | `LANDeviceIPAddress$(` |  | → chaîne | — |  |
| 17 | 97 | ICMP ping > Round-trip time | `PingRoundTripTime(` |  |  | — |  |
| 18 | 98 | ICMP ping > Time to live | `PingTimeToLive(` |  |  | — |  |
| 19 | 99 | ICMP ping > Requests left | `PingRequestsLeft(` |  |  | — |  |
| 20 | 100 | Received > Get stack data > Byte > ASCII character | `Byte$(` |  | nombre « Index » → chaîne | — |  |
| 21 | 101 | Received > Get stack data > Byte > Integer value > Unsigned | `Byte(` |  | nombre « Index » | — |  |
| 22 | 102 | Received > Get stack data > Byte > Integer value > Signed | `SignedByte(` |  | nombre « Index » | — |  |
| 23 | 103 | Received > Get stack data > Short > Unsigned | `Short(` |  | nombre « Index » | — |  |
| 24 | 104 | Received > Get stack data > Short > Signed | `SignedShort(` |  | nombre « Index » | — |  |
| 25 | 105 | Received > Get stack data > Integer > Unsigned | `Integer(` |  | nombre « Index » | — |  |
| 26 | 106 | Received > Get stack data > Integer > Signed | `SignedInteger(` |  | nombre « Index » | — |  |
| 27 | 107 | Received > Get stack data > Float | `Float(` |  | nombre « Index » | — |  |
| 28 | 108 | Received > Get stack data > String > With size | `StringWithSize$(` |  | nombre « Index » ; nombre « Size » → chaîne | — |  |
| 29 | 109 | Received > Get stack data > String > Null terminated | `String$(` |  | nombre « Index » → chaîne | — |  |
| 30 | 110 | Received > Get stack data > Size | `StackSize(` |  |  | — |  |
| 31 | 111 | OINC version string | `Version$(` |  | → chaîne | — |  |
| 32 | 112 | Send stack size | `SendStackSize(` |  |  | — |  |
| 33 | 113 | Self > Previous name (for "On name changed") | `Self_PreviousName$(` |  | → chaîne | — |  |
| 34 | 114 | Peer > Previous name (for "On peer name changed") | `Peer_PreviousName$(` |  | → chaîne | — |  |
| 35 | 115 | Self > Connection time | `Self_ConnectionTime(` |  |  | — |  |
| 36 | 116 | HTTP GET > Page content | `HTTP_PageContent$(` |  | → chaîne | — |  |
| 37 | 117 | Deny reason (for on [..] denied) | `DenyReason$(` |  | → chaîne | — |  |
| 38 | 118 | Connection > Host IP address | `ServerIP$(` |  | → chaîne | — |  |
| 39 | 119 | Connection > Host port | `ServerPort(` |  |  | — |  |
| 40 | 120 | OINC server > Get version | `ServerFileVersion$(` |  | → chaîne | — |  |
