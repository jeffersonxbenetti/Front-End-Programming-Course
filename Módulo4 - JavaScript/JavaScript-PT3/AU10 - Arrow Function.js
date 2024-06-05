/*
    - Function / Funções
    
        - Function padrão:
            - Sintaxe de uma função padrão.
                
                function(){

                }

        - Arrow function
            - Sintaxe de uma "Arrow function / Função Flecha".

                const myName = () => {

                }
            
            - Não precisamos escreve "FUNCTION".
            - Precisamos colocar dentro de uma "VARIÁVEL".
            - E como vimos no exemplo, usamos o sinal " => " para cria-lá, cujo sinal que lembra uma fecha, por isso   do nome "arrow function".
            - Na arrow function, caso o código so estiver UMA linha, você não precisa estra escrevendo "RETURN", para retornar. 
                - Ex:

                    const myName = (name) => `Seu nome é ${name}`

                        console.log(myName("Jefferson"))
                
                - Mas, se pular linha terá que escrver "RETURN".

                - Ex:
                    const myName = (name) => {
                        
                        return `Seu nome é ${name}`
                    }

*/

//EXEMPLO PRATICO.

function soma(number1, number2){

    return number1 + number2
}

const soma2 = (number1, number2) => number1 + number2


console.log(soma(5,5));

console.log(soma2(10,10));