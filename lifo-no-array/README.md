# Oppgave: Implementere en LIFO-kø (stack)

En LIFO-kø er en datastruktur som til enhver tid peker på sitt nyeste medlem. Køen har følgende overfladiske egenskaper. Man kan putte et element inn i køen (`push(element)`), man kan anskue det nyeste elementet (`peek()`), og man kan dra ut det nyeste elementet, noe som resulterer i at det nest eldste elementet i køen blir synliggjort, samtidig som det nyeste slettes fra køen (`pop()`). Selv om vi er i Javascript - land, må du kaste et unntak hvis køen underflyter. 

```
Inn   Ut
->  5 ->
    _
    _
    _
```

Denne oppgaven er hentet fra Robert C. Martins foredrag hos Rabobank, [Clean Code](https://www.youtube.com/watch?v=7EmboKQH8lM).
