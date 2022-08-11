# Oppgave: Romertall

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

## Bruksscenarier
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
> Error('Invalid symbol "A", at index 0') // ugyldig romersk symbol
romanToDecimal('CIIII')
> Error('Invalid Roman Symbol "I", at index 4') // ugyldig romersk tall, oppgaven krever at funksjonen forklarer hvorfor
```

Coding Dojo har også en liknende kata-oppgave: [Roman Numerals](https://codingdojo.org/kata/RomanNumerals/)
