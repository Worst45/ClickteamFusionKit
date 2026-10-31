# Extension ModFusionEX

- File: `ModFusionEX.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Error Occured | `<object>: Error Occured` |  |  | — |  |
| 1 | -82 | Playback > Mod Is Playing | `<object>: Mod is Playing on Track <p0>` |  | numeric expression “Track ID” | — |  |
| 2 | -83 | Playback > Mod Is Paused | `<object>: Mod is Paused on Track <p0>` |  | numeric expression “Track ID” | — |  |
| 3 | -84 | Loading > Cache is Used | `<object>: Cache <p0> is Used` |  | numeric expression “Cache ID” | — |  |
| 4 | -85 | Loading > Cache is Loaded | `<object>: Cache <p0> is Loaded` |  | numeric expression “Cache ID” | — |  |
| 5 | -86 | Music Sync > On Beat | `<object>: On Beat in Track <p0>` |  | numeric expression “Track ID” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Loading > Load Mod into Cache | `Load Mod <p0> into Cache ID <p1>` |  | string expression “Mod Filename”; numeric expression “Cache ID” | — |  |
| 2 | 82 | Loading > Load Mod into Track | `Load Mod <p0> into Track <p1>` |  | numeric expression “Cache ID”; numeric expression “Track ID” | — |  |
| 3 | 83 | Loading > Free Memory > Empty Entire Cache | `Empty Entire Cache` |  |  | — |  |
| 4 | 84 | Loading > Quick Load Mod | `Load Mod <p0> to Cache <p1> into Track <p2>` |  | string expression “Mod Filename”; numeric expression “Cache ID”; numeric expression “Track ID” | — |  |
| 5 | 85 | Loading > WGM > Load WGM | `Load WGM <p0>` |  | string expression “WGM” | — |  |
| 7 | 87 | Loading > WGM > Load WGM Unit (ID) to Cache | `Load WGM Unit <p0> to Cache <p1>` |  | numeric expression “WGM Unit”; numeric expression “Cache ID” | — |  |
| 8 | 88 | Loading > WGM > Load WGM Unit (STR) to Cache | `Load WGM Unit <p0> to Cache <p1>` |  | string expression “WGM Unit String ID”; numeric expression “Cache ID” | — |  |
| 9 | 89 | Loading > WSF Options > Set WSF Password | `Set WSF Password to <p0>` |  | string expression “WSF Password” | — |  |
| 10 | 90 | Loading > WSF Options > Reset WSP (Vitalize) | `Reset WSP` |  |  | — |  |
| 11 | 91 | Playback > Play Mod | `Play Mod on Track <p0>` |  | numeric expression “Track ID” | — |  |
| 12 | 92 | Playback > Stop Mod | `Stop Mod on Track <p0>` |  | numeric expression “Track ID” | — |  |
| 13 | 93 | Playback > Stop Mod (with Fade) | `Stop Mod on Track <p0> by Fade for <p1>ms` |  | numeric expression “Track ID”; numeric expression “Fadeout Time in MS” | — |  |
| 14 | 94 | Playback > Pause/Resume Mod | `Pause/Resume Mod on Track <p0>` |  | numeric expression “Track ID” | — |  |
| 15 | 95 | Playback > Set Module Volume | `Set Mod <p0> Volume to <p1>` |  | numeric expression “Track ID”; numeric expression “Volume” | — |  |
| 16 | 96 | Playback > Set Module Channel Volume | `Set Mod <p0> Volume on Channel <p2> to <p1>` |  | numeric expression “Track ID”; numeric expression “Volume”; numeric expression “Channel” | — |  |
| 17 | 97 | Playback > Set Module Pan (Balance) | `Set Mod <p0> Balance to <p1>` |  | numeric expression “Track ID”; numeric expression “Pan (-10000 = left, 0 = center, 10000 = right)” | — |  |
| 18 | 98 | Playback > Set Module Tempo | `Set Mod <p0> Tempo to <p1>` |  | numeric expression “Track ID”; numeric expression “Tempo” | — |  |
| 19 | 99 | Playback > Set Mod Position in ms | `Set Mod <p0> Position in MS to <p1>` |  | numeric expression “Track ID”; numeric expression “Position in Miliseconds” | — |  |
| 20 | 100 | Playback > Set Mod Position in Order | `Set Mod <p0> Order to <p1>` |  | numeric expression “Track ID”; numeric expression “Position in Orders” | — |  |
| 21 | 101 | Playback > Enable Looping | `Enable Looping on Track <p0>` |  | numeric expression “Track ID” | — |  |
| 22 | 102 | Playback > Disable Looping | `Disable Looping on Track <p0>` |  | numeric expression “Track ID” | — |  |
| 23 | 103 | Auto Fading > Cross Fade Tracks | `Cross Fade by Stop Track <p0> and Play <p1> in <p2>ms` |  | numeric expression “Track ID (Stop)”; numeric expression “Track ID (Play)”; numeric expression “Fade Time (MS)” | — |  |
| 24 | 104 | Auto Fading > Set Fade In | `Set Automatic Fade In on track <p0> for <p1> ms` |  | numeric expression “Track ID”; numeric expression “Fade Time (MS)” | — |  |
| 25 | 105 | Auto Fading > Set Fade Out | `Set Automatic Fade Out on track <p0> for <p1> ms` |  | numeric expression “Track ID”; numeric expression “Fade Time (MS)” | — |  |
| 26 | 106 | Music Sync > Set Beat Wave | `Set Beat Wave on track <p0> to 1/(<p1>)` |  | numeric expression “Track ID”; numeric expression “Beat on every 1/nth row of NumRows (def=4)” | — |  |
| 27 | 107 | Sound Options > Set Sound Settings | `Set SRate=<p0> SBit=<p1> Mono=<p2> ReSamp=<p3>` |  | numeric expression “Sampling Rate (22050, 44100...) (-1 don't change)”; numeric expression “BitPerSample (16 or 8) (-1 don't change)”; numeric expression “Mono? (0=Stereo, 1=Mono) (-1 don't change)”; numeric expression “Resampling Quality (1-4 1=low 4=high) (-1 don't change)” | — |  |
| 28 | 108 | Sound Options > Display User Dialog for Settings | `Display User Dialog for Settings` |  |  | — |  |
| 29 | 109 | Sound Options > Load User Settings | `Load User Settings from ID <p0>` |  | string expression “Unique Application ID” | — |  |
| 30 | 110 | Sound Options > Save User Settings | `Save User Settings from ID <p0>` |  | string expression “Unique Application ID” | — |  |
| 31 | 111 | Display Error | `Display Error` |  |  | — |  |
| 32 | 112 | Playback > Seek to Order at End of Current Order | `Trk <p0>: Seek to Order <p1> at end of current Order` |  | numeric expression “Track ID”; numeric expression “Order to seek to” | — |  |
| 33 | 113 | Loading > Free Memory > Empty Entire Track-Bank | `Empty Tracks` |  |  | — |  |
| 34 | 114 | Loading > Free Memory > Empty Idle Tracks | `Empty Idle Tracks` |  |  | — |  |
| 35 | 115 | Loading > Free Memory > Empty Track | `Empty Track <p0>` |  | numeric expression “Track to Empty (Will Stop Track)” | — |  |
| 36 | 116 | Music Sync > FFT > Begin FFT Process | `Start FFT Process on track <p0>` |  | numeric expression “Track” | — |  |
| 37 | 117 | Music Sync > FFT > Close FFT Process | `Close FFT Process on track <p0>` |  | numeric expression “Track” | — |  |
| 38 | 118 | Music Sync > FFT > Set Number of FFT Bars to Generate | `Set Number of FFT Bars to Generate to <p0>` |  | numeric expression “Number of Bars to Generate” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Playback > Mod Position in Orders (track) | `ModPosOrd(` |  | number | — |  |
| 1 | 81 | Playback > Mod Position in MS (track) | `ModPosMS(` |  | number | — |  |
| 2 | 82 | Playback > Mod Volume (track) | `ModVol(` |  | number | — |  |
| 3 | 83 | Playback > Mod Channel Volume (track, ch) | `ModCHVol(` |  | number; number | — |  |
| 4 | 84 | Playback > Mod Tempo (track) | `ModTempo(` |  | number | — |  |
| 5 | 85 | WSF/WGM > Get WSF Tag (from Cached WSF) (cache) | `WSFTag$(` |  | string; number → string | — |  |
| 6 | 86 | WSF/WGM > WGM Unit for String ID (string ID) | `WGMUnitForStrID(` |  | string | — |  |
| 7 | 87 | Music Sync > Get Visual Data (track,offset) | `ModVISData(` |  | number; number | — |  |
| 8 | 88 | Error String | `ErrorStr$(` |  | → string | — |  |
| 9 | 89 | Music Sync > FFT Data (track,offset) | `FFTData(` |  | number; number | — |  |
| 10 | 90 | Music Sync > FFT Bar (track, bar) | `FFTBar(` |  | number; number | — |  |
