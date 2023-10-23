/*
                                                - if & else

    - if é considerado como "controlador de fluxo".
        - ferramenta usada dentro do nosso código para decidir para qual lado vamos.
            Ex:
                filho, vai no mercado comprar pão, caso tenha leite, traga o leite. Se nao tiver leite, traga só o pão.

            - if(SE) -> caso tenha leite, compre leite.
            - else(SE NÂO) ->  traga só o pão.    
                - else só é executado se o valor não corresponder ao if.

        - Operadores de comparação:
            - > maior que
            - < menor que
            - == igual que
*/

//Exemplo pratico de como funciona.
// precimaos saber se o aluno está apravado na prova, então usaremos o if & else para responder por nós.

const notaDoaluno = 8
const notaDaProva = 5

// Se a nota do aluno for "maior" que a nota da prova.
if (notaDoaluno > notaDaProva) {
    // console.log("Parabéns,você passou na prova.");
} else {
    // console.log("Você passou...");
}

//Exemplo usando só if:
if (notaDoaluno > notaDaProva) {
    //console.log("Você passou!!");
}
if (notaDoaluno < notaDaProva) {
    //console.log("Você não passou...");
}

// Exemplo usanso o "=="
const senha = "abacate"
const senhaDigitada = "abacate"

if (senhaDigitada == senha) {
    console.log("senha correta");
} else {
    console.log("Senha incorreta");
}