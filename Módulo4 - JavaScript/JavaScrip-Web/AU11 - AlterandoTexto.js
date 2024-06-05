/*
                                        - Aleterando TEXTO no HTML.

    - Alterando e acessando textos.
        - textContent -> Pega todo o CONTEÚDO.
        - innerText -> Pega APENAS o texto.
        - innerHTML -> Permite ADICIONAR html e texto.
*/

const element = document.querySelector(".paragraph-js1")

//element.textContent = "Texto com TEXTCONTENTE"
//element.innerText = "Texto com INNERTEXT"
//element.innerHTML = "Texto com INNERHTML"

// UMA DAS DIFERENÇAS, É QUANDO TEM HTML NO MEIO DO TEXTO, POR EXEMPLO A TAG <B></B> QUE DEIXA A PALAVRA DENTRO DELE EM NEGRITO.

//console.log(element.textContent); // SÓ TRÁS O QUE TEM NO HTML / NÃO RECONHECE O HTML DENTRO DO TEXTO.


//console.log(element.innerText); // LEVA EM CONTA O CSS / NÃO RECONHECE O HTML DENTRO DO TEXTO.
// SE VOCÊ TIVER UM PARAGRÁFO QUE ESTA COM A ESTILIZAÇÃO DO CSS COMO "HIDDEN", ELE LEVARÁ EM CONTA E FICARÁ INVISÍVEL TAMBÉM. (HIDDEN - DEIXA O OBJETO INVISÍVEL.)

//console.log(element.innerHTML); // TRÁS TUDO / ALÉM DE RECONHECER, VOCÊ CONSEGUE ADICIONAR HTML.

// EXEMPLO USANDO INNERHTML PARA ADICIONAR ELEMENTO HTML.
element.innerHTML = "<b>OLÁ</b>, MUNDO."

console.log(element.innerHTML);