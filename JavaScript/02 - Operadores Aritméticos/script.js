//Operadores Aritméticos
let numero1 = 5
let numero2 = 7

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2
let modulo = numero1 % numero2

console.log(soma)
console.count(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)

let preco = prompt("Qual o valor do produto?")
let quantidade = Number(prompt ("Qual a quantidade do produto?"))
let total = preco * quantidade
console.log("O total a pagar é: R$"+ total)
//Sempre que a entrada for um número, coloque o Number antes do prompt

/*Um grupo de amigos foi a um restautante, e no final decidiram dividir a conta. Faça um programa que pergunte a quantidade de amigos e o total da conta e mostre quanto cada um deve pagar*/

let quantia = Number (prompt("Quantas pessoas são?"))
let valor_da_conta = Number (prompt("Qual o valor total da conta?"))
let valor_pra_cada = valor_da_conta / quantia
console.log("O valor que cada pessoa deve pagar é: R$" + valor_pra_cada)

/* Três amigos decidiram juntos comprar uma pizza, cada amigo irá contribuir com uma quantidade de valor. Faça um programa que receba o valor que cada amigo contribuiu e mostre quanto ele tem juntos */

let valor_do_amigo1 = Number(prompt ("Quanto o primeiro amigo pagou?"))
let valor_do_amigo2 = Number (prompt ("Quanto o segundo amigo pagou?"))
let valor_do_amigo3 = Number (prompt ("Quanto o terceiro amigo pagou?"))
let valor_total = valor_do_amigo1 + valor_do_amigo2 + valor_do_amigo3
console.log("O valor que os amigos tem em conjunto é: R$" + valor_total)

//incremento e Decremento

let contador = 0
contador++ //++ = +1
console.log(contador)
contador-- //-- = -1
console.log(contador) //0
contador+=5
console.log(contador) //5
contador-=3
console.log(contador) //2