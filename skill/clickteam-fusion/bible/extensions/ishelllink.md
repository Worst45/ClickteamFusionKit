# Extension ishelllink

- Fichier : `ishelllink.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On failure | `<objet> on failure` |  |  | — |  |
| 1 | -82 | On error | `<objet> on error` |  |  | — |  |
| 2 | -83 | File > Is dirty? (needs to be saved) | `<objet> is dirty?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Clear last HRESULT code | `<objet> Clear last error` |  |  | — |  |
| 1 | 81 | File > Load | `<objet> load from file=<p0>` |  | nom de fichier « #Title#Select shell link to load#Filter#Shell link files (*.lnk)\|*.lnk\|All files (*.*)\|*.*\| » | — |  |
| 2 | 82 | File > Save to | `<objet> save to file=<p0>` |  | nom de fichier « #Title#Select file to save shell file in#Filter#Shell link files (*.lnk)\|*.lnk\|All files (*.*)\|*.*\| » | — |  |
| 3 | 83 | Content > Resolve path | `<objet> resolve shell link` |  |  | — |  |
| 4 | 84 | Content > Set arguments | `<objet> set arguments, args=<p0>` |  | expression chaîne « Shell link arguments » | — |  |
| 5 | 85 | Content > Set description | `<objet> set description, desc=<p0>` |  | expression chaîne « Shell link description » | — |  |
| 6 | 86 | Content > Set hot key | `<objet> set hot key, hotkey=<p0>` |  | expression numérique « Shell link hot key, see MSDN for details » | — |  |
| 7 | 87 | Content > Set icon location | `<objet> set icon location, file=<p0>, icon=<p1>` |  | nom de fichier « #Title#Select link icon location#Filter#All files (*.*)\|*.*\| » ; expression numérique « Index of icon to use » | — |  |
| 8 | 88 | Content > Set path | `<objet> set target, path=<p0>` |  | expression chaîne « #Title#Select shell link's target file#Filter#All files (*.*)\|*.*\| » | — |  |
| 9 | 89 | Content > Set relative path | `<objet> set relative path, ref file=<p0>` |  | expression chaîne « #Title#Select reference file#Filter#All files (*.*)\|*.*\| » | — |  |
| 10 | 90 | Content > Set show cmd | `<objet> set show cmd, cmd=<p0>` |  | expression numérique « Show window command, see MSDN for details » | — |  |
| 11 | 91 | Content > Set working directory | `<objet> set working directory, dir=<p0>` |  | expression chaîne « Shell link target's initial working directory » | — |  |
| 12 | 92 | Reset | `<objet> reset` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get last HRESULT code | `getLastHResultCode(` |  |  | — |  |
| 1 | 81 | Content > Get arguments | `getArguments$(` |  | → chaîne | — |  |
| 2 | 82 | Content > Get description | `getDescription$(` |  | → chaîne | — |  |
| 3 | 83 | Content > Get hot key | `getHotKey(` |  |  | — |  |
| 4 | 84 | Content > Get icon location path | `getIconLocationPath$(` |  | → chaîne | — |  |
| 5 | 85 | Content > Get icon index | `getIconLocationIndex(` |  |  | — |  |
| 6 | 86 | Content > Get raw path | `getRawPath$(` |  | → chaîne | — |  |
| 7 | 87 | Content > Get show cmd | `getShowCmd(` |  |  | — |  |
| 8 | 88 | Content > Get working directory | `getWorkingDirectory$(` |  | → chaîne | — |  |
