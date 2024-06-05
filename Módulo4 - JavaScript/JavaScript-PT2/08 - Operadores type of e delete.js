/*
                                    - Operadors type of e delete.

    typeof -> Tipo de dado.
    delete -> Deleta. 
*/

// Exemplo de "type of", se o elemento é um objeto, number ou ate um string.
const myObject = {
    name: "Jefferson",
    age: 30,
    address: "Rua São Sebastião"
}
const number = 30  // Number
const numberOne = "30" // String

console.log(typeof myObject);
console.log(typeof number);
console.log(typeof numberOne);

// Caso você queira deletar alguma coisa..
delete myObject.address

console.log(myObject);
