# Oppgave: Implementere en FIFO-kø

En FIFO-kø er en datastruktur som til enhver tid peker på sitt eldste medlem. Køen har følgende overfladiske egenskaper. Man kan putte et element inn i køen (`push(element)`), man kan anskue det eldste elementet (`peek()`), og man kan dra ut det eldste elementet, noe som resulterer i at det nest eldste elementet i køen blir synliggjort, samtidig som det eldste slettes fra køen (`pull()`).

```
Inn              Ut
-> 6   |_|_|2|  ->
     |_|_|_|0|  -> 2
      ^6
```

Indeksene i køene der elementene er blanke (`_`) demonstrerer opptatte plasser som ikke kan aksesseres utenfor datastrukturen. Med en FIFO-kø kan man kun anskue eller dra ut det eldste elementet i strukturen. De enkelte implementasjoner i ymse språk kan velge å indeksere (synliggjøre) de øvrige elementene også.
