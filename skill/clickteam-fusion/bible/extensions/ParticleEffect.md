# Extension ParticleEffect

- Fichier : `ParticleEffect.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Particle destroyed | `<objet>: Particle destroyed` |  |  | — |  |
| 1 | -82 | On animate particle | `<objet>: On animate particle` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Animation > Animate particles | `Animate particles` |  |  | — |  |
| 1 | 81 | Particles > Add at position | `Add <p0> particles at <p1> , <p2>` |  | expression numérique « Number of particles » ; expression numérique « X position » ; expression numérique « Y position » | — |  |
| 2 | 82 | Colour wrapping > Enable | `Enable colour wrapping` |  |  | — |  |
| 3 | 83 | Colour wrapping > Disable | `Disable colour wrapping` |  |  | — |  |
| 4 | 84 | Speed > Set X speed | `Set X speed to <p0>` |  | expression numérique « New speed (pixels per animate) » | — |  |
| 5 | 85 | Speed > Set Y speed | `Set Y speed to <p0>` |  | expression numérique « New speed (pixels per animate) » | — |  |
| 6 | 86 | Speed > Set X instability | `Set X instability to <p0>` |  | expression numérique « New instability » | — |  |
| 7 | 87 | Speed > Set Y instability | `Set Y instability to <p0>` |  | expression numérique « New instability » | — |  |
| 8 | 88 | Colour > Set colour | `Set colour to <p0>` |  | couleur « New colour » | — |  |
| 9 | 89 | Colour > Set red instability | `Set red instability to <p0>` |  | expression numérique « New instability » | — |  |
| 10 | 90 | Colour > Set green instability | `Set green instability to <p0>` |  | expression numérique « New instability » | — |  |
| 11 | 91 | Colour > Set blue instability | `Set blue instability to <p0>` |  | expression numérique « New instability » | — |  |
| 12 | 92 | Lifetime > Set lifetime | `Set lifetime to <p0>` |  | expression numérique « New lifetime (-1 is forever) » | — |  |
| 13 | 93 | Lifetime > Set lifetime instability | `Set lifetime instability to <p0>` |  | expression numérique « New instability » | — |  |
| 14 | 94 | Particles > Remove all | `Remove all particles` |  |  | — |  |
| 15 | 95 | Particles > Remove selected | `Remove selected particle` |  |  | — |  |
| 16 | 96 | Selection > Select particle by ID | `Select particle <p0>` |  | expression numérique « Particle ID » | — |  |
| 17 | 97 | Selection > Select new particle | `Select new particle` |  |  | — |  |
| 18 | 98 | Particles > Add | `Add <p0> particles` |  | expression numérique « Number of particles » | — |  |
| 19 | 99 | Animation > Enable condition (slower!) | `Enable condition` |  |  | — |  |
| 20 | 100 | Animation > Disable condition | `Disable condition` |  |  | — |  |
| 21 | 101 | Selection > Select animating particle | `Select animating particle` |  |  | — |  |
| 22 | 102 | Collisions > Set layer | `Set collision layer to <p0>` |  | expression numérique « Collision layer (-1 for all, -2 to disable collisions) » | — |  |
| 23 | 103 | Position > Set X position | `Set X position to <p0>` |  | expression numérique « New position » | — |  |
| 24 | 104 | Position > Set Y position | `Set Y position to <p0>` |  | expression numérique « New position » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of particles | `ParticleCount(` |  |  | — |  |
| 1 | 81 | Particle > Position > Get X position | `ParticleX(` |  |  | — |  |
| 2 | 82 | Particle > Position > Get Y position | `ParticleY(` |  |  | — |  |
| 3 | 83 | Particle > Speed > Get X speed | `ParticleXSpeed(` |  |  | — |  |
| 4 | 84 | Particle > Speed > Get Y speed | `ParticleYSpeed(` |  |  | — |  |
| 5 | 85 | Particle > Speed > Get X instability | `ParticleXInstability(` |  |  | — |  |
| 6 | 86 | Particle > Speed > Get Y instability | `ParticleYInstability(` |  |  | — |  |
| 7 | 87 | Particle > Colour > Get red | `ParticleColour(` |  |  | — |  |
| 8 | 88 | Particle > Colour > Get green | `ParticleRedInstability(` |  |  | — |  |
| 9 | 89 | Particle > Colour > Get blue | `ParticleGreenInstability(` |  |  | — |  |
| 10 | 90 | Particle > Lifetime > Get lifetime | `ParticleBlueInstability(` |  |  | — |  |
| 11 | 91 | Particle > Lifetime > Get lifetime instability | `ParticleLifetime(` |  |  | — |  |
