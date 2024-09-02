/*
        - 9° AULA - "ELSE" "IF":

            - IF -> (SE)
            - ELSE -> (SE NÃO)
            - ELSE IF -> Coloca mais de uma OPÇÃO quantas vezes você quiser.

*/

// Usando o Else if. 
const temperature = 39

if(temperature === 36){
    console.log("Você está saudável");
} else if(temperature > 36 && temperature <= 40){
    console.log("Você está com febre");
} else if(temperature > 40){
    console.log("Você está com muita febre");
} else{
    console.log("Você está com hipotermia");
}

