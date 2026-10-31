# Extension PowerRegistry

- Fichier : `PowerRegistry.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Key exists | `<objet>: Current key exists` |  |  | — |  |
| 1 | -82 | Value exists | `<objet> : Value <p0> exists in current key` |  | expression chaîne « Value name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Root Key > HKEY_CLASSES_ROOT | `Set root key to HKEY_CLASSES_ROOT` |  |  | — |  |
| 1 | 81 | Set Root Key > HKEY_CURRENT_USER | `Set root key to HKEY_CURRENT_USER` |  |  | — |  |
| 2 | 82 | Set Root Key > HKEY_LOCAL_MACHINE | `Set root key to HKEY_LOCAL_MACHINE` |  |  | — |  |
| 3 | 83 | Set Root Key > HKEY_USERS | `Set root key to HKEY_USERS` |  |  | — |  |
| 4 | 84 | Set Root Key > HKEY_CURRENT_CONFIG | `Set root key to HKEY_CURRENT_CONFIG` |  |  | — |  |
| 5 | 85 | Current Key > Open Key | `Open key <p0>` |  | expression chaîne « Open key » | — |  |
| 6 | 86 | Current Key > Create Key | `Create key <p0>` |  | expression chaîne « Create key » | — |  |
| 7 | 87 | Current Key > Set String Value | `Set string value <p0> to <p1>` |  | expression chaîne « Value name » ; expression chaîne « Set String Value » | — |  |
| 8 | 88 | Current Key > Set Binary Value | `Set binary value <p0> to <p1>` |  | expression chaîne « Value name » ; expression chaîne « Set Binary Value (Put ASCII) » | — |  |
| 9 | 89 | Current Key > Set DWORD Value | `Set DWORD value <p0> to <p1>` |  | expression chaîne « Value name » ; expression numérique « Set Value » | — |  |
| 10 | 90 | Current Key > Delete Key | `Delete key <p0>` |  | expression chaîne « Key name » | — |  |
| 11 | 91 | Current Key > Delete Value | `Delete value <p0>` |  | expression chaîne « Value name » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Key > Get Current Root Key | `RegRootKey$(` |  | → chaîne | — |  |
| 1 | 81 | Current Key > Get Current Key | `RegKey$(` |  | → chaîne | — |  |
| 2 | 82 | Current Key > Get String\Binary Value | `RegGetStr$(` |  | chaîne « Value name » → chaîne | — |  |
| 3 | 83 | Current Key > Get DWORD Value | `RegGetDWORD$(` |  | chaîne « Value name » | — |  |
