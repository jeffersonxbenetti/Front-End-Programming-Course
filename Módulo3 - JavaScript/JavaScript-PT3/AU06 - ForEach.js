/*
    - ForEach -> Ele fornece três informações.
        - item -> É cada elemento do array.
        - index -> Posição que o item está.
        - array -> Mostra o array completo.
    
    - Foreach precisa plugar em um array para funcionar.
        - Ele não precisa de um "BREAK" para estar parando, pois ele para sozinho.

    - Sintaxe do ForEach.
        - array.forEach(element => {
            // No array você coloca a variável.
            });
 */

const users = [
    {name:"Maria", age:54, contact:"(11)1111-1111"},
    {name:"Jefferson", age:30, contact:"(11)2222-2222"},
    {name:"kathleen", age:28, contact:"(11)3333-3333"},
    {name:"Lee Andrew", age:28, contact:"(11)4444-4444"},
    {name:"Gabriele", age:19, contact:"(11)5555-5555"}
]

// Exemplo mostrado.
users.forEach(item => {
    // Usando crases para ficar mais profissional.
    console.log(`Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});

// Caso precise colocar mais de parâmentro, colocar entre parênteses. Ex: (intem, index, array).