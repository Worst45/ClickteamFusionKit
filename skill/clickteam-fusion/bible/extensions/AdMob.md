# Extension AdMob

- File: `AdMob.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Banners / Interstitials > On Received Ad | `<object>: On Received Ad` |  |  | — |  |
| 1 | -82 | Banners / Interstitials > On Failed Ad | `<object>: On Failed Ad` |  |  | — |  |
| 2 | -83 | Banners / Interstitials > On Presented Screen | `<object>: On Presented Screen` |  |  | — |  |
| 3 | -84 | Banners / Interstitials > On Dismissed Screen | `<object>: On Dismissed Screen` |  |  | — |  |
| 4 | -85 | Banners / Interstitials > On Leave Application | `<object>: On Leave Application` |  |  | — |  |
| 5 | -86 | Banners / Interstitials > Interstitial is Ready | `<object>: is Interstitial Ready?` |  |  | — |  |
| 6 | -87 | On Return from Ad | `<object>: On Return from Ad` |  |  | — |  |
| 7 | -88 | On Error | `<object>: On Error` |  |  | — |  |
| 8 | -89 | Rewarded Video > On Video Received | `<object>: On Video Received` |  |  | — |  |
| 9 | -90 | Rewarded Video > On Video Failed | `<object>: On Video Failed` |  |  | — |  |
| 10 | -91 | Rewarded Video > On Video Opened | `<object>: On Video Shown` |  |  | — |  |
| 11 | -92 | Rewarded Video > On Video Dismissed | `<object>: On Video Dismissed` |  |  | — |  |
| 12 | -93 | Rewarded Video > On Video Leave Application | `<object>: On Video Leave App` |  |  | — |  |
| 13 | -94 | Rewarded Video > Is Video Loaded? | `<object>: Is Video loaded?` |  |  | — |  |
| 14 | -95 | Rewarded Video > On Start Playing Video | `<object>: On Video Started` |  |  | — |  |
| 15 | -96 | Rewarded Video > On Reward available | `<object>: On Rewarded Video` |  |  | — |  |
| 16 | -97 | Banners / Interstitials > On Reward available | `<object>: On Rewarded Interstitial` |  |  | — |  |
| 17 | -98 | Mobile Ads Initialised? | `Is <object> Mobile initialized?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Regular Banner > Set AdMob Size | `Set AdMob size to <p0>` |  | numeric expression “AdMob Size (0:Standard, 1:Medium, 2:Full, 3:Leaderboard, 4:Smart, 5:Adaptive)” | — |  |
| 1 | 81 | Regular Banner > Set AdMob Position | `Set AdMob position to <p0>` |  | numeric expression “AdMob Position (0:Bottom, 1:Top, 2:Center)” | — |  |
| 2 | 82 | Regular Banner > Set AdMob ZOrder | `Set AdMob zorder to <p0>` |  | numeric expression “AdMob zOrder (0:Above, 1:Behind)” | — |  |
| 4 | 84 | Regular Banner > Show Ad Banner | `Show Ad Banner` |  |  | — |  |
| 5 | 85 | Regular Banner > Destroy Ad Banner | `Destroy Ad Banner` |  |  | — |  |
| 6 | 86 | Interstitial > Make Interstitial Request | `Make Interstitial Request` |  |  | — |  |
| 7 | 87 | Interstitial > Show Interstitial | `Show Interstitial` |  |  | — |  |
| 8 | 88 | Interstitial > Destroy Interstitial | `Destroy Interstitial` |  |  | — |  |
| 9 | 89 | Targeting > Set Gender | `Set Gender to <p0>` |  | numeric expression “Gender (0: Unknown, 1: Male, 1: Female)” | — |  |
| 10 | 90 | Targeting > Set Location | `Set Location to Latitude <p0> and Longitude <p1>` |  | numeric expression “Latitude”; numeric expression “Longitude” | — |  |
| 11 | 91 | Targeting > Set Birthday | `Set Birthday to <p0>` |  | string expression “Birthday String (e.g.: 20100122)” | — |  |
| 12 | 92 | Config adMob > Set AdMob Child-directed treatment | `Set AdMob child-directed treatment to <p0>` |  | numeric expression “Tag Child-directed Treatment (-1:Unspecified, 0:No, 1:Yes)” | — |  |
| 13 | 93 | Config adMob > Set AdMob Test Devices | `Set AdMob test devices to <p0>` |  | string expression “Test devices (separated by commas)” | — |  |
| 14 | 94 | Config adMob > Set AdMob Background Color | `Set AdMob background color to <p0>` |  | color “Background Color” | — |  |
| 15 | 95 | Config adMob > Set AdMob Border Color | `Set AdMob border color to <p0>` |  | color “Border Color” | — |  |
| 16 | 96 | Config adMob > Set AdMob Link Color | `Set AdMob link color to <p0>` |  | color “Link Color” | — |  |
| 17 | 97 | Config adMob > Set AdMob Text Color | `Set AdMob text color to <p0>` |  | color “Text Color” | — |  |
| 18 | 98 | Config adMob > Set AdMob Url Color | `Set AdMob url color to <p0>` |  | color “URL Color” | — |  |
| 19 | 99 | Rewarded Video > Make Video Request | `Make Video Request` |  |  | — |  |
| 20 | 100 | Rewarded Video > Show Video | `Show Video` |  |  | — |  |
| 21 | 101 | Rewarded Video > Destroy Video | `Destroy Video` |  |  | — |  |
| 22 | 102 | GDPR Consent > Set GDPR Consent Status | `Set GDPR consent status to <p0>` |  | numeric expression “GDPR Consent Status (-1:Unknown, 0:Non Personalized, 1:Personalized)” | — |  |
| 23 | 103 | Regular Banner > Set AdMob Bottom Margin | `Set AdMob bottom margin to <p0>` |  | numeric expression “AdMob Bottom Margin (pixels from bottom)” | — |  |
| 24 | 104 | Rewarded Interstitial > Make Rewarded Interstitial Request | `Make Rewarded Interstitial Request` |  |  | — |  |
| 25 | 105 | Rewarded Interstitial > Show Rewarded Interstitial | `Show Rewarded Interstitial` |  |  | — |  |
| 26 | 106 | Rewarded Interstitial > Destroy Rewarded Interstitial | `Destroy Rewarded Interstitial` |  |  | — |  |
| 27 | 107 | Set Temporal Ad Unit | `Set temporal AdUnit ID to <p0>` |  | string expression “AdUnit String (e.g.: ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX)” | — |  |
| 28 | 108 | Destroy All Ads | `Destroy all ads` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Error | `LastError$(` |  | → string | — |  |
| 1 | 81 | Device Id for AdMob | `GetDeviceIdAdMob$(` |  | → string | — |  |
| 2 | 82 | Rewarded Ads > Reward Type | `RewardType$(` |  | → string | — |  |
| 3 | 83 | Rewarded Ads > Reward Amount | `RewardAmount(` |  |  | — |  |
| 4 | 84 | GDPR Consent > Data Consent Status | `GDPRStatusValue(` |  |  | — |  |
