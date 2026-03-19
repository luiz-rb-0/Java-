//1 - Contador simples


let contador1 = 1
do{
console.log(contador1)
    contador1++
}while(contador1<=20)
    console.log("---------------------------------")


//2 - Resposta do usuário


let resposta1 = prompt("Deseja continuar")
do {
    resposta1 = prompt("Deseja continuar?")

    } while (resposta1 =="s"|| resposta1 =="n")


//3 - Sequência numérica definida pelo usuário


let sequencia1 = prompt("Informe um número para se o último da sequência")
let numero3 = 1
do {
    console.log(numero3)
        numero3++
    } while(numero3 <= sequencia1)


//4 - Contador com salto


let sequencia2 = 1
do {
    console.log(sequencia2)
    sequencia2 += 2
} while(sequencia2 <= 31)


//5 - Classificação numérica


console.log("5 - Classificação numérica\n")
let d = 1
let numero
do {
    numero = Number(prompt("Digite um número:"))
    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    d++
} while (d <= 5)

console.log("\n")


//6 - Operações matemáticas


console.log("6 - Operações matemáticas\n")
let opcao
do {
    opcao = prompt("Deseja fazer uma conta? (s/n)")
    if (opcao === "s") {
        let n1 = Number(prompt("Digite o primeiro número:"))
        let n2 = Number(prompt("Digite o segundo número:"))
        console.log("Soma:", n1 + n2)
    }
} while (opcao === "s")
console.log("Programa encerrado.")

console.log("\n")


//7 - Repetição de mensagem


console.log("7 - Repetição de mensagem\n")
let e = 1
do {
    console.log("Estudando JavaScript")
    e++
} while (e <= 10)

console.log("\n")


//8 - Validação de número positivo


console.log("8 - Validação de número positivo\n")
let positivo
do {
    positivo = Number(prompt("Digite um número positivo:"))
} while (positivo <= 0)
console.log("Valor válido!")

console.log("\n")


//9 - Controle de tentativas


console.log("9 - Controle de tentativas\n")
let senha
do {
    senha = prompt("Digite a senha:")
} while (senha !== "senai2026")
console.log("Acesso liberado.")

console.log("\n")


//10 - Soma de números


console.log("10 - Soma de números\n")
let total = 0
let resposta
do {
    let valor = Number(prompt("Digite um número inteiro:"))
    total += valor
    resposta = prompt("Deseja continuar? (s/n)")
} while (resposta == "s")
console.log("Total da soma:", total)

console.log("\n")

console.log("fim")