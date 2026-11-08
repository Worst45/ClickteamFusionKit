# Extension ChartBoost

- File: `ChartBoost.mfx` — installed with Fusion
- Exporters: available in Android; **not in HTML5** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Interstitial > Interstitial Success | `<object>: On Interstitial located at <p0> Success` |  | string expression “Location Name String” |
| 1 | -82 | Interstitial > Interstitial Failed | `<object>: On Interstitial located at <p0> Failed` |  | string expression “Location Name String” |
| 2 | -83 | Interstitial > Interstitial Cached | `<object>: On Interstitial located at <p0> Cached` |  | string expression “Location Name String” |
| 3 | -84 | Interstitial > Interstitial Dismissed | `<object>: On Interstitial located at <p0> Dismissed` |  | string expression “Location Name String” |
| 4 | -85 | Interstitial > Interstitial Closed | `<object>: On Interstitial located at <p0> Closed` |  | string expression “Location Name String” |
| 5 | -86 | Interstitial > Interstitial Clicked | `<object>: On Interstitial located at <p0> Clicked` |  | string expression “Location Name String” |
| 6 | -87 | Deprecated ... > More Apps > More Apps Success | `<object>: On More Apps located at <p0> Success` |  | string expression “Location Name String” |
| 7 | -88 | Deprecated ... > More Apps > More Apps Failed | `<object>: On More Apps located at <p0> Failed` |  | string expression “Location Name String” |
| 8 | -89 | Deprecated ... > More Apps > More Apps Cached | `<object>: On More Apps located at <p0> Cached` |  | string expression “Location Name String” |
| 9 | -90 | Deprecated ... > More Apps > More Apps Dismissed | `<object>: On More Apps located at <p0> Dismissed` |  | string expression “Location Name String” |
| 10 | -91 | Deprecated ... > More Apps > More Apps Closed | `<object>: On More Apps located at <p0> Closed` |  | string expression “Location Name String” |
| 11 | -92 | Deprecated ... > More Apps > More Apps Clicked | `<object>: On More Apps located at <p0> Clicked` |  | string expression “Location Name String” |
| 12 | -93 | On Activity Resumed | `<object>: On Activity Resumed` |  |  |
| 13 | -94 | Rewarded Video > Rewarded Video Success | `<object>: On Rewarded Video located at <p0> Success` |  | string expression “Location Name String” |
| 14 | -95 | Rewarded Video > Rewarded Video Failed | `<object>: On Rewarded Video located at <p0> Failed` |  | string expression “Location Name String” |
| 15 | -96 | Rewarded Video > Rewarded Video Cached | `<object>: On Rewarded Video located at <p0> Cached` |  | string expression “Location Name String” |
| 16 | -97 | Rewarded Video > Rewarded Video Dismissed | `<object>: On Rewarded Video located at <p0> Dismissed` |  | string expression “Location Name String” |
| 17 | -98 | Rewarded Video > Rewarded Video Completed | `<object>: On Rewarded Video located at <p0> Complete` |  | string expression “Location Name String” |
| 18 | -99 | Rewarded Video > Rewarded Video Closed | `<object>: On Rewarded Video located at <p0> Closed` |  | string expression “Location Name String” |
| 19 | -100 | Rewarded Video > Rewarded Video Clicked | `<object>: On Rewarded Video located at <p0> Clicked` |  | string expression “Location Name String” |
| 20 | -101 | Rewarded Video > Rewarded Video Will Play | `<object>: On Rewarded Video located at <p0> will Play` |  | string expression “Location Name String” |
| 21 | -102 | Deprecated ... > InPlay > InPlay Failed | `<object>: On In Play located at <p0> Failed` |  | string expression “Location Name String” |
| 22 | -103 | Deprecated ... > InPlay > InPlay Cached | `<object>: On In Play located at <p0> Cached` |  | string expression “Location Name String” |
| 23 | -104 | Deprecated ... > On Pause Click Confirmation | `<object>: On Pause Click Confirmation` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Interstitial > Show Interstitial | `Show Interstitial with location <p0>` |  | string expression “Location Name String” |
| 1 | 81 | Interstitial > Cache Interstitial | `Cache Interstitial with location <p0>` |  | string expression “Location Name String” |
| 2 | 82 | More Apps > Show More Apps | `Show More Apps with location <p0>` |  | string expression “Location Name String” |
| 3 | 83 | More Apps > Cache More Apps | `Cache More Apps with location <p0>` |  | string expression “Location Name String” |
| 4 | 84 | Deprecated ... > Clear Preload data | `Clear Preload data` |  |  |
| 5 | 85 | Deprecated ... > Track events > Reset Track data | `<object>: Reset Track data` |  |  |
| 6 | 86 | Deprecated ... > Track events > Add an Integer data | `<object>: Add Integer <p0> with name <p1>` |  | numeric expression “Integer Value”; string expression “String Name” |
| 7 | 87 | Deprecated ... > Track events > Add a String data | `<object>: Add String <p0> with name <p1>` |  | string expression “String Value”; string expression “String Name” |
| 8 | 88 | Deprecated ... > Track events > Track an Event | `<object>: Track Event name <p0> and Id:<p1>` |  | string expression “Event  Name”; numeric expression “Id number” |
| 9 | 89 | Deprecated ... > Record Purchase > Reset Purchase data | `<object>: Reset Purchase data` |  |  |
| 10 | 90 | Deprecated ... > Record Purchase > Add an Integer data | `<object>: Add Integer <p0> with name <p1>` |  | numeric expression “Integer Value”; string expression “String Name” |
| 11 | 91 | Deprecated ... > Record Purchase > Add a String data | `<object>: Add String <p0> with name <p1>` |  | string expression “String Value”; string expression “String Name” |
| 12 | 92 | Deprecated ... > Record Purchase > Record a Purchase | `<object>: Record Purchase to sku: <p0>, title: <p1>, price: <p2>, currency: <p3> and quantity: <p4>` |  | string expression “Sku Id String”; string expression “Sku Title String”; numeric expression “Price value”; string expression “Currency symbol”; numeric expression “Quantities of sku to purchase” |
| 13 | 93 | Flags > Show No Interstitial until second session | `Show No Intertistial until second session to <p0>` |  | numeric expression “Value (0: No , 1: Yes, default is no)” |
| 14 | 94 | Flags > Display Interstitial | `Display Intertistial to <p0>` |  | numeric expression “Value (0: No , 1: Yes, default is yes)” |
| 15 | 95 | Flags > Stop Request Interstitial | `Request Intertistial to <p0>` |  | numeric expression “Value (0: No , 1: Yes, default is yes)” |
| 16 | 96 | Flags > Display More Apps | `Display More Apps to <p0>` |  | numeric expression “Value (0: No , 1: Yes, default is yes)” |
| 17 | 97 | Flags > Stop Requesting More Apps | `Request More Apps to <p0>` |  | numeric expression “Value (0: No , 1: Yes, default is yes)” |
| 18 | 98 | Rewarded Video > Show Rewarded video | `Show rewarded video with location <p0>` |  | string expression “Location Name String” |
| 19 | 99 | Rewarded Video > Cache Rewarded Video | `Cache rewarded video with location <p0>` |  | string expression “Location Name String” |
| 20 | 100 | InPlay > Call InPlay | `Call InPlay with location <p0>` |  | string expression “Location Name String” |
| 21 | 101 | InPlay > Cache InPlay | `Cache InPlay with location <p0>` |  | string expression “Location Name String” |
| 22 | 102 | Flags > Display Rewarded video | `Display Rewarded Video to <p0>` |  | numeric expression “Value (0: No , 1: Yes, default is yes)” |
| 23 | 103 | Deprecated ... > Pause Click Confirmation | `Pause Click Confirmation to <p0>` |  | numeric expression “Value (0: No , 1: Yes, default is no)” |
| 24 | 104 | Dismiss Ads | `Dismiss Ads` |  |  |
| 25 | 105 | Set GDPR Collection Mode | `Set GDPR collection mode to <p0>` |  | numeric expression “GDPR Mode (0:Restrict, 1:Allowed)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Error Value | `Error(` |  |  |
| 1 | 81 | Last Cache Location | `LastCacheLocation$(` |  | → string |
| 2 | 82 | Display Interstitial Flag | `DisplayIntersFlag(` |  |  |
| 3 | 83 | Request Interstitial Flag | `RequestIntersFlag(` |  |  |
| 4 | 84 | Display More Apps Flag | `DisplayMoreAppsFlag(` |  |  |
| 5 | 85 | Request More Apps Flag | `RequestMoreAppsFlag(` |  |  |
| 6 | 86 | Get Rewarded Coins | `GetRewardedCoins(` |  |  |
| 7 | 87 | Display Rewarded Video Flag | `DisplayRewVideoFlag(` |  |  |
| 8 | 88 | Error String | `Error$(` |  | → string |
