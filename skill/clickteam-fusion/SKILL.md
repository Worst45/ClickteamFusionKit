---
name: clickteam-fusion
description: Aider sur un projet Clickteam Fusion 2.5 (fichier .mfa) — lire ses événements (conditions, actions, expressions) avec MfaDump, comprendre la logique, déboguer, proposer des modifications à faire dans l'éditeur Fusion. À utiliser dès qu'il est question de Clickteam Fusion, Multimedia Fusion, d'un fichier .mfa ou de l'éditeur d'événements de Fusion.
---

# Clickteam Fusion 2.5 — point d'entrée

Ce fichier est le **point d'entrée** pour aider sur un projet Clickteam Fusion. Il dit quoi faire et
renvoie vers les documents détaillés, à ouvrir seulement quand c'est utile.

Les fichiers cités sont dans le même dossier que ce `SKILL.md` : le dossier `skill/clickteam-fusion/`
du kit **ClickteamFusionKit** (installé comme skill Claude Code par un lien vers ce dossier) :

| Fichier | Contenu | Quand l'ouvrir |
|---|---|---|
| `MfaDump.exe` | exporte les événements d'un `.mfa` en texte (compilé par `scripts\build.ps1` du kit) | toujours, pour lire un projet |
| `CONTEXTE_CLICKTEAM.md` | modèle d'exécution de Fusion (ticks, fast loops, sélection d'objets, groupes, timers) et format de l'export | avant d'analyser une logique ou un bug |
| `bible/README.md` | mode d'emploi de la référence : numérotation, placeholders, types de paramètres | avant de chercher une condition/action |
| `bible/objets-integres.md` | toutes les conditions / actions / expressions des objets intégrés, libellés FR de l'éditeur, usage réel, exemples | pour savoir ce qui existe nativement |
| `bible/extensions/README.md` + une page par extension | conditions / actions / expressions de 410 extensions | quand le projet utilise une extension |
| `../../docs/CONSTRUCTION.md` | fabrication et maintenance du kit (MfaDump, Nebula, catalogues, bible) | seulement pour faire évoluer l'outillage |

## 1. Lire un projet

Le `.mfa` est binaire et non documenté : ne pas essayer de le lire directement.

```
MfaDump.exe "chemin\projet.mfa"              -> chemin\projet.events.txt
MfaDump.exe "projet.mfa" "sortie.txt"         -> sortie choisie
MfaDump.exe a.mfa b.mfa ...                   -> un .events.txt par projet (ou glisser-déposer sur l'exe)
```

- MfaDump **ne modifie jamais** le `.mfa` (lecture en mémoire). Il fonctionne sans installer .NET.
- Si tu ne peux pas lancer de programme, demande à l'utilisateur de glisser son `.mfa` sur
  `MfaDump.exe` et de te fournir le `.events.txt` produit.
- L'export contient : taille de fenêtre et FPS, valeurs globales, puis par frame les objets (avec
  leurs valeurs modifiables nommées), les groupes d'objets (qualifiers) et les événements :
  `=== GROUPE « … » ===`, commentaires de l'auteur `// …`, `#n` (= numéro de ligne affiché dans
  l'éditeur), lignes `SI` (conditions) et `FAIRE` (actions), `[DÉSACTIVÉ]`.
- Après chaque modification faite par l'utilisateur dans Fusion : lui demander de **sauvegarder**,
  relancer MfaDump et vérifier.
- Option statistiques : variable d'environnement `MFADUMP_JSONL=1` → `<projet>.events.jsonl`, une ligne
  par condition (`C`), action (`A`) et élément d'expression (`E`).

## 2. Comprendre ce qu'on lit

Lire `CONTEXTE_CLICKTEAM.md` (sections 1 à 7 pour le moteur, 8 pour l'export). L'essentiel :

- À chaque tick, Fusion évalue **tous les événements actifs de haut en bas** ; l'ordre compte.
- Une **fast loop** (`Start loop` / `On loop`) s'exécute entièrement dans le tick, comme une boucle `for`.
- Les conditions **sélectionnent** les instances sur lesquelles les actions s'appliquent.
- Les **groupes** activés/désactivés servent souvent de machine à états.
- `Every X` suit sa propre horloge : source classique de pauses de durée variable.
- Les libellés de l'export sont **en anglais** (ceux de Nebula). L'utilisateur peut avoir l'éditeur en
  français : utiliser la colonne « Libellé FR » de la bible pour lui parler avec les mots de son éditeur.
- Flags numérotés à partir de 0, comme dans l'éditeur ; l'export ajoute leur nom : `Flag 3 «testPosée»`.

## 3. Trouver une condition / action / expression

- **Objets intégrés** (Spécial, Son, Scène, Timer, Clavier/souris, Joueurs, Active, String, Counter…) :
  `bible/objets-integres.md`, rangé par objet puis Conditions / Actions / Expressions.
- **Extensions** : l'export brut affiche `Objet : Event ID 89, …` ou `Expression ID 88(…)`.
  Ouvrir `bible/extensions/README.md`, trouver l'extension (par son nom affiché), puis :
  action / expression = 80 + code (89 → code 9), condition = −(81 + code) (−82 → code 1).
- Ligne `[ERROR]` ou `[??]` : voir la fin de `bible/objets-integres.md` ; sinon demander une
  **capture d'écran de l'événement** plutôt que de deviner.
- La colonne **Usage** indique combien de fois l'entrée a été vue dans 162 projets réels : une entrée
  jamais vue existe mais est moins éprouvée.

## 4. Proposer des modifications

MfaDump est en lecture seule : on ne modifie pas le `.mfa` par programme. Donner des **instructions pas à
pas pour l'éditeur Fusion** :

- quel événement (`#n`, groupe), quelle condition ou action ajouter/retirer, sur quel objet ;
- nommer flags et valeurs **par leur nom** (et leur numéro), avec le libellé de l'éditeur ;
- expliquer pourquoi (ordre des événements, sélection, timer…), puis faire vérifier par un nouvel export.

### Écrire une expression comme dans l'éditeur

L'export n'utilise pas la syntaxe de l'éditeur : il faut la **traduire** avant de la donner à l'utilisateur.
Dans l'éditeur, une expression liée à un objet prend **le nom de l'objet entre guillemets en 1er
paramètre**, puis ses paramètres. La bible ne le rappelle pas dans sa colonne Paramètres.

| Export MfaDump | À écrire dans l'éditeur |
|---|---|
| `Expression ID 83("Ini")Str$(indPack), Str$(indLevel))` | `GroupItemValue( "Ini", Str$(indPack), Str$(indLevel) )` |
| `Expression ID 89("meta")0, indPack)` | `StrAtXY( "meta", 0, indPack )` |
| `X("hero")` | `X( "hero" )` |

Le nom de l'expression vient de la colonne « Texte affiché » de la bible (`GroupItemValue(`) ; l'objet est
celui que l'export met entre parenthèses juste après `Expression ID n`.

### Préférer les fonctions natives aux extensions

**Ne pas proposer d'ajouter une extension quand les objets et événements intégrés de Fusion
permettent de faire la même chose.** Beaucoup d'extensions ne fonctionnent que sur certaines
plateformes (Windows uniquement, HTML5 uniquement, Android/iOS…) : en ajouter une peut **bloquer la
compilation** du jeu vers une autre cible, et oblige l'utilisateur à l'installer.

- D'abord chercher une solution native dans `bible/objets-integres.md` : valeurs et chaînes
  modifiables, flags, valeurs globales, fast loops, groupes, qualifiers, timers, mouvements intégrés…
- Si le projet utilise **déjà** une extension, on peut s'en servir (elle est installée et acceptée).
- Si une extension est vraiment nécessaire : le dire explicitement, expliquer pourquoi le natif ne
  suffit pas, et **demander à l'utilisateur** ses plateformes cibles avant de l'adopter.

### Bonnes pratiques de l'utilisateur

Conventions à respecter dans toutes les propositions (noms d'objets, structure). Section enrichie au fil
des projets.

- **Préfixer les objets « spéciaux »** selon leur type, pour les retrouver facilement :
  `lbl` (texte / label), `str` (String / Chaîne), `compteur` (Compteur), etc.
  Ex. `compteurLignes`, `strScore`. Ne s'applique pas aux décors ni aux objets actifs classiques
  (`Pièce bleue`, `Bord`…).
- **Centraliser l'état général du jeu dans un objet de paramètres** (un Actif invisible, par ex.
  `Params`) : vitesses, score intermédiaire, niveau, états de la partie… plutôt que de les disperser.
  Les valeurs globales restent réservées à ce qui doit survivre à un changement de scène.
- **Les acteurs portent leur propre état** : les objets actifs nécessaires au moteur (caméra, joueur…)
  et au comportement des ennemis et autres entités **doivent** avoir leurs valeurs / drapeaux associés
  (ex. `enTrainDeTirer`, `pv`, `etat`), pas dans `Params`.
- **Commenter** : proposer des lignes de commentaire pour séparer les grands blocs d'événements et
  expliquer une astuce non évidente (ex. `// Tirage NES de la pièce suivante`). Donner le texte exact
  et l'emplacement. Un commentaire occupe un numéro de ligne : le compter dans les décalages, ou le
  faire ajouter en dernière étape.
- Les objets **purement d'affichage** (HUD : compteurs, chaînes, labels) ne stockent pas d'état : ils
  recopient les valeurs de l'objet de paramètres ou des acteurs.

### Numéros de lignes qui bougent

Ajouter ou supprimer un événement (ou un commentaire, ou un groupe : ils occupent aussi un numéro)
**décale tous les numéros `#n` situés en dessous**. Quand une proposition comporte plusieurs
étapes :

- Donner les numéros **tels qu'ils seront au moment où l'utilisateur fera l'étape**, en tenant compte
  des insertions/suppressions des étapes précédentes, avec la notation **`#35 + 2 → #37`**
  (numéro dans l'export + décalage → numéro réel dans l'éditeur).
- Quand c'est possible, ordonner les modifications **du bas vers le haut** : les numéros plus haut ne
  bougent pas.
- Repérer aussi chaque événement par son contenu (groupe, première condition) en plus de son numéro.

## 5. Limites à garder en tête

- **Faire évoluer la doc sans attendre qu'on le demande** : chaque piège découvert en travaillant
  (comportement de Fusion, de l'export, de l'éditeur) va dans `CONTEXTE_CLICKTEAM.md` §7 bis ; chaque
  préférence de l'utilisateur va dans « Bonnes pratiques » ci-dessus.
  - Ces fichiers sont la **source unique** : modifier directement ceux de ce dossier (la skill
    installée est un lien vers lui). Puis committer dans le dépôt du kit.
  - Une règle vérifiée s'écrit « **(vérifié)** », **sans nom de projet** : la doc est générale. Le
    projet et l'emplacement où elle a été vérifiée se notent dans `work/provenance.md` du kit
    (fichier local, non versionné).
  - **Ne jamais corriger à la main les fichiers de `bible/`** : ils sont **régénérés** par
    `src/bible/generate.js` (`scripts\regen-bible.ps1`), et tout ajout manuel serait perdu. Si une
    connaissance doit apparaître dans la bible, modifier les textes de `generate.js` puis régénérer.

- Les points marqués **(à vérifier)** dans `CONTEXTE_CLICKTEAM.md` sont des hypothèses, pas des
  certitudes.
- Les libellés des objets intégrés sont ceux de Nebula (anglais), proches mais pas identiques à ceux de
  l'éditeur.
- Quelques paramètres restent mal décodés (par exemple `Set direction to ...........`) : en cas de
  doute, demander une capture.
- MfaDump est validé sur 162 projets (Fusion 2.5 builds 280-296, MMF2 builds 241-258, plusieurs frames,
  extensions).
