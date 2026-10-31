# Extension moosock

- Fichier : `moosock.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Connect | `<objet>: On Connect` |  |  | — |  |
| 1 | -82 | On Disconnect | `<objet>: On Disconnect` |  |  | — |  |
| 2 | -83 | On Received | `<objet>: On Received` |  |  | — |  |
| 3 | -84 | On Can Accept | `<objet>: On Can Accept` |  |  | — |  |
| 4 | -85 | Is Connected | `<objet>: Is Connected` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Accept | `<objet>: Accept` |  |  | — |  |
| 1 | 81 | Connect | `<objet>: Connect to <p0> on port <p1>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Disconnect | `<objet>: Disconnect` |  |  | — |  |
| 3 | 83 | Listen | `<objet>: Listen on port <p0>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Send Text | `<objet>: Send Text <p0>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Send Text Line | `<objet>: Send Text Line <p0>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Send Binary | `<objet>: Send Binary from file <p0>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Send Binary Line | `<objet>: Send Binary Line from file <p0>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Receive Binary to Create | `<objet>: Receive Binary, create file <p0> (<p1> bytes)` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Receive Binary Line | `<objet>: Receive Binary Line into file <p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Set Mode > Blocking | `<objet>: Use Blocking Mode` |  |  | — |  |
| 11 | 91 | Set Mode > Non-Blocking | `<objet>: Use Non-Blocking Mode` |  |  | — |  |
| 12 | 92 | Set Timeout (ms) | `<objet>: Set Timeout to <p0> milliseconds` |  | (paramètres non fiables) | — |  |
| 13 | 93 | Select Socket | `<objet>: Select Socket at index <p0>` |  | (paramètres non fiables) | — |  |
| 15 | 95 | Receive Binary to Append | `<objet>: Receive Binary, append to file <p0> (<p1> bytes)` |  | (paramètres non fiables) | — |  |
| 16 | 96 | Set Property | `<objet>: Set Property <p0> to <p1>` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Select Socket with Property | `<objet>: Select Socket with Property <p0> = <p1>` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Delete Socket | `<objet>: Delete Socket` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Port | `GetPort(` |  |  | — |  |
| 1 | 81 | Get Local IP | `GetLocalIP$(` |  |  | — |  |
| 2 | 82 | Get Remote IP | `GetRemoteIP$(` |  |  | — |  |
| 3 | 83 | Receive Text | `Recv$(` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Receive Text Line | `RecvLine$(` |  |  | — |  |
| 5 | 85 | Stats > Get Runtime | `StatsRuntime(` |  |  | — |  |
| 6 | 86 | Stats > Totals > Packets > Get Total Packet Count | `TotalPacketCount(` |  |  | — |  |
| 7 | 87 | Stats > Totals > Packets > Get Incoming Packet Count | `TotalInPacketCount(` |  |  | — |  |
| 8 | 88 | Stats > Totals > Packets > Get Outgoing Packet Count | `TotalOutPacketCount(` |  |  | — |  |
| 9 | 89 | Stats > Totals > Bytes > Get Total Byte Count | `TotalByteCount(` |  |  | — |  |
| 10 | 90 | Stats > Totals > Bytes > Get Incoming Byte Count | `TotalInByteCount(` |  |  | — |  |
| 11 | 91 | Stats > Totals > Bytes > Get Outgoing Byte Count | `TotalOutByteCount(` |  |  | — |  |
| 12 | 92 | Stats > Averages > Packet Size > Get Average Packet Size | `AvgPacketSize(` |  |  | — |  |
| 13 | 93 | Stats > Averages > Packet Size > Get Average Incoming Packet Size | `AvgInPacketSize(` |  |  | — |  |
| 14 | 94 | Stats > Averages > Packet Size > Get Average Outgoing Packet Size | `AvgOutPacketSize(` |  |  | — |  |
| 15 | 95 | Stats > Averages > Throughput > Get Average Throughput | `AvgThroughput(` |  |  | — |  |
| 16 | 96 | Stats > Averages > Throughput > Get Average Incoming Throughput | `AvgInThroughput(` |  |  | — |  |
| 17 | 97 | Stats > Averages > Throughput > Get Average Outgoing Throughput | `AvgOutThroughput(` |  |  | — |  |
| 18 | 98 | Stats > Maximums > Packet Size > Get Biggest Packet Size | `MaxPacketSize(` |  |  | — |  |
| 19 | 99 | Stats > Maximums > Packet Size > Get Biggest Incoming Packet Size | `MaxInPacketSize(` |  |  | — |  |
| 20 | 100 | Stats > Maximums > Packet Size > Get Biggest Outgoing Packet Size | `MaxOutPacketSize(` |  |  | — |  |
| 21 | 101 | Stats > Maximums > Throughput > Get Highest Throughput | `MaxThroughput(` |  |  | — |  |
| 22 | 102 | Stats > Maximums > Throughput > Get Highest Incoming Throughput | `MaxInThroughput(` |  |  | — |  |
| 23 | 103 | Stats > Maximums > Throughput > Get Highest Outgoing Throughput | `MaxOutThroughput(` |  |  | — |  |
| 24 | 104 | Stats > Minimums > Packet Size > Get Smallest Packet Size | `MinPacketSize(` |  |  | — |  |
| 25 | 105 | Stats > Minimums > Packet Size > Get Smallest Incoming Packet Size | `MinInPacketSize(` |  |  | — |  |
| 26 | 106 | Stats > Minimums > Packet Size > Get Smallest Outgoing Packet Size | `MinOutPacketSize(` |  |  | — |  |
| 27 | 107 | Stats > Minimums > Throughput > Get Lowest Throughput | `MinThroughput(` |  |  | — |  |
| 28 | 108 | Stats > Minimums > Throughput > Get Lowest Incoming Throughput | `MinInThroughput(` |  |  | — |  |
| 29 | 109 | Stats > Minimums > Throughput > Get Lowest Outgoing Throughput | `MinOutThroughput(` |  |  | — |  |
| 30 | 110 | Stats > Sampling > Current Throughput Reading > Get Current Throughput | `CurrentThroughput(` |  |  | — |  |
| 31 | 111 | Stats > Sampling > Current Throughput Reading > Get Current Incoming Throughput | `CurrentInThroughput(` |  |  | — |  |
| 32 | 112 | Stats > Sampling > Current Throughput Reading > Get Current Outgoing Throughput | `CurrentOutThroughput(` |  |  | — |  |
| 33 | 113 | Stats > Sampling > Last Throughput Reading > Get Last Throughput | `LastThroughput(` |  |  | — |  |
| 34 | 114 | Stats > Sampling > Last Throughput Reading > Get Last Incoming Throughput | `LastInThroughput(` |  |  | — |  |
| 35 | 115 | Stats > Sampling > Last Throughput Reading > Get Last Outgoing Throughput | `LastOutThroughput(` |  |  | — |  |
| 36 | 116 | Stats > Sampling > Last Packet Size > Get Last Packet Size | `LastPacketSize(` |  |  | — |  |
| 37 | 117 | Stats > Sampling > Last Packet Size > Get Last Incoming Packet Size | `LastInPacketSize(` |  |  | — |  |
| 38 | 118 | Stats > Sampling > Last Packet Size > Get Last Outgoing Packet Size | `LastOutPacketSize(` |  |  | — |  |
| 39 | 119 | Count Sockets | `CountSockets(` |  |  | — |  |
| 40 | 120 | Get Property | `Property$(` |  | (paramètres non fiables) | — |  |
