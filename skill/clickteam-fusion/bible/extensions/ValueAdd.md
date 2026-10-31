# Extension ValueAdd

- Fichier : `ValueAdd.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Value-Add Object »
- Usage dans le corpus : 30 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to Value | `<objet>: Ext. Alt. Value <p1> of <p0> <p2>` |  | objet « Object » ; expression chaîne « Extended Alt. Value Name » ; comparaison numérique « To Compare Against » | 8 (1 proj.) |  |
| 1 | -82 | Compare to String | `<objet>: Ext. Alt. String <p1> of <p0> <p2>` |  | objet « Object » ; expression chaîne « Extended Alt. Sring Name » ; comparaison de chaînes « To Compare Against » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Value | `<objet>: Set Ext. Alt. Value <p1> of <p0> to <p2>` |  | objet « Object » ; expression chaîne « Extended Alt. Value's Name » ; expression numérique « New Value » | 14 (1 proj.) |  |
| 1 | 81 | Spread Value | `<objet>: Spread Value <p2> (+<p3>) in Ext. Alt. Value <p1> of <p0>` |  | objet « Object » ; expression chaîne « Extended Alt. Value's Name » ; expression numérique « Start Value » ; expression numérique « Step Value » | 1 (1 proj.) |  |
| 2 | 82 | Set String | `<objet>: Set Ext. Alt. String <p1> of <p0> to <p2>` |  | objet « Object » ; expression chaîne « Extended Alt. String's Name » ; expression chaîne « New Value » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Value | `alt(` |  | nombre « Fixed Value of Object » ; chaîne « Extended Alt. Value's Name » | 7 (1 proj.) |  |
| 1 | 81 | Get String | `alt$(` |  | nombre « Fixed Value of Object » ; chaîne « Extended Alt. String's Name » → chaîne | — |  |
