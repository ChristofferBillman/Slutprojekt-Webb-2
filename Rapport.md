## __Utvärdering__

Total tid spenderad:
33 timmar.

### Inledning
Syftet med arbetet var att skapa en chattapp. Målet var att skapa ett konto, lägga till vänner samt chatta med vänner. Målgruppen har jag bestämt mig att att vara åldersgruppen 13-25.

### Bakgrund
För projektet har jag använt mig att node.js och frameworket express. Anledningen till valet av node + express var för att jag var bekant med det sedan tidigare, och kände att jag var mest bekväm med det. Jag har jobbat med javascript på klientsidan mycket förut och använt node tidigare. Node har också väldigt enkelt system för att använda andras kod, eller moduler som de kallas. Med hjälp av deras pakethanterare npm kan man med ett kommando installera en modul, och med endast en rad kod inkludera modulen i sin egna kod. Npm är även väldigt stort, det har många moduler och många stödjer det.

Min planering finns i README att läsa. Min planering är ganska vag, men det är eftersom att det är svårt att planera saker i förväg om man inte vet hur man ska ta sig till väga.

### Utvärdering
Det som jag tyckt varit bra är att jag har lärt mig mycket. Det har varit lite svårt fram och tillbaka med har tagit mig igenom det mesta. Det enda jag inte tog mig igenom är AJAX-biten, där det var tänkt att kunna öppna och stänga olika komponenter i hemsidan som fönster. Loginsystem och sökning efter vänner fungerar.

Min tanke var väl någon stans att använda socket.io för att ladda in saker på sidan utan att den hade behövt laddas om, och att jag skulle använda mig att bara PUG för att generera sidan. Jag insåg efter ett tag att det hade varit mer lämpligt att använda en ren AJAX-ingång snarare än PUG.

Ännu något som kunde gått bättre var css/html. Jag borde ha fokuserat mer på att få hemsidan att fungera än att få den se bra ut. Jag valde att designa hemsidan först. Dessutom så valde jag på digitalt skapande att designa hemsidan, och då hade jag redan gjort en design på webbutvecklingen. Det jag menar är att jag slösade onödig tid i början på design.

Jag har testat min webbplats med wave, ett verktyg för att se om ens hemsida är tillgänglig. Det enda wave hade att påpeka angående tillgängligheten är att det inte finns en tillhörande label till varje input-fält samt att en del element (blåa knappar med vit text) har dålig kontrast. Jag håller allt om allt som wave påpekar, kontrasten kan förbättras och det är viktigt att det är tydligt vad som ska skrivas var i inputs. Jag vill behålla färgen som används, och tänker istället att jag gör det genom att göra texten fetstil istället så den blir tydligare. Angående labels så tycker jag att det är onödigt att ha både en label och placeholder. Tanken var att placeholdern ska agera som label medan fältet är inaktivt, och sedan när användaren klickar på fältet så åker placeholdertexten upp och ur vägen när användaren skriver. Det är samma typ av input som material.io använder.

### Sammanfattning
Det finns mycket utrymme för fortsatt utveckling på projektet. Däremot så har jag lärt mig en del grejer, och inser nu att jag borde planerat hur jag skulle gjort allt på ett annat sätt.

Det som kan förbättras är min arbetsprocess. Jag borde commita oftare och kommentera arbetet mer utförligt.

Ett problem under arbetet är att jag enkelt tappar fokus, jag glömmer bort vad det är jag egentligen håller på med och hamnar enkelt på sidospår och börjar göra annat än det som jag planerat att göra. Jag tänker att man kan undvika detta genom att sätta upp en tydligare planering, men jag tror också att det kan bero på att man är ny till mycket. Det är svårt att veta och planera i förväg om man inte vet vad man ger sig in i.

