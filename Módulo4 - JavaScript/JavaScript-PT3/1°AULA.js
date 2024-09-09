/*
    - 1° AULA - FOR:

    - 1) INICÍALIZAÇÃO - Criar uma variável e colocar um valor inicial pra ela.
            - Pode colocar o valor = 0.
    - 2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
            - Ele irá verificar antes de cada iteração.
    - 3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço dar uma volta.

    - for ([inicialização]; [condição]; [expressão final]){

        - SEU CÓDIGO AQUI DENTRO..
    }


*/

// Sintaxe for:
//for (let index = 0; index < array.length; index++){}

// Exemplo de como preenche-la com o "i" começando do "0"
// for(let i = 0; i < 20; i++) {
//     console.log(i);
// }
// INICIALIZAÇÕA -> let i = 0; -> Obrigatorio criar essa variável.
// CONDIÇÃO -> Enquanto o meu "i" for MENOR do que "20", ele irá rodar.
// EXPRESSÃO FINAL -> A cada vez que ele rodar irá SOMAR mais um número, ex: 0,1,2,3,4,5..

// Exemplo de como preenche-la com o "i" começando do "20".
// for(let i = 20; i > 2; i--) {
//     console.log(i);
// }
// INICIALIZAÇÕA -> let i = 20; -> Obrigatorio criar essa variável.
// CONDIÇÃO -> Enquanto o meu "i" for MAIOR do que "2", ele irá rodar.
// EXPRESSÃO FINAL -> A cada vez que ele rodar irá DIMINUIR um número , ex: 20,19,18,17,16,15...



//DESAFIO, COLOCAR TODOS OS USUÁRIIO NA DELA USANDO FOR.
const users = ["Maria", "Joao", "Felipe", "Jefferson", "Kathleen", "Gabrielle", "Lee Andrew"]

// users.length, onde o length é o tamanho do meu array.
for(let i = 0; i < users.length; i++){
    console.log(users[i])
}