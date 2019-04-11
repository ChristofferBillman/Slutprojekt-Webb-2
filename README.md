# Slutprojekt-Webb-2

## __Bakgrund__
Sidan ska vara ett typ av socialt media, primärt en chattapp där man kan skriva med alla som har den. För att genomföra detta krävs det att man skapar ett konto och inloggningssystem samt vänsystem. Målgruppen för sidan är i stort sett alla.

## __Planering__
Jag tänker att det till en början kommer finnas två sidor. En loginsida, som sedan redirectar en till huvudsidan där alla användarens chattar finns. Om det finns tid över kan jag försöka utveckla ett mer omfattande socialt nätverk, där man kan skapa inlägg, ladda upp filer etc. Det som krävs för att skapa chattappen är en väldigt bra grund att bygga vidare på.

Jag kommer att använda node med express för att bygga projektet, framförallt för att PUG finns i node men också för att jag personligen är mest bekant med express och node. För att skicka data mellan server och klient använder jag npm-paketet socket.io.

I det här projektet tas följande områden med:

* Databashantering
* Node express
* PUG
* Sockets

### Tidplan:
| pass | att göra |
| ---- | -------- |
| 1 | Passerat |
| 2 | Planering och design |
| 3 | Design färdig.|
| 4 | Sätta upp databas och skapa html/css |
| 5 | Skapa inloggning |
| 6 | Skapa chatt |
| 7 | Skapa chatt |
| 8 | Färdigställ |
| 9 | Finslipa och skriva utvärdering |

## __Projektlogg__

### Pass #1:
Idag har jag gjort skisser över webbappen.
Tid: ~60 min

### Pass #2:
Idag så har jag satt upp ett grundläggande projektstrutur för express. Jag har också slutfört min planering och bestämt en struktur för databasen. Databas skapad och kopplad till servern.
Tid: 160 min

#### Databasstruktur:

Tabell 1:
| *id* | user | password | friends |
| ---- | ---- | -------- | --------|

Tabell 2:
| id | *userid* | recipient | message | timesent | status |
| -- | -------- | --------- | ------- | -------- | ------ |

Recipient är userid:et av användaren som ska motta meddelandet.
Staus är vilket status meddelandet har, skickad, mottagen eller läst.

### Pass #3:
Idag har jag jobbat på designen. Skisser är färdiga och jag har tagit fram ett färgschema och typsnitt. Utöver det har jag börjat skapa html och css. Grunden är färdig. Jag har också börjat arbeta på ett mörkt läge för appen.
```
Headings: Secular one.

Brödtext: Ubuntu.

Ingress: Ubuntu 700.

Färgschema: #00A3EF (Blå), #4B88A2 (Mörkare blå), #BB0A21 (Röd), #252627 (svart/grå), #FFF9FB (vit)
```
Tid: 180 min + 30 min 

Utanför pass #3:
Mörkt läge färdigställt.
Tid: 60 min

Obestämt. börjat: 15:40
Lärt mig hur callback-funktioner fungerar. Skriver funktioner för CRUD. Lämnat crud nu för att börja med socket.io och login.
Commmit: 20:23

### Pass #4:
Idag så har jag bara jobbat med backend, framförallt att försöka färdigställa loginsystemet, det fungerar att logga in men jag funderar på att lägga till ett system som kollar klientens token varje gång den requestar en ny sida. Det ska jag jobba på nästa lektion.
Tid: 180 min.







