/*
    - Existem DOIS tipos de function(funções).
        - Função VOID(VAZIA), que não retorna nada.
        - Função RETURN, que retorna o valor para quem à chama.

    - A função do tipo VOID, por exemplo, se eu a guardo dentro de uma variável e quizer chamar, não irá retornar nada, pois todos os valores, calculos, etc.. ficam dentro da função.
        - Ex:
            - function soma(number1, number2){
                console.log(number1 + number2)
            }

            const resultado = soma(10,20)
            console.log(resultado)
        
        - Note, que no exemplo dado, o nome para chamar a função e enviar os parâmetros estão dentro de uma variável. Veja também, que está sendo utilizado um console.log para mostrar o resultado dessa variável. Por ser uma função VAZIA, note que quando for executado para mostrar na tela o resultado, será apresentado um erro com o nome de "UNDEFINED". 

    - A função do tipo RETURN, já retorna o valor.
        - A função return serve para enviar os valores para fora da função, enviar os valores para quem chamou a função.
            - Ex:
                - function soma(number1, number2){
                    const resultado = number1 + number2

                    return resultado // vai retornar o resultado para quem chamou.
                }

                const meuResultado = soma(10,20)
                console.log(meuResultado)

            - Quando o código for executado será mostrado o resultado da soma entre 10 e 20 = 30.
        
        - O return só pode ser colocado por ultimo dentro da função. Caso você coloque ele antes a função nao irá terminar o que ter que ser feito.
            - Em outras palavras, o RETURN PARA a função.

                                           - DESAFIO RETURN:

    - FAZER UMA CALCULADORA, ONDE SERÁ SOMADOS OS VALORES DOS PRODUTOS QUE FOREM PASSANDO NO CAIXA DO SUPER MERCADO, CASO O VALOR PASSE DE 30,00 REIS TERÁ UM DESCONTO DE 7%.
*/