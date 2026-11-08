# Extension email

- File: `email.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | POP3 > Is Connected to Server |  |  |  |
| 1 | -82 | SMTP > Is Connected to Server |  |  |  |
| 2 | -83 | POP3 > Mail Received |  |  | numeric expression “Mail number” |
| 3 | -84 | SMTP > Was Last Message Sent |  |  |  |
| 4 | -85 | POP3 > Received Mail > Message Has Plain Text |  |  | numeric expression “Mail number” |
| 5 | -86 | POP3 > Received Mail > Message Has HTML Text |  |  | numeric expression “Mail number” |
| 6 | -87 | POP3 > Disk Item > Message Has Plain Text |  |  |  |
| 7 | -88 | POP3 > Disk Item > Message Has HTML Text |  |  |  |
| 8 | -89 | SMTP > Enough Info to Send |  |  |  |
| 9 | -90 | Is Valid Address |  |  | string expression “Is Valid Address” |
| 10 | -91 | Are There Threads Running |  |  |  |
| 11 | -92 | POP3 > Is Waiting Response |  |  |  |
| 12 | -93 | SMTP > Is Waiting Response |  |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | POP3 > Connect to Server |  |  | string expression “Server address”; string expression “Username”; string expression “Password”; numeric expression “Port (Usually 110 or 995 if SSL)” |
| 1 | 81 | POP3 > Disconnect |  |  |  |
| 2 | 82 | POP3 > Delete E-mail |  |  | numeric expression “Mail number” |
| 3 | 83 | POP3 > Retrieve E-mail |  |  | numeric expression “Mail number” |
| 4 | 84 | POP3 > Set Timeout |  |  | numeric expression “Timeout in ms” |
| 5 | 85 | POP3 > Noop |  |  |  |
| 6 | 86 | POP3 > Reset |  |  |  |
| 7 | 87 | POP3 > UIDL |  |  |  |
| 8 | 88 | SMTP > Connect to Server |  |  | string expression “Server address”; numeric expression “Authentication method (0 = None, 1 = Cram MD5, 2 = Authenticate, 3 = Plain”; string expression “Username”; string expression “Password”; numeric expression “Port (Usually 25 or 465 if SSL)”; string expression “Local bound address (empty if not needed)” |
| 9 | 89 | SMTP > Disconnect |  |  |  |
| 10 | 90 | SMTP > Set Timeout |  |  | numeric expression “Timeout in ms” |
| 11 | 91 | SMTP > Message > Set Recipients > TO |  |  | string expression “Recipients. May be separated by ',' or ';'” |
| 12 | 92 | SMTP > Message > Remove Recipients > TO |  |  | numeric expression “Select index” |
| 13 | 93 | SMTP > Message > Headers > Custom Headers > Add Custom Header |  |  | string expression “Custom header” |
| 14 | 94 | SMTP > Message > Save to Disk |  |  | file name “Select filename” |
| 15 | 95 | SMTP > Message > Headers > Set From |  |  | string expression “Set from” |
| 16 | 96 | SMTP > Message > Headers > Set Subject |  |  | string expression “Set subject” |
| 17 | 97 | SMTP > Message > Headers > Set X-Mailer |  |  | string expression “Set X-Mailer” |
| 18 | 98 | SMTP > Message > Headers > Set Reply To |  |  | string expression “Set reply to” |
| 19 | 99 | SMTP > Message > Add Attachment |  |  | file name “Select filename” |
| 20 | 100 | SMTP > Message > Create New Message |  |  | numeric expression “Mime encoded? (0 = false, 1 = true)”; numeric expression “HTML encoded? (0 = false, 1 = true)”; string expression “Charset (blank = default)” |
| 21 | 101 | SMTP > Message > Set Recipients > CC |  |  | string expression “Recipients. May be separated by ',' or ';'” |
| 22 | 102 | SMTP > Message > Remove Recipients > CC |  |  | numeric expression “Select index” |
| 23 | 103 | SMTP > Message > Set Recipients > BCC |  |  | string expression “Recipients. May be separated by ',' or ';'” |
| 24 | 104 | SMTP > Message > Remove Recipients > BCC |  |  | numeric expression “Select index” |
| 25 | 105 | SMTP > Message > Headers > Custom Headers > Remove Custom Header |  |  | numeric expression “Select index” |
| 26 | 106 | SMTP > Message > Send Message |  |  |  |
| 27 | 107 | SMTP > Message > Add Body Text |  |  | string expression “Add body text” |
| 28 | 108 | POP3 > Received Items > Save Mail on Disk |  |  | numeric expression “Mail number”; file name “Select filename” |
| 29 | 109 | POP3 > Received Items > Free a Received Mail |  |  | numeric expression “Mail number” |
| 30 | 110 | POP3 > Received Items > Free All Received Mail |  |  |  |
| 31 | 111 | Set Debug |  |  | numeric expression “1 = on, 0 = off” |
| 32 | 112 | Select Debug File |  |  | file name “Select filename” |
| 33 | 113 | POP3 > Received Items > Save an Attachment |  |  | numeric expression “Mail number”; numeric expression “Attachment number”; file name “Select filename” |
| 34 | 114 | POP3 > Disk Item > Save an Attachment |  |  | numeric expression “Attachment number”; file name “Select filename” |
| 35 | 115 | POP3 > Disk Item > Load Mail From Disk |  |  | file name “Select filename” |
| 36 | 116 | POP3 > Disk Item > Free Mail From Memory |  |  |  |
| 37 | 117 | SMTP > Set Response Buffer Size |  |  | numeric expression “Size of the buffer in number of responses” |
| 38 | 118 | POP3 > Set Response Buffer Size |  |  | numeric expression “Size of the buffer in number of responses” |
| 39 | 119 | SMTP > Message > Headers > Set Priority |  |  | numeric expression “Set priority (1 = high, 3 = normal, 5 = low)” |
| 40 | 120 | POP3 > Receiving Progress > Abort Receiving |  |  |  |
| 41 | 121 | SMTP > Sending Progress > Abort Sending |  |  |  |
| 42 | 122 | SMTP > Connect to Server (SSL) |  |  | string expression “Server address”; numeric expression “Authentication method (0 = None, 1 = Cram MD5, 2 = Authenticate, 3 = Plain”; string expression “Username”; string expression “Password”; numeric expression “Port (Usually 25 or 465 if SSL)”; numeric expression “1 to use SSL, otherwise 0” |
| 43 | 123 | POP3 > Connect to Server (SSL) |  |  | string expression “Server address”; string expression “Username”; string expression “Password”; numeric expression “Port (Usually 110 or 995 if SSL)”; numeric expression “1 to use SSL, otherwise 0” |
| 44 | 124 | SMTP > Proxy Settings > Set Proxy Type |  |  | numeric expression “0 = None, 1 = Socks4, 2 = Socks5, 3 = HTTP” |
| 45 | 125 | SMTP > Proxy Settings > Set Proxy Server |  |  | string expression “Address of the proxy server” |
| 46 | 126 | SMTP > Proxy Settings > Set Proxy Port |  |  | numeric expression “Proxy port” |
| 47 | 127 | SMTP > Proxy Settings > Set Local Bound Address |  |  | string expression “Local bound address (empty if not needed)” |
| 48 | 128 | SMTP > Proxy Settings > Set Proxy Username |  |  | string expression “Username” |
| 49 | 129 | SMTP > Proxy Settings > Set Proxy Password |  |  | string expression “Password” |
| 50 | 130 | SMTP > Proxy Settings > Set HTTP Agent |  |  | string expression “HTTP user agent” |
| 51 | 131 | POP3 > Proxy Settings > Set Proxy Type |  |  | numeric expression “0 = None, 1 = Socks4, 2 = Socks5, 3 = HTTP” |
| 52 | 132 | POP3 > Proxy Settings > Set Proxy Server |  |  | string expression “Address of the proxy server” |
| 53 | 133 | POP3 > Proxy Settings > Set Proxy Port |  |  | numeric expression “Proxy port” |
| 54 | 134 | POP3 > Proxy Settings > Set Local Bound Address |  |  | string expression “Local bound address (empty if not needed)” |
| 55 | 135 | POP3 > Proxy Settings > Set Proxy Username |  |  | string expression “Username” |
| 56 | 136 | POP3 > Proxy Settings > Set Proxy Password |  |  | string expression “Password” |
| 57 | 137 | POP3 > Proxy Settings > Set HTTP Agent |  |  | string expression “HTTP user agent” |
| 58 | 138 | POP3 > DisconnectEx |  |  | numeric expression “1 to try to disconnect gracefully, otherwise 0” |
| 59 | 139 | SMTP > DisconnectEx |  |  | numeric expression “1 to try to disconnect gracefully, otherwise 0” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | POP3 > Server Functions > Get Total Number of Mails |  |  |  |
| 1 | 81 | POP3 > Server Functions > Get Total Size |  |  |  |
| 2 | 82 | POP3 > Server Functions > Get Message Size |  |  | number |
| 3 | 83 | POP3 > Server Functions > Get Message ID |  |  | number → string |
| 4 | 84 | POP3 > Server Functions > Get Timeout |  |  |  |
| 5 | 85 | POP3 > Received Items > Get Message Text |  |  | number → string |
| 6 | 86 | POP3 > Server Functions > Get Message Header |  |  | number → string |
| 7 | 87 | POP3 > Received Items > Attachments > Get Number of Attachments |  |  | number |
| 8 | 88 | POP3 > Received Items > Body > Get Raw Message Body |  |  | number → string |
| 9 | 89 | POP3 > Received Items > Headers > Get Subject |  |  | number → string |
| 10 | 90 | POP3 > Received Items > Headers > Get From |  |  | number → string |
| 11 | 91 | POP3 > Received Items > Headers > Get Date |  |  | number → string |
| 12 | 92 | POP3 > Received Items > Headers > Get To |  |  | number → string |
| 13 | 93 | POP3 > Received Items > Headers > Get CC |  |  | number → string |
| 14 | 94 | POP3 > Received Items > Headers > Get Reply To |  |  | number → string |
| 15 | 95 | POP3 > Server Functions > Get Response |  |  | number → string |
| 16 | 96 | SMTP > Server Functions > Get Response |  |  | number → string |
| 17 | 97 | SMTP > Server Functions > Get Last Response Code |  |  |  |
| 18 | 98 | SMTP > Server Functions > Get Timeout |  |  |  |
| 19 | 99 | SMTP > Message Functions > Get Recipients > TO > Number of Recipients |  |  |  |
| 20 | 100 | SMTP > Message Functions > Get Recipients > TO > Get Recipient |  |  | number → string |
| 21 | 101 | SMTP > Message Functions > Is MIME Encoded |  |  |  |
| 22 | 102 | SMTP > Message Functions > Get Recipients |  |  | → string |
| 23 | 103 | SMTP > Message Functions > Headers > Get Custom Header |  |  | number → string |
| 24 | 104 | SMTP > Message Functions > Headers > Number of Custom Headers |  |  |  |
| 25 | 105 | SMTP > Message Functions > Headers > Get From |  |  | → string |
| 26 | 106 | SMTP > Message Functions > Headers > Get Subject |  |  | → string |
| 27 | 107 | SMTP > Message Functions > Headers > Get X-Mailer |  |  | → string |
| 28 | 108 | SMTP > Message Functions > Get Recipients > CC > Number of Recipients |  |  |  |
| 29 | 109 | SMTP > Message Functions > Get Recipients > CC > Get Recipient |  |  | number → string |
| 30 | 110 | SMTP > Message Functions > Get Recipients > BCC > Number of Recipients |  |  |  |
| 31 | 111 | SMTP > Message Functions > Get Recipients > BCC > Get Recipient |  |  | number → string |
| 32 | 112 | SMTP > Message Functions > Get Recipients > TO > Get Recipient Address |  |  | number → string |
| 33 | 113 | SMTP > Message Functions > Get Recipients > CC > Get Recipient Address |  |  | number → string |
| 34 | 114 | SMTP > Message Functions > Get Recipients > BCC > Get Recipient Address |  |  | number → string |
| 35 | 115 | SMTP > Message Functions > Get Recipients > TO > Get Recipient Name |  |  | number → string |
| 36 | 116 | SMTP > Message Functions > Get Recipients > CC > Get Recipient Name |  |  | number → string |
| 37 | 117 | SMTP > Message Functions > Get Recipients > BCC > Get Recipient Name |  |  | number → string |
| 38 | 118 | POP3 > Received Items > Headers > Get a Header Item |  |  | number; string; number → string |
| 39 | 119 | POP3 > Server Functions > Headers > Get Subject |  |  | number → string |
| 40 | 120 | POP3 > Server Functions > Headers > Get From |  |  | number → string |
| 41 | 121 | POP3 > Server Functions > Headers > Get Date |  |  | number → string |
| 42 | 122 | POP3 > Server Functions > Headers > Get To |  |  | number → string |
| 43 | 123 | POP3 > Server Functions > Headers > Get CC |  |  | number → string |
| 44 | 124 | POP3 > Server Functions > Headers > Get Reply To |  |  | number → string |
| 45 | 125 | POP3 > Server Functions > Headers > Get a Header Item |  |  | number; string; number → string |
| 46 | 126 | POP3 > Received Items > Attachments > Get Attachment Name |  |  | number; number → string |
| 47 | 127 | POP3 > Received Items > Body > Get Plain Text |  |  | number → string |
| 48 | 128 | POP3 > Received Items > Body > Get HTML Text |  |  | number → string |
| 49 | 129 | POP3 > Disk Item > Headers > Get Subject |  |  | → string |
| 50 | 130 | POP3 > Disk Item > Headers > Get From |  |  | → string |
| 51 | 131 | POP3 > Disk Item > Headers > Get Date |  |  | → string |
| 52 | 132 | POP3 > Disk Item > Headers > Get To |  |  | → string |
| 53 | 133 | POP3 > Disk Item > Headers > Get CC |  |  | → string |
| 54 | 134 | POP3 > Disk Item > Headers > Get Reply To |  |  | → string |
| 55 | 135 | POP3 > Disk Item > Headers > Get a Header Item |  |  | string; number → string |
| 56 | 136 | POP3 > Disk Item > Get Message Text |  |  | → string |
| 57 | 137 | POP3 > Disk Item > Get Message Header |  |  | → string |
| 58 | 138 | POP3 > Disk Item > Attachments > Get Number of Attachments |  |  |  |
| 59 | 139 | POP3 > Disk Item > Body > Get Raw Message Body |  |  | → string |
| 60 | 140 | POP3 > Disk Item > Attachments > Get Attachment Name |  |  | number → string |
| 61 | 141 | POP3 > Disk Item > Body > Get Plain Text |  |  | → string |
| 62 | 142 | POP3 > Disk Item > Body > Get HTML Text |  |  | → string |
| 63 | 143 | SMTP > Server Functions > Get Number of Responses |  |  |  |
| 64 | 144 | POP3 > Server Functions > Get Number of Responses |  |  |  |
| 65 | 145 | POP3 > Receiving Progress > Get Total Bytes to Receive |  |  |  |
| 66 | 146 | SMTP > Sending Progress > Get Total Bytes to Send |  |  |  |
| 67 | 147 | POP3 > Receiving Progress > Get Bytes Received |  |  |  |
| 68 | 148 | SMTP > Sending Progress > Get Bytes Sent |  |  |  |
| 69 | 149 | SMTP > Server Functions > Proxy settings > Get Proxy Type |  |  |  |
| 70 | 150 | SMTP > Server Functions > Proxy settings > Get Proxy Server |  |  | → string |
| 71 | 151 | SMTP > Server Functions > Proxy settings > Get Proxy Port |  |  |  |
| 72 | 152 | SMTP > Server Functions > Proxy settings > Get Local Bound Address |  |  | → string |
| 73 | 153 | SMTP > Server Functions > Proxy settings > Get Proxy User Name |  |  | → string |
| 74 | 154 | SMTP > Server Functions > Proxy settings > Get Proxy Password |  |  | → string |
| 75 | 155 | SMTP > Server Functions > Proxy settings > Get Proxy HTTP Agent |  |  | → string |
| 76 | 156 | POP3 > Server Functions > Proxy Settings > Get Proxy Type |  |  |  |
| 77 | 157 | POP3 > Server Functions > Proxy Settings > Get Proxy Server |  |  | → string |
| 78 | 158 | POP3 > Server Functions > Proxy Settings > Get Proxy Port |  |  |  |
| 79 | 159 | POP3 > Server Functions > Proxy Settings > Get Local Bound Address |  |  | → string |
| 80 | 160 | POP3 > Server Functions > Proxy Settings > Get Proxy User Name |  |  | → string |
| 81 | 161 | POP3 > Server Functions > Proxy Settings > Get Proxy Password |  |  | → string |
| 82 | 162 | POP3 > Server Functions > Proxy Settings > Get Proxy HTTP Agent |  |  | → string |
