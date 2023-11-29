// Mapa da ul.
const list = document.querySelector('ul')
// Variável para guardar a li.
let myLi = ''

// Mapa do button ForEach para mostrar todos os itens na tela.
const playButton = document.querySelector('.playAll')
// Mapa do button Map -> para descontar os dez porcento.
const mapbutton = document.querySelector('.mapAll')
// Mapa do button para somar todos os preços.
const reduceButton = document.querySelector('.reduceAll')
/// Mapa do button para filtrar os itens veganos.
const filterButton = document.querySelector('.filterAll')

// Função para formatar os valores para real.
function formatCurrency(value){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

// função para mostrar na tela todos os itens.
function showAll(product){
    // Quando colocamos a variável dentro da função, serve para dar reset na variável. Resumindo, para não acumular valor.
    myLi = ''

    // ForEach para colocar os itens na tela.
    product.forEach((product) => {
        // Variável somando com ela mesma -> myLi = myLi + myLi 
        myLi += `
            <li>
                <img src=${product.src}>
                <p class="info">${product.name}</p>
                <p class="price">${formatCurrency(product.price)}</p>
            </li>
        `
})
    // Função para colocar na tela.
    list.innerHTML = myLi
}

// Função para dar desconto.
function mapAllItens(){
    // Novo array para tirar dez porcento de desconto.
    const newPrices = menuOptions.map((product) => ({
    // spreat operator -> usa-se para esparramar o item todo para não precisar com um por um..
    ...product,
    price: product.price * 0.9 //desconto de 10%  
}))

    // Chamando a função showAll para mostrar na tela.
    showAll(newPrices)
}

// Função para somar todos os itens.
function reduceAllitens(){
    // Função reduce somando todos os valores dos lanches.
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    // Variável guardando a informação que quero colocar na tela.
    myLi = `
    <li>
        <p class="price">Total de todos os lanches é R$: ${formatCurrency(totalValue)}</p>    
    </li>
    `
    // Função para colocar na tela.
    list.innerHTML = myLi
}

// Função para chamar o filter para filtrar os itens veganos.
function filterAllVegan(){ 
    // Filter com um condição -> condição é .. vegan = true.
    const veganList = menuOptions.filter((product) => product.vegan === true)

    // Chamando a função showAll para mostrar na tela.
    showAll(veganList)
}


// Eventos de clicks..
playButton.addEventListener('click', () => showAll(menuOptions))
mapbutton.addEventListener('click', mapAllItens)
reduceButton.addEventListener('click', reduceAllitens)
filterButton.addEventListener('click', filterAllVegan)