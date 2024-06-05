/*                                  - Alterando o CSS com JAVASCRIPT                                           */

// BOTÃO MAPEADO.
const button = document.querySelector(".main-buttom")
const paragraph = document.querySelector(".paragraph-js1")

// TROCANDO O TEXTO COM INNERHTML.
paragraph.innerHTML = "Desenvolvedor <b>front-end</b>"

// TROCANDO O CSS - COR DO TEXTO.
button.style.color = "#ffffff"

// TROCANDO O FONT-SIZE DO TEXTO.
button.style.fontSize = "30px"

// TROCANDO A COR DE FUNDO.
button.style.backgroundColor = "red"

// COLOCANDO BORDER-RADIUS NO BOTÃO.
button.style.borderRadius = "10px"

// TROCANDO A COR DO TEXTO DO PARAGRÁFO.
paragraph.style.color = "red"

// TROCANDO O FONT-SIZE DO PARAGRÁFO.
paragraph.style.fontSize = "30px"