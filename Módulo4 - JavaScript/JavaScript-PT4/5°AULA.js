/*
    - 5° AULA - MAP, REDUCE E FILTER:

*/

// Exemplo pratico.
const companies = [
    { name: 'Samsung', marKetValue: 50, CEO: 'Kim Hyun Suk', foundedon: 1938, },
    { name: 'Microsoft', marKetValue: 415, CEO: 'Satya Nadella', foundedon: 1975, },
    { name: 'Intel', marKetValue: 117, CEO: 'Brian Krzanich', foundedon: 1968, },
    { name: 'Facebook', marKetValue: 383, CEO: 'Mark Zucherberg', foundedon: 2004, },
    { name: 'Spotify', marKetValue: 30, CEO: 'Daniel Ek', foundedon: 2006, },
    { name: 'Apple', marKetValue: 845, CEO: 'Tim Cook', foundedon: 1976, },
]

// Fazer esses exercicíos.
// Adicionar 10% de valor de mercado a todos as companies -> Map
// Filtrar somente companhias fundadas abaixo de 1990 -> Filter
// Somar o valor de mercado das restantes -> Reduce


// Primeira maneira para ser resolvido.
const newCompanies = companies.map(company => {

    company.marKetValue = company.marKetValue + (company.marKetValue / 10)

    return company
}).filter(company => company.foundedon <= 1990).reduce((acc, company) => {

    return acc + company.marKetValue
}, 0)

// console.log(newCompanies)


// Segunda maneira para ser resolvido.
// map
const addPercent = (company => {
    company.marKetValue = company.marKetValue + (company.marKetValue / 10)

    return company
})

// filter
const filterCompanies = (company => company.foundedon <= 1990)

// reduce
const reduceCompanies = (acc, company) => acc + company.marKetValue

const valorDaCompanias = companies
.map(addPercent)
.filter(filterCompanies)
.reduce(reduceCompanies, 0)

// console.log(valorDaCompanias);


// Exercicío.

// Subtrair 10% do valor de mercado a todas companhias.
// Filtrar somente companhias fundadas depois de 1980.
// Somar o valor de mercado das restantes.
const companies2 = [
    { name: 'Samsung', marKetValue: 50, CEO: 'Kim Hyun Suk', foundedon: 1938, },
    { name: 'Microsoft', marKetValue: 415, CEO: 'Satya Nadella', foundedon: 1975, },
    { name: 'Intel', marKetValue: 117, CEO: 'Brian Krzanich', foundedon: 1968, },
    { name: 'Facebook', marKetValue: 383, CEO: 'Mark Zucherberg', foundedon: 2004, },
    { name: 'Spotify', marKetValue: 30, CEO: 'Daniel Ek', foundedon: 2006, },
    { name: 'Apple', marKetValue: 845, CEO: 'Tim Cook', foundedon: 1976, },
]

// usando a segunda maneira.
const companies2Map = (company => {

    company.marKetValue = company.marKetValue - (company.marKetValue / 10)

    return company
})

const companies2Filter = (company => company.foundedon >= 1980)

const companies2Reduce = ((acc, company) => acc + company.marKetValue)

const companies2New = companies2
.map(companies2Map)
.filter(companies2Filter)
.reduce( companies2Reduce, 0)

console.log(companies2New);