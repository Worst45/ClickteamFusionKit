# Extension OUYA

- File: `OUYA.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is button pressed for player? > O | `<object> : Is button O pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 1 | -82 | Is button pressed for player? > U | `<object> : Is button U pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 2 | -83 | Is button pressed for player? > Y | `<object> : Is button Y pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 3 | -84 | Is button pressed for player? > A | `<object> : Is button A pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 4 | -85 | Is button pressed for player? > L1 | `<object> : Is button L1 pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 5 | -86 | Is button pressed for player? > L2 | `<object> : Is button L2 pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 6 | -87 | Is button pressed for player? > R1 | `<object> : Is button R1 pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 7 | -88 | Is button pressed for player? > R2 | `<object> : Is button R2 pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 8 | -89 | Is button pressed for player? > Menu | `<object> : Is Menu button pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 9 | -90 | Is button pressed for player? > D-Pad Up | `<object> : Is D-Pad Up button pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 10 | -91 | Is button pressed for player? > D-Pad Down | `<object> : Is D-Pad Down button pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 11 | -92 | Is button pressed for player? > D-Pad Left | `<object> : Is D-Pad Left button pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 12 | -93 | Is button pressed for player? > D-Pad Right | `<object> : Is D-Pad Right button pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 13 | -94 | Is button pressed for player? > Deprecated ... > R3 | `<object> : Is button R3 pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 14 | -95 | Is button pressed for player? > Deprecated ... > L3 | `<object> : Is button L3 pressed for player <p0>?` |  | numeric expression “Player Number (0-3)” | — |  |
| 15 | -96 | On button press > O | `<object> : On button O pressed` |  |  | — |  |
| 16 | -97 | On button press > U | `<object> : On button U pressed` |  |  | — |  |
| 17 | -98 | On button press > Y | `<object> : On button Y pressed` |  |  | — |  |
| 18 | -99 | On button press > A | `<object> : On button A pressed` |  |  | — |  |
| 19 | -100 | On button press > L1 | `<object> : On button L1 pressed` |  |  | — |  |
| 20 | -101 | On button press > L2 | `<object> : On button L2 pressed` |  |  | — |  |
| 21 | -102 | On button press > R1 | `<object> : On button R1 pressed` |  |  | — |  |
| 22 | -103 | On button press > R2 | `<object> : On button R2 pressed` |  |  | — |  |
| 23 | -104 | On button press > Menu | `<object> : On Menu button pressed` |  |  | — |  |
| 24 | -105 | On button press > D-Pad Up | `<object> : On D-Pad Up pressed` |  |  | — |  |
| 25 | -106 | On button press > D-Pad Down | `<object> : On D-Pad Down pressed` |  |  | — |  |
| 26 | -107 | On button press > D-Pad Left | `<object> : On D-Pad Left pressed` |  |  | — |  |
| 27 | -108 | On button press > D-Pad Right | `<object> : On D-Pad Right pressed` |  |  | — |  |
| 28 | -109 | On button press > Deprecated ... > R3 | `<object> : On button R3 pressed` |  |  | — |  |
| 29 | -110 | On button press > Deprecated ... > L3 | `<object> : On button L3 pressed` |  |  | — |  |
| 30 | -111 | Is device an OUYA? | `<object> : Device is an OUYA?` |  |  | — |  |
| 31 | -112 | On button release. > O | `<object> : On button O released` |  |  | — |  |
| 32 | -113 | On button release. > U | `<object> : On button U released` |  |  | — |  |
| 33 | -114 | On button release. > Y | `<object> : On button Y released` |  |  | — |  |
| 34 | -115 | On button release. > A | `<object> : On button A released` |  |  | — |  |
| 35 | -116 | On button release. > L1 | `<object> : On button L1 released` |  |  | — |  |
| 36 | -117 | On button release. > L2 | `<object> : On button L2 released` |  |  | — |  |
| 37 | -118 | On button release. > R1 | `<object> : On button R1 released` |  |  | — |  |
| 38 | -119 | On button release. > R2 | `<object> : On button R2 released` |  |  | — |  |
| 39 | -120 | On button release. > Menu | `<object> : On Menu button released` |  |  | — |  |
| 40 | -121 | On button release. > D-Pad Up | `<object> : On D-Pad Up released` |  |  | — |  |
| 41 | -122 | On button release. > D-Pad Down | `<object> : On D-Pad Down released` |  |  | — |  |
| 42 | -123 | On button release. > D-Pad Left | `<object> : On D-Pad Left released` |  |  | — |  |
| 43 | -124 | On button release. > D-Pad Right | `<object> : On D-Pad Right released` |  |  | — |  |
| 44 | -125 | On button release. > Deprecated ... > R3 | `<object> : On button R3 released` |  |  | — |  |
| 45 | -126 | On button release. > Deprecated ... > L3 | `<object> : On button L3 released` |  |  | — |  |
| 46 | -127 | IAP > On product selected | `<object> : On product selected` |  |  | — |  |
| 47 | -128 | User info available? | `<object> : User info available?` |  |  | — |  |
| 48 | -129 | IAP > On IAP initialized | `<object> : On IAP initialized` |  |  | — |  |
| 49 | -130 | IAP > On IAP initialized failed | `<object> : On IAP initialized failed` |  |  | — |  |
| 50 | -131 | IAP > Does player have product? | `<object> : Does player have product <p0>?` |  | string expression “Product ID” | — |  |
| 51 | -132 | IAP > On purchase successful | `<object> : On purchase successful` |  |  | — |  |
| 52 | -133 | IAP > On purchase failed | `<object> : On purchase failed` |  |  | — |  |
| 53 | -134 | IAP > On product select failed | `<object> : On product select failed` |  |  | — |  |
| 54 | -135 | On system button double tapped | `<object> : On System button double tapped` |  |  | — |  |
| 55 | -136 | IAP > On read receipts | `<object> : On Read receipts` |  |  | — |  |
| 56 | -137 | IAP > On read products | `<object> : On Read products` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | IAP > Deprecated ... > Initialize IAP | `Initialize IAP with developer ID <p0>, keyfile <p1>` |  | string expression “Developer ID”; file name “Key file” | — |  |
| 1 | 81 | IAP > Set Current product | `Select product <p0>` |  | string expression “Product ID” | — |  |
| 2 | 82 | IAP > Purchase current product | `Purchase current product` |  |  | — |  |
| 3 | 83 | Define Touchpad as main pad | `Set Touchpad from controller <p0> as default` |  | numeric expression “Controller Number (0 to 3)” | — |  |
| 4 | 84 | IAP > Start IAP feature | `Start IAP feature with keyfile <p0>` |  | file name “Key file” | — |  |
| 5 | 85 | IAP > Set products list | `Set products list to <p0>` |  | string expression “Products list (separated by \|)” | — |  |
| 6 | 86 | IAP > Read purchased receipts | `Read purchased receipts` |  |  | — |  |
| 7 | 87 | IAP > Read products information | `Read products information` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current player number | `CurrentPlayer(` |  |  | — |  |
| 1 | 81 | Get axis value (current player) > Left stick X | `LeftStickX(` |  |  | — |  |
| 2 | 82 | Get axis value (current player) > Left stick Y | `LeftStickY(` |  |  | — |  |
| 3 | 83 | Get axis value (current player) > Right stick X | `RightStickX(` |  |  | — |  |
| 4 | 84 | Get axis value (current player) > Right stick Y | `RightStickY(` |  |  | — |  |
| 5 | 85 | Get axis value (player number) > Left stick X | `LeftStickXForPlayer(` |  | number “Player Number (0-3)” | — |  |
| 6 | 86 | Get axis value (player number) > Left stick Y | `LeftStickYForPlayer(` |  | number “Player Number (0-3)” | — |  |
| 7 | 87 | Get axis value (player number) > Right stick X | `RightStickXForPlayer(` |  | number “Player Number (0-3)” | — |  |
| 8 | 88 | Get axis value (player number) > Right stick Y | `RightStickYForPlayer(` |  | number “Player Number (0-3)” | — |  |
| 9 | 89 | IAP > Current product > Name | `Productname$(` |  | → string | — |  |
| 10 | 90 | IAP > Current product > Price in US cents | `ProductPriceinUSCents(` |  |  | — |  |
| 11 | 91 | Extras ... > Gamer UUID | `GamerUUID$(` |  | → string | — |  |
| 12 | 92 | Get axis value (current player) > L2 Stick | `L2Stick(` |  |  | — |  |
| 13 | 93 | Get axis value (current player) > R2 Stick | `R2Stick(` |  |  | — |  |
| 14 | 94 | Get axis value (player number) > L2 Stick | `L2StickForPlayer(` |  | number “Player Number (0-3)” | — |  |
| 15 | 95 | Get axis value (player number) > R2 Stick | `R2StickForPlayer(` |  | number “Player Number (0-3)” | — |  |
| 16 | 96 | Extras ... > Gamer Name | `UserName$(` |  | → string | — |  |
| 17 | 97 | Extras ... > Console name | `ConsoleName$(` |  | → string | — |  |
| 18 | 98 | Extras ... > Supported device | `SupportedDevice$(` |  | → string | — |  |
| 19 | 99 | IAP > Current product > Purchase Currency | `ProductPurchaseCurrencyCode$(` |  | → string | — |  |
| 20 | 100 | IAP > Current product > Formatted Price | `ProductPurchasePrice$(` |  | → string | — |  |
| 21 | 101 | IAP > Purchased Products ... > Purchased Quantity | `PurchasedQty(` |  |  | — |  |
| 22 | 102 | IAP > Purchased Products ... > Gamer UUID | `PurchaseGamerUUID$(` |  | number “Zero-based index” → string | — |  |
| 23 | 103 | IAP > Purchased Products ... > Gamer/Order ID | `PurchaseGamerID$(` |  | number “Zero-based index” → string | — |  |
| 24 | 104 | IAP > Purchased Products ... > Product Id | `PurchaseId$(` |  | number “Zero-based index” → string | — |  |
| 25 | 105 | IAP > Purchased Products ... > Receipt Date | `PurchaseReceiptDate$(` |  | number “Zero-based index” → string | — |  |
| 26 | 106 | IAP > Purchased Products ... > Purchase Date | `PurchaseDate$(` |  | number “Zero-based index” → string | — |  |
| 27 | 107 | IAP > Purchased Products ... > Purchase Currency | `PurchaseCurrency$(` |  | number “Zero-based index” → string | — |  |
| 28 | 108 | IAP > Purchased Products ... > Local Price | `PurchaseLocalPrice(` |  | number “Zero-based index” | — |  |
| 29 | 109 | IAP > Purchased Products ... > Price in US cents | `PurchasePriceinUScents(` |  | number “Zero-based index” | — |  |
| 30 | 110 | IAP > Purchased Products ... > Formatted Price | `PurchaseFormattedPrice$(` |  | number “Zero-based index” → string | — |  |
| 31 | 111 | IAP > Products Info ... > Products Quantity | `ProductsQty(` |  |  | — |  |
| 32 | 112 | IAP > Products Info ... > Identifier | `ProdId$(` |  | number “Zero-based index” → string | — |  |
| 33 | 113 | IAP > Products Info ... > Name | `ProdName$(` |  | number “Zero-based index” → string | — |  |
| 34 | 114 | IAP > Products Info ... > Description | `ProdDesc$(` |  | number “Zero-based index” → string | — |  |
| 35 | 115 | IAP > Products Info ... > Type | `ProdType$(` |  | number “Zero-based index” → string | — |  |
| 36 | 116 | IAP > Products Info ... > Original Price | `ProdOriginalPrice(` |  | number “Zero-based index” | — |  |
| 37 | 117 | IAP > Products Info ... > Local Price | `ProdLocalPrice(` |  | number “Zero-based index” | — |  |
| 38 | 118 | IAP > Products Info ... > Formatted Price | `ProdFormattedPrice$(` |  | number “Zero-based index” → string | — |  |
| 39 | 119 | IAP > Products Info ... > Price in US cents | `ProdPriceinUScents(` |  | number “Zero-based index” | — |  |
| 40 | 120 | IAP > Products Info ... > Percent Off | `ProdPercentOff(` |  | number “Zero-based index” | — |  |
| 41 | 121 | IAP > Products Info ... > Currency Code | `ProdCurrencyCode$(` |  | number “Zero-based index” → string | — |  |
