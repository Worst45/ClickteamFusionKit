# Extension mooclick

- Fichier : `mooclick.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Player > On Message | `Player: On Message` |  |  | — |  |
| 1 | -82 | Player > On Server Message | `Player: On Server Message` |  |  | — |  |
| 2 | -83 | Player > On Connect | `Player: On Connect` |  |  | — |  |
| 3 | -84 | Player > On Disconnect | `Player: On Disconnect` |  |  | — |  |
| 4 | -85 | Player > Channel > On Sign On | `Channel: On Sign On` |  |  | — |  |
| 5 | -86 | Player > Channel > On Sign Off | `Channel: On Sign Off` |  |  | — |  |
| 6 | -87 | Player > Channel > Is Master | `Channel: Is Master` |  |  | — |  |
| 7 | -88 | Player > Channel > User > On User Is Here | `User: On User Is Here` |  |  | — |  |
| 8 | -89 | Player > Channel > User > On User Joined | `User: On User Joined` |  |  | — |  |
| 9 | -90 | Player > Channel > User > On User Left | `User: On User Left` |  |  | — |  |
| 10 | -91 | Player > Channel > User > On Name Changed | `User: On Name Changed` |  |  | — |  |
| 11 | -92 | Server > Connection > On Connect | `Connection: On Connect` |  |  | — |  |
| 12 | -93 | Server > Connection > On Disconnect | `Connection: On Disconnect` |  |  | — |  |
| 13 | -94 | Server > Connection > On Client Message | `Connection: On Client Message` |  |  | — |  |
| 14 | -95 | Server > Connection > Session > On Sign On | `Session: On Sign On` |  |  | — |  |
| 15 | -96 | Server > Connection > Session > On Sign Off | `Session: On Sign Off` |  |  | — |  |
| 16 | -97 | Server > Session > On Session Created | `Session: On Session Created` |  |  | — |  |
| 17 | -98 | Server > Session > On Session Died | `Session: On Session Died` |  |  | — |  |
| 18 | -99 | Error > On Error | `Error: On Error` |  |  | — |  |
| 19 | -100 | Player > Is Connected | `Player: Is Connected` |  |  | — |  |
| 20 | -101 | Player > Channel > Is Signed On | `Channel: Is Signed On` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Player Name | `Set Player Name to <p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Connect | `Connect to <p0> on port <p1>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Host Server | `Host server on port <p0>` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Select Player by Index | `Select Player at index <p0>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Player > Sign On to Channel | `Player: Sign On to Channel <p0>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Player > Change Player Name | `Player: Change Name to <p0>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Player > Send Text to Server | `Player: Send <p0> on subchannel <p1> to Server` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Player > Blast Text to Server | `Player: Blast <p0> on subchannel <p1> to Server` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Player > Disconnect | `Player: Disconnect` |  |  | — |  |
| 9 | 89 | Player > Select Channel by Index | `Player: Select Channel at index <p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Player > Channel > Send Text on Channel | `Channel: Send <p0> on subchannel <p1> on Channel` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Player > Channel > Blast Text on Channel | `Channel: Blast <p0> on subchannel <p1> on Channel` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Player > Channel > Sign Off | `Channel: Sign Off` |  |  | — |  |
| 13 | 93 | Player > Channel > Select User by Index | `Channel: Select User at index <p0>` |  | (paramètres non fiables) | — |  |
| 14 | 94 | Player > Channel > User > Send Text to User | `User: Send <p0> on subchannel <p1> to User` |  | (paramètres non fiables) | — |  |
| 15 | 95 | Player > Channel > User > Blast Text to User | `User: Blast <p0> on subchannel <p1> to User` |  | (paramètres non fiables) | — |  |
| 16 | 96 | Select Server by Index | `Select Server at index <p0>` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Server > Set MOTD | `Server: Set Message of the Day to <p0>` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Server > Send Text to Everyone | `Server: Send <p0> on subchannel <p1> to Everyone` |  | (paramètres non fiables) | — |  |
| 19 | 99 | Server > Blast Text to Everyone | `Server: Blast <p0> on subchannel <p1> to Everyone` |  | (paramètres non fiables) | — |  |
| 20 | 100 | Server > Disconnect | `Server: Disconnect` |  |  | — |  |
| 21 | 101 | Server > Select Connection by Index | `Server: Select Connection at index <p0>` |  | (paramètres non fiables) | — |  |
| 22 | 102 | Server > Connection > Send Text to Player | `Connection: Send <p0> on subchannel <p1> to Player` |  | (paramètres non fiables) | — |  |
| 23 | 103 | Server > Connection > Blast Text to Player | `Connection: Send <p0> on subchannel <p1> to Player` |  | (paramètres non fiables) | — |  |
| 24 | 104 | Server > Connection > Disconnect | `Connection: Disconnect` |  |  | — |  |
| 25 | 105 | Server > Connection > Select Session by Index | `Connection: Select Session at index <p0>` |  | (paramètres non fiables) | — |  |
| 26 | 106 | Server > Connection > Session > Send Text on Channel | `Session: Send <p0> on subchannel <p1> on Channel` |  | (paramètres non fiables) | — |  |
| 27 | 107 | Server > Connection > Session > Blast Text on Channel | `Session: Send <p0> on subchannel <p1> on Channel` |  | (paramètres non fiables) | — |  |
| 28 | 108 | Server > Connection > Session > Sign Off | `Session: Sign Off` |  |  | — |  |
| 29 | 109 | Server > Select Session by Index | `Server: Select Session at index <p0>` |  | (paramètres non fiables) | — |  |
| 30 | 110 | Server > Session > Send Text on Channel | `Session: Send <p0> on subchannel <p1> on Channel` |  | (paramètres non fiables) | — |  |
| 31 | 111 | Server > Session > Blast Text on Channel | `Session: Blast <p0> on subchannel <p1> on Channel` |  | (paramètres non fiables) | — |  |
| 32 | 112 | Server > Session > Sign Off | `Session: Sign Off` |  |  | — |  |
| 33 | 113 | Server > Session > Select Connection by Index | `Session: Select Connection at index <p0>` |  | (paramètres non fiables) | — |  |
| 34 | 114 | Server > Session > Connection > Send Text to Player | `Connection: Send <p0> on subchannel <p1> to Player` |  | (paramètres non fiables) | — |  |
| 35 | 115 | Server > Session > Connection > Blast Text to Player | `Connection: Blast <p0> on subchannel <p1> to Player` |  | (paramètres non fiables) | — |  |
| 36 | 116 | Server > Session > Connection > Disconnect | `Connection: Disconnect` |  |  | — |  |
| 37 | 117 | Stats > For All of Moo | `Stats: All of Moo` |  |  | — |  |
| 38 | 118 | Stats > For Selected Player | `Stats: Selected Player` |  |  | — |  |
| 39 | 119 | Stats > For Selected Server | `Stats: Selected Server` |  |  | — |  |
| 40 | 120 | Stats > For Selected Connection | `Stats: Selected Connection` |  |  | — |  |
| 41 | 121 | Select Player by ID | `Select Player with ID <p0>` |  | (paramètres non fiables) | — |  |
| 42 | 122 | Select Player by Name | `Select Player with Name <p0>` |  | (paramètres non fiables) | — |  |
| 43 | 123 | Player > Select Channel by ID | `Player: Select Channel with ID <p0>` |  | (paramètres non fiables) | — |  |
| 44 | 124 | Player > Select Channel by Name | `Player: Select Channel with Name <p0>` |  | (paramètres non fiables) | — |  |
| 45 | 125 | Player > Channel > Select User by ID | `Channel: Select User with ID <p0>` |  | (paramètres non fiables) | — |  |
| 46 | 126 | Player > Channel > Select User by Name | `Channel: Select User with Name <p0>` |  | (paramètres non fiables) | — |  |
| 47 | 127 | Server > Select Connection by ID | `Server: Select Connection with ID <p0>` |  | (paramètres non fiables) | — |  |
| 48 | 128 | Server > Select Connection by Name | `Server: Select Connection with Name <p0>` |  | (paramètres non fiables) | — |  |
| 49 | 129 | Server > Connection > Select Session by ID | `Connection: Select Session with ID <p0>` |  | (paramètres non fiables) | — |  |
| 50 | 130 | Server > Connection > Select Session by Name | `Connection: Select Session with Name <p0>` |  | (paramètres non fiables) | — |  |
| 51 | 131 | Server > Select Session by ID | `Server: Select Session with ID <p0>` |  | (paramètres non fiables) | — |  |
| 52 | 132 | Server > Select Session by Name | `Server: Select Session with Name <p0>` |  | (paramètres non fiables) | — |  |
| 53 | 133 | Server > Session > Select Connection by ID | `Session: Select Connection with ID <p0>` |  | (paramètres non fiables) | — |  |
| 54 | 134 | Server > Session > Select Connection by Name | `Session: Select Connection with Name <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Count Players | `_CountPlayers(` |  |  | — |  |
| 1 | 81 | Player > Get Player ID | `P_GetID(` |  |  | — |  |
| 2 | 82 | Player > Get Player Name | `P_GetName$(` |  |  | — |  |
| 3 | 83 | Player > Get Player IP | `P_GetClientIP$(` |  |  | — |  |
| 4 | 84 | Player > Get Server IP | `P_GetRemoteIP$(` |  |  | — |  |
| 5 | 85 | Player > Get Port | `P_GetPort(` |  |  | — |  |
| 6 | 86 | Player > Get MOTD | `P_GetMOTD$(` |  |  | — |  |
| 7 | 87 | Player > Count Channels | `P_CountChannels(` |  |  | — |  |
| 8 | 88 | Player > Channel > Get Channel ID | `PC_GetID(` |  |  | — |  |
| 9 | 89 | Player > Channel > Get Channel Name | `PC_GetName$(` |  |  | — |  |
| 10 | 90 | Player > Channel > Get Channel Master ID | `PC_GetMasterID(` |  |  | — |  |
| 11 | 91 | Player > Channel > Count Users | `PC_CountUsers(` |  |  | — |  |
| 12 | 92 | Player > Channel > User > Get User ID | `PCU_GetID(` |  |  | — |  |
| 13 | 93 | Player > Channel > User > Get User Name | `PCU_GetName$(` |  |  | — |  |
| 14 | 94 | Player > Channel > User > Get User IP | `PCU_GetClientIP$(` |  |  | — |  |
| 15 | 95 | Count Servers | `_CountServers(` |  |  | — |  |
| 16 | 96 | Server > Get Server IP | `S_GetServerIP$(` |  |  | — |  |
| 17 | 97 | Server > Get Port | `S_GetPort(` |  |  | — |  |
| 18 | 98 | Server > Count Connections | `S_CountConnections(` |  |  | — |  |
| 19 | 99 | Server > Connection > Get Player ID | `SC_GetID(` |  |  | — |  |
| 20 | 100 | Server > Connection > Get Player Name | `SC_GetName$(` |  |  | — |  |
| 21 | 101 | Server > Connection > Get Player IP | `SC_GetClientIP$(` |  |  | — |  |
| 22 | 102 | Server > Connection > Count Sessions | `SC_CountSessions(` |  |  | — |  |
| 23 | 103 | Server > Count Sessions | `S_CountSessions(` |  |  | — |  |
| 24 | 104 | Server > Session > Get Channel ID | `SS_GetID(` |  |  | — |  |
| 25 | 105 | Server > Session > Get Channel Name | `SS_GetName$(` |  |  | — |  |
| 26 | 106 | Server > Session > Get Channel Master ID | `SS_GetMasterID(` |  |  | — |  |
| 27 | 107 | Server > Session > Count Connections | `SS_CountConnections(` |  |  | — |  |
| 28 | 108 | Player > On Message > Get Text | `P_OnMessage_GetText$(` |  |  | — |  |
| 29 | 109 | Player > On Message > Get Subchannel | `P_OnMessage_GetSubchannel(` |  |  | — |  |
| 30 | 110 | Player > On Server Message > Get Text | `P_OnServerMsg_GetText$(` |  |  | — |  |
| 31 | 111 | Player > On Server Message > Get Subchannel | `P_OnServerMsg_GetSubchannel(` |  |  | — |  |
| 32 | 112 | Player > Channel > User > On Name Changed > Get Old Name | `PCU_OnNameChanged_GetOldName$(` |  |  | — |  |
| 33 | 113 | Server > Connection > On Client Message > Get Text | `SC_OnClientMsg_GetText$(` |  |  | — |  |
| 34 | 114 | Server > Connection > On Client Message > Get Subchannel | `SC_OnClientMsg_GetSubchannel(` |  |  | — |  |
| 35 | 115 | Error > On Error > Get Error Number | `E_OnError_GetNumber(` |  |  | — |  |
| 36 | 116 | Error > On Error > Get Error Message | `E_OnError_GetMessage$(` |  |  | — |  |
| 37 | 117 | Stats > Get Runtime | `StatsRuntime(` |  |  | — |  |
| 38 | 118 | Stats > Totals > Packets > Get Total Packet Count | `TotalPacketCount(` |  |  | — |  |
| 39 | 119 | Stats > Totals > Packets > Get Incoming Packet Count | `TotalInPacketCount(` |  |  | — |  |
| 40 | 120 | Stats > Totals > Packets > Get Outgoing Packet Count | `TotalOutPacketCount(` |  |  | — |  |
| 41 | 121 | Stats > Totals > Bytes > Get Total Byte Count | `TotalByteCount(` |  |  | — |  |
| 42 | 122 | Stats > Totals > Bytes > Get Incoming Byte Count | `TotalInByteCount(` |  |  | — |  |
| 43 | 123 | Stats > Totals > Bytes > Get Outgoing Byte Count | `TotalOutByteCount(` |  |  | — |  |
| 44 | 124 | Stats > Averages > Packet Size > Get Average Packet Size | `AvgPacketSize(` |  |  | — |  |
| 45 | 125 | Stats > Averages > Packet Size > Get Average Incoming Packet Size | `AvgInPacketSize(` |  |  | — |  |
| 46 | 126 | Stats > Averages > Packet Size > Get Average Outgoing Packet Size | `AvgOutPacketSize(` |  |  | — |  |
| 47 | 127 | Stats > Averages > Throughput > Get Average Throughput | `AvgThroughput(` |  |  | — |  |
| 48 | 128 | Stats > Averages > Throughput > Get Average Incoming Throughput | `AvgInThroughput(` |  |  | — |  |
| 49 | 129 | Stats > Averages > Throughput > Get Average Outgoing Throughput | `AvgOutThroughput(` |  |  | — |  |
| 50 | 130 | Stats > Maximums > Packet Size > Get Biggest Packet Size | `MaxPacketSize(` |  |  | — |  |
| 51 | 131 | Stats > Maximums > Packet Size > Get Biggest Incoming Packet Size | `MaxInPacketSize(` |  |  | — |  |
| 52 | 132 | Stats > Maximums > Packet Size > Get Biggest Outgoing Packet Size | `MaxOutPacketSize(` |  |  | — |  |
| 53 | 133 | Stats > Maximums > Throughput > Get Highest Throughput | `MaxThroughput(` |  |  | — |  |
| 54 | 134 | Stats > Maximums > Throughput > Get Highest Incoming Throughput | `MaxInThroughput(` |  |  | — |  |
| 55 | 135 | Stats > Maximums > Throughput > Get Highest Outgoing Throughput | `MaxOutThroughput(` |  |  | — |  |
| 56 | 136 | Stats > Minimums > Packet Size > Get Smallest Packet Size | `MinPacketSize(` |  |  | — |  |
| 57 | 137 | Stats > Minimums > Packet Size > Get Smallest Incoming Packet Size | `MinInPacketSize(` |  |  | — |  |
| 58 | 138 | Stats > Minimums > Packet Size > Get Smallest Outgoing Packet Size | `MinOutPacketSize(` |  |  | — |  |
| 59 | 139 | Stats > Minimums > Throughput > Get Lowest Throughput | `MinThroughput(` |  |  | — |  |
| 60 | 140 | Stats > Minimums > Throughput > Get Lowest Incoming Throughput | `MinInThroughput(` |  |  | — |  |
| 61 | 141 | Stats > Minimums > Throughput > Get Lowest Outgoing Throughput | `MinOutThroughput(` |  |  | — |  |
| 62 | 142 | Stats > Sampling > Current Throughput Reading > Get Current Throughput | `CurrentThroughput(` |  |  | — |  |
| 63 | 143 | Stats > Sampling > Current Throughput Reading > Get Current Incoming Throughput | `CurrentInThroughput(` |  |  | — |  |
| 64 | 144 | Stats > Sampling > Current Throughput Reading > Get Current Outgoing Throughput | `CurrentOutThroughput(` |  |  | — |  |
| 65 | 145 | Stats > Sampling > Last Throughput Reading > Get Last Throughput | `LastThroughput(` |  |  | — |  |
| 66 | 146 | Stats > Sampling > Last Throughput Reading > Get Last Incoming Throughput | `LastInThroughput(` |  |  | — |  |
| 67 | 147 | Stats > Sampling > Last Throughput Reading > Get Last Outgoing Throughput | `LastOutThroughput(` |  |  | — |  |
| 68 | 148 | Stats > Sampling > Last Packet Size > Get Last Packet Size | `LastPacketSize(` |  |  | — |  |
| 69 | 149 | Stats > Sampling > Last Packet Size > Get Last Incoming Packet Size | `LastInPacketSize(` |  |  | — |  |
| 70 | 150 | Stats > Sampling > Last Packet Size > Get Last Outgoing Packet Size | `LastOutPacketSize(` |  |  | — |  |
| 71 | 151 | Player > Get Player Name from ID | `P_GetNameID$(` |  | (paramètres non fiables) | — |  |
| 72 | 152 | Player > Channel > Get Channel Name from ID | `PC_GetNameID$(` |  | (paramètres non fiables) | — |  |
| 73 | 153 | Player > Channel > User > Get User Name from ID | `PCU_GetNameID$(` |  | (paramètres non fiables) | — |  |
| 74 | 154 | Server > Connection > Get Player Name from ID | `SC_GetNameID$(` |  | (paramètres non fiables) | — |  |
| 75 | 155 | Server > Session > Get Channel Name from ID | `SS_GetNameID$(` |  | (paramètres non fiables) | — |  |
