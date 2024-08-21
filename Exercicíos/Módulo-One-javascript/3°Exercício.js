// Escreva um programa que verifique se um número é maior que 10 e exiba o resultado no console.

const numbers = [5, 10, 20, 4, 2, 70, 60, 1, 25, 43, 0]

numbers.forEach((number) => {
    if (number > 10) {
        console.log(`O número ${number} é maior que dez!`)
    } else {
        console.log(`O número ${number} não é maior que dez.`)
    }
})