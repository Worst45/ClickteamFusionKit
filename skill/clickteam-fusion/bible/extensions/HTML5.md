# Extension HTML5

- Fichier : `HTML5.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Javascript Error | `<objet>: On error` | <objet>: Erreur |  | — |  |
| 1 | -82 | Is preloader | `<objet>: Is preloader?` | <objet>: Est-ce un préloader? |  | — |  |
| 2 | -83 | Mouse is within window | `<objet>: The mouse is within the window` | <objet>: La souris se trouve dans la fenêtre |  | — |  |
| 3 | -84 | Browsers > Is browser Internet Explorer? | `<objet>: The current browser is Microsoft Internet Explorer` | <objet>: Le navigateur courant est Microsoft Internet Explorer |  | — |  |
| 4 | -85 | Browsers > Is browser Chrome? | `<objet>: The current browser is Google Chrome` | <objet>: Le navigateur courrant est Google Chrome |  | — |  |
| 5 | -86 | Browsers > Is browser Firefox? | `<objet>: The current browser is Firefox` | <objet>: Le navigateur courant est Firefox |  | — |  |
| 6 | -87 | Browsers > Is browser Safari? | `<objet>: The current browser is Safari` | <objet>: Le navigateur courant est Safari |  | — |  |
| 7 | -88 | Browsers > Is browser Opera? | `<objet>: The current browser is Opera` | <objet>: Le navigateur courant est Opera |  | — |  |
| 8 | -89 | Browsers > Is browser Edge? | `<objet>: The current browser is Microsoft Edge` | <objet>: Le navigateur courant est Microsoft Edge |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open URL > in current window | `Open URL <p0> in current window` | Ouvrir l'URL <p0> dans la fenêtre courante | expression chaîne « URL » | — |  |
| 1 | 81 | Open URL > in parent window | `Open URL <p0> in parent window` | Ouvrir l'URL <p0> dans la fenêtre parent | expression chaîne « URL » | — |  |
| 2 | 82 | Open URL > in top-level window | `Open URL <p0> in top-level window` | Ouvrir l'URL <p0> dans la fenêtre de premier niveau | expression chaîne « URL » | — |  |
| 3 | 83 | Open URL > in a new window | `Open URL <p0> in new window` | Ouvrir l'URL <p0> dans une nouvelle fenêtre | expression chaîne « URL » | — |  |
| 4 | 84 | Open URL > in target window | `Open URL <p0> in target window` | Ouvrir l'URL <p0> dans une fenêtre cible | expression chaîne « URL » ; expression chaîne | — |  |
| 5 | 85 | Javascript > Reset Parameter List | `Reset Parameters` | Mettre liste paramètres à zéro |  | — |  |
| 6 | 86 | Javascript > Add Integer Parameter | `Add Integer Parameter <p0>` | Ajouter Paramètre Entier <p0> | expression numérique « Add Integer Parameter » | — |  |
| 7 | 87 | Javascript > Add Float Parameter | `Add Float Parameter <p0>` | Ajouter Paramètre Virgule Flottante <p0> | expression numérique « Add Float Parameter » | — |  |
| 8 | 88 | Javascript > Add String Parameter | `Add String Parameter <p0>` | Ajouter Paramètre Chaîne <p0> | expression chaîne « Add String Parameter » | — |  |
| 9 | 89 | Javascript > Call Function | `Call Function <p0>` | Appeler Fonction <p0> | expression chaîne « Call Function » | — |  |
| 10 | 90 | Write cookie | `Write cookie <p0>, expiration <p1> days, string : <p2>` | Ecrire le cookie <p0>, expiration <p1>, texte : <p2> | expression chaîne « Enter the name of the cookie » ; expression numérique « Enter the number of days before expiration » ; expression chaîne « Enter the content of the cookie » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Javascript > Get Integer Result | `JSIntResult(` | Résultat entier |  | — |  |
| 1 | 81 | Javascript > Get Float Result | `JSFloatResult(` | Résultat virgule flottante |  | — |  |
| 2 | 82 | Javascript > Get String Result | `JSStrResult$(` | Résultat chaîne | → chaîne | — |  |
| 3 | 83 | Preloader > Get total length | `Total(` | Taille totale |  | — |  |
| 4 | 84 | Preloader > Get loaded length | `Loaded(` | Taille chargée |  | — |  |
| 5 | 85 | Preloader > Get percent loaded | `Percent(` | Pourcentage chargé |  | — |  |
| 6 | 86 | Browser > Get browser name | `BName$(` | Nom du navigateur | → chaîne | — |  |
| 7 | 87 | Browser > Get browser version | `BVersion(` | Version du navigateur |  | — |  |
| 8 | 88 | Browser > Get OS name | `BOS$(` | Nom du système de la machine | → chaîne | — |  |
| 9 | 89 | Read cookie | `Cookie$(` | Lire un cookie | chaîne « Cookie name » → chaîne | — |  |
| 10 | 90 | Host and URL > Get page URL | `URL$(` | URL de la page | → chaîne | — |  |
| 11 | 91 | Host and URL > Get page host | `Host$(` | Hôte de la page | → chaîne | — |  |
| 12 | 92 | Host and URL > Get page hostname | `Hostname$(` | Nom d'hôte de la page | → chaîne | — |  |
| 13 | 93 | Host and URL > Get page hash information | `Hash$(` | Information hash de la page | → chaîne | — |  |
| 14 | 94 | Host and URL > Get page search information | `Search$(` | Information de recherche de la page | → chaîne | — |  |
