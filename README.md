# ClickteamFusionKit

Outils pour faire analyser un projet **Clickteam Fusion 2.5** (`.mfa`) par un LLM :

- **MfaDump** : exporte les événements d'un `.mfa` (conditions, actions, expressions, groupes,
  commentaires) en texte lisible. Lecture seule : le `.mfa` n'est jamais modifié.
- **La bible** : référence de toutes les conditions / actions / expressions connues (objets intégrés
  et 410 extensions), avec les libellés français de l'éditeur.
- **La skill `clickteam-fusion`** : point d'entrée pour le LLM (comment lire un projet, comprendre le
  moteur de Fusion, proposer des modifications).

MfaDump s'appuie sur [Nebula](https://github.com/AITYunivers/NebulaFD) (décompilateur Fusion de
Yunivers), via le fork [Worst45/NebulaFD](https://github.com/Worst45/NebulaFD), branche
`mfa-dump-enhanced`, qui corrige la lecture des `.mfa` (anciens formats, projets à plusieurs scènes,
commentaires, groupes, zones, valeurs globales, nombres décimaux…). Le dépôt d'origine n'a pas de
licence : ce kit ne contient **que du code source** et récupère Nebula depuis GitHub à la compilation.

## Installation (Windows)

```powershell
git clone --recurse-submodules https://github.com/Worst45/ClickteamFusionKit.git
cd ClickteamFusionKit
powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1
```

`install-skill.ps1` compile MfaDump si besoin, puis installe la skill pour Claude Code (lien vers
`skill\clickteam-fusion\`, donc toujours à jour avec le kit).

Rien d'autre à installer :
- **.NET** : si le SDK .NET 8 n'est pas présent, `build.ps1` l'installe dans `tools\dotnet\` (local au
  kit, environ 300 Mo). `MfaDump.exe` produit est autonome.
- **Nebula** : sous-module git ; sans git (kit téléchargé en zip), `build.ps1` télécharge le fork.
- **Node.js** : seulement pour régénérer la bible ; s'il est absent, `regen-bible.ps1` télécharge la
  version portable officielle dans `tools\node\`.

## Utilisation

- **Avec Claude Code** : parler du projet Fusion ; la skill `clickteam-fusion` se charge seule.
- **Avec un autre LLM** : lui donner le dossier `skill\clickteam-fusion\` (point d'entrée : `SKILL.md`).
- **À la main** : glisser un `.mfa` sur `skill\clickteam-fusion\MfaDump.exe` → `<projet>.events.txt`
  à côté du `.mfa`.

## Organisation

| Dossier | Contenu |
|---|---|
| `skill\clickteam-fusion\` | ce qu'il faut pour **utiliser** : `SKILL.md`, `MfaDump.exe` (compilé), `CONTEXTE_CLICKTEAM.md`, `bible\` |
| `src\` | sources : `MfaDump`, `NebulaCatalog` (catalogue des objets intégrés), `ExtCatalog` (catalogue des extensions, 32 bits), `NebulaTest` (banc de test), `bible\generate.js` |
| `external\NebulaFD\` | sous-module : le fork de Nebula |
| `data\` | catalogues extraits et statistiques d'usage **publiques** (aucun nom de projet personnel) |
| `scripts\` | `build.ps1`, `install-skill.ps1`, `regen-bible.ps1`, `update-catalogs.ps1`, `corpus\` |
| `docs\CONSTRUCTION.md` | fonctionnement interne et maintenance |
| `work\` | **local, non versionné** : exports de projets, statistiques complètes, provenance des règles |
| `tools\` | **local, non versionné** : SDK .NET, Node portable, outils de maintenance compilés |

## Faire évoluer

```powershell
scripts\build.ps1                    # recompile MfaDump (après une modification de src\ ou de Nebula)
scripts\build.ps1 -All               # + outils de maintenance (catalogues, banc de test)
scripts\regen-bible.ps1              # régénère la bible depuis data\
scripts\regen-bible.ps1 -Corpus -Sources 'perso=C:\Jeux\mes-jeux'   # réanalyse des projets d'abord
scripts\update-catalogs.ps1          # réextrait les catalogues (Nebula, extensions de Fusion)
```

Détails : `docs\CONSTRUCTION.md`.
