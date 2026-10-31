# Extension Get

- Fichier : `Get.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Get Object »
- Usage dans le corpus : 21 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On get complete | `<objet>: On get complete` |  |  | 2 (1 proj.) | `Get Object 2: Event ID -81, 0 Parameters` |
| 1 | -82 | Is get pending? | `<objet>: Get is pending` |  |  | 1 (1 proj.) | `Get Object 2: Event ID -82, 0 Parameters` |
| 2 | -83 | On get timeout | `<objet>: On get timeout` |  |  | 1 (1 proj.) | `Get Object 2: Event ID -83, 0 Parameters` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get URL | `Get URL <p0>` |  | expression chaîne « URL String » | 5 (1 proj.) | `Get Object 2 : Event ID 80, 1 Parameters { "http://posttestserver.com/post.php" }` |
| 1 | 81 | Add POST data | `Add POST data <p0> = <p1>` |  | expression chaîne « Name » ; expression chaîne « Value » | 4 (1 proj.) | `Get Object 2 : Event ID 81, 2 Parameters { "realname", "power boy washington" }` |
| 2 | 82 | Special Config ... > Set Custom Header | `Set custom header to <p0>` |  | expression chaîne « Custom Header String » | — |  |
| 3 | 83 | Special Config ... > Set User | `Set user to <p0>` |  | expression chaîne « User String » | 1 (1 proj.) | `Get Object 2 : Event ID 83, 1 Parameters { "admin" }` |
| 4 | 84 | Special Config ... > Set Password | `Set password to <p0>` |  | expression chaîne « Password String » | 1 (1 proj.) | `Get Object 2 : Event ID 84, 1 Parameters { "init0" }` |
| 5 | 85 | Special Config ... > Set Timeout | `Set timeout to <p0> msecs.` |  | expression numérique « timeout in millisecs. » | 1 (1 proj.) | `Get Object 2 : Event ID 85, 1 Parameters { value("Counter 2") }` |
| 6 | 86 | Special Config ... > Set User Agent | `Set user agent to <p0>` |  | expression chaîne « User Agent String » | 1 (1 proj.) | `Get Object 2 : Event ID 86, 1 Parameters { string$("String") }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get received | `Received$(` |  | → chaîne | 2 (1 proj.) | `Expression ID 80("Get Object 2")` |
| 1 | 81 | URL encode | `URLEncode$(` |  | chaîne → chaîne | — |  |
| 2 | 82 | Response Code | `ResponseCode(` |  |  | 2 (1 proj.) | `Expression ID 82("Get Object 2")` |
