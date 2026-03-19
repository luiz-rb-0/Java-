//1 - Filmes favoritos:


let filmes = []
for(let i = 0; i < 3; i++) {
    let favoritos = prompt("Quais são os seus filmes favoritos?")
    filmes.push(favoritos)
}
console.log(filmes[0])


//2 - Criando e acessando um array:


let frutas = []
for(let i = 0; i < 5; i++) {
    let frutas1 = prompt("Escolha 5 frutas")
    frutas.push(frutas1)
}
console.log(frutas[3])


//3 - Adicionando elementos:


let cores = []
for(let i = 0; i < 3; i++) {
    let cores1 = prompt("Escolha 3 cores")
    cores.push(cores1)
}
let cores2 = prompt("Digite outra cor:")
cores.push(cores2)
for(let i = 0; i<cores.length; i++) {
    console.log(cores[i])
}


//4 - Removendo elementos:


let numeros = []
for(let i = 0; i < 4; i++) {
    let numeros1 = prompt("Escolha 4 números")
    numeros.push(numeros1)
}
numeros.pop()
console.log(numeros[3])


//5 - Adicionando no início:


let cidades = []
for(let i = 0; i < 2; i++) {
    let cidades1 = prompt("Escolha 2 cidades")
    cidades.push(cidades1)
}
let cidades2 = prompt("Escolha mais uma")
cidades.unshift(cidades2)
for(let i = 0; i<cidades.length; i++) {
    console.log(cidades[i])
}


//6 - Removendo do início:


let animais = []
for(let i = 0; i < 3; i++) {
    let animal = prompt("Digite um animal:")
    animais.push(animal)
}
animais.shift()
for(let i = 0; i < animais.length; i++) {
    console.log("Animal nº", i, ":", animais[i])
}


//7 - Verificando o tamanho:


let carros = []
for(let i = 0; i < 4; i++) {
    let carro = prompt("Digite um carro:")
    carros.push(carro)
}
console.log("Quantidade de carros:", carros.length)


//8 - Operações combinadas:


let valores = []
for(let i = 0; i < 3; i++) {
    valores.push(Number(prompt("Digite um número:")))
}
let valor = Number(prompt("Digite um número para o início:"))
valores.unshift(valor)
valores.pop()
valores.shift()
console.log("Array final:", valores)
console.log("Tamanho:", valores.length)

//9 - Vetor Vazio:

let vetor = []
for(let i = 0; i < 6; i++) {
    let vet = Number(prompt("Digite um número:"))
    vetor.push(vet)
}
for(let i = 0; i < vetor.length; i++) {
    console.log("Posição", i, ":", vetor[i])
}