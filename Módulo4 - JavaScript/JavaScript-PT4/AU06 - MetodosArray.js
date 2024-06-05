/*
                                            - Metodos Array.

        - Array's.

                - push -> Adiciona mais um item ao array.
                        - const myArray = [1,2,3]

                        - myArray.push(4) - Ele adiciona na ultima posição do array.

                        - console.log(myArray)
                        // [1, 2, 3, 4]

                - lenght -> Mostra o tamanho do array.
                        - const myArray = [1,2,3]

                        - console.log(myArray.lenght) - Mostra a quantidade de itens que tem no array.
                        // [4 posições]
                        
                - sort -> Organiza o array.
                        - let myArray = ['mamao', 'abacate', 'laranja']

                        - myArray.sort() - Organiza em ordem alfabetica.

                        - console.log(myArray)
                        // ['abacate', 'laranja', 'mamao']

                - delete -> Deleta o item de uma posição do array.
                        - const myArray = ['mamao', 'abacate', 'laranja']

                        - delete myArray[0] - Deleta o item da posição que você quer, no caso o mamao da posiçao 0.

                        - console.log(myArray)
                        // ['undefined']

                - every -> Esse método testa se todos os elementos do array passam em um condição. Passamos uma função que retorna true ou false. Se todos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
                        - const users = [
                                {name: 'Nico', credit: 600},
                                {name: 'Maria', credit: 900},
                                {name: 'Joana', credit: 300},
                                {name: 'Vanessa', credit: 200},
                        ] 

                        - const isTrue = users.every( user => user.credit => 100) - Validação, se é true ou false.

                        - console.log(isTrue)
                        // true

                - some -> Faz algo parecido com every(). A diferença é que o every() só retorna true se todos os elementos passarem no teste. O some() retorna true se pelo menos um elemento do array passar no teste.
                        - const users = [
                                {name: 'Nico', credit: 600},
                                {name: 'Maria', credit: 900},
                                {name: 'Joana', credit: 300},
                                {name: 'Vanessa', credit: 200},
                        ] 

                        - const oneTrue = users.some( user => user.credit > 800) - Validação.

                        - console.log(oneTrue)
                        // true

                - fill -> Preenche posição do array como desejamos.
                        - Aceita 3 parâmetros.
                                - 1 -> O que vai ser colocado no array.
                                - 2 -> A posição inicial.
                                - 3 -> Posição final.
                        
                        - const numbers = [1, 2, 3, 4]

                        - numbers.fill(oQueQuerColocar, posiçãoInicial, posiçãoFinal)
                        - numbers.fill(5) - Se colocar só um parâmetro irá substituir todas as posições com o "5".
                        - numbers.fill(5, 0, 2) - Aqui o "5" só vai ocupar a posição zero e vai ate a 1, antes da 2.

                        console.log(numbers)
                        // [5, 5, 3, 4]

                - find -> Usamos esse método quando queremos encontrar algum elemento dentro do array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
                        - const users = [
                                {name: 'Nico', credit: 600},
                                {name: 'Maria', credit: 900},
                                {name: 'Joana', credit: 300},
                                {name: 'Vanessa', credit: 200},
                        ] 

                        - const findAUsers = users.find( user => user.name === 'Maria') - Validação que retorna o item inteiro.

                        - console.log(finsAUsers)
                        // [name: 'Maria', credit: 900]

                        -----------------------------------------------------------------------------------------------

                        - const numbers = [1, 2, 3, 4, 5]

                        - const myNumber = numbers.find( user => user === 3) - Validação que retorna o item.

                        - console.log(myNumber)
                        // [3]

                - findIndex -> Faz o mesmo que o find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento. 
                        - const users = [
                                {name: 'Nico', credit: 600},
                                {name: 'Maria', credit: 900},
                                {name: 'Joana', credit: 300},
                                {name: 'Vanessa', credit: 200},
                        ] 

                        - const findIndexUsers = users.findIndex( user => user.name === 'Maria') - Validação que retorna a posição do array. No caso da "Maria" está na posição 1.

                        - console.log(finIndexAUsers)
                        // [posição 1]

                        - users[findIndexUsers].name = 'Maria Joaquina'. - Exemplo de como trocar o nome usando o findIndex.

                        - OBS: Caso ele não encontre o item ele retornará "-1".

                - concat -> Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
                        - const array1 = ['a','b','c'] 
                        - const array2 = ['d','e','f']
                        - const number1 = [1, 2, 3]
                        - const number2 = [4, 5, 6]

                        - const juntarArraysStrings = array1.concat(array2) - Array que juntas os dois arrays de strings.
                        - const juntarArraysNumbers = number1.concat(number2) - Array que junta os dois arrays de números.
                        - const stringNumber = array1.concat(number1) - Array que junta strings com números. 

                        - console.log(juntarArraysStrings)
                        // ['a', 'b', 'c', 'd', 'e', 'f']

                        - console.log(juntarArraysNumbers)
                        // [1, 2, 3, 4, 5, 6]

                        - console.log(stringNumber)
                        // ['a', 'b', 'c', 1, 2, 3]

                - join -> O método join() junta todos os elementos de um array de uma forma diferente.
                        - const elements = ['Fire', 'Air', 'Water']

                        - const myElements = elements.join('-') - Dentro do paresteses você ira colocar o que você quer que separe, por exemplo: ponto, vingula, traço, aspas, etc...

                        - console.log(myElements)
                        // [Fire-Air-Water]

                - pop -> Remove o último elemento de um array.
                        - const elements = ['Fire', 'Air', 'Water']

                        - elements.pop() - Elimina o último item do array.

                        - console.log(elements)
                        // ['Fire', 'Air']

                - shift -> Remove o primeiro elemento de um array.
                        - const elements = ['Fire', 'Air', 'Water']

                        - elements.shift() - Elimina o primeiro item do array.

                        - console.log(elements)
                        // ['Air', 'Water']

                - slice -> O método slice() retorna um novo array, apenas com as informações escolhidas - Não altera o array original.
                        - Aceita 2 parâmetros.
                                - 1 -> Posição do array da qual vamos começar a pegar as informações para criar o novo array.
                                - 2 -> Posição final do array que vamos pagar os dados.

                        - const users = ['João', 'Maria', 'Pedro', 'Michele', 'Fernando']

                        - const newArray = users.slice(começaAPegarDaPosição"0(joao)", ateAPosição"2(pedro)")
                        - const newArray = users.slice(0, 3) - Você escolhe quais informações você quer. Para pegar até a posição "2", você coloca a posição "3", uma depois da que você quer pegar. Como no exemplo.

                        - console.log(newArray)
                        // ['João', 'Maria', 'Pedro']

                - splice -> Esse método remove ou adiciona elementos em um array em uma posição especifica - Altera o array original.
                        - Aceita 3 parâmetros.
                                - 1 -> Posição do array da qual vamos começar a tirar as informações.
                                - 2 -> Quantos elementos eu quero retirar a partir da posição inicial.
                                - 3 -> Item que você quer adicionar.

                        - const users = ['João', 'Maria', 'Pedro', 'Michele', 'Fernando']

                        - user.splice(retirar, quantasPosições, adicionar)
                        - users.splice(1, 1, "Patricia") - Retirou a "Maria" e colocou a "patricia" no lugar.

                        - console.log(users)
                        // ['João', 'Patricia', 'Pedro', 'Michele', 'Fernando']

                        -----------------------------------------------------------------------------------------------

                        - Aceita 3 parâmetros.
                                - 1 -> Posição do array da qual vamos começar a tirar as informações.
                                - 2 -> Quantos elementos eu quero retirar a partir da posição inicial.
                                - 3 -> Item que você quer adicionar.

                        - const users = ['João', 'Maria', 'Pedro', 'Michele', 'Fernando']

                        - user.splice(retirar, quantasPosições, adicionar)
                        - users.splice(1, 2, "Patricia") - Retirou a "Maria e o Pedro" e colocou a "patricia" no lugar.

                        - console.log(users)
                        // ['João', 'Patricia', 'Michele', 'Fernando']

*/

const array = [1, 2 ,3]

const myArray = array.find( number => number === 4)

console.log(myArray);