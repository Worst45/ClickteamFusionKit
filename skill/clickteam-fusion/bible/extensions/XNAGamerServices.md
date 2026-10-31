# Extension XNAGamerServices

- File: `XNAGamerServices.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Can player purchase game? | `Player can purchase game` |  | numeric expression “Enter the player index, 1, 2, 3 or 4” | — |  |
| 1 | -82 | Are Gamer Services connected? | `Gamer Services are connected` |  |  | — |  |
| 2 | -83 | Has player signed in? | `Player(s) has(ve) signed in` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connect | `Connect to Gamer Services` |  |  | — |  |
| 1 | 81 | Show Marketplace | `Show Marketplace for player <p0>` |  | numeric expression “Enter the player index, 1, 2, 3 or 4” | — |  |
| 2 | 82 | Sign in | `Sign in for <p0> panes, online <p1>` |  | numeric expression “Enter the number of players to sign in”; numeric expression “Enter 0 for local players (+ online), and 1 for online only” | — |  |
| 3 | 83 | Set presence | `Set presence of player #<p0> to <p1>` |  | numeric expression “Enter the player index, 1, 2, 3 or 4”; string expression “Enter one of the presence describers as listed in the object's documentation” | — |  |
| 4 | 84 | Set presence value | `Set presence value of player #0 to <p1>` |  | numeric expression “Enter the player index, 1, 2, 3 or 4”; numeric expression “Enter the value you wish to associate to the presence string” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of players signed in | `NSignedIn(` |  |  | — |  |
| 1 | 81 | Get player alias | `Alias$(` |  | number “Player index” → string | — |  |
| 2 | 82 | Get player presence | `Presence$(` |  | number “Player index” → string | — |  |
| 3 | 83 | Get player presence value | `PresenceValue(` |  | number “Player index” | — |  |
