---
title: Kinesisk elbil - dataflyt utenfor EØS
date: 2024-12-20
author: Tor & Lion Cage Team
category: privacy
description: Historien om hvordan Lion Cage startet - Tor kjøpte en kinesisk elbil for å undersøke om dataene den samlet ble sendt ut av EØS. Dette arbeidet la grunnlaget for videre forskning.
---

# Kinesisk elbil - dataflyt utenfor EØS

Alt startet med et enkelt spørsmål: Hvor sendes dataene som min bil samler inn? Dette spørsmålet var utgangspunktet for det som skulle bli til Lion Cage-prosjektet.

## Hvordan det hele begynte

Da Tor kjøpte en kinesisk elbil i 2023, var han nysgjerrig på hva slags data bilen samlet inn og hvor denne informasjonen ble sendt. Som sikkerhetsinteressert person ville han ikke bare stole på produsentens ord, men faktisk undersøke det selv.

> "Det er én ting å lese om databeskyttelse i en brukerhåndbok, og noe helt annet å observere faktisk dataflyt i sanntid." - Tor, grunnlegger av Lion Cage

## Testoppsettet

For å undersøke dataflyten satte Tor opp et omfattende testmiljø:

### Teknisk infrastruktur

- **Nettverksovervåking**: Pakkeanalyse av all kommunikasjon fra bilen
- **DNS-logging**: Kartlegging av hvilke servere bilen kommuniserte med
- **Dekompilering av apper**: Analyse av bilens mobilapp for å forstå dataflyt
- **Geografisk sporing**: Identifisering av hvor servere fysisk befant seg

### Hva vi fant

Resultatene var oppsiktsvekkende:

1. **Kontinuerlig datainnsamling**: Bilen sendte data hver gang den var koblet til internett
2. **Utenfor EØS**: Mesteparten av dataene ble sendt til servere lokalisert utenfor det europeiske økonomiske samarbeidsområdet
3. **Omfattende informasjon**: Data inkluderte GPS-posisjon, kjørevaner, ladetidspunkter, og mer

## Kritiske funn

### Typer data som ble sendt ut

- **Posisjonsdata**: Nøyaktig GPS-posisjon ved jevne intervaller
- **Kjøremønster**: Akselerasjon, bremsing, svingmønster
- **Ladevaner**: Når, hvor og hvor lenge bilen lader
- **Tekniske data**: Batterihelse, rekkeviddeprognoser, feilkoder
- **Personlig informasjon**: Mobilnummer, e-post, betalingsinformasjon (via app)

### Hvor endte dataene?

Nettverksanalysen viste at data ble sendt til:

- Servere i Kina (hovedsakelig)
- Enkelte servere i USA
- Minimalt med data-prosessering innenfor EØS

## GDPR-implikasjoner

Funnene reiste viktige spørsmål om overholdelse av GDPR (General Data Protection Regulation):

- **Dataoverføring**: Er overføring til tredjeland lovlig?
- **Samtykke**: Har brukere gitt informert samtykke?
- **Databehandleravtaler**: Finnes det tilfredsstillende avtaler på plass?
- **Brukerrettigheter**: Kan brukere enkelt få innsyn i og slette sine data?

## Fra én bil til et prosjekt

Det som startet som én persons nysgjerrighet vokste raskt til noe større:

### Utvikling av Lion Cage

1. **Flere entusiaster**: Andre med teknisk kompetanse ble interessert
2. **Bredere testing**: Utvidet til å teste flere bilmodeller og produsenter
3. **Medieoppmerksomhet**: Funnene ble plukket opp av norske medier
4. **Myndighetskontakt**: Dialog med Datatilsynet og andre relevante myndigheter
5. **Vekst**: Fra én person til 10+ dedikerte medlemmer

## Produsentrespons

Etter publisering av våre funn:

- Produsenten bekreftet dataoverføringen til Kina
- Det ble lovet oppdateringer for å beholde mer data innenfor EØS
- Bedre informasjon til kunder om datainnsamling ble implementert

## Lærdommer og veien videre

Dette første prosjektet lærte oss mye:

### Viktigheten av åpenhet

Teknologiprodusenter må være åpne om hva deres produkter gjør. Kunder har rett til å vite.

### Behovet for uavhengig testing

Man kan ikke alltid stole på det produsentene sier. Uavhengig verifisering er nødvendig.

### Kraften i fellesskap

Når flere personer med ulik kompetanse samarbeider, kan man oppnå mye mer enn alene.

## Påvirkning

Vårt arbeid har ført til:

- Økt bevissthet om databeskyttelse i elbiler
- Spørsmål i Stortinget om sikkerheten til kinesiske elbiler
- Endringer i hvordan enkelte produsenter håndterer data
- Inspirasjonen til å teste andre teknologier (som busser)

## Konklusjon

Det som startet som ett enkelt spørsmål om én elbil har vokst til et dedikert team som jobber for sikkerhet gjennom åpenhet og transparens. Lion Cage fortsetter å teste, dokumentere og dele - fordi vi mener at kunnskap er nøkkelen til informerte valg.

Reisen har bare så vidt begynt.

---

*Lion Cage er nå en gruppe på 10+ personer som fortsetter arbeidet med å avdekke hvordan teknologi kan brukes mot eierens interesser. Vi jobber åpent og deler alt vi finner.*
