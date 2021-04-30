Evetros Test-Først Workshop
===

Dette kurset er opprinnelig holdt for Evetros utviklerteam, men er også publisert for det generelle publikum. 

Når test-først-paradigmet demonstreres for utviklere som ikke er vant med testing, er problemstilling som brukes som eksempel ofte altfor simpelt. Følgene av slike overforenklede programmeringsscenarier er at publikum ikke får observere fordelene med å skrive tester og kode inkrimentelt i korte tidsintervaller.

# En primitiv form for testing: Konsollen

Konsoll-logging (`print`, `echo`, `console.log`, etc) er en teknikk som innebærer å printe ut verdien til en variabel eller et objekt på visse punkter i kildekoden. Overfladisk sett virker denne testmetoden å være både enkel og produktiv, da variabler er et essensielt verktøy når mennesker kommanderer datamaskiner til å utføre beregninger/oppgaver.

Den mest åpenbare svakheten med denne enkle metoden er at det ikke er åpenbart hvordan man innkapsler hele eksekveringskonteksten til programmet man tester. Man kan fort fokusere på feil variabel, altså en som overhodet ikke er involvert i feilen man prøver å rette.

Skulle programmet kaste et unntak før det ankommer logge-instruksjonen får du ikke printet ut noenting, utenom feilen som hindret deg å kjøre loggeinstruksjonen, hvis kjøretidsmiljøet er såpass grei og forklarer deg hva som er galt med programmet som kræsjet.

Konsoll-logging pålegger utvikleren mye ekstra-arbeid i form av unyttig kode, og nevnte unyttige kode blir av og til med på lasset i produksjonsmiljøet, grunnet slurvete ryddearbeid i etterkant.

# Enter TDD

Test-først er en inkrementell uutviklingssyklus innen smidig utvikling hvis hovedfokus er at kildekoden til enhver tid skal ha fungert, altså være presentabel for et produksjonsmiljø, for et par minutter siden. Dette stramme tidsskjemaet for fungerende tillater svært begrensede feil i systemet, og man slipper lange debugging-sesjoner der man leter med lys og lykter etter en intrikat tilstand der feilen utløses.

Premisset for effektiviteten til Test-først-paradigmet er at man nedfeller tydelige og tilstrekkelige kravspesifikasjoner for programmet man skriver. Kravspekken trenger selvsagt ikke å være utfyllende og fullstendig, fordi ettersom koden har fungert innenfor et kort tidsrom siden, er den nødvendigvis meget fleksibel og modifiserbar. I test-først-prosjekter fanges programmerte feil opp med en gang de skrives.

Under testdrevet utvikling er det en selvfølge at du gjør deg kjent med egen kildekode enten du refaktorerer eller skriver en ny egenskap ved programvaren.

## [De tre bud](https://youtu.be/58jGpV2Cg50?t=1431)

TDD har forskjellige utforminger fra organisasjon til organisasjon, avhengig av hvor mye deduksjon man ønsker å legge inn i test-først-løkka, og derved øke den kognitive belastningen for utviklerne. Tenk på dette som vekter man legger på ei vektstang for å få mer ut av styrketreningen når man trener benkpress. Fire ringer er altfor mange for en nybegynner, som helst bør starte med å løfte bare stangen fem repetisjoner ad gangen. Erfarne test-først-utviklere kan tillate seg seduktive hopp, mens den som er helt grønn på test-først bør gjøre veldig enkle logiske sprang ad gangen.

Trianguleringsteknikken er en kort iterasjonssyklus mellom tilstandene "feilet" og "bestått". I hver iterasjon gjelder det å skrive minst mulig kode, ikke skriv for mye for fort. For trianguleringsteknikken er det nedfelt tre lover, som forklart i presentasjonen lenket til i kapitlets tittel, om hvordan en modul gjennomgår test-først-syklusen. Her brukes begrepet "modul" om en samling kodelinjer som utgjør en helhetlig semantisk enhet, for eksempel en klasse eller ei fil.

1) Du skal ikke skrive ei eneste linje kode for modulen før du har skrevet en test for modulen som feiler fordi modulen ikke eksisterer.
2) Du skal ikke utvide testen med mer testkode når den først feiler (blir rød).
3) Du skal ikke skrive mer kode for modulen når testen først består (blir grønn).

Hvaforno? Skrive en test som garantert feiler fordi fila ikke eksisterer? Er det så produktivt? Den første trianguleringsloven er formet for å danne et naturlig første steg av test-først-paradigmet. Og når man først har definert modulen og testen kompilerer kan man begynne med å legge inn én enkelt enhetstest som for eksempel kaller en funksjon fra modulen som ikke eksister enda, som deretter må implementeres.

Etter hvert utvides testen til å dekke én av flere mulige kondisjoneller veideler (if-løkker) i enheten, og når det er gjort er testen ferdig. En test skal validere én spesifikk brukskontekst for enheten av gangen, og er nødvendigvis ikke veldig omfangende eller kompleks. Man skal ikke skrive hele testen eller hele koden ferdig i en omgang. Man begynner heller på en ny test når man skal utvide modulen man tester. Underveis bør man også se på muligheter for forenkling av koden, såkalt *refaktor-endring*. Til slutt er alle brukskontekstene for enheten dekket av testen. Hvis tester introdusereres til en eksisterende kodebase, kan de også avdekke eksisterende defekter man ikke var klar over fra før.

Vær klar over at programmets kildekode ikke skal være mer spesifikt orientert enn testen. Gjennom de raske trianguleringsiterasjonene utvikles kildekode og tester i to forskjellige retninger. Hvorav hver nye definerte test gjør enhetstestene mer spesifikke, blir kildekoden gjort mer generell, altså kapabel til å håndtere flere forskjellige krav eller kontekster, etter hvert som den utvides. Du skal med andre ord ikke utvide kildekoden bare for å bestå én enkelt test som du nettopp skrev.

Trianguleringsteknikken er inndelt i tre faser. Parantesene indikerer hvilke av trianguleringsreglene de er tilknyttet.

1) Rød (jfr lover 1 og 2)
2) Grønn (jfr lov 3)
3) Refaktor (jfr lov 2)

# Enkle øvelser

De følgende øvelsene kjører i svært forenklede kontekster. Null server, null I/O, null GUI. De er imidlertid såpass komplekse at de får deg til å kjøre TDD-iterasjonen en god del ganger.

Stillaskoden du finner i dette repoet er tilpasset testrammeverket AVA. Hvis du har klonet dette repositoriet til ditt står du fritt til å bruke det testrammeverket du selv er komfortabel med. Men stillaskoden er altså skrevet med AVA i commonjs - format for NodeJS - miljøet.

For "inspirasjon" til hvordan TDD utføres anbefales Stack - implementasjonen Robert C. Martin skrev på [denne presentasjonen](https://youtu.be/58jGpV2Cg50?t=2629) han holdt for Rabobank.

Hver øvelse er innkapslet i sin egen katalog. I denne branchen finner du løsningsforslag til hver av oppgavene.

