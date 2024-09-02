/*
    - 12° AULA - SetTimeout & SetInterval:
                                    
        - setTimeout -> Executa uma vez.
        - setInterval -> Executa infinitas vezes.

 */


// Exemplo usado no video.
//setTimeout(function() {
         // Executa oq está aqui dentro.
//}, timeout); // Colocar o tempo aqui no lugar no "timeout" / Tempo em Milisegundos / 1000 = 1 segundo.

// Vai executar depois do tempo determinado.
// setTimeout(function() {
//     alert = "Executei"
// }, 3000);


const number = 0

// Exemplo usando o  setInterval.
setInterval(() => {
    console.log(number++)
}, 1000);
// Usa-se o clearInterval para pausar o setInterval. / Será usado no projeto no próximo arquivo.


// Exemplo usando o setTimeout:
// Tem três formas para fazer.

// // 1° -> 
// setTimeout(() => {
//     // Executa oq está aqui dentro.
// }, timeout);
    
// // 2° -> 
// setTimeout(function() {
//     // Executa oq está aqui dentro.
// }, timeout);

// // 3° ->
// function myFunction(){
//     // Executa oq está aqui dentro.
// }
// setTimeout(myFunction, timeout);
