/*  
    - 3° AULA - OPERADORES ARITMÉTICOS:

        + -> Adição.
        - -> Subtração.
        / -> Divisão.
        * -> Multiplicação.
        % -> Resto.
        ++ -> Incremento.
        -- -> Decremento.
        ** -> Exponencial.

*/

// Adição
const adiçao = 5 + 5
console.log(adiçao);

// Subtração
const subtraçao = 5 - 5
console.log(subtraçao);

// Divisão
const divisao = 5 / 5
console.log(divisao);

// Multiplicação
const multiplicaçao = 5 * 5
console.log(multiplicaçao);

// Resto -> ele mostra o resto da opreção. Ex: 6 / 3 = 0 , 7 / 3 = 1. Onde o número 0 e 1 são os restos.
const resto = 6 % 3
console.log(resto);

// Incremento, vai somando + 1.
let incremento = 20

//incremento = incremento + 1

// ou, podemos fazer a mesma coisa economizando código.
incremento++
incremento++
incremento++
console.log(incremento);

// Decremento, vai diminuindo - 1.
let decremento = 20

// decremento = decremento - 1

// ou, podemos fazer a mesma coisa economizando código.
decremento--
decremento--
console.log(decremento);

// Exponencial. Funciona como o Math.pow -> 2 ao cubo.
const exponencial = 2**3
console.log(exponencial);