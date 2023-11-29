/*
                                                                        - Reduce

        - O medóto REDUCE serve para "reduzir" um array a apenas um item. Como assim?
            - Ele vai passar item por item no array e no final vais restar apenas um valor.

        - Aceita 4 parâmetros.
            - Acumulador.
            - Valor atual.
            - index.
            - Array completo. 
*/

// Exemplo pratico 1.
const list = [1, 2, 3, 4, 5, 6, 7]

// O parâmetro "acumulador" é onde o item estará sendo acumulado. 1+1 = 2 / o dois será guardado dentro do acumulador.
const somarArray = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0) // coloca-se "0", para ser o valor inicial do acumulador.

// acumulador = 0 + 1
// acumulador = 1 + 2
// acumulador = 3 + 3
// acumulador = 6 + 4
// acumulador = 10 + 5
// acumulador = 15 + 6
// acumulador = 21 + 7
// acumulador = 28 


// Exemplo pratico 2. Tentar resolver antes dele.
const companies = [
{ 
    name: 'Samsung',
    marKetValue: 50,
    CEO: 'Kim Hyun Suk',
    foundedon: 1938,
},    
    { 
    name: 'Microsoft',
    marKetValue: 415,
    CEO: 'Satya Nadella',
    foundedon: 1975,
},
{ 
    name: 'Intel',
    marKetValue: 117,
    CEO: 'Brian Krzanich',
    foundedon: 1968,
},
{ 
    name: 'Facebook',
    marKetValue: 383,
    CEO: 'Mark Zucherberg',
    foundedon: 2004,
},
{ 
    name: 'Spotify',
    marKetValue: 30,
    CEO: 'Daniel Ek',
    foundedon: 2006,
},
{ 
    name: 'Apple',
    marKetValue: 845,
    CEO: 'Tim Cook',
    foundedon: 1976,
},
]

const marKetValue = companies.reduce((acc, value) => {

    return acc + value.marKetValue
},0)

//console.log(marKetValue);



// Exemplo pratico 2. Tentar resolver antes dele.
const cart = [
    {productName: 'Abobora', pricePerKg: 5, kg: 1},
    {productName: 'Pepino', pricePerKg: 3.55, kg: 1.3},
    {productName: 'Limão', pricePerKg: 1.2, kg: 2},
    {productName: 'Abacate', pricePerKg: 5.4, kg: 1.67},
    {productName: 'Morango', pricePerKg: 11.9, kg: 3},
]

const valuePerKg = cart.reduce((acc, priceProduct) => {

    return acc + (priceProduct.pricePerKg * priceProduct.kg)
},0)

console.log(valuePerKg.toFixed(2));

