# Extension OnuEng_Mod

- Fichier : `OnuEng_Mod.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Channel Muted | `<objet>: Is Channel <p1> on Deck <p0> Muted` |  | expression numérique « Deck ID » ; expression numérique « Channel (0-63) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Seek to Order | `Seek to Order <p1> in Deck <p0>` |  | expression numérique « Deck ID » ; expression numérique « Order » | — |  |
| 1 | 81 | Channels > Set Channel Volume | `Set Channel <p1> Volume to <p2> on Deck <p0>` |  | expression numérique « Deck ID » ; expression numérique « Channel (0-63) » ; expression numérique « Volume (0-64) » | — |  |
| 2 | 82 | Set Speed | `Set Deck <p0> Speed to <p1>` |  | expression numérique « Deck ID » ; expression numérique « Speed » | — |  |
| 3 | 83 | Set Tempo | `Set Deck <p0> Tempo to <p1>` |  | expression numérique « Deck ID » ; expression numérique « Tempo » | — |  |
| 4 | 84 | Playback Options > Set Sample Rate | `Set Samplerate to <p0>` |  | expression numérique « Sample Rate (22050, 44100, etc) » | — |  |
| 5 | 85 | Playback Options > Set Bit Depth | `Set Bitrate to <p0>` |  | expression numérique « Bit Depth (8 or 16) » | — |  |
| 6 | 86 | Playback Options > Set Stereo/Mono | `Set Number of Playback Channels to <p0>` |  | expression numérique « Channels (1 = Mono, 2 = Stereo) » | — |  |
| 7 | 87 | Playback Options > Set Resample Quality | `Set Resampling Quality to <p0>` |  | expression numérique « Quality (0 = Low/Aliasing, 1 = Good/Linear, 2 = Great/Cubic) » | — |  |
| 8 | 88 | Channels > Mute Channel | `Mute Channel <p1> in Deck <p0>` |  | expression numérique « Deck ID » ; expression numérique « Channel (0-63) » | — |  |
| 9 | 89 | Channels > Unmute Channel | `Unmute Channel <p1> in Deck <p0>` |  | expression numérique « Deck ID » ; expression numérique « Channel (0-63) » | — |  |
| 10 | 90 | Set Filetypes | `Set Engineer Filetypes to <p0>` |  | expression chaîne « File types (space seperated, include .) (eg ".it .xm .mod .s3m") » | — |  |
| 11 | 91 | WSF > Set WSF Password | `Set WSF Password to <p0>` |  | expression chaîne « WSF Password String » | — |  |
| 12 | 92 | WSF > Open WGM Unit to Deck | `Open WGM <p1> unit <p2> to deck <p0>` |  | expression numérique « Deck ID » ; nom de fichier « WGM Pack » ; expression numérique « WGM Unit ID » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Song > Get Current Order | `CurrentOrder(` |  | nombre « Deck ID » | — |  |
| 1 | 81 | Song > Channels > Get Channel Volume | `ChannelVol(` |  | nombre « Deck ID » ; nombre « Channel (0-63) » | — |  |
| 2 | 82 | Song > Get Current Speed | `CurrentSpeed(` |  | nombre « Deck ID » | — |  |
| 3 | 83 | Song > Get Current Tempo | `CurrentTempo(` |  | nombre « Deck ID » | — |  |
| 4 | 84 | Song > Get Initial Speed | `InitialSpeed(` |  | nombre « Deck ID » | — |  |
| 5 | 85 | Song > Get Initial Tempo | `InitialTempo(` |  | nombre « Deck ID » | — |  |
| 6 | 86 | Song > Get Current Row | `CurrentRow(` |  | nombre « Deck ID » | — |  |
| 7 | 87 | Playback Settings > Get Samplerate | `SampleRate(` |  |  | — |  |
| 8 | 88 | Playback Settings > Get Bit Depth | `BitDepth(` |  |  | — |  |
| 9 | 89 | Playback Settings > Get # of Channels (Stereo/Mono) | `PlayChannels(` |  |  | — |  |
| 10 | 90 | Playback Settings > Get Resampling Quality | `Quality(` |  |  | — |  |
| 11 | 91 | Song > Channels > Get # of Channels | `NumChannels(` |  | nombre « Deck ID » | — |  |
| 12 | 92 | Song > Get Song Message | `SongMessage$(` |  | nombre « Deck ID » → chaîne | — |  |
| 13 | 93 | Song > Instruments > Get # of Instruments | `NumInstruments(` |  | nombre « Deck ID » | — |  |
| 14 | 94 | Song > Samples > Get # of Samples | `NumSamples(` |  | nombre « Deck ID » | — |  |
| 15 | 95 | Song > Instruments > Get Instrument Name | `InstrumentName$(` |  | nombre « Deck ID » ; nombre « Instrument # » → chaîne | — |  |
| 16 | 96 | Song > Samples > Get Sample Name | `SampleName$(` |  | nombre « Deck ID » ; nombre « Sample # » → chaîne | — |  |
| 17 | 97 | Song > Instruments > Get Instrument Filename | `InstrumentFilename$(` |  | nombre « Deck ID » ; nombre « Instrument # » → chaîne | — |  |
| 18 | 98 | Song > Samples > Get Sample Filename | `SampleFilename$(` |  | nombre « Deck ID » ; nombre « Sample # » → chaîne | — |  |
| 19 | 99 | Song > Get Number of Orders | `NumOrders(` |  | nombre « Deck ID » | — |  |
| 20 | 100 | Song > Channels > Get Initial Channel Volume | `InitialChannelVol(` |  | nombre « Deck ID » ; nombre « Channel (0-63) » | — |  |
