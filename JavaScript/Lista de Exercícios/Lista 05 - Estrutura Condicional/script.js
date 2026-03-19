//1 - Classificação de Nota 


let nota = Number(prompt("Qual sua nota?"))
if (nota >= 9) {
  console.log("Excelente")
} else if (nota >= 7) {
  console.log("Bom")
} else if (nota >= 5) {
  console.log("Regular")
} else {
  console.log("Insuficiente")
}


//2 - Sistema de Aprovação Escolar


let nota_aprovacao = Number(prompt("Qual a sua nota?"))
let faltas = Number(prompt("Quantas faltas você tem?"))
if (nota_aprovacao >= 7 && faltas <= 10) {
  console.log("Aprovado")
} else if (nota_aprovacao >= 5 && faltas <= 10) {
  console.log("Recuperação")
} else {
  console.log("Reprovado")
}


//3 - Verificação de Idade


let idade = Number(prompt("Qual sua idade?"))
if (idade < 12) {
  console.log("Criança")
} else if (idade > 12 && idade <= 17) {
  console.log("Adolescente")
} else if (idade > 17 && idade <= 59) {
  console.log("Adulto")
} else {
  console.log("Idoso")
}


//4 - Classificação de Temperatura


let temperatura = Number(prompt("Qual a temperatura?"))
if (temperatura >= 35) {
  console.log("Muito quente")
} else if (temperatura >= 25) {
  console.log("Quete")
} else if (nota >= 15) {
  console.log("Agradável")
} else {
  console.log("Frio")
}


//5 - Sistema de Descontos


let compra = Number(prompt("Qual o valor da compra?"))
if (compra >= 500) {
  console.log("20% de desconto")
} else if (compra >= 300) {
  console.log("15% de desconto")
} else if (compra >= 100) {
  console.log("10% de desconto")
} else {
  console.log("Sem desconto")
}


//6 - Classificação de Velocidade


let velocidade = Number(prompt("Qual a velocidade?"))
if (velocidade <= 60) {
  console.log("Dentro do limite")
} else if (velocidade <= 80) {
  console.log("Atenção")
} else if (velocidade <= 100) {
  console.log("Multa leve")
} else {
  console.log("Multa grave")
}


//7 - Turno de Estudo


let turno = Number(prompt("Qual o seu turno?"))
if (turno == "M") {
  console.log("Matutino")
} else if (turno == "V") {
  console.log("Vespertino")
} else if (turno == "N") {
  console.log("Noturno")
} else {
  console.log("Turno Inválido")
}


//8 - Avaliação de IMC (simplificado)


let imc = Number(prompt("Qual seu IMC?"))
if (imc < 18.5) {
  console.log("Abaixo do peso")
} else if (imc < 25) {
  console.log("Bom")
} else if (nota >= 5) {
  console.log("Regular")
} else {
  console.log("Insuficiente")
}