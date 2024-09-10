/*
    - 4° AULA - FILTER:

    - Serve para filtrar um array. Ele passará por todos os valores do array e você decidirá quais valores vão para o seu novo array, e quais vão ser descartados.

    - Aceita três valores.
        - item do array.
        - index.
        - array completo.

    - return true -> Item passa para o novo array.
    - return false -> Item não passa para o novo array.
*/

// Exemplo pratico 1.
const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter( number => {

    if(number > 100){
        return true
    } else {
        return false
    }
})

//console.log(newList);


// Exemplo pratico 2.
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

const newCompanies = companies.filter(company => {

    if(company.marKetValue < 200 && company.foundedon > 2000){
        return true
    } else {
        return false
    }
})

// console.log(newCompanies);