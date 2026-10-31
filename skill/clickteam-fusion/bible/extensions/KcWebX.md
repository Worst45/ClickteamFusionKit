# Extension KcWebX

- Fichier : `KcWebX.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Loaded? | `<objet>: Web loaded?` |  |  | — |  |
| 1 | -82 | Still Navigating? | `<objet>: Web still navigating?` |  |  | — |  |
| 2 | -83 | Download Begin? | `<objet>: Download Begin?` |  |  | — |  |
| 3 | -84 | Download Complete? | `<objet>: Download Complete?` |  |  | — |  |
| 4 | -85 | Clicked? | `<objet>: Web clicked?` |  |  | — |  |
| 5 | -86 | On Submit? | `<objet>: On Submit?` |  |  | — |  |
| 6 | -87 | Title Change? | `<objet>: Web title change?` |  |  | — |  |
| 7 | -88 | Status Change? | `<objet>: Web status changed?` |  |  | — |  |
| 8 | -89 | Navigate Error occured | `<objet>: Navigate error occur?` |  |  | — |  |
| 9 | -90 | Web has focus? | `<objet>: Has focus?` |  |  | — |  |
| 10 | -91 | On Elements Read? | `<objet>: On Elements Read?` |  |  | — |  |
| 11 | -92 | On URLs Read? | `<objet>: On URLs Read?` |  |  | — |  |
| 12 | -93 | On Progress? | `<objet>: On Progress?` |  |  | — |  |
| 13 | -94 | On Found Text? | `<objet>: On Found Text?` |  |  | — |  |
| 14 | -95 | On Image saved? | `<objet>: On Image saved?` |  |  | — |  |
| 15 | -96 | Web Scrollbars needed? | `<objet>: Web scrollbars needed?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Navigation > Set URL | `<objet>: Set URL=<p0>, referrer=<p1>` |  | expression chaîne « URL address » ; expression chaîne « Referrer address » | — |  |
| 1 | 81 | Navigation > Set Web Block | `<objet>: Set Block to <p0>` |  | expression chaîne « Block Web page » | — |  |
| 2 | 82 | Navigation > Go | `<objet>: Go with mode <p0>` |  | expression numérique « Mode (0=Normal, 1=No History 2=New Window) can be added » | — |  |
| 3 | 83 | Navigation > Go Back | `<objet>: Go Back` |  |  | — |  |
| 4 | 84 | Navigation > Go Foward | `<objet>: Go Foward` |  |  | — |  |
| 5 | 85 | Navigation > Go Home | `<objet>: Go Home` |  |  | — |  |
| 6 | 86 | Navigation > Go Search | `<objet>: Go Search` |  |  | — |  |
| 7 | 87 | Navigation > Refresh | `<objet>: Refresh with mode <p0>` |  | expression numérique « Refresh Mode (0=Normal, 1=IfExpired, 3=Completely) » | — |  |
| 8 | 88 | Navigation > Stop | `<objet>: Stop` |  |  | — |  |
| 9 | 89 | Visibility/Size > Show Web | `<objet>: Show Web` |  |  | — |  |
| 10 | 90 | Visibility/Size > Hide Web | `<objet>: Hide Web` |  |  | — |  |
| 13 | 93 | Visibility/Size > Set Width | `<objet>: Set width to <p0>` |  | expression numérique « width (X) size to » | — |  |
| 14 | 94 | Visibility/Size > Set Height | `<objet>: Set height to <p0>` |  | expression numérique « height (Y) size to » | — |  |
| 15 | 95 | Visibility/Size > Resize to frame | `<objet>: resize to frame` |  |  | — |  |
| 16 | 96 | Set Options > Show Scrollbars | `<objet>: Set Scrollbars <p0>` |  | expression numérique « Show Scrollbars (0=Yes, 1=No) » | — |  |
| 17 | 97 | Set Options > Show Menu | `<objet>: Show menu=<p0>` |  | expression numérique « Show Menu (0=Off, 1=On) » | — |  |
| 18 | 98 | Elements > Read Elements | `<objet>: Read Total Elements type=<p0>` |  | expression chaîne « Types: A=Anchors, P=Paragraphs, UL:OL=Lists, IMG=Images, FORM=Forms, SCRIPT=Scripts, INPUT=Inputs, SELECT=Selects » | — |  |
| 19 | 99 | Elements > Read URLs | `<objet>: Read URLs` |  |  | — |  |
| 20 | 100 | Set Options > Status Text | `<objet>: Set status bar to <p0>` |  | expression chaîne « Status Text » | — |  |
| 21 | 101 | Utilities > Download URL | `<objet>: URL2FILE(<p0>, <p1>)` |  | expression chaîne « URL to download » ; expression chaîne « Destination file » | — |  |
| 22 | 102 | Forms > Do Submit | `<objet>: Do Submit form with <p0>` |  | expression chaîne « Form or Button name, submit type checked » | — |  |
| 23 | 103 | Forms > Do Reset | `<objet>: Do Reset form with <p0>` |  | expression chaîne « Form or Button name, reset type checked » | — |  |
| 24 | 104 | Print and Save ... > Page Setup > Page Setup | `<objet>: Page Set Up` |  |  | — |  |
| 25 | 105 | Print and Save ... > Page Setup > Page Footer | `<objet>: Page Footer <p0>` |  | expression chaîne « Page footer » | — |  |
| 26 | 106 | Print and Save ... > Page Setup > Page Header | `<objet>: Page Header <p0>` |  | expression chaîne « Page header » | — |  |
| 27 | 107 | Print and Save ... > Print Preview | `<objet>: Print Preview, Shrink to fit=<p0> and template <p1>` |  | expression numérique « Shrink to fit (0=Off, 1=On, 2=No Change) » ; expression chaîne « Print Template to use » | — |  |
| 28 | 108 | Print and Save ... > Print Web Page | `<objet>: Print Page, Shrink to fit=<p0> and template <p1>` |  | expression numérique « Shrink to fit (0=Off, 1=On, 2=No Change) » ; expression chaîne « Print Template to use » | — |  |
| 29 | 109 | Print and Save ... > Save Page as | `<objet>: Save as <p0>, mode <p1>` |  | expression chaîne « File Name » ; expression numérique « Type Mode (0=html complete, 1=archive, 2=hmtl only, 3=txt only) » | — |  |
| 30 | 110 | Do Scripts | `<objet>: Do Scripts <p0> with <p1>` |  | expression chaîne « Script to execute name » ; expression chaîne « Arguments » | — |  |
| 31 | 111 | Navigation > Navigation Internal Mode | `<objet>: Navigation internal mode <p0>` |  | expression numérique « Navigate Mode (0=Free, 1=Controlled, 2=Half Controlled) » | — |  |
| 32 | 112 | Forms > Reset local Submit | `Reset submit` |  |  | — |  |
| 33 | 113 | Set Options > Normal Zoom | `<objet>: Set Zoom to <p0>` |  | expression numérique « Zoom (0=Smallest, 1=Smaller, 2=Medium, 3=Larger, 4=Largest) » | — |  |
| 34 | 114 | Elements > Click Button Id | `<objet>: Do Click button <p0>` |  | expression chaîne « Button name » | — |  |
| 35 | 115 | Forms > Find Submit and Do | `<objet>: Find Submit #:<p0> and do` |  | expression numérique « Submit number (1-based) » | — |  |
| 36 | 116 | Utilities > Delete URL from History | `<objet>: Delete URL=<p0>` |  | expression chaîne « URL to delete from history » | — |  |
| 37 | 117 | Elements > Set Value text | `<objet>: Set value of <p0> to text <p1>` |  | expression chaîne « Element name » ; expression chaîne « Set value text » | — |  |
| 38 | 118 | Elements > Set Check value | `<objet>: Set check value of <p0> to <p1>` |  | expression chaîne « Element name » ; expression numérique « Set check or radio (0=Off 1=On) » | — |  |
| 39 | 119 | Elements > Set Selection Id | `<objet>: Set Select <p0> to Id <p1>` |  | expression chaîne « Element name » ; expression numérique « Set selection id value » | — |  |
| 40 | 120 | Utilities > Find Text | `<objet>: Find occurrence#:<p0> of text <p1>, option <p2> and read <p3> of type '<p4>'` |  | expression numérique « Find occurrence number » ; expression chaîne « Text to be found » ; expression numérique « Modes: 0:Only Found, 1:Highlight, 2:Read, 3:Highlight and Read » ; expression numérique « Number of types to be read » ; expression chaîne « Type to be read: c=character, w=word, s=sentence, t=textedit » | — |  |
| 41 | 121 | Elements > Set Focus Id | `<objet>: Set Focus, Id <p0>` |  | expression chaîne « Element name » | — |  |
| 42 | 122 | Set Options > Optical Zoom | `<objet>: Set Optical Zoom to <p0>` |  | expression numérique « Zoom percentage % » | — |  |
| 43 | 123 | Utilities > Image of URL | `<objet>: Save URL Image to <p0>` |  | expression chaîne « Image Filename » | — |  |
| 44 | 124 | Utilities > Add URL to Favorites | `<objet>: Add URL to Favorites` |  |  | — |  |
| 45 | 125 | Elements > Set Focus by XY | `<objet>: Select element at x=<p0>, y=<p1>` |  | expression numérique « X position in pixel » ; expression numérique « Y position in pixel » | — |  |
| 46 | 126 | Elements > Set Attributes by Index | `<objet>: Set Attributes <p1> with <p2> and index=<p0>` |  | expression numérique « Index number » ; expression chaîne « Attribute » ; expression chaîne « With this » | — |  |
| 47 | 127 | Elements > Set Styles by Index | `<objet>: Set Style <p1> with <p2> and index=<p0>` |  | expression numérique « Index number » ; expression chaîne « Style attribute » ; expression chaîne « With this » | — |  |
| 48 | 128 | Scroll Web by... | `<objet>: Scroll web horizontally by <p0> and vertically by <p1>, pixels` |  | expression numérique « Value to horizontal scroll in pixel » ; expression numérique « Value to vertical scroll in pixel » | — |  |
| 49 | 129 | Utilities > Remove URL from Favorites | `<objet>: Remove URL from Favorites` |  |  | — |  |
| 50 | 130 | Redraw Web | `<objet>: Redraw Web` |  |  | — |  |
| 51 | 131 | Set Options > Toogle Toolbar | `<objet>: Toogle toolbar` |  |  | — |  |
| 52 | 132 | Print and Save ... > Maximize Preview Window | `<objet>: Maximize Preview Window` |  |  | — |  |
| 53 | 133 | Utilities > Set URL to Zone | `<objet>: Set Security to zone <p0>` |  | expression numérique « Zone Names: Local=0, Intranet=1, Trusted=2, Internet=3, Restricted=4 » | — |  |
| 54 | 134 | Utilities > Delete IE Cache | `<objet>: Delete IE Cache` |  |  | — |  |
| 55 | 135 | Utilities > Delete IE History | `<objet>: Delete IE History` |  |  | — |  |
| 56 | 136 | Securities > Create Site Zone | `<objet>: Create Zone:<p1> for URL:<p0>` |  | expression chaîne « URL String » ; expression numérique « Zone (0=Local machine, 1=Intranet, 2=Trusted, 3=Internet, 4=Untrusted) » | — |  |
| 57 | 137 | Securities > Delete Site Zone | `<objet>: Delete Zone:<p1> for URL:<p0>` |  | expression chaîne « URL String » ; expression numérique « Zone (0=Local machine, 1=Intranet, 2=Trusted, 3=Internet, 4=Untrusted) » | — |  |
| 58 | 138 | Securities > Override Certificates | `<objet>: Override Certifificate for URL:<p0> mode:<p1>` |  | expression chaîne « URL String » ; expression numérique « Mode (1=On, 0=Off) » | — |  |
| 59 | 139 | Securities > Read Security | `<objet>: Read Security` |  |  | — |  |
| 60 | 140 | Securities > Change Security | `<objet>: Change Security of zone: <p0>, value:<p1> to <p2>` |  | expression numérique « Zone (0=Local machine, 1=Intranet, 2=Trusted, 3=Internet, 4=Untrusted) » ; expression numérique « Numerical Value referring to policy » ; expression numérique « Value (0: Enable, 1: Prompt, 3: Disable) » | — |  |
| 61 | 141 | Securities > Reset Security | `<objet>: Reset Security for URL:<p0>` |  | expression chaîne « URL String » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Elements > Get Type | `Element Type$(` |  | chaîne → chaîne | — |  |
| 1 | 81 | Elements > Get Text | `Text_Elem$(` |  | chaîne → chaîne | — |  |
| 2 | 82 | Get Last Click | `Clicked$(` |  | → chaîne | — |  |
| 3 | 83 | Get Item | `Item$(` |  | chaîne → chaîne | — |  |
| 4 | 84 | Get Title | `Title$(` |  | → chaîne | — |  |
| 5 | 85 | Get Status | `Status$(` |  | → chaîne | — |  |
| 6 | 86 | Elements > Get Value | `Value_Elem$(` |  | chaîne → chaîne | — |  |
| 7 | 87 | Elements > Get Checked | `Check_Elem(` |  | chaîne | — |  |
| 8 | 88 | Get Navigation Error | `Nav_Error(` |  |  | — |  |
| 9 | 89 | Elements > Get Select Id | `Select_ID_Elem(` |  | chaîne | — |  |
| 10 | 90 | Scripting > Last Script Error | `Script_Error(` |  |  | — |  |
| 11 | 91 | Scripting > Last Integer Script Return | `Int_Script(` |  |  | — |  |
| 12 | 92 | Scripting > Last Float Script Return | `Float_Script(` |  |  | — |  |
| 13 | 93 | Scripting > Last String Script Return | `Str_Script(` |  | → chaîne | — |  |
| 14 | 94 | Actual Progress | `Progress(` |  |  | — |  |
| 15 | 95 | Elements > Get # of Elements type | `TotalElemReaded(` |  |  | — |  |
| 16 | 96 | Elements > Get Element Name | `ElementName$(` |  | nombre → chaîne | — |  |
| 17 | 97 | Get Total # of URLs | `TotalURLs(` |  |  | — |  |
| 18 | 98 | Get URL | `URL$(` |  | nombre → chaîne | — |  |
| 19 | 99 | Get Location URL | `LocationURL$(` |  | → chaîne | — |  |
| 20 | 100 | Get Page Width | `PageWidth(` |  |  | — |  |
| 21 | 101 | Get Page Height | `PageHeight(` |  |  | — |  |
| 22 | 102 | Get Text Found | `FoundText$(` |  | → chaîne | — |  |
| 23 | 103 | Get Web Version | `WebVersion(` |  |  | — |  |
| 24 | 104 | Get Screen Width | `ScreenWidth(` |  |  | — |  |
| 25 | 105 | Get Screen Height | `ScreenHeight(` |  |  | — |  |
| 26 | 106 | Get Optical Zoom | `OpticalZoomVal(` |  |  | — |  |
| 27 | 107 | Get Window Width | `WindowWidth(` |  |  | — |  |
| 28 | 108 | Get Window Height | `WindowHeight(` |  |  | — |  |
| 29 | 109 | Elements > Total # of Elements | `AllElements(` |  |  | — |  |
| 30 | 110 | Elements > Get Attribute by Index | `GetAttribute$(` |  | nombre ; chaîne → chaîne | — |  |
| 31 | 111 | Elements > Get Tag Name by Index | `GetTagName$(` |  | nombre → chaîne | — |  |
| 32 | 112 | Elements > Get Style by Index | `GetStyle$(` |  | nombre ; chaîne → chaîne | — |  |
| 33 | 113 | Get Security Zone URL | `GetURLSecMap(` |  | chaîne | — |  |
| 34 | 114 | Get Zone Action Policy | `GetActionPolicy(` |  | nombre ; nombre | — |  |
