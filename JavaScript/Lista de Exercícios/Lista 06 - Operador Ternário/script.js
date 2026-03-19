//1 - Verificação de Maioridade


let idade = Number(prompt("Qual a sua idade?"))
let maior = idade < 18 ? "Menor de Idade" : "Maior de Idade"
console.log(nota2)
console.log("--------------------------")


//2 - Par ou Ímpar


let numero = Number(prompt("Informe um número"))
let divisivel = numero % 2 ? "Par" : "Ímpar"
console.log(divisivel)
console.log("--------------------------")


//3 - Resultado Escolar


let nota = Number(prompt("Informe a sua nota"))
let aprovacao = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(aprovacao)
console.log("--------------------------")


//4 - Saldo Bancário


let saldo = Number(prompt("Informe o seu saldo"))
let saldo1 = saldo > 0 ? "Positivo" : "Negativo"
console.log(saldo1)
console.log("--------------------------")


//5 - Desconto na Compra


let compra = Number(prompt("Informe o valor da compra"))
let compra1 = compra >= 100 ? "Você vai receber 10% de desconto" : "Sem desconto"
console.log(compra1)
console.log("--------------------------")


//6 - Entrada em Evento


let idade3 = Number(prompt("Qual a sua idade?"))
let idade4 = idade3 >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(idade4)
console.log("--------------------------")


//7 - Login Simples

let login = Number(prompt("Qual é o usuário?"))
let login1 = login == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(login1)
console.log("--------------------------")


//8 - Temperatura


let temperatura = Number(prompt("Qual é a temperatura?"))
let temp1 = temperatura > 30 ? "Está quente" : "Temperatura normal"
console.log(temp1)
console.log("--------------------------")


//9 - Número Positivo ou Negativo


let numero1 = Number(prompt("Informe um número:"))
let numero2 = numero1 > 0 ? "Número positivo" : "Número negativo ou zero"
console.log(numero2)
console.log("--------------------------")


//10 -  Faixa Etária


let idadep = Number(prompt("Informe sua idade"))
let idadep1 = idadep < 12 ? "Criança" : idadep < 18 ? "Adolescente" : idadep < 60 ? "Adulto" : "Idoso"
console.log(idadep1)
console.log("--------------------------")


//11 - Velocidade do Veículo



let velocidade = Number(prompt("Informe a velocidade:"))
let veloc2 = numero1 > 80 ? "Multado" : "Dentro do limite"
console.log(veloc2)
console.log("--------------------------")


//12 - Compra Aprovada


let valor = Number(prompt("Informe o valor da compra:"))
let limite = Number(prompt("Informe o limite do cartão:"))
let comprar = valor >= limite ? "Compra aprovada" : "Compra recusada"
console.log(comprar)
console.log("--------------------------")


//13 - Sistema de Pontuação de Jogo


let pont = Number(prompt("Informe sua idade"))
let pont1 = pont < 100 ? "Iniciante" : pont < 500 ?"Intermediário" : pont < 1000 ?"Avançado": "Mestre"
console.log(pont1)
console.log("--------------------------")
