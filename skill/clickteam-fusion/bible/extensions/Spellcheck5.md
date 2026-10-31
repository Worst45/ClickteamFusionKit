# Extension Spellcheck5

- File: `Spellcheck5.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is word in Ignore list? | `<object>: Is <p0> in the ignore list?` |  | string expression “%o: Word” | — |  |
| 1 | -82 | Is Word correct? | `<object>: Is <p0> correct?` |  | string expression “%o: Word” | — |  |
| 2 | -83 | Autoparse > Is Parse in Progress | `<object>: Is parse in progress?` |  |  | — |  |
| 3 | -84 | On Correction Suggestion | `<object>: On Correction` |  |  | — |  |
| 4 | -85 | On Loading | `<object> is loading` |  |  | — |  |
| 5 | -86 | Is Loading in Background | `Is <object> loading in background` |  |  | — |  |
| 6 | -87 | Autoparse > On Incorrect Word | `On incorrect word in <object>` |  |  | — |  |
| 7 | -88 | Autoparse > On Parse Done | `On Parse Done in <object>` |  |  | — |  |
| 8 | -89 | Autoparse > On Parse Aborted | `On Parse Aborted in <object>` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | List Suggestions | `List suggestions for word <p0>` |  | string expression “Word” | — |  |
| 1 | 81 | Word Lists > Load Wordlist (Pauses MMF) | `Load word list from <p0>` |  | file name “Wordlist” | — |  |
| 2 | 82 | Word Lists > Load Wordlist in Background | `Load <p0> in background` |  | file name “Path” | — |  |
| 3 | 83 | Word Lists > Save Word List (Using null separators) | `Save word list to <p0> using null seperators` |  | file name “Wordlist” | — |  |
| 4 | 84 | Word Lists > Save Word List (Using new line separators) | `Save word list to <p0> using new line seperators` |  | file name “Wordlist” | — |  |
| 5 | 85 | Word Lists > Add Word | `Add Word <p0>` |  | string expression “Word” | — |  |
| 6 | 86 | Word Lists > Remove Word | `Remove Word <p0>` |  | string expression “Word” | — |  |
| 7 | 87 | Word Lists > Ignore Word | `Ignore Word <p0>` |  | string expression “Word” | — |  |
| 8 | 88 | Word Lists > Unignore Word | `Unignore Word <p0>` |  | string expression “Word” | — |  |
| 9 | 89 | Opitions > Set Suggestion Settings | `Only give results which are <p0> or more relavent, and no more than <p1>` |  | numeric expression “Relavence (0% to 100%) - See Docs”; numeric expression “Max Words Returned (-1 for no limit)” | — |  |
| 10 | 90 | Opitions > Set Ordering Settings | `Set sorting costs of <object> to <p0> and <p1>` |  | numeric expression “Start gap cost (See docs)”; numeric expression “Continue gap cost (See docs)” | — |  |
| 11 | 91 | Opitions > Contractions > Set Contraction and Hyphen Mode | `Change the Contraction Mode to <p0> and hyphen mode to <p1>` |  | numeric expression “Mode ( 0 = None, 1 = Selective Bases , 2 = Any ) - See docs”; numeric expression “Allow any two words joined with a Hyphen (0=No,1=Yes)” | — |  |
| 12 | 92 | Opitions > Contractions > Add Base | `Add the base <p0>` |  | string expression “Base (e.g. 'should')” | — |  |
| 13 | 93 | Opitions > Contractions > Remove Base | `Remove the base <p0>` |  | string expression “Base (e.g. 'should')” | — |  |
| 14 | 94 | Opitions > Contractions > Add Contraction | `Add Contraction <p0>` |  | string expression “Contraction (e.g. 've or n't)” | — |  |
| 15 | 95 | Opitions > Contractions > Remove Contraction | `Remove Contraction <p0>` |  | string expression “Contraction (e.g. 've or n't)” | — |  |
| 16 | 96 | Autoparse > Start | `AutoParse <p0>` |  | string expression “Text to parse” | — |  |
| 17 | 97 | Autoparse > Resume Parse | `Resume parse in <object>` |  |  | — |  |
| 18 | 98 | Autoparse > Stop Parse | `Stop Parse in <object>` |  |  | — |  |
| 19 | 99 | Autoparse > Change Last Incorrect Word | `Check last incorrect word in <object> to <p0>` |  | string expression “Replacment” | — |  |
| 20 | 100 | Autoparse > Settings > Add Ignore Key | `Add ignore key (Start: <p0> , End: <p1> , Allow escapes, <p2> , Allow quotes: <p3>)` |  | string expression “Start condition (e.g '<')”; string expression “End condition (e.g '>')”; numeric expression “Allow Escapes? (1 = Yes , 0 = No )”; numeric expression “Allow Quotes? (1 = Yes , 0 = No )” | — |  |
| 21 | 101 | Autoparse > Settings > Add Spellcheck Key | `Add Spell-check key (Start: <p0> , End: <p1> , Allow escapes: <p2>  , Allow quotes: <p3>)` |  | string expression “Start condition (e.g '<')”; string expression “End condition (e.g '>')”; numeric expression “Allow Escapes? (1 = Yes , 0 = No )”; numeric expression “Allow Quotes? (1 = Yes , 0 = No )” | — |  |
| 22 | 102 | Autoparse > Settings > Add Escape Char | `Add escape char <p0>` |  | string expression “String (e.g '\')” | — |  |
| 23 | 103 | Autoparse > Settings > Add Quote Char | `Add quote char <p0>` |  | string expression “String (e.g. a double quote)” | — |  |
| 24 | 104 | Autoparse > Settings > Set Neutral and General Settings | `Set Neutral settings to ( <p0> , <p1> , <p2>) and general settings to ( <p4> , <p5> )` |  | numeric expression “Spell check when in Neutral? (1 = Yes , 0 = No)”; numeric expression “Allow Escapes in Neutral? (1 = Yes , 0 = No)”; numeric expression “Allow Quotes in Neutral? (1 = Yes , 0 = No)”; numeric expression “General: Allow escapes within quotes? (1 = Yes , 0 = No)”; numeric expression “General: Flag Double-words as spelling mistakes? (1 = Yes, No )” | — |  |
| 25 | 105 | Autoparse > Settings > Reset all parse settings | `Reset all parse settings in <object>` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Options > Get Contraction Mode | `ContractionMode(` |  |  | — |  |
| 1 | 81 | Options > Get Max Results | `MaxResults(` |  |  | — |  |
| 2 | 82 | Options > Get Min Relevance of Results | `RelevanceResults(` |  |  | — |  |
| 3 | 83 | Advanced > Find how similar two strings are | `strCompare$(` |  | string; string | — |  |
| 4 | 84 | Suggestions > Get Suggestion | `Suggestion$(` |  | → string | — |  |
| 5 | 85 | Loading > Get Loading Percentage | `LoadingPercentage(` |  |  | — |  |
| 6 | 86 | Autoparse > Get Incorrect Word | `IncorrectWord$(` |  | → string | — |  |
| 7 | 87 | Autoparse > Get Incorrect Words start Index | `IncorrectIndex(` |  |  | — |  |
| 8 | 88 | Autoparse > Get Incorrect Words Length | `IncorrectLen(` |  |  | — |  |
| 9 | 89 | Autoparse > Get Corrected String | `ParseStr$(` |  | → string | — |  |
