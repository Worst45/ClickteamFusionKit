# Extension tts

- Fichier : `tts.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On speak begin | `<objet>: On speak begin` |  |  | — |  |
| 1 | -82 | On speak done | `<objet>: On speak done` |  |  | — |  |
| 2 | -83 | Is speaking | `<objet>: Is speaking` |  |  | — |  |
| 3 | -84 | On error | `<objet>: OnError` |  |  | — |  |
| 4 | -85 | On viseme | `<objet>: On viseme` |  |  | — |  |
| 5 | -86 | TTS is installed | `<objet>: TTS is installed` |  |  | — |  |
| 6 | -87 | On bookmark | `<objet>: On bookmark` |  |  | — |  |
| 7 | -88 | On phoneme | `<objet>: On phoneme` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Speak > Speak string | `Speak string <p0>` |  | expression chaîne « Enter string to speak » | — |  |
| 1 | 81 | Set volume | `Set volume to <p0>` |  | expression numérique | — |  |
| 2 | 82 | Speak > Pause | `Pause` |  |  | — |  |
| 3 | 83 | Speak > Resume | `Resume` |  |  | — |  |
| 4 | 84 | Speak > Stop | `Stop` |  |  | — |  |
| 5 | 85 | Set voice | `Set voice to <p0>` |  | expression chaîne « Name of the voice » | — |  |
| 6 | 86 | Enable/Disable > Disable TTS | `Disable TTS` |  |  | — |  |
| 7 | 87 | Enable/Disable > Enable TTS | `Enable TTS` |  |  | — |  |
| 8 | 88 | Speak > Speak to wavefile | `Speak <p0> with quality <p2> to output file <p1>` |  | expression chaîne « Enter string to speak » ; nom de fichier « Wave output filename » ; expression numérique « Quality (see help file, default 0) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current string | `SpeakStr$(` |  | → chaîne | — |  |
| 1 | 81 | Get volume | `GetVol(` |  |  | — |  |
| 2 | 82 | Get last error | `GetStatus(` |  |  | — |  |
| 3 | 83 | Voice > Get voice | `GetVoice$(` |  | nombre → chaîne | — |  |
| 4 | 84 | Voice > Get number of voices | `GetNVoices(` |  |  | — |  |
| 5 | 85 | Viseme > Get viseme time (ms) | `VisemeTime(` |  |  | — |  |
| 6 | 86 | Viseme > Get next viseme type | `NextViseme(` |  |  | — |  |
| 7 | 87 | Viseme > Get viseme feature | `VisemeFeature(` |  |  | — |  |
| 8 | 88 | Viseme > Get current viseme type | `CurViseme(` |  |  | — |  |
| 9 | 89 | Get current word index | `CurWordIndex(` |  |  | — |  |
| 10 | 90 | Get current sentence index | `CurSentenceIndex(` |  |  | — |  |
| 11 | 91 | Phoneme > Get current phoneme duration | `PhonemeDuration(` |  |  | — |  |
| 12 | 92 | Phoneme > Get next phoneme ID | `NextPhoneme(` |  |  | — |  |
| 13 | 93 | Phoneme > Get current phoneme feature | `PhonemeFeature(` |  |  | — |  |
| 14 | 94 | Phoneme > Get current phoneme ID | `PhonemeID(` |  |  | — |  |
| 15 | 95 | Bookmark > Get bookmark string | `Bookmark$(` |  | → chaîne | — |  |
