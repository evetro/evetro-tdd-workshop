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

Hver øvelse, samt deres utvidelser, er innkapslet i sin egen katalog

## Oppgave: Implementere FizzBuzz

Oppgaven har følgende instruksjoner:

* Print ut alle tallene fra 1 til 100
* Istedet for hver multippel av 3, printer du "Fizz"
* Istedet for hver multippel av 5, printer du "Buzz"
* Istedet for hver multippel av 15, printer du "FizzBuzz"

### Fasit (adskilt med komma i stedet for linjeskift)
```
fizzBuzz()
> '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz'
```

## Oppgave: Implementere en FIFO-kø (eller 'dequeue' i Python-land)

En FIFO-kø er en datastruktur som til enhver tid peker på sitt eldste medlem. Køen har følgende overfladiske egenskaper. Man kan putte et element inn i køen (`push(element)`), man kan anskue det eldste elementet (`peek()`), og man kan dra ut det elste elementet, noe som resulterer i at det nest eldste elementet i køen blir synliggjort, samtidig som det eldste slettes fra køen (`pull()`).

```
Inn              Ut
-> 6   |_|_|2|  ->
     |_|_|_|0|  -> 2
      ^6
```

Indeksene i køene der elementene er blanke (`_`) demonstrerer opptatte plasser som ikke kan aksesseres utenfor datastrukturen. Med en FIFO-kø kan man kun anskue eller dra ut det eldste elementet i strukturen. De enkelte implementasjoner i ymse språk kan velge å indeksere (synliggjøre) de øvrige elementene også.

## Oppgave: Implementere en LIFO-kø (stack)

En LIFO-kø er en datastruktur som til enhver tid peker på sitt nyeste medlem. Køen har følgende overfladiske egenskaper. Man kan putte et element inn i køen (`push(element)`), man kan anskue det nyeste elementet (`peek()`), og man kan dra ut det nyeste elementet, noe som resulterer i at det nest eldste elementet i køen blir synliggjort, samtidig som det nyeste slettes fra køen (`pop()`).

```
Inn   Ut
->  5 ->
    _
    _
    _
```

Denne oppgaven er hentet fra Robert C. Martins foredrag hos Rabobank, [Clean Code](https://www.youtube.com/watch?v=7EmboKQH8lM).

## Oppgave: Romertall

Denne modulen har to funksjoner, `decimalToRoman(num)` og `romanToDecimal(str)`. Førstnevnte konverterer et tall til dets romerske ekvivalent i form av en streng, og den andre gjør det rake motsatte.

Symbol | Verdi
---- | ----
I | 1
V | 5
X | 10
L | 50
C | 100
D | 500
M | 1000

Foruten symbolet `M` (romerne hadde intet tallsymbol av høyere verdi i det hindu-arabiske tallsystemet) er det ikke lov å stille samme symbol fire ganger etter hverandre. Istedet tar man symbolet av direkte lavere rang enn det enkelte symbolet med den nærmeste tallverdien, og setter de sammen slik som vist i eksemplene under.

### Bruksscenarier
```
decimalToRoman(2014)
> 'MMXIV'
romanToDecimal('CCIII')
> 203
decimalToRoman(489)
> 'CDLXXXIX'
romanToDecimal('CMIL')
> 949
decimalToRoman(4917)
> 'MMMMCMXVII'
romanToDecimal('CCIII')
> 203
decimalToRoman(0)
> Error('Cannot represent non-positive integers with Roman symbols') // Kan ikke representere tallet 0
decimalToRoman(-1)
> Error('Cannot represent non-positive integers with Roman symbols') // Kan ikke representere negative tall
romanToDecimal('ABC')
> Error('Invalid symbol "A", at position 0') // ugyldig symbol
romanToDecimal('CIIII')
> Error('Invalid Roman Symbol "I", at position 4') // ugyldig romersk tall, oppgaven krever at funksjonen forklarer hvorfor
```
