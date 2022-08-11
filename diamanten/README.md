# Oppgave: Printe en diamant på skjermen

Denne oppgaven er regnet som en klassiker blant TDD - oppgaven, blant annet fordi den utfordrer hvordan vi dekomponerer programmeringsproblemer.

Strengen som skal printes ut er en diamond formet av det engelske alfabetet A til og med argumentet som gis inn. Hver linje paddes med mellomrom slik at formen på printet likner en diamant. Legg også merke til hvordan antallet mellomrom inni hver linje av diamanten utvikler seg matematisk.

## Bruksscenarier
```
diamond('A')
> # CRLR
A
diamond('B')
> # CRLR
 A
B B
 A
diamond('C')
> # CRLR
  A
 B B
C   C
 B B
  A
diamond('D')
> # CRLR
   A
  B B
 C   C
D     D
 C   C
  B B
   A
```

Denne oppgaven er hentet fra Coding Dojo sin samling av kata-oppgaver: [Diamond Kata](https://codingdojo.org/kata/Diamond/).
