# Extension Spellcheck5

- Fichier : `Spellcheck5.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is word in Ignore list? | `<objet>: Is <p0> in the ignore list?` |  | expression chaîne « %o: Word » | — |  |
| 1 | -82 | Is Word correct? | `<objet>: Is <p0> correct?` |  | expression chaîne « %o: Word » | — |  |
| 2 | -83 | Autoparse > Is Parse in Progress | `<objet>: Is parse in progress?` |  |  | — |  |
| 3 | -84 | On Correction Suggestion | `<objet>: On Correction` |  |  | — |  |
| 4 | -85 | On Loading | `<objet> is loading` |  |  | — |  |
| 5 | -86 | Is Loading in Background | `Is <objet> loading in background` |  |  | — |  |
| 6 | -87 | Autoparse > On Incorrect Word | `On incorrect word in <objet>` |  |  | — |  |
| 7 | -88 | Autoparse > On Parse Done | `On Parse Done in <objet>` |  |  | — |  |
| 8 | -89 | Autoparse > On Parse Aborted | `On Parse Aborted in <objet>` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | List Suggestions | `List suggestions for word <p0>` |  | expression chaîne « Word » | — |  |
| 1 | 81 | Word Lists > Load Wordlist (Pauses MMF) | `Load word list from <p0>` |  | nom de fichier « Wordlist » | — |  |
| 2 | 82 | Word Lists > Load Wordlist in Background | `Load <p0> in background` |  | nom de fichier « Path » | — |  |
| 3 | 83 | Word Lists > Save Word List (Using null separators) | `Save word list to <p0> using null seperators` |  | nom de fichier « Wordlist » | — |  |
| 4 | 84 | Word Lists > Save Word List (Using new line separators) | `Save word list to <p0> using new line seperators` |  | nom de fichier « Wordlist » | — |  |
| 5 | 85 | Word Lists > Add Word | `Add Word <p0>` |  | expression chaîne « Word » | — |  |
| 6 | 86 | Word Lists > Remove Word | `Remove Word <p0>` |  | expression chaîne « Word » | — |  |
| 7 | 87 | Word Lists > Ignore Word | `Ignore Word <p0>` |  | expression chaîne « Word » | — |  |
| 8 | 88 | Word Lists > Unignore Word | `Unignore Word <p0>` |  | expression chaîne « Word » | — |  |
| 9 | 89 | Opitions > Set Suggestion Settings | `Only give results which are <p0> or more relavent, and no more than <p1>` |  | expression numérique « Relavence (0% to 100%) - See Docs » ; expression numérique « Max Words Returned (-1 for no limit) » | — |  |
| 10 | 90 | Opitions > Set Ordering Settings | `Set sorting costs of <objet> to <p0> and <p1>` |  | expression numérique « Start gap cost (See docs) » ; expression numérique « Continue gap cost (See docs) » | — |  |
| 11 | 91 | Opitions > Contractions > Set Contraction and Hyphen Mode | `Change the Contraction Mode to <p0> and hyphen mode to <p1>` |  | expression numérique « Mode ( 0 = None, 1 = Selective Bases , 2 = Any ) - See docs » ; expression numérique « Allow any two words joined with a Hyphen (0=No,1=Yes) » | — |  |
| 12 | 92 | Opitions > Contractions > Add Base | `Add the base <p0>` |  | expression chaîne « Base (e.g. 'should') » | — |  |
| 13 | 93 | Opitions > Contractions > Remove Base | `Remove the base <p0>` |  | expression chaîne « Base (e.g. 'should') » | — |  |
| 14 | 94 | Opitions > Contractions > Add Contraction | `Add Contraction <p0>` |  | expression chaîne « Contraction (e.g. 've or n't) » | — |  |
| 15 | 95 | Opitions > Contractions > Remove Contraction | `Remove Contraction <p0>` |  | expression chaîne « Contraction (e.g. 've or n't) » | — |  |
| 16 | 96 | Autoparse > Start | `AutoParse <p0>` |  | expression chaîne « Text to parse » | — |  |
| 17 | 97 | Autoparse > Resume Parse | `Resume parse in <objet>` |  |  | — |  |
| 18 | 98 | Autoparse > Stop Parse | `Stop Parse in <objet>` |  |  | — |  |
| 19 | 99 | Autoparse > Change Last Incorrect Word | `Check last incorrect word in <objet> to <p0>` |  | expression chaîne « Replacment » | — |  |
| 20 | 100 | Autoparse > Settings > Add Ignore Key | `Add ignore key (Start: <p0> , End: <p1> , Allow escapes, <p2> , Allow quotes: <p3>)` |  | expression chaîne « Start condition (e.g '<') » ; expression chaîne « End condition (e.g '>') » ; expression numérique « Allow Escapes? (1 = Yes , 0 = No ) » ; expression numérique « Allow Quotes? (1 = Yes , 0 = No ) » | — |  |
| 21 | 101 | Autoparse > Settings > Add Spellcheck Key | `Add Spell-check key (Start: <p0> , End: <p1> , Allow escapes: <p2>  , Allow quotes: <p3>)` |  | expression chaîne « Start condition (e.g '<') » ; expression chaîne « End condition (e.g '>') » ; expression numérique « Allow Escapes? (1 = Yes , 0 = No ) » ; expression numérique « Allow Quotes? (1 = Yes , 0 = No ) » | — |  |
| 22 | 102 | Autoparse > Settings > Add Escape Char | `Add escape char <p0>` |  | expression chaîne « String (e.g '\') » | — |  |
| 23 | 103 | Autoparse > Settings > Add Quote Char | `Add quote char <p0>` |  | expression chaîne « String (e.g. a double quote) » | — |  |
| 24 | 104 | Autoparse > Settings > Set Neutral and General Settings | `Set Neutral settings to ( <p0> , <p1> , <p2>) and general settings to ( <p4> , <p5> )` |  | expression numérique « Spell check when in Neutral? (1 = Yes , 0 = No) » ; expression numérique « Allow Escapes in Neutral? (1 = Yes , 0 = No) » ; expression numérique « Allow Quotes in Neutral? (1 = Yes , 0 = No) » ; expression numérique « General: Allow escapes within quotes? (1 = Yes , 0 = No) » ; expression numérique « General: Flag Double-words as spelling mistakes? (1 = Yes, No ) » | — |  |
| 25 | 105 | Autoparse > Settings > Reset all parse settings | `Reset all parse settings in <objet>` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Options > Get Contraction Mode | `ContractionMode(` |  |  | — |  |
| 1 | 81 | Options > Get Max Results | `MaxResults(` |  |  | — |  |
| 2 | 82 | Options > Get Min Relevance of Results | `RelevanceResults(` |  |  | — |  |
| 3 | 83 | Advanced > Find how similar two strings are | `strCompare$(` |  | chaîne ; chaîne | — |  |
| 4 | 84 | Suggestions > Get Suggestion | `Suggestion$(` |  | → chaîne | — |  |
| 5 | 85 | Loading > Get Loading Percentage | `LoadingPercentage(` |  |  | — |  |
| 6 | 86 | Autoparse > Get Incorrect Word | `IncorrectWord$(` |  | → chaîne | — |  |
| 7 | 87 | Autoparse > Get Incorrect Words start Index | `IncorrectIndex(` |  |  | — |  |
| 8 | 88 | Autoparse > Get Incorrect Words Length | `IncorrectLen(` |  |  | — |  |
| 9 | 89 | Autoparse > Get Corrected String | `ParseStr$(` |  | → chaîne | — |  |
