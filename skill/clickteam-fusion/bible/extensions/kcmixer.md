# Extension kcmixer

- Fichier : `kcmixer.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change wave left and right volume | `Change wave left and right volume to <p0>` | Changer le volume droit et gauche des échantillons à <p0> | (paramètres non fiables) | — |  |
| 1 | 81 | Change wave left volume | `Change wave left volume to <p0>` | Changer le volume gauche des échantillons à <p0> | (paramètres non fiables) | — |  |
| 2 | 82 | Change wave right volume | `Change wave right volume to <p0>` | Changer le volume droit des échantillons à <p0> | (paramètres non fiables) | — |  |
| 3 | 83 | Change FM synthesizer left and right volume | `Change FM synthesizer left and right volume to <p0>` | Changer les volumes gauche et droite synthétiseur FM à <p0> | (paramètres non fiables) | — |  |
| 4 | 84 | Change FM synthesizer left volume | `Change FM synthesizer left volume to <p0>` | Changer le volume gauche du synthétiseur FM à <p0> | (paramètres non fiables) | — |  |
| 5 | 85 | Change FM synthesizer right volume | `Change FM synthesizer right volume to <p0>` | Changer le volume droit du synthétiseur FM à <p0> | (paramètres non fiables) | — |  |
| 6 | 86 | Change square wave synthesizer left and right volume | `Change square wave synthesizer left and right volume to <p0>` | Changer le volume droit et gauche du synthétiseur carré à <p0> | (paramètres non fiables) | — |  |
| 7 | 87 | Change square wave synthesizer left volume | `Change square wave synthesizer left volume to <p0>` | Changer le volume gauche du synthétiseur carré à <p0> | (paramètres non fiables) | — |  |
| 8 | 88 | Change square wave synthesizer right volume | `Change square wave synthesizer right volume to <p0>` | Changer le volume droit du synthétiseur carré à <p0> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 1 | 81 | Wave left volume | `Wave vol left(` | Volume gauche échantillons |  | — |  |
| 2 | 82 | Wave right volume | `Wave vol right(` | Volume droit échantillons |  | — |  |
| 4 | 84 | Midi FM synthesizer left volume | `FM vol left(` | Volume gauche du synthétiseur FM MIDI |  | — |  |
| 5 | 85 | Midi FM synthesizer right volume | `FM vol right(` | Volume droit du synthétiseur FM MIDI |  | — |  |
| 7 | 87 | Midi square wave synthesizer left volume | `SQ vol left(` | Volume gauche du synthétiseur carré MIDI |  | — |  |
| 8 | 88 | Midi square wave synthesizer right volume | `SQ vol right(` | Volume droit du synthétiseur carré MIDI |  | — |  |
