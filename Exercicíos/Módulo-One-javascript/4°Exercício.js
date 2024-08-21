// Escreva um programa que verifique se um número é positivo e exiba o resultado no console.

const valores = [-10, 10, -5, 5, 4, -2, 15, -20, 7]

valores.forEach( (valor) => {
    if(Math.sign(valor) === 1){
        console.log((`O número ${valor} é POSITIVO`))
    }else {
        console.log(`O número ${valor} é NEGATIVO`)
    }
})    