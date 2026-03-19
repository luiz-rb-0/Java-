//1 - Declare duas variáveis numéricas e exiba:


let numero1 = 6
let numero2 = 5

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let modulo = numero1 % numero2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)


//2 - Área de um Retângulo


let altura = 8
let largura = 9
let area = altura * largura
console.log(area)


//3 - Dobro e Metade


let valor = 67
let dobro = valor * 2
let metade = valor / 2
console.log(dobro)
console.log(metade)


//4 - Média Aritmética


let nota1 = 10
let nota2 = 9.5
let nota3 = 9.9
let media = (nota1 + nota2 + nota3) / 3


//5 - Conversão de Temperatura


let graus_celsius = 38
let graus_fahrenheit = (graus_celsius * 9/5) + 32


//6 - Valor da Compra


let preco = Number (prompt("Qual o preço do produto comprado?"))
let quantidade = Number (prompt("Quantas unidades do produto foram compradas?"))
let preco_total = preco * quantidade
console.log("O valor a ser pago é: R$ " + preco_total)


//7 - Divisão da Conta


let valor_total_da_conta = Number (prompt("Qual o valor da conta?"))
let quantidade_de_pessoas = Number (prompt("Por quantas pessoas a conta será dividida?"))
let valor_individual = valor_total_da_conta / quantidade_de_pessoas
console.log("O valor a ser pago por cada um é: R$ " + valor_individual)


//8 - Idade em Meses


let idade = Number (prompt("Qual a sua idade"))
let meses = idade * 12
console.log("Você tem " + meses + " meses")


//9 - Divisão Exata


let dividendo = Number (prompt("Informe um número para ser dividido"))
let divisor = Number (prompt("Informe um número para dividir"))
let resultado = dividendo / divisor
let resto = numero1 % numero2
console.log("O resultado da divisão é " + resultado + " e o resto é " + resto)


//10 - Horas em Minutos


let valor_em_horas = Number (prompt("Informe um total de horas"))
let minutos = valor_em_horas * 60
console.log("Isso são " + minutos + " minutos")