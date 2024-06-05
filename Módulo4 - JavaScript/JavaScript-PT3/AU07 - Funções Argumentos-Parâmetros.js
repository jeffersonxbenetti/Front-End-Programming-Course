/* 
    - Function/funções => 
        - É um trecho de código que só é execultado quando é chamado ou solicitado!

        - Podem ser chamadas mais de uma vez.
            - Para você chamar, precisa estar colocando o NOME da função mais os PARÊNTESES.
                - Ex:
                    - function nome(){
                        console.log(2 + 3)
                    }

                    nome()

        - Ela também pode receber e enviar ARGUMENTOS ou PARÂMETROS.
            - Para enviar os ARGUMENTOS OU PARÂMETROS, você só precisa colocar o que quer enviar ou receber dentro dos parênteses.       
                - Ex:                    
                    - function myName(nome){  => função aguardando o parâmetro NOME.
                        console.log(nome)
                    }

                    myName("Jefferson")  => chamando a função e levando um parâmetro NOME. Onde o
                    
                    "Jefferson" é o parâmetro que será enviado para função.
        
        - No exemplo dado o PARÂMETRO que está dentro dos parênteses da função é como uma variável, mas sem o LET  e CONST.
            - Essa variável só vai existir dentro da função, como o rodolfo fala: O que acontece dentro da função fica na função.
            - Você pode dar qualquer NOME para essa variável.

        - Resumindo, você chamar a função mandando um parâmetro que quer enviar para função dentro dos PARÊNTESES. A função recebendo o parâmentro vai utilizalo e como exemplo, atravé de um console.log, colocará na tela.

        - A função também pode recerber ou enviar mais de UM parâmetro, mas ela só recebe se estiver esperando mais de um parâmetro.
            - Ex:
                    function soma(numero1, numero2){
                        console.log(numero1 + numero2) => resultado => 20+30=50
                    }

                    soma(20,30)  

        - Também podemos chamar uma função dentro de outra função.
            - Só colocar o nome da função que quer chamar dentro da função.

        - Se a função estiver esperando um parâmetro e você não enviar, vai dar um erro chamado UNDEFINED, que quer dizer: "O dado procurado não existe". Mas caso não queira enviar, tem como colocar um valor padrão para nao dar este erro.
            - Você vai colocar o parâmentro = o valor padrão que você quer.
                - Ex;
                    - function meuNome(nome = "Jefferson"){
                        console.log(nome)
                    }

                    - function nomes(nome1 = "Rodolfo", nome2 = "Jefferson"){
                        console.log(nome1, nome2)
                    }

                - Mas caso você mande os parâmetro, o valor padrão que você colocou será ignorado.
                
                - Informação:
                    - Caso queira, você pode colocar o valor padrão dentro de uma variável.
                        - Ex:
                            - const meuNome = "Jefferson"

                            - function nomes(nome1 = meuNome, nome2 = "Rodolfo"){
                                console.log(nome1, nome2)
                            }

*/

// DESAFIO FUNCTION, FAZER UMA FUNÇÃO PARA CADA CALCULO USANDO O ENVIO DE PARÂMETRO. POR EXEMPLO: SOMA, SUBTRAÇÃO, DIVISÃO E MULTIPLICAÇÃO.

// FUNÇÃO SOMA.
function sum(number, number2){
    console.log(number + number2)
}

sum(10,20)

// FUNÇÃO SUBTRAÇÃO.
function sub(number, number2){
    console.log(number - number2)
}

sub(20,10)

// FUNÇÃO MULTIPLICAÇÃO.
function mult(number, number2){
    console.log(number * number2)
}

mult(2,10)

// FUNÇÃO DIVISÃO.  
function div(number, number2){
    console.log(number / number2)
}

div(20,2)
