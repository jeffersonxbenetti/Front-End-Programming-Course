/*
                                                    - EVENTOS

    - O que são EVENTOS no javascript.

        - Esses são alguns exemplos de EVENTOS no javascript.

            - Um clique no botão.
            - Um digitar no input.
            - Passar o mouse em cima da imagem.

    - Temos duas formas de chamar esses eventos, através do HTML ou direto pelo JAVASCRIPT.
    
        - NO HTML, VAI NO BOTÃO QUE VOCÊ QUEIRA PEGAR O EVENTO DE CLIQUE, E ADD UM ATRIBUTO CHAMADO "ONCLICK".
*/

// EXEMPLO COM ONCLICK(CLIQUE) NO HTML.
// function cliqueiNoBotao() {
//     alert("Botão clicado com sucesso!")
// }

// INPUT MAPEADO.
const input = document.querySelector("#main-input")

// EXEMPLO COM ONKEYPRESS(DIGITAÇÃO) NO HTML.
function digiteiNoInput() {
     console.log("Digitação com sucesso!");
 }

// LIÇAO DE CASA, COLOCAR O QUE APARECE NO INPUT NA TELA.

// EXEMPLO DE COMO PEGAR O VALOR DO INPUT COM O CLIQUE DO BOTÃO.
function cliqueiNoBotao() {
    // PARAGRÁFO PARA COLOCAR NA TELA.
    const colocarNaTela = document.querySelector(".tela")

    colocarNaTela.innerHTML = input.value
    
    console.log(colocarNaTela);
}