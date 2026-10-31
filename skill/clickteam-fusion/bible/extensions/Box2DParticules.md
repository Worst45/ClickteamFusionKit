# Extension Box2DParticules

- Fichier : `Box2DParticules.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On each particle | `On each particle, loop name <p0>` | Pour chaque particule, nom de boucle <p0> | expression chaîne « Enter the name of the loop » | — |  |
| 1 | -82 | A particle collides > With another object | `<objet>: A particle collides with <p0>` | <objet>: Une particule entre en collision avec <p0> | objet « Choose the object to collide with » | — |  |
| 2 | -83 | A particle leaves the frame > On the left | `<objet>: A particle leaves the frame on the left` | <objet>: Une particule sort du terrain à gauche |  | — |  |
| 3 | -84 | A particle leaves the frame > On the right | `<objet>: A particle leaves the frame on the right` | <objet>: Une particule sort du terrain à droite |  | — |  |
| 4 | -85 | A particle leaves the frame > On the top | `<objet>: A particle leaves the frame on the top` | <objet>: Une particule sort du terrain en haut |  | — |  |
| 5 | -86 | A particle leaves the frame > On the bottom | `<objet>: A particle leaves the frame on the bottom` | <objet>: Une particule sort du terrain en bas |  | — |  |
| 6 | -87 | A particle collides > With another particle | `<objet>: A particle collides with another particle` | <objet>: Une particule entre en collision avec une autre particule |  | — |  |
| 7 | -88 | A particle collides > With a backdrop | `<objet>: A particle collides with a backdrop` | <objet>: Une particule entre en collision avec un décor |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Create / Destroy > Create particles | `Create <p0> particles` | Créer <p0> particules | expression numérique « Enter the number of particles to create. » | — |  |
| 1 | 81 | Stop particle | `Stop current particle` | Arrêter la particule courante |  | — |  |
| 2 | 82 | For each particle > Start loop | `For each particle, loop name <p0>` | Pour chaque particule, nom de boucle <p0> | expression chaîne « Enter the name of the loop » | — |  |
| 3 | 83 | Particle creation > Set particle initial speed | `Set creation speed to <p0>` | Fixer la vitesse de création à <p0> | expression numérique « Enter the new speed, from 0 to 250 » | — |  |
| 4 | 84 | Particle creation > Set particle initial torque | `Set particle rotation to <p0>` | Fixer la rotation de la particule à <p0> | expression numérique « Enter the new rotation speed, from -250 (clockwise) to 250 » | — |  |
| 5 | 85 | Particle creation > Set particle angle interval | `Set creation angle interval to <p0>` | Fixer l'intervalle de l'angle de création à <p0> | expression numérique « Enter the new interval, in degrees (0 - 360) » | — |  |
| 6 | 86 | Particle creation > Set particle initial angle | `Set creation angle to <p0>` | Fixer l'angle de création à <p0> | expression numérique « Enter the new angle, in degrees (0 - 360) » | — |  |
| 7 | 87 | Create / Destroy > Destroy current particle | `Destroy current particle` | Détruire la particule courante |  | — |  |
| 8 | 88 | Create / Destroy > Destroy both current particles | `Destroy both current particles` | Détruire les deux particules courantes |  | — |  |
| 9 | 89 | Particle creation > Set particle speed interval | `Set creation speed interval to <p0>` | Fixer l'intervalle de vitesse de création à <p0> | expression numérique « Enter the interval of speed used when creating particles » | — |  |
| 11 | 91 | Particle creation > Set automatic creation ON/OFF | `Set creation to <p0>` | Fixer la création à <p0> | expression numérique « Enter 1 to turn ON, 0 to turn OFF » | — |  |
| 12 | 92 | For each particle > Stop loop | `Stop loop` | Quitter la boucle |  | — |  |
| 13 | 93 | Particle creation > Set force applied to particles | `Apply force <p0> to particles` | Appliquer la force <p0> aux particules | expression numérique « Enter the force to apply, from -250 to 250 » | — |  |
| 14 | 94 | Particle creation > Set torque applied to particles | `Apply torque <p0> to particles` | Appliquer le couple <p0> aux particules | expression numérique « Enter the torque to apply, from -250 to 250 » | — |  |
| 15 | 95 | Particles > Set animation speed | `Set animation speed to <p0>` | Fixer la vitesse de l'animation à <p0> | expression numérique « Enter the animation speed, from 0 to 100 » | — |  |
| 16 | 96 | Particles > Set animation loop ON/OFF | `Set animation loop to <p0>` | Fixer la boucle de l'animation à <p0> | expression numérique « Enter 1 to loop, 0 to stop at the end » | — |  |
| 17 | 97 | Particles > Set particle scale | `Set scale to <p0>` | Fixer l'échelle à <p0> | expression numérique « Enter the new scale, from -100 to 100 » | — |  |
| 18 | 98 | Particles > Set friction | `Set friction to <p0>` | Fixer la friction à <p0> | expression numérique « Enter the friction, from 0 to 100 » | — |  |
| 19 | 99 | Particles > Set elasticity | `Set elasticity to <p0>` | Fixer l'élasticité à <p0> | expression numérique « Enter the new scale, from -100 to 100 » | — |  |
| 20 | 100 | Particles > Set density | `Set density to <p0>` | Fixer la densité à <p0> | expression numérique « Enter the new scale, from -100 to 100 » | — |  |
| 21 | 101 | Particles > Set gravity scale | `Set gravity scale to <p0>` | Fixer l'échelle de gravité à <p0> | expression numérique « Enter the new scale, from -100 to 100 » | — |  |
| 22 | 102 | Particles > Set destroy distance | `Set destroy distance to <p0>` | Fixer la distance de destruction à <p0> | expression numérique « Enter the distance at which to destroy the particles » | — |  |
| 23 | 103 | Particles > Set destroy at end of animation ON/OFF | `Set destroy at end of animation to <p0>` | Fixer la destruction à la fin de l'animation à <p0> | expression numérique « Enter 1 to turn on destruction, 0 to turn off » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of particles | `NParticles(` | Nombre de particules |  | — |  |
| 1 | 81 | Particles > Get particle X coordinate | `XParticle(` | Coordonnée X de la particule |  | — |  |
| 2 | 82 | Particles > Get particle Y coordinate | `YParticle(` | Coordonnée Y de la particule |  | — |  |
| 3 | 83 | Particles > Get particle angle | `AngleParticle(` | Angle de la particule |  | — |  |
| 4 | 84 | Particle creation > Get particle initial speed | `PSpeed(` | Vitesse initiale des particules |  | — |  |
| 5 | 85 | Particle creation > Get particle speed interval | `SpeedInterval(` | Intervalle de vitesse des particules |  | — |  |
| 6 | 86 | Particle creation > Get particle initial angle | `PAngle(` | Angle initial des particules |  | — |  |
| 7 | 87 | Particle creation > Get particle angle interval | `AngleInterval(` | Intervalle d'angle des particules |  | — |  |
| 8 | 88 | Particle creation > Get particle initial torque | `Rotation(` | Couple initial des particules |  | — |  |
| 9 | 89 | Get particle loop index | `PLoopIndex(` | Index de boucle |  | — |  |
| 10 | 90 | Particle creation > Get particle applied force | `PForce(` | Force appliquée aux particules |  | — |  |
| 11 | 91 | Particle creation > Get particle applied torque | `PTorque(` | Couple appliqué aux particules |  | — |  |
