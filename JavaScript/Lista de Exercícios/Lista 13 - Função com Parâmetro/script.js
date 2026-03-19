// 1 - Dobro do Número


function dobro(numero) {
    console.log("Dobro:", numero * 2);
}
dobro(10);


// 2 - Área do Retângulo


function calcularArea(base, altura) {
    console.log("Área do retângulo:", base * altura);
}
calcularArea(5, 4);


// 3 - Conversão de Temperatura


function converterFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    console.log("Temperatura em Fahrenheit:", fahrenheit);
}
converterParaFahrenheit(30);


// 4 - Verificação de Nota


function verificarNota(nota) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}
verificarNota(6);


// 5 - Número Positivo ou Negativo


function verificarNumero(numero) {
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}
verificarNumero(-3);


// 6 - Contar Pares Até o Número


function contarPares(numero) {
    console.log("Números pares:");
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
contarPares(10);


// 7 - Soma de Intervalo


function somarIntervalo(inicio, fim) {
    let soma = 0;

    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }

    console.log("Soma do intervalo:", soma);
}
somarIntervalo(1, 5);


// 8 - Repetir Nome


function repetirNome(nome, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        console.log(nome);
    }
}
repetirNome("João", 3);


// 9 - Tabuada


function tabuada(numero) {
    console.log("Tabuada do", numero);
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
tabuada(7);


// 10 - Contagem Decrescente Personalizada


function contagemPersonalizada(numero) {
    console.log("Contagem regressiva (ímpares):");
    for (let i = numero; i >= 0; i--) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
contagemPersonalizada(10);


// 11 - Média de Três Notas


function mediaAluno(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    console.log("Média:", media);

    if (media >= 7) {
        console.log("Aprovado");
    } else if (media > 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}
mediaAluno(7, 6, 8);
