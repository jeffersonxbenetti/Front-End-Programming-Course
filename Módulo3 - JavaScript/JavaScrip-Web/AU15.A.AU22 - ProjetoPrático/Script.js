const buttonConvert = document.querySelector(".convert-button")
const toSelect = document.querySelector(".to-convert")

// Função para converter valores.
function convertValue() {
    const inputValue = document.querySelector(".input-value").value
    const toCurrencyValue = document.querySelector(".to-currency-value")
    const fromCurrencyValue = document.querySelector(".from-currency-value")


    console.log(toSelect.value);
    // Valores das moedas.
    const dolarToday = 5.2
    const euroToday = 6.2

    if(toSelect.value == "dolar") {
        fromCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue/dolarToday)
    }
    if(toSelect.value == "euro") {
        fromCurrencyValue.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue/euroToday)
    }

    toCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)    
    
}

// Função para selecionar moeda.
function currencyExchanged() {
    const fromCurrencyName = document.querySelector(".from-currency-name")
    const imgFromCurrencyConvert = document.querySelector(".currency-img-convert")    

    console.log(toSelect.value);

    if(toSelect.value == "dolar") {
        fromCurrencyName.innerHTML = "Dólar Americano"
        imgFromCurrencyConvert.src = "./assets/USD.png"
    }
    if(toSelect.value == "euro") {
        fromCurrencyName.innerHTML = "Euro"
        imgFromCurrencyConvert.src = "./assets/EURO.png"
    }

    convertValue()
}

buttonConvert.addEventListener("click", convertValue)
toSelect.addEventListener("change", currencyExchanged)