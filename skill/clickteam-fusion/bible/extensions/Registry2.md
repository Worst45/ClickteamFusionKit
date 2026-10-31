# Extension Registry2

- Fichier : `Registry2.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Key exists | `<objet>: key <p0>\<p1> exists` | <objet>: la clé <p0>\<p1> existe | (paramètres non fiables) | — |  |
| 1 | -82 | Value exists | `<objet>: value <p2> of key <p0>\<p1> exists` | <objet>: la valeur <p2> existe dans la clé <p0>\<p1> | (paramètres non fiables) | — |  |
| 2 | -83 | Current key exists | `<objet>: current key exists` | <objet>: la clé courante existe |  | — |  |
| 3 | -84 | Value exists in current key | `<objet>: value <p0> of current key exists` | <objet>: la valeur <p0> existe dans la clé courante | expression chaîne « Value name » | — |  |
| 4 | -85 | Last action successful | `<objet>: last action successful` | <objet>: dernière action réussie |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Key > Set Current Root Key | `Set root key to <p0>` | Définir la clé racine à <p0> | (paramètres non fiables) | — |  |
| 1 | 81 | Current Key > Set Current Key | `Set current key to <p0>` | Utiliser <p0> comme clé courante | expression chaîne « Key name » | — |  |
| 2 | 82 | Current Key > Set DWORD Value | `Set value <p0> of current key to <p1>` | Fixer la valeur <p0> de la clé courante à <p1> | expression chaîne « Value name » ; expression numérique « Set DWORD Value » | — |  |
| 3 | 83 | Current Key > Set String Value | `Set value <p0> of current key to <p1>` | Fixer la valeur <p0> de la clé courante à <p1> | expression chaîne « Value name » ; expression chaîne « Set String Value » | — |  |
| 4 | 84 | Any Key > Set DWORD Value | `Set value <p2> of key <p0>\<p1> to <p3>` | Fixer la valeur <p0> de la clé <p0>\<p1> à <p3> | (paramètres non fiables) | — |  |
| 5 | 85 | Any Key > Set String Value | `Set value <p2> of key <p0>\<p1> to <p3>` | Fixer la valeur <p0> de la clé <p0>\<p1> à <p3> | (paramètres non fiables) | — |  |
| 6 | 86 | Current Key > Delete Current Key | `Delete current key` | Supprimer clé courante |  | — |  |
| 7 | 87 | Current Key > Delete Value | `Delete value <p0> of current key` | Supprimer la valeur <p0> de la clé courante | expression chaîne « Value name » | — |  |
| 8 | 88 | Any Key > Delete Key | `Delete key <p0>\<p1>` | Supprimer clé <p0>\<p1> | (paramètres non fiables) | — |  |
| 9 | 89 | Any Key > Delete Value | `Delete value <p2> of key <p0>\<p1>` | Supprimer la valeur <p2> de la clé <p0>\<p1> | (paramètres non fiables) | — |  |
| 10 | 90 | Current Key > Create Current Key | `Create current key` | Créer clé courante |  | — |  |
| 11 | 91 | Any Key > Create Key | `Create key <p0>\<p1>` | Créer clé <p0>\<p1> | (paramètres non fiables) | — |  |
| 12 | 92 | Set 64-bit mode | `Set 64-bit mode to <p0>` | Mettre mode 64-bits à <p0> | expression numérique « 0=32-bit, 1=64-bit » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Key > Get Current Root Key | `RegCurRootKey$(` | Récupérer la clé racine courante | → chaîne | — |  |
| 1 | 81 | Current Key > Get Current Key | `RegCurKey$(` | Récupérer la clé courante | → chaîne | — |  |
| 2 | 82 | Current Key > Get DWORD Value | `RegCurKeyDW(` | Lire une valeur DWORD | chaîne « Value name » | — |  |
| 3 | 83 | Current Key > Get String Value | `RegCurKeySZ$(` | Lire valeur chaîne | chaîne « Value name » → chaîne | — |  |
| 4 | 84 | Any Key > Get DWORD Value | `RegKeyDW(` | Lire une valeur DWORD | chaîne « Root key » ; chaîne « Key name » ; chaîne « Value name » | — |  |
| 5 | 85 | Any Key > Get String Value | `RegKeySZ$(` | Lire valeur chaîne | chaîne « Root key » ; chaîne « Key name » ; chaîne « Value name » → chaîne | — |  |
| 6 | 86 | Last error code | `RegErrCode(` | Dernier code d'erreur |  | — |  |
| 7 | 87 | Last error message | `RegErrText$(` | Message du dernier code d'erreur | → chaîne | — |  |
