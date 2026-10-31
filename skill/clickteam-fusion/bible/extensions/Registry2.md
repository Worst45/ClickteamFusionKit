# Extension Registry2

- File: `Registry2.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Key exists | `<object>: key <p0>\<p1> exists` | <object>: la clé <p0>\<p1> existe | (unreliable parameters) | — |  |
| 1 | -82 | Value exists | `<object>: value <p2> of key <p0>\<p1> exists` | <object>: la valeur <p2> existe dans la clé <p0>\<p1> | (unreliable parameters) | — |  |
| 2 | -83 | Current key exists | `<object>: current key exists` | <object>: la clé courante existe |  | — |  |
| 3 | -84 | Value exists in current key | `<object>: value <p0> of current key exists` | <object>: la valeur <p0> existe dans la clé courante | string expression “Value name” | — |  |
| 4 | -85 | Last action successful | `<object>: last action successful` | <object>: dernière action réussie |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Key > Set Current Root Key | `Set root key to <p0>` | Définir la clé racine à <p0> | (unreliable parameters) | — |  |
| 1 | 81 | Current Key > Set Current Key | `Set current key to <p0>` | Utiliser <p0> comme clé courante | string expression “Key name” | — |  |
| 2 | 82 | Current Key > Set DWORD Value | `Set value <p0> of current key to <p1>` | Fixer la valeur <p0> de la clé courante à <p1> | string expression “Value name”; numeric expression “Set DWORD Value” | — |  |
| 3 | 83 | Current Key > Set String Value | `Set value <p0> of current key to <p1>` | Fixer la valeur <p0> de la clé courante à <p1> | string expression “Value name”; string expression “Set String Value” | — |  |
| 4 | 84 | Any Key > Set DWORD Value | `Set value <p2> of key <p0>\<p1> to <p3>` | Fixer la valeur <p0> de la clé <p0>\<p1> à <p3> | (unreliable parameters) | — |  |
| 5 | 85 | Any Key > Set String Value | `Set value <p2> of key <p0>\<p1> to <p3>` | Fixer la valeur <p0> de la clé <p0>\<p1> à <p3> | (unreliable parameters) | — |  |
| 6 | 86 | Current Key > Delete Current Key | `Delete current key` | Supprimer clé courante |  | — |  |
| 7 | 87 | Current Key > Delete Value | `Delete value <p0> of current key` | Supprimer la valeur <p0> de la clé courante | string expression “Value name” | — |  |
| 8 | 88 | Any Key > Delete Key | `Delete key <p0>\<p1>` | Supprimer clé <p0>\<p1> | (unreliable parameters) | — |  |
| 9 | 89 | Any Key > Delete Value | `Delete value <p2> of key <p0>\<p1>` | Supprimer la valeur <p2> de la clé <p0>\<p1> | (unreliable parameters) | — |  |
| 10 | 90 | Current Key > Create Current Key | `Create current key` | Créer clé courante |  | — |  |
| 11 | 91 | Any Key > Create Key | `Create key <p0>\<p1>` | Créer clé <p0>\<p1> | (unreliable parameters) | — |  |
| 12 | 92 | Set 64-bit mode | `Set 64-bit mode to <p0>` | Mettre mode 64-bits à <p0> | numeric expression “0=32-bit, 1=64-bit” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Key > Get Current Root Key | `RegCurRootKey$(` | Récupérer la clé racine courante | → string | — |  |
| 1 | 81 | Current Key > Get Current Key | `RegCurKey$(` | Récupérer la clé courante | → string | — |  |
| 2 | 82 | Current Key > Get DWORD Value | `RegCurKeyDW(` | Lire une valeur DWORD | string “Value name” | — |  |
| 3 | 83 | Current Key > Get String Value | `RegCurKeySZ$(` | Lire valeur chaîne | string “Value name” → string | — |  |
| 4 | 84 | Any Key > Get DWORD Value | `RegKeyDW(` | Lire une valeur DWORD | string “Root key”; string “Key name”; string “Value name” | — |  |
| 5 | 85 | Any Key > Get String Value | `RegKeySZ$(` | Lire valeur chaîne | string “Root key”; string “Key name”; string “Value name” → string | — |  |
| 6 | 86 | Last error code | `RegErrCode(` | Dernier code d'erreur |  | — |  |
| 7 | 87 | Last error message | `RegErrText$(` | Message du dernier code d'erreur | → string | — |  |
