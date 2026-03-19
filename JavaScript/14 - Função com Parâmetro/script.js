// FUNÇÃO sem PARÂMETRO
function saudacao() {
    let nome = prompt("Informe seu nome:")
    console.log("bem vindo,", nome, "!")
}
// saudacao()

// FUNÇÃO com PARÂMETRO
function saudacao2(nome2) {
    console.log("Bem vindo,", nome2)
}
let nome2 = prompt("Qual seu nome?")
// saudacao2(nome2)

console.log("============================")

function somar(num1, num2) {
    let soma = num1 + num2
    console.log(soma)
}
// somar(5,8)

console.log("============================")

function sozinho(numb) {
    for (i = 1; i <= numb; i++) {
        console.log(i)
    }
}
let numb = Number(prompt("Informe um número:"))
sozinho(numb)