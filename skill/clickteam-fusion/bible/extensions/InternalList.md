# Extension InternalList

- Fichier : `InternalList.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Item Exists in List | `<objet>: Item <p0> is in List` |  | expression chaîne « Item String » | — |  |
| 1 | -82 | On Custom Sort | `<objet>: On Custom Sort` |  |  | — |  |
| 2 | -83 | On Error | `<objet>: On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Insert Item | `Insert Item <p0> before <p1>, <p2> times` |  | expression chaîne « Item String » ; expression numérique « Insert Before » ; expression numérique « Number of Times to Insert » | — |  |
| 1 | 81 | Change Item | `Change Item <p0> to <p1>` |  | expression numérique « Index » ; expression chaîne « New Item String » | — |  |
| 2 | 82 | Copy Items | `Copy Items [<p0>, <p1>) to <p2>, Overwrite = <p3>` |  | expression numérique « Start (included) » ; expression numérique « End (excluded) » ; expression numérique « Copy to before » ; expression numérique « 0 = Insert, anything else = Overwrite » | — |  |
| 3 | 83 | Delete Items | `Delete Items [<p0>, <p1>)` |  | expression numérique « Start (included) » ; expression numérique « End (excluded) » | — |  |
| 4 | 84 | Clear List | `Clear List` |  |  | — |  |
| 5 | 85 | Save List to File | `Save List to File <p0> with item Delimiter <p1> and Escape with <p2>` |  | expression chaîne « File Path to Save to » ; expression chaîne « Item Delimiter (escaped from items) » ; expression chaîne « Escape Character(s) (escaped from items) » | — |  |
| 6 | 86 | Load List from File | `Load List from File <p0> with item Delimiter <p1> and Escape with <p2>, and Insert before <p3>` |  | expression chaîne « File Path to Load from » ; expression chaîne « Item Delimiter (escaped from items) » ; expression chaîne « Escape Character(s) (escaped from items) » ; expression numérique « Insert Before » | — |  |
| 7 | 87 | Load List from String | `Load List from String <p0> with item Delimiter <p1> and Escape with <p2>, and Insert before <p3>` |  | expression chaîne « String to Load from » ; expression chaîne « Item Delimiter (escaped from items) » ; expression chaîne « Escape Character(s) (escaped from items) » ; expression numérique « Insert Before » | — |  |
| 8 | 88 | Sort List in Range | `Sort List in range [<p0>, <p1>) with Sort Order <p2>` |  | expression numérique « Start (included) » ; expression numérique « End (excluded) » ; expression numérique « 0 = a, b, c; 1 = c, b, a; anything else = Custom Sort » | — |  |
| 9 | 89 | Custom Sort: Return True/False | `Set Custom Sort Return to <p0>` |  | expression numérique « 0 = false, anything else = true » | — |  |
| 10 | 90 | Reserve More Space | `Reserve space for at least <p0> total items` |  | expression numérique « Minimum Space Wanted » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Item | `Item$(` |  | nombre « Item Index » → chaîne | — |  |
| 1 | 81 | Get Number of Items | `Items(` |  |  | — |  |
| 2 | 82 | Get Number of Item Occurrences | `ItemOccurrences(` |  | chaîne « Item String » | — |  |
| 3 | 83 | Get Index of Item by Occurrence | `IndexByOccurrence(` |  | chaîne « Item String » ; nombre « Occurrence # (1-based) » | — |  |
| 4 | 84 | Get List as String | `List$(` |  | chaîne « Item Delimiter (escaped from items) » ; chaîne « Escape Character(s) (escaped from items) » → chaîne | — |  |
| 5 | 85 | Custom Sort: Get String A | `SortStrA$(` |  | → chaîne | — |  |
| 6 | 86 | Custom Sort: Get String B | `SortStrB$(` |  | → chaîne | — |  |
| 7 | 87 | Get Capacity | `Capacity(` |  |  | — |  |
