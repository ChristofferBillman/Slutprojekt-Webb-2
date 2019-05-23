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
* SASS
* Sockets

Almänna dataskyddslagen gäller inte i det här projektet, eftersom att inga personuppgifter sparas. Undantag kan ses till namn, men hemsidan tillfrågar inte för och efternamn, utan bara förnamn eller annat namn, vilket inte räcker för att det ska anses personuppgifter. Om hemsidan skulle behandla personuppgifter så gäller lagen. Detta därför att jag tolkar en hemsida som drivs av enskild person, som behandlar personuppgifter som en sociokulturell verksamhet. På europeiska kommissionen står det följande: 

"Om en enskild person använder personuppgifter utanför den personliga sfären, till exempel för sociokulturell eller ekonomisk verksamhet, måste dataskyddslagstiftningen respekteras." - https://ec.europa.eu/info/law/law-topic/data-protection/reform/what-does-general-data-protection-regulation-gdpr-govern_sv


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

### Pass #5:
Idag har jag jobbat med auth. Jag lägger till en token i en cookie, som skickas till servern varje gång användaren requestar en ny sida. Tokenen kollas då i servern och om den stämmer så skickas genereras sidan för just den användaren och skickas.
Nästa pass har jag tänkt att börja arbete på själva chattfunktionen samt att göra så att användaren automatiskt loggas in om en giltig token finns. 
Tid: 180 min.

### Pass #6:
Tid: 
Börjat: 10:24
Slutat: 11:20

Annat tillfälle: typ 2h

Annat tillfälle: 30 min effektiv tid till att fixa konsol-loggningar.
Lunchrast: 20 min.

### Pass #7:
Idag har jag i stort sett bara jobbat med att få till css för själva chattfönstret. Nu är det färdigt, nästa lektion ska jag fortsätta med det samt påbörja skapandet av själva funktionaliteten.
180 min

### Pass #8:
Idag har jag börjat med chattfunktionen. Jag tänkte generera alla öppna chatter sen tidigare sessioner via pug, men har bestämt mig för att till en början är det enklare att bara inte spara sessionsdata och sedan bara öppna chatterna genom klienten.
180 min

### Pass #9:
Idag så har jag försökt att göra så att användaren kan öppna och stänga chattar. Jag har aldrig manipulerat dom-trädet genom klienten efter sidan har laddats, så det är lite av en utmaning. Nästa tillfälle ska jag fortsätta med det.

Färgschemats som ska användas har också ändrats. Det nya färgschemat kan ses i mockupsen.
180min

### Pass #10:
Idag har jag försökt att fixa så att pug laddar in alla ens vänner på hemsidan, så att man kan öppna en chatt. Jag har väldigt mycket problem med callbacks och har försökt att fixa allt med databas etc.
Tid: 180 min

uppdatering: callbacksen fungerar som de ska nu. Nu laddas 10 av dina vänner in i sidan. Har också lagt till sökfunktionen, så nu kan man söka efter användare. Nästa pass så är tanken att man ska kunna lägga till vänner.

Tid: circa 180 min





