/*
                                                                - MAP
        - MAP => Serve para mapear um array. Mapear? Sim, com o map, você pode perorrer posição por posição de um array e criar um novo array, alterando tudo que você quiser do array original.

            - Cria um novo array , a partir do array percorrido (array original).
            - Cria um novo array, com a mesma quantidade de itens do array original.
            - Aceita três parâmetros.
                - item do array.
                - index.
                - array completo.

*/

const number = [1, 2, 3, 4, 5, 6, 7]


// Exemplo de fazer a mesma cois de jeitos diferentes.
// Com uma variável e return.
const dobro = number.map(item => {
    const novoItem = item * 2

    return novoItem 
})

// Com return na mesma linha. Não precisa escrever a palavra return.
const dobro1 = number.map(item => item * 2)

// Com o return na outra linha.
const dobro2 = number.map(item => {
    return item * 2
})