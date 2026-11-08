# Extension GDPRConsent

- File: `GDPRConsent.mfx` — installed with Fusion
- Exporters: available in Android; **not in HTML5** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Form Loaded | `<object>: On form loaded` |  |  |
| 1 | -82 | On Form Failed | `<object>: On form failed` |  |  |
| 2 | -83 | On Form Opened | `<object>: On form opened` |  |  |
| 3 | -84 | On Form Closed | `<object>: On form closed` |  |  |
| 4 | -85 | Is Ads free preferred? | `Is <object>: Ads free?` |  |  |
| 5 | -86 | Is Consent Status? | `Is <object>: consent status <p0> ?` |  | numeric expression “Consent Status (-1:Unknown, 0:Not Required, 1:Required, 2:Obtained)” |
| 6 | -87 | On Error | `<object>: On Error` |  |  |
| 7 | -88 | Is Ads show enabled? | `Is <object>: Ads enabled?` |  |  |
| 8 | -89 | Is Consent Form available? | `Is <object>: consent form available?` |  |  |
| 9 | -90 | Is Privacy Form required? | `Is <object>: privacy required?` |  |  |
| 10 | -91 | Is GDPR Area? | `Is <object>: GDPR area?` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set User Under Age | `Set user under age of 13 to <p0>` |  | numeric expression “Under Age (0: No default, 1: Yes)” |
| 1 | 81 | Load consent form | `Load consent form` |  |  |
| 2 | 82 | Show consent form | `Show consent form` |  |  |
| 3 | 83 | Set Debug Geography | `Set Debug Geography mode to <p0> and devices list <p1>` |  | numeric expression “EU Geography Mode (0:Disabled, 1:EEA, 2:Non EEA)”; string expression “Test Device Ids list (separated by commas)” |
| 4 | 84 | Reset Consent | `Reset consent` |  |  |
| 5 | 85 | Ask Consent if Needed | `Ask consent form if needed` |  |  |
| 6 | 86 | Ask Privacy if Needed | `Ask privacy form if needed` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Consent GDPR Status | `ConsentGDPRStatus(` |  |  |
| 1 | 81 | Debug Geography Mode | `DebugGDPRMode(` |  |  |
| 2 | 82 | Adapters List as String | `GDPRAdaptersList$(` |  | → string |
| 3 | 83 | Get Last Error | `Error$(` |  | → string |
| 4 | 84 | Can Show Non-Person. Ads | `CanShowCommonAds(` |  |  |
| 5 | 85 | Can Show Personalized Ads | `CanShowPersonalizedAds(` |  |  |
| 6 | 86 | GDPR applies value | `GDPR_Value(` |  |  |
