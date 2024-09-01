/*
    - 12° AULA - NULL & UNDEFINED:

    - Null & Undefined -> São ausência de informação, mas existe uma pequena diferença entre eles, que são:
        - Null -> É quando você deixa um campo vazio de propósito.
        - Undefined -> Quando você faz uma cagada, você esquece de colocar.

*/

// Por exemplo, jefferson fez um usuário, mas ele não é casado, então na parte do "NOME DO CONJUGE", você deixa vazio para o computador enteder que não tem informação.
const user = {
    nome: "Jefferson",
    idade: "30",
    nomeDoConjuge: "null"
}

console.log(user);

// No caso do undefined, se voce tenta procurar uma informação que não existe, por exemplo:
const user2 = {
    nome: "Jefferson",
    idade: "30",
    nomeDoConjuge: "null"
}

console.log(user2.bairro);
// Repara que não existe o campo "bairro" detro do objeto, então dara como Undefined.
