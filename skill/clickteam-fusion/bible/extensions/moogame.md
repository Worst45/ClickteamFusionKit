# Extension moogame

- File: `moogame.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Connection Status > Is Connected | `<object>: Is Connected` |  |  | — |  |
| 1 | -82 | Connection Status > On Connect | `<object>: On Connect` |  |  | — |  |
| 2 | -83 | Connection Status > On Disconnect | `<object>: On Disconnect` |  |  | — |  |
| 3 | -84 | Channel Status > Is Signed On | `<object>: Is Signed On` |  |  | — |  |
| 4 | -85 | Channel Status > On Sign On | `<object>: On Sign On` |  |  | — |  |
| 5 | -86 | Channel Status > On Sign Off | `<object>: On Sign Off` |  |  | — |  |
| 6 | -87 | Channel Status > Is Channel Master | `<object>: Is Channel Master` |  |  | — |  |
| 7 | -88 | Message Received > On String Message | `<object>: On String Message on Subchannel <p0>` |  | (unreliable parameters) | — |  |
| 8 | -89 | Message Received > On Number Message | `<object>: On Value Message on Subchannel <p0>` |  | (unreliable parameters) | — |  |
| 9 | -90 | Message Received > On Binary Message | `<object>: On Binary Message on Subchannel <p0>` |  | (unreliable parameters) | — |  |
| 10 | -91 | Message Received > On Object Message | `<object>: On Object Message on Subchannel <p0>` |  | (unreliable parameters) | — |  |
| 11 | -92 | Users > On User Is Here | `<object>: On User Is Here` |  |  | — |  |
| 12 | -93 | Users > On User Joined | `<object>: On User Joined` |  |  | — |  |
| 13 | -94 | Users > On User Left | `<object>: On User Left` |  |  | — |  |
| 14 | -95 | Users > On User Name Changed | `<object>: On User Name Changed` |  |  | — |  |
| 15 | -96 | Users > Is User Name Here | `<object>: Is User Named <p0> Here` |  | (unreliable parameters) | — |  |
| 16 | -97 | Server Side INI > On Value Loaded | `<object>: On INI Value Loaded` |  |  | — |  |
| 17 | -98 | Server Side INI > On String Loaded | `<object>: On INI String Loaded` |  |  | — |  |
| 18 | -99 | Error Occurred | `<object>: On Error` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Name | `<object>: Set Name to <p0>` |  | (unreliable parameters) | — |  |
| 1 | 81 | Connect | `<object>: Connect to <p0> on Port <p1>` |  | (unreliable parameters) | — |  |
| 2 | 82 | Disconnect | `<object>: Disconnect` |  |  | — |  |
| 3 | 83 | Sign On | `<object>: Sign On to Channel <p0>` |  | (unreliable parameters) | — |  |
| 4 | 84 | Sign Off | `<object>: Sign Off` |  |  | — |  |
| 5 | 85 | Send > Set Method > Send Guaranteed | `<object>: Send using Guaranteed Method` |  |  | — |  |
| 6 | 86 | Send > Set Method > Send Non-Guaranteed | `<object>: Send using Non-Guaranteed Method` |  |  | — |  |
| 7 | 87 | Send > Set Recepient > Send to Channel | `<object>: Set Recepient to Channel` |  |  | — |  |
| 8 | 88 | Send > Set Recepient > Send to User Id | `<object>: Set Recepient to User Id <p0>` |  | (unreliable parameters) | — |  |
| 9 | 89 | Send > Set Recepient > Send to Server | `<object>: Set Recepient to Server` |  |  | — |  |
| 10 | 90 | Send > Send String | `<object>: Send String <p0> on Subchannel <p1>` |  | (unreliable parameters) | — |  |
| 11 | 91 | Send > Send Number | `<object>: Send Value <p0> on Subchannel <p1>` |  | (unreliable parameters) | — |  |
| 12 | 92 | Send > Send Binary | `<object>: Send Binary File <p0> on Subchannel <p1>` |  | (unreliable parameters) | — |  |
| 13 | 93 | Send > Object Tracking > Send Object | `<object>: Send Object <p0> on Subchannel <p1>` |  | numeric expression “Send Object” | — |  |
| 14 | 94 | Send > Object Tracking > Enable Sending of... > Enable X Coordinate | `<object>: Enable Sending of X Coordinate` |  |  | — |  |
| 15 | 95 | Send > Object Tracking > Enable Sending of... > Enable Y Coordinate | `<object>: Enable Sending of Y Coordinate` |  |  | — |  |
| 16 | 96 | Send > Object Tracking > Enable Sending of... > Enable Direction | `<object>: Enable Sending of Direction` |  |  | — |  |
| 17 | 97 | Send > Object Tracking > Enable Sending of... > Enable Speed | `<object>: Enable Sending of Speed` |  |  | — |  |
| 18 | 98 | Dead Reckoning > Edit Settings > Direction Tracking > Linear Progression | `<object>: Use Linear Progression for Direction` |  |  | — |  |
| 19 | 99 | Dead Reckoning > Edit Settings > Direction Tracking > Incremental Rotation | `<object>: Use Incremental Rotation for Direction` |  |  | — |  |
| 20 | 100 | Send > Object Tracking > Enable Sending of... > Enable Animation Frame | `<object>: Enable Sending of Animation Frame` |  |  | — |  |
| 21 | 101 | Send > Object Tracking > Enable Sending of... > Enable Alterable Value A | `<object>: Enable Sending of Value A` |  |  | — |  |
| 22 | 102 | Send > Object Tracking > Enable Sending of... > Enable Alterable Value B | `<object>: Enable Sending of Value B` |  |  | — |  |
| 23 | 103 | Send > Object Tracking > Enable Sending of... > Enable Alterable Value C | `<object>: Enable Sending of Value C` |  |  | — |  |
| 24 | 104 | Send > Object Tracking > Enable Sending of... > Enable Alterable Flags | `<object>: Enable Sending of Flags` |  |  | — |  |
| 25 | 105 | Send > Object Tracking > Disable Sending of... > Disable X Coordinate | `<object>: Disable Sending of X Coordinate` |  |  | — |  |
| 26 | 106 | Send > Object Tracking > Disable Sending of... > Disable Y Coordinate | `<object>: Disable Sending of Y Coordinate` |  |  | — |  |
| 27 | 107 | Send > Object Tracking > Disable Sending of... > Disable Direction | `<object>: Disable Sending of Direction` |  |  | — |  |
| 28 | 108 | Send > Object Tracking > Disable Sending of... > Disable Speed | `<object>: Disable Sending of Speed` |  |  | — |  |
| 31 | 111 | Send > Object Tracking > Disable Sending of... > Disable Animation Frame | `<object>: Disable Sending of Animation Frame` |  |  | — |  |
| 32 | 112 | Send > Object Tracking > Disable Sending of... > Disable Alterable Value A | `<object>: Disable Sending of Value A` |  |  | — |  |
| 33 | 113 | Send > Object Tracking > Disable Sending of... > Disable Alterable Value B | `<object>: Disable Sending of Value B` |  |  | — |  |
| 34 | 114 | Send > Object Tracking > Disable Sending of... > Disable Alterable Value C | `<object>: Disable Sending of Value C` |  |  | — |  |
| 35 | 115 | Send > Object Tracking > Disable Sending of... > Disable Alterable Flags | `<object>: Disable Sending of Flags` |  |  | — |  |
| 36 | 116 | Receive > Load Binary | `<object>: Load Binary into File <p0>` |  | (unreliable parameters) | — |  |
| 37 | 117 | Receive > Load Object | `<object>: Load Object <p0>` |  | (unreliable parameters) | — |  |
| 38 | 118 | Server Side INI > Set Filename | `<object>: Set INI Filename to <p0>` |  | (unreliable parameters) | — |  |
| 39 | 119 | Server Side INI > Set Group | `<object>: Set INI Group to <p0>` |  | (unreliable parameters) | — |  |
| 40 | 120 | Server Side INI > Set Item | `<object>: Set INI Item to <p0>` |  | (unreliable parameters) | — |  |
| 41 | 121 | Server Side INI > Set Value | `<object>: Set INI Value to <p0>` |  | (unreliable parameters) | — |  |
| 42 | 122 | Server Side INI > Set String | `<object>: Set INI String to <p0>` |  | (unreliable parameters) | — |  |
| 43 | 123 | Server Side INI > Load Value | `<object>: Load INI Value` |  |  | — |  |
| 44 | 124 | Server Side INI > Load String | `<object>: Load INI String` |  |  | — |  |
| 45 | 125 | Dead Reckoning > Edit Settings > Smoothing Algorithm > Use Point to Point | `<object>: Use Point To Point Algorithm` |  |  | — |  |
| 46 | 126 | Dead Reckoning > Edit Settings > Smoothing Algorithm > Use Linear Motion | `<object>: Use Linear Motion Algorithm` |  |  | — |  |
| 47 | 127 | Dead Reckoning > Edit Settings > Smoothing Algorithm > Use Quadratic Motion | `<object>: Use Quadratic Motion Algorithm` |  |  | — |  |
| 48 | 128 | Dead Reckoning > Edit Settings > Smoothing Algorithm > Use Cubic Splines | `<object>: Use Cublic Splines Algorithm` |  |  | — |  |
| 49 | 129 | Dead Reckoning > Select Object | `<object>: Select Tracking Object <p0>` |  | (unreliable parameters) | — |  |
| 50 | 130 | Dead Reckoning > Input Tracking | `<object>: Input Tracking for User <p0> on Track <p1>` |  | (unreliable parameters) | — |  |
| 51 | 131 | Dead Reckoning > Output Tracking | `<object>: Output Tracking on Track <p0>` |  | (unreliable parameters) | — |  |
| 52 | 132 | Dead Reckoning > Remove Tracking | `<object>: Remove Tracking` |  |  | — |  |
| 53 | 133 | Dead Reckoning > Pause Tracking | `<object>: Pause Tracking on Track <p0>` |  | (unreliable parameters) | — |  |
| 54 | 134 | Dead Reckoning > Resume Tracking | `<object>: Resume Tracking on Track <p0>` |  | (unreliable parameters) | — |  |
| 55 | 135 | Dead Reckoning > Edit Settings > Set Frame Delay | `<object>: Set Frame Delay to <p0> Frames` |  | (unreliable parameters) | — |  |
| 56 | 136 | Dead Reckoning > Edit Settings > Set Threshold | `<object>: Set Threshold to <p0> Pixels` |  | (unreliable parameters) | — |  |
| 57 | 137 | Dead Reckoning > Edit Settings > Packet Routing > Favor Delivery Speed | `<object>: Route to Clients for Speed` |  |  | — |  |
| 58 | 138 | Dead Reckoning > Edit Settings > Packet Routing > Favor Bandwidth Size | `<object>: Route to Server for Bandwidth` |  |  | — |  |
| 59 | 139 | Send > Object Tracking > Enable Sending of... > Enable All | `<object>: Enable Sending of All` |  |  | — |  |
| 60 | 140 | Send > Object Tracking > Enable Sending of... > Enable Position | `<object>: Enable Sending of Position` |  |  | — |  |
| 61 | 141 | Send > Object Tracking > Enable Sending of... > Enable Velocity | `<object>: Enable Sending of Velocity` |  |  | — |  |
| 62 | 142 | Send > Object Tracking > Enable Sending of... > Enable Alterable Values | `<object>: Enable Sending of Values` |  |  | — |  |
| 63 | 143 | Send > Object Tracking > Disable Sending of... > Disable All | `<object>: Disable Sending of All` |  |  | — |  |
| 64 | 144 | Send > Object Tracking > Disable Sending of... > Disable Position | `<object>: Disable Sending of Position` |  |  | — |  |
| 65 | 145 | Send > Object Tracking > Disable Sending of... > Disable Velocity | `<object>: Disable Sending of Velocity` |  |  | — |  |
| 66 | 146 | Send > Object Tracking > Disable Sending of... > Disable Alterable Values | `<object>: Sending of Values` |  |  | — |  |
| 67 | 147 | Dead Reckoning > Edit Settings > Set Projection Frames | `<object>: Project Position <p0> Frames` |  | (unreliable parameters) | — |  |
| 68 | 148 | Dead Reckoning > Edit Settings > Set Smoothing Frames | `<object>: Do Smoothing for <p0> Frames` |  | (unreliable parameters) | — |  |
| 69 | 149 | Dead Reckoning > Edit Default Settings | `<object>: Edit Settings of the default settings` |  |  | — |  |
| 70 | 150 | Dead Reckoning > Edit Object Settings | `<object>: Edit Settings for currently selected object` |  |  | — |  |
| 71 | 151 | Dead Reckoning > Edit Settings > Packet Type > Use Non-Guaranteed Packets | `<object>: Use Non-Guaranteed Packets` |  |  | — |  |
| 72 | 152 | Dead Reckoning > Edit Settings > Packet Type > Use Guaranteed Packets (DEBUG) | `<object>: Use Guaranteed Packets (DEBUG)` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Id | `GetId(` |  |  | — |  |
| 1 | 81 | Get Name | `GetName$(` |  |  | — |  |
| 2 | 82 | Get IP Address | `GetIP$(` |  |  | — |  |
| 3 | 83 | Channel > Get Id | `GetChannelId(` |  |  | — |  |
| 4 | 84 | Channel > Get Name | `GetChannelName$(` |  |  | — |  |
| 5 | 85 | Channel > Get User Count | `GetUserCount(` |  |  | — |  |
| 6 | 86 | Channel > Users > Get Id from List | `GetIdFromList(` |  | (unreliable parameters) | — |  |
| 7 | 87 | Channel > Users > Get Name from List | `GetNameFromList$(` |  | (unreliable parameters) | — |  |
| 8 | 88 | Channel > Users > Get Name using Id | `GetNameUsingId$(` |  | (unreliable parameters) | — |  |
| 9 | 89 | Channel > Users > Get Channel Master Id | `GetChannelMasterId(` |  |  | — |  |
| 10 | 90 | Get Message > Get String | `GetString$(` |  |  | — |  |
| 11 | 91 | Get Message > Get Value | `GetValue(` |  |  | — |  |
| 12 | 92 | Get Message > Get Sender's ID | `GetSenderId(` |  |  | — |  |
| 13 | 93 | Get Message > Get Sender's Name | `GetSenderName$(` |  |  | — |  |
| 14 | 94 | Get Message > Get Sender's IP Address | `GetSenderIP$(` |  |  | — |  |
| 15 | 95 | Join/Left User > Get User's ID | `GetUserId(` |  |  | — |  |
| 16 | 96 | Join/Left User > Get User's Name | `GetUserName$(` |  |  | — |  |
| 17 | 97 | Join/Left User > Get User's IP Address | `GetUserIP$(` |  |  | — |  |
| 18 | 98 | Join/Left User > Get User's Old Name | `GetUserOldName$(` |  |  | — |  |
| 19 | 99 | Errors > Get Error Number | `GetErrorNumber(` |  |  | — |  |
| 20 | 100 | Errors > Get Error Message | `GetErrorMessage$(` |  |  | — |  |
| 21 | 101 | Server Status > Get Message of the Day | `GetMOTD$(` |  |  | — |  |
| 22 | 102 | Server Status > Get Version | `GetVersion(` |  |  | — |  |
| 23 | 103 | Server Status > Get IP Address | `GetServerIP$(` |  |  | — |  |
| 24 | 104 | Server Side INI > Get Value | `GetINIValue(` |  |  | — |  |
| 25 | 105 | Server Side INI > Get String | `GetINIString$(` |  |  | — |  |
| 26 | 106 | Stats > Get Runtime | `StatsRuntime(` |  |  | — |  |
| 27 | 107 | Stats > Totals > Packets > Get Total Packet Count | `TotalPacketCount(` |  |  | — |  |
| 28 | 108 | Stats > Totals > Packets > Get Incoming Packet Count | `TotalInPacketCount(` |  |  | — |  |
| 29 | 109 | Stats > Totals > Packets > Get Outgoing Packet Count | `TotalOutPacketCount(` |  |  | — |  |
| 30 | 110 | Stats > Totals > Bytes > Get Total Byte Count | `TotalByteCount(` |  |  | — |  |
| 31 | 111 | Stats > Totals > Bytes > Get Incoming Byte Count | `TotalInByteCount(` |  |  | — |  |
| 32 | 112 | Stats > Totals > Bytes > Get Outgoing Byte Count | `TotalOutByteCount(` |  |  | — |  |
| 33 | 113 | Stats > Averages > Packet Size > Get Average Packet Size | `AvgPacketSize(` |  |  | — |  |
| 34 | 114 | Stats > Averages > Packet Size > Get Average Incoming Packet Size | `AvgInPacketSize(` |  |  | — |  |
| 35 | 115 | Stats > Averages > Packet Size > Get Average Outgoing Packet Size | `AvgOutPacketSize(` |  |  | — |  |
| 36 | 116 | Stats > Averages > Throughput > Get Average Throughput | `AvgThroughput(` |  |  | — |  |
| 37 | 117 | Stats > Averages > Throughput > Get Average Incoming Throughput | `AvgInThroughput(` |  |  | — |  |
| 38 | 118 | Stats > Averages > Throughput > Get Average Outgoing Throughput | `AvgOutThroughput(` |  |  | — |  |
| 39 | 119 | Stats > Maximums > Packet Size > Get Biggest Packet Size | `MaxPacketSize(` |  |  | — |  |
| 40 | 120 | Stats > Maximums > Packet Size > Get Biggest Incoming Packet Size | `MaxInPacketSize(` |  |  | — |  |
| 41 | 121 | Stats > Maximums > Packet Size > Get Biggest Outgoing Packet Size | `MaxOutPacketSize(` |  |  | — |  |
| 42 | 122 | Stats > Maximums > Throughput > Get Highest Throughput | `MaxThroughput(` |  |  | — |  |
| 43 | 123 | Stats > Maximums > Throughput > Get Highest Incoming Throughput | `MaxInThroughput(` |  |  | — |  |
| 44 | 124 | Stats > Maximums > Throughput > Get Highest Outgoing Throughput | `MaxOutThroughput(` |  |  | — |  |
| 45 | 125 | Stats > Minimums > Packet Size > Get Smallest Packet Size | `MinPacketSize(` |  |  | — |  |
| 46 | 126 | Stats > Minimums > Packet Size > Get Smallest Incoming Packet Size | `MinInPacketSize(` |  |  | — |  |
| 47 | 127 | Stats > Minimums > Packet Size > Get Smallest Outgoing Packet Size | `MinOutPacketSize(` |  |  | — |  |
| 48 | 128 | Stats > Minimums > Throughput > Get Lowest Throughput | `MinThroughput(` |  |  | — |  |
| 49 | 129 | Stats > Minimums > Throughput > Get Lowest Incoming Throughput | `MinInThroughput(` |  |  | — |  |
| 50 | 130 | Stats > Minimums > Throughput > Get Lowest Outgoing Throughput | `MinOutThroughput(` |  |  | — |  |
| 51 | 131 | Stats > Sampling > Current Throughput Reading > Get Current Throughput | `CurrentThroughput(` |  |  | — |  |
| 52 | 132 | Stats > Sampling > Current Throughput Reading > Get Current Incoming Throughput | `CurrentInThroughput(` |  |  | — |  |
| 53 | 133 | Stats > Sampling > Current Throughput Reading > Get Current Outgoing Throughput | `CurrentOutThroughput(` |  |  | — |  |
| 54 | 134 | Stats > Sampling > Last Throughput Reading > Get Last Throughput | `LastThroughput(` |  |  | — |  |
| 55 | 135 | Stats > Sampling > Last Throughput Reading > Get Last Incoming Throughput | `LastInThroughput(` |  |  | — |  |
| 56 | 136 | Stats > Sampling > Last Throughput Reading > Get Last Outgoing Throughput | `LastOutThroughput(` |  |  | — |  |
| 57 | 137 | Stats > Sampling > Last Packet Size > Get Last Packet Size | `LastPacketSize(` |  |  | — |  |
| 58 | 138 | Stats > Sampling > Last Packet Size > Get Last Incoming Packet Size | `LastInPacketSize(` |  |  | — |  |
| 59 | 139 | Stats > Sampling > Last Packet Size > Get Last Outgoing Packet Size | `LastOutPacketSize(` |  |  | — |  |
| 60 | 140 | Dead Reckoning > Get Number of Updates | `DRUpdates(` |  |  | — |  |
