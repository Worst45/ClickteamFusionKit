# Extension OINC_Client

- File: `OINC_Client.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<object> : On error` |  |  | — |  |
| 1 | -82 | Connection > On connect | `<object> : On connect` |  |  | — |  |
| 2 | -83 | Connection > On connection denied | `<object> : On connection denied` |  |  | — |  |
| 3 | -84 | Connection > On disconnect | `<object> : On disconnect` |  |  | — |  |
| 4 | -85 | Channel > On join | `<object> : On channel join` |  |  | — |  |
| 5 | -86 | Channel > On join denied | `<object> : On channel join denied` |  |  | — |  |
| 6 | -87 | Name > On name set | `<object> : On name set` |  |  | — |  |
| 7 | -88 | Name > On name denied | `<object> : On name denied` |  |  | — |  |
| 8 | -89 | Message > Sent > On text server message | `<object> : On text server message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 9 | -90 | Message > Sent > On text channel message | `<object> : On text channel message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 10 | -91 | Channel > Peers > On peer connect | `<object> : On peer connect` |  |  | — |  |
| 11 | -92 | Channel > Peers > On peer disconnect | `<object> : On peer disconnect` |  |  | — |  |
| 13 | -94 | Channel > Peers > On loop | `<object> : On channel peer loop` |  |  | — |  |
| 14 | -95 | Channel > On joined channel loop | `<object> : On joined channel loop` |  |  | — |  |
| 15 | -96 | Message > Sent > On number server message | `<object> : On number server message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 16 | -97 | Message > Sent > On number channel message | `<object> : On number channel message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 17 | -98 | Channel > Peers > On loop finished | `<object> : On channel peer loop finished` |  |  | — |  |
| 18 | -99 | Channel > On joined channel loop finished | `<object> : On joined channel loop finished` |  |  | — |  |
| 20 | -101 | Message > Blasted > On text server message | `<object> : On text server message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 21 | -102 | Message > Blasted > On number server message | `<object> : On number server message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 22 | -103 | Message > Blasted > On text channel message | `<object> : On text channel message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 23 | -104 | Message > Blasted > On number channel message | `<object> : On number channel message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 26 | -107 | Channel listing > On list received | `<object> : On channel list received` |  |  | — |  |
| 27 | -108 | Channel listing > On loop | `<object> : On channel list loop` |  |  | — |  |
| 28 | -109 | Channel listing > On loop finished | `<object> : On channel list loop finished` |  |  | — |  |
| 29 | -110 | LAN enumeration > On device | `<object> : On LAN device` |  |  | — |  |
| 30 | -111 | ICMP ping > On ping success | `<object> : On ICMP ping success` |  |  | — |  |
| 31 | -112 | ICMP ping > On ping failure | `<object> : On ICMP ping failure` |  |  | — |  |
| 32 | -113 | Message > Sent > On stack server message | `<object> : On stack server message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 33 | -114 | Message > Sent > On stack channel message | `<object> : On stack channel message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 34 | -115 | Message > Blasted > On stack server message | `<object> : On stack server message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 35 | -116 | Message > Blasted > On stack channel message | `<object> : On stack channel message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 36 | -117 | Message > Sent > On text peer message | `<object> : On text peer message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 37 | -118 | Message > Sent > On number peer message | `<object> : On number peer message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 38 | -119 | Message > Sent > On stack peer message | `<object> : On stack peer message on subchannel <p0> (sent)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 39 | -120 | Message > Blasted > On text peer message | `<object> : On text peer message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 40 | -121 | Message > Blasted > On number peer message | `<object> : On number peer message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 41 | -122 | Message > Blasted > On stack peer message | `<object> : On stack peer message on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” | — |  |
| 42 | -123 | Connection > Is connected | `<object> : Is connected` |  |  | — |  |
| 43 | -124 | Channel > On leave | `<object> : On channel leave` |  |  | — |  |
| 44 | -125 | Channel > On leave denied | `<object> : On channel leave denied` |  |  | — |  |
| 45 | -126 | Channel > Peers > On peer changed name | `<object> : On peer changed name` |  |  | — |  |
| 46 | -127 | HTTP GET > On HTTP GET complete | `<object> : On HTTP GET complete` |  |  | — |  |
| 47 | -128 | Message > Sent > On any server message | `<object> : On any server message (sent)` |  |  | — |  |
| 48 | -129 | Message > Sent > On any channel message | `<object> : On any channel message (sent)` |  |  | — |  |
| 49 | -130 | Message > Sent > On any peer message | `<object> : On any peer message (sent)` |  |  | — |  |
| 50 | -131 | Message > Blasted > On any server message | `<object> : On any server message (blasted)` |  |  | — |  |
| 51 | -132 | Message > Blasted > On any channel message | `<object> : On any channel message (blasted)` |  |  | — |  |
| 52 | -133 | Message > Blasted > On any peer message | `<object> : On any peer message (blasted)` |  |  | — |  |
| 53 | -134 | Name > On name changed | `<object> : On name changed` |  |  | — |  |
| 54 | -135 | Name > Client has a name | `<object> : Client has a name` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connect | `Connect to <p0> on port <p1>` |  | string expression “Host”; numeric expression “Port (default 6121)” | — |  |
| 1 | 81 | Disconnect | `Disconnect` |  |  | — |  |
| 2 | 82 | Set name | `Set name to <p0>` |  | string expression “Name” | — |  |
| 3 | 83 | Channel > Join | `Join channel <p0> (hidden: <p1>)` |  | string expression “Channel name”; numeric expression “Hide channel from list if creating? (0 = no, 1 = yes)” | — |  |
| 4 | 84 | Channel > Leave | `Leave channel` |  |  | — |  |
| 5 | 85 | Send > Text > To server | `Send text <p1> to server on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to send” | — |  |
| 6 | 86 | Send > Text > To channel | `Send text <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to send” | — |  |
| 7 | 87 | Send > Text > To peer | `Send text <p1> to peer on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to send” | — |  |
| 8 | 88 | Send > Number > To server | `Send number <p1> to server on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” | — |  |
| 9 | 89 | Send > Number > To channel | `Send number <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” | — |  |
| 10 | 90 | Send > Number > To peer | `Send number <p1> to peer on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” | — |  |
| 11 | 91 | Blast > Text > To server | `Blast text <p1> to server on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to blast” | — |  |
| 12 | 92 | Blast > Text > To channel | `Blast text <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to blast” | — |  |
| 13 | 93 | Blast > Text > To peer | `Blast text <p1> to peer on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to blast” | — |  |
| 14 | 94 | Blast > Number > To server | `Blast number <p1> to server on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to blast” | — |  |
| 15 | 95 | Blast > Number > To channel | `Blast number <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” | — |  |
| 16 | 96 | Blast > Number > To peer | `Blast number <p1> to peer on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” | — |  |
| 17 | 97 | Channel > Select > By name | `Select channel by name <p0>` |  | string expression “Name” | — |  |
| 19 | 99 | Channel > Select > Loop | `Loop channels` |  |  | — |  |
| 20 | 100 | Channel > Peer > Select > By name | `Select peer by name <p0>` |  | string expression “Name” | — |  |
| 21 | 101 | Channel > Peer > Select > By ID | `Select peer by ID <p0>` |  | numeric expression “ID” | — |  |
| 22 | 102 | Channel > Peer > Select > Loop | `Loop peers` |  |  | — |  |
| 30 | 110 | Channel listing > Request list | `Request channel list` |  |  | — |  |
| 31 | 111 | Channel listing > Loop listed channels | `Loop listed channels` |  |  | — |  |
| 32 | 112 | Network tools > LAN enumeration > Enumerate devices | `Enumerate LAN devices` |  |  | — |  |
| 33 | 113 | Network tools > ICMP ping > Ping host | `Ping host <p0> <p1> times with a timeout of <p2> ms` |  | string expression “Host”; numeric expression “Number of times to ping host”; numeric expression “Timeout (ms)” | — |  |
| 35 | 115 | Send > Stack > To server | `Send stack to server on subchannel <p0>` |  | numeric expression “Subchannel” | — |  |
| 36 | 116 | Send > Stack > To channel | `Send stack to channel on subchannel <p0>` |  | numeric expression “Subchannel” | — |  |
| 37 | 117 | Send > Stack > To peer | `Send stack to peer on subchannel <p0>` |  | numeric expression “Subchannel” | — |  |
| 38 | 118 | Blast > Stack > To server | `Blast stack to server on subchannel <p0>` |  | numeric expression “Subchannel” | — |  |
| 39 | 119 | Blast > Stack > To channel | `Blast stack to channel on subchannel <p0>` |  | numeric expression “Subchannel” | — |  |
| 40 | 120 | Blast > Stack > To peer | `Blast stack to peer on subchannel <p0>` |  | numeric expression “Subchannel” | — |  |
| 41 | 121 | Stack > Push byte > ASCII character | `Push byte <p0>` |  | string expression “Byte” | — |  |
| 42 | 122 | Stack > Push byte > Integer value | `Push byte <p0>` |  | numeric expression “Byte” | — |  |
| 43 | 123 | Stack > Push short | `Push short <p0>` |  | numeric expression “Short” | — |  |
| 44 | 124 | Stack > Push integer | `Push integer <p0>` |  | numeric expression “Integer” | — |  |
| 45 | 125 | Stack > Push float | `Push float <p0>` |  | numeric expression “Float” | — |  |
| 46 | 126 | Stack > Push string > Without null terminator | `Push string <p0> without null terminator` |  | string expression “String” | — |  |
| 47 | 127 | Stack > Push string > With null terminator | `Push string <p0> with null terminator` |  | string expression “String” | — |  |
| 48 | 128 | Stack > Push binary | `Push binary at address <p0> with size <p1>` |  | numeric expression “Address”; numeric expression “Size” | — |  |
| 49 | 129 | Stack > Clear | `Clear stack` |  |  | — |  |
| 50 | 130 | Save received stack to file | `Save received stack (position <p0> with size <p1>) to file <p2>` |  | numeric expression “Position”; numeric expression “Size”; string expression “Filename” | — |  |
| 51 | 131 | Append received stack to file | `Append received stack (position <p0> with size <p1>) to file <p2>` |  | numeric expression “Position”; numeric expression “Size”; string expression “Filename” | — |  |
| 52 | 132 | Stack > Push file | `Push file <p0> onto the stack` |  | file name “File to push” | — |  |
| 54 | 134 | Network tools > HTTP GET > Get URL | `Request URL <p0> via HTTP GET` |  | string expression “URL” | — |  |
| 61 | 141 | OINC server > Start (with OINC.Server file) | `Start OINC server with server file <p0> and configuration file <p1>` |  | file name “Server file (OINC.Server)”; file name “Configuration file (OINC_Server.ini)” | — |  |
| 62 | 142 | OINC server > Stop | `Stop OINC server` |  |  | — |  |
| 63 | 143 | OINC server > Reload configuration file | `Reload OINC server configuration` |  |  | — |  |
| 64 | 144 | Send > File > To server | `Send file <p1> to server on subchannel <p0>` |  | numeric expression “Subchannel”; file name “File” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last error | `LastError$(` |  | → string | — |  |
| 1 | 81 | Last error detail | `LastErrorDetail$(` |  | → string | — |  |
| 2 | 82 | Self > Name | `Self_Name$(` |  | → string | — |  |
| 3 | 83 | Self > Number of channels | `Self_ChannelCount$(` |  |  | — |  |
| 4 | 84 | Peer > Name | `Peer_Name$(` |  | → string | — |  |
| 5 | 85 | Received > Get text | `Received$(` |  | → string | — |  |
| 6 | 86 | Received > Get number | `Received(` |  |  | — |  |
| 7 | 87 | Received > Get subchannel | `Subchannel(` |  |  | — |  |
| 8 | 88 | Peer > ID | `Peer_ID(` |  |  | — |  |
| 9 | 89 | Channel > Name | `Channel_Name$(` |  | → string | — |  |
| 10 | 90 | Channel > Number of peers | `Channel_PeerCount(` |  |  | — |  |
| 12 | 92 | Channel listing > Get name | `ChannelListing_Name$(` |  | → string | — |  |
| 13 | 93 | Channel listing > Get peer count | `ChannelListing_PeerCount(` |  |  | — |  |
| 14 | 94 | Self > ID | `Self_ID(` |  |  | — |  |
| 15 | 95 | LAN enumeration > Device hostname | `LANDeviceHostname$(` |  | → string | — |  |
| 16 | 96 | LAN enumeration > Device IP address | `LANDeviceIPAddress$(` |  | → string | — |  |
| 17 | 97 | ICMP ping > Round-trip time | `PingRoundTripTime(` |  |  | — |  |
| 18 | 98 | ICMP ping > Time to live | `PingTimeToLive(` |  |  | — |  |
| 19 | 99 | ICMP ping > Requests left | `PingRequestsLeft(` |  |  | — |  |
| 20 | 100 | Received > Get stack data > Byte > ASCII character | `Byte$(` |  | number “Index” → string | — |  |
| 21 | 101 | Received > Get stack data > Byte > Integer value > Unsigned | `Byte(` |  | number “Index” | — |  |
| 22 | 102 | Received > Get stack data > Byte > Integer value > Signed | `SignedByte(` |  | number “Index” | — |  |
| 23 | 103 | Received > Get stack data > Short > Unsigned | `Short(` |  | number “Index” | — |  |
| 24 | 104 | Received > Get stack data > Short > Signed | `SignedShort(` |  | number “Index” | — |  |
| 25 | 105 | Received > Get stack data > Integer > Unsigned | `Integer(` |  | number “Index” | — |  |
| 26 | 106 | Received > Get stack data > Integer > Signed | `SignedInteger(` |  | number “Index” | — |  |
| 27 | 107 | Received > Get stack data > Float | `Float(` |  | number “Index” | — |  |
| 28 | 108 | Received > Get stack data > String > With size | `StringWithSize$(` |  | number “Index”; number “Size” → string | — |  |
| 29 | 109 | Received > Get stack data > String > Null terminated | `String$(` |  | number “Index” → string | — |  |
| 30 | 110 | Received > Get stack data > Size | `StackSize(` |  |  | — |  |
| 31 | 111 | OINC version string | `Version$(` |  | → string | — |  |
| 32 | 112 | Send stack size | `SendStackSize(` |  |  | — |  |
| 33 | 113 | Self > Previous name (for "On name changed") | `Self_PreviousName$(` |  | → string | — |  |
| 34 | 114 | Peer > Previous name (for "On peer name changed") | `Peer_PreviousName$(` |  | → string | — |  |
| 35 | 115 | Self > Connection time | `Self_ConnectionTime(` |  |  | — |  |
| 36 | 116 | HTTP GET > Page content | `HTTP_PageContent$(` |  | → string | — |  |
| 37 | 117 | Deny reason (for on [..] denied) | `DenyReason$(` |  | → string | — |  |
| 38 | 118 | Connection > Host IP address | `ServerIP$(` |  | → string | — |  |
| 39 | 119 | Connection > Host port | `ServerPort(` |  |  | — |  |
| 40 | 120 | OINC server > Get version | `ServerFileVersion$(` |  | → string | — |  |
