# Oppgave: Summere multipler av 3 og 5

Definer en modul som summerer mengden av naturlige heltall som er multiplum av enten 3 eller 5. Heltallet som sendes inn som parameter er det tallet funksjonen skal telle opp til, men ikke inkludere i regneoperasjonen. For negative tall, returner 0. Hvis et tall er et multiplum av både 3 og 5, tell det med kun én gang i summeringen.

## Bruksscenarier
```
sumMultiplesUpTo(10)
> 23
sumMultiplesUpTo(15)
> 203
sumMultiplesUpTo(16)
> 203
sumMultiplesUpTo(-1)
> 0
```

Inspirert av [denne oppgaven fra projecteuler.net.](https://projecteuler.net/problem=1)
