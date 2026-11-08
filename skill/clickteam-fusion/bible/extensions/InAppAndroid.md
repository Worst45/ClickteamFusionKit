# Extension InAppAndroid

- File: `InAppAndroid.mfx` — installed with Fusion
- Exporters: available in Android; **not in HTML5** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Query Inventory | `<object>: On Query Inventory Ready` |  |  |
| 1 | -82 | On Purchase Ok | `<object>: Purchase Id:<p0> was Ok` |  | numeric expression “Operation ID” |
| 2 | -83 | On Purchase Failed | `<object>: Purchase Id:<p0> failed` |  | numeric expression “Operation ID” |
| 3 | -84 | On Subscription Ok | `<object>: Subscription Id:<p0> was Ok` |  | numeric expression “Operation ID” |
| 4 | -85 | On Subscription Failed | `<object>: Subscription Id:<p0> failed` |  | numeric expression “Operation ID” |
| 5 | -86 | On Purchase Consumed | `<object>: Purchased Id:<p0> was consumed` |  | numeric expression “Operation ID” |
| 6 | -87 | On Subscription Consumed | `<object>: Subscription Id:<p0> was consumed` |  | numeric expression “Operation ID” |
| 7 | -88 | Is Item Purchased? | `<object>: Is Sku <p0> purchased` |  | string expression “Purchase SKU string” |
| 8 | -89 | Is Item a Subscription? | `<object>: Is Sku=<p0> in Subscription` |  | string expression “Purchase SKU string” |
| 9 | -90 | Is Billing Available? | `<object>: Is Billing Available` |  |  |
| 10 | -91 | Is Billing Busy? | `<object>: Is Billing Busy` |  |  |
| 11 | -92 | On Error | `<object>: On Error` |  |  |
| 12 | -93 | On Store Notification | `<object>: On Store Notification` |  |  |
| 13 | -94 | Is Item Refunded? | `<object>: Is Sku <p0> refunded` |  | string expression “Refunded SKU string” |
| 14 | -95 | Is Item Canceled? | `<object>: Is Sku <p0> canceled` |  | string expression “Canceled SKU string” |
| 15 | -96 | On Inventory Update | `<object>: On Inventory update` |  |  |
| 16 | -97 | On Purchases Update | `<object>: On Purchases update` |  |  |
| 17 | -98 | On Purchase Acknowledged | `<object>: Purchase Id:<p0> was acknowledged` |  | numeric expression “Operation ID” |
| 18 | -99 | On Subscription Acknowledged | `<object>: Subscription Id:<p0> was acknowledged` |  | numeric expression “Operation ID” |
| 19 | -100 | Is Item Acknowledged? | `<object>: Is Sku <p0> acknowledged` |  | string expression “Acknowledged SKU string” |
| 20 | -101 | On Purchases History Update | `<object>: On Puchases history update` |  |  |
| 21 | -102 | Old Subscription Mode > On Subscription Price Change Accepted | `<object>: Subscription Id:<p0> price change accepted` |  | numeric expression “Operation ID” |
| 22 | -103 | Old Subscription Mode > On Subscription Price Change Failed | `<object>: Subscription Id:<p0> price change failed` |  | numeric expression “Operation ID” |
| 23 | -104 | On Restore Activity - Back from Store | `<object>: On Restore activity - back from store` |  |  |
| 24 | -105 | On Purchases Empty | `<object>: On Purchases empty` |  |  |
| 25 | -106 | Is Subscription in Grace? | `<object>: Is Subscription <p0> in grace period?` |  | string expression “Subscription SKU string” |
| 26 | -107 | Is Subscription Ending? | `<object>: Is Subscription <p0> ending before <p1> days` |  | string expression “Subscription SKU string”; numeric expression “Days to End” |
| 27 | -108 | Is Item Pending? | `<object>: Is Sku <p0> pending?` |  | string expression “Pending SKU string” |
| 28 | -109 | On Purchase Pending | `<object>: Purchase Id:<p0> is pending` |  | numeric expression “Operation ID” |
| 29 | -110 | On Subscription Pending | `<object>: Subscription Id:<p0> is pending` |  | numeric expression “Operation ID” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Query SKU > Query Inventory | `Query Inventory for theses SKUs <p0>` |  | string expression “SKUs List (exam: sku1/sku2/sk3)” |
| 1 | 81 | Set Developer Payload | `Set Developer Payload to <p0>` |  | string expression “Developer Payload string” |
| 2 | 82 | Purchase Operations > Purchase a SKU | `Purchase SKU:<p0> with Id:<p1>` |  | string expression “SKU string to purchase”; numeric expression “Operation ID” |
| 3 | 83 | Purchase Operations > Old Subscriptions > Subscription to SKU | `Subscription SKU:<p0> with Id:<p1>` |  | string expression “SKU string to subscribe”; numeric expression “Operation ID” |
| 4 | 84 | Purchase Operations > Consume a SKU | `Consume SKU:<p0> with Id:<p1>` |  | string expression “SKU string to consume”; numeric expression “ID operation” |
| 5 | 85 | Save Data .... > Save String | `Save string <p0> and name <p1>` |  | string expression “String value”; string expression “Name string value” |
| 6 | 86 | Save Data .... > Save Int | `Save int <p0> and name <p1>` |  | numeric expression “Integer value”; string expression “Name string value” |
| 7 | 87 | Purchase Operations > Query Purchases | `Query purchases` |  |  |
| 8 | 88 | Purchase Operations > Old Subscriptions > Subscription Upgrade | `Subscription upgrade from sku:<p0> to sku:<p1> with mode:<p2> and Id:<p3>` |  | string expression “Old sku String”; string expression “New sku String”; numeric expression “Upgrade Mode (0:Now with time proration 1:Now and charge prorated price 2:Now without proration 3:Deferred 4:Now and full price)”; numeric expression “Operation ID” |
| 9 | 89 | Purchase Operations > Old Subscriptions > Subscription Downgrade | `Subscription downgrade from sku=<p0> to sku=<p1> with mode:<p2> and Id:<p3>` |  | string expression “Old sku String”; string expression “New sku String”; numeric expression “Downgrade Mode (0:Now with time proration 1:Now without proration 2:Deferred)”; numeric expression “Operation ID” |
| 10 | 90 | Purchase Operations > Old Subscriptions > Subscription Change Price | `Subscription change price of sku:<p0> with Id:<p1>` |  | string expression “Sku String”; numeric expression “Operation ID” |
| 11 | 91 | Purchase Operations > Acknowledge a SKU | `Acknowledge SKU:<p0> with Id:<p1>` |  | string expression “SKU string to acknowledge”; numeric expression “Operation ID” |
| 12 | 92 | Query Purchases History | `Query purchases history` |  |  |
| 13 | 93 | Query SKU > Query Sku Details | `Query Sku details` |  |  |
| 14 | 94 | Set Obfuscate Account Id | `Set Obfuscate Account Id to <p0>` |  | string expression “Obfuscate Account Id String (max. 64)” |
| 15 | 95 | Set Obfuscate Profile Id | `Set Obfuscate Profile Id to <p0>` |  | string expression “Obfuscate Profile Id String (max. 64)” |
| 16 | 96 | Query SKU > Set Sku list for InApps | `Set InApps skus list to <p0>` |  | string expression “InApp SKUs List (exam: sku1/sku2/sk3)” |
| 17 | 97 | Query SKU > Set Sku list for Subss | `Set Subscriptions skus list to <p0>` |  | string expression “Subscriptions SKUs List (exam: sku1/sku2/sk3)” |
| 18 | 98 | Purchase Operations > Restore Subscription | `Restore subscription for SKU:<p0>` |  | string expression “Subscription Sku String” |
| 19 | 99 | Purchase Operations > Check validity of Subscriptions | `Check validity of subscriptions` |  |  |
| 20 | 100 | Purchase Operations > New Subscriptions > Subscription from Offer | `Subscription SKU:<p0> and Offer:<p1> with Id:<p2>` |  | string expression “SKU string to subscribe”; string expression “Offer Token String”; numeric expression “Operation ID” |
| 21 | 101 | Purchase Operations > New Subscriptions > Subscription Change to Offer | `Subscription change of sku:<p0> to offer:<p1> and mode:<p2> with Id:<p3>` |  | string expression “Sku String”; string expression “Offer Token String”; numeric expression “Replacement Mode (0:Unknown Mode, 1:Time Proration, 2:Charge Prorated Price Proration, 3:Without Proration, 5:Charge Full Price, 6:Deferred)”; numeric expression “Operation ID” |
| 22 | 102 | Set Pending Message | `Set Pending Message to <p0>` |  | string expression “Message String” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Last Error Value | `ErrorValue(` |  |  |
| 1 | 81 | Last Error String | `ErrorString$(` |  | → string |
| 2 | 82 | Last Response Value | `Response(` |  |  |
| 3 | 83 | Last Response String | `ResponseString$(` |  | → string |
| 4 | 84 | Inventory Qty | `InventoryQty(` |  |  |
| 5 | 85 | Purchased Qty | `PurchasedQty(` |  |  |
| 6 | 86 | Load Data .... > Load Data String | `LoadData$(` |  | string → string |
| 7 | 87 | Load Data .... > Load Data Integer | `LoadDataInt(` |  | string |
| 8 | 88 | Inventory Info .... > Product Id | `ProductId$(` |  | number → string |
| 9 | 89 | Inventory Info .... > Product Type | `ProductType$(` |  | number → string |
| 10 | 90 | Inventory Info .... > Product Formatted Price | `ProductPrice$(` |  | number → string |
| 11 | 91 | Inventory Info .... > Product Title | `ProductTitle$(` |  | number → string |
| 12 | 92 | Inventory Info .... > Product Description | `ProductDescription$(` |  | number → string |
| 13 | 93 | Purchases Info > Order Id | `POrderId$(` |  | number “Product Index” → string |
| 14 | 94 | Purchases Info > Package name | `PPackageName$(` |  | number “Product Index” → string |
| 15 | 95 | Purchases Info > Product Id | `PProductId$(` |  | number “Product Index” → string |
| 16 | 96 | Purchases Info > PurchaseTime | `PurchaseTime$(` |  | number “Product Index” → string |
| 17 | 97 | Purchases Info > PurchaseState | `PurchaseState(` |  | number “Product Index” |
| 18 | 98 | Purchases Info > Developer Payload | `DevPayLoad$(` |  | number “Product Index” → string |
| 19 | 99 | Purchases Info > Purchase Token | `PurchaseToken$(` |  | number “Product Index” → string |
| 20 | 100 | Inventory Info .... > One Time product .... > Product Amount | `ProductAmount(` |  | number |
| 21 | 101 | Inventory Info .... > One Time product .... > Product Currency | `ProductCurrency$(` |  | number → string |
| 22 | 102 | Generate Unique Token | `GetUniqueToken$(` |  | number “64 chars max.” → string |
| 23 | 103 | Inventory Info .... > Subscription .... > Old V4 .... > Subscription Period | `GetSubsPeriod$(` |  | number → string |
| 24 | 104 | Inventory Info .... > Subscription .... > Old V4 .... > Free Trial Period | `GetSubsFreeTrialPeriod$(` |  | number → string |
| 25 | 105 | Inventory Info .... > Subscription .... > Old V4 .... > Introductory Price | `GetSubsIntroductoryPrice$(` |  | number → string |
| 26 | 106 | Inventory Info .... > Subscription .... > Old V4 .... > Price Amount | `GetSubsPriceAmount(` |  | number |
| 27 | 107 | Inventory Info .... > Subscription .... > Old V4 .... > Price Period | `GetSubsPricePeriod$(` |  | number → string |
| 28 | 108 | Inventory Info .... > Subscription .... > Old V4 .... > Price Cycles | `GetSubsPriceCycles(` |  | number |
| 29 | 109 | Inventory Info .... > Product JSON | `ProductJSON$(` |  | number → string |
| 30 | 110 | Purchases Info > IsAutoRenewing | `ProductIsAutoRenewing(` |  | number “Product Index” |
| 31 | 111 | Purchases History > Records Qty | `RecordQty(` |  |  |
| 32 | 112 | Purchases History > Product Id | `PurchaseRecordSku$(` |  | number “Record-Index” → string |
| 33 | 113 | Purchases History > Purchase Token | `PurchaseRecordToken$(` |  | number “Record-Index” → string |
| 34 | 114 | Purchases History > Purchase Time | `PurchaseRecordTime$(` |  | number “Record-Index” → string |
| 35 | 115 | Purchases History > Returned Signature | `PurchaseRecordSignature$(` |  | number “Record-Index” → string |
| 36 | 116 | Purchases History > Developer Payload | `PurchaseRecordDevPayload$(` |  | number “Record-Index” → string |
| 37 | 117 | Purchases History > Purchase JSON | `PurchaseRecordJSON$(` |  | number “Record-Index” → string |
| 38 | 118 | Purchases Info > Obfuscate Account Id | `PurchaseObfuscateAccountId$(` |  | number “Product Index” → string |
| 39 | 119 | Purchases Info > Obfuscate Profile Id | `PurchaseObfuscateProfileId$(` |  | number “Product Index” → string |
| 40 | 120 | Purchases Info > PurchaseAcknowledged | `PurchaseAcknowledged(` |  | number “Product Index” |
| 41 | 121 | Purchased-Index from Sku | `GetIndexfromSKU(` |  | string “SKU to search” |
| 42 | 122 | Convert time to string | `FormatStringTime$(` |  | string “time in long format” → string |
| 43 | 123 | Purchases Info > Subscription Expire Time .... > For Regular Period | `SubExpireTimePeriod$(` |  | string “Subs SKU” → string |
| 44 | 124 | Purchases Info > Subscription Expire Time .... > For Free Trial Period | `SubExpireTimeFreeTrialPeriod$(` |  | string “Subs SKU” → string |
| 45 | 125 | Inventory Info .... > Subscription .... > New V5 .... > Base Plan Qty | `BasePlanQty(` |  | number “Product Index” |
| 46 | 126 | Inventory Info .... > Subscription .... > New V5 .... > Offer ID Token | `BasePlanOfferToken$(` |  | number “Product Index”; number “Plan Index” → string |
| 47 | 127 | Inventory Info .... > Subscription .... > New V5 .... > Plan ID | `BasePlanID$(` |  | number “Product Index”; number “Plan Index” → string |
| 48 | 128 | Inventory Info .... > Subscription .... > New V5 .... > Offer ID | `BaseOfferID$(` |  | number “Product Index”; number “Plan Index” → string |
| 49 | 129 | Inventory Info .... > Subscription .... > New V5 .... > Pricing .... > Pricing Qty | `BasePlanPricingQty(` |  | number “Product Index”; number “Plan Index” |
| 50 | 130 | Inventory Info .... > Subscription .... > New V5 .... > Pricing .... > Amount in Micros | `PricingAmountMicros$(` |  | number “Product Index”; number “Plan Index”; number “Pricing Index” → string |
| 51 | 131 | Inventory Info .... > Subscription .... > New V5 .... > Pricing .... > Currency Code | `PricingCurrencyCode$(` |  | number “Product Index”; number “Plan Index”; number “Pricing Index” → string |
| 52 | 132 | Inventory Info .... > Subscription .... > New V5 .... > Pricing .... > Formatted Price | `PricingFormattedPrice$(` |  | number “Product Index”; number “Plan Index”; number “Pricing Index” → string |
| 53 | 133 | Inventory Info .... > Subscription .... > New V5 .... > Pricing .... > Billing Period | `PricingBillingPeriod$(` |  | number “Product Index”; number “Plan Index”; number “Pricing Index” → string |
| 54 | 134 | Inventory Info .... > Subscription .... > New V5 .... > Pricing .... > Recurrence Mode | `PricingRecurrenceMode$(` |  | number “Product Index”; number “Plan Index”; number “Pricing Index” → string |
| 55 | 135 | Inventory Info .... > Subscription .... > New V5 .... > Pricing .... > Billing Cycles | `PricingBillingCycles(` |  | number “Product Index”; number “Plan Index”; number “Pricing Index” → string |
| 56 | 136 | Inventory Info .... > Subscription .... > New V5 .... > Offers Tags .... > Tags Qty | `BasePlanOfferTagsQty` |  | number “Product Index”; number “Plan Index” |
| 57 | 137 | Inventory Info .... > Subscription .... > New V5 .... > Offers Tags .... > Tag String | `BasePlanOfferTags$(` |  | number “Product Index”; number “Plan Index”; number “Tags Index” → string |
