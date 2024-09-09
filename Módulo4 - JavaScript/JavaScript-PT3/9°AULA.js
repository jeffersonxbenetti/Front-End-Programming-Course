/*  - 9° AULA - DESAFIO RETURN:

    - FAZER UMA CALCULADORA, ONDE SERÁ SOMADOS OS VALORES DOS PRODUTOS QUE FOREM PASSANDO NO CAIXA DO SUPER MERCADO, CASO O VALOR DO PRODUTO PASSE DE 30,00 REIS TERÁ UM DESCONTO DE 7%. 
    
*/

const caixa = [10, 244, 99, 2, 20, 33, 250]

let valorDaCompra = 0


// VALOR TOTAL.
caixa.forEach(valorDoProduto => {
    valorDaCompra += + valorDoProduto
})

// FUNÇÃO PARA SABER O VALOR TOTAL COM DESCONTO.
function calculandoDesconto(){

    let valorDaCompra = 0

    function calcularDesconto(preçoDoProduto, valorDoDesconto){

        const desconto = (preçoDoProduto * valorDoDesconto) / 100

        return desconto
    }

    caixa.forEach(valorDoProduto => {
        
        if(valorDoProduto > 30){
            valorDaCompra = valorDaCompra + (valorDoProduto - calcularDesconto(valorDoProduto, 7))
        } else {
            valorDaCompra += + valorDoProduto
        }    
    });
    return valorDaCompra
}

// FUNÇÃO PARA SABER O TOTAL DO DESCONTO.
function totalDeDesconto(){
    return valorDaCompra - calculandoDesconto()
}

console.log(`O valor total da compra foi R$: ${valorDaCompra.toFixed(2)}, porém houve desconto, e você pagará R$: ${calculandoDesconto().toFixed(2)}. O valor total de desconto foi R$: ${totalDeDesconto().toFixed(2)}. Obrigado, volte sempre!!!`);