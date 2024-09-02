/*
    - 10° AULA - OPERADORES TERNÁRIOS "IF" "ELSE":

    - Forma de economizar código usando o if else.

        - ? --> IF (SE)
        - : --> ELSE (SE NÃO)
        - && (IF SEM ELSE), caso queira usar sem o else.

*/

// Exemplo usando o if else normal.
const salary = 15000

// if( salary <= 5000){
//     console.log("O colaborador é Junior");
// } else if( salary > 5000 && salary <= 10000){
//     console.log("O colaborador é Pleno");
// } else {
//     console.log("O colaborador é Senior");
// }


// Exemplo usando o OPERADOR TERNÁRIO. Usa-se esse código em projetos pequenos. Onde tem um retorno pequeno.
// IF -> salary <= 5000 ? console.log("O colaborador é Junior") :  console.log("O colaborador é Senior");

// Usando o ternário IF sem o ELSE.
// IF SEM ELSE -> salary >= 5000 && console.log("O colaborador é Junior")

// Usando o ELSE IF.
// ELSE IF -> salary <= 5000 ? console.log("O colaborador é Junior") : salary <= 10000 ? console.log("O colaborador é Pleno") : console.log("O colaborador é Senior")