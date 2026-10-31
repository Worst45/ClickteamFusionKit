# Extension MMKRandomMultiPool

- File: `MMKRandomMultiPool.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 1 | -82 | Pool conditions > Pool is empty | `<object>: Pool <p0> empty` |  | string expression “Pool ID” | — |  |
| 2 | -83 | Generated numbers > On number generated | `<object>: On number Generated from pool <p0>` |  | string expression “Pool ID” | — |  |
| 3 | -84 | Loop > On number iterated | `<object>: On number iterated in pool <p0>` |  | string expression “Pool ID” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Setup > Fill Pool | `Fill pool <p0>` |  | string expression “Pool ID” | — |  |
| 1 | 81 | Pool operations > Generate a number | `Generate number from pool <p0>` |  | string expression “Pool ID” | — |  |
| 2 | 82 | Pool operations > Add a number | `Add number <p1> to pool <p0>` |  | string expression “Pool ID”; numeric expression “Number to add” | — |  |
| 3 | 83 | Pool operations > Remove all occurrences of number | `Remove all occurrences of number <p1> from pool <p0>` |  | string expression “Pool ID”; numeric expression “Number to remove” | — |  |
| 4 | 84 | Setup > Load pool from string | `Load pool <p0> from string <p1>` |  | string expression “Pool ID”; string expression “Values” | — |  |
| 5 | 85 | Setup > Files > Load pool from file as list | `Load pool <p0> from file <p1>` |  | string expression “Pool ID”; string expression “Filename” | — |  |
| 6 | 86 | Setup > Files > Save pool to file as list | `Save pool <p0> to file <p1>` |  | string expression “Pool ID”; string expression “Filename” | — |  |
| 7 | 87 | Setup > Set pool limits | `Set Limits of pool <p0> to (<p1>-<p2>)` |  | string expression “Pool ID”; numeric expression “Min”; numeric expression “Max” | — |  |
| 8 | 88 | Setup > Set manual seed | `Set seed for pool <p0> to <p1>` |  | string expression “Pool ID”; numeric expression “Seed value” | — |  |
| 9 | 89 | Pool operations > Shuffle (Randomize seed) | `Randomize seed for pool <p0>` |  | string expression “Pool ID” | — |  |
| 10 | 90 | Pool operations > Loops > Iterate over all numbers in pool | `Iterate over all numbers in pool <p0>` |  | string expression “Pool ID” | — |  |
| 11 | 91 | Pool operations > Loops > Iterate over all utilized numbers in pool | `Iterate over all utilized number of pool <p0>` |  | string expression “Pool ID” | — |  |
| 12 | 92 | Setup > Files > Load pool from file as string | `Load pool <p0> from file <p1> as string` |  | string expression “Pool ID”; string expression “Filename” | — |  |
| 13 | 93 | Setup > Files > Save pool to file as string | `Save pool <p0> to file <p1> as string with delimeter <p2>` |  | string expression “Pool ID”; string expression “Filename”; string expression “Delimiter” | — |  |
| 14 | 94 | Pool operations > Sort | `Sort pool <p0> [<p1>] (0:Dsc, 1:Asc) [<p2>] (0:Pool, 1:Utilized, 2:Both)` |  | string expression “Pool ID”; numeric expression “Order (0:Dsc, 1:Asc)”; numeric expression “What to sort (0:Pool, 1:Utilized, 2: Both)” | — |  |
| 15 | 95 | Setup > Clear Pool | `Clear pool <p0>` |  | string expression “Pool ID” | — |  |
| 16 | 96 | Setup > Load pool from delimited string (slower) | `Load pool <p0> from delimited string <p1>` |  | string expression “Pool ID”; string expression “Values”; string expression “List of Delimiters” | — |  |
| 17 | 97 | Setup > Remove All Pools | `Delete all pools` |  |  | — |  |
| 18 | 98 | Pool operations > Remove occurrences of number and trigger | `Remove all occurrences of number <p1> from pool <p0> and trigger generation` |  | string expression “Pool ID”; numeric expression “Number to remove” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Generated numbers > Get generated number | `Last Generated Number(` |  | string “Pool ID” | — |  |
| 1 | 81 | Pool > Get number of > Numbers remaining in pool | `Numbers in pool(` |  | string “Pool ID” | — |  |
| 2 | 82 | Loops > Get iterated number | `Iteration value(` |  |  | — |  |
| 3 | 83 | Pool > Get number of > Numbers utilized from pool | `Number of Numbers utilized(` |  | string “Pool ID” | — |  |
| 4 | 84 | Generated numbers > Get and use new generated number | `Fast Generate Number(` |  | string “Pool ID” | — |  |
| 5 | 85 | Pool > Get minimum of pool | `Get Min of Pool(` |  | string “Pool ID” | — |  |
| 6 | 86 | Pool > Get maximum of pool | `Get Max of Pool(` |  | string “Pool ID” | — |  |
| 7 | 87 | Pool > Get as string > Pool numbers | `Get Pool Numbers$(` |  | string “Pool ID”; string “Delimiter” → string | — |  |
| 8 | 88 | Pool > Get as string > Pool utilized numbers | `Get Utilized Numbers$(` |  | string “Pool ID”; string “Delimiter” → string | — |  |
| 9 | 89 | Pool > Get seed of pool | `Get seed of pool(` |  | string “Pool ID” → string | — |  |
