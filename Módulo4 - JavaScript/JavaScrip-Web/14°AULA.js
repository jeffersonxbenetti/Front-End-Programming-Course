/*
    - 14° AULA - EVENTOS:

    - O que são EVENTOS no javascript.

        - Esses são alguns exemplos de EVENTOS no javascript.

            - Um clique no botão.
            - Um digitar no input.
            - Passar o mouse em cima da imagem.

    - Temos duas formas de chamar esses eventos, através do HTML ou direto pelo JAVASCRIPT.
    
        - AGORA VAMOS CHAMAR OS EVENTOS ATRAVÉS DO JAVASCRIPT.
            - TEMOS DUAS FORMAS..
*/

// INPUT, SELECT E O BOTÃO MAPEADOS.
const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")


// 1 - USANDO O ADDEVENTLISTENNER - EVENTO DE TROCA / CHAMANDO FUNÇÃO ANÔNIMA.
// select.addEventListener("change", function() {
//     console.log("troquei de valor!");
// })


// 2 - APRENDEMOS QUE NA PRIMEIRA FORMA, PODEMOS USAR UMA FUNÇÃO ANÔNIMA JUNTO COM O EVENTO DE "TROCA", MAS TAMBÉM PODEMOS USAR UMA OUTRA FORMA QUE LEVA AO MESMO RESULTADO. PORÉM NAS FUNÇÕES, PODEMOS COLOCAR INFORMAÇÕES DENTRO DELA.
// function trocado() {
//     console.log("Troquei valor!");
// }

// select.addEventListener("change", trocado)

// EVENTO DE DIGITAR.
input.addEventListener("keyup", digitandoText)

function digitandoText() {
    console.log("Digitado");
}


// EVENTO DE TROCAR.
select.addEventListener("change", function() {
    console.log("Troquei de Valor");
})


// EVENTO DE CLICAR.
button.addEventListener("click", function() {
    console.log("Clicado");
})



