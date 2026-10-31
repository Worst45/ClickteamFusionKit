# Extension MMKMLP

- Fichier : `MMKMLP.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Training Finished | `Training finished` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Usage > Create Training Set | `Create set with ID <p0>` |  | expression chaîne « ID of the set » | — |  |
| 1 | 81 | Usage > Set Pattern Input | `Add input <p1> at index <p0>` |  | expression numérique « Index » ; expression numérique « Train value to add to pattern » | — |  |
| 2 | 82 | Training > Train by Pattern | `Train patterns with set <p0>, <p1> iterations` |  | expression chaîne « ID of the set » ; expression numérique « Number of iterations » | — |  |
| 3 | 83 | Usage > Test Pattern | `Test pattern` |  | expression chaîne « Result ID » | — |  |
| 4 | 84 | Usage > Reset Pattern | `Reset pattern` |  |  | — |  |
| 5 | 85 | File Actions > Save to File | `Save to file <p0>` |  | expression chaîne « Filename » | — |  |
| 6 | 86 | File Actions > Load From File | `Load from file <p0>` |  | expression chaîne « Filename » | — |  |
| 7 | 87 | Usage > Set Pattern Target | `Add target <p1> at index <p0>` |  | expression numérique « Index » ; expression numérique « Train value to add to pattern » | — |  |
| 8 | 88 | Training > Train by Epoch | `Train epochs with set <p0>, <p1> iterations` |  | expression chaîne « ID of the set » ; expression numérique « Number of iterations » | — |  |
| 9 | 89 | Usage > Clear Training Set | `Clear set <p0>` |  | expression chaîne « ID of the set » | — |  |
| 10 | 90 | Usage > Remove Training Set | `Remove set <p0>` |  | expression chaîne « ID of the set » | — |  |
| 11 | 91 | Usage > Add Pattern to Set | `Add pattern to set <p0>` |  | expression chaîne « ID of the set » | — |  |
| 12 | 92 | Usage > Load Pattern from Network | `Load pattern from network` |  |  | — |  |
| 13 | 93 | Setup > Set Number of Input Layer Neurons | `Set <p0> input layer neurons` |  | expression numérique « Number of neurons » | — |  |
| 14 | 94 | Setup > Set Number of Output Layer Neurons | `Set <p0> output layer neurons` |  | expression numérique « Number of neurons » | — |  |
| 15 | 95 | Setup > Set Number of Hidden Layers | `Create <p0> hidden layers` |  | expression numérique « Number of layers » | — |  |
| 16 | 96 | Setup > Set Number of Hidden Layer Neurons | `Set <p1> neurons at hidden layer <p0>` |  | expression numérique « Layer index » ; expression numérique « Number of neurons » | — |  |
| 17 | 97 | Setup > Set Weights | `Set lower weight = <p0>, upper weight = <p1>` |  | expression numérique « Lower value » ; expression numérique « Upper value » | — |  |
| 18 | 98 | Setup > Set Bias | `Set lower bias = <p0>, upper bias = <p1>` |  | expression numérique « Lower value » ; expression numérique « Upper value » | — |  |
| 19 | 99 | Setup > Set Learning Rate | `Set learning rate to <p0>` |  | expression numérique « Learning rate value » | — |  |
| 20 | 100 | Setup > Set Momentum | `Set momentum to <p0>` |  | expression numérique « Momentum value » | — |  |
| 21 | 101 | Setup > Create Network | `Create network` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Patterns > Get Result | `GetResult(` |  | chaîne « Result ID » ; nombre « Index » | — |  |
| 1 | 81 | Patterns > Get Result Array Length | `GetNResults(` |  | chaîne « Result ID » | — |  |
| 2 | 82 | Layers > Get Input Layer Neurons | `InputNeurons(` |  |  | — |  |
| 3 | 83 | Layers > Get Hidden Layers | `HiddenLayers(` |  |  | — |  |
| 4 | 84 | Layers > Get Hidden Layer Neurons | `HiddenLayerNeurons(` |  | nombre « Layer index » | — |  |
| 5 | 85 | Layers > Get Output Layer Neurons | `OutputNeutrons(` |  |  | — |  |
| 6 | 86 | Patterns > Get Number of Patterns in Set | `NumberOfPatterns(` |  | chaîne « ID of the set » | — |  |
| 7 | 87 | Layers > Get Output Layer Neuron Value | `OutputNeuronVal(` |  | nombre « Neuron index » | — |  |
| 8 | 88 | Layers > Get Hidden Layer Neuron Value | `HiddenNeuronVal(` |  | nombre « Layer index » ; nombre « Neuron index » | — |  |
| 9 | 89 | Layers > Get Output Layer Bias Value | `OutputBiasVal(` |  | nombre « Neuron index » | — |  |
| 10 | 90 | Layers > Get Hidden Layer Bias Value | `HiddenBiasVal(` |  | nombre « Layer index » ; nombre « Neuron index » | — |  |
