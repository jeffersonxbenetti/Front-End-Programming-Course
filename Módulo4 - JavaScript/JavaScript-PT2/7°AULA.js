/*
    - 7° AULA - OPERADORES LÓGICOS:

        && --> E --> Pessoa exigente / Obediente.
            true && true = true
            true && false = false
            false && false = false

        || --> Ou --> Tanto faz / Filho espertinho.
            true || true = true
            true || false = true
            false || false = false

        ! --> Negação / Filho rebelde. / Inverte o valor.
            !true = false
            !false = true

*/

// Exemplo usando o &&. Se tudo for true, vai logar com sucesso, caso tenha um false no meio, da erro de autenticação.
const senha = true
const token = false
const conta = true

// Exemplo usando o &&(E)
if(senha && token && conta){
    console.log("Locado com sucesso");
} else{
    console.log("Autenticação FALHOU");
}


// Exemplo usando o ||(Ou). Mesmo se tudo for false, tendo um true no meio fica true.
if(senha || token || conta){
    console.log("Locado com sucesso");
} else{
    console.log("Autenticação FALHOU");
}


// Exemplo usando o !(Negação).. Se for false = true, e se for true = false.
if( ! (senha && token && conta) ){
    console.log("Locado com sucesso");
} else{
    console.log("Autenticação FALHOU");
}