// Estrutura Condicional

let idade = 14
console.log(idade >= 14)
console.log("O aluno tem idade maior ou igual a 14?", idade => 14)
if (idade >= 14) {
    console.log("O aluno pode fazer os cursos do Senai")
}
console.log("------------------------------")
let salario = Number(prompt("Qual seu salário"))
if (salario <= 1500) {
    console.log("Você não terá um aumento")

    console.log("--------------------------")
    let numero = Number(prompt("Informe um número: "))
    let resto = numero % 2
    if (resto ==0){
        console.log("O número é par")
    } else {
        console.log("O número é impar")
    }
    console.log("--------------------------")
    }
/* Para fazer o curso de panificação do Senai o aluno deve ter conhecimento de boas práticas na cozinha, verifique se ele tem esse conhecimento e mostre ele pode fazer o curso*/
let resposta = prompt("Você temconhecimento em boas práticas na cozinha?")
if (resposta == "sim") {
    console.log("Você pode fazer o curso")
} else {
    console.log("Você não pode fazer o curso")
}
console.log("----------------------------------")
/* Para ser aprovado no Senai, o aluno deve ter nota minima de 50, verifique a nota informada pelo usuário e veja se ele será aprovado */
let nota = prompt("Qual a sua nota?")
if (nota >= 50) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
console.log("----------------------------------")