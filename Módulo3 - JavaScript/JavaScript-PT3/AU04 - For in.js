/* 
    - For in -> Estrutura de Repetição(Loop)
        - Consegue pegar os objetos: Name: , Age:, Street:.

    A sintaxe do for ind:
        - for (const key in object) {
            - Pode optar por deixar o "key", ou colocar qualquer nome.
            - Você coloca a variavel que quer explorar no lugar do "object"
        }

    Caso queira acessar o objeto mais o valor ... 
        - Temos DUAS formas de fazer isso.
            Por exemplo:
                - const users = {name:"Jefferson", age:30, street: "Rua São Sebatião"}

                1 -> console.log(users.name) = Jefferson
                2 -> console.log(users["name"]) = Jefferson

                - Resultado, os dois mostram a mesma coisa..
*/

const users = {name:"Jefferson", age:30, street: "Rua São Sebatião"}

// for in.
for (const key in users) {
    // Exemplo mais simplificado.
   console.log(key + users[key])// Coloquei o "key" dentro dos colchetes para pegar todos os itens.

    // Exemplo de como colocar o objeto mais o valor de um modo profissional.
   console.log(`${key} : ${users[key]}`);
     

}
