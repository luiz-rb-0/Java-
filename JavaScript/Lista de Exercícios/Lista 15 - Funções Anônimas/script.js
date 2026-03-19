//1 - Triplo de um Número

function triplo(numero){
    return numero * 3
}
let numero = Number(prompt("Escolha um número: "))
console.log(triplo(numero))
console.log("-----------------------")


//2 - Multiplicação de Dois Números

function multiplicar(numero1, numero2){
    return numero1 * numero2
}
let numero1 = Number(prompt("Escolha um número: "))
let numero2 = Number(prompt("Escolha outro número: "))
console.log(multiplicar(numero1, numero2))
console.log("-----------------------")


//3 - Metade de um Número

function metade(numero3){
    return numero3 / 2
}
let numero3 = Number(prompt("Escolha um número: "))
console.log(metade(numero3))
console.log("-----------------------")


//4 - Antecessor e Sucessor

function sucessor(numero4){
    return numero4 + 1
}
let numero4 = Number(prompt("Escolha um número: "))
console.log(sucessor(numero4))
console.log("-----------------------")


//5 - Verificar Maior Número

function maiorNumero(numero5, numero6){
    if (numero5 > numero6) {
       return numero5 + " é maior que " + numero6
    } else {
        return numero6 + " é maior que " + numero5
}
}
let numero5 = Number(prompt("Escolha um número: "))
let numero6 = Number(prompt("Escolha outro número: "))
console.log(maiorNumero(numero5, numero6))
console.log("-----------------------")


//6 - Verificar Número Positivo ou Negativo

function verificarNumero(numero7){
    if (numero7 > 0) {
       return "Positivo"
    } else if (numero7 < 0){
        return "Negativo"
} else {
    return "Zero"
}
}
let numero7 = Number(prompt("Escolha um número: "))
console.log(verificarNumero(numero7))
console.log("-----------------------")


//7 - Par ou Ímpar

function parImpar(numero8){
    if (i % 2 === 0) {
            return "Par"
    } else {
        return "ímpar"
    }
}
let numero8 = Number(prompt("Escolha um número: "))
console.log(parImpar(numero8))
console.log("-----------------------")


//8 - Calcular Média

function media(numero9, numero10, numero11){
    return (numero9 + numero10 + numero11) / 3
}
let numero9 = Number(prompt("Escolha um número: "))
let numero10 = Number(prompt("Escolha outro número: "))
let numero11 = Number(prompt("Escolha mais um número: "))
console.log(media(numero9, numero10, numero11))
console.log("-----------------------")


//9 - Calcular Desconto

function calcularDesconto(valorproduto){
    return (valorproduto / 100) * 85
}
let valorproduto = Number(prompt("Qual o valor do produto? "))
console.log(calcularDesconto(valorproduto))
console.log("-----------------------")


//10 - Verificar Aprovação

function verificarAprovacao(nota1, nota2){
let media = (nota1 + nota2) / 2
    if (media >= 7) {
       return "Aprovado"
    } else if (media >= 5 && media < 7){
        return "Recuperação"
} else {
    return "Reprovado"
}
}
let nota1 = Number(prompt("Qual a sua nota? "))
let nota2 = Number(prompt("Qual a sua outra nota? "))

console.log(verificarAprovacao(nota1, nota2))
console.log("-----------------------")