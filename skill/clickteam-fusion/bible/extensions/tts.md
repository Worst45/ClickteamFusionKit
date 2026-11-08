# Extension tts

- File: `tts.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On speak begin | `<object>: On speak begin` |  |  |
| 1 | -82 | On speak done | `<object>: On speak done` |  |  |
| 2 | -83 | Is speaking | `<object>: Is speaking` |  |  |
| 3 | -84 | On error | `<object>: OnError` |  |  |
| 4 | -85 | On viseme | `<object>: On viseme` |  |  |
| 5 | -86 | TTS is installed | `<object>: TTS is installed` |  |  |
| 6 | -87 | On bookmark | `<object>: On bookmark` |  |  |
| 7 | -88 | On phoneme | `<object>: On phoneme` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Speak > Speak string | `Speak string <p0>` |  | string expression “Enter string to speak” |
| 1 | 81 | Set volume | `Set volume to <p0>` |  | numeric expression |
| 2 | 82 | Speak > Pause | `Pause` |  |  |
| 3 | 83 | Speak > Resume | `Resume` |  |  |
| 4 | 84 | Speak > Stop | `Stop` |  |  |
| 5 | 85 | Set voice | `Set voice to <p0>` |  | string expression “Name of the voice” |
| 6 | 86 | Enable/Disable > Disable TTS | `Disable TTS` |  |  |
| 7 | 87 | Enable/Disable > Enable TTS | `Enable TTS` |  |  |
| 8 | 88 | Speak > Speak to wavefile | `Speak <p0> with quality <p2> to output file <p1>` |  | string expression “Enter string to speak”; file name “Wave output filename”; numeric expression “Quality (see help file, default 0)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get current string | `SpeakStr$(` |  | → string |
| 1 | 81 | Get volume | `GetVol(` |  |  |
| 2 | 82 | Get last error | `GetStatus(` |  |  |
| 3 | 83 | Voice > Get voice | `GetVoice$(` |  | number → string |
| 4 | 84 | Voice > Get number of voices | `GetNVoices(` |  |  |
| 5 | 85 | Viseme > Get viseme time (ms) | `VisemeTime(` |  |  |
| 6 | 86 | Viseme > Get next viseme type | `NextViseme(` |  |  |
| 7 | 87 | Viseme > Get viseme feature | `VisemeFeature(` |  |  |
| 8 | 88 | Viseme > Get current viseme type | `CurViseme(` |  |  |
| 9 | 89 | Get current word index | `CurWordIndex(` |  |  |
| 10 | 90 | Get current sentence index | `CurSentenceIndex(` |  |  |
| 11 | 91 | Phoneme > Get current phoneme duration | `PhonemeDuration(` |  |  |
| 12 | 92 | Phoneme > Get next phoneme ID | `NextPhoneme(` |  |  |
| 13 | 93 | Phoneme > Get current phoneme feature | `PhonemeFeature(` |  |  |
| 14 | 94 | Phoneme > Get current phoneme ID | `PhonemeID(` |  |  |
| 15 | 95 | Bookmark > Get bookmark string | `Bookmark$(` |  | → string |
