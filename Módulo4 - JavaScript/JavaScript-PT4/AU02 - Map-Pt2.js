/*
                                                                    - MAP - PT2

*/

const lista = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'João', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Julio', vip: false},
]

// Exemplo 1 - Você precisa colocar no programa, que os usuários que forem vip, teram uma pulseira "preta", e quem não vou, usaram uma pulseira "verde". 
// usando o if dentro da função da forma normal.
// const novaLista = lista.map(user => {
//     let braceletCor

//     if(user.vip === true){
//         braceletCor = 'black'
//     } else {
//         braceletCor = 'green'
//     }

//     return novaLista
// })

// usando o if da forma resumida.
// const newLista = lista.map(user => {

//     const novaLista = {
//         name: user.name,
//         braceletColor: user.vip ? 'black' : 'green'
//     }

//     return novaLista
// })

// console.log(newLista);


// Exemplo dois.
const estudantes = [
    {name: 'Rodolfo', testGrade: 7},
    {name: 'Maria', testGrade: 5},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 9},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10},
]

const nota = estudantes.map(user => {

    const nota = {
        name: user.name,
        notaTest: user.testGrade >= 5 ? 'Passou no teste!' : 'Não passou no teste'
    }

    return nota
})

console.log(nota);