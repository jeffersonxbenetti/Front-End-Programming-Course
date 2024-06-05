/*
                                        - Switch case

    Switch case -> Controlador de fluxo.
*/

const temperature = 30

// Exemplo de switch com mais de uma case.
switch (temperature) {  // switch (variável)
        case 10: // case (número que será comparado com a variável.)
        console.log("Meio frio");        
        break;
    case 20:  // case (número que será comparado com a variável.)
        console.log("Meio quente");
        break;
    case 30:  // case (número que será comparado com a variável.)
        console.log("Quente");     
        break;
    default: // Caso não encontre uma resposta, que nem o "else".
        console.log("Não sei dizer");
        break;
}



const name = "jefferson"

// Exemplo de switch com mais de uma case, com string.
switch (temperature) {  // switch (variável)
        case "maria": // case (número que será comparado com a variável.)
        console.log("Maria Silva");        
        break;
    case "Joao":  // case (número que será comparado com a variável.)
        console.log("Joao Fabio");
        break;
    case "Jose":  // case (número que será comparado com a variável.)
        console.log("Jose Alves");     
        break;
    default: // Caso não encontre uma resposta, que nem o "else".
        console.log("Não sei dizer");
        break;
}