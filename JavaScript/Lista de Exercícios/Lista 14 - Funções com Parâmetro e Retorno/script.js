//1 - Dobro do Número

function dobro(numero) {
    let dobro = numero * 2
    return dobro
}
let numero = Number(prompt("Informe um número: "))
let mostrar = dobro (numero)
console.log("O dobro de "+numero+ " é "+mostrar)


//2 - Somar dois números

function somar(num1, num2){
    let somar = num1 + num2
    return somar
}
let num1 = Number(prompt("Informe o primeiro número"));
let num2 = Number(prompt("Informe o segundo número"));
let mostrar1 = somar(num1, num2)
console.log("A soma dos números é "+mostrar1)


//3 - Área de um Quadrado

function areaQuadrado(lado){
    let areaQuadrado = lado * lado
    return areaQuadrado
}
let lado = Number(prompt("Informe o valor do lado do quadrado"));
let mostrar2 = areaQuadrado(lado)
console.log("A área do quadrado é de "+mostrar2+"cm²")


//4 - Antecessor de um Número

function antecessor(numero1){
    let antecessor = numero1 - 1
    return antecessor
}
let numero1 = Number(prompt("Informe um número: "));
let mostrar3 = antecessor(numero1)
console.log("O número antecessor de "+numero1+ " é "+mostrar3)


//5 - Tamanho do Texto

function tamanhoTexto(texto) {
    return texto.length;
}

let texto = "Olá mundo";
console.log("Quantidade de caracteres:", tamanhoTexto(texto));


//6 - Verificar Maior Número

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log("Maior número:", maiorNumero(10, 25));


//7 - Verificar Idade

function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(20));


//8 - Número Par ou Ímpar

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parOuImpar(7));


//9 - Calcular Média

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log("Média:", media(7, 8, 9));


//10 - Desconto em Produto

function calcularDesconto(preco) {
    let desconto = preco * 0.10;
    return preco - desconto;
}

console.log("Preço com desconto:", calcularDesconto(100));

