# Extension AdvPathMov

- File: `AdvPathMov.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is moving ? | `<object>Is moving ?` |  |  |
| 1 | -82 | Are nodes connected ? | `<object> Nodes <p0> and <p1> are connected?` |  | numeric expression “Connected from Node ID”; numeric expression “Connected to Node ID” |
| 2 | -83 | Is stopped ? | `<object>Is stopping?` |  |  |
| 3 | -84 | Has reached the end of the journey? | `<object>Has reached the end of the journey?` |  |  |
| 4 | -85 | Has touched a new node ? | `<object>Has touched a new node ?` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Path Control > Create new path node | `Create new path node at <p0>, <p1>` |  | numeric expression “X position”; numeric expression “Y position” |
| 1 | 81 | Path Control > Remove path node | `Remove path node of ID: <p0>` |  | numeric expression “node ID” |
| 2 | 82 | Journey Control  > Clear Journey | `Clear Journey ( type <p0> )` |  | numeric expression “0 = Remove all nodes 1 = Keep Current node” |
| 3 | 83 | Path Control > Connect nodes | `Connect node ID <p0> to ID <p1> with speed <p2>` |  | numeric expression “...from node ID”; numeric expression “...to node ID”; numeric expression “Speed ( 1 : normal, 0.5 : slow, 2 : fast )” |
| 4 | 84 | Journey Control  > Add path node | `Add path node ID <p0> to journey` |  | numeric expression “Node ID” |
| 5 | 85 | Journey Control  > Insert path node | `Insert path node ID <p0> in the journey at <p1>` |  | numeric expression “Node ID”; numeric expression “Position in journey” |
| 6 | 86 | Journey Control  > Remove last path node | `Remove path node ID <p0> from journey` |  |  |
| 7 | 87 | Journey Control  > Delete path node | `Delete path node ID <p0> from journey` |  | numeric expression “Node ID” |
| 8 | 88 | Journey Control  > Find Journey to node | `Find Journey to node ID <p0>` |  | numeric expression “Node ID” |
| 9 | 89 | Files > Load Path | `Load Path from :  <p0>` |  | string expression “File Directory” |
| 10 | 90 | Files > Save Path | `Save Path to :  <p0>` |  | string expression “File Directory” |
| 11 | 91 | Movement > Start | `Start Movement` |  |  |
| 12 | 92 | Movement > Stop | `Stop Movement` |  |  |
| 13 | 93 | Movement > Pause | `Pause Movement` |  |  |
| 14 | 94 | Movement > Object Settings > Set Speed | `Set Object speed to <p0>` |  | numeric expression “Object Speed ( 1: normal 2: fast 0.5: slow” |
| 15 | 95 | Movement > Set Object | `Set Object to <p0>` |  | object “Select Object” |
| 16 | 96 | Movement > Object Settings > Set X Offset | `Set object X offset to <p0>` |  | numeric expression “X Pixels” |
| 17 | 97 | Movement > Object Settings > Set Y Offset | `Set Object Y offset to <p0>` |  | numeric expression “Y Pixels” |
| 18 | 98 | Movement > Auto Step > Enable | `Enable Autostep` |  |  |
| 19 | 99 | Movement > Auto Step > Disable | `Disable Autostep` |  |  |
| 20 | 100 | Movement > Auto Step > Force move x steps | `Force-Move object by <p0> step/s` |  | numeric expression “Number of steps” |
| 21 | 101 | Path Control > Set Node X | `Set Node <p0> X pos to <p1>` |  | numeric expression “Node ID”; numeric expression “X Position” |
| 22 | 102 | Path Control > Set Node Y | `Set Node <p0> Y pos to <p1>` |  | numeric expression “Node ID”; numeric expression “Y Position” |
| 23 | 103 | Path Control > Disconnect nodes | `Disconnect Nodes <p0>, <p1>` |  | numeric expression “...from node ID”; numeric expression “...to node ID” |
| 24 | 104 | Path Control > Clear path | `Clear Path` |  |  |
| 25 | 105 | Movement > Object Flags > Change X | `Auto Change X flag = <p0>` |  | numeric expression “1 = Yes 0 = No” |
| 26 | 106 | Movement > Object Flags > Change Y | `Auto Change Y flag = <p0>` |  | numeric expression “1 = Yes 0 = No” |
| 27 | 107 | Movement > Object Flags > Change Direction | `Auto Change Direction flag = <p0>` |  | numeric expression “1 = Yes 0 = No” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Nodes > Find closest node from co-ordinates | `FindNode(` |  | number; number; number |
| 1 | 81 | Nodes > Number of nodes | `CountNodes(` |  |  |
| 2 | 82 | Journey > Get Node ID from Journey | `GetNodeIDfromJourney(` |  | number |
| 3 | 83 | Journey > Number of nodes in the journey | `CountJourneyNodes(` |  |  |
| 4 | 84 | Get Current X | `⡘` |  |  |
| 5 | 85 | Get Current Y | `⡙` |  |  |
| 6 | 86 | Settings > Get Speed | `Speed(` |  |  |
| 7 | 87 | Nodes > Get Distance | `NodeDistance(` |  | number; number |
| 8 | 88 | Nodes > Get X | `NodeX(` |  | number |
| 9 | 89 | Nodes > Get Y | `NodeY(` |  | number |
| 11 | 91 | Settings > Get X Offset | `Xoffset(` |  |  |
| 12 | 92 | Settings > Get Y Offset | `Yoffset(` |  |  |
| 13 | 93 | Get Current Angle ( North, clockwise ) | `Angle(` |  |  |
| 14 | 94 | Get Current Direction ( 0 to 32 ) | `Direction(` |  |  |
| 15 | 95 | Nodes > Get connection | `GetConnection(` |  | number; number |
| 16 | 96 | Nodes > Get number of connections | `GetNbrConnects(` |  | number |
| 17 | 97 | Nodes > Get speed between nodes | `GetSpeedBtwnNodes(` |  | number; number |
| 18 | 98 | Flags > Auto Change X | `AutoXbool(` |  |  |
| 19 | 99 | Flags > Auto Change Y | `AutoYbool(` |  |  |
| 20 | 100 | Flags > Auto Change Direction | `AutoDirBool(` |  |  |
