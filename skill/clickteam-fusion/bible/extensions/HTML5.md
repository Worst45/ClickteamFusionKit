# Extension HTML5

- File: `HTML5.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Javascript Error | `<object>: On error` | <object>: Erreur |  | — |  |
| 1 | -82 | Is preloader | `<object>: Is preloader?` | <object>: Est-ce un préloader? |  | — |  |
| 2 | -83 | Mouse is within window | `<object>: The mouse is within the window` | <object>: La souris se trouve dans la fenêtre |  | — |  |
| 3 | -84 | Browsers > Is browser Internet Explorer? | `<object>: The current browser is Microsoft Internet Explorer` | <object>: Le navigateur courant est Microsoft Internet Explorer |  | — |  |
| 4 | -85 | Browsers > Is browser Chrome? | `<object>: The current browser is Google Chrome` | <object>: Le navigateur courrant est Google Chrome |  | — |  |
| 5 | -86 | Browsers > Is browser Firefox? | `<object>: The current browser is Firefox` | <object>: Le navigateur courant est Firefox |  | — |  |
| 6 | -87 | Browsers > Is browser Safari? | `<object>: The current browser is Safari` | <object>: Le navigateur courant est Safari |  | — |  |
| 7 | -88 | Browsers > Is browser Opera? | `<object>: The current browser is Opera` | <object>: Le navigateur courant est Opera |  | — |  |
| 8 | -89 | Browsers > Is browser Edge? | `<object>: The current browser is Microsoft Edge` | <object>: Le navigateur courant est Microsoft Edge |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open URL > in current window | `Open URL <p0> in current window` | Ouvrir l'URL <p0> dans la fenêtre courante | string expression “URL” | — |  |
| 1 | 81 | Open URL > in parent window | `Open URL <p0> in parent window` | Ouvrir l'URL <p0> dans la fenêtre parent | string expression “URL” | — |  |
| 2 | 82 | Open URL > in top-level window | `Open URL <p0> in top-level window` | Ouvrir l'URL <p0> dans la fenêtre de premier niveau | string expression “URL” | — |  |
| 3 | 83 | Open URL > in a new window | `Open URL <p0> in new window` | Ouvrir l'URL <p0> dans une nouvelle fenêtre | string expression “URL” | — |  |
| 4 | 84 | Open URL > in target window | `Open URL <p0> in target window` | Ouvrir l'URL <p0> dans une fenêtre cible | string expression “URL”; string expression | — |  |
| 5 | 85 | Javascript > Reset Parameter List | `Reset Parameters` | Mettre liste paramètres à zéro |  | — |  |
| 6 | 86 | Javascript > Add Integer Parameter | `Add Integer Parameter <p0>` | Ajouter Paramètre Entier <p0> | numeric expression “Add Integer Parameter” | — |  |
| 7 | 87 | Javascript > Add Float Parameter | `Add Float Parameter <p0>` | Ajouter Paramètre Virgule Flottante <p0> | numeric expression “Add Float Parameter” | — |  |
| 8 | 88 | Javascript > Add String Parameter | `Add String Parameter <p0>` | Ajouter Paramètre Chaîne <p0> | string expression “Add String Parameter” | — |  |
| 9 | 89 | Javascript > Call Function | `Call Function <p0>` | Appeler Fonction <p0> | string expression “Call Function” | — |  |
| 10 | 90 | Write cookie | `Write cookie <p0>, expiration <p1> days, string : <p2>` | Ecrire le cookie <p0>, expiration <p1>, texte : <p2> | string expression “Enter the name of the cookie”; numeric expression “Enter the number of days before expiration”; string expression “Enter the content of the cookie” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Javascript > Get Integer Result | `JSIntResult(` | Résultat entier |  | — |  |
| 1 | 81 | Javascript > Get Float Result | `JSFloatResult(` | Résultat virgule flottante |  | — |  |
| 2 | 82 | Javascript > Get String Result | `JSStrResult$(` | Résultat chaîne | → string | — |  |
| 3 | 83 | Preloader > Get total length | `Total(` | Taille totale |  | — |  |
| 4 | 84 | Preloader > Get loaded length | `Loaded(` | Taille chargée |  | — |  |
| 5 | 85 | Preloader > Get percent loaded | `Percent(` | Pourcentage chargé |  | — |  |
| 6 | 86 | Browser > Get browser name | `BName$(` | Nom du navigateur | → string | — |  |
| 7 | 87 | Browser > Get browser version | `BVersion(` | Version du navigateur |  | — |  |
| 8 | 88 | Browser > Get OS name | `BOS$(` | Nom du système de la machine | → string | — |  |
| 9 | 89 | Read cookie | `Cookie$(` | Lire un cookie | string “Cookie name” → string | — |  |
| 10 | 90 | Host and URL > Get page URL | `URL$(` | URL de la page | → string | — |  |
| 11 | 91 | Host and URL > Get page host | `Host$(` | Hôte de la page | → string | — |  |
| 12 | 92 | Host and URL > Get page hostname | `Hostname$(` | Nom d'hôte de la page | → string | — |  |
| 13 | 93 | Host and URL > Get page hash information | `Hash$(` | Information hash de la page | → string | — |  |
| 14 | 94 | Host and URL > Get page search information | `Search$(` | Information de recherche de la page | → string | — |  |
