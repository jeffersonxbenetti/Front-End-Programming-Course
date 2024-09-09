/*
    - 15° AULA - ENUM:
    
        - Enum é um trecho de código usado corrigir, trocar valor em código.

            - EX: Você tem um código que vem trabalhando as meses,  e no decorrer no processo você se depara que acabou escrevendo uma palavra errada... o que você faria para corregir? Normalmente, você corrigiria a palavra e sairia colocando em todos campos que ela é usada, certo? Com o enum, é mais pratico, pois você nao precisa ficar copiando e colocando em todos os campor, só nos campos que são necessarios.
        
        - Ex: No caso do projeto jonkepô, como você faria para trocar os valores de papel,pedra e tesoura? Coloquei o código como foi feito, agora estarei colocando na pratica como mudaria sem precisar trocar todos os valores.
        
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

*/

// Exemplo pratico.
// Paragráfo que está vazio dentro do documento HTML, que será substituido pelo resultado do jogo.
const resultado = document.querySelector('.result') 
// Foram criadas duas variáveis para mostrar o resultado na tela.
const resultadoDoUsuario = document.querySelector('#result-user')
const resultadoDaMaquina = document.querySelector('#result-machine')

// Foram criadas duas variáveis para estar usando para mostrar o resultado na tela.
let pontuaçãoUser = 0
let pontuaçãoMachine = 0

// Usa-se uma variável para se criar um ENUM. O nome do formato dele é usado um Snake Case.
// gameOption -> Camel Case ------ GAME_OPTION -> Snake Case 
// Todo lugar que precisar usar, é só colocar GAME_OPTION.ROCK,GAME_OPTION.PAPER, OU GAME_OPTION.SCISSORS.
const GAME_OPTION = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
// O enum evita duas coisas.. 1 - Evita você a cometer erros durante o código. 2 - Se precisar trocar, não precisa trocar em todo lugar, e sim, em um lugar só.


// Uma arrow function esperando um parêmetro de quem à chama, no caso o botão que está no documento HTML.
const user = (usuario) => {

    // Chamando a função de "playGame" para estar verifincando o resultado do jogo. Também estou mandando dois parâmetros para ela verificar as escolhas do usuário(usuario) e da máquina(machine). 
    playGame(usuario, machine())
}

// Uma arrow function para saber a escolha da maquina.
const machine = () => {
    // Para fazer a maquina escolher entre, rock, paper e scissory, precisamos criar uma array onde tenha essas informações. E como já vimos que cada elemento de dentro de um array tem uma posição. Iremos usar o Math.random(), para estar buscar um número aleatorio entre 0 e 2. Onde 0(rock), 1(paper) e 2(scissory).

    // Array com os valores que a máquina precisa, para escolher.
    const escolher = [GAME_OPTION.ROCK, GAME_OPTION.PAPER, GAME_OPTION.SCISSORS] 

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
        (user === GAME_OPTION.PAPER && machine === GAME_OPTION.ROCK) ||
        (user === GAME_OPTION.ROCK && machine === GAME_OPTION.SCISSORS) ||
        (user === GAME_OPTION.SCISSORS && machine === GAME_OPTION.PAPER)) 
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