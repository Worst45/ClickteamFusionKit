# Extension LacewingServer

- File: `LacewingServer.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On error | `<object> : On error` |  |  |
| 1 | -82 | Connection > On connect request | `<object> : On connect request` |  |  |
| 2 | -83 | Connection > On disconnect | `<object> : On disconnect` |  |  |
| 3 | -84 | Channel > On join request | `<object> : On join request` |  |  |
| 4 | -85 | Channel > On leave request | `<object> : On leave request` |  |  |
| 5 | -86 | Channel > On all channels loop | `<object> : On all channels loop` |  |  |
| 6 | -87 | Channel > On client channels loop | `<object> : On client channels loop` |  |  |
| 7 | -88 | Client > On all clients loop | `<object> : On all clients loop` |  |  |
| 8 | -89 | Client > On channel clients loop | `<object> : On channel clients loop` |  |  |
| 9 | -90 | Client > Client is the channel master | `<object> : Client is the channel master` |  |  |
| 10 | -91 | Client > On name set request | `<object> : On name set request` |  |  |
| 12 | -93 | Message > Sent > On text message to server | `<object> : On text message to server on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 13 | -94 | Message > Sent > On number message to server | `<object> : On number message to server on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 14 | -95 | Message > Sent > On binary message to server | `<object> : On binary message to server on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 15 | -96 | Message > Sent > On any message to server | `<object> : On any message to server on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 16 | -97 | Message > Sent > On text message to channel | `<object> : On text message to channel on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 17 | -98 | Message > Sent > On number message to channel | `<object> : On number message to channel on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 18 | -99 | Message > Sent > On binary message to channel | `<object> : On binary message to channel on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 19 | -100 | Message > Sent > On any message to channel | `<object> : On any message to channel on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 20 | -101 | Message > Sent > On text message to peer | `<object> : On text message to peer on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 21 | -102 | Message > Sent > On number message to peer | `<object> : On number message to peer on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 22 | -103 | Message > Sent > On binary message to peer | `<object> : On binary message to peer on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 23 | -104 | Message > Sent > On any message to peer | `<object> : On any message to peer on subchannel <p0>` |  | numeric expression “Subchannel (-1 for any)” |
| 24 | -105 | Message > Blasted > On text message to server | `<object> : On text message to server on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 25 | -106 | Message > Blasted > On number message to server | `<object> : On number message to server on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 26 | -107 | Message > Blasted > On binary message to server | `<object> : On binary message to server on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 27 | -108 | Message > Blasted > On any message to server | `<object> : On any message to server on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 28 | -109 | Message > Blasted > On text message to channel | `<object> : On text message to channel on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 29 | -110 | Message > Blasted > On number message to channel | `<object> : On number message to channel on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 30 | -111 | Message > Blasted > On binary message to channel | `<object> : On binary message to channel on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 31 | -112 | Message > Blasted > On any message to channel | `<object> : On any message to channel on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 32 | -113 | Message > Blasted > On text message to peer | `<object> : On text message to peer on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 33 | -114 | Message > Blasted > On number message to peer | `<object> : On number message to peer on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 34 | -115 | Message > Blasted > On binary message to peer | `<object> : On binary message to peer on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 35 | -116 | Message > Blasted > On any message to peer | `<object> : On any message to peer on subchannel <p0> (blasted)` |  | numeric expression “Subchannel (-1 for any)” |
| 36 | -117 | Channel > [With loop name] On all channels loop | `<object> : On all channels loop <p0>` |  | string expression “Loop name” |
| 37 | -118 | Channel > [With loop name] On client channels loop | `<object> : On client channels loop <p0>` |  | string expression “Loop name” |
| 38 | -119 | Client > [With loop name] On all clients loop | `<object> : On all clients loop <p0>` |  | string expression “Loop name” |
| 39 | -120 | Client > [With loop name] On channel clients loop | `<object> : On channel clients loop <p0>` |  | string expression “Loop name” |
| 40 | -121 | Client > [With loop name] On channel clients loop finished | `<object> : On channel clients loop <p0> finished` |  | string expression “Loop name” |
| 41 | -122 | Channel > [With loop name] On all channels loop finished | `<object> : On all channels loop <p0> finished` |  | string expression “Loop name” |
| 43 | -124 | Channel > [With loop name] On client channels loop finished | `<object> : On client channels loop <p0> finished` |  | string expression “Loop name” |
| 44 | -125 | Client > On channel clients loop finished | `<object> : On channel clients loop finished` |  |  |
| 45 | -126 | Channel > On all channels loop finished | `<object> : On all channels loop finished` |  |  |
| 46 | -127 | Client > On all clients loop finished | `<object> : On all clients loop finished` |  |  |
| 47 | -128 | Channel > On client channels loop finished | `<object> : On client channels loop finished` |  |  |
| 48 | -129 | Lacewing server is hosting | `<object> : Server is hosting` |  |  |
| 49 | -130 | Flash Player policy server is hosting | `<object> : Flash Player policy server is hosting` |  |  |
| 50 | -131 | Channel > Channel is hidden from the channel list | `<object> : Channel is hidden from channel list` |  |  |
| 51 | -132 | Channel > Channel is set to close automatically | `<object> : Channel is set to close automatically` |  |  |
| 52 | -133 | Client > [With loop name] On all clients loop finished | `<object> : On all clients loop <p0> finished` |  | string expression “Loop name” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Relay Server > Host | `Host on port <p0>` |  | numeric expression “Port (default 6121)” |
| 1 | 81 | Relay Server > Stop hosting | `Stop hosting` |  |  |
| 2 | 82 | Set welcome message | `Set welcome message to <p0>` |  | string expression “Welcome message” |
| 9 | 89 | Enable conditions > On message to channel | `Enable condition "On message to channel"` |  |  |
| 11 | 91 | Enable conditions > On message to peer | `Enable condition "On message to peer"` |  |  |
| 19 | 99 | On interactive condition > Deny (for on [..] request) | `Deny request` |  |  |
| 20 | 100 | On interactive condition > Change name (for name set/change request) | `Change requested name to <p0>` |  | string expression “New name” |
| 21 | 101 | On interactive condition > Change channel name (for channel join request) | `Change requested channel name to <p0>` |  | string expression “New name” |
| 25 | 105 | Channel > Close channel | `Close channel` |  |  |
| 26 | 106 | Channel > Select the channel master | `Select the channel master` |  |  |
| 27 | 107 | Channel > Select by name | `Select channel by name <p0>` |  | string expression “Name” |
| 28 | 108 | Channel > Loop all channels | `Loop all channels` |  |  |
| 29 | 109 | Client > Disconnect | `Disconnect client` |  |  |
| 30 | 110 | Client > Loop client channels | `Loop client channels` |  |  |
| 31 | 111 | Client > Select by name | `Select client by name <p0>` |  | string expression “Name” |
| 32 | 112 | Client > Select by ID | `Select client by ID <p0>` |  | numeric expression “ID” |
| 33 | 113 | Client > Loop all clients | `Loop all clients` |  |  |
| 34 | 114 | Send > Text > To client | `Send text <p1> to client on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to send” |
| 35 | 115 | Send > Text > To channel | `Send text <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to send” |
| 36 | 116 | Send > Number > To client | `Send number <p1> to client on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” |
| 37 | 117 | Send > Number > To channel | `Send number <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” |
| 38 | 118 | Send > Stack > To client | `Send binary to client on subchannel <p0>` |  | numeric expression “Subchannel (0-255)” |
| 39 | 119 | Send > Stack > To channel | `Send binary to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)” |
| 40 | 120 | Blast > Text > To client | `Blast text <p1> to client on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to send” |
| 41 | 121 | Blast > Text > To channel | `Blast text <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; string expression “Text to send” |
| 42 | 122 | Blast > Number > To client | `Blast number <p1> to client on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” |
| 43 | 123 | Blast > Number > To channel | `Blast number <p1> to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)”; numeric expression “Number to send” |
| 44 | 124 | Blast > Stack > To client | `Blast binary to client on subchannel <p0>` |  | numeric expression “Subchannel (0-255)” |
| 45 | 125 | Blast > Stack > To channel | `Blast binary to channel on subchannel <p0>` |  | numeric expression “Subchannel (0-255)” |
| 46 | 126 | Binary to send > Add byte > ASCII character | `Add byte <p0>` |  | string expression “Byte” |
| 47 | 127 | Binary to send > Add byte > Integer value | `Add byte <p0>` |  | numeric expression “Byte” |
| 48 | 128 | Binary to send > Add short | `Add short <p0>` |  | numeric expression “Short” |
| 49 | 129 | Binary to send > Add integer | `Add integer <p0>` |  | numeric expression “Integer” |
| 50 | 130 | Binary to send > Add float | `Add float <p0>` |  | numeric expression “Float” |
| 51 | 131 | Binary to send > Add string > Without null terminator | `Add string <p0> without null terminator` |  | string expression “String” |
| 52 | 132 | Binary to send > Add string > With null terminator | `Add string <p0> with null terminator` |  | string expression “String” |
| 53 | 133 | Binary to send > Add binary | `Add binary at address <p0> with size <p1>` |  | numeric expression “Address”; numeric expression “Size” |
| 54 | 134 | Binary to send > Add file | `Add file <p0> onto the binary to send` |  | file name “File to push” |
| 55 | 135 | Binary to send > Compress (ZLIB) | `Compress send binary (ZLIB)` |  |  |
| 56 | 136 | Binary to send > Clear | `Clear binary to send` |  |  |
| 57 | 137 | Received binary > Save to a file | `Save received binary (position <p0> with size <p1>) to file <p2>` |  | numeric expression “Position”; numeric expression “Size”; string expression “Filename” |
| 58 | 138 | Received binary > Append to a file | `Append received binary (position <p0> with size <p1>) to file <p2>` |  | numeric expression “Position”; numeric expression “Size”; string expression “Filename” |
| 59 | 139 | Received binary > Uncompress (ZLIB) | `Uncompress received binary (ZLIB)` |  |  |
| 60 | 140 | Channel > Loop clients | `Loop clients on channel` |  |  |
| 61 | 141 | On interactive condition > Drop message (for on message to channel/peer) | `Drop message` |  |  |
| 62 | 142 | Client > Select sender (for "on message to peer") | `Select sender` |  |  |
| 63 | 143 | Client > Select receiver (for "on message to peer") | `Select receiver` |  |  |
| 64 | 144 | Channel > Loop all channels (with loop name) | `Loop all channels [Loop name: <p0>]` |  | string expression “Loop name” |
| 65 | 145 | Client > Loop all clients (with loop name) | `Loop all clients [Loop name: <p0>]` |  | string expression “Loop name” |
| 66 | 146 | Client > Loop client channels (with loop name) | `Loop client channels [Loop name: <p0>]` |  | string expression “Loop name” |
| 68 | 148 | Flash Player Policy Server > Host | `Host Flash Player policy server from XML file <p0> on port 843` |  | file name “XML policy file” |
| 69 | 149 | Flash Player Policy Server > Stop hosting | `Stop hosting Flash Player policy server` |  |  |
| 70 | 150 | Client > Set local client data | `Set local client data at <p0> to <p1>` |  | string expression “Key”; string expression “Value” |
| 71 | 151 | Received binary > Move cursor | `Move received binary cursor to <p0>` |  | numeric expression “Position” |
| 72 | 152 | Channel > Set local channel data | `Set local channel data at <p0> to <p1>` |  | string expression “Key”; string expression “Value” |
| 73 | 153 | Binary to send > Resize | `Resize binary to send to <p0> bytes` |  | numeric expression “New size (in bytes)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Error string (for on error) | `Error$(` |  | → string |
| 1 | 81 | Lacewing version string | `Version$(` |  | → string |
| 2 | 82 | Binary to send size | `SendBinarySize(` |  |  |
| 3 | 83 | Requested name (for name set/change request) | `RequestedName$(` |  | → string |
| 4 | 84 | Requested channel name (for channel join request) | `RequestedChannelName$(` |  | → string |
| 5 | 85 | Channel > Name | `Channel_Name$(` |  | → string |
| 6 | 86 | Channel > Client count | `Channel_ClientCount(` |  |  |
| 7 | 87 | Client > Name | `Client_Name$(` |  | → string |
| 8 | 88 | Client > ID | `Client_ID(` |  |  |
| 9 | 89 | Client > IP address | `Client_IP$(` |  | → string |
| 10 | 90 | Client > Connection time | `REMOVED_EXPRESSION(` |  |  |
| 11 | 91 | Client > Channel count | `Client_ChannelCount(` |  |  |
| 12 | 92 | Received > Get text | `Received$(` |  | → string |
| 13 | 93 | Received > Get number | `Received(` |  |  |
| 14 | 94 | Received > Get binary size | `ReceivedBinarySize(` |  |  |
| 15 | 95 | Received > Get binary memory address | `ReceivedBinaryAddress(` |  |  |
| 16 | 96 | Received > Get binary data > Byte > ASCII character | `Byte$(` |  | number “Index” → string |
| 17 | 97 | Received > Get binary data > Byte > Integer value > Unsigned | `Byte(` |  | number “Index” |
| 18 | 98 | Received > Get binary data > Byte > Integer value > Signed | `SignedByte(` |  | number “Index” |
| 19 | 99 | Received > Get binary data > Short > Unsigned | `Short(` |  | number “Index” |
| 20 | 100 | Received > Get binary data > Short > Signed | `SignedShort(` |  | number “Index” |
| 21 | 101 | Received > Get binary data > Integer > Unsigned | `Integer(` |  | number “Index” |
| 22 | 102 | Received > Get binary data > Integer > Signed | `SignedInteger(` |  | number “Index” |
| 23 | 103 | Received > Get binary data > Float | `Float(` |  | number “Index” |
| 24 | 104 | Received > Get binary data > String > With size | `StringWithSize$(` |  | number “Index”; number “Size” → string |
| 25 | 105 | Received > Get binary data > String > Null terminated | `String$(` |  | number “Index” → string |
| 26 | 106 | Received > Get subchannel | `Subchannel(` |  |  |
| 27 | 107 | Channel > Number of channels on the server | `ChannelCount(` |  |  |
| 28 | 108 | Client > Get local client data | `Client_LocalData$(` |  | string “Key” → string |
| 29 | 109 | Received > Get binary data (with cursor) > Byte > ASCII character | `CursorByte$(` |  | → string |
| 30 | 110 | Received > Get binary data (with cursor) > Byte > Integer value > Unsigned | `CursorByte(` |  |  |
| 31 | 111 | Received > Get binary data (with cursor) > Byte > Integer value > Signed | `CursorSignedByte(` |  |  |
| 32 | 112 | Received > Get binary data (with cursor) > Short > Unsigned | `CursorShort(` |  |  |
| 33 | 113 | Received > Get binary data (with cursor) > Short > Signed | `CursorSignedShort(` |  |  |
| 34 | 114 | Received > Get binary data (with cursor) > Integer > Unsigned | `CursorInteger(` |  |  |
| 35 | 115 | Received > Get binary data (with cursor) > Integer > Signed | `CursorSignedInteger(` |  |  |
| 36 | 116 | Received > Get binary data (with cursor) > Float | `CursorFloat(` |  |  |
| 37 | 117 | Received > Get binary data (with cursor) > String > With size | `CursorStringWithSize$(` |  | number “Size” → string |
| 38 | 118 | Received > Get binary data (with cursor) > String > Null terminated | `CursorString$(` |  | → string |
| 39 | 119 | Client > Get client protocol implementation | `REMOVED_EXPRESSION$(` |  | → string |
| 40 | 120 | Channel > Get local channel data | `Channel_LocalData$(` |  | string “Key” → string |
| 41 | 121 | Port | `Port(` |  |  |
| 42 | 122 | Binary to send address | `SendBinaryAddress(` |  |  |
