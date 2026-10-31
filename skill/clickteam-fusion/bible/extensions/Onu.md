# Extension Onu

- File: `Onu.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Connections > Is Deck Connected? | `<object>: Is Deck <p0> Connected` |  | numeric expression “Deck ID” | — |  |
| 1 | -82 | Playback > Is Deck Playing? | `<object>: Is Deck <p0> Playing` |  | numeric expression “Deck ID” | — |  |
| 2 | -83 | Playback > Is Deck Paused? | `<object>: Is Deck <p0> Paused` |  | numeric expression “Deck ID” | — |  |
| 3 | -84 | On Error | `<object>: On Error` |  |  | — |  |
| 5 | -86 | Connections > Is Winamp Deck Connected? | `<object>: Is Winamp Deck Connected?` |  |  | — |  |
| 6 | -87 | Playback > Is Deck Stopping / Fading Out? | `<object>: Is Deck Stopping or Fading Out?` |  | numeric expression “Deck ID” | — |  |
| 7 | -88 | Playback > Is Deck Running? | `<object>: Is Deck <p0> Running?` |  | numeric expression “Deck ID” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connections > Decks > Connect Deck Cable to Deck | `Connect Deck <p0> with Engineer Cable <p1>` |  | numeric expression “Deck ID”; numeric expression “Deck Engineer Cable (OnuEng->Cable( TAPEID ))” | — |  |
| 1 | 81 | Connections > Decks > Disconnect Deck | `Disconnect Deck <p0>` |  | numeric expression “Deck ID” | — |  |
| 2 | 82 | Deck Playback > Play Deck | `Play Deck <p0>` |  | numeric expression “Deck ID” | — |  |
| 3 | 83 | Deck Playback > Pause Deck | `Pause Deck <p0>` |  | numeric expression “Deck ID” | — |  |
| 4 | 84 | Deck Playback > Resume Deck | `Resume Deck <p0>` |  | numeric expression “Deck ID” | — |  |
| 5 | 85 | Deck Playback > Stop Deck | `Stop Deck <p0>` |  | numeric expression “Deck ID” | — |  |
| 6 | 86 | Deck Playback > With Fades > Play Deck | `Play Deck <p0> with <p1>ms Fade In` |  | numeric expression “Deck ID”; numeric expression “Fade Time in milliseconds” | — |  |
| 7 | 87 | Deck Playback > With Fades > Pause Deck | `Pause Deck <p0> with <p1>ms Fade Out` |  | numeric expression “Deck ID”; numeric expression “Fade Time in milliseconds” | — |  |
| 8 | 88 | Deck Playback > With Fades > Resume Deck | `Resume Deck <p0> with <p1>ms Fade In` |  | numeric expression “Deck ID”; numeric expression “Fade Time in milliseconds” | — |  |
| 9 | 89 | Deck Playback > With Fades > Stop Deck | `Stop Deck <p0> with <p1>ms Fade Out` |  | numeric expression “Deck ID”; numeric expression “Fade Time in milliseconds” | — |  |
| 10 | 90 | Decks > Set Fade In Time | `Set <p1>ms Fade In on Deck <p0>` |  | numeric expression “Deck ID”; numeric expression “Fade Time in milliseconds” | — |  |
| 11 | 91 | Decks > Set Fade Out Time | `Set <p1>ms Fade Out on Deck <p0>` |  | numeric expression “Deck ID”; numeric expression “Fade Time in milliseconds” | — |  |
| 12 | 92 | Display Error | `Display Error` |  |  | — |  |
| 13 | 93 | Clear Error | `Clear Error` |  |  | — |  |
| 14 | 94 | Connections > Winamp > Connect Winamp Deck to Plugin | `Connect Winamp Deck to plugin <p0>` |  | file name “Winamp Plugin” | — |  |
| 15 | 95 | Connections > Winamp > Disconnect Winamp Deck | `Disconnect Winamp Deck` |  |  | — |  |
| 16 | 96 | Deck Playback > Set Winamp Playback File | `Set Winamp Playback File to <p0>` |  | file name “Winamp Playback File” | — |  |
| 17 | 97 | Connections > Visualizers > Connect Visualizer to Deck | `Add Visualizer Cable <p0> to Deck <p1>` |  | numeric expression “Visualizer Cable (Get Visualizer Cable)”; numeric expression “Deck ID” | — |  |
| 19 | 99 | Connections > Automatic > Connect Deck for File | `Connect Deck <p0> with File <p1>` |  | numeric expression “Deck ID”; file name “Playback File” | — |  |
| 20 | 100 | Decks > Set Volume | `Set Volume on Deck <p0> to <p1>` |  | numeric expression “Deck ID”; numeric expression “Volume (Value from 0=SILENT to 1000=FULL)” | — |  |
| 21 | 101 | Decks > Set Pan | `Set Pan on Deck <p0> to <p1>` |  | numeric expression “Deck ID”; numeric expression “Pan (Value from -1000=LEFT to 1000=RIGHT (0=CENTER))” | — |  |
| 22 | 102 | Decks > Advanced > Set Playback Frequency | `Set Playback Frequency on Deck <p0> to <p1>hz` |  | numeric expression “Deck ID”; numeric expression “Frequency in Hz (not above 100,000hz)” | — |  |
| 23 | 103 | Decks > Advanced > Reset Playback Frequency | `Reset Playback Frequency on Deck <p0>` |  | numeric expression “Deck ID” | — |  |
| 24 | 104 | Deck Playback > Play Deck n Times | `Play Deck <p0> <p1> times` |  | numeric expression “Deck ID”; numeric expression “Number of Times to Play (-1 for infinite)” | — |  |
| 25 | 105 | Deck Playback > With Fades > Play Deck n Times | `Play Deck <p0> <p1> times with a Fade In of <p2>ms` |  | numeric expression “Deck ID”; numeric expression “Number of Times to Play (-1 for infinite)”; numeric expression “Fade Time in milliseconds” | — |  |
| 26 | 106 | Deck Playback > Seek to Position | `Seek to <p1>ms in deck <p0>` |  | numeric expression “Deck ID”; numeric expression “Time in MS to seek to” | — |  |
| 27 | 107 | Deck Playback > Stop All Decks | `Stop All Decks (w/ default fades)` |  |  | — |  |
| 28 | 108 | Decks > Advanced > Set Buffer Length (for next Play) | `Set Deck <p0> Buffer Length to <p1> MS` |  | numeric expression “Deck ID”; numeric expression “Buffer Length in MS (100 <= x <= 10,000) (0 for realtime)” | — |  |
| 29 | 109 | Connections > Automatic > Connect Deck for File (custom Extension) | `Connect Deck <p0> with file <p1> using extension <p2>` |  | numeric expression “Deck ID”; file name “Playback File”; string expression “File Extension (no .) (eg "mod")” | — |  |
| 30 | 110 | Deck Playback > Flush Output | `Flush Output on Deck <p0>` |  | numeric expression “Deck ID” | — |  |
| 31 | 111 | Decks > Reserve Deck | `Reserve Deck <p0> if 1 = <p1>` |  | numeric expression “Deck ID”; numeric expression “Reserve Flag (0 if free, 1 if reserved)” | — |  |
| 32 | 112 | Decks > Advanced > Set Playback Frequency Multiplier | `Set Deck <p0> Frequency Multiplier to <p1>` |  | numeric expression “Deck ID”; numeric expression “Frequency Multiplier (1000 = 1.0x, 500 = 0.5x, 2000 = 2.0x, etc)” | — |  |
| 33 | 113 | Other > Auto-pause > Enable | `Enable Autopause (with MMF's Pause Feature)` |  |  | — |  |
| 34 | 114 | Other > Auto-pause > Disable | `Disable Autopause (with MMF's Pause Feature)` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Decks > Get First Free Deck | `FirstFreeDeck(` |  |  | — |  |
| 1 | 81 | Decks > Get Deck Fade In Time (ms) | `DeckFadeIn(` |  | number “Deck ID” | — |  |
| 2 | 82 | Decks > Get Deck Fade Out Time (ms) | `DeckFadeOut(` |  | number “Deck ID” | — |  |
| 3 | 83 | Connections > Get Onu Cable | `OnuCable(` |  |  | — |  |
| 4 | 84 | Get Error | `Error$(` |  | → string | — |  |
| 6 | 86 | Decks > Get Winamp Deck ID | `WinampDeckID(` |  |  | — |  |
| 7 | 87 | Playback > Get Total Time of Deck in ms | `TotalTimeMS(` |  | number “Deck ID” | — |  |
| 8 | 88 | Playback > Get Current Play Time of Deck in ms | `CurrentTimeMS(` |  | number “Deck ID” | — |  |
| 9 | 89 | Playback > Get Deck Volume | `GetDeckVolume(` |  | number “Deck ID” | — |  |
| 10 | 90 | Playback > Get Deck Panning | `GetDeckPanning(` |  | number “Deck ID” | — |  |
| 11 | 91 | Playback > Advanced > Get Playback Frequency | `GetPlaybackFrequency(` |  | number “Deck ID” | — |  |
| 12 | 92 | Playback > Advanced > Get Original Sample Rate | `GetOriginalSampleRate(` |  | number “Deck ID” | — |  |
| 13 | 93 | Playback > Advanced > Get Original Bitdepth | `GetOriginalBitDepth(` |  | number “Deck ID” | — |  |
| 14 | 94 | Playback > Advanced > Get Original Number of Channels | `GetOriginalNumberofChannels(` |  | number “Deck ID” | — |  |
| 16 | 96 | Vis. Data > Get Waveform Data | `GetWaveData(` |  | number “Deck ID”; number “Channel (0-Left, 1-Right)”; number “Waveform Index (0-575)” | — |  |
| 17 | 97 | Vis. Data > Get Spectrum Data | `GetSpectrumData(` |  | number “Deck ID”; number “Channel (0-Left, 1-Right, 2-Both)”; number “Spectrum Index (0-511)” | — |  |
| 18 | 98 | Vis. Data > Get FFT Data | `GetFFTData(` |  | number “Deck ID”; number “Channel (0-Left, 1-Right, 2-Both)”; number “FFT Index (0-15)” | — |  |
| 19 | 99 | Playback > Get Current File Time of Deck in ms | `CurrentFileTimeMS(` |  | number “Deck ID” | — |  |
| 20 | 100 | Vis. Data > Get Loudest Spectrum Index | `GetLoudestSpectrum(` |  | number “Deck ID”; number “Minimum Spectrum Value Multiplied by 1000”; number “Spectrum Index Low Range (0-511)”; number “Spectrum Index High Range (0-511)” | — |  |
| 21 | 101 | Decks > Is Deck Reserved | `GetDeckReserved(` |  | number “Deck ID” | — |  |
