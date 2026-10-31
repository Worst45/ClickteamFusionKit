# Extension ParticleSpray

- Fichier : `ParticleSpray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is a Sprayer active? | `<objet> Sprayer( <p0> ) is active` |  | expression numérique « Sprayer ID » | — |  |
| 1 | -82 | Is a Magnet active? | `<objet> Magnet <p0> is active` |  | expression numérique « Magnet ID » | — |  |
| 2 | -83 | On Particle Creation | `<objet> On Particle creation of Sprayer( <p0> )` |  | expression numérique « Sprayer ID » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Sprayer Actions > Start Sprayer | `<objet> Start Particle Spray in slot <p0>` |  | expression numérique « Sprayer ID » | — |  |
| 1 | 81 | Sprayer Settings > Set Spray Amount | `<objet> Set particle spray amount to <p1> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Amount (particles/frame) » | — |  |
| 2 | 82 | Sprayer Settings > Particle Values > Set Particle Lifetime | `<objet> Set particle lifetime from <p1> to <p2> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Min Lifetime (in frames) » ; expression numérique « Max Lifetime (in frames) » | — |  |
| 3 | 83 | Sprayer Settings > Set Gravity | `<objet> Set gravity to <p1> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Gravity » | — |  |
| 4 | 84 | Sprayer Settings > Particle Values > Set Particle Deceleration | `<objet> Set particle deceleration from <p1> - <p2> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Minimum Deceleration » ; expression numérique « Maximum Deceleration » | — |  |
| 5 | 85 | Sprayer Settings > Particle Values > Set Particle start Speed | `<objet> Set particle start speed to <p1> - <p2> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Minimum start speed » ; expression numérique « Maximum start speed » | — |  |
| 6 | 86 | Sprayer Settings > Set Spray Angle (0-360) | `<objet> Set Spray angle to <p1> - <p2> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Start Angle (in degrees) » ; expression numérique « End Angle (in degrees) » | — |  |
| 7 | 87 | Sprayer Actions > Stop Sprayer | `<objet> Stop Sprayer( <p0> )` |  | expression numérique « Sprayer ID » | — |  |
| 8 | 88 | Magnet Settings > Set Magnet X-position | `<objet> Set X-position of Magnet( <p0> ) to <p1>` |  | expression numérique « Magnet ID » ; expression numérique « X-position » | — |  |
| 9 | 89 | Magnet Settings > Set Magnet Y-position | `<objet> Set Y-position of Magnet( <p0> ) to <p1>` |  | expression numérique « Magnet ID » ; expression numérique « Y-position » | — |  |
| 10 | 90 | Magnet Settings > Set Magnet Force | `<objet> Set force of Magnet( <p0> ) to <p1>` |  | expression numérique « Magnet ID » ; expression numérique « Force » | — |  |
| 11 | 91 | Magnet Settings > Enable/Disable Magnet | `<objet> Set activity of Magnet( <p0> ) to <p1>` |  | expression numérique « Magnet ID » ; expression numérique « 1=On 0=Off » | — |  |
| 12 | 92 | Sprayer Settings > Set Wind Force | `<objet> Set Wind Force to <p1> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Wind Force » | — |  |
| 13 | 93 | Add object as particle | `<objet> Add <p1> as a particle for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; objet « Pick particle object » | — |  |
| 14 | 94 | Sprayer Settings > Set Sprayer X position | `<objet> Set X-position of Sprayer( <p0> ) to <p1>` |  | expression numérique « Sprayer ID » ; expression numérique « X-position » | — |  |
| 15 | 95 | Sprayer Settings > Set Sprayer Y position | `<objet> Set Y-position of Sprayer( <p0> ) to <p1>` |  | expression numérique « Sprayer ID » ; expression numérique « Y-position » | — |  |
| 16 | 96 | Sprayer Settings > Set Spray Time | `<objet> Set Spraytime to <p1> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Spraytime (in frames) » | — |  |
| 17 | 97 | Sprayer Settings > Set Transparency Coefficient | `<objet> Set Transparency Coefficient to <p1> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Transparency Coefficient (1=linear) » | — |  |
| 18 | 98 | Magnet Settings > Set Magnet Force Coefficient | `<objet> Set Force Coefficient of Magnet( <p0> ) to <p1>` |  | expression numérique « Magnet ID » ; expression numérique « Force Coefficient (1=linear) » | — |  |
| 19 | 99 | Sprayer Settings > Creation Area > Rectangle Creation Area | `<objet> Set Rectangle creation area of Magnet( <p0> ) to ( <p1> , <p2> )` |  | expression numérique « Sprayer ID » ; expression numérique « Width » ; expression numérique « Height » | — |  |
| 20 | 100 | Sprayer Settings > Creation Area > Circle Creation Area | `<objet> Set Circle creation area of Magnet( <p0> ) with radius <p1>` |  | expression numérique « Sprayer ID » ; expression numérique « Radius » | — |  |
| 21 | 101 | Sprayer Actions > Affect Particles > Movement > Affect all Particles with exact force | `<objet> Affect Particles of Sprayer( <p0> ) with exact force ( <p1> , <p2> )` |  | expression numérique « Sprayer ID » ; expression numérique « X Force » ; expression numérique « Y Force » | — |  |
| 22 | 102 | Sprayer Actions > Affect Particles > Movement > Affect all Particles with random force | `<objet> Affect Particles of Sprayer( <p0> ) with random force ( <p1> - <p2> , <p3> - <p4> )` |  | expression numérique « Sprayer ID » ; expression numérique « Min. X Force » ; expression numérique « Max. X Force » ; expression numérique « Min. Y Force » ; expression numérique « Max. Y Force » | — |  |
| 23 | 103 | Sprayer Actions > Affect Particles > Movement > Affect specific Particle with force | `<objet> Affect Particle <p1> of Sprayer( <p0> ) with force ( <p2> , <p3> )` |  | expression numérique « Sprayer ID » ; expression numérique « Particle Index » ; expression numérique « X Force » ; expression numérique « Y Force » | — |  |
| 24 | 104 | Sprayer Settings > Set Spray Direction (0-32) | `<objet> Set Spray direction to <p1> - <p2> for Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Start Direction (0-32) » ; expression numérique « End Direction (0-32) » | — |  |
| 25 | 105 | Sprayer Actions > Affect Particles > Angle > Change angle of Specific particle | `<objet> Change Angle of Particle <p1> in Sprayer( <p0> ) to <p2>` |  | expression numérique « Sprayer ID » ; expression numérique « Particle Index » ; expression numérique « Angle (in degrees) » | — |  |
| 26 | 106 | Sprayer Actions > Affect Particles > Angle > Change angle of all particles | `<objet> Change Angle of all particles in Sprayer( <p0> ) to <p1>` |  | expression numérique « Sprayer ID » ; expression numérique « Angle (in degrees) » | — |  |
| 27 | 107 | Sprayer Actions > Affect Particles > Angle > Randomize angle of all particles | `<objet> Randomize Angle of all particles in Sprayer( <p0> ) to between ( <p1> , <p2> )` |  | expression numérique « Sprayer ID » ; expression numérique « Min. Angle (in degrees) » ; expression numérique « Max. Angle (in degrees) » | — |  |
| 28 | 108 | Sprayer Actions > Affect Particles > Destroy all particles | `<objet> Destroy all particles in Sprayer( <p0> )` |  | expression numérique « Sprayer ID » | — |  |
| 29 | 109 | Sprayer Actions > Affect Particles > Destroy specific particle | `<objet> Destroy particle <p1> in Sprayer( <p0> )` |  | expression numérique « Sprayer ID » ; expression numérique « Particle Index » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Particle specific Values > Get X position of Particle | `ParticleX(` |  | nombre ; nombre | — |  |
| 1 | 81 | Particle specific Values > Get Y position of Particle | `ParticleY(` |  | nombre ; nombre | — |  |
| 2 | 82 | Particle specific Values > Get Opacity value of Particle | `ParticleOpacity(` |  | nombre ; nombre | — |  |
| 3 | 83 | Particle specific Values > Get Direction of Particle | `ParticleDir(` |  | nombre ; nombre | — |  |
| 4 | 84 | Sprayer specific values > Get Spray amount | `ParticleCount(` |  | nombre | — |  |
| 5 | 85 | Particle specific Values > Get Horizontal speed of Particle (in pixels/frame) | `ParticleXSpeed(` |  | nombre ; nombre | — |  |
| 6 | 86 | Particle specific Values > Get Vertical speed of Particle (in pixels/frame) | `ParticleYSpeed(` |  | nombre ; nombre | — |  |
| 7 | 87 | Sprayer specific values > Get Sprayer Age (in frames) | `SprayerAge(` |  | nombre | — |  |
| 8 | 88 | Sprayer specific values > Get Particle minimum lifetime | `ParticleMinLifetime(` |  | nombre | — |  |
| 9 | 89 | Sprayer specific values > Get Gravity | `SprayerGravity(` |  | nombre | — |  |
| 10 | 90 | Sprayer specific values > Get Particle Minimum Deceleration | `ParticleMinDec(` |  | nombre | — |  |
| 11 | 91 | Sprayer specific values > Get Particle Maximum Deceleration | `ParticleMaxDec(` |  | nombre | — |  |
| 12 | 92 | Sprayer specific values > Get Spray Start Angle | `SprayerStartAngle(` |  | nombre | — |  |
| 13 | 93 | Sprayer specific values > Get Spray End angle | `SprayerEndAngle(` |  | nombre | — |  |
| 14 | 94 | Sprayer specific values > Get Particle Minimum Start speed | `ParticleStartMinSpeed(` |  | nombre | — |  |
| 15 | 95 | Sprayer specific values > Get Particle Maximum Start speed | `ParticleStartMaxSpeed(` |  | nombre | — |  |
| 16 | 96 | Magnet specific values > Get X position of Magnet | `MagnetX(` |  | nombre | — |  |
| 17 | 97 | Magnet specific values > Get Y position of Magnet | `MagnetY(` |  | nombre | — |  |
| 18 | 98 | Magnet specific values > Get Force of Magnet | `MagnetForce(` |  | nombre | — |  |
| 19 | 99 | Magnet specific values > Get Magnet Enabled-flag | `MagnetActivity(` |  | nombre | — |  |
| 20 | 100 | Sprayer specific values > Get Wind Force | `SprayerWindForce(` |  | nombre | — |  |
| 21 | 101 | Sprayer specific values > Get Particle maximum lifetime | `ParticleMaxLifetime(` |  | nombre | — |  |
| 22 | 102 | Sprayer specific values > Get Sprayer X position | `SprayerX(` |  | nombre | — |  |
| 23 | 103 | Sprayer specific values > Get Sprayer Y position | `SprayerY(` |  | nombre | — |  |
| 24 | 104 | Particle specific Values > Get Current life of Particle (in frames) | `ParticleCurLife(` |  | nombre ; nombre | — |  |
| 25 | 105 | Particle specific Values > Get Lifetime of Particle (in frames) | `ParticleLifetime(` |  | nombre ; nombre | — |  |
| 26 | 106 | Sprayer specific values > Get Spray time | `SprayerSpraytime(` |  | nombre | — |  |
| 27 | 107 | Particle specific Values > Get Fixed Value of particle object | `ParticleFixed(` |  | nombre ; nombre | — |  |
| 28 | 108 | Particle specific Values > Get Angle of Particle | `ParticleAngle(` |  | nombre ; nombre | — |  |
| 29 | 109 | Particle specific Values > Get Speed of Particle (in pixels/frame) | `ParticleSpeed(` |  | nombre ; nombre | — |  |
| 30 | 110 | Sprayer specific values > Get Transparency Coefficient | `SprayerTransCoef(` |  | nombre | — |  |
| 31 | 111 | Magnet specific values > Get Force Coefficient of Magnet | `MagnetForceCoef(` |  | nombre | — |  |
