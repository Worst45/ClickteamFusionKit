# Extension fcMMF2params

- Fichier : `fcMMF2params.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Application > Set Name | `Set Application Name to <p0>` |  | expression chaîne « Application Name » | — |  |
| 1 | 81 | Application > Set AboutBox Text | `Set Application AboutBox Text to <p0>` |  | expression chaîne « AboutBox Text » | — |  |
| 2 | 82 | Frame > Set Name | `Set Current Frame Name to <p0>` |  | expression chaîne « Frame Name » | — |  |
| 3 | 83 | Application > Set Copyright | `Set Application Copyright to <p0>` |  | expression chaîne « Application Copyright » | — |  |
| 4 | 84 | Application > Set Documentation Path | `Set Application Documentation Path to <p0>` |  | expression chaîne « Application Documention Path » | — |  |
| 5 | 85 | Frame > Set Password | `Set Password of Frame <p0> to <p1>` |  | expression numérique « Frame number » ; expression chaîne « Frame Password » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Application > Get Name | `getAppName$(` |  | → chaîne | — |  |
| 1 | 81 | Application > Get AboutBox text | `getAppAboutBoxText$(` |  | → chaîne | — |  |
| 2 | 82 | Frame > Get Name | `getFrameName$(` |  | → chaîne | — |  |
| 3 | 83 | Application > Get Copyright | `getAppCopyright$(` |  | → chaîne | — |  |
| 4 | 84 | Application > Get Doc File | `getAppDocPath$(` |  | → chaîne | — |  |
| 5 | 85 | Frame > Get Password of a Frame | `getFramePassword$(` |  | nombre « Frame number » → chaîne | — |  |
| 6 | 86 | Frame > Get Number of Layers | `getLayersNumber(` |  |  | — |  |
| 7 | 87 | Frame > Get Maximum Number of objects | `getFrameMaxObjects(` |  |  | — |  |
| 8 | 88 | Application > Get Number of Frames | `getAppFramesNumber(` |  |  | — |  |
| 9 | 89 | Application > Get Border Color | `getAppBorderColor(` |  |  | — |  |
| 10 | 90 | Frame > Get Background Color | `getFrameBgColor(` |  |  | — |  |
| 11 | 91 | Frame > Get Height | `getFrameHeight(` |  |  | — |  |
| 12 | 92 | Frame > Get Width | `getFrameWidth(` |  |  | — |  |
| 13 | 93 | Frame > Get Number of Players | `getFramePlayersNum(` |  |  | — |  |
| 15 | 95 | Frame > Get Number of Qualifiers | `getFrameQualifiersNum(` |  |  | — |  |
