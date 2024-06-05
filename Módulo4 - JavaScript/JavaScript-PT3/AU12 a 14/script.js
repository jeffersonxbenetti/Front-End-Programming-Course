// Paragráfo que está vazio dentro do documento HTML, que será substituido pelo resultado do jogo.
const resultado = document.querySelector('.result') 
// Foram criadas duas variáveis para mostrar o resultado na tela.
const resultadoDoUsuario = document.querySelector('#result-user')
const resultadoDaMaquina = document.querySelector('#result-machine')

// Foram criadas duas variáveis para estar usando para mostrar o resultado na tela.
let pontuaçãoUser = 0
let pontuaçãoMachine = 0


// Uma arrow function esperando um parêmetro de quem à chama, no caso o botão que está no documento HTML.
const user = (usuario) => {

    // Chamando a função de "playGame" para estar verifincando o resultado do jogo. Também estou mandando dois parâmetros para ela verificar as escolhas do usuário(usuario) e da máquina(machine). 
    playGame(usuario, machine())
}

// Uma arrow function para saber a escolha da maquina.
const machine = () => {
    // Para fazer a maquina escolher entre, rock, paper e scissory, precisamos criar uma array onde tenha essas informações. E como já vimos que cada elemento de dentro de um array tem uma posição. Iremos usar o Math.random(), para estar buscar um número aleatorio entre 0 e 2. Onde 0(rock), 1(paper) e 2(scissory).

    // Array com os valores que a máquina precisa, para escolher.
    const escolher = ['rock', 'paper', 'scissors'] 

    // Math.random, para gerar um número aleatório entre 0 e 2.
    const numero = Math.floor(Math.random() * 3)

    // Returnar um paramentro para quem chamar.
    return escolher[numero]
}

// Arrow function para saber os resultado do jogo.
const playGame = (user, machine) => {
    // Console para mostrar o resultado do usuario e da máquina no tela/console para verificar os resultados.
    console.log(user, machine);

    // if para verificar e comparar a escolha do usuário e o da máquina.
    if(user === machine) {
        resultado.innerHTML = 'Você Empatou com Alexa!'

    } else if(
        (user === 'paper' && machine === 'rock') ||
        (user === 'rock' && machine === 'scissors') ||
        (user === 'scissors' && machine === 'paper')) 
        {
            // Aqui a variável irá somar mais um. 0+1=1+1=2+1=3...
            pontuaçãoUser++
            resultadoDoUsuario.innerHTML = pontuaçãoUser
            resultado.innerHTML = 'Você Ganhou da Alexa!!!'

    } else {
        // Aqui a variável irá somar mais um. 0+1=1+1=2+1=3...
        pontuaçãoMachine++
        resultadoDaMaquina.innerHTML = pontuaçãoMachine
        resultado.innerHTML = 'Você Perdeu para Alexa!!'

    }
}