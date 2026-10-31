# Extension volume

- File: `volume.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Mixer is available | `<object> : Mixer is available` |  |  | — |  |
| 1 | -82 | Master > Master volume control is available | `<object> : Master volume control is available` |  |  | — |  |
| 2 | -83 | Master > Master mute control is available | `<object> : Master mute control is available` |  |  | — |  |
| 3 | -84 | Master > Master is Mono | `<object> : Master is Mono` |  |  | — |  |
| 4 | -85 | Master > Master is Stereo | `<object> : Master is Stereo` |  |  | — |  |
| 5 | -86 | Master > Number of channels in Master > 2 | `<object> : Number of channels in Master > 2` |  |  | — |  |
| 6 | -87 | Master > Master is Muted | `<object> : Master is Muted` |  |  | — |  |
| 7 | -88 | Wave Out > Wave Out volume control is available | `<object> : Wave Out volume control is available` |  |  | — |  |
| 8 | -89 | Wave Out > Wave Out mute control is available | `<object> : Wave Out mute control is available` |  |  | — |  |
| 9 | -90 | Wave Out > Wave Out is Mono | `<object> : Wave Out is Mono` |  |  | — |  |
| 10 | -91 | Wave Out > Wave Out is Stereo | `<object> : Wave Out is Stereo` |  |  | — |  |
| 11 | -92 | Wave Out > Number of channels in Wave Out > 2 | `<object> : Number of channels in Wave Out > 2` |  |  | — |  |
| 12 | -93 | Wave Out > Wave Out is Muted | `<object> : Wave Out is Muted` |  |  | — |  |
| 13 | -94 | Midi Out > Midi Out volume control is available | `<object> : Midi Out volume control is available` |  |  | — |  |
| 14 | -95 | Midi Out > Midi Out mute control is available | `<object> : Midi Out mute control is available` |  |  | — |  |
| 15 | -96 | Midi Out > Midi Out is Mono | `<object> : Midi Out is Mono` |  |  | — |  |
| 16 | -97 | Midi Out > Midi Out is Stereo | `<object> : Midi Out is Stereo` |  |  | — |  |
| 17 | -98 | Midi Out > Number of channels in Midi Out > 2 | `<object> : Number of channels in Midi Out > 2` |  |  | — |  |
| 18 | -99 | Midi Out > Midi Out is Muted | `<object> : Midi Out is Muted` |  |  | — |  |
| 19 | -100 | CD Out > CD Out volume control is available | `<object> : CD Out volume control is available` |  |  | — |  |
| 20 | -101 | CD Out > CD Out mute control is available | `<object> : CD Out mute control is available` |  |  | — |  |
| 21 | -102 | CD Out > CD Out is Mono | `<object> : CD Out is Mono` |  |  | — |  |
| 22 | -103 | CD Out > CD Out is Stereo | `<object> : CD Out is Stereo` |  |  | — |  |
| 23 | -104 | CD Out > Number of channels in CD Out > 2 | `<object> : Number of channels in CD Out > 2` |  |  | — |  |
| 24 | -105 | CD Out > CD Out is Muted | `<object> : CD Out is Muted` |  |  | — |  |
| 25 | -106 | Custom Line > Custom Line volume control is available | `<object> : Custom Line volume control is available` |  |  | — |  |
| 26 | -107 | Custom Line > Custom Line mute control is available | `<object> : Custom Line mute control is available` |  |  | — |  |
| 27 | -108 | Custom Line > Custom Line is Mono | `<object> : Custom Line is Mono` |  |  | — |  |
| 28 | -109 | Custom Line > Custom Line is Stereo | `<object> : Custom Line is Stereo` |  |  | — |  |
| 29 | -110 | Custom Line > Number of channels in Custom Line > 2 | `<object> : Number of channels in Custom Line > 2` |  |  | — |  |
| 30 | -111 | Custom Line > Custom Line is Muted | `<object> : Custom Line is Muted` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select SoundCard | `<object> : Select SoundCard <p0>` |  | numeric expression “Enter a soundCard index (0=Main card)” | — |  |
| 1 | 81 | Master > Mute Master | `<object> : Mute Master` |  |  | — |  |
| 2 | 82 | Master > UnMute Master | `<object> : UnMute Master` |  |  | — |  |
| 3 | 83 | Master > Set volume of all channels | `<object> : Master : Set Volume of all channels to <p0>` |  | numeric expression “Enter a volume to set (0-65535)” | — |  |
| 4 | 84 | Master > Set channel volume | `<object> : Master : Set Volume of channel <p1> to <p0>` |  | numeric expression “Enter a volume to set (0-65535)”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 5 | 85 | Master > Proportions > Set volume of all channels using Proportions | `<object> : Master : Set Volume of all channels proportional to <p0>` |  | numeric expression “Enter a base volume to use (0-65535)” | — |  |
| 6 | 86 | Master > Proportions > Set channel Proportion | `<object> : Master : Set proportion of channel <p1> to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 7 | 87 | Master > Proportions > Set Proportion of all channels | `<object> : Master : Set proportion of all channels to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use” | — |  |
| 8 | 88 | Wave Out > Mute Wave Out | `<object> : Mute Wave Out` |  |  | — |  |
| 9 | 89 | Wave Out > UnMute Wave Out | `<object> : UnMute Wave Out` |  |  | — |  |
| 10 | 90 | Wave Out > Set volume of all channels | `<object> : Wave Out : Set Volume of all channels to <p0>` |  | numeric expression “Enter a volume to set (0-65535)” | — |  |
| 11 | 91 | Wave Out > Set channel volume | `<object> : Wave Out : Set Volume of channel <p1> to <p0>` |  | numeric expression “Enter a volume to set (0-65535)”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 12 | 92 | Wave Out > Proportions > Set volume of all channels using Proportions | `<object> : Wave Out : Set Volume of all channels proportional to <p0>` |  | numeric expression “Enter a base volume to use (0-65535)” | — |  |
| 13 | 93 | Wave Out > Proportions > Set channel Proportion | `<object> : Wave Out : Set proportion of channel <p1> to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 14 | 94 | Wave Out > Proportions > Set Proportion of all channels | `<object> : Wave Out : Set proportion of all channels to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use” | — |  |
| 15 | 95 | Midi Out > Mute Midi Out | `<object> : Mute Midi Out` |  |  | — |  |
| 16 | 96 | Midi Out > UnMute Midi Out | `<object> : UnMute Midi Out` |  |  | — |  |
| 17 | 97 | Midi Out > Set volume of all channels | `<object> : Midi Out : Set Volume of all channels to <p0>` |  | numeric expression “Enter a volume to set (0-65535)” | — |  |
| 18 | 98 | Midi Out > Set channel volume | `<object> : Midi Out : Set Volume of channel <p1> to <p0>` |  | numeric expression “Enter a volume to set (0-65535)”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 19 | 99 | Midi Out > Proportions > Set volume of all channels using Proportions | `<object> : Midi Out : Set Volume of all channels proportional to <p0>` |  | numeric expression “Enter a base volume to use (0-65535)” | — |  |
| 20 | 100 | Midi Out > Proportions > Set channel Proportion | `<object> : Midi Out : Set proportion of channel <p1> to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 21 | 101 | Midi Out > Proportions > Set Proportion of all channels | `<object> : Midi Out : Set proportion of all channels to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use” | — |  |
| 22 | 102 | CD Out > Mute CD Out | `<object> : Mute CD Out` |  |  | — |  |
| 23 | 103 | CD Out > UnMute CD Out | `<object> : UnMute CD Out` |  |  | — |  |
| 24 | 104 | CD Out > Set volume of all channels | `<object> : CD Out : Set Volume of all channels to <p0>` |  | numeric expression “Enter a volume to set (0-65535)” | — |  |
| 25 | 105 | CD Out > Set channel volume | `<object> : CD Out : Set Volume of channel <p1> to <p0>` |  | numeric expression “Enter a volume to set (0-65535)”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 26 | 106 | CD Out > Proportions > Set volume of all channels using Proportions | `<object> : CD Out : Set Volume of all channels proportional to <p0>` |  | numeric expression “Enter a base volume to use (0-65535)” | — |  |
| 27 | 107 | CD Out > Proportions > Set channel Proportion | `<object> : CD Out : Set proportion of channel <p1> to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 28 | 108 | CD Out > Proportions > Set Proportion of all channels | `<object> : CD Out : Set proportion of all channels to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use” | — |  |
| 29 | 109 | Custom Line > Mute Custom Line | `<object> : Mute Custom Line` |  |  | — |  |
| 30 | 110 | Custom Line > UnMute Custom Line | `<object> : UnMute Custom Line` |  |  | — |  |
| 31 | 111 | Custom Line > Set volume of all channels | `<object> : Custom Line : Set Volume of all channels to <p0>` |  | numeric expression “Enter a volume to set (0-65535)” | — |  |
| 32 | 112 | Custom Line > Set channel volume | `<object> : Custom Line : Set Volume of channel <p1> to <p0>` |  | numeric expression “Enter a volume to set (0-65535)”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 33 | 113 | Custom Line > Proportions > Set volume of all channels using Proportions | `<object> : Custom Line : Set Volume of all channels proportional to <p0>` |  | numeric expression “Enter a base volume to use (0-65535)” | — |  |
| 34 | 114 | Custom Line > Proportions > Set channel Proportion | `<object> : Custom Line : Set proportion of channel <p1> to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use”; numeric expression “Enter a channel Number (In Stereo 1=Left, 2=Right)” | — |  |
| 35 | 115 | Custom Line > Proportions > Set Proportion of all channels | `<object> : Custom Line : Set proportion of all channels to <p0>` |  | numeric expression “Enter a proportion out of 65535 to use” | — |  |
| 36 | 116 | Set Custom line Number | `<object> : Set Custom Line to No. <p0>` |  | numeric expression “Enter a line constant - See readme” | — |  |
| 37 | 117 | Save all control values | `<object> : Save Volume and Mute settings` |  |  | — |  |
| 38 | 118 | Restore control values | `<object> : Restore Volume and Mute settings` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of SoundCards | `NumCards(` |  |  | — |  |
| 1 | 81 | Master > Master Volume | `MasterVolume(` |  |  | — |  |
| 2 | 82 | Master > Volume of a Channel | `MasterChannelVol(` |  | number | — |  |
| 3 | 83 | Master > Number of Channels in Master | `NumChannelsMaster(` |  |  | — |  |
| 4 | 84 | Master > Proportion for a channel | `MasterChanProportion(` |  | number | — |  |
| 5 | 85 | Wave Out > Wave Out Volume | `WaveOutVolume(` |  |  | — |  |
| 6 | 86 | Wave Out > Volume of a Channel | `Wave OutChannelVol(` |  | number | — |  |
| 7 | 87 | Wave Out > Number of Channels in Wave Out | `NumChannelsWaveOut(` |  |  | — |  |
| 8 | 88 | Wave Out > Proportion for a channel | `WaveOutChanProportion(` |  | number | — |  |
| 9 | 89 | Midi Out > Midi Out Volume | `MidiOutVolume(` |  |  | — |  |
| 10 | 90 | Midi Out > Volume of a Channel | `MidiOutChannelVol(` |  | number | — |  |
| 11 | 91 | Midi Out > Number of Channels in Midi Out | `NumChannelsMidiOut(` |  |  | — |  |
| 12 | 92 | Midi Out > Proportion for a channel | `MidiOutChanProportion(` |  | number | — |  |
| 13 | 93 | CD Out > CD Out Volume | `CDOutVolume(` |  |  | — |  |
| 14 | 94 | CD Out > Volume of a Channel | `CDOutChannelVol(` |  | number | — |  |
| 15 | 95 | CD Out > Number of Channels in CD Out | `NumChannelsCDOut(` |  |  | — |  |
| 16 | 96 | CD Out > Proportion for a channel | `CDOutChanProportion(` |  | number | — |  |
| 17 | 97 | Custom Line > Custom Line Volume | `CustomLineVolume(` |  |  | — |  |
| 18 | 98 | Custom Line > Volume of a Channel | `CustomLineChannelVol(` |  | number | — |  |
| 19 | 99 | Custom Line > Number of Channels in Custom Line | `NumChannelsCustomLine(` |  |  | — |  |
| 20 | 100 | Custom Line > Proportion for a channel | `CustomLineChanProportion(` |  | number | — |  |
| 21 | 101 | Current SoundCard | `SoundCardSet(` |  |  | — |  |
| 22 | 102 | Custom Line number | `CustomLineNo(` |  |  | — |  |
