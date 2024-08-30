/*
    - 8° AULA - querySelector:

    - Trás UM elemento, o PRIMEIRO que encontrar.
        - pode ter mais de um elemento, mas ele sempre vai trazer o primeiro.
*/

// Exemplos de como pegar os elementos com querySelector.

// Pegando TAG.
const tag = document.querySelector("p")

// Pegando com a CLASSE.
const classe = document.querySelector(".main-button")

// Exemplo para quando você precisar pegar um elemento que tem a mesma classe de outro.
const pegarElementoComAmesmaClasse = document.querySelector("button.paragraph-js")

// Pegando com o ID.
const identificacao = document.querySelector("#main-input")