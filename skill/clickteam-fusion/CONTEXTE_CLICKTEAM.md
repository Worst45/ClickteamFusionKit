# Contexte Clickteam Fusion 2.5 — pour lire un export MfaDump

Ce document s'adresse à un LLM (ou à un développeur) qui doit analyser ou déboguer un projet
Clickteam Fusion à partir du fichier `<projet>.events.txt` produit par `MfaDump.exe`.
Il explique le modèle d'exécution de Fusion, puis le format de l'export.

Légende de fiabilité : les points marqués **(à vérifier)** sont des comportements supposés,
pas encore confirmés sur un projet réel. Ne pas les présenter comme certains.

Pour connaître **toutes les conditions / actions / expressions possibles** (objets intégrés et
extensions, avec numéros, paramètres, libellés français et exemples réels), voir la bible :
`bible/README.md`.

---

## 1. Modèle d'exécution : la boucle par tick

Fusion n'est pas programmé en code mais par une **grille d'événements**. Chaque événement est
une ligne « SI conditions → FAIRE actions ».

À chaque **tick** (une image du jeu ; la fréquence est indiquée en tête d'export, ex. `60 FPS`) :

1. Le moteur évalue **tous les événements actifs, de haut en bas**, une seule fois.
2. Pour chaque événement, si **toutes** ses conditions sont vraies, ses actions s'exécutent
   immédiatement, dans l'ordre où elles sont écrites.
3. Une fois la grille parcourue, le moteur affiche la nouvelle image, puis recommence.

Conséquences importantes pour le débogage :

- **L'ordre des événements compte.** Une valeur modifiée par l'événement #10 est déjà visible
  par l'événement #20 dans le même tick, mais pas par l'événement #5 (qui ne la verra qu'au tick
  suivant).
- **Rien n'est affiché entre deux événements** : tout ce qui se passe pendant un tick apparaît
  d'un coup à l'écran.
