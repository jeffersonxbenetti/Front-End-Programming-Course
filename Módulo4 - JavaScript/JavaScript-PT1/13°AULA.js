/*
    - 13° AULA- ARRAY:

    - Array -> Uma estrutura de dados que é usado para organizar as coisas. Como uma caixa.
        - Também serve para guardar as informações.
*/

// Exemplo de como seria fazer um banco de dados.
const jefferson = {
    nome: "jefferson",
    sobrenome: "benetti",
    sexo: "masculino",
    idade: "30",
    estadoCivil: "casado"
}

const kathleen = {
    nome: "kathleen",
    sobrenome: "cristina",
    sexo: "feminina",
    idade: "28",
    estadoCivil: "casada"
}
// Você reparou que tem que ficar criando uma variável para cada usuário?

// Com array é diferente, eu posso criar uma variável só com "array", e guardar tudo dentro dele. Por exemplo:
const users = [
     {
        nome: "jefferson",
        sobrenome: "benetti",
        sexo: "masculino",
        idade: "30",
        estadoCivil: "casado"
    },
    
    {
        nome: "kathleen",
        sobrenome: "cristina",
        sexo: "feminina",
        idade: "28",
        estadoCivil: "casada"
    }
]

// Exemplo para acessar qualquer posição do array, No array começa a contar da posição zero:
// O número 20=0, 30=1, 490=2.
const numbers = [20, 30, 490]

// Também conseguimos trocar o valor da posição que quiser.
numbers[1] = 40 

// Para alterar um objeto dentro de outro objeto dentro do array, usa-se:
const users2 = [
    {nome: "jefferson", age: 30},
    {nome: "kathleen", age: 28}
]

users2[1].age = 29

//console.log(users2);

// Podemos acessar só aqueles objetos que queremos dentro do array:
console.log(users2[1].nome);