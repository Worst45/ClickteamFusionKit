# Objets intégrés : conditions, actions, expressions

> Généré par `generate.js` à partir du catalogue de Nebula (libellés **anglais de Nebula**, proches mais pas
> identiques à ceux de l'éditeur Fusion) et de l'usage réel dans 163 projets. Voir `README.md`
> pour la lecture des tableaux.

- [Spécial (système)](#spécial-système)
- [Son](#son)
- [Scène (Storyboard)](#scène-storyboard)
- [Timer](#timer)
- [Créer / sélectionner des objets](#créer--sélectionner-des-objets)
- [Clavier et souris](#clavier-et-souris)
- [Joueurs (Player)](#joueurs-player)
- [Objets (commun à tous les objets)](#objets-commun-à-tous-les-objets)
- [Objet Active (objet actif)](#objet-active-objet-actif)
- [Objet Counter (compteur)](#objet-counter-compteur)
- [Objet Formatted Text](#objet-formatted-text)
- [Objet Question](#objet-question)
- [Objet String (texte)](#objet-string-texte)
- [Objet Sub-Application](#objet-sub-application)
- [Opérateurs (expressions)](#opérateurs-expressions)

## Spécial (système)

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -1 | `Always` | Toujours |  | 859 (97 proj.) | `Always` |
| -2 | `Never` | Jamais |  | 46 (5 proj.) | `Never` |
| -3 | `<p0> <op> <p1>` | <p0> <p1> |  | 1032 (46 proj.) | `Expression ID 83("SEAT ARRAY") > 0` |
| -4 | `Restrict actions for <p0>` | Restreindre les actions pour <p0> |  | 6 (2 proj.) |  |
| -5 | `Repeat <p0> times` | Répéter <p0> fois |  | 4 (1 proj.) | `Repeat 36 times` |
| -6 | `Run this event once` | Exécuter cet événement une seule fois |  | 78 (5 proj.) | `Run this event once` |
| -7 | `Only one action when event loops` | Une seule action lorsque l'événement est en boucle |  | 720 (49 proj.) | `Only one action when event loops` |
| -8 | `<valeur globale p0> <op> <p1>` |  |  | 837 (49 proj.) | `AngleStop = 30` |
| -9 | `"[COMMENT] " + Parameters[0]` |  |  | — |  |
| -10 | `[GROUP] <nom du groupe>` |  |  | — |  |
| -11 | `[END GROUP]` |  |  | — |  |
| -12 | `Group "<p0>" is activated` |  |  | 23 (4 proj.) | `Group "Reset Color of Text to Black" is activated` |
| -14 | `Menu option "<option de menu>" selected` |  |  | 56 (7 proj.) | `Menu option "New" selected` |
| -15 | `Files have been dropped` | Des fichiers ont été lachés |  | 1 (1 proj.) | `Files have been dropped` |
| -16 | `On loop <p0>` | Lors de la boucle <p0> |  | 1690 (36 proj.) | `On loop "Creation"` |
| -17 | `Menu option <option de menu> is checked` |  |  | 22 (1 proj.) | `NOT Menu option Tool Bar is checked` |
| -18 | `Menu option <option de menu> is enabled` |  |  | 12 (1 proj.) | `Menu option Undo is enabled` |
| -19 | `Menu bar is visible` | La barre de menu est visible |  | — |  |
| -20 | `<chaîne globale p0> <op> <p1>` |  |  | 289 (18 proj.) | `Global String A = "Lake.avi"` |
| -21 | `Close window has been selected` | Fermeture de fenêtre a été sélectionnée |  | 3 (1 proj.) | `Close window has been selected` |
| -22 | `Text is available in clipboard` | Du texte est disponible dans le presse-papier |  | — |  |
| -23 | `On group activation` | Lors de l'activation du groupe |  | 305 (27 proj.) |  |
| -24 | `OR` | Or |  | 36 (11 proj.) |  |
| -25 | `OR (logical)` | OR (logique) |  | 1001 (25 proj.) |  |
| -26 | `<p0> chances out of <p1> at random` | <p0> chances sur <p1> au hasard |  | 11 (4 proj.) |  |
| -40 | `Is running as Windows application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 0 | — |  |
| -40 | `Is running as Mac application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 1 | — |  |
| -40 | `Is running as SWF / Flash Player application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 2 | — |  |
| -40 | `Is running as Android application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 3 | — |  |
| -40 | `Is running as iOS application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 4 | — |  |
| -40 | `Is running as Html5 application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 5 | — |  |
| -40 | `Is running as XNA application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 6 | — |  |
| -40 | `Is running as UWP application` |  | Parameters[0].Data is ParameterInt et ((ParameterInt)Parameters[0].Data).Value = 7 | — |  |
| -40 | `Is running as <p0>` | Est exécuté en tant qu'application <p0> |  | — |  |
| -41 | `Is profiling in progress` | Profilage en cours? |  | — |  |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Skip` |  |  | — |  |
| 2 | `Execute external program <valeur> <valeur><valeur>` |  |  | — |  |
| 3 | `Set <valeur globale p0> to <p1>` |  |  | 1061 (58 proj.) | `Special : Set AngleStop to Expression ID 89("Active Picture 2")` |
| 4 | `Subtract <p1> from <valeur globale p0>` |  |  | 34 (10 proj.) | `Special : Subtract 1 from Global Value(1)` |
| 5 | `Add <p1> to <valeur globale p0>` |  |  | 131 (18 proj.) | `Special : Add 1 to Object Creation` |
| 6 | `Activate Group "<p0>"` |  |  | 1027 (58 proj.) | `Special : Activate Group "Wait for choices"` |
| 7 | `Deactivate Group "<p0>"` |  |  | 1339 (50 proj.) | `Special : Deactivate Group "Create initial seats"` |
| 8 | `Enable menu option <option de menu>` |  |  | 10 (3 proj.) | `Special : Enable menu option Undo` |
| 9 | `Disable menu option <option de menu>` |  |  | 22 (7 proj.) | `Special : Disable menu option Print` |
| 10 | `Check menu option <option de menu>` |  |  | 26 (7 proj.) | `Special : Check menu option Tool Bar` |
| 11 | `Uncheck menu option <option de menu>` |  |  | 26 (7 proj.) | `Special : Uncheck menu option Tool Bar` |
| 12 | `Show menu bar` | Montrer la barre de menu |  | — |  |
| 13 | `Hide menu bar` | Cacher la barre de menu |  | — |  |
| 14 | `Start loop <p0> <p1> times` | Démarrer la boucle <p0> <p1> fois |  | 628 (35 proj.) | `Special : Start loop "Creation" 8 times` |
| 15 | `Stop loop <p0>` | Arrêter la boucle <p0> |  | 86 (11 proj.) |  |
| 16 | `Set loop <p0> index to <p1>` | Fixer l'index de boucle <p0> à <p1> |  | — |  |
| 17 | `Randomize <p0>` | Randomiser <p0> |  | — |  |
| 18 | `Send Menu Command <option de menu>` |  |  | 1 (1 proj.) | `Special : Send Menu Command Save` |
| 19 | `Set <chaîne globale p0> to <p1>` |  |  | 117 (19 proj.) | `Special : Set Global String A to Expression ID 81("Play List")` |
| 20 | `Send <p0> to clipboard` | Envoyer <p0> au presse-papier |  | — |  |
| 21 | `Clear clipboard` | Vider le presse-papier |  | — |  |
| 22 | `Execute external program <p0> <p1><valeur>` |  |  | — |  |
| 23 | `Open debugger` | Ouvrir le débuggeur |  | — |  |
| 24 | `Pause debugger` | Mettre le débuggeur en pause |  | — |  |
| 25 | `Extract binary file <p0>` | Extraire fichier binaire <p0> |  | — |  |
| 26 | `Release binary file <p0>` | Libérer fichier binaire <p0> |  | — |  |
| 39 | `Start profiling` | Lancer le profilage |  | — |  |
| 40 | `Stop profiling` | Arrêter le profilage |  | — |  |
| 41 | `Clear output window` | Effacer fenêtre Résultats |  | — |  |
| 42 | `Send <p0> to output window` | Envoyer <p0> à la fenêtre Résultats |  | — |  |
| 44 | `Break` | Break |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `<entier> (ex. 3)` |  |  | 43538 (147 proj.) | `1` |
| -1 | `(` |  |  | 1108 (59 proj.) | `(` |
| 1 | `Random(` |  |  | 577 (49 proj.) | `Random(` |
| -2 | `)` |  |  | 5905 (116 proj.) | `)` |
| 2 | `Global Value(` |  |  | 194 (5 proj.) | `Global Value(` |
| -3 | `, ` |  |  | 2023 (42 proj.) | `, ` |
| 3 | `<chaîne> (ex. "texte")` |  |  | 5179 (102 proj.) | `"GingerDude.png"` |
| 4 | `Str$(` |  |  | 232 (32 proj.) | `Str$(` |
| 5 | `Val(` |  |  | 70 (16 proj.) | `Val(` |
| 6 | `Appdrive$` | Appdrive$ |  | 12 (7 proj.) | `Appdrive$` |
| 7 | `Appdir$` | Appdir$ |  | 16 (9 proj.) | `Appdir$` |
| 8 | `Apppath$` | Apppath$ |  | 57 (23 proj.) | `Apppath$` |
| 9 | `Appname$` | Appname$ |  | — |  |
| 10 | `Sin(` |  |  | 215 (9 proj.) | `Sin(` |
| 11 | `Cos(` |  |  | 177 (5 proj.) |  |
| 12 | `Tan(` |  |  | — |  |
| 13 | `Sqr(` |  |  | 7 (1 proj.) |  |
| 14 | `Log(` |  |  | — |  |
| 15 | `Ln(` |  |  | — |  |
| 16 | `Hex$(` |  |  | — |  |
| 17 | `Bin$(` |  |  | — |  |
| 18 | `Exp(` |  |  | — |  |
| 19 | `Left$(` |  |  | 1 (1 proj.) | `Left$(` |
| 20 | `Right$(` |  |  | 2 (1 proj.) | `Right$(` |
| 21 | `Mid$(` |  |  | 6 (4 proj.) |  |
| 22 | `Len(` |  |  | 20 (4 proj.) | `Len(` |
| 23 | `<décimal> (ex. 1.0, 2.5)` |  |  | 1909 (44 proj.) | `20.0` |
| 24 | `<nom d'une valeur globale>` |  |  | 1755 (42 proj.) | `Toggle` |
| 28 | `Int(` |  |  | 25 (2 proj.) |  |
| 29 | `Abs(` |  |  | 201 (8 proj.) |  |
| 30 | `Ceil(` |  |  | 1 (1 proj.) |  |
| 31 | `Floor(` |  |  | 222 (12 proj.) |  |
| 32 | `ACos(` |  |  | — |  |
| 33 | `ASin(` |  |  | — |  |
| 34 | `ATan(` |  |  | 1 (1 proj.) |  |
| 35 | `NOT(` |  |  | 2 (2 proj.) | `NOT(` |
| 36 | `NDropped` |  |  | 2 (1 proj.) | `NDropped` |
| 37 | `Dropped$(` |  |  | 1 (1 proj.) | `Dropped$(` |
| 38 | `CommandLine$` |  |  | — |  |
| 39 | `CommandItem$(` |  |  | — |  |
| 40 | `Min(` |  |  | 215 (10 proj.) | `Min(` |
| 41 | `Max(` |  |  | 311 (12 proj.) | `Max(` |
| 42 | `GetRGB(` |  |  | 19 (6 proj.) | `GetRGB(` |
| 43 | `GetRed(` |  |  | — |  |
| 44 | `GetGreen(` |  |  | — |  |
| 45 | `GetBlue(` |  |  | — |  |
| 46 | `LoopIndex(` |  |  | 875 (24 proj.) | `LoopIndex(` |
| 47 | `NewLine$` |  |  | 4 (1 proj.) | `NewLine$` |
| 48 | `Round(` |  |  | 10 (1 proj.) |  |
| 49 | `Global String(` |  |  | — |  |
| 50 | `<nom d'une chaîne globale>` |  |  | 49 (13 proj.) | `FileToOpen` |
| 51 | `Lower$(` |  |  | — |  |
| 52 | `Upper$(` |  |  | — |  |
| 53 | `Find(` |  |  | — |  |
| 54 | `ReverseFind(` |  |  | — |  |
| 55 | `ClipText$` |  |  | — |  |
| 56 | `AppTempPath$` |  |  | — |  |
| 57 | `BinFileTempName$(` |  |  | — |  |
| 58 | `FloatToString$(` |  |  | — |  |
| 59 | `ATan2(` |  |  | 8 (4 proj.) |  |
| 60 | `0` |  |  | — |  |
| 61 | `""` |  |  | — |  |
| 62 | `Distance(` |  |  | — |  |
| 63 | `VAngle(` |  |  | — |  |
| 64 | `Range(` |  |  | — |  |
| 65 | `RRandom(` |  |  | 62 (18 proj.) |  |
| 66 | `RuntimeName$` | RuntimeName$ |  | — |  |
| 67 | `ReplaceString$(` |  |  | — |  |

## Son

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -2 | -1 | `<p0> is not playing` | <p0> ne joue pas |  | — |  |
| -3 | `No sample is playing` | Aucun échantillon n'est en train d'être joué |  | 36 (6 proj.) | `No sample is playing` |
| -4 | `No music is playing` | Aucune musique n'est en train d'être jouée |  | — |  |
| -5 | `<p0> has just finished` |  |  | 4 (4 proj.) |  |
| -6 | `Is sample <p0> paused?` | L'échantillon sonore <p0> est en pause? |  | — |  |
| -7 | `Is music paused?` | La musique est-elle en pause? |  | — |  |
| -8 | `Is channel <p0> not playing?` | Le canal <p0> n'est pas en train de jouer? |  | 3 (1 proj.) |  |
| -9 | `Is channel <p0> paused?` | Le canal <p0> est-il en pause? |  | — |  |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Play sample <p0>` | Jouer échantillon <p0> |  | 2092 (45 proj.) | `Sound : Play sample Laser` |
| 1 | `Stop any sample` | Stopper tout échantillon sonore |  | 23 (4 proj.) | `Sound : Stop any sample` |
| 2 | `Play music <p0>` | Jouer musique <p0> |  | 62 (20 proj.) | `Sound : Play music BUGS` |
| 3 | `Stop any music` | Stopper toute musique |  | 59 (11 proj.) | `Sound : Stop any music` |
| 4 | `Play sample <p0> <p1> times` | Jouer échantillon <p0> <p1> fois |  | 19 (6 proj.) | `Sound : Play sample rasberry 4 times` |
| 5 | `Play music <p0> <p1> times` | Jouer musique <p0> <p1> fois |  | 85 (15 proj.) | `Sound : Play music LASTDAY 0 times` |
| 6 | `Stop sample <p0>` | Arrêter l'échantillon <p0> |  | 150 (2 proj.) |  |
| 7 | `Pause sample <p0>` | Passer l'échantillon <p0> en pause |  | — |  |
| 8 | `Resume sample <p0>` | Relancer l'échantillon <p0> |  | — |  |
| 9 | `Pause music` | Mettre la musique en pause |  | 1 (1 proj.) | `Sound : Pause music` |
| 10 | `Resume music` | Reprendre la musique |  | 1 (1 proj.) | `Sound : Resume music` |
| 11 | `Play sample <p0> on channel #<p1>` | Jouer l'échantillon <p0> sur le canal #¨<p1> |  | 32 (5 proj.) | `Sound : Play sample Oah on channel #2` |
| 12 | `Play sample <p0> on channel #<p1>, <p2> times` | Jouer l'échantillon <p0> sur le canal #<p1>, <p2> fois |  | 8 (5 proj.) | `Sound : Play sample Technovia_final on channel #1, 0 times` |
| 13 | `Pause channel #<p0>` | Mettre le canal #<p0> en pause |  | 3 (1 proj.) |  |
| 14 | `Resume channel #<p0>` | relancer le canal #<p0> |  | 2 (1 proj.) |  |
| 15 | `Stop channel #<p0>` | Arrêter le canal #<p0> |  | 3 (2 proj.) | `Sound : Stop channel #1` |
| 16 | `Set position of channel #<p0> to <p1>` | Fixer la position du canal #<p0> à <p1> |  | 2 (1 proj.) |  |
| 17 | `Set volume of channel #<p0> to <p1>` | Changer le volume du canal #<p0> à <p1> |  | 24 (7 proj.) | `Sound : Set volume of channel #1 to 100` |
| 18 | `Set pan of channel #<p0> to <p1>` | Fixer la balance du canal #<p0> à <p1> |  | 3 (1 proj.) |  |
| 19 | `Set position of sample <p0> to <p1>` | Fixer la position d'un échantillon <p0> à <p1> |  | — |  |
| 20 | `Set main volume to <p0>` | Passer le volume général à <p0> |  | — |  |
| 21 | `Set volume of sample <p0> to <p1>` | Changer le volume d'un échantillon <p0> à <p1> |  | — |  |
| 22 | `Set main pan to <p0>` | Fixer la balance générale à <p0> |  | — |  |
| 23 | `Set pan of sample <p0> to <p1>` | Fixer la balance de l'échantillon <p0> à <p1> |  | — |  |
| 24 | `Pause all sounds` | Mettre tous les sons en pause |  | 2 (2 proj.) | `Sound : Pause all sounds` |
| 25 | `Resume all sounds` | Relancer tous les sons |  | 2 (2 proj.) | `Sound : Resume all sounds` |
| 26 | `Play music file <p0>` | Jouer fichier musical <p0> |  | — |  |
| 27 | `Play and loop music file <p0>, <p1> times` | Jouer et boucler le fichier musical <p0>, <p1> fois |  | — |  |
| 28 | `Play sample file <p0> on channel #<p1>` |  |  | — |  |
| 29 | `Play sample file <p0> on channel #<p1>, <p2> times` |  |  | — |  |
| 30 | `Lock channel <p0>` | Verrouiller Canal <p0> |  | — |  |
| 31 | `Unlock channel <p0>` | Déverrouiller Canal <p0> |  | 1 (1 proj.) |  |
| 32 | `Set frequency of channel #<p0> to <p1>` | Fixer fréquence du canal <p0> à <p1> |  | 4 (1 proj.) |  |
| 33 | `Set frequency of sample <p0> to <p1>` | Fixer fréquence de l'échantillon <p0> à <p1> |  | 17 (3 proj.) |  |
| 34 | `Preload sample file <p0>` | Précharger fichier échantillon <p0> |  | — |  |
| 35 | `Discard sample file <p0>` | Libérer fichier échantillon <p0> |  | — |  |
| 36 | `Play sample <p0>, <p2> times, on channel #<p1>, volume <p3>, pan <p4>, frequency <p5>` |  |  | 59 (10 proj.) |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `SampleMainVolume` |  |  | — |  |
| 1 | `SampleVolume(` |  |  | — |  |
| 2 | `ChannelVolume(` |  |  | 2 (1 proj.) |  |
| 3 | `SampleMainPan` |  |  | — |  |
| 4 | `SamplePan(` |  |  | — |  |
| 5 | `ChannelPan(` |  |  | — |  |
| 6 | `SamplePosition(` |  |  | — |  |
| 7 | `ChannelPosition(` |  |  | 1 (1 proj.) |  |
| 8 | `SampleDuration(` |  |  | — |  |
| 9 | `ChannelDuration(` |  |  | — |  |
| 10 | `SampleFreq(` |  |  | 8 (3 proj.) |  |
| 11 | `ChannelFreq(` |  |  | 1 (1 proj.) |  |
| 12 | `ChannelSampleName$(` |  |  | — |  |

## Scène (Storyboard)

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -1 | `Start of Frame` | En début de scène |  | 936 (131 proj.) | `Start of Frame` |
| -2 | `End of Frame` | Fin de scène |  | 6 (6 proj.) | `End of Frame` |
| -4 | `End of Application` | Fin d'application |  | 17 (9 proj.) | `End of Application` |
| -5 | `<p0>,<p1> is an obstacle` | <p0>,<p1> est un obstacle |  | 32 (5 proj.) |  |
| -6 | `<p0>,<p1> is a ladder` | <p0>,<p1> est une échelle |  | 15 (3 proj.) |  |
| -7 | `V-Sync is enabled` | Synchronisation verticale activée |  | — |  |
| -8 | `End of pause` | Fin de pause |  | — |  |
| -9 | `Frame position has just been loaded` | La position de la scène vient d'être chargée |  | — |  |
| -10 | `Frame position has just been saved` | La position de la scène vient d'être sauvée |  | — |  |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Next frame` | Scène suivante |  | 119 (37 proj.) | `storyboard controls : Next frame` |
| 1 | `Previous frame` | Scène précédente |  | 39 (15 proj.) | `storyboard controls : Previous frame` |
| 2 | `Jump to frame <scène>` |  |  | 357 (37 proj.) | `storyboard controls : Jump to frame "Basic Solar System" (3)` |
| 4 | `End the application` | Terminer l'application |  | 146 (63 proj.) | `storyboard controls : End the application` |
| 5 | `Restart the application` | Relancer l'application |  | 41 (13 proj.) | `storyboard controls : Restart the application` |
| 6 | `Restart current frame` | Relancer la scène courante |  | 40 (20 proj.) | `storyboard controls : Restart current frame` |
| 7 | `Center display at <valeur>` |  |  | 114 (34 proj.) | `storyboard controls : Center display at (0,-48) from SCROLL DOT` |
| 8 | `Center display at X=<p0>` | Centrer l'affichage en X=<p0> |  | 24 (9 proj.) | `storyboard controls : Center display at X=X("Screen target for win")` |
| 9 | `Center display at Y=<p0>` | Centrer l'affichage en Y=<p0> |  | 24 (12 proj.) | `storyboard controls : Center display at Y=Y("Screen target for win")` |
| 12 | `Clear screen in color <p0>` | Effacer l'écran en couleur <p0> |  | — |  |
| 13 | `Clear zone zone <p0> in color <p1>` |  |  | 3 (1 proj.) | `storyboard controls : Clear zone zone (0,57) to (640,420) in color RGB(255,255,255)` |
| 14 | `Full Screen Mode` | Mode plein écran |  | — |  |
| 15 | `Windowed Mode` | Mode fenêtré |  | — |  |
| 16 | `Set frame rate to <p0>` | Fixer le nombre d'images par seconde à <p0> |  | 8 (3 proj.) |  |
| 17 | `Pause application and resume when key "<touche>" is pressed` |  |  | — |  |
| 18 | `Pause application and resume when any key is pressed` | Mettre en pause et relancer quand n'importe quelle touche est pressée |  | — |  |
| 19 | `Set V-Sync On` | Activer synchronisation verticale |  | — |  |
| 20 | `Set V-Sync Off` | Désactiver synchronisation verticale |  | — |  |
| 21 | `Set Virtual Width to <p0>` | Fixed Largeur Virtuelle à <p0> |  | — |  |
| 22 | `Set Virtual Height to <p0>` | Fixed Hauteur Virtuelle à <p0> |  | — |  |
| 23 | `Set Background Color to <p0>` | Fixer couleur de fond à <p0> |  | 16 (4 proj.) | `storyboard controls : Set Background Color to GetRGB(60, 188, 252)` |
| 24 | `Delete Created Backdrops At <p1>,<p2> in layer <p0> (fine detection: <p3>)` | Détruire les décors créés en <p1>,<p2> dans le calque <p0> (détection fine: <p3>) |  | — |  |
| 25 | `Delete All Created Backdrops in layer <p0>` | Détruire tous les décors créés dans le calque <p0> |  | — |  |
| 26 | `Set Frame Width to <p0>` | Fixer Largeur Scène à <p0> |  | — |  |
| 27 | `Set Frame Height to <p0>` | Fixer Hauteur Scène à <p0> |  | — |  |
| 28 | `Save frame position to <p0>, version <p1>` | Sauver la position de la scène dans <p0>, version <p1> |  | — |  |
| 29 | `Load frame position <p0>, version <p1>` | Charger la position de la scène <p0>, version <p1> |  | — |  |
| 30 | `Load application position <p0>, version <p1>` | Charger la position de l'application <p0>, version <p1> |  | — |  |
| 31 | `Play demo file <p0>` | Jouer le fichier démo <p0> |  | — |  |
| 32 | `Set effect to <valeur>` |  |  | 3 (1 proj.) |  |
| 33 | `Set effect parameter <p0> to <p1>` | Fixer paramètre effet <p0> à <p1> |  | 6 (1 proj.) |  |
| 34 | `Set effect image parameter <p0> to <p1>` | Fixer paramètre image effet <p0> à <p1> |  | — |  |
| 35 | `Set alpha-blending coefficient to <p0>` | Fixer coefficient semi-transparence à <p0> |  | — |  |
| 36 | `Set RGB coefficient to <p0>` | Fixer coefficient RGB à <p0> |  | — |  |
| 37 | `Set anti-aliasing when resizing to <p0>` | Mettre ré-échantillonage quand redimensionnement à <p0> |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `frame` | Scène |  | — |  |
| 1 | `players` | Joueurs |  | — |  |
| 2 | `X Left Frame` |  |  | 201 (17 proj.) | `X Left Frame` |
| 3 | `X Right Frame` |  |  | 136 (17 proj.) | `X Right Frame` |
| 4 | `Y Top Frame` |  |  | 160 (17 proj.) | `Y Top Frame` |
| 5 | `Y Bottom Frame` |  |  | 198 (15 proj.) | `Y Bottom Frame` |
| 6 | `Frame Width` |  |  | 24 (9 proj.) |  |
| 7 | `Frame Height` |  |  | 20 (11 proj.) | `Frame Height` |
| 8 | `frame` | Scène |  | 9 (1 proj.) | `frame` |
| 9 | `CollisionMask(` |  |  | — |  |
| 10 | `FrameRate` |  |  | 1 (1 proj.) |  |
| 11 | `VirtualWidth` |  |  | 8 (5 proj.) |  |
| 12 | `VirtualHeight` |  |  | 16 (8 proj.) |  |
| 13 | `FrameBkdColor` |  |  | — |  |
| 14 | `DisplayMode` |  |  | — |  |
| 15 | `PixelShaderVersion` |  |  | — |  |
| 16 | `FrameAlphaCoef` |  |  | — |  |
| 17 | `FrameRGBCoef` |  |  | — |  |
| 18 | `FrameEffectParam(` |  |  | — |  |
| 19 | `DPIScale` |  |  | — |  |

## Timer

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -1 | `Timer is greater than <p0>` | Le timer est plus grand que <p0> |  | 61 (20 proj.) | `Timer is greater than 10''-00` |
| -2 | `Timer is less than <p0>` | Le timer est moins grand que <p0> |  | 2 (1 proj.) | `Timer is less than 10''-00` |
| -4 | `Every <p0>` | Tous les <p0> |  | 773 (31 proj.) | `Every Every 50, 1000` |
| -5 | `User has left the computer for <p0>` | L'utilisateur a laissé l'ordinateur depuis <p0> |  | 1 (1 proj.) |  |
| -6 | `On timer event <p0>` | Lors de l'événement timer <p0> |  | — |  |
| -7 | `Timer equals <p0>` | Le timer est egal à <p0> |  | 14 (9 proj.) | `Timer equals 10''-00` |
| -8 | `Every <p0>` | Tous les <p0> |  | 55 (19 proj.) | `Every 00''-05` |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Set timer to <p0>` | Fixer le timer à <p0> |  | 12 (5 proj.) |  |
| 1 | `Fire event <p1> after <p0>` | Lancer l'événement <p1> après <p0> |  | — |  |
| 2 | `Fire event <p3> <p1> times every <p2> after <p0>` | Lancer l'événement <p3> <p1> fois tous les <p2> après <p0> |  | 4 (4 proj.) |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `timer` | Timer |  | 31 (6 proj.) | `timer` |
| 1 | `hundreds` |  |  | — |  |
| 2 | `seconds` |  |  | 36 (4 proj.) |  |
| 3 | `hours` |  |  | — |  |
| 4 | `minutes` |  |  | — |  |
| 5 | `eventindex` |  |  | — |  |

## Créer / sélectionner des objets

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -13 | `No more objects in zone <zone p0>` |  |  | — |  |
| -14 | `Number of objects in zone <valeur> <op> <valeur>` |  |  | — |  |
| -15 | `Total number of objects <op> <p0>` | Nombre total d'objets <p0> |  | — |  |
| -16 | `Pick a random object from zone <zone p0>` |  |  | — |  |
| -17 | `Pick an object at random` | Choisir un objet au hasard |  | — |  |
| -18 | `Pick all objects in zone <zone p0>` |  |  | — |  |
| -19 | `Pick objects with fixed value <op> <p0>` |  |  | 4 (1 proj.) |  |
| -20 | `Pick objects which <valeur modifiable p0> <op> <p1>` |  |  | — |  |
| -21 | `Pick objects with Flag <p0> on` |  |  | — |  |
| -22 | `Pick objects with Flag <p0> off` |  |  | — |  |
| -23 | `Pick all objects in line (<p0>,<p1>) to (<p2>,<p3>)` |  |  | — |  |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Create <p0>` | Créer <p0> |  | 2726 (66 proj.) | `New Objects : Create SEAT at (0,0) from SEAT-MAKER` |
| 1 | `Create <p0> at <p1>` | Créer <p0> en <p1> |  | — |  |
| 2 | 3 | `Create <p0> at X=<p1>, Y=<p2>, Layer=<p3>` | Créer <p0> en X=<p1>, Y=<p2>, Calque=<p3> |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Total Objects` |  |  | — |  |
| 1 | `Last fixed value` | Dernière valeur fixe |  | — |  |

## Clavier et souris

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -1 | `Upon pressing "<touche>"` |  |  | 763 (74 proj.) | `Upon pressing "Escape"` |
| -2 | `Repeat while "<touche>" is pressed` |  |  | 323 (14 proj.) | `NOT Repeat while "Enter" is pressed` |
| -3 | `Mouse pointer lays within zone <zone p0>` |  |  | 10 (4 proj.) | `Mouse pointer lays within zone (321,-1) to (642,239)` |
| -4 | `Mouse pointer is over <p0>` | Le pointeur de la souris se trouve au dessus de <p0> |  | 87 (14 proj.) | `Mouse pointer is over Active Picture 5` |
| -5 | `return5 + " button"` |  |  | 73 (37 proj.) | `User clicks with left button` |
| -6 | `return6 + $" button within zone <zone p1>"` |  |  | 31 (8 proj.) | `User clicks with left button within zone (298,436) to (344,465)` |
| -7 | `return7 + $" button on <p1>"` |  |  | 532 (52 proj.) | `User clicks with left button on ALLOCATE` |
| -8 | `return8 + " mouse-key is pressed"` |  |  | 53 (14 proj.) | `Repeat while left mouse-key is pressed` |
| -9 | `Upon pressing any key` | Lors de l'appui sur n'importe quelle touche |  | 6 (3 proj.) | `Upon pressing any key` |
| -10 | `Mouse cursor is displayed` | Le curseur de souris est affiché |  | — |  |
| -11 | `On mouse wheel up` | La roulette de la souris est bougée vers le haut |  | 7 (1 proj.) |  |
| -12 | `On mouse wheel down` | La roulette de la souris est bougée vers le bas |  | 7 (1 proj.) |  |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Hide Windows mouse pointer` | Cacher le pointeur de souris |  | 5 (2 proj.) | `The mouse pointer and keyboard : Hide Windows mouse pointer` |
| 1 | `Show Windows mouse pointer` | Montrer le pointeur de souris |  | 30 (12 proj.) | `The mouse pointer and keyboard : Show Windows mouse pointer` |
| 2 | `Reset input between frames: <valeur>` |  |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `XMouse` |  |  | 47 (20 proj.) | `XMouse` |
| 1 | `YMouse` |  |  | 49 (21 proj.) | `YMouse` |
| 2 | `WheelDelta` |  |  | — |  |

## Joueurs (Player)

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -2 | `Score of Player <n° joueur> <op> <p0>` |  |  | 188 (18 proj.) | `Score of Player 1 = 1` |
| -3 | `Number of lives of Player <n° joueur> <op> <p0>` |  |  | 232 (28 proj.) | `Number of lives of Player 1 = 0` |
| -4 | `Player <n° joueur> <direction joystick>` |  |  | 535 (45 proj.) | `Player 1 Pressed fire 1, Moved ` |
| -5 | `Number of lives of Player <n° joueur> reaches 0` |  |  | 51 (8 proj.) | `Number of lives of Player 1 reaches 0` |
| -6 | `Repeat while Player <n° joueur> <direction joystick>` |  |  | 251 (23 proj.) | `Repeat while Player 1 Pressed fire 1+fire 2, Moved ` |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Set Score to <p0>` | Fixer le score à <p0> |  | 173 (30 proj.) | `Player 1 : Set Score to value("Frig factor #4") - 1` |
| 1 | `Set Number of Lives to <p0>` | Fixer le nombre de vies à <p0> |  | 125 (28 proj.) | `Player 2 : Set Number of Lives to 2` |
| 2 | `Ignore Control` | Ignorer contrôle |  | 219 (36 proj.) | `Player 1 : Ignore Control` |
| 3 | `Restore Control` | Restaurer le contrôle |  | 117 (32 proj.) | `Player 1 : Restore Control` |
| 4 | `Add <p0> to Score` | Ajouter <p0> au score |  | 239 (39 proj.) | `Player 1 : Add 100 to Score` |
| 5 | `Add <p0> to Number of Lives` | Ajouter <p0> au nombre de vies |  | 126 (11 proj.) | `Player 1 : Add 1 to Number of Lives` |
| 6 | `Subtract <p0> from Score` | Soustraire <p0> au score |  | 121 (11 proj.) | `Player 1 : Subtract 100 from Score` |
| 7 | `Subtract <p0> from Number of Lives` | Soustraire <p0> au nombre de vies |  | 282 (30 proj.) | `Player 1 : Subtract 1 from Number of Lives` |
| 8 | `Set input device to <p0>` | Changer le périphérique d'entrée en <p0> |  | — |  |
| 9 | `Set key <p0> to "<touche>"` |  |  | — |  |
| 10 | `Set player name to <p0>` | Fixer le nom du joueur à <p0> |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `score("Player <n° joueur>")` |  |  | 58 (13 proj.) | `score("Player 2")` |
| 1 | `lives("Player <n° joueur>")` |  |  | 27 (4 proj.) | `lives("Player 2")` |
| 2 | `input("Player <n° joueur>")` |  |  | — |  |
| 3 | `key$("Player <n° joueur>", ` |  |  | — |  |
| 4 | `playername$("Player <n° joueur>")` |  |  | — |  |

## Objets (commun à tous les objets)

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -1 | `Current frame of <objet> <op> <p0>` | L'image courante de <objet> <p0> |  | 364 (5 proj.) | `Current frame of Bonus Star <= 10` |
| -2 | `<objet> animation <animation> is over` |  | Parameters[0].Data is ParameterShort | 469 (32 proj.) | `Lobo animation Fidget End is over` |
| -2 | `<objet> animation <p0> is over` | <objet>: l'animation <p0> est terminée | !(Parameters[0].Data is ParameterShort) | 469 (32 proj.) | `Lobo animation Fidget End is over` |
| -3 | `<objet> animation <animation> is playing` |  | Parameters[0].Data is ParameterShort | 685 (24 proj.) | `Lobo animation Jumping is playing` |
| -3 | `<objet> animation <p0> is playing` | <objet>: l'animation <p0> est en train de jouer | !(Parameters[0].Data is ParameterShort) | 685 (24 proj.) | `Lobo animation Jumping is playing` |
| -4 | `<objet> is overlapping <p0>` | <objet> est au dessus de <p0> |  | 2119 (44 proj.) | `Lobo is overlapping Base of funnel` |
| -6 | `<objet> is bouncing` | <objet> est en train de rebondir |  | 6 (1 proj.) | `NOT Player 1 is bouncing` |
| -7 | `<objet> is stopped` | <objet> est stoppé |  | 20 (5 proj.) | `Dog is stopped` |
| -8 | `<objet> is facing a direction <direction>` |  |  | 678 (27 proj.) | `Lobo is facing a direction ...........` |
| -9 | `<objet> is in the play area` |  |  | 26 (7 proj.) |  |
| -10 | `<objet> is out of the play area` |  |  | 135 (17 proj.) | `Club is out of the play area` |
| -11 | `<objet> enters the play area<valeur>` |  |  | 2 (1 proj.) | `Orange Racer enters the play area on the left` |
| -12 | `<objet> leaves the play area<valeur>` |  |  | 226 (29 proj.) | `You leaves the play area on the left, right` |
| -13 | `<objet> collides with the background` | <objet> est en collision avec le décor |  | 430 (36 proj.) | `Lobo collides with the background` |
| -14 | `Collision between <objet> and <p0>` | Collision entre <objet> et <p0> |  | 2065 (63 proj.) | `Collision between Top of funnel and Funnel` |
| -15 | `Speed of <objet> <op> <p0>` | La vitesse de <objet> <p0> |  | 185 (11 proj.) | `Speed of Sheep! <= 10` |
| -16 | `Y position of <objet> <op> <p0>` | La position en Y de <objet> <p0> |  | 569 (34 proj.) | `Y position of Space Crusader Top 6 = 240` |
| -17 | `X position of <objet> <op> <p0>` | La position en X de <objet> <p0> |  | 591 (41 proj.) | `X position of Graph point > 268` |
| -18 | `Deceleration of <objet> <op> <p0>` | La décélération de <objet> <p0> |  | — |  |
| -19 | `Acceleration of <objet> <op> <p0>` | L'accélération de <objet> <p0> |  | — |  |
| -20 | `<objet> has reached a node in the path` | <objet> a atteint un noeud dans le cheminement |  | 6 (5 proj.) | `Active has reached a node in the path` |
| -21 | `<objet> has reached the end in its path` |  |  | 39 (10 proj.) | `Active has reached the end in its path` |
| -22 | `<objet> is getting closer than <p0> pixels from window's edge` | <objet> se rapproche de plus de <p0> pixels de la bordure de la fenêtre |  | 123 (12 proj.) |  |
| -23 | `<objet> is overlapping a backdrop` | <objet> est au dessus d'un décor |  | 630 (19 proj.) | `NOT Ground check is overlapping a backdrop` |
| -24 | `<objet>: Flag <p0> is off` |  |  | 460 (40 proj.) | `SoundMute AO: Flag 0 is off` |
| -25 | `<objet>: Flag <p0> is on` |  |  | 545 (38 proj.) | `SoundMute AO: Flag 0 is on` |
| -26 | `Fixed value of <objet> <op> <p0>` | La valeur fixe de <objet> <p0> |  | 45 (14 proj.) | `Fixed value of Big Meteor = Exploding meteor` |
| -27 | `<valeur modifiable p0> of <objet> <op> <p1>` |  |  | 12902 (73 proj.) | `Alterable Value A of SEAT-MAKER = 11` |
| -28 | `<objet> is invisible` | <objet> est invisible |  | 28 (8 proj.) | `GO PROMPT is invisible` |
| -29 | `<objet> is visible` | <objet> est visible |  | 95 (11 proj.) | `GO PROMPT is visible` |
| -30 | `Number of <objet> in zone <valeur> <op> <valeur>` |  |  | 77 (5 proj.) | `Number of Wallop in zone (-4,-2) to (640,482) < Alterable Value B("Powerup")` |
| -31 | `No more <objet> in zone <zone p0>` |  |  | 3 (1 proj.) | `No more Ball in zone (0,0) to (26,326)` |
| -32 | `Number of <objet> <op> <p0>` | Le nombre de <objet> <p0> |  | 328 (30 proj.) | `Number of bullet = 0` |
| -33 | `Last <objet> has been destroyed` | Le dernier <objet> a été détruit |  | 59 (10 proj.) | `Last Spinny #1 has been destroyed` |
| -34 | `Pick one of <objet>` | Choisir l'un des <objet> |  | 137 (12 proj.) | `Pick one of Card position` |
| -35 | `Path movement of <objet> has reached node <p1>` |  |  | 2 (1 proj.) |  |
| -36 | `<chaîne modifiable p0> of <objet> <op> <p1>` |  |  | 16 (1 proj.) |  |
| -37 | `<objet>: font is bold` | <objet>: la police est grasse |  | — |  |
| -38 | `<objet>: font is italic` | <objet>: la police est en italique |  | — |  |
| -39 | `<objet>: font is underlined` | <objet>: la police est soulignée |  | — |  |
| -40 | `<objet>: font is strikeout` | <objet>: la police est barrée |  | — |  |
| -41 | `On each of <objet>, loop name <p0>` |  |  | 131 (21 proj.) |  |
| -44 | `Pick closest "<objet>" objects from "<p0>"` | Choisir objets "<objet>" les plus proches de "<p0>" |  | — |  |
| -45 | `<objet>: <p0> <op> <p1>` | <objet>: <p0> <p1> |  | — |  |
| -46 | `Layer of <objet> <op> <p0>` | Calque <objet> <p0> |  | — |  |
| -47 | `Pick "<objet>" objects with a minimum value of <p0>` |  |  | — |  |
| -48 | `Pick "<objet>" objects with a maximum value of <p0>` |  |  | — |  |
| -49 | `Instance value of <objet> <op> <p0>` | Valeur instance de <objet> <p0> |  | — |  |
| -50 | `Would <objet> at X=<p1>, Y=<p2> overlap <p0>?` | Est-ce que <objet> en X=<p1>, Y=<p2> serait au-dessus de <p0>? |  | 4 (1 proj.) |  |
| -51 | `Would <objet> at X=<p0>, Y=<p1> overlap a backdrop?` | Est-ce que <objet> en X=<p0>, Y=<p1> serait au-dessus d'un obstacle? |  | — |  |
| -81 | `<objet> <op> <p0>` | <objet> <p0> |  | 1601 (32 proj.) | `SUBSCRIPT A <> -1` |
| -82 | `Angle of <objet> <op> <p0>` | Angle de <objet> <p0> |  | — |  |
| -83 | `X scale of <objet> <op> <p0>` | Echelle en X de <objet> <p0> |  | — |  |
| -84 | `Y scale of <objet> <op> <p0>` | Echelle en Y de <objet> <p0> |  | — |  |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 0 | `Set Flag <p1> to <p2>` | Mettre drapeau <p1> à <p2> |  | 18 (6 proj.) |  |
| 1 | `Set position at <valeur>` |  |  | 1245 (61 proj.) | `Ground check : Set position at (0,0) from Lobo` |
| 2 | `Set X position to <p0>` | Fixer la position en X à <p0> |  | 1643 (81 proj.) | `SEAT-MAKER : Set X position to X("SEAT-MAKER") + 41` |
| 3 | `Set Y position to <p0>` | Fixer la position en Y à <p0> |  | 1739 (78 proj.) | `SEAT-MAKER : Set Y position to Y("SEAT-MAKER") + 41` |
| 4 | `Stop` | Stop |  | 561 (56 proj.) | `Active : Stop` |
| 5 | `Start` | Démarrer |  | 149 (35 proj.) | `Active : Start` |
| 6 | `Set speed to <p0>` | Fixer la vitesse à <p0> |  | 354 (31 proj.) | `Octogon 1 : Set speed to Speed("Octogon 1") + 10` |
| 7 | `Set maximum speed to <p0>` | Fixer la vitesse maximum à <p0> |  | 120 (6 proj.) | `Sky Rocket : Set maximum speed to Alterable Value C("Powerup") * 10` |
| 8 | `Wrap` | Faire le tour |  | 46 (11 proj.) | `Big Meteor : Wrap` |
| 9 | `Bounce` | Rebond |  | 334 (24 proj.) | `Bounce : Bounce` |
| 10 | `Reverse` | Inverser |  | 10 (3 proj.) | `Octogon 1 : Reverse` |
| 11 | `Next movement` | Mouvement suivant |  | — |  |
| 12 | `Previous movement` | Mouvement précédent |  | — |  |
| 13 | `Select movement <p0>` | Sélectionner le mouvement <p0> |  | — |  |
| 14 | `Look at <valeur>` |  |  | 70 (16 proj.) | `Homer #1 : Look at (0,0) from Spinny #1 ()` |
| 15 | `Stop animation` | Stopper l'animation |  | 100 (22 proj.) | `Space Crusader Top 6 : Stop animation` |
| 16 | `Start animation` | Lancer l'animation |  | 122 (12 proj.) | `Space Crusader Top 6 : Start animation` |
| 17 | `Change animation sequence to <animation>` |  | Parameters[0].Data is ParameterShort animS | 2584 (61 proj.) | `Lobo : Change animation sequence to Crouch down` |
| 17 | `Change animation sequence to <p0>` | Changer la séquence d'animation pour <p0> | !(Parameters[0].Data is ParameterShort animS) | 2584 (61 proj.) | `Lobo : Change animation sequence to Crouch down` |
| 18 | `Change animation direction to <direction>` |  |  | 23 (4 proj.) | `Card : Change animation direction to Alterable Value B("Card") * Alterable Value A("Card") / 4 + Alterable Value B("Card")` |
| 19 | `Change speed of animation to <p0>` | Changer la vitesse d'animation à <p0> |  | 97 (5 proj.) | `player-1 : Change speed of animation to Speed("start-point")` |
| 20 | `Restore animation sequence` | Restaurer l'animation |  | 115 (5 proj.) | `Sky Rocket : Restore animation sequence` |
| 21 | `Restore animation direction` | Restaurer la direction d'animation |  | 5 (1 proj.) |  |
| 22 | `Restore speed of animation` | Restaurer la vitesse d'animation |  | 8 (1 proj.) |  |
| 23 | `Set direction to <direction>` |  |  | 1811 (75 proj.) | `SEAT : Set direction to Expression ID 83("SEAT ARRAY")` |
| 24 | `Destroy` | Détruire |  | 2733 (80 proj.) | `SEAT : Destroy` |
| 25 | `Swap position with another object` | Echanger la position avec un autre objet |  | 1 (1 proj.) |  |
| 26 | `Make invisible` | Rendre invisible |  | 1188 (40 proj.) | `SEAT-MAKER : Make invisible` |
| 27 | `Reappear` | Réapparition |  | 936 (40 proj.) | `Play : Reappear` |
| 28 | `Flash during <p0>` | Clignoter pendant <p0> |  | 62 (10 proj.) | `Ship : Flash during 00''-10` |
| 29 | `Launch <p0>` | Lancer <p0> |  | 375 (24 proj.) | `You : Launch bullet toward ............. at speed 50` |
| 30 | `Launch <p0> toward <valeur>` |  |  | 33 (8 proj.) | `Start : Launch Hedgehog 100% at speed 12 toward (0,0) from Sky Rocket` |
| 31 | `Set <valeur modifiable p0> to <p1>` |  |  | 10502 (77 proj.) | `SEAT : Set Alterable Value A to Alterable Value A("SEAT-MAKER") + (Alterable Value B("SEAT-MAKER") * 11)` |
| 32 | `Add <p1> to <valeur modifiable p0>` |  |  | 1036 (50 proj.) | `SEAT-MAKER : Add 1 to Alterable Value A` |
| 33 | `Subtract <p1> from <valeur modifiable p0>` |  |  | 549 (48 proj.) | `Bullet : Subtract 1 from Alterable Value A` |
| 34 | `Spread value <p1> in <valeur modifiable p0>` |  |  | 48 (10 proj.) | `Card : Spread value 0 in Alterable Value A` |
| 35 | `Set Flag <p0> on` |  |  | 614 (37 proj.) | `start-point : Set Flag 0 on` |
| 36 | `Set Flag <p0> off` |  |  | 463 (29 proj.) | `start-point : Set Flag 0 off` |
| 37 | `Toggle Flag <p0>` |  |  | 45 (18 proj.) | `SoundMute AO : Toggle Flag 0` |
| 38 | `Set ink effect to <effet d'encre>` |  |  | 4 (1 proj.) |  |
| 39 | `Set semi-transparency to <p0>` | Fixer la semi-transparence à <p0> |  | 15 (2 proj.) | `Dog : Set semi-transparency to 0` |
| 40 | `Force animation frame to <p0>` | Force l'image de l'animation à <p0> |  | 287 (20 proj.) | `pipe-top.Active : Force animation frame to sceneryVariant` |
| 41 | `Restore animation frame` | Restaurer l'image d'animation |  | 58 (1 proj.) |  |
| 42 | `Set acceleration to <p0>` | Fixer l'accélération à <p0> |  | — |  |
| 43 | `Set deceleration to <p0>` | Fixer la décélération à <p0> |  | 17 (5 proj.) | `bird.Active : Set deceleration to 65` |
| 44 | `Set rotating speed to <p0>` | Fixer la vitesse de rotation à <p0> |  | — |  |
| 45 | `Set authorized directions to <direction>` |  |  | — |  |
| 46 | `Branch node <p0>` | Brancher le noeud <p0> |  | — |  |
| 47 | `Set gravity to <p0>` | Fixer la gravité à <p0> |  | — |  |
| 48 | `Goto node <p0>` | Aller au noeud <p0> |  | — |  |
| 49 | `Set <chaîne modifiable p0> to <p1>` |  |  | 131 (2 proj.) |  |
| 50 | `Set font name to <p0>` | Fixer le nom de la police en <p0> |  | 1 (1 proj.) |  |
| 51 | `Set font size to <p0>, border <p1>` | Fixer taille police à <p0>, bordure <p1> |  | 2 (1 proj.) | `String Object : Set font size to 8, border 0` |
| 52 | `Set bold <p0>` | Passer en gras <p0> |  | 4 (2 proj.) | `String : Set bold 0` |
| 53 | `Set italic <p0>` | Passer en italique <p0> |  | 2 (1 proj.) | `String Object : Set italic 1` |
| 54 | `Set underline <p0>` | Passer en souligné <p0> |  | 2 (1 proj.) | `String Object : Set underline 1` |
| 55 | `Set strikeout <p0>` | Passer en barré <p0> |  | 2 (1 proj.) | `String Object : Set strikeout 1` |
| 56 | `Set font color to <p0>` | Fixer la couleur de la police à <p0> |  | 2 (1 proj.) | `String Object : Set font color to RGB(255,0,0)` |
| 57 | `Bring to front` | Passer devant |  | 160 (21 proj.) | `Dog : Bring to front` |
| 58 | `Bring to back` | Passer en fond |  | 237 (21 proj.) | `Detector : Bring to back` |
| 59 | `Move behind object <p0>` | Faire passer derrière l'objet <p0> |  | 173 (2 proj.) | `Electron 1 : Move behind object Atom` |
| 60 | `Move in front of object <p0>` | Faire passer devant l'objet <p0> |  | 68 (3 proj.) | `Electron 1 : Move in front of object Atom` |
| 61 | `Move to layer <p0>` | Déplacer vers calque <p0> |  | 237 (1 proj.) |  |
| 62 | `Add to debugger` | Ajouter au débuggeur |  | 218 (33 proj.) | `Local Variables : Add to debugger` |
| 63 | `Set effect to <valeur>` |  |  | 7 (1 proj.) |  |
| 64 | `Set effect parameter <p0> to <p1>` | Fixer paramètre effet <p0> à <p1> |  | 89 (11 proj.) |  |
| 65 | `Set alpha-blending coefficient to <p0>` | Fixer coefficient semi-transparence à <p0> |  | 4 (2 proj.) |  |
| 66 | `Set RGB coefficient to <p0>` | Fixer coefficient RGB à <p0> |  | — |  |
| 67 | `Set effect image parameter <p0> to <p1>` | Fixer paramètre image effet <p0> à <p1> |  | — |  |
| 68 | `Set friction to <p0>` | Fixer la friction à <p0> |  | — |  |
| 69 | `Set elasticity to <p0>` | Fixer l'élasticité à <p0> |  | — |  |
| 70 | `Apply impulse, force <p0>, angle <p1> degrees` | Appliquer une impulsion <p0>, angle <p1> degrés |  | — |  |
| 71 | `Apply angular impulse, torque <p0>` | Appliquer une impulsion angulaire, couple <p0> |  | — |  |
| 72 | `Apply force <p0>, angle <p1> degrees` | Appliquer la force <p0>, angle <p1> degrés |  | — |  |
| 73 | `Apply torque <p0>` | Appliquer le couple <p0> |  | — |  |
| 74 | `Set linear velocity to <p0>, angle <p1> degrees` | Fixer la vélocité linéaire à <p0>, angle <p1> degrés |  | — |  |
| 75 | `Set angular velocity to <p0>` | Fixer la vélocité angulaire à <p0> |  | — |  |
| 76 | `Start loop for each one of <objet>, loop name <p0>` | Lancer une boucle pour chacun des <objet>, nom de boucle <p0> |  | 180 (20 proj.) |  |
| 77 | `Start loop for each one of <objet> and <p0>, loop name <p1>` | Lancer une boucle pour chacun des <objet> et <p0>, nom de boucle <p1> |  | — |  |
| 78 | `Stop force` | Arrêter la force |  | — |  |
| 79 | `Stop torque` | Arrêter le couple |  | — |  |
| 80 | `Paste into background <obstacle>` |  |  | 47 (5 proj.) | `Blue Star : Paste into background` |
| 81 | `Display paragraph <valeur> at <valeur>` |  |  | 8 (3 proj.) | `A Draw!... : Display paragraph 1 at (212,4)` |
| 82 | `Flash paragraph <valeur> at <valeur> for <p2>` |  |  | 94 (3 proj.) |  |
| 83 | `Add backdrop <obstacle>` |  |  | — |  |
| 84 | `Replace color <p0> by <p1>` | Remplacer la couleur <p0> par <p1> |  | — |  |
| 85 | `Set scale to <p0> (Quality = <p1>)` | Fixer l'échelle à <p0> (qualité = <p1>) |  | 169 (15 proj.) | `Earth : Set scale to 0.8 - 0.2 * Sin(Expression ID 111("Clickteam Movement Controller")Fixed("Earth"))) (Quality = 1)` |
| 86 | `Set X scale to <p0> (Quality = <p1>)` | Fixer l'échelle en X à <p0> (qualité = <p1>) |  | 7 (1 proj.) |  |
| 87 | `Set Y scale to <p0> (Quality = <p1>)` | Fixer l'échelle en Y à <p0> (qualité = <p1>) |  | 8 (2 proj.) |  |
| 88 | `Set angle to <p0> (Quality = <p1>)` | Fixer l'angle à <p0> (qualité = <p1>) |  | 65 (5 proj.) | `Big Meteor : Set angle to Alterable Value C("Big Meteor") (Quality = 0)` |
| 89 | `Load <p0> into Animation <animation>, Direction <direction>, Frame #<p3>, HotSpot(<p4>,<p5>, Action Point(<p6>,<p7>), Transparent Color <p8>` |  | Parameters[1].Data is ParameterShort | 2 (1 proj.) |  |
| 89 | `Load <p0> into Animation <p1>, Direction <direction>, Frame #<p3>, HotSpot(<p4>,<p5>, Action Point(<p6>,<p7>), Transparent Color <p8>` |  | !(Parameters[1].Data is ParameterShort) | 2 (1 proj.) |  |
| 90 | `Load <p0> as image, HotSpot(<p1>,<p2>, Action Point(<p3>,<p4>), Transparent Color <p5>` |  |  | — |  |
| 91 | `Load animations from file <p0>` | Charger animations depuis fichier <p0> |  | — |  |
| 92 | `Select from Word num <p0> to <p1>` | Sélectionner à partir du mot <p0> jusqu'à <p1> |  | — |  |
| 93 | `Set width to <p0>` | Fixer la largeur à <p0> |  | — |  |
| 94 | `Set Focus to Word num <p0>` | Mettre le focus sur le mot numéro <p0> |  | 1 (1 proj.) | `Formatted Text : Set Focus to Word num Expression ID 86("Edit")` |
| 95 | `Remove highlight` | Enlever la surbrillance |  | 1 (1 proj.) | `Formatted Text : Remove highlight` |
| 96 | `Set Highlighted text color <p0>` | Fixer la couleur du texte sélectionné à <p0> |  | 8 (1 proj.) | `Formatted Text : Set Highlighted text color RGB(0,0,0)` |
| 97 | `Set Highlighted text bold` | Passer le texte sélectionné en gras |  | — |  |
| 98 | `Set Highlighted text italic` | Passer le texte sélectionné en italique |  | — |  |
| 99 | `Set Highlighted text underlined` | Passer le texte sélectionné en souligné |  | 1 (1 proj.) | `Formatted Text : Set Highlighted text underlined` |
| 100 | `Set Highlighted text outline color <p0>, <p1> pixels` | Fixer la couleur du tour du texte sélectionné à <p0>, <p1> pixels |  | — |  |
| 101 | `Set Highlighted background color <p0>` | Fixer la couleur de fond sélectionné à <p0> |  | 1 (1 proj.) | `Formatted Text : Set Highlighted background color RGB(203,203,203)` |
| 103 | `Set Highlighted background as Marker` | Passer le fond sélectionné en marqueur |  | — |  |
| 104 | `Set Highlighted background as Hatched with color <p0>` | Fixer le fond sélectionné en moiré avec la couleur <p0> |  | — |  |
| 105 | `Set Highlighted background as Inverted` |  |  | — |  |
| 106 | `Display the text` | Afficher le texte |  | 1 (1 proj.) | `Formatted Text : Display the text` |
| 107 | `Set Focus to previous word` | Mettre le focus sur le mot précédent |  | — |  |
| 108 | `Set Focus to next word` | Mettre le focus sur le mot suivant |  | — |  |
| 109 | `Remove the Focus` | Enlever le focus |  | 1 (1 proj.) | `Formatted Text : Remove the Focus` |
| 112 | `Insert <p0>` | Insérer <p0> |  | — |  |
| 113 | `Load text <p0>` | Charger le texte <p0> |  | 1 (1 proj.) | `Formatted Text : Load text "D:\MMF2CDs\MMF2Dev\CD2 - 2.5\Examples\Objects\Formatted Text\Test.rtf"` |
| 114 | `Insert text <p0>` | Insérer le texte <p0> |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 1 | `Y("<objet>")` |  |  | 1532 (65 proj.) | `Y("SEAT-MAKER")` |
| 2 | `Image("<objet>")` |  |  | 5028 (111 proj.) | ` + ` |
| 3 | `Speed("<objet>")` |  |  | 76 (12 proj.) | `Speed("Octogon 1")` |
| 4 | `Acc("<objet>")` |  |  | 2609 (87 proj.) | ` - ` |
| 5 | `Dec("<objet>")` |  |  | — |  |
| 6 | `Dir("<objet>")` |  |  | 2190 (70 proj.) | ` * ` |
| 7 | `X Left("<objet>")` |  |  | 72 (17 proj.) |  |
| 8 | `X Right("<objet>")` |  |  | 979 (56 proj.) | ` / ` |
| 9 | `Y Top("<objet>")` |  |  | 62 (16 proj.) | `Y Top("pipe-gate.Active")` |
| 10 | `Y Bottom("<objet>")` |  |  | 432 (35 proj.) | ` mod ` |
| 11 | `X("<objet>")` |  |  | 1486 (69 proj.) | `X("SEAT-MAKER")` |
| 12 | `Fixed("<objet>")` |  |  | 125 (20 proj.) | `Fixed("Active")` |
| 13 | `Flag("<objet>", ` |  |  | 18 (6 proj.) |  |
| 14 | `Anim Number("<objet>")` |  |  | 134 (1 proj.) |  |
| 15 | `NObjects("<objet>")` |  |  | 30 (7 proj.) | `NObjects("Ball")` |
| 16 | `<valeur>("<objet>")` |  |  | 6607 (73 proj.) | `Alterable Value B("SEAT-MAKER")` |
| 17 | `SemiTrans("<objet>")` |  |  | 9 (1 proj.) |  |
| 18 | `NMovement("<objet>")` |  |  | — |  |
| 19 | `<valeur>("<objet>")` |  |  | 301 (2 proj.) |  |
| 20 | `FontName$("<objet>")` |  |  | — |  |
| 21 | `FontSize("<objet>")` |  |  | — |  |
| 22 | `FontColor("<objet>")` |  |  | — |  |
| 23 | `Layer("<objet>")` |  |  | 231 (1 proj.) |  |
| 24 | `Gravity("<objet>")` |  |  | — |  |
| 25 | `XActionPoint("<objet>")` |  |  | 10 (1 proj.) |  |
| 26 | `YActionPoint("<objet>")` |  |  | 1 (1 proj.) |  |
| 27 | `AlphaCoef("<objet>")` |  |  | — |  |
| 28 | `RGBCoef("<objet>")` |  |  | — |  |
| 29 | `EffectParam("<objet>", ` |  |  | 6 (2 proj.) |  |
| 30 | `AltValN("<objet>", ` |  |  | 1 (1 proj.) |  |
| 31 | `AltStrN$("<objet>", ` |  |  | — |  |
| 32 | `ODistance("<objet>", ` |  |  | — |  |
| 33 | `OAngle("<objet>", ` |  |  | — |  |
| 34 | `ForEachLoopIndex("<objet>")` |  |  | — |  |
| 35 | `PFriction("<objet>")` |  |  | — |  |
| 36 | `PElasticity("<objet>")` |  |  | — |  |
| 37 | `PDensity("<objet>")` |  |  | — |  |
| 38 | `PVelocity("<objet>")` |  |  | — |  |
| 39 | `PVelocityAngle("<objet>")` |  |  | — |  |
| 40 | `OWidth("<objet>")` |  |  | 329 (29 proj.) | `OWidth("hud-score-big.Counter")` |
| 41 | `OHeight("<objet>")` |  |  | 119 (22 proj.) |  |
| 42 | `PMass("<objet>")` |  |  | — |  |
| 43 | `PAngularVelocity("<objet>")` |  |  | — |  |
| 44 | `OName$("<objet>")` |  |  | — |  |
| 45 | `NSelectedObjects("<objet>")` |  |  | — |  |
| 46 | `InstanceValue("<objet>")` |  |  | — |  |

## Objet Active (objet actif)

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 81 | `Bring to front` | Passer devant |  | 53 (6 proj.) | `BOMB : Bring to front` |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `RGBAt("<objet>", ` |  |  | 40 (1 proj.) |  |
| 81 | `XScale("<objet>")` |  |  | 2 (1 proj.) |  |
| 82 | `YScale("<objet>")` |  |  | — |  |
| 83 | `Angle("<objet>")` |  |  | 5 (2 proj.) |  |

## Objet Counter (compteur)

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `Set Counter to <p0>` | Fixer le compteur à <p0> |  | 1234 (51 proj.) | `Counter : Set Counter to Expression ID 89("Active Picture 2")` |
| 81 | `Add <p0> to Counter` | Ajouter <p0> au compteur |  | 302 (31 proj.) | `Counter : Add 1 to Counter` |
| 82 | `Subtract <p0> from Counter` | Soustraire <p0> au compteur |  | 185 (20 proj.) | `Fidget detect : Subtract 1 from Counter` |
| 83 | `Set minimum value to <p0>` | Fixer la valeur minimale à <p0> |  | 2 (2 proj.) |  |
| 84 | `Set maximum value to <p0>` | Fixer la valeur maximale à <p0> |  | 7 (4 proj.) |  |
| 85 | `Set color to <p0>` | Fixer la couleur à <p0> |  | — |  |
| 86 | `Set color #2 to <p0>` | Fixer la couleur n°2 à <p0> |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `value("<objet>")` |  |  | 250 (30 proj.) | `value("SUBSCRIPT A")` |
| 81 | `minvalue("<objet>")` |  |  | — |  |
| 82 | `maxvalue("<objet>")` |  |  | 2 (1 proj.) |  |
| 83 | `cColor("<objet>")` |  |  | — |  |
| 84 | `cColor2("<objet>")` |  |  | — |  |

## Objet Formatted Text

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `Set X Position to <p0>` | Fixer la position en X à <p0> |  | — |  |
| 81 | `Set Y Position to <p0>` | Fixer la position en Y à <p0> |  | 4 (1 proj.) |  |
| 82 | `Set Zoom Factor to <p0>` | Fixer le facteur de zoom à <p0> |  | 1 (1 proj.) |  |
| 83 | `Clear Selected` | Effacer la sélection |  | 6 (1 proj.) | `Formatted Text : Clear Selected` |
| 84 | `Search and select <p0>` | Chercher et sélectionner <p0> |  | 1 (1 proj.) | `Formatted Text : Search and select Expression ID 80("Edit")` |
| 85 | `Search and select next` | Chercher et sélectionner le suivant |  | 1 (1 proj.) | `Formatted Text : Search and select next` |
| 86 | `Search All and select<p0>` | Chercher tout et sélectionner <p0> |  | 1 (1 proj.) | `Formatted Text : Search All and selectExpression ID 80("Edit")` |
| 87 | `Select word num <p0>` | Sélectionner le mot numéro <p0> |  | 1 (1 proj.) |  |
| 88 | `Select Line num <p0>` | Sélectionner ligne numéro <p0> |  | — |  |
| 89 | `Select Paragraph num <p0>` | Sélectionner le paragraphe numéro <p0> |  | 1 (1 proj.) | `Formatted Text : Select Paragraph num Expression ID 86("Edit")` |
| 91 | `Select All` | Tout sélectionner |  | — |  |

## Objet Question

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -81 | `<objet> : correct answer` | <objet>: réponse exacte |  | 5 (2 proj.) | `Start a new game?... : correct answer` |
| -82 | `<objet> : bad answer` | <objet>: mauvaise réponse |  | 5 (2 proj.) | `Start a new game?... : bad answer` |
| -83 | `<objet> : answer number <p0> chosen` | <objet>: réponse numéro <p0> choisie |  | 1 (1 proj.) | `Who was the tallest ... : answer number value("Counter") chosen` |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `Ask question` | Poser la question |  | 10 (2 proj.) | `Start a new game?... : Ask question` |

## Objet String (texte)

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `Erase` | Effacer |  | 9 (1 proj.) | `Yes, that is correct... : Erase` |
| 83 | `Set color of <p0>` | Fixer la couleur de <p0> |  | 77 (3 proj.) | `Click on a card.... : Set color of RGB(128,128,128)` |
| 84 | `Display paragraph <valeur>` |  | Parameters.Length > 1 et Parameters[1].Data is ParameterShort | 60 (11 proj.) | `ALLOC TEXT : Display paragraph 0` |
| 84 | `Display paragraph <p0>` | Afficher le paragraphe <p0> | !(Parameters.Length > 1 et Parameters[1].Data is ParameterShort) | 60 (11 proj.) | `ALLOC TEXT : Display paragraph 0` |
| 85 | `Display previous paragraph` | Afficher le paragraphe précédent |  | — |  |
| 86 | `Display next paragraph` | Afficher le paragraphe suivant |  | 18 (6 proj.) | `MAIN TEXT : Display next paragraph` |
| 87 | `Display alterable string` | Afficher la chaîne modifiable |  | — |  |
| 88 | `Set alterable string to <p0>` | Fixer la chaîne modifiable à <p0> |  | 126 (24 proj.) | `MAIN TEXT : Set alterable string to "ALLOCATE SEAT"` |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `paragraph("<objet>")` |  |  | — |  |
| 81 | `string$("<objet>")` |  |  | 61 (4 proj.) | `string$("...")` |
| 82 | `paragraph$("<objet>", ` |  |  | — |  |
| 83 | `value("<objet>")` |  |  | — |  |
| 84 | `npara("<objet>")` |  |  | — |  |

## Objet Sub-Application

### Conditions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| -81 | `<objet>: Frame has changed` |  |  | — |  |
| -82 | `Application <objet> is finished` | L'application <objet> est finie |  | 1 (1 proj.) | `Application MDIChild is finished` |
| -83 | `Application <objet> is visible` | L'application <objet> est visible |  | 8 (1 proj.) | `Application ToolBar is visible` |
| -84 | `Application <objet> is paused` | L'application <objet> est en pause |  | — |  |

### Actions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `Restart application` | Relancer l'application |  | — |  |
| 81 | `Restart current frame` | Relancer la scène courante |  | — |  |
| 82 | `Next Frame` | Scène suivante |  | — |  |
| 83 | `Previous Frame` | Scène précédente |  | — |  |
| 84 | `End application` | Terminer l'application |  | — |  |
| 85 | `Set application <p0>` | Fixer l'application <p0> |  | 1 (1 proj.) | `Sub-Application 2 : Set application Apppath$ + "scrolling.ccn"` |
| 86 | `Jump to Frame <p0>` | Aller à la scène <p0> |  | — |  |
| 87 | `Set global value <p0> to <p1>` | Fixer la valeur globale <p0> à <p1> |  | 5 (1 proj.) | `Sub-Application 2 : Set global value 1 to 5` |
| 90 | `Set global string <p0> to <p1>` | Fixer la chaîne globale <p0> à <p1> |  | 3 (1 proj.) | `StatusBar : Set global string 1 to ""` |
| 91 | `Pause application` | Pause |  | — |  |
| 92 | `Resume application` | Continuer |  | — |  |
| 94 | `Set height to <p0>` | Fixer la hauteur à <p0> |  | — |  |

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 80 | `App Frame Number("<objet>")` |  |  | — |  |
| 81 | `App Global Value("<objet>", ` |  |  | 2 (1 proj.) | `App Global Value("Sub-Application 2", ` |
| 82 | `App Global String("<objet>", ` |  |  | — |  |

## Opérateurs (expressions)

### Expressions

| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |
|---|---|---|---|---|---|
| 2 | ` + ` |  |  | 5002 (111 proj.) | ` + ` |
| 4 | ` - ` |  |  | 2609 (87 proj.) | ` - ` |
| 6 | ` * ` |  |  | 1920 (70 proj.) | ` * ` |
| 8 | ` / ` |  |  | 933 (56 proj.) | ` / ` |
| 10 | ` mod ` | mod |  | 366 (35 proj.) | ` mod ` |
| 12 | ` pow ` | Pow |  | — |  |
| 14 | ` and ` | And |  | 134 (1 proj.) |  |
| 16 | ` or ` | Or |  | — |  |
| 18 | ` xor ` | Xor |  | — |  |

## Rencontrés dans les projets mais mal ou pas décodés

Ces combinaisons apparaissent dans le corpus avec un rendu en erreur (`[ERROR]`, `[??]`) au moins une fois.
Leur signification n'est pas connue avec certitude : demander une capture de l'éditeur.

| Type | Kind | N° | Occurrences (en erreur / total) | Exemple en erreur | Exemple correct |
|---|---|---|---|---|---|
| 2 | A | 82 | 94 / 94 | `[?? type 2, num 82 : IndexOutOfRangeException]` |  |
| -1 | A | 1 | 68 / 68 | `[ERROR] Could not find ObjectType -1, Num 1` |  |
| -4 | C | -3 | 63 / 63 | `[ERROR] Could not find ObjectType -4, Num -3` |  |
| -5 | C | -6 | 21 / 21 | `[ERROR] Could not find ObjectType -5, Num -6` |  |
| 8 | E | 84 | 5 / 5 | `[ERROR] Could not find ObjectType 8, Num 84` |  |
| -1 | C | -3 | 4 / 1032 | `[ERROR] Could not find ObjectType 8, Num 84 >= 100` | `Expression ID 83("SEAT ARRAY") > 0` |
| 8 | A | 81 | 4 / 4 | `Formatted Text : Set Y Position to [ERROR] Could not find ObjectType 8, Num 81 + Expression ID 86("Edit")` |  |
| 8 | E | 81 | 4 / 4 | `[ERROR] Could not find ObjectType 8, Num 81` |  |
| 9 | A | 88 | 4 / 4 | `[?? type 9, num 88 : IndexOutOfRangeException]` |  |
| 8 | E | 85 | 2 / 2 | `[ERROR] Could not find ObjectType 8, Num 85` |  |
| 9 | A | 89 | 2 / 2 | `[?? type 9, num 89 : IndexOutOfRangeException]` |  |
| 2 | C | -35 | 2 / 2 | `[?? type 2, num -35 : IndexOutOfRangeException]` |  |
| 3 | A | 88 | 1 / 126 | `String : Set alterable string to [ERROR] Could not find ObjectType 8, Num 87[ERROR] Could not find ObjectType 8, Num 85)` | `MAIN TEXT : Set alterable string to "ALLOCATE SEAT"` |
| 8 | E | 87 | 1 / 1 | `[ERROR] Could not find ObjectType 8, Num 87` |  |
| 8 | A | 87 | 1 / 1 | `Formatted Text : Select word num [ERROR] Could not find ObjectType 8, Num 85` |  |
| 8 | A | 82 | 1 / 1 | `Formatted Text : Set Zoom Factor to [ERROR] Could not find ObjectType 8, Num 84 + Expression ID 86("Edit")` |  |
| -5 | C | -4 | 1 / 1 | `[ERROR] Could not find ObjectType -5, Num -4` |  |