- Un traitement long dans un tick **fige le jeu** (l'image suivante attend la fin du tick).

## 2. Les fast loops : traitement synchrone dans un tick

Pour faire un traitement itératif (parcourir une grille, tester chaque ligne…) sans attendre un
tick par itération, on utilise une **fast loop** :

- Action `Special : Start loop "nom" N times` : lance la boucle **immédiatement**. Le moteur
  exécute alors, N fois de suite, tous les événements qui ont la condition `On loop "nom"`,
  puis **rend la main** à l'action suivante. Tout cela se passe dans le même tick.
- `LoopIndex("nom")` donne l'index courant (à partir de 0).
- Variante objet : `Start loop for each one of <objet>, loop name "nom"` + condition
  `On each of <objet>, loop name "nom"` : une itération par instance de l'objet, avec
  cette instance seule sélectionnée. **Contrairement à `Start loop`, elle ne démarre qu'après les
  autres actions de l'événement** (vérifié, voir §7 bis).

Une fast loop est donc l'équivalent d'une boucle `for` classique. Son coût dépend du nombre
d'itérations × nombre d'événements `On loop` ; quelques centaines d'itérations restent
négligeables. Si un jeu « se fige une seconde », chercher d'abord un **timer** (voir §4)
avant d'accuser une fast loop.

## 3. Conditions, sélection d'objets et types de conditions

- **Sélection (« scoping »)** : une condition portant sur un objet ne fait pas que tester, elle
  **sélectionne les instances** qui la vérifient. Les actions de l'événement qui portent sur cet
  objet ne s'appliquent qu'aux instances sélectionnées. Sans condition sur l'objet, une action
  s'applique à **toutes** ses instances.
- **Conditions déclenchées** (affichées en rouge dans l'éditeur) : elles ne sont pas évaluées
  à chaque tick, elles sont vraies **au moment où l'événement survient**. Exemples : `On loop`,
  `On each of`, `On group activation`, `Start of Frame`, collisions. Dans un événement, une
  condition déclenchée est normalement placée en premier.
- `Always` : vrai à chaque tick.
- `NOT ...` : condition inversée.
- `Repeat while Player 1 Moved down` : vrai **tant que** la touche est maintenue (à chaque
  tick), à la différence de `Player 1 Moved down` (vrai une fois à l'appui).
- **Les conditions d'appui (`Player 1 Moved left`, `Pressed fire`, `Upon pressing a key`) sont
  déclenchées** : leur événement s'exécute au moment de l'entrée, **avant** le parcours normal de la
  liste, quelle que soit sa position. Un événement placé plus haut dans la liste voit donc déjà
  leurs effets. Les `Repeat while …`, eux, s'exécutent à leur place. Voir §7 bis.

## 4. Timers : `Every`

- `Every X` (X en millisecondes, peut être une expression, ex. `Every tpsPiece("Params")`) est
  vrai une fois toutes les X ms.
- Son horloge est propre à l'événement et **ne repart pas de zéro** quand une pièce apparaît
  ou quand un groupe se réactive **(à vérifier pour le cas du groupe)** : le premier
  déclenchement peut donc arriver n'importe quand entre 0 et X ms. C'est une source classique
  de « pauses » de durée variable.

## 5. Groupes d'événements

- Les événements peuvent être rangés dans des **groupes** (imbricables), qu'on active ou
  désactive par action : `Special : Activer le groupe « X »` / `Désactiver le groupe « X »`.
- Un groupe peut être **désactivé au démarrage** de la frame.
- Un groupe désactivé n'est pas évalué ; ses sous-groupes non plus.
- `On group activation` : condition déclenchée, vraie une fois au premier passage dans le
  groupe après son activation.
- Usage courant : une **machine à états** (ex. « Choix pièce » → « Pièce qui tombe » →
  « Pièce posée » → « Choix pièce »), chaque groupe désactivant le sien et activant le suivant.
- Un groupe activé par un événement situé **plus haut** dans la grille est évalué dans le même
  tick (le parcours continue vers le bas) ; un groupe situé plus haut ne sera évalué qu'au tick
  suivant **(à vérifier)**.

## 6. Données des objets

- **Valeurs modifiables** (alterable values) : A, B, C… par objet, nommables. L'export affiche le
  nom quand il existe : `testPosY("Params")` au lieu de `Alterable Value F("Params")`.
- **Flags** (drapeaux) : booléens numérotés **à partir de 0** (comme dans l'éditeur), nommables.
  L'export affiche `Flag 3 «testPosée»`.
- **Valeurs globales** : listées en tête d'export.
- Astuce fréquente : un objet invisible (ex. `Params`) sert de conteneur de paramètres/variables.
- **Groupes d'objets (qualifiers)** : un ensemble d'objets traités comme un seul (ex.
  « Groupe Formes »). Une condition/action sur le qualifier porte sur toutes les instances de
  tous ses membres. L'export liste les membres de chaque qualifier.

## 7. Pièges connus du langage d'expressions

- `mod` garde le signe de l'opérande gauche : `-1 mod 4 = -1` (et non 3).
- Division entière entre entiers : `7 / 2 = 3` (vérifié).
- **`a * b / c` se calcule comme `a * (b / c)`** (vérifié) : `426 * scrollY / scrollMax`
  valait 0 tant que `scrollY < scrollMax` (la division entière passe en premier), d'où un curseur de
  barre de défilement bloqué en haut. Toujours **parenthéser** une règle de trois :
  `(a * b) / c`. Signaler toute expression `… * … / …` sans parenthèses dans un projet.
- `X Left`, `X Right`, `Y Top`, `Y Bottom` : bords de l'objet ; `X Right` est **exclusif**
  (d'où les `- 1` qu'on voit souvent dans les zones).
- `Mid$(chaîne, début, longueur)` : `début` part de **0** (vérifié en jeu). Pratique pour une table
  de valeurs dans une chaîne : `Val(Mid$("484338…", n * 2, 2))`.

## 7 bis. Pièges rencontrés en pratique

Section enrichie au fil des projets. Indiquer **(vérifié)** quand l'utilisateur l'a constaté en jeu,
**(à vérifier)** sinon.

- **Musique et sons n'utilisent pas les mêmes canaux** (vérifié) : une musique (MIDI) jouée sur le
  canal 0 n'est pas coupée par un son joué sur le canal 0. Ne pas signaler de conflit de canal entre
  une musique et un bruitage. L'export affiche pourtant `Play sample …` pour les deux.
- **Un MP3 importé peut ne pas jouer du tout** (vérifié) : aucun son, aucune erreur — alors qu'un
  autre MP3 du même projet joue (variante d'encodage non lue). Si une musique reste muette alors que
  les autres jouent, soupçonner d'abord le fichier ; le remplacer ou le convertir en OGG (format le
  plus sûr, aussi pour HTML5). Dans l'export, un son garde le nom de son fichier d'origine
  (ex. `791018`) : ce n'est pas un défaut de décodage.
- **Objet Score ≠ Compteur** (vérifié) : l'objet `Score` (score du joueur) n'a pas les mêmes
  options d'affichage qu'un Compteur (9 chiffres max pour le Score, 16 pour un Compteur).
- **`Every` dérive** : préférer un compteur de frames dans une valeur modifiable (+1 dans un
  `Always`, remis à 0 quand il est consommé) pour un timing précis à la frame (jeux à 60 FPS).
- **Deux mouvements testés dans le même tick** (pattern « ombre de test ») : si un déplacement
  latéral et une descente modifient l'ombre au même tick, le test porte sur la diagonale et peut
  bloquer à tort. Séquencer (une demande par tick, ou une fast loop par étape).
- **Un appui de touche s'exécute avant les événements du dessus** (vérifié) : un test placé en
  haut de la liste (`#29 : SI ombre chevauche le décor → Game over`) voyait l'ombre déjà déplacée par
  `Player 1 Moved left` (#39, plus bas), avant que le groupe de test plus bas ne l'annule → faux
  Game over contre un mur. `Repeat while Player 1 Moved left` (non déclenché) n'avait pas le
  problème. Parade : dans un test « au repos », exiger qu'aucune demande ne soit en cours (ex. flag
  `testMouvement` désactivé), ou faire passer les appuis par un drapeau traité plus bas.
- **Un filtre posé avant un test de chevauchement n'empêche pas de tester les autres instances**
  (vérifié) : `box: Flag isMoving on` puis `NOT testMoveBlock is overlapping Groupe Objets
  physique` (qui contient `box`) bloquait bien la caisse poussée contre une **autre** caisse. Ne pas
  signaler ce cas comme un bug de sélection.
- **Le score du joueur survit à « Redémarrer la scène »** (à vérifier) : les valeurs des objets et
  les groupes reviennent à leur état initial, mais pas le score / les vies des joueurs ni les
  valeurs globales. Les remettre à zéro avant le redémarrage.
- **Tirer une image au hasard sans connaître leur nombre** (vérifié) : Fusion n'a pas
  d'expression native « nombre d'images de l'animation ». Astuce : `Force animation frame to 99`
  (ramené à la dernière image), puis `Force animation frame to Random(Image( "obj" ) + 1)`. Les 4
  variantes d'une séquence de 4 images sortent bien. On ajoute des images sans toucher aux événements.
- **Séquence d'animation qui « revient » à la séquence 0** (vérifié) : une séquence
  choisie par `Change animation sequence` (par ex. `12 + Theme` pour un thème graphique) qui n'est
  **pas en boucle** joue ses images une fois, puis l'objet revient à la séquence 0 (Arrêt). On croit
  alors que la séquence demandée n'existe pas. Pour une séquence qui sert de thème ou de variante
  fixe : cocher **« Boucler »** et mettre la **vitesse maximale à 0** (l'image ne défile plus, et
  celle choisie par `Force animation frame` reste affichée). Penser à le régler sur **chaque**
  séquence de chaque objet. Chercher cette cause avant de soupçonner un problème de numéro.
- **Un qualificatif posé sur des objets de types différents se scinde** (vérifié) : avec le
  qualificatif « Parents » sur des Actifs et des Chaînes, l'éditeur (en français) propose
  `Groupe Parent.Sprite` et `Groupe Parent.Texte`, un par type d'objet. Une action « pour tout le groupe » doit être
  dupliquée sur chacun. Ne pas promettre qu'un seul qualificatif couvre Actifs et Chaînes.
  **MfaDump affiche les deux sous le même nom** `Groupe Parents` : deux actions identiques à la suite
  sont normales (une par type). Une condition sur `Groupe Parents.Sprite` ne filtre **que** les
  Actifs : les actions sur `.Texte` dans le même événement touchent alors toutes les Chaînes. Faire
  un événement par type quand la condition sélectionne des instances.
- **Souris et objet invisible** (vérifié) : « L'utilisateur clique sur <objet> » et « Le
  pointeur est au-dessus de <objet> » fonctionnent sur un Actif **invisible au départ** (case
  « Visible au démarrage » décochée). Un Actif invisible sert donc de zone de clic qui suit sa
  position et sa taille, sans coordonnées en dur.
- **Expression d'un qualificatif dans une action sur ce qualificatif** (vérifié) :
  `Groupe Parents.Sprite : Set Y position to Y("Groupe Parents.Sprite") - 48` ne déplace pas chaque
  instance de 48 : l'expression renvoie le Y d'**une seule** instance (la dernière sélectionnée).
  Pour un qualificatif, passer par une boucle « pour chaque » (une seule instance sélectionnée par
  tour).
- **Une boucle « pour chaque » démarre après les autres actions de l'événement** (vérifié) :
  `Start loop for each one of X` puis `Set scrollPrev to scrollY` dans le même événement : la boucle
  voit déjà la nouvelle valeur de `scrollPrev`. Calculer ce dont la boucle a besoin dans une valeur
  (ex. `scrollDelta`) **avant** de la lancer, et ne plus toucher cette valeur ensuite.
- **Détruire puis recréer le même objet dans le même tick** (vérifié deux fois) : un objet
  détruit existe encore jusqu'à la fin du tick. Il compte dans le « nombre maximum d'objets » de la
  scène (des créations échouent sans erreur), et les actions qui suivent une création dans le même
  tick peuvent viser les mauvaises instances (textes non écrits, images non changées). Cas vus :
  aperçu de la minicarte redessiné, liste de niveaux reconstruite au changement de pack. Solution :
  détruire au tick N, recréer au tick N+1 (une valeur d'étape : 1 = à reconstruire, 0 = rien).
- **Actif détruit quand il sort trop loin de la scène** (vérifié) : l'option d'un Actif
  « Détruire si trop loin de la scène » (cochée par défaut) le détruit sans événement quand il
  dépasse la zone de jeu. Les Chaînes n'ont pas cette option. Pour des objets qu'on fait défiler
  loin hors de l'écran (listes), la décocher.
- **Numéros des séquences d'animation** (vérifié) : les séquences prédéfinies vont de 0
  à 11, puis les ajouts reçoivent 12, 13… Une nouvelle séquence prend le numéro maximum + 1.
  Supprimer une séquence ajoutée **renumérote** les suivantes : pas de trou, mais celles d'après
  descendent d'un cran. Avec un calcul `base + n` (ex. `12 + Theme`), supprimer un thème décale tous
  les thèmes suivants : en tenir compte dans les valeurs de `n`.
- **Tableau (Array) créé en type texte au lieu de numérique** (vérifié) : `Write Value` et
  `ValueAtXY` ne fonctionnent pas, sans erreur, et les tests `ValueAtXY(…) = 1` restent faux. MfaDump
  n'exporte pas les propriétés des objets : si un tableau semble vide, faire vérifier son type
  (numérique / texte), ses dimensions (défaut 10 × 1 × 1) et l'option « base 1 ».
- **Créer un objet directement à sa position** (préférence de l'utilisateur) : pour créer un objet
  puis le placer, proposer l'action « Créer <objet> en X=…, Y=…, Calque=… »
  (`Create <p0> at X=<p1>, Y=<p2>, Layer=<p3>`, voir `bible/objets-integres.md`, section Créer)
  plutôt que trois actions `Create … at (0,0)` + `Set X position` + `Set Y position`. Une seule
  action à saisir et à relire, et l'objet n'apparaît jamais en (0,0). L'export de projets existants
  montre souvent l'ancienne forme : la signaler comme
  simplification possible, pas comme un bug.
- **Objet « en retard » d'un affichage = d'abord vérifier son calque** (vérifié) : textes
  traduits par images (FR/EN) restés en français pendant un chargement, puis passés en anglais
  à la fin. Cause : les objets étaient sur un calque caché au Start of Frame et réaffiché après le
  chargement ; on voyait à travers le texte français dessiné dans le décor de fond. Ce n'était ni
  une race condition ni un défaut de rafraîchissement (passer la vitesse d'animation à 1 n'a rien
  changé). MfaDump n'exporte pas le calque des objets : le demander à l'utilisateur. Garder sur un
  calque toujours visible ce qui ne doit pas être caché, et préférer des fonds sans texte.
- **« On group activation » dans un OU** (vérifié) : la condition n'est vraie qu'une fois
  par activation. Dans `SI On group activation + A  OU  On group activation + B`, le premier bloc
  la consomme ; si A est faux, le second bloc ne se déclenche jamais, même si B est vrai. Faire
  deux événements séparés, chacun avec son « On group activation ».
- **Emplacement de l'INI** (vérifié) : l'objet Ini sans chemin écrit dans
  `%APPDATA%\MMFApplications\<fichier>.ini`, pas dans le dossier du jeu.

---

## 8. Format de l'export MfaDump

```
Application : <nom>  (build Fusion <n>)
Fenêtre : <largeur>x<hauteur>, <fps> FPS
== Valeurs globales ==            (si nommées)
################ FRAME : <nom> ################
== Objets ==                      nom (type)  valeurs: nom=valeur initiale, ...
== Groupes d'objets (qualifiers) ==   nom : membres
== Événements ==
  === GROUPE « Nom » ===  (désactivé au démarrage)
      // commentaire de l'auteur
      #24  [DÉSACTIVÉ]
        SI    condition
        SI    condition
        FAIRE action
  === fin de groupe ===
```

- **`#n` = numéro de ligne affiché dans l'éditeur de Fusion** (vérifié sur un projet réel). On
  peut donc citer `#69` à l'utilisateur. **Occupent un numéro** : chaque événement, chaque
  commentaire `//`, chaque en-tête `=== GROUPE … ===` **et chaque ligne `=== fin de groupe ===`**.
  Les lignes vides de l'export ne comptent pas. Pour connaître le numéro d'un en-tête ou d'un
  commentaire (non affiché), compter à partir du `#n` le plus proche.
- Les libellés des conditions/actions sont **en anglais** (ceux de Nebula), même si l'éditeur de
  l'utilisateur est en français : `Set Flag 0 on` = « Mettre un drapeau sur ON ».
- Les actions vides que Fusion insère automatiquement sont masquées.
- `[DÉSACTIVÉ]` : événement désactivé dans l'éditeur (il n'est pas exécuté).

### Limites connues de l'export

- Un export produit par une **ancienne version** de MfaDump peut contenir des défauts corrigés depuis
  (par exemple les valeurs globales lues dans une expression, les nombres à virgule affichés comme
  un grand entier `* 1072955392` au lieu de `* 1.25`, corrigés le 26/10/2026, ou un décimal rond
  affiché `* 1` au lieu de `* 1.0`, corrigé le 28/10/2026) : en cas de doute, relancer l'export
  avec le `MfaDump.exe` à jour.
- Un nombre décimal s'affiche toujours avec un point (`1.0`, `2.5`) ; un entier sans point (`1`).
  La différence compte : une opération entre entiers reste entière (`7 / 2 = 3`) **(à vérifier)**.
- Certains paramètres peuvent être mal décodés ; ils apparaissent alors bruts ou incohérents.
  Exemples observés : `Set direction to ...........` (paramètre de direction non traduit),
  `Player 1 Pressed fire 1, Moved ` (texte tronqué).
- `[ERROR] Could not find ObjectType …` ou `[?? type …]` : condition/action inconnue de Nebula.
  Consulter la fin de `bible/objets-integres.md`, sinon demander une capture de l'éditeur.
- **Extensions** : l'export affiche `<objet> : Event ID 89, …` ou `Expression ID 88(…)`. Chercher
  la page de l'extension dans `bible/extensions/` : action / expression = 80 + code (89 → code 9),
  condition = −(81 + code).
- **Syntaxe de l'éditeur ≠ syntaxe de l'export** (vérifié) : `Expression ID 83("Ini")"Game", "sound")`
  s'écrit dans l'éditeur `GroupItemValue( "Ini", "Game", "sound" )`. Toute expression liée à un objet
  prend le nom de l'objet entre guillemets **en 1er paramètre**, avant ceux listés par la bible.
  L'oublier dans une proposition donne une expression refusée par l'éditeur.
- En cas de doute sur une ligne, **demander une capture d'écran de l'événement** plutôt que de
  deviner.
- Validé sur 162 projets (MFU2 builds 280 à 296, anciens MMF2 builds 241 à 258, projets à
  plusieurs frames et avec extensions).

### Façon de travailler recommandée

1. L'utilisateur lance `MfaDump.exe` sur son `.mfa` (glisser-déposer) et fournit le `.txt`.
2. Analyser la logique à partir de l'export (machine à états des groupes, timers, ordre).
3. Proposer les modifications **sous forme d'instructions pour l'éditeur Fusion** (quel
   événement, quelle condition/action, quel objet, quel flag par son nom), car l'outil est en
   lecture seule.
4. Après sauvegarde dans Fusion, relancer l'export pour vérifier les modifications.
