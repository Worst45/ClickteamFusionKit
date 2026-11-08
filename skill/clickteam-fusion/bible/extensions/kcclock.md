# Extension kcclock

- File: `kcclock.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compare to chrono | `Chrono<p0>` | Chrono<p0> | (unreliable parameters) |
| 1 | -82 | New clock second ? | `<object>: New second` | <object>: Nouvelle seconde |  |
| 2 | -83 | New clock minute ? | `<object>: New minute` | <object>: Nouvelle minute |  |
| 3 | -84 | New clock hour ? | `<object>: New hour` | <object>: Nouvelle heure |  |
| 4 | -85 | New clock day ? | `<object>: New day` | <object>: Nouveau jour |  |
| 5 | -86 | New clock month ? | `<object>: New month` | <object>: Nouveau mois |  |
| 6 | -87 | New clock year ? | `<object>: New year` | <object>: Nouvelle année |  |
| 7 | -88 | Compare to count down | `Count down<p0>` | Compte à rebours<p0> | (unreliable parameters) |
| 8 | -89 | Is visible ? | `Button <object> is visible` | Le bouton <object> est visible |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set hundredths of seconds | `Set hundredths of seconds to <p0>` | Changer les centièmes de seconde à <p0> | (unreliable parameters) |
| 1 | 81 | Set seconds | `Set seconds to <p0>` | Changer les secondes à <p0> | (unreliable parameters) |
| 2 | 82 | Set minutes | `Set minutes to <p0>` | Changer les minutes à <p0> | (unreliable parameters) |
| 3 | 83 | Set hours | `Set hours to <p0>` | Mettre les heures à <p0> | (unreliable parameters) |
| 4 | 84 | Set day of week | `Set day of week to <p0>` | Changer jour de la semaine à <p0> | (unreliable parameters) |
| 5 | 85 | Set day of month | `Set day of month to <p0>` | Changer jour du mois à <p0> | (unreliable parameters) |
| 6 | 86 | Set month | `Set month to <p0>` | Changer le mois à <p0> | (unreliable parameters) |
| 7 | 87 | Set year | `Set year to <p0>` | Changer l'année à <p0> | (unreliable parameters) |
| 8 | 88 | Stop watch > Reset stop watch to 00:00:00 | `Reset chrono` | RAZ chronomètre |  |
| 9 | 89 | Stop watch > Start stop watch | `Start chrono` | Lancer chrono |  |
| 10 | 90 | Stop watch > Pause stop watch | `Stop chrono` | Stopper chrono |  |
| 11 | 91 | Visibility > Make object reappear | `Show` | Montrer |  |
| 12 | 92 | Visibility > Make object invisible | `Hide` | Cacher |  |
| 13 | 93 | Position > Select position... | `Set position to <p0>` | Fixer la position à <p0> | (unreliable parameters) |
| 14 | 94 | Count down > Set count down | `Set count down to <p0>` | Fixer compte à rebours à <p0> | (unreliable parameters) |
| 15 | 95 | Count down > Start count down | `Start count down` | Lancer compte à rebours |  |
| 16 | 96 | Count down > Pause count down | `Pause count down` | Compte à rebours en pause |  |
| 17 | 97 | Position > Set Horizontal Position | `Set horizontal position to <p0>` | Fixer la position horizontale à <p0> | (unreliable parameters) |
| 18 | 98 | Position > Set Vertical Position | `Set vertical position to <p0>` | Fixer la position verticale à <p0> | (unreliable parameters) |
| 19 | 99 | Size > Set Horizontal Size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (unreliable parameters) |
| 20 | 100 | Size > Set Vertical Size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Retrieve hundredths of seconds | `hundredths of second of(` | Centièmes de seconde |  |
| 1 | 81 | Retrieve seconds | `seconds of(` | Secondes |  |
| 2 | 82 | Retrieve minutes | `minutes of(` | Minutes |  |
| 3 | 83 | Retrieve hours | `hours of(` | Heures |  |
| 4 | 84 | Retrieve day of week | `day of week of(` | Jours de la semaine |  |
| 5 | 85 | Retrieve day of month | `day of month of(` | Jour du mois |  |
| 6 | 86 | Retrieve month | `month of(` | Mois |  |
| 7 | 87 | Retrieve year | `year of(` | Année |  |
| 8 | 88 | Retrieve Stop watch time | `chrono of(` | Heure du chronomètre |  |
| 9 | 89 | Retrieve analog clock data > X coordinate of clock centre | `center X of(` | Coordonnée en X du centre de l'horloge |  |
| 10 | 90 | Retrieve analog clock data > Y coordinate of clock centre | `center Y of(` | Coordonnée en Y du centre de l'horloge |  |
| 11 | 91 | Retrieve analog clock data > X coordinate of hour hand's end | `hours handle X of(` | Coordonnée en X du bout de l'aiguille des heures |  |
| 12 | 92 | Retrieve analog clock data > Y coordinate of hour hand's end | `hours handle Y of(` | Coordonnée en Y du bout de l'aiguille des heures |  |
| 13 | 93 | Retrieve analog clock data > X coordinate of minute hand's end | `minutes handle X of(` | Coordonnée en X du bout de l'aiguille des minutes |  |
| 14 | 94 | Retrieve analog clock data > Y coordinate of minute hand's end | `minutes handle Y of(` | Coordonnée en Y du bout de l'aiguille des minutes |  |
| 15 | 95 | Retrieve analog clock data > X coordinate of second hand's end | `seconds handle X of(` | Coordonnée en X du bout de l'aiguille des secondes |  |
| 16 | 96 | Retrieve analog clock data > Y coordinate of second hand's end | `seconds handle Y of(` | Coordonnée en Y du bout de l'aiguille des secondes |  |
| 17 | 97 | Retrieve Count down time | `Count down of(` | Position du compte à rebours |  |
| 18 | 98 | X Position of Clock | `Clock X pos(` | Position en X de l'horloge |  |
| 19 | 99 | Y Position of Clock | `Clock Y pos(` | Position en Y de l'horloge |  |
| 20 | 100 | X Size of Clock | `Clock X size(` | Taille en X de l'horloge |  |
| 21 | 101 | Y Size of Clock | `Clock Y size(` | Taille en Y de l'horloge |  |
