/*
                                            Objects -> Objetos

*/

// Exemplo de como funciona o dado "object"

// Daria muuito trabalho fazer um campo de cadstro de usuário, por exemplo:
const name = "Jefferson"
const age = 30
const address = "Rua São Sebastião, numero 143."

// Exemplo usando o dado object.
const Jefferson = {
    name: "Jefferson",
    age: 30,
    address: "Rua São Sebastião, numero 143."
}

//console.log(Jefferson);

// Também podemos ter um objeto dentro de outro objeto, por exemplo:
const benetti = {
    name: "Jefferson",
    age: 30,
    address: {
        country: "Brasil",
        street: "São Sebastião",
        number: 143,
        state: "SP",
        city: "Mauá"
    }
}

//console.log(benetti);

// Podemos também navegar dentro do objeto para pegar só a informação que você quiser, por exemplo:
//console.log(benetti.address);

// Para acessar o objeto dentro do objeto.
console.log(benetti.address.street);

// Também podemos alterar o dado que quiser dentro do objeto, por exemplo:
let silva = {
    name: "Jefferson",
    age: 30,
    address: {
        country: "Brasil",
        street: "São Sebastião",
        number: 143,
        state: "SP",
        city: "Mauá"
    }
}

// Para alterar o nuúmero da casa.
silva.address.number = 0

console.log(silva);