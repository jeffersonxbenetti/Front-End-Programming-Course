const button = document.querySelector("button")

function gerarNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    if(min >= max){
        alert("O valor minímo tem que ser MENOR que o valor máximo.")
    } else{
        alert("Número sorteado foi " + result)
    }
}

button.addEventListener("click", gerarNumber)