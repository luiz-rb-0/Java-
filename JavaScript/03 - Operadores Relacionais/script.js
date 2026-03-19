//Operadores Relacionais
// > maior      >= maior ou igual
// < menor      <= menor ou igual
// == igual     != diferente

console.log(5 > 10) //false
console.log(10 > 5) //true
console.log("-------------------------------")
let idade = Number(prompt("Qual sua idade?"))
console.log(idade >= 18)
console.log("-------------------------------")
let salario = Number(prompt("Qual seu salário?"))
let aumento = salario <= 2500
console.log(aumento)
console.log("-------------------------------")
let numero1 = Number(prompt("Informe um número"))
let numero2 = Number(prompt("Informe um número"))
console.log(numero1 > numero2)
console.log(numero1 < numero2)
console.log(numero1 == numero2)
console.log("-------------------------------")

/*Uma loja da descontos nos produtos direto no caixa. Faça um programa que receba o valor pago pelo usuário, dê R$20 de desconto e mostre se o valor que será pago é maior ou igual a R$50 */

let valor = Number(prompt("Qual o valor da compra?"))
let desconto = valor - 20
console.log(desconto >= 50)
console.log("-------------------------------")
/* Pergunte o NIF de um funcionário e verifique se:
- é igual a SNI08475
- é diferente de SN1048630 */

let nif = Number(prompt("Qual o seu NIF?"))
console.log(nif = "SN1081475")
console.log(nif != "SN1048630")