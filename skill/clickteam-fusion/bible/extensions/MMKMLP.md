# Extension MMKMLP

- File: `MMKMLP.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Training Finished | `Training finished` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Usage > Create Training Set | `Create set with ID <p0>` |  | string expression “ID of the set” |
| 1 | 81 | Usage > Set Pattern Input | `Add input <p1> at index <p0>` |  | numeric expression “Index”; numeric expression “Train value to add to pattern” |
| 2 | 82 | Training > Train by Pattern | `Train patterns with set <p0>, <p1> iterations` |  | string expression “ID of the set”; numeric expression “Number of iterations” |
| 3 | 83 | Usage > Test Pattern | `Test pattern` |  | string expression “Result ID” |
| 4 | 84 | Usage > Reset Pattern | `Reset pattern` |  |  |
| 5 | 85 | File Actions > Save to File | `Save to file <p0>` |  | string expression “Filename” |
| 6 | 86 | File Actions > Load From File | `Load from file <p0>` |  | string expression “Filename” |
| 7 | 87 | Usage > Set Pattern Target | `Add target <p1> at index <p0>` |  | numeric expression “Index”; numeric expression “Train value to add to pattern” |
| 8 | 88 | Training > Train by Epoch | `Train epochs with set <p0>, <p1> iterations` |  | string expression “ID of the set”; numeric expression “Number of iterations” |
| 9 | 89 | Usage > Clear Training Set | `Clear set <p0>` |  | string expression “ID of the set” |
| 10 | 90 | Usage > Remove Training Set | `Remove set <p0>` |  | string expression “ID of the set” |
| 11 | 91 | Usage > Add Pattern to Set | `Add pattern to set <p0>` |  | string expression “ID of the set” |
| 12 | 92 | Usage > Load Pattern from Network | `Load pattern from network` |  |  |
| 13 | 93 | Setup > Set Number of Input Layer Neurons | `Set <p0> input layer neurons` |  | numeric expression “Number of neurons” |
| 14 | 94 | Setup > Set Number of Output Layer Neurons | `Set <p0> output layer neurons` |  | numeric expression “Number of neurons” |
| 15 | 95 | Setup > Set Number of Hidden Layers | `Create <p0> hidden layers` |  | numeric expression “Number of layers” |
| 16 | 96 | Setup > Set Number of Hidden Layer Neurons | `Set <p1> neurons at hidden layer <p0>` |  | numeric expression “Layer index”; numeric expression “Number of neurons” |
| 17 | 97 | Setup > Set Weights | `Set lower weight = <p0>, upper weight = <p1>` |  | numeric expression “Lower value”; numeric expression “Upper value” |
| 18 | 98 | Setup > Set Bias | `Set lower bias = <p0>, upper bias = <p1>` |  | numeric expression “Lower value”; numeric expression “Upper value” |
| 19 | 99 | Setup > Set Learning Rate | `Set learning rate to <p0>` |  | numeric expression “Learning rate value” |
| 20 | 100 | Setup > Set Momentum | `Set momentum to <p0>` |  | numeric expression “Momentum value” |
| 21 | 101 | Setup > Create Network | `Create network` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Patterns > Get Result | `GetResult(` |  | string “Result ID”; number “Index” |
| 1 | 81 | Patterns > Get Result Array Length | `GetNResults(` |  | string “Result ID” |
| 2 | 82 | Layers > Get Input Layer Neurons | `InputNeurons(` |  |  |
| 3 | 83 | Layers > Get Hidden Layers | `HiddenLayers(` |  |  |
| 4 | 84 | Layers > Get Hidden Layer Neurons | `HiddenLayerNeurons(` |  | number “Layer index” |
| 5 | 85 | Layers > Get Output Layer Neurons | `OutputNeutrons(` |  |  |
| 6 | 86 | Patterns > Get Number of Patterns in Set | `NumberOfPatterns(` |  | string “ID of the set” |
| 7 | 87 | Layers > Get Output Layer Neuron Value | `OutputNeuronVal(` |  | number “Neuron index” |
| 8 | 88 | Layers > Get Hidden Layer Neuron Value | `HiddenNeuronVal(` |  | number “Layer index”; number “Neuron index” |
| 9 | 89 | Layers > Get Output Layer Bias Value | `OutputBiasVal(` |  | number “Neuron index” |
| 10 | 90 | Layers > Get Hidden Layer Bias Value | `HiddenBiasVal(` |  | number “Layer index”; number “Neuron index” |
