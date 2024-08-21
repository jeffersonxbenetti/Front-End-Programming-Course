// 2. Escreva um programa que calcule a média de três números e exiba o resultado no console.
//     - Para calcular a média você só precisa somar os 3 números e dividir por 3.

function CalcularMedia(number1, number2, number3) {
    const soma = (number1 + number2 + number3) / 3

    return soma
}

console.log(CalcularMedia(10, 5, 4))