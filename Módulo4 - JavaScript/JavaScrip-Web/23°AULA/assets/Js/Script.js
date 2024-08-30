const buttonConvert = document.querySelector(".button-img")
const fromSelect = document.querySelector(".select-from")
const toSelect = document.querySelector(".select-to")

function convertValues(){
    const inputValue = document.querySelector(".input-value").value
    const fromValueCurrency = document.querySelector(".currency-value-from")
    const toValueCurrency = document.querySelector(".currency-value-to")

    // console.log(fromSelect.value)
    console.log(toSelect.value)
    const dolarToday = 4.93
    const euroToday = 5.22
    const libraToday = 6
    const bitcoinToday = 168.693

    if(toSelect.value == "dolar"){
        toValueCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue/dolarToday)
    }
    if(toSelect.value == "euro"){
        toValueCurrency.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue/euroToday)
    }
    if(toSelect.value == "libra"){
        toValueCurrency.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue/libraToday)
    }
    if(toSelect.value == "bitcoin"){
        toValueCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue/bitcoinToday)
    }

    fromValueCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

function currencyExchangeTo(){
    const toNameCurrency = document.querySelector(".currency-name-to")
    const toImgCurrency = document.querySelector(".to-img")

    console.log(toSelect.value)

    if(toSelect.value == "dolar"){
        toNameCurrency.innerHTML = "Dólar Americano"
        toImgCurrency.src = "./assets/img/USD.png"
    }
    if(toSelect.value == "real"){
        toNameCurrency.innerHTML = "Real Brasileiro"
        toImgCurrency.src = "./assets/img/BRL.png"
    }
    if(toSelect.value == "euro"){
        toNameCurrency.innerHTML = "Euro"
        toImgCurrency.src = "./assets/img/EUR.png"
    }
    if(toSelect.value == "libra"){
        toNameCurrency.innerHTML = "Libra Esterlina"
        toImgCurrency.src = "./assets/img/GBP.png"
    }
    if(toSelect.value == "bitcoin"){
        toNameCurrency.innerHTML = "Bitcoin"
        toImgCurrency.src = "./assets/img/BTC.png"
    }

    convertValues()
}

buttonConvert.addEventListener("click", convertValues)
toSelect.addEventListener("change", currencyExchangeTo)
fromSelect.addEventListener("change", fromExchangeCurrency)