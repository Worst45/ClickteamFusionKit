# Extension Quiz

- Fichier : `Quiz.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Current page > Is answer correct? | `<objet>: Current answer is correct` | <objet>: La réponse courante est correcte |  | — |  |
| 1 | -82 | Current page > Is answer incomplete? | `<objet>: Current answer is incomplete` | <objet>: La réponse courante est incomplète |  | — |  |
| 2 | -83 | Current page > Too many answers? | `<objet>: Current answer is too complete` | <objet>: La réponse courante est trop remplie |  | — |  |
| 3 | -84 | Selected page > Is answer correct? | `<objet>: Answer on page <p0> is correct` | <objet>: La réponse page <p0> est correcte | expression numérique « Enter page number (starting at 1) » | — |  |
| 4 | -85 | Selected page > Is answer incomplete? | `<objet>: Answer on page <p0> is incomplete` | <objet>: La réponse en page <p0> est incomplète | expression numérique « Enter page number (starting at 1) » | — |  |
| 5 | -86 | Selected page > Too many answers? | `<objet>: Answer on page <p0> is too complete` | <objet>: La réponse en page <p0> est trop remplie | expression numérique « Enter page number (starting at 1) » | — |  |
| 6 | -87 | Has page been seen? | `<objet>: Page <p0> has been seen` | <objet>: La page <p0> a été vue | expression numérique « Enter page number (starting at 1) » | — |  |
| 7 | -88 | Every second of the timer | `<objet>: Every second of the timer` | <objet>: A chaque seconde du chrono |  | — |  |
| 8 | -89 | Is timer equal to zero? | `<objet>: Timer is equal to zero` | <objet>: Le chrono est égal à zéro |  | — |  |
| 9 | -90 | Is quiz completed? | `<objet>: The quiz has been completed` | <objet>: le quiz est terminé |  | — |  |
| 10 | -91 | Current page > Is answer wrong? | `<objet>: Current answer is wrong` | <objet>: la réponse courante est fausse |  | — |  |
| 11 | -92 | Selected page > Is answer wrong? | `<objet>: Answer on page <p0> is wrong` | <objet>: La réponse en page <p0> est fausse | expression numérique « Enter page number (starting at 1) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Goto next page | `Goto next page` | Aller à la page suivante |  | — |  |
| 1 | 81 | Goto previous page | `Goto previous page` | Aller à la page précédente |  | — |  |
| 2 | 82 | Clear current page | `Clear current page` | Effacer la page courante |  | — |  |
| 3 | 83 | Goto page number | `Goto page number <p0>` | Aller à la page numéro <p0> | expression numérique « Enter page number (starting at 1) » | — |  |
| 4 | 84 | Dialogs > Display correct answer dialog | `Display correct answer dialog` | Afficher dialogue réponse correcte |  | — |  |
| 5 | 85 | Dialogs > Display wrong answer dialog | `Display wrong answer dialog (ask retry: <p0>)` | Afficher le dialogue mauvaise réponse (ré-essayer: <p0>) | expression numérique « Enter 0 for simple dialog, 1 to ask retry question » | — |  |
| 6 | 86 | Dialogs > Display incomplete answer dialog | `Display answer incomplete dialog (ask retry: <p0>)` | Afficher le dialogue réponse incomplète (ré-essayer: <p0>) | expression numérique « Enter 0 for simple dialog, 1 to ask retry question » | — |  |
| 7 | 87 | Dialogs > Display too many answers dialog | `Display answer too complete dialog (ask retry: <p0>)` | Afficher le dialogue trop de réponses (ré-essayer <p0>) | expression numérique « Enter 0 for simple dialog, 1 to ask retry question » | — |  |
| 8 | 88 | Dialogs > Display timeout dialog | `Display time is out dialog` | Afficher le dialogue chrono terminé |  | — |  |
| 9 | 89 | Set timer | `Set page timer to <p0> seconds` | Fixer le chrono à <p0> secondes | expression numérique « Enter the new timer value, in seconds » | — |  |
| 10 | 90 | Set source file | `Set source file to <p0>` | Fixer le fichier source à <p0> | nom de fichier « #Title#Please choose a text file...#Filter#Text files\|*.txt\| » | — |  |
| 11 | 91 | Save report to file | `Save report to file <p0>` | Sauver le rapport vers <p0> | nom de fichier « #Title#Please choose a report file...#Filter#Text files\|*.txt\| » | — |  |
| 12 | 92 | Send report to email | `Send report to email <p0>` | Envoyer le rapport vers l'email <p0> | expression chaîne « Enter the email address... » | — |  |
| 13 | 93 | Show page | `Show page` | Montrer la page |  | — |  |
| 14 | 94 | Hide page | `Hide page` | Cacher la page |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current page number | `QuizPage(` | Numéro de page courant |  | — |  |
| 1 | 81 | Get total number of pages | `QuizTotalPages(` | Nombre total de pages |  | — |  |
| 2 | 82 | Report > Get number of questions | `QuizNQuestions(` | Nombre de questions | chaîne « Group name (empty for all) » | — |  |
| 3 | 83 | Report > Get number of correct answers | `QuizCorrect(` | Nombre de réponses correctes | chaîne « Group name (empty for all) » | — |  |
| 4 | 84 | Report > Get number of wrong answers | `QuizWrong(` | Nombre de fausses réponses | chaîne « Group name (empty for all) » | — |  |
| 5 | 85 | Report > Get number of incomplete answers | `QuizIncomplete(` | Nom de réponses incomplètes | chaîne « Group name (empty for all) » | — |  |
| 6 | 86 | Report > Get number of pages with too many answers | `QuizToComplete(` | Nombre de pages avec trop de réponses | chaîne « Group name (empty for all) » | — |  |
| 7 | 87 | Report > Get percentage of correct answers | `QuizPercent(` | Pourcentage de réponses correctes | chaîne « Group name (empty for all) » | — |  |
| 8 | 88 | Get dialog return value | `QuizDialog(` | Valeur de retour du dialogue |  | — |  |
| 9 | 89 | Report > Get number of pages seen | `QuizSeenPages(` | Nombre de pages vues |  | — |  |
| 10 | 90 | Answers > Get user answer text | `QuizUserAnswer$(` | Texte de la réponse de l'utilisateur | nombre « Answer number (1 based) » → chaîne | — |  |
| 11 | 91 | Answers > Get answer text | `QuizAnswer$(` | Texte d'une réponse | nombre « Answer number (1 based) » → chaîne | — |  |
| 12 | 92 | Answers > Get answer state | `QuizAnswerState(` | Etat d'une réponse | nombre « Answer number (1 based) » | — |  |
| 13 | 93 | Answers > Get number of answers | `QuizNAnswers(` | Nombre de réponses |  | — |  |
