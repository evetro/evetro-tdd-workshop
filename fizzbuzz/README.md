# Oppgave: Implementere FizzBuzz

Funksjonen/enheten skal oppfylle følgende krav:

* Funksjonen skal returnere en streng med alle heltallene fra 1 til 100. Men:
  * Istedet for hver multippel av 3, står det "Fizz"
  * Istedet for hver multippel av 5, står det "Buzz"
  * Istedet for hver multippel av 15, står det "FizzBuzz"

## Fasit (adskilt med komma i stedet for linjeskift)
```
fizzBuzz()
> '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz'
```

# Utvidelse: FizzBuzz fra 1 til n

Innfør et argument `n` som en vilkårlig øvre grense. Anta at `n` alltid er representerbart innen 64 biter, altså at `n < Number.MAX_INTEGER` alltid er gjeldende. De tildligere spesififserte krav er fortsatt gjeldende. `n` trenger imidlertid ikke

# Utvidelse: FizzBuzz fra m til n

Innfør enda et argument `m` som en vilkårlig nedre grense, som kommer før `n`. Anta at `m` alltid er representerbart innen 64 biter, altså at `m > Number.MIN_INTEGER` alltid er gjeldende. De tildligere spesififserte krav er fortsatt gjeldende.
