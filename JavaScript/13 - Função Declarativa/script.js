// FUNCOES DECLARATIVAS
let a = 10
let b = 5
console.log(a+b)

let c = 54
let d = 14
console.log(c+d)

function mensagem() {
    console.log("Primeira função")
}
mensagem()
mensagem()
mensagem()
mensagem()

function saudacao() {
    let nome = prompt("Qual seu nome?")
    console.log("olá",nome)
}
saudacao()

function soma() {
    let n1 = Number(prompt("Digite um número"))
    let n2 = Number(prompt("Digite um número"))
    let soma = n1+n2
    console.log(soma)
}

console.log("=============================")

/* Uma escola solicitou um sistema de aprovação de alunos, crie uma função, peça duas notas para o aluno, calcule a média e, se a média for maior ou igual a 7, mostre "Aprovado", senão, "Reprovado" */

function alunos() {
    let nota1 = Number(prompt("Digite a nota1"))
    let nota2 = Number(prompt("Digite a nota2"))
    let media = ((nota1 + nota2) / 2)
    if (media >= 7) {
        console.log("Aprovado")
} else {
    console.log("Reprovado")
   }
}
alunos()
console.log("=============================")

/* Foi solicitado um sistema para classificar a pontuação de um jogo e um usuário. Crie uma função, pergunte a pontuação, e, se fro maior ou igual a 3000, mostre "vencedor", se for maior ou igual a 2200, mostre "segundo lugar", se for maiorou igual a 1800, mostre "terceiro lugar", senão mostre, "não foi dessa vez"*/

function jogo() {
    let pontuacao = Number(prompt("Qual a pontuação?"))
    if (pontuacao >= 3000) {
        console.log("Vencedor")
    } else if (pontuacao >= 2200) {
        console.log("Segundo Lugar")
    } else if (pontuacao >= 1800) {
        console.log("Terceiro Lugar")
    } else {
        console.log("Não foi dessa vez")
    }
}
jogo()