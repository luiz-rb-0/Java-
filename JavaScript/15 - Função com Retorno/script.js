//Função com Retorno


//Função sem parâmetro e retorno

function soma() {
    let num1 = Number(prompt("Informe o primeiro número"));
    let num2 = Number(prompt("Informe o segundo número"));
    let soma = num1 + num2
    console.log(soma)
}

console.log("-------------------------")
//Função com parâmetro

function soma2(num3, num4) {
let soma2 = num3 + num4
console.log(soma2)
}
let num3 = Number(prompt("Informe o primeiro número: "))
let num4 = Number(prompt("Informe o segundo número: "))
soma2(num3, num4)

console.log("-------------------------")
//Function com Retorno

function soma3(num5, num6) {
    let soma3 = num5 + num6
    return soma3
}
//let num5 = Number(prompt("Informe o primeiro número: "))
//let num6 = Number(prompt("Informe o segundo número: "))
//let resultado = soma3(num5, num6)
//console.log(resultado)
console.log("-------------------------")
//Dobro de um número
function dobro (numero) {
let total = numero * 2
return total
}
//let numero = 65
//let resul = dobro(numero)
//console.log(resul)
console.log("-------------------------")
//Situação do aluno
function aprovacao(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    if(media >= 7) {
        return "Aprovado"
    }else{
        return "Reprovado"
    }
    }
let nota1 = 7
let nota2 = 3
console.log("-------------------------")
//Maior número
function maiorNumero(n1, n2) {
    if (n2 > n1) {
        return "O número"+n2+"é maior"
    } else {
        return "São iguais"
    }
}
let n1 = 8
let n2 = 5
let result = maiorNumero(n1, n2)
console.log(result)
console.log("-------------------------")
/*Peça para o usuário um número e mostre o triplo do valor*/
function triplo(nume1, nume2)  {
let nume1 = Number(prompt("Digite um número"))
let triplo = nume1 * 3
return "O triplo do "+nume1+"é "+triplo
}
console.log("-------------------------")

/*Uma escola está fazendo uma competição de quem consegue pensar na maior palavra já criada. Faça uma função que pede para o usuário uma palavra, conte quantas letras tem, se tiver mais que 10, diga "uau" senão, diga, "existem palavras maiores"*/

function contar (palavra){
    if(palavra.length > 10) {
    console.log("Uau")
} else {
    return "existem palavras maiores"
}
}
let palavra = prompt("Diga uma palavra")
let letras = contar(palavra)
console.log(letras)

/* Peça dois números para o usuário e crie uma função que mostre qual é maior*/


function maior (numero1, numero2){
let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite um número"))

if (numero1 > numero2) {
    return "O primeiro número é maior"
} else if (numero2>numero1) {
    return "O segundo número é maior"
} else {
    return "Eles são iguais"
}




function empresa (salario, anos){
    if(salario < 3000 && anos > 3) {
        let novoSalario  = salario + 500
        return novoSalario
    } else {
        return "Sem aumento"
    }
    
}




}




