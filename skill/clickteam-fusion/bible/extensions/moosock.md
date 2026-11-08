# Extension moosock

- File: `moosock.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Connect | `<object>: On Connect` |  |  |
| 1 | -82 | On Disconnect | `<object>: On Disconnect` |  |  |
| 2 | -83 | On Received | `<object>: On Received` |  |  |
| 3 | -84 | On Can Accept | `<object>: On Can Accept` |  |  |
| 4 | -85 | Is Connected | `<object>: Is Connected` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Accept | `<object>: Accept` |  |  |
| 1 | 81 | Connect | `<object>: Connect to <p0> on port <p1>` |  | (unreliable parameters) |
| 2 | 82 | Disconnect | `<object>: Disconnect` |  |  |
| 3 | 83 | Listen | `<object>: Listen on port <p0>` |  | (unreliable parameters) |
| 4 | 84 | Send Text | `<object>: Send Text <p0>` |  | (unreliable parameters) |
| 5 | 85 | Send Text Line | `<object>: Send Text Line <p0>` |  | (unreliable parameters) |
| 6 | 86 | Send Binary | `<object>: Send Binary from file <p0>` |  | (unreliable parameters) |
| 7 | 87 | Send Binary Line | `<object>: Send Binary Line from file <p0>` |  | (unreliable parameters) |
| 8 | 88 | Receive Binary to Create | `<object>: Receive Binary, create file <p0> (<p1> bytes)` |  | (unreliable parameters) |
| 9 | 89 | Receive Binary Line | `<object>: Receive Binary Line into file <p0>` |  | (unreliable parameters) |
| 10 | 90 | Set Mode > Blocking | `<object>: Use Blocking Mode` |  |  |
| 11 | 91 | Set Mode > Non-Blocking | `<object>: Use Non-Blocking Mode` |  |  |
| 12 | 92 | Set Timeout (ms) | `<object>: Set Timeout to <p0> milliseconds` |  | (unreliable parameters) |
| 13 | 93 | Select Socket | `<object>: Select Socket at index <p0>` |  | (unreliable parameters) |
| 15 | 95 | Receive Binary to Append | `<object>: Receive Binary, append to file <p0> (<p1> bytes)` |  | (unreliable parameters) |
| 16 | 96 | Set Property | `<object>: Set Property <p0> to <p1>` |  | (unreliable parameters) |
| 17 | 97 | Select Socket with Property | `<object>: Select Socket with Property <p0> = <p1>` |  | (unreliable parameters) |
| 18 | 98 | Delete Socket | `<object>: Delete Socket` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Port | `GetPort(` |  |  |
| 1 | 81 | Get Local IP | `GetLocalIP$(` |  |  |
| 2 | 82 | Get Remote IP | `GetRemoteIP$(` |  |  |
| 3 | 83 | Receive Text | `Recv$(` |  | (unreliable parameters) |
| 4 | 84 | Receive Text Line | `RecvLine$(` |  |  |
| 5 | 85 | Stats > Get Runtime | `StatsRuntime(` |  |  |
| 6 | 86 | Stats > Totals > Packets > Get Total Packet Count | `TotalPacketCount(` |  |  |
| 7 | 87 | Stats > Totals > Packets > Get Incoming Packet Count | `TotalInPacketCount(` |  |  |
| 8 | 88 | Stats > Totals > Packets > Get Outgoing Packet Count | `TotalOutPacketCount(` |  |  |
| 9 | 89 | Stats > Totals > Bytes > Get Total Byte Count | `TotalByteCount(` |  |  |
| 10 | 90 | Stats > Totals > Bytes > Get Incoming Byte Count | `TotalInByteCount(` |  |  |
| 11 | 91 | Stats > Totals > Bytes > Get Outgoing Byte Count | `TotalOutByteCount(` |  |  |
| 12 | 92 | Stats > Averages > Packet Size > Get Average Packet Size | `AvgPacketSize(` |  |  |
| 13 | 93 | Stats > Averages > Packet Size > Get Average Incoming Packet Size | `AvgInPacketSize(` |  |  |
| 14 | 94 | Stats > Averages > Packet Size > Get Average Outgoing Packet Size | `AvgOutPacketSize(` |  |  |
| 15 | 95 | Stats > Averages > Throughput > Get Average Throughput | `AvgThroughput(` |  |  |
| 16 | 96 | Stats > Averages > Throughput > Get Average Incoming Throughput | `AvgInThroughput(` |  |  |
| 17 | 97 | Stats > Averages > Throughput > Get Average Outgoing Throughput | `AvgOutThroughput(` |  |  |
| 18 | 98 | Stats > Maximums > Packet Size > Get Biggest Packet Size | `MaxPacketSize(` |  |  |
| 19 | 99 | Stats > Maximums > Packet Size > Get Biggest Incoming Packet Size | `MaxInPacketSize(` |  |  |
| 20 | 100 | Stats > Maximums > Packet Size > Get Biggest Outgoing Packet Size | `MaxOutPacketSize(` |  |  |
| 21 | 101 | Stats > Maximums > Throughput > Get Highest Throughput | `MaxThroughput(` |  |  |
| 22 | 102 | Stats > Maximums > Throughput > Get Highest Incoming Throughput | `MaxInThroughput(` |  |  |
| 23 | 103 | Stats > Maximums > Throughput > Get Highest Outgoing Throughput | `MaxOutThroughput(` |  |  |
| 24 | 104 | Stats > Minimums > Packet Size > Get Smallest Packet Size | `MinPacketSize(` |  |  |
| 25 | 105 | Stats > Minimums > Packet Size > Get Smallest Incoming Packet Size | `MinInPacketSize(` |  |  |
| 26 | 106 | Stats > Minimums > Packet Size > Get Smallest Outgoing Packet Size | `MinOutPacketSize(` |  |  |
| 27 | 107 | Stats > Minimums > Throughput > Get Lowest Throughput | `MinThroughput(` |  |  |
| 28 | 108 | Stats > Minimums > Throughput > Get Lowest Incoming Throughput | `MinInThroughput(` |  |  |
| 29 | 109 | Stats > Minimums > Throughput > Get Lowest Outgoing Throughput | `MinOutThroughput(` |  |  |
| 30 | 110 | Stats > Sampling > Current Throughput Reading > Get Current Throughput | `CurrentThroughput(` |  |  |
| 31 | 111 | Stats > Sampling > Current Throughput Reading > Get Current Incoming Throughput | `CurrentInThroughput(` |  |  |
| 32 | 112 | Stats > Sampling > Current Throughput Reading > Get Current Outgoing Throughput | `CurrentOutThroughput(` |  |  |
| 33 | 113 | Stats > Sampling > Last Throughput Reading > Get Last Throughput | `LastThroughput(` |  |  |
| 34 | 114 | Stats > Sampling > Last Throughput Reading > Get Last Incoming Throughput | `LastInThroughput(` |  |  |
| 35 | 115 | Stats > Sampling > Last Throughput Reading > Get Last Outgoing Throughput | `LastOutThroughput(` |  |  |
| 36 | 116 | Stats > Sampling > Last Packet Size > Get Last Packet Size | `LastPacketSize(` |  |  |
| 37 | 117 | Stats > Sampling > Last Packet Size > Get Last Incoming Packet Size | `LastInPacketSize(` |  |  |
| 38 | 118 | Stats > Sampling > Last Packet Size > Get Last Outgoing Packet Size | `LastOutPacketSize(` |  |  |
| 39 | 119 | Count Sockets | `CountSockets(` |  |  |
| 40 | 120 | Get Property | `Property$(` |  | (unreliable parameters) |
