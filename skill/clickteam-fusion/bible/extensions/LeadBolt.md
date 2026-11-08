# Extension LeadBolt

- File: `LeadBolt.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Deprecated ... > Display Ads > On Ad Progress | `<object>: Display Ad On Progress` |  |  | — |  |
| 1 | -82 | Deprecated ... > Display Ads > On Ad Loaded | `<object>: Display Ad Loaded` |  |  | — |  |
| 2 | -83 | Deprecated ... > Display Ads > On Ad Failed | `<object>: Display Ad Failed` |  |  | — |  |
| 3 | -84 | Deprecated ... > Display Ads > On Ad Clicked | `<object>: Display Ad Clicked` |  |  | — |  |
| 4 | -85 | Deprecated ... > Display Ads > On Ad Closed | `<object>: Display Ad Closed` |  |  | — |  |
| 5 | -86 | Deprecated ... > Display Ads > On Ad Completed | `<object>: Display Ad Completed` |  |  | — |  |
| 6 | -87 | Deprecated ... > Display Ads > On Ad Already Completed | `<object>: Display Ad Already Completed` |  |  | — |  |
| 7 | -88 | Deprecated ... > Display Ads > Display Ad Paused | `<object>: Display Ad Paused` |  |  | — |  |
| 8 | -89 | Deprecated ... > Display Ads > Display Ad Resumed | `<object>: Display Ad Resumed` |  |  | — |  |
| 9 | -90 | Deprecated ... > Audio Ad > On Ad Progress | `<object>: Audio Ad On Progress` |  |  | — |  |
| 10 | -91 | Deprecated ... > Audio Ad > On Ad Loaded | `<object>: Audio Ad Loaded` |  |  | — |  |
| 11 | -92 | Deprecated ... > Audio Ad > On Ad Finished | `<object>: Audio Ad Finished` |  |  | — |  |
| 12 | -93 | Deprecated ... > Audio Ad > On Ad Failed | `<object>: Audio Ad Failed` |  |  | — |  |
| 13 | -94 | Deprecated ... > Audio Ad > On Ad Closed | `<object>: Audio Ad Closed` |  |  | — |  |
| 14 | -95 | Deprecated ... > Audio Ad > On Ad Clicked | `<object>: Audio Ad Clicked` |  |  | — |  |
| 17 | -98 | On Activity Resumed | `<object>: On Activity Resumed` |  |  | — |  |
| 18 | -99 | On Ads Error | `<object>: On Any Ad Error` |  |  | — |  |
| 19 | -100 | Deprecated ... > Display Ads > On Ad Cached | `<object>: Display Ad Cached` |  |  | — |  |
| 20 | -101 | Deprecated ... > Audio Ad > On Ad Cached | `<object>: Audio Ad Cached` |  |  | — |  |
| 21 | -102 | Regular Ads > On Ad Loaded | `<object>: On Regular Ad Loaded with location <p0>` |  | string expression | — |  |
| 22 | -103 | Regular Ads > On Ad Failed | `<object>: On Regualr Ad Failed with location <p0>` |  | string expression | — |  |
| 23 | -104 | Regular Ads > On Ad Clicked | `<object>: On Regular Ad Clicked with location <p0>` |  | string expression | — |  |
| 24 | -105 | Regular Ads > On Ad Closed | `<object>: On Regular Ad Closed with location <p0>` |  | string expression | — |  |
| 25 | -106 | Regular Ads > On Ad Cached | `<object>: On Regular Ad Cached with location <p0>` |  | string expression | — |  |
| 26 | -107 | Video Ads > On Video Ad Loaded | `<object>: On Video Ad Loaded` |  |  | — |  |
| 27 | -108 | Video Ads > On Video Ad Failed | `<object>: On Video Ad Failed` |  |  | — |  |
| 28 | -109 | Video Ads > On Video Ad Clicked | `<object>: On Video Ad Clicked` |  |  | — |  |
| 29 | -110 | Video Ads > On Video Ad Closed | `<object>: On Video Ad Closed` |  |  | — |  |
| 30 | -111 | Video Ads > On Video Ad Cached | `<object>: On Video Ad Cached` |  |  | — |  |
| 31 | -112 | Video Ads > On Video Ad Watched | `<object>: On Video Ad Complete` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Deprecated ... > Display Ad > Set Banner Size to use | `Set Banner size to <p0>` |  | numeric expression “Size Index (-1:Auto, 0:Standard, 1:Medium, 2:Large, 3:XLarge)” | — |  |
| 1 | 81 | Deprecated ... > Display Ad > Set Additional Docking Margin | `Set Additional Docking Margin to <p0>` |  | numeric expression “Pixels value from it designated position” | — |  |
| 2 | 82 | Deprecated ... > Display Ad > Set Progress Interval | `Set Display Interval Progress to <p0>` |  | numeric expression “Seconds Interval until loaded” | — |  |
| 3 | 83 | Deprecated ... > Display Ad > Load Ad | `Load a Display Ad` |  |  | — |  |
| 4 | 84 | Deprecated ... > Display Ad > Pause Ad | `Pause Display Ad` |  |  | — |  |
| 5 | 85 | Deprecated ... > Display Ad > Resume Ad | `Resume Display Ad` |  |  | — |  |
| 6 | 86 | Deprecated ... > Display Ad > Destroy Ad | `Destroy Display Ad` |  |  | — |  |
| 7 | 87 | Deprecated ... > Audio Ad > Set Progress Interval | `Set Audio Interval Progress to <p0>` |  | numeric expression “Seconds Interval until loaded” | — |  |
| 8 | 88 | Deprecated ... > Audio Ad > Load Audio Ad | `Load an Audio Ad` |  |  | — |  |
| 13 | 93 | Deprecated ... > Display Ad > Load Ad to Cache | `Load a Display Ad to cache` |  |  | — |  |
| 14 | 94 | Load Ad | `Load Ad with location <p0>` |  | string expression “Location string” | — |  |
| 15 | 95 | Cache Ad | `Cache Ad with location <p0>` |  | string expression “Location string” | — |  |
| 16 | 96 | Load Video Ad | `Load Video Ad` |  |  | — |  |
| 17 | 97 | Cache Video Ad | `Cache Video Ad` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Error | `Error(` |  |  | — |  |
| 1 | 81 | Deprecated ... > Last Banner Size | `LastBannerSize(` |  |  | — |  |
| 3 | 83 | Last Location | `LastLocation$(` |  | → string | — |  |
