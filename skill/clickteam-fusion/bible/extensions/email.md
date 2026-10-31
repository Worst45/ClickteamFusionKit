# Extension email

- Fichier : `email.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | POP3 > Is Connected to Server |  |  |  | — |  |
| 1 | -82 | SMTP > Is Connected to Server |  |  |  | — |  |
| 2 | -83 | POP3 > Mail Received |  |  | expression numérique « Mail number » | — |  |
| 3 | -84 | SMTP > Was Last Message Sent |  |  |  | — |  |
| 4 | -85 | POP3 > Received Mail > Message Has Plain Text |  |  | expression numérique « Mail number » | — |  |
| 5 | -86 | POP3 > Received Mail > Message Has HTML Text |  |  | expression numérique « Mail number » | — |  |
| 6 | -87 | POP3 > Disk Item > Message Has Plain Text |  |  |  | — |  |
| 7 | -88 | POP3 > Disk Item > Message Has HTML Text |  |  |  | — |  |
| 8 | -89 | SMTP > Enough Info to Send |  |  |  | — |  |
| 9 | -90 | Is Valid Address |  |  | expression chaîne « Is Valid Address » | — |  |
| 10 | -91 | Are There Threads Running |  |  |  | — |  |
| 11 | -92 | POP3 > Is Waiting Response |  |  |  | — |  |
| 12 | -93 | SMTP > Is Waiting Response |  |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | POP3 > Connect to Server |  |  | expression chaîne « Server address » ; expression chaîne « Username » ; expression chaîne « Password » ; expression numérique « Port (Usually 110 or 995 if SSL) » | — |  |
| 1 | 81 | POP3 > Disconnect |  |  |  | — |  |
| 2 | 82 | POP3 > Delete E-mail |  |  | expression numérique « Mail number » | — |  |
| 3 | 83 | POP3 > Retrieve E-mail |  |  | expression numérique « Mail number » | — |  |
| 4 | 84 | POP3 > Set Timeout |  |  | expression numérique « Timeout in ms » | — |  |
| 5 | 85 | POP3 > Noop |  |  |  | — |  |
| 6 | 86 | POP3 > Reset |  |  |  | — |  |
| 7 | 87 | POP3 > UIDL |  |  |  | — |  |
| 8 | 88 | SMTP > Connect to Server |  |  | expression chaîne « Server address » ; expression numérique « Authentication method (0 = None, 1 = Cram MD5, 2 = Authenticate, 3 = Plain » ; expression chaîne « Username » ; expression chaîne « Password » ; expression numérique « Port (Usually 25 or 465 if SSL) » ; expression chaîne « Local bound address (empty if not needed) » | — |  |
| 9 | 89 | SMTP > Disconnect |  |  |  | — |  |
| 10 | 90 | SMTP > Set Timeout |  |  | expression numérique « Timeout in ms » | — |  |
| 11 | 91 | SMTP > Message > Set Recipients > TO |  |  | expression chaîne « Recipients. May be separated by ',' or ';' » | — |  |
| 12 | 92 | SMTP > Message > Remove Recipients > TO |  |  | expression numérique « Select index » | — |  |
| 13 | 93 | SMTP > Message > Headers > Custom Headers > Add Custom Header |  |  | expression chaîne « Custom header » | — |  |
| 14 | 94 | SMTP > Message > Save to Disk |  |  | nom de fichier « Select filename » | — |  |
| 15 | 95 | SMTP > Message > Headers > Set From |  |  | expression chaîne « Set from » | — |  |
| 16 | 96 | SMTP > Message > Headers > Set Subject |  |  | expression chaîne « Set subject » | — |  |
| 17 | 97 | SMTP > Message > Headers > Set X-Mailer |  |  | expression chaîne « Set X-Mailer » | — |  |
| 18 | 98 | SMTP > Message > Headers > Set Reply To |  |  | expression chaîne « Set reply to » | — |  |
| 19 | 99 | SMTP > Message > Add Attachment |  |  | nom de fichier « Select filename » | — |  |
| 20 | 100 | SMTP > Message > Create New Message |  |  | expression numérique « Mime encoded? (0 = false, 1 = true) » ; expression numérique « HTML encoded? (0 = false, 1 = true) » ; expression chaîne « Charset (blank = default) » | — |  |
| 21 | 101 | SMTP > Message > Set Recipients > CC |  |  | expression chaîne « Recipients. May be separated by ',' or ';' » | — |  |
| 22 | 102 | SMTP > Message > Remove Recipients > CC |  |  | expression numérique « Select index » | — |  |
| 23 | 103 | SMTP > Message > Set Recipients > BCC |  |  | expression chaîne « Recipients. May be separated by ',' or ';' » | — |  |
| 24 | 104 | SMTP > Message > Remove Recipients > BCC |  |  | expression numérique « Select index » | — |  |
| 25 | 105 | SMTP > Message > Headers > Custom Headers > Remove Custom Header |  |  | expression numérique « Select index » | — |  |
| 26 | 106 | SMTP > Message > Send Message |  |  |  | — |  |
| 27 | 107 | SMTP > Message > Add Body Text |  |  | expression chaîne « Add body text » | — |  |
| 28 | 108 | POP3 > Received Items > Save Mail on Disk |  |  | expression numérique « Mail number » ; nom de fichier « Select filename » | — |  |
| 29 | 109 | POP3 > Received Items > Free a Received Mail |  |  | expression numérique « Mail number » | — |  |
| 30 | 110 | POP3 > Received Items > Free All Received Mail |  |  |  | — |  |
| 31 | 111 | Set Debug |  |  | expression numérique « 1 = on, 0 = off » | — |  |
| 32 | 112 | Select Debug File |  |  | nom de fichier « Select filename » | — |  |
| 33 | 113 | POP3 > Received Items > Save an Attachment |  |  | expression numérique « Mail number » ; expression numérique « Attachment number » ; nom de fichier « Select filename » | — |  |
| 34 | 114 | POP3 > Disk Item > Save an Attachment |  |  | expression numérique « Attachment number » ; nom de fichier « Select filename » | — |  |
| 35 | 115 | POP3 > Disk Item > Load Mail From Disk |  |  | nom de fichier « Select filename » | — |  |
| 36 | 116 | POP3 > Disk Item > Free Mail From Memory |  |  |  | — |  |
| 37 | 117 | SMTP > Set Response Buffer Size |  |  | expression numérique « Size of the buffer in number of responses » | — |  |
| 38 | 118 | POP3 > Set Response Buffer Size |  |  | expression numérique « Size of the buffer in number of responses » | — |  |
| 39 | 119 | SMTP > Message > Headers > Set Priority |  |  | expression numérique « Set priority (1 = high, 3 = normal, 5 = low) » | — |  |
| 40 | 120 | POP3 > Receiving Progress > Abort Receiving |  |  |  | — |  |
| 41 | 121 | SMTP > Sending Progress > Abort Sending |  |  |  | — |  |
| 42 | 122 | SMTP > Connect to Server (SSL) |  |  | expression chaîne « Server address » ; expression numérique « Authentication method (0 = None, 1 = Cram MD5, 2 = Authenticate, 3 = Plain » ; expression chaîne « Username » ; expression chaîne « Password » ; expression numérique « Port (Usually 25 or 465 if SSL) » ; expression numérique « 1 to use SSL, otherwise 0 » | — |  |
| 43 | 123 | POP3 > Connect to Server (SSL) |  |  | expression chaîne « Server address » ; expression chaîne « Username » ; expression chaîne « Password » ; expression numérique « Port (Usually 110 or 995 if SSL) » ; expression numérique « 1 to use SSL, otherwise 0 » | — |  |
| 44 | 124 | SMTP > Proxy Settings > Set Proxy Type |  |  | expression numérique « 0 = None, 1 = Socks4, 2 = Socks5, 3 = HTTP » | — |  |
| 45 | 125 | SMTP > Proxy Settings > Set Proxy Server |  |  | expression chaîne « Address of the proxy server » | — |  |
| 46 | 126 | SMTP > Proxy Settings > Set Proxy Port |  |  | expression numérique « Proxy port » | — |  |
| 47 | 127 | SMTP > Proxy Settings > Set Local Bound Address |  |  | expression chaîne « Local bound address (empty if not needed) » | — |  |
| 48 | 128 | SMTP > Proxy Settings > Set Proxy Username |  |  | expression chaîne « Username » | — |  |
| 49 | 129 | SMTP > Proxy Settings > Set Proxy Password |  |  | expression chaîne « Password » | — |  |
| 50 | 130 | SMTP > Proxy Settings > Set HTTP Agent |  |  | expression chaîne « HTTP user agent » | — |  |
| 51 | 131 | POP3 > Proxy Settings > Set Proxy Type |  |  | expression numérique « 0 = None, 1 = Socks4, 2 = Socks5, 3 = HTTP » | — |  |
| 52 | 132 | POP3 > Proxy Settings > Set Proxy Server |  |  | expression chaîne « Address of the proxy server » | — |  |
| 53 | 133 | POP3 > Proxy Settings > Set Proxy Port |  |  | expression numérique « Proxy port » | — |  |
| 54 | 134 | POP3 > Proxy Settings > Set Local Bound Address |  |  | expression chaîne « Local bound address (empty if not needed) » | — |  |
| 55 | 135 | POP3 > Proxy Settings > Set Proxy Username |  |  | expression chaîne « Username » | — |  |
| 56 | 136 | POP3 > Proxy Settings > Set Proxy Password |  |  | expression chaîne « Password » | — |  |
| 57 | 137 | POP3 > Proxy Settings > Set HTTP Agent |  |  | expression chaîne « HTTP user agent » | — |  |
| 58 | 138 | POP3 > DisconnectEx |  |  | expression numérique « 1 to try to disconnect gracefully, otherwise 0 » | — |  |
| 59 | 139 | SMTP > DisconnectEx |  |  | expression numérique « 1 to try to disconnect gracefully, otherwise 0 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | POP3 > Server Functions > Get Total Number of Mails |  |  |  | — |  |
| 1 | 81 | POP3 > Server Functions > Get Total Size |  |  |  | — |  |
| 2 | 82 | POP3 > Server Functions > Get Message Size |  |  | nombre | — |  |
| 3 | 83 | POP3 > Server Functions > Get Message ID |  |  | nombre → chaîne | — |  |
| 4 | 84 | POP3 > Server Functions > Get Timeout |  |  |  | — |  |
| 5 | 85 | POP3 > Received Items > Get Message Text |  |  | nombre → chaîne | — |  |
| 6 | 86 | POP3 > Server Functions > Get Message Header |  |  | nombre → chaîne | — |  |
| 7 | 87 | POP3 > Received Items > Attachments > Get Number of Attachments |  |  | nombre | — |  |
| 8 | 88 | POP3 > Received Items > Body > Get Raw Message Body |  |  | nombre → chaîne | — |  |
| 9 | 89 | POP3 > Received Items > Headers > Get Subject |  |  | nombre → chaîne | — |  |
| 10 | 90 | POP3 > Received Items > Headers > Get From |  |  | nombre → chaîne | — |  |
| 11 | 91 | POP3 > Received Items > Headers > Get Date |  |  | nombre → chaîne | — |  |
| 12 | 92 | POP3 > Received Items > Headers > Get To |  |  | nombre → chaîne | — |  |
| 13 | 93 | POP3 > Received Items > Headers > Get CC |  |  | nombre → chaîne | — |  |
| 14 | 94 | POP3 > Received Items > Headers > Get Reply To |  |  | nombre → chaîne | — |  |
| 15 | 95 | POP3 > Server Functions > Get Response |  |  | nombre → chaîne | — |  |
| 16 | 96 | SMTP > Server Functions > Get Response |  |  | nombre → chaîne | — |  |
| 17 | 97 | SMTP > Server Functions > Get Last Response Code |  |  |  | — |  |
| 18 | 98 | SMTP > Server Functions > Get Timeout |  |  |  | — |  |
| 19 | 99 | SMTP > Message Functions > Get Recipients > TO > Number of Recipients |  |  |  | — |  |
| 20 | 100 | SMTP > Message Functions > Get Recipients > TO > Get Recipient |  |  | nombre → chaîne | — |  |
| 21 | 101 | SMTP > Message Functions > Is MIME Encoded |  |  |  | — |  |
| 22 | 102 | SMTP > Message Functions > Get Recipients |  |  | → chaîne | — |  |
| 23 | 103 | SMTP > Message Functions > Headers > Get Custom Header |  |  | nombre → chaîne | — |  |
| 24 | 104 | SMTP > Message Functions > Headers > Number of Custom Headers |  |  |  | — |  |
| 25 | 105 | SMTP > Message Functions > Headers > Get From |  |  | → chaîne | — |  |
| 26 | 106 | SMTP > Message Functions > Headers > Get Subject |  |  | → chaîne | — |  |
| 27 | 107 | SMTP > Message Functions > Headers > Get X-Mailer |  |  | → chaîne | — |  |
| 28 | 108 | SMTP > Message Functions > Get Recipients > CC > Number of Recipients |  |  |  | — |  |
| 29 | 109 | SMTP > Message Functions > Get Recipients > CC > Get Recipient |  |  | nombre → chaîne | — |  |
| 30 | 110 | SMTP > Message Functions > Get Recipients > BCC > Number of Recipients |  |  |  | — |  |
| 31 | 111 | SMTP > Message Functions > Get Recipients > BCC > Get Recipient |  |  | nombre → chaîne | — |  |
| 32 | 112 | SMTP > Message Functions > Get Recipients > TO > Get Recipient Address |  |  | nombre → chaîne | — |  |
| 33 | 113 | SMTP > Message Functions > Get Recipients > CC > Get Recipient Address |  |  | nombre → chaîne | — |  |
| 34 | 114 | SMTP > Message Functions > Get Recipients > BCC > Get Recipient Address |  |  | nombre → chaîne | — |  |
| 35 | 115 | SMTP > Message Functions > Get Recipients > TO > Get Recipient Name |  |  | nombre → chaîne | — |  |
| 36 | 116 | SMTP > Message Functions > Get Recipients > CC > Get Recipient Name |  |  | nombre → chaîne | — |  |
| 37 | 117 | SMTP > Message Functions > Get Recipients > BCC > Get Recipient Name |  |  | nombre → chaîne | — |  |
| 38 | 118 | POP3 > Received Items > Headers > Get a Header Item |  |  | nombre ; chaîne ; nombre → chaîne | — |  |
| 39 | 119 | POP3 > Server Functions > Headers > Get Subject |  |  | nombre → chaîne | — |  |
| 40 | 120 | POP3 > Server Functions > Headers > Get From |  |  | nombre → chaîne | — |  |
| 41 | 121 | POP3 > Server Functions > Headers > Get Date |  |  | nombre → chaîne | — |  |
| 42 | 122 | POP3 > Server Functions > Headers > Get To |  |  | nombre → chaîne | — |  |
| 43 | 123 | POP3 > Server Functions > Headers > Get CC |  |  | nombre → chaîne | — |  |
| 44 | 124 | POP3 > Server Functions > Headers > Get Reply To |  |  | nombre → chaîne | — |  |
| 45 | 125 | POP3 > Server Functions > Headers > Get a Header Item |  |  | nombre ; chaîne ; nombre → chaîne | — |  |
| 46 | 126 | POP3 > Received Items > Attachments > Get Attachment Name |  |  | nombre ; nombre → chaîne | — |  |
| 47 | 127 | POP3 > Received Items > Body > Get Plain Text |  |  | nombre → chaîne | — |  |
| 48 | 128 | POP3 > Received Items > Body > Get HTML Text |  |  | nombre → chaîne | — |  |
| 49 | 129 | POP3 > Disk Item > Headers > Get Subject |  |  | → chaîne | — |  |
| 50 | 130 | POP3 > Disk Item > Headers > Get From |  |  | → chaîne | — |  |
| 51 | 131 | POP3 > Disk Item > Headers > Get Date |  |  | → chaîne | — |  |
| 52 | 132 | POP3 > Disk Item > Headers > Get To |  |  | → chaîne | — |  |
| 53 | 133 | POP3 > Disk Item > Headers > Get CC |  |  | → chaîne | — |  |
| 54 | 134 | POP3 > Disk Item > Headers > Get Reply To |  |  | → chaîne | — |  |
| 55 | 135 | POP3 > Disk Item > Headers > Get a Header Item |  |  | chaîne ; nombre → chaîne | — |  |
| 56 | 136 | POP3 > Disk Item > Get Message Text |  |  | → chaîne | — |  |
| 57 | 137 | POP3 > Disk Item > Get Message Header |  |  | → chaîne | — |  |
| 58 | 138 | POP3 > Disk Item > Attachments > Get Number of Attachments |  |  |  | — |  |
| 59 | 139 | POP3 > Disk Item > Body > Get Raw Message Body |  |  | → chaîne | — |  |
| 60 | 140 | POP3 > Disk Item > Attachments > Get Attachment Name |  |  | nombre → chaîne | — |  |
| 61 | 141 | POP3 > Disk Item > Body > Get Plain Text |  |  | → chaîne | — |  |
| 62 | 142 | POP3 > Disk Item > Body > Get HTML Text |  |  | → chaîne | — |  |
| 63 | 143 | SMTP > Server Functions > Get Number of Responses |  |  |  | — |  |
| 64 | 144 | POP3 > Server Functions > Get Number of Responses |  |  |  | — |  |
| 65 | 145 | POP3 > Receiving Progress > Get Total Bytes to Receive |  |  |  | — |  |
| 66 | 146 | SMTP > Sending Progress > Get Total Bytes to Send |  |  |  | — |  |
| 67 | 147 | POP3 > Receiving Progress > Get Bytes Received |  |  |  | — |  |
| 68 | 148 | SMTP > Sending Progress > Get Bytes Sent |  |  |  | — |  |
| 69 | 149 | SMTP > Server Functions > Proxy settings > Get Proxy Type |  |  |  | — |  |
| 70 | 150 | SMTP > Server Functions > Proxy settings > Get Proxy Server |  |  | → chaîne | — |  |
| 71 | 151 | SMTP > Server Functions > Proxy settings > Get Proxy Port |  |  |  | — |  |
| 72 | 152 | SMTP > Server Functions > Proxy settings > Get Local Bound Address |  |  | → chaîne | — |  |
| 73 | 153 | SMTP > Server Functions > Proxy settings > Get Proxy User Name |  |  | → chaîne | — |  |
| 74 | 154 | SMTP > Server Functions > Proxy settings > Get Proxy Password |  |  | → chaîne | — |  |
| 75 | 155 | SMTP > Server Functions > Proxy settings > Get Proxy HTTP Agent |  |  | → chaîne | — |  |
| 76 | 156 | POP3 > Server Functions > Proxy Settings > Get Proxy Type |  |  |  | — |  |
| 77 | 157 | POP3 > Server Functions > Proxy Settings > Get Proxy Server |  |  | → chaîne | — |  |
| 78 | 158 | POP3 > Server Functions > Proxy Settings > Get Proxy Port |  |  |  | — |  |
| 79 | 159 | POP3 > Server Functions > Proxy Settings > Get Local Bound Address |  |  | → chaîne | — |  |
| 80 | 160 | POP3 > Server Functions > Proxy Settings > Get Proxy User Name |  |  | → chaîne | — |  |
| 81 | 161 | POP3 > Server Functions > Proxy Settings > Get Proxy Password |  |  | → chaîne | — |  |
| 82 | 162 | POP3 > Server Functions > Proxy Settings > Get Proxy HTTP Agent |  |  | → chaîne | — |  |
