//1 - Verificação de Maioridade


console.log("--------------------------")
let idade = Number(prompt("Qual a sua idade?"))
if(idade >= 18) {
console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
console.log("--------------------------")


//2 - Verificação de Paridade


console.log("--------------------------")
let numero = Number(prompt("Informe um número:"))
let resto = numero % 2
if (resto ==0){
console.log("O número é par")
} else {
console.log("O número é impar")
}
console.log("--------------------------")


//3 - Verificação de Aprovado


console.log("--------------------------")
let nota = Number(prompt("Qual a sua nota?"))
if(nota >= 7) {
console.log("Você foi aprovado")
} else {
    console.log("Você foi reprovado")
}
console.log("--------------------------")



//4 - Comparar Idade para Entrada em Evento


console.log("--------------------------")
let idade_evento = Number(prompt("Qual a sua idade?"))
if(idade_evento >= 18) {
console.log("Entrada permitida")
} else {
    console.log("Entrada não permitida")
}
console.log("--------------------------")


//5 - Verificar Senha


console.log("--------------------------")
let senha = Number(prompt("Qual a senha?"))
if(senha == 1234) {
console.log("Senha Correta")
} else {
    console.log("Senha Incorreta")
}
console.log("--------------------------")


//6 - Verificar Temperatura


console.log("--------------------------")
let temperatura = Number(prompt("Qual a temperatura?"))
if(temperatura > 30) {
console.log("Está quente")
} else {
    console.log("Está frio")
}
console.log("--------------------------")


//7 - Verificar se Número é Positivo ou Negativo


console.log("--------------------------")
let positivo = Number(prompt("Insira um número:"))
if(positivo >= 0) {
console.log("O número é positivo")
} else {
    console.log("O número é negativo")
}
console.log("--------------------------")


//8 - Verificar saldo Bancário


console.log("--------------------------")
let conta = Number(prompt("Qual o saldo da conta?"))
let saque = Number(prompt("Qual o valor do saque?"))
let saldo = conta - saque
if(saldo >= 0) {
console.log("Saque realizado")
} else {
    console.log("Saldo Insuficiente")
}
console.log("--------------------------")


//9 - Verificar Desconto


console.log("--------------------------")
let compra = Number(prompt("Qual o valor da compra?"))
if(compra >= 200) {
console.log("Desconto aplicado")
} else {
    console.log("Sem desconto")
}
console.log("--------------------------")


//10 - Verificar Número Maior


console.log("--------------------------")
let numero1 = Number(prompt("Insira o primeiro número:"))
let numero2 = Number(prompt("Insira o segundo número:"))
if(numero1 > numero2) {
console.log(numero1 + " é maior que " + numero2)
} else {
    console.log(numero2 + " é maior que " + numero1)
}
console.log("--------------------------")


//11 - Verificar Login


console.log("--------------------------")
let nome = Number(prompt("Nome de usuário:"))
if(nome == "admin") {
console.log("Acesso Permitido")
} else {
    console.log("Acesso Negado")
}
console.log("--------------------------")


//12 - Classificação de Nota


console.log("--------------------------")
let nota_classificacao = Number(prompt("Qual a sua nota?"))
if(nota_classificacao >= 9) {
console.log("Excelente")
} else {
    console.log("Pode Melhorar")
}
console.log("--------------------------")


//13 - Verificar horário


console.log("--------------------------")
let hora = Number(prompt("Que horas são (0 a 23)"))
if(hora >= 8 && hora <=18) {
console.log("Horário de Funcionamento")
} else {
    console.log("Fora do horário")
}
console.log("--------------------------")


//14 - Verificar Cadastro


console.log("--------------------------")
let cadastro = Number(prompt("Você tem cadastro?"))
if(cadastro == "sim") {
console.log("Ususário cadastrado")
} else {
    console.log("Cadastro necessário")
}
console.log("--------------------------")