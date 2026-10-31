# Extension comdlg

- Fichier : `comdlg.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | After Open Dialog | `<objet>: Open Dialog - OK` |  |  | — |  |
| 1 | -82 | After Save Dialog | `<objet>: Save Dialog - OK` |  |  | — |  |
| 2 | -83 | Open Cancelled | `<objet>: Open Dialog - Cancel` |  |  | — |  |
| 3 | -84 | Save Cancelled | `<objet>: Save Dialog - Cancel` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Show Open Dialog | `<objet>: Show Open Dialog` |  |  | — |  |
| 1 | 81 | Show Save Dialog | `<objet>: Show Save Dialog` |  |  | — |  |
| 2 | 82 | Filters > Clear Filters | `<objet>: Reset Filters` |  |  | — |  |
| 3 | 83 | Filters > Add Filter | `<objet>: Add Filter <p0> for <p1>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Set Default Filename | `<objet>: Set Filename to <p0>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Set Initial Directory | `<objet>: Set Initial Directory to <p0>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Set Dialog Title | `<objet>: Set Dialog Title to <p0>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Set Default Extension | `<objet>: Set Default Filename Extension to <p0>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Preferences > File Must Exist > Enable | `<objet>: Enable File Must Exist` |  |  | — |  |
| 9 | 89 | Preferences > File Must Exist > Disable | `<objet>: Disable File Must Exist` |  |  | — |  |
| 10 | 90 | Preferences > Hide Read Only > Enable | `<objet>: Enable Hide Read Only` |  |  | — |  |
| 11 | 91 | Preferences > Hide Read Only > Disable | `<objet>: Disable Hide Read Only` |  |  | — |  |
| 12 | 92 | Preferences > No Change Directory > Enable | `<objet>: Enable No Change Directory` |  |  | — |  |
| 13 | 93 | Preferences > No Change Directory > Disable | `<objet>: Disable No Change Directory` |  |  | — |  |
| 14 | 94 | Preferences > Overwrite Prompt > Enable | `<objet>: Enable Overwrite Prompt` |  |  | — |  |
| 15 | 95 | Preferences > Overwrite Prompt > Disable | `<objet>: Disable Overwrite Prompt` |  |  | — |  |
| 16 | 96 | Preferences > Path Must Exist > Enable | `<objet>: Enable Path Must Exist` |  |  | — |  |
| 17 | 97 | Preferences > Path Must Exist > Disable | `<objet>: Disable Path Must Exist` |  |  | — |  |
| 18 | 98 | Preferences > Create Prompt > Enable | `<objet>: Enable Create Prompt` |  |  | — |  |
| 19 | 99 | Preferences > Create Prompt > Disable | `<objet>: Disable Create Prompt` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Filename | `GetFilename$(` |  |  | — |  |
| 1 | 81 | Return Open Dialog | `OpenDialog$(` |  |  | — |  |
| 2 | 82 | Return Save Dialog | `SaveDialog$(` |  |  | — |  |
| 3 | 83 | Get File Title | `GetFileTitle$(` |  |  | — |  |
