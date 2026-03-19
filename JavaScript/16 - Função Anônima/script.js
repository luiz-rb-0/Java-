//Função Anônima
//Função com retorno
function dobro(numero){
    return numero * 2
}
let aux = dobro(3)
console.log(aux)
console.log("-----------------------")
let dobro2 = function(numero) {
    return numero * 2
}
let auxiliar = dobro2(3)
console.log(auxiliar)
console.log("-----------------------")




//Multiplicar dois números
let multiplicar = function(num1, num2) {
    return num1 * num2
}
let num1 = Number(prompt("Escolha um número"))
let num2 = Number(prompt("Escolha outro número"))
let total = multiplicar(num1, num2)
console.log(total)
console.log("----------------------")





let desconto = function(valor) {
    if(valor > 300) {
        let novoValor = (valor / 100) * 85
        return novoValor
    } else {
        return "Sem desconto"
    }
}
let valor = Number(prompt("Qual o valor?"))
console.log(desconto(valor))





let pares = function() {
  for(let i = 1; i <= 50; i++) {
    let resto = i % 2
    if(resto == 0) {
        return i
    }
    }
  }
  console.log(pares())





let valor1 = function(idade) {
  return idade * meses, idade * dias
}
let idade = Number(prompt("Qual a sua idade? "))
let meses = 12
let dias = 365
console.log(valor1)