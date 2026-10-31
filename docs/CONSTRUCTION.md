# ClickteamFusionKit — construction et maintenance

Ce document s'adresse à un LLM ou à un développeur qui doit **reconstruire, corriger ou étendre** le
kit. Pour **utiliser** les outils, voir `skill/clickteam-fusion/SKILL.md` ; pour le moteur de Fusion
et le format de l'export, `skill/clickteam-fusion/CONTEXTE_CLICKTEAM.md`.

## 1. Vue d'ensemble

```
ClickteamFusionKit\
├── skill\clickteam-fusion\   à utiliser : SKILL.md, MfaDump.exe (compilé), CONTEXTE_CLICKTEAM.md, bible\
├── src\
│   ├── MfaDump\              export des événements d'un .mfa (C#, .NET 8)
│   ├── NebulaCatalog\        catalogue des objets intégrés, extrait du code de Nebula (Roslyn)
│   ├── ExtCatalog\           catalogue des extensions .mfx (32 bits)
│   ├── NebulaTest\           banc de test : rendu brut de Nebula sur un .mfa ou un .exe
│   └── bible\generate.js     générateur de la bible
├── external\NebulaFD\        sous-module : fork Worst45/NebulaFD, branche mfa-dump-enhanced
├── data\                     entrées de la bible (versionnées, publiques)
│   ├── catalog-nebula.json   objets intégrés
│   ├── extensions\installed\ catalogues des extensions installées avec Fusion
│   ├── extensions\third-party\ catalogues d'extensions tierces
│   ├── usage.json            statistiques d'usage publiques (compteurs + exemples officiels de Fusion)
│   └── fr-cache.json         traductions françaises utilisées (pour régénérer sans Fusion installé)
├── scripts\                  build.ps1, install-skill.ps1, regen-bible.ps1, update-catalogs.ps1, corpus\
├── work\                     LOCAL : exports, statistiques complètes, provenance des règles
└── tools\                    LOCAL : SDK .NET, Node portable, outils de maintenance compilés
```

Licence : le dépôt d'origine de Nebula n'a pas de licence. Le kit ne contient que son propre code et
récupère Nebula depuis GitHub (sous-module) ; ne pas publier de binaires incluant Nebula.

Confidentialité : tout ce qui contient des noms de projets personnels reste dans `work\` (ignoré par
git). `data\usage.json` et la bible n'ont que des compteurs et des exemples tirés des exemples officiels
de Fusion. La doc dit « (vérifié) » sans nom de projet ; la provenance va dans `work\provenance.md`.

## 2. Le fork de Nebula

[Nebula](https://github.com/AITYunivers/NebulaFD) (C#, `net6.0`) décompile les jeux Fusion ; sa
bibliothèque `Nebula.Core` lit aussi les `.mfa`. Le fork part du commit amont `a24d4d1` (20/09/2026).
L'auteur d'origine refuse les contributions faites avec un LLM (PR #65 refusée) : **ne pas reproposer
ces corrections en amont**. Pour intégrer des nouveautés amont :
`git -C external\NebulaFD fetch https://github.com/AITYunivers/NebulaFD.git 2024-nebula` puis fusion
dans `mfa-dump-enhanced`, retest avec `NebulaTest`, push sur le fork, puis commit du nouveau pointeur
de sous-module dans le kit.

| Commit | Contenu |
|---|---|
| `eadb1c4` | Références d'objets MFA (handles d'EventObject, résolution centralisée dans `FrameEvents.GetMFAObject` / `GetMFAQualifierName` / `GetMFAObjectName`) ; rendu des groupes (`-1/-10`, `-1/-11`), de `Skip` (`-1/0`) ; `GroupLookupTable` pour les MFA ; `ParameterComment` (code 37 : police, couleurs, `TextID` → `FrameEvents.Comments`, réécriture à l'octet près) ; zones par expressions (code 72 + 4 expressions, `ACEventBase.GetZone`) ; noms de flags (`MFAAltFlags`) ; `GetCommitHash` en publication single-file |
| `ea4f12b` | Compatibilité : MFU2 builds 280-291 (champ après le mot de passe de frame = chaîne MFA), MMF2 241-258 (pas d'ID de langue après le build, pas d'entier « Is Unicode » des extensions), bloc des réglages d'installeur de taille variable, barre de menus, icônes absentes, conversion d'objet tolérante, **numéros d'objets propres à chaque frame** (`Frame.MFAItems`) |
| `00e3b90` | « Jump to frame » : paramètre 26 entier 32 bits en build 296 ; en MFA, scène retrouvée par son `Handle` (`FrameHandles` y est index → handle, l'inverse d'un exe) |
| `4818229` | Valeurs / chaînes globales dans une expression : l'index est `ExpressionCommon.Value` (l'ancien calcul donnait toujours 0) |
| `69a5b8f` | Nombres décimaux : `ByteReader.ReadDouble` lisait le format à virgule fixe de certains exports non Windows dès que `NebulaCore.Windows` était faux, donc toujours pour un MFA ; rendu en culture invariante |
| `4b55799` | Décimal rond affiché avec `.0` (`1.0`), pour le distinguer d'un entier |
| `8ea6657` | `Parameter.Raw` : octets bruts de chaque paramètre (débogage) |

## 3. MfaDump (`src\MfaDump\Program.cs`)

Programme C# en « top-level statements ».

1. **Arguments** : `MfaDump <fichier.mfa> [sortie.txt]`, ou plusieurs `.mfa` (glisser-déposer). Avec
   plusieurs fichiers, l'exe **se relance une fois par fichier** (Nebula garde de l'état statique).
2. **Chargement** : `NebulaCore.Init()`, puis `MFAFileReader.LoadGame(new ByteReader(bytes))` ; le
   fichier est lu en mémoire (jamais ouvert en écriture).
3. **Rendu** (`DumpEvents`) : texte de Nebula (`Condition.ToString()` / `Action.ToString()`) ; MfaDump
   ne fait que la mise en forme : groupes (`=== GROUPE « nom » ===`, indentation), commentaires
   (`// texte`), actions `Skip` masquées, `[DÉSACTIVÉ]`.
4. **Noms lisibles** (`CollectNames` + `WithNames`) : `Flag N «nom»`, noms des valeurs modifiables ;
   un qualifier prend les noms de son premier membre ; tables d'objets **par frame** (`frame.MFAItems`).
5. **Écriture** en UTF-8 avec BOM. Erreur isolée → `[?? type T, num N : Exception]` sans interrompre.

Options (variables d'environnement) :
- `MFADUMP_JSONL=1` : écrit aussi `<sortie>.jsonl`, une ligne par condition (`C`), action (`A`) et
  élément d'expression (`E`) : frame, n° d'événement, type, numéro, extension (nom et fichier `.mfx`),
  objet, paramètres, texte. Utilisé par le corpus.
- `MFADUMP_RAW=<code>` : sous chaque condition / action ayant un paramètre de ce code, affiche tous ses
  paramètres avec leurs octets bruts. C'est ainsi qu'ont été décodés les commentaires (37), les zones
  (72), les globales et les décimaux.

Banc de test `src\NebulaTest` : rendu brut de Nebula sur un `.mfa` **ou un `.exe` compilé** (même
projet) ; compiler contre une autre version de Nebula avec `-p:NebulaDir=<dossier>` pour comparer
avant/après ; `-p:DefineConstants=RAW` + `NEBULATEST_RAW=<code>` pour les octets bruts et le test
d'aller-retour de `ParameterComment` ; `NEBULATEST_HANDLES=1` liste les numéros d'objets par frame.

## 4. Catalogues et bible

1. **Corpus** (`scripts\corpus\run-corpus.ps1`) : exporte avec `MFADUMP_JSONL=1` tous les `.mfa` des
   sources (`-Sources 'libellé=dossier'`, plus les exemples et tutoriels de Fusion sous les libellés
   `fusion_examples` / `fusion_tutorials`) dans `work\corpus\`, dédoublonnés par SHA1 (`index.csv`),
   un processus par fichier. `analyse.js` classe les échecs par version de format (en-tête `MFU2` /
   `MMF2` et build) et par endroit du plantage. `stats.js` écrit `work\corpus\_stats.json` (complet,
   local) et `data\usage.json` (public : seuls les exemples des sources `fusion_*`).
2. **Objets intégrés** (`NebulaCatalog`) : Roslyn analyse `Condition.GetString`, `Action.ToString` et
   `ParameterExpression.ToString` ; pour chaque `return`, la chaîne de `switch`/`if` englobants donne
   type d'objet, numéro et cas particuliers → `data\catalog-nebula.json`.
3. **Extensions** (`ExtCatalog`, 32 bits car les `.mfx` sont des DLL 32 bits du SDK Fusion) : charge
   chaque extension et appelle ses fonctions d'édition comme l'éditeur : `Get{Condition,Action,
   Expression}Menu`, `…CodeFromMenu`, `…String`, `…Infos`, `…Title` / `GetExpressionParam`.
   - Structure `mV` factice dont chaque emplacement pointe vers `mov eax, 0x20000128 ; ret` : satisfait
     le test de compatibilité `mvGetVersion()`.
   - Un processus par extension et par type, 4 essais (menu de l'extension ; sans texte ; menus lus
     dans les ressources, convention actions 25000+, conditions 26000+, expressions 27000+ ; sans
     texte). Sans `…CodeFromMenu`, code déduit de l'identifiant (`codeGuessed`).
   - Extensions non Unicode : textes ANSI, redécodés par le générateur (`fixAnsi`).
   - Certaines extensions ouvrent des fenêtres d'aide pendant l'extraction (sans danger).
   - Correspondance avec les événements (vérifiée) : condition = −(81 + code), action / expression =
     80 + code.
   - **Sécurité** : ExtCatalog exécute le code des `.mfx` ; ne l'utiliser que sur des extensions de
     confiance (`update-catalogs.ps1 -ThirdParty <dossier>`).
4. **Bible** (`src\bible\generate.js`, via `scripts\regen-bible.ps1`) : combine les catalogues,
   `data\usage.json` et les traductions françaises de Fusion (`Languages\fr-fr\Modules\*.txt`, JSON non
   strict anglais → français ; à défaut `data\fr-cache.json`, qui ne garde que les traductions
   utilisées) → `skill\clickteam-fusion\bible\`. **Ne jamais modifier la bible à la main.**

## 5. Compiler

`scripts\build.ps1` (voir l'en-tête du script) : récupère Nebula (sous-module, ou zip sans git),
utilise le SDK .NET 8+ du système ou l'installe dans `tools\dotnet\`, publie `MfaDump.exe` autonome
dans `skill\clickteam-fusion\`. `-All` publie aussi `NebulaCatalog`, `ExtCatalog` et `NebulaTest` dans
`tools\bin\`.

- Nebula écrit un `config.json` à côté de l'exe : sans conséquence (ignoré par git).
- `NebulaCore.Init()` appelle `ZLibInit.GlobalInit("zlibwapi.dll")` alors que seule `zlib1.dll` est
  fournie ; la lecture des événements fonctionne quand même. Si un projet échoue sur une
  décompression, commencer par là.

## 6. Pistes d'évolution

- Décoder les combinaisons intégrées restantes (fin de `bible\objets-integres.md`).
- Décoder le paramètre de direction (`Set direction to ...........`).
- Aligner les libellés intégrés sur ceux de l'éditeur (aujourd'hui ceux de Nebula, en anglais).
