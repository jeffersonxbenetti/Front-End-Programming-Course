/* - 4. Escreva um programa que verifique se um número é positivo e exiba o resultado no console.
 */

const number = 0

const valor = Math.sign(number)

if(valor === 1) {
    console.log("Positivo");
}
else if(valor === -1) {
    console.log("Negativo");
}
if(valor === 0) {
    console.log("Zero ou Não Númerico");
}
