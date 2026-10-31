# Extension AdvSound

- Fichier : `AdvSound.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Sound added | `<objet> : Sound added` |  |  | — |  |
| 1 | -82 | Sound generated | `<objet> : Sound generated` |  |  | — |  |
| 2 | -83 | Is sound playing? | `<objet> : Sound <p0> is playing` |  | expression chaîne « Sound name » | — |  |
| 3 | -84 | Is sound paused? | `<objet> : Sound <p0> is paused` |  | expression chaîne « Sound name » | — |  |
| 4 | -85 | Does sound exist? | `<objet> : Sound <p0> exists` |  | expression chaîne « Sound name » | — |  |
| 5 | -86 | Sound played | `<objet> : Sound played` |  |  | — |  |
| 6 | -87 | Sound looped | `<objet> : Sound looped` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Playback > Play and loop | `Play sound <p0> on channel <p1>, <p2> times` |  | expression chaîne « Sound name » ; expression numérique « Channel index (1-32, 0: Free channel) » ; expression numérique « Repeat count (0: Infinite) » | — |  |
| 1 | 81 | Playback > Play | `Play sound <p0> on channel <p1>` |  | expression chaîne « Sound name » ; expression numérique « Channel index (1-32, 0: Free channel) » | — |  |
| 2 | 82 | Manager > Add generated sound | `Add generated sound as <p0>` |  | expression chaîne « Sound name » | — |  |
| 3 | 83 | Generator > Randomize | `Randomize sound` |  |  | — |  |
| 4 | 84 | Generator > Presets > Pickup/coin | `Create pickup/coin` |  |  | — |  |
| 5 | 85 | Generator > Presets > Laser/shoot | `Create laser/shoot` |  |  | — |  |
| 6 | 86 | Generator > Presets > Explosion | `Create explosion` |  |  | — |  |
| 7 | 87 | Generator > Presets > Powerup | `Create powerup` |  |  | — |  |
| 8 | 88 | Generator > Presets > Hit/hurt | `Create hit/hurt` |  |  | — |  |
| 9 | 89 | Generator > Presets > Jump | `Create jump` |  |  | — |  |
| 10 | 90 | Generator > Presets > Blip/select | `Create blip/select` |  |  | — |  |
| 11 | 91 | Generator > Mutate | `Mutate sound` |  |  | — |  |
| 12 | 92 | Generator > Presets > By index | `Load preset <p0>` |  | expression numérique « Sound effect (0: Coin, 1: Laser, 2: Explosion, 3: Powerup, 4: Hurt, 5: Jump, 6: Blip) » | — |  |
| 13 | 93 | Generator > Reset | `Reset generator` |  |  | — |  |
| 14 | 94 | Generator > Variables > Wave type | `Set wave type to <p0>` |  | expression numérique « Wave type (0: Square wave, 1: Sawtooth, 2: Sine, 3: Noise) » | — |  |
| 15 | 95 | Generator > Variables > Timing > Attack time | `Set attack time to <p0>` |  | expression numérique « Attack time » | — |  |
| 16 | 96 | Generator > Generate | `Generate sound` |  |  | — |  |
| 17 | 97 | Manager > Delete | `Delete sound <p0>` |  | expression chaîne « Sound name » | — |  |
| 18 | 98 | Generator > Set seed | `Set random seed to <p0>` |  | expression numérique « Seed (0: Current time) » | — |  |
| 19 | 99 | Manager > Add from file | `Add sound <p0> from file <p1>` |  | expression chaîne « Sound name » ; nom de fichier « File (*.wav,*.ogg,*.mod,*.aif) » | — |  |
| 21 | 101 | Manager > Add from memory | `Add sound <p0> from memory address <p1> with size <p2>` |  | expression chaîne « Sound name » ; expression numérique « Memory address » ; expression numérique « File size (bytes) » | — |  |
| 22 | 102 | Playback > Pause | `Pause sound <p0>` |  | expression chaîne « Sound name » | — |  |
| 23 | 103 | Playback > Resume | `Resume sound <p0>` |  | expression chaîne « Sound name » | — |  |
| 24 | 104 | Playback > Stop | `Stop sound <p0>` |  | expression chaîne « Sound name » | — |  |
| 25 | 105 | Playback > Set position | `Set position of sound <p0> to <p1>` |  | expression chaîne « Sound name » ; expression numérique « Position (ms) » | — |  |
| 26 | 106 | Playback > Set frequency | `Set frequency of sound <p0> to <p1>` |  | expression chaîne « Sound name » ; expression numérique « Frequency (Hz, 0: Original) » | — |  |
| 27 | 107 | Playback > Set volume | `Set volume of sound <p0> to <p1>` |  | expression chaîne « Sound name » ; expression numérique « Volume (0-100) » | — |  |
| 28 | 108 | Playback > Set pan | `Set pan of sound <p0> to <p1>` |  | expression chaîne « Sound name » ; expression numérique « Pan (-100: Left, 0: Center, 100: Right) » | — |  |
| 29 | 109 | Generator > Variables > Timing > Sustain time | `Set sustain time to <p0>` |  | expression numérique « Sustain time » | — |  |
| 30 | 110 | Generator > Variables > Timing > Sustain punch | `Set sustain punch to <p0>` |  | expression numérique « Sustain punch » | — |  |
| 31 | 111 | Generator > Variables > Timing > Decay time | `Set decay time to <p0>` |  | expression numérique « Decay time » | — |  |
| 32 | 112 | Generator > Variables > Frequency > Start frequency | `Set start frequency to <p0>` |  | expression numérique « Start frequency » | — |  |
| 33 | 113 | Generator > Variables > Frequency > Minimum frequency | `Set minimum frequency to <p0>` |  | expression numérique « Minimum frequency » | — |  |
| 34 | 114 | Generator > Variables > Frequency > Slide | `Set slide to <p0>` |  | expression numérique « Slide » | — |  |
| 35 | 115 | Generator > Variables > Frequency > Delta slide | `Set delta slide to <p0>` |  | expression numérique « Delta slide » | — |  |
| 36 | 116 | Generator > Variables > Frequency > Vibrato depth | `Set vibrato depth to <p0>` |  | expression numérique « Vibrato depth » | — |  |
| 37 | 117 | Generator > Variables > Frequency > Vibrato speed | `Set vibrato speed to <p0>` |  | expression numérique « Vibrato Speed » | — |  |
| 38 | 118 | Generator > Variables > Frequency > Change amount | `Set change amount to <p0>` |  | expression numérique « Change amount » | — |  |
| 39 | 119 | Generator > Variables > Frequency > Change speed | `Set change speed to <p0>` |  | expression numérique « Change speed » | — |  |
| 40 | 120 | Generator > Variables > Square wave > Square duty | `Set square duty to <p0>` |  | expression numérique « Square duty » | — |  |
| 41 | 121 | Generator > Variables > Square wave > Duty sweep | `Set square duty sweep to <p0>` |  | expression numérique « Square duty sweep » | — |  |
| 42 | 122 | Generator > Variables > Repeat speed | `Set repeat speed to <p0>` |  | expression numérique « Repeat speed » | — |  |
| 43 | 123 | Generator > Variables > Phaser > Offset | `Set phaser offset to <p0>` |  | expression numérique « Phaser offset » | — |  |
| 44 | 124 | Generator > Variables > Phaser > Sweep | `Set phaser sweep to <p0>` |  | expression numérique « Phaser sweep » | — |  |
| 45 | 125 | Generator > Variables > Low pass filter > Cutoff | `Set LP filter cutoff to <p0>` |  | expression numérique « Low pass filter cutoff » | — |  |
| 46 | 126 | Generator > Variables > Low pass filter > Cutoff sweep | `Set LP filter cutoff sweep to <p0>` |  | expression numérique « Low pass filter cutoff sweep » | — |  |
| 47 | 127 | Generator > Variables > Low pass filter > Resonance | `Set LP filter resonance to <p0>` |  | expression numérique « Low pass filter resonance » | — |  |
| 48 | 128 | Generator > Variables > High pass filter > Cutoff | `Set HP filter cutoff to <p0>` |  | expression numérique « High pass filter cutoff » | — |  |
| 49 | 129 | Generator > Variables > High pass filter > Cutoff sweep | `Set HP filter cutoff sweep to <p0>` |  | expression numérique « High pass filter cutoff sweep » | — |  |
| 50 | 130 | Generator > Variables > Sound volume | `Set sound volume to <p0>` |  | expression numérique « Sound volume » | — |  |
| 51 | 131 | Generator > Variables > Load SFX sample | `Load SFX sample file <p0>` |  | nom de fichier « SFX sample file (*.sfs) » | — |  |
| 52 | 132 | Generator > Variables > Save SFX sample | `Save SFX sample file <p0>` |  | nom de fichier « SFX sample file (*.sfs) » | — |  |
| 53 | 133 | Manager > Save to file | `Save sound <p0> to file <p1>` |  | expression chaîne « Sound name » ; nom de fichier « File name » | — |  |
| 54 | 134 | Playback > With parameters > Play | `Play sound <p0> with (volume <p2>, pan <p3>, position <p4>, frequency <p5>) on channel <p1>` |  | expression chaîne « Sound name » ; expression numérique « Channel index (1-32, 0: Free channel) » ; expression numérique « Volume (0-100) » ; expression numérique « Pan (-100: Left, 0: Center, 100: Right) » ; expression numérique « Position (ms) » ; expression numérique « Frequency (Hz, 0: Original) » | — |  |
| 55 | 135 | Generator > Variables > Set by index | `Set variable with index <p0> to <p1>` |  | expression numérique « Index (0-23) » ; expression numérique « Value » | — |  |
| 56 | 136 | Generator > Variables > Load CSV string | `Load variables from CSV string <p0>` |  | expression chaîne « CSV string » | — |  |
| 57 | 137 | Playback > With parameters > Play and loop | `Play sound <p0> with (volume <p2>, pan <p3>, position <p4>, frequency <p5>) on channel <p1>, <p6> times` |  | expression chaîne « Sound name » ; expression numérique « Channel index (1-32, 0: Free channel) » ; expression numérique « Volume (0-100) » ; expression numérique « Pan (-100: Left, 0: Center, 100: Right) » ; expression numérique « Position (ms) » ; expression numérique « Frequency (Hz, 0: Original) » ; expression numérique « Repeat count (0: Infinite) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Sounds > Added > Index | `NewestSound(` |  |  | — |  |
| 1 | 81 | Sounds > Name from index | `SoundName$(` |  | nombre « Sound index (0-based) » → chaîne | — |  |
| 2 | 82 | Sounds > Index from name | `SoundIndex(` |  | chaîne « Sound name » | — |  |
| 3 | 83 | Sounds > Played/looped > Name | `PlayedSound$(` |  | → chaîne | — |  |
| 4 | 84 | Generator > Variables > Wave type | `WaveType(` |  |  | — |  |
| 5 | 85 | Generator > Variables > Sound volume | `SoundVolume(` |  |  | — |  |
| 6 | 86 | Generator > Variables > Timing > Attack time | `AttackTime(` |  |  | — |  |
| 7 | 87 | Generator > Variables > Timing > Sustain time | `SustainTime(` |  |  | — |  |
| 8 | 88 | Generator > Variables > Timing > Sustain punch | `SustainPunch(` |  |  | — |  |
| 9 | 89 | Generator > Variables > Timing > Decay time | `DecayTime(` |  |  | — |  |
| 10 | 90 | Generator > Variables > Frequency > Start frequency | `StartFreq(` |  |  | — |  |
| 11 | 91 | Generator > Generated data | `GenWave(` |  | nombre « Offset » | — |  |
| 12 | 92 | Generator > Generated length | `GenLength(` |  |  | — |  |
| 13 | 93 | Generator > Variables > Frequency > Minimum frequency | `MinFreq(` |  |  | — |  |
| 14 | 94 | Generator > Variables > Frequency > Slide | `Slide(` |  |  | — |  |
| 15 | 95 | Generator > Variables > Frequency > Delta slide | `DeltaSlide(` |  |  | — |  |
| 16 | 96 | Generator > Variables > Square wave > Square duty | `SquareDuty(` |  |  | — |  |
| 17 | 97 | Generator > Variables > Square wave > Duty sweep | `DutySweep(` |  |  | — |  |
| 18 | 98 | Generator > Variables > Frequency > Vibrato depth | `VibDepth(` |  |  | — |  |
| 19 | 99 | Generator > Variables > Frequency > Vibrato speed | `VibSpeed(` |  |  | — |  |
| 20 | 100 | Generator > Variables > Frequency > Change amount | `ChangeAmount(` |  |  | — |  |
| 21 | 101 | Generator > Variables > Frequency > Change speed | `ChangeSpeed(` |  |  | — |  |
| 22 | 102 | Generator > Variables > Repeat speed | `RepeatSpeed(` |  |  | — |  |
| 23 | 103 | Generator > Variables > Phaser > Offset | `PhaserOffset(` |  |  | — |  |
| 24 | 104 | Generator > Variables > Phaser > Sweep | `PhaserSweep(` |  |  | — |  |
| 25 | 105 | Generator > Variables > Low pass filter > Cutoff | `LPCutoff(` |  |  | — |  |
| 26 | 106 | Generator > Variables > Low pass filter > Cutoff sweep | `LPCutoffSweep(` |  |  | — |  |
| 27 | 107 | Generator > Variables > Low pass filter > Resonance | `LPResonance(` |  |  | — |  |
| 28 | 108 | Generator > Variables > High pass filter > Cutoff | `HPCutoff(` |  |  | — |  |
| 29 | 109 | Generator > Variables > High pass filter > Cutoff sweep | `HPCutoffSweep(` |  |  | — |  |
| 30 | 110 | Sounds > Played/looped > Channel | `PlayedChannel(` |  |  | — |  |
| 31 | 111 | Sounds > Played/looped > Index | `PlayedSound(` |  |  | — |  |
| 32 | 112 | Generator > Variables > By index | `Variable(` |  | nombre « Index (0-23) » | — |  |
| 33 | 113 | Generator > Variables > CSV string | `CSV$(` |  | → chaîne | — |  |
| 34 | 114 | Sounds > Original frequency | `SoundOriginalFreq(` |  | chaîne « Sound name » | — |  |
| 35 | 115 | Sounds > Memory address | `CountSounds(` |  |  | — |  |
| 36 | 116 | Sounds > Memory size | `SoundAddress(` |  | chaîne « Sound name » | — |  |
