# Bible Clickteam Fusion 2.5 : conditions, actions, expressions

Référence destinée à un LLM (ou à un développeur) qui aide sur un projet Clickteam Fusion à partir d'un
export `MfaDump` (`<projet>.events.txt`). À lire avec `../CONTEXTE_CLICKTEAM.md` (modèle d'exécution de
Fusion et format de l'export). Générée automatiquement par `generate.js` : ne pas éditer à la main.

## Contenu

- [objets-integres.md](objets-integres.md) : objets intégrés à Fusion (Spécial, Son, Scène, Timer, Clavier/souris,
  Joueurs, objets Active / String / Counter…), 614 entrées.
- [extensions/README.md](extensions/README.md) : une page par extension (410 cataloguées : installées dans Fusion
  ou extensions tierces ; 7 rencontrées dans les projets mais non cataloguées).
  Les plus utilisées dans le corpus : [KcArray](extensions/KcArray.md) (1214), [Joystick2](extensions/Joystick2.md) (382), [KcButton](extensions/KcButton.md) (363), [fcButton](extensions/fcButton.md) (233), [kcini](extensions/kcini.md) (219), [kclist](extensions/kclist.md) (219), [parser](extensions/parser.md) (192), [kcedit](extensions/kcedit.md) (181), [Platform](extensions/Platform.md) (171), [joystick](extensions/joystick.md) (161), [clickteam-movement-controller](extensions/clickteam-movement-controller.md) (158), [kcfile](extensions/kcfile.md) (158).

## D'où viennent les informations

| Source | Fiabilité |
|---|---|
| Catalogue de **Nebula** (objets intégrés), extrait de son code source | libellés anglais propres à Nebula, proches de ceux de Fusion ; certains numéros/objets non couverts |
| Fonctions d'édition des **extensions** (`.mfx` installés avec Fusion, et extensions tierces fournies avec des projets téléchargés), appelées comme le fait l'éditeur | libellés, menus et paramètres officiels de l'extension ; numéros « (supposé) » quand l'extension ne fournit pas la correspondance |
| **Traductions françaises** de Fusion (`Languages\fr-fr\Modules`) | libellés officiels de l'éditeur français, quand une correspondance exacte existe (332 entrées intégrées, plus les extensions traduites) |
| **Usage réel** : 163 projets (projets personnels + exemples officiels de Fusion), 178678 conditions/actions/éléments d'expression | colonne Usage = occurrences (nombre de projets) ; Exemple réel = rendu MfaDump d'une occurrence, tiré **uniquement des exemples officiels de Fusion** |

## Lire les tableaux

- **N°** : numéro de la condition/action/expression dans les événements (champ `Num`). Les conditions ont des
  numéros négatifs, les actions et expressions des numéros positifs. Le type d'objet (champ `ObjectType`) donne la
  section : -1 Spécial, -2 Son, -3 Scène, -4 Timer, -5 Créer/sélectionner, -6 Clavier/souris, -7 Joueurs,
  0 opérateurs d'expression, 2 Active, 3 String, 7 Counter…, 32 et plus = extensions (`ObjectType - 32` = index
  de l'extension dans le projet).
- **Extensions** : *code* = numéro interne de l'extension ; dans les événements, condition = −(81 + code),
  action et expression = 80 + code (vérifié sur des exemples réels). C'est pour cela que l'export brut affiche
  `Event ID 89` ou `Expression ID 88(…)` pour une extension : chercher 89 − 80 = code 9 dans la page de l'extension.
- **Écrire une expression dans l'éditeur** : une expression liée à un objet prend **le nom de l'objet entre
  guillemets en 1er paramètre**, avant les paramètres listés dans les tableaux (la colonne Paramètres ne le
  mentionne pas) : `X( "hero" )`, `GroupItemValue( "Ini", Str$(indPack), Str$(indLevel) )`. L'export MfaDump
  le montre entre parenthèses juste après le numéro : `Expression ID 83("Ini")"Game", "sound")`.
- **Placeholders** : `<objet>` = objet de la condition/action, `<p0>`, `<p1>`… = paramètres dans l'ordre,
  `<op>` = opérateur de comparaison (=, <>, <, <=, >, >=).
- **Cas** : condition supplémentaire de Nebula pour ce libellé (par exemple selon la valeur d'un paramètre).
- Une ligne avec **Usage** « — » n'a jamais été vue dans le corpus : elle existe mais est moins éprouvée.

## Types de paramètres

D'après le SDK Fusion et Nebula (quelques libellés à confirmer). Pour les **expressions d'extension**, les types
sont différents : 1 = nombre, 3 = chaîne ; « → chaîne » indique une expression qui renvoie du texte.

| Code | Type |
|---|---|
| 1 | objet |
| 2 | temps |
| 3 | bord |
| 4 | direction |
| 5 | entier |
| 6 | son |
| 7 | musique |
| 9 | création d'objet |
| 10 | animation |
| 11 | (rien) |
| 12 | joueur |
| 13 | périodicité (every) |
| 14 | touche |
| 15 | vitesse |
| 16 | position |
| 17 | direction joystick |
| 18 | tir |
| 19 | zone |
| 21 | position (création) |
| 22 | expression numérique |
| 23 | comparaison numérique |
| 24 | couleur |
| 25 | buffer |
| 26 | scène (frame) |
| 27 | boucle de son |
| 28 | boucle de musique |
| 29 | nouvelle direction |
| 31 | texte/numéro |
| 32 | clic |
| 33 | programme externe |
| 35 | son (condition) |
| 36 | musique (condition) |
| 37 | commentaire |
| 38 | titre de groupe |
| 39 | groupe |
| 40 | nom de fichier |
| 41 | chaîne |
| 42 | comparaison de temps |
| 43 | coller |
| 44 | touche (code) |
| 45 | expression chaîne |
| 46 | comparaison de chaînes |
| 47 | effet d'encre |
| 48 | option de menu |
| 49 | valeur globale |
| 50 | valeur modifiable |
| 51 | flag |
| 52 | valeur globale (expr.) |
| 53 | valeur modifiable (expr.) |
| 54 | flag (expr.) |
| 55 | paramètre d'extension |
| 56 | 8 directions |
| 57 | mouvement |
| 58 | chaîne globale |
| 59 | chaîne globale (expr.) |
| 60 | paramètres de programme |
| 61 | chaîne modifiable |
| 62 | chaîne modifiable (expr.) |
| 63 | nom de fichier |
| 64 | effet |
| 68 | variables multiples |
| 69 | événement enfant |
| 72 | zone (expressions) |

## Limites connues

- Les libellés des objets intégrés sont ceux de Nebula (anglais), pas toujours mot pour mot ceux de l'éditeur.
- 17 combinaisons intégrées ont été rencontrées avec un rendu en erreur au moins une fois :
  elles sont listées à la fin de [objets-integres.md](objets-integres.md).
- Extensions non cataloguées (absentes lors de l'extraction : ActiveX, Game Center, Google Play Games) :
  seuls leurs numéros et des exemples bruts sont connus. Quelques extensions n'ont rien pu livrer (échec de chargement ou menu vide).
- Certaines extensions affichent une fenêtre d'aide quand on leur demande l'intitulé d'un paramètre : leur
  extraction a pu être incomplète (repli sur les menus en ressources).
- Les extensions dont le menu dépend d'un objet réel ont été lues via les menus en ressources : numéros
  éventuellement « (supposé) ».
