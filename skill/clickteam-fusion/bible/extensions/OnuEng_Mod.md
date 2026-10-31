# Extension OnuEng_Mod

- File: `OnuEng_Mod.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Channel Muted | `<object>: Is Channel <p1> on Deck <p0> Muted` |  | numeric expression “Deck ID”; numeric expression “Channel (0-63)” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Seek to Order | `Seek to Order <p1> in Deck <p0>` |  | numeric expression “Deck ID”; numeric expression “Order” | — |  |
| 1 | 81 | Channels > Set Channel Volume | `Set Channel <p1> Volume to <p2> on Deck <p0>` |  | numeric expression “Deck ID”; numeric expression “Channel (0-63)”; numeric expression “Volume (0-64)” | — |  |
| 2 | 82 | Set Speed | `Set Deck <p0> Speed to <p1>` |  | numeric expression “Deck ID”; numeric expression “Speed” | — |  |
| 3 | 83 | Set Tempo | `Set Deck <p0> Tempo to <p1>` |  | numeric expression “Deck ID”; numeric expression “Tempo” | — |  |
| 4 | 84 | Playback Options > Set Sample Rate | `Set Samplerate to <p0>` |  | numeric expression “Sample Rate (22050, 44100, etc)” | — |  |
| 5 | 85 | Playback Options > Set Bit Depth | `Set Bitrate to <p0>` |  | numeric expression “Bit Depth (8 or 16)” | — |  |
| 6 | 86 | Playback Options > Set Stereo/Mono | `Set Number of Playback Channels to <p0>` |  | numeric expression “Channels (1 = Mono, 2 = Stereo)” | — |  |
| 7 | 87 | Playback Options > Set Resample Quality | `Set Resampling Quality to <p0>` |  | numeric expression “Quality (0 = Low/Aliasing, 1 = Good/Linear, 2 = Great/Cubic)” | — |  |
| 8 | 88 | Channels > Mute Channel | `Mute Channel <p1> in Deck <p0>` |  | numeric expression “Deck ID”; numeric expression “Channel (0-63)” | — |  |
| 9 | 89 | Channels > Unmute Channel | `Unmute Channel <p1> in Deck <p0>` |  | numeric expression “Deck ID”; numeric expression “Channel (0-63)” | — |  |
| 10 | 90 | Set Filetypes | `Set Engineer Filetypes to <p0>` |  | string expression “File types (space seperated, include .) (eg ".it .xm .mod .s3m")” | — |  |
| 11 | 91 | WSF > Set WSF Password | `Set WSF Password to <p0>` |  | string expression “WSF Password String” | — |  |
| 12 | 92 | WSF > Open WGM Unit to Deck | `Open WGM <p1> unit <p2> to deck <p0>` |  | numeric expression “Deck ID”; file name “WGM Pack”; numeric expression “WGM Unit ID” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Song > Get Current Order | `CurrentOrder(` |  | number “Deck ID” | — |  |
| 1 | 81 | Song > Channels > Get Channel Volume | `ChannelVol(` |  | number “Deck ID”; number “Channel (0-63)” | — |  |
| 2 | 82 | Song > Get Current Speed | `CurrentSpeed(` |  | number “Deck ID” | — |  |
| 3 | 83 | Song > Get Current Tempo | `CurrentTempo(` |  | number “Deck ID” | — |  |
| 4 | 84 | Song > Get Initial Speed | `InitialSpeed(` |  | number “Deck ID” | — |  |
| 5 | 85 | Song > Get Initial Tempo | `InitialTempo(` |  | number “Deck ID” | — |  |
| 6 | 86 | Song > Get Current Row | `CurrentRow(` |  | number “Deck ID” | — |  |
| 7 | 87 | Playback Settings > Get Samplerate | `SampleRate(` |  |  | — |  |
| 8 | 88 | Playback Settings > Get Bit Depth | `BitDepth(` |  |  | — |  |
| 9 | 89 | Playback Settings > Get # of Channels (Stereo/Mono) | `PlayChannels(` |  |  | — |  |
| 10 | 90 | Playback Settings > Get Resampling Quality | `Quality(` |  |  | — |  |
| 11 | 91 | Song > Channels > Get # of Channels | `NumChannels(` |  | number “Deck ID” | — |  |
| 12 | 92 | Song > Get Song Message | `SongMessage$(` |  | number “Deck ID” → string | — |  |
| 13 | 93 | Song > Instruments > Get # of Instruments | `NumInstruments(` |  | number “Deck ID” | — |  |
| 14 | 94 | Song > Samples > Get # of Samples | `NumSamples(` |  | number “Deck ID” | — |  |
| 15 | 95 | Song > Instruments > Get Instrument Name | `InstrumentName$(` |  | number “Deck ID”; number “Instrument #” → string | — |  |
| 16 | 96 | Song > Samples > Get Sample Name | `SampleName$(` |  | number “Deck ID”; number “Sample #” → string | — |  |
| 17 | 97 | Song > Instruments > Get Instrument Filename | `InstrumentFilename$(` |  | number “Deck ID”; number “Instrument #” → string | — |  |
| 18 | 98 | Song > Samples > Get Sample Filename | `SampleFilename$(` |  | number “Deck ID”; number “Sample #” → string | — |  |
| 19 | 99 | Song > Get Number of Orders | `NumOrders(` |  | number “Deck ID” | — |  |
| 20 | 100 | Song > Channels > Get Initial Channel Volume | `InitialChannelVol(` |  | number “Deck ID”; number “Channel (0-63)” | — |  |
