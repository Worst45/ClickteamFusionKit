# Extension ParticleSpray

- File: `ParticleSpray.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is a Sprayer active? | `<object> Sprayer( <p0> ) is active` |  | numeric expression “Sprayer ID” |
| 1 | -82 | Is a Magnet active? | `<object> Magnet <p0> is active` |  | numeric expression “Magnet ID” |
| 2 | -83 | On Particle Creation | `<object> On Particle creation of Sprayer( <p0> )` |  | numeric expression “Sprayer ID” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Sprayer Actions > Start Sprayer | `<object> Start Particle Spray in slot <p0>` |  | numeric expression “Sprayer ID” |
| 1 | 81 | Sprayer Settings > Set Spray Amount | `<object> Set particle spray amount to <p1> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Amount (particles/frame)” |
| 2 | 82 | Sprayer Settings > Particle Values > Set Particle Lifetime | `<object> Set particle lifetime from <p1> to <p2> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Min Lifetime (in frames)”; numeric expression “Max Lifetime (in frames)” |
| 3 | 83 | Sprayer Settings > Set Gravity | `<object> Set gravity to <p1> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Gravity” |
| 4 | 84 | Sprayer Settings > Particle Values > Set Particle Deceleration | `<object> Set particle deceleration from <p1> - <p2> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Minimum Deceleration”; numeric expression “Maximum Deceleration” |
| 5 | 85 | Sprayer Settings > Particle Values > Set Particle start Speed | `<object> Set particle start speed to <p1> - <p2> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Minimum start speed”; numeric expression “Maximum start speed” |
| 6 | 86 | Sprayer Settings > Set Spray Angle (0-360) | `<object> Set Spray angle to <p1> - <p2> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Start Angle (in degrees)”; numeric expression “End Angle (in degrees)” |
| 7 | 87 | Sprayer Actions > Stop Sprayer | `<object> Stop Sprayer( <p0> )` |  | numeric expression “Sprayer ID” |
| 8 | 88 | Magnet Settings > Set Magnet X-position | `<object> Set X-position of Magnet( <p0> ) to <p1>` |  | numeric expression “Magnet ID”; numeric expression “X-position” |
| 9 | 89 | Magnet Settings > Set Magnet Y-position | `<object> Set Y-position of Magnet( <p0> ) to <p1>` |  | numeric expression “Magnet ID”; numeric expression “Y-position” |
| 10 | 90 | Magnet Settings > Set Magnet Force | `<object> Set force of Magnet( <p0> ) to <p1>` |  | numeric expression “Magnet ID”; numeric expression “Force” |
| 11 | 91 | Magnet Settings > Enable/Disable Magnet | `<object> Set activity of Magnet( <p0> ) to <p1>` |  | numeric expression “Magnet ID”; numeric expression “1=On 0=Off” |
| 12 | 92 | Sprayer Settings > Set Wind Force | `<object> Set Wind Force to <p1> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Wind Force” |
| 13 | 93 | Add object as particle | `<object> Add <p1> as a particle for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; object “Pick particle object” |
| 14 | 94 | Sprayer Settings > Set Sprayer X position | `<object> Set X-position of Sprayer( <p0> ) to <p1>` |  | numeric expression “Sprayer ID”; numeric expression “X-position” |
| 15 | 95 | Sprayer Settings > Set Sprayer Y position | `<object> Set Y-position of Sprayer( <p0> ) to <p1>` |  | numeric expression “Sprayer ID”; numeric expression “Y-position” |
| 16 | 96 | Sprayer Settings > Set Spray Time | `<object> Set Spraytime to <p1> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Spraytime (in frames)” |
| 17 | 97 | Sprayer Settings > Set Transparency Coefficient | `<object> Set Transparency Coefficient to <p1> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Transparency Coefficient (1=linear)” |
| 18 | 98 | Magnet Settings > Set Magnet Force Coefficient | `<object> Set Force Coefficient of Magnet( <p0> ) to <p1>` |  | numeric expression “Magnet ID”; numeric expression “Force Coefficient (1=linear)” |
| 19 | 99 | Sprayer Settings > Creation Area > Rectangle Creation Area | `<object> Set Rectangle creation area of Magnet( <p0> ) to ( <p1> , <p2> )` |  | numeric expression “Sprayer ID”; numeric expression “Width”; numeric expression “Height” |
| 20 | 100 | Sprayer Settings > Creation Area > Circle Creation Area | `<object> Set Circle creation area of Magnet( <p0> ) with radius <p1>` |  | numeric expression “Sprayer ID”; numeric expression “Radius” |
| 21 | 101 | Sprayer Actions > Affect Particles > Movement > Affect all Particles with exact force | `<object> Affect Particles of Sprayer( <p0> ) with exact force ( <p1> , <p2> )` |  | numeric expression “Sprayer ID”; numeric expression “X Force”; numeric expression “Y Force” |
| 22 | 102 | Sprayer Actions > Affect Particles > Movement > Affect all Particles with random force | `<object> Affect Particles of Sprayer( <p0> ) with random force ( <p1> - <p2> , <p3> - <p4> )` |  | numeric expression “Sprayer ID”; numeric expression “Min. X Force”; numeric expression “Max. X Force”; numeric expression “Min. Y Force”; numeric expression “Max. Y Force” |
| 23 | 103 | Sprayer Actions > Affect Particles > Movement > Affect specific Particle with force | `<object> Affect Particle <p1> of Sprayer( <p0> ) with force ( <p2> , <p3> )` |  | numeric expression “Sprayer ID”; numeric expression “Particle Index”; numeric expression “X Force”; numeric expression “Y Force” |
| 24 | 104 | Sprayer Settings > Set Spray Direction (0-32) | `<object> Set Spray direction to <p1> - <p2> for Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Start Direction (0-32)”; numeric expression “End Direction (0-32)” |
| 25 | 105 | Sprayer Actions > Affect Particles > Angle > Change angle of Specific particle | `<object> Change Angle of Particle <p1> in Sprayer( <p0> ) to <p2>` |  | numeric expression “Sprayer ID”; numeric expression “Particle Index”; numeric expression “Angle (in degrees)” |
| 26 | 106 | Sprayer Actions > Affect Particles > Angle > Change angle of all particles | `<object> Change Angle of all particles in Sprayer( <p0> ) to <p1>` |  | numeric expression “Sprayer ID”; numeric expression “Angle (in degrees)” |
| 27 | 107 | Sprayer Actions > Affect Particles > Angle > Randomize angle of all particles | `<object> Randomize Angle of all particles in Sprayer( <p0> ) to between ( <p1> , <p2> )` |  | numeric expression “Sprayer ID”; numeric expression “Min. Angle (in degrees)”; numeric expression “Max. Angle (in degrees)” |
| 28 | 108 | Sprayer Actions > Affect Particles > Destroy all particles | `<object> Destroy all particles in Sprayer( <p0> )` |  | numeric expression “Sprayer ID” |
| 29 | 109 | Sprayer Actions > Affect Particles > Destroy specific particle | `<object> Destroy particle <p1> in Sprayer( <p0> )` |  | numeric expression “Sprayer ID”; numeric expression “Particle Index” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Particle specific Values > Get X position of Particle | `ParticleX(` |  | number; number |
| 1 | 81 | Particle specific Values > Get Y position of Particle | `ParticleY(` |  | number; number |
| 2 | 82 | Particle specific Values > Get Opacity value of Particle | `ParticleOpacity(` |  | number; number |
| 3 | 83 | Particle specific Values > Get Direction of Particle | `ParticleDir(` |  | number; number |
| 4 | 84 | Sprayer specific values > Get Spray amount | `ParticleCount(` |  | number |
| 5 | 85 | Particle specific Values > Get Horizontal speed of Particle (in pixels/frame) | `ParticleXSpeed(` |  | number; number |
| 6 | 86 | Particle specific Values > Get Vertical speed of Particle (in pixels/frame) | `ParticleYSpeed(` |  | number; number |
| 7 | 87 | Sprayer specific values > Get Sprayer Age (in frames) | `SprayerAge(` |  | number |
| 8 | 88 | Sprayer specific values > Get Particle minimum lifetime | `ParticleMinLifetime(` |  | number |
| 9 | 89 | Sprayer specific values > Get Gravity | `SprayerGravity(` |  | number |
| 10 | 90 | Sprayer specific values > Get Particle Minimum Deceleration | `ParticleMinDec(` |  | number |
| 11 | 91 | Sprayer specific values > Get Particle Maximum Deceleration | `ParticleMaxDec(` |  | number |
| 12 | 92 | Sprayer specific values > Get Spray Start Angle | `SprayerStartAngle(` |  | number |
| 13 | 93 | Sprayer specific values > Get Spray End angle | `SprayerEndAngle(` |  | number |
| 14 | 94 | Sprayer specific values > Get Particle Minimum Start speed | `ParticleStartMinSpeed(` |  | number |
| 15 | 95 | Sprayer specific values > Get Particle Maximum Start speed | `ParticleStartMaxSpeed(` |  | number |
| 16 | 96 | Magnet specific values > Get X position of Magnet | `MagnetX(` |  | number |
| 17 | 97 | Magnet specific values > Get Y position of Magnet | `MagnetY(` |  | number |
| 18 | 98 | Magnet specific values > Get Force of Magnet | `MagnetForce(` |  | number |
| 19 | 99 | Magnet specific values > Get Magnet Enabled-flag | `MagnetActivity(` |  | number |
| 20 | 100 | Sprayer specific values > Get Wind Force | `SprayerWindForce(` |  | number |
| 21 | 101 | Sprayer specific values > Get Particle maximum lifetime | `ParticleMaxLifetime(` |  | number |
| 22 | 102 | Sprayer specific values > Get Sprayer X position | `SprayerX(` |  | number |
| 23 | 103 | Sprayer specific values > Get Sprayer Y position | `SprayerY(` |  | number |
| 24 | 104 | Particle specific Values > Get Current life of Particle (in frames) | `ParticleCurLife(` |  | number; number |
| 25 | 105 | Particle specific Values > Get Lifetime of Particle (in frames) | `ParticleLifetime(` |  | number; number |
| 26 | 106 | Sprayer specific values > Get Spray time | `SprayerSpraytime(` |  | number |
| 27 | 107 | Particle specific Values > Get Fixed Value of particle object | `ParticleFixed(` |  | number; number |
| 28 | 108 | Particle specific Values > Get Angle of Particle | `ParticleAngle(` |  | number; number |
| 29 | 109 | Particle specific Values > Get Speed of Particle (in pixels/frame) | `ParticleSpeed(` |  | number; number |
| 30 | 110 | Sprayer specific values > Get Transparency Coefficient | `SprayerTransCoef(` |  | number |
| 31 | 111 | Magnet specific values > Get Force Coefficient of Magnet | `MagnetForceCoef(` |  | number |
