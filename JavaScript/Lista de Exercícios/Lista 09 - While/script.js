// 1 - Contador (1 a 10)


let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("---------------");


// 2 - Tabuada


let numero = Number(prompt("Digite um número para ver a tabuada: "));
let contador = 1;
while (contador <= 10) {
    console.log(numero + " x " + contador + " = " + (numero * contador));
    contador++;
}

console.log("---------------");


// 3 - Contagem Regressiva (10 a 1)


let reg = 10;
while (reg >= 1) {
    console.log(reg);
    reg--;
}

console.log("---------------");


// 4 - Verificação de senha


let senha = prompt("Digite a senha: ");
while (senha !== "12345") {
    senha = prompt("Senha incorreta! Digite novamente: ");
}
console.log("Acesso liberado!");

console.log("---------------");


// 5 - Contador (50 a 100)


let c = 50;
while (c <= 100) {
    console.log(c);
    c++;
}

console.log("---------------");


// 6 - Sequência de 5 em 5 (0 a 100)


let seq = 0;
while (seq <= 100) {
    console.log(seq);
    seq += 5;
}

console.log("---------------");


// 7 - Mostrar mensagem 5 vezes


let msg = 1;
while (msg <= 5) {
    console.log("Eu gosto de JavaScript");
    msg++;
}

console.log("---------------");


// 8 - Exibindo o nome


let nome = prompt("Digite seu nome: ");
let vezes = Number(prompt("Digite quantas vezes quer mostrar seu nome: "));
let contNome = 1;
while (contNome <= vezes) {
    console.log(nome);
    contNome++;
}

console.log("---------------");


// 9 - Validação de Nota


let nota = Number(prompt("Digite uma nota entre 0 e 10: "));
while (nota < 0 || nota > 10) {
    nota = Number(prompt("Valor inválido! Digite uma nota entre 0 e 10: "));
}
console.log("Nota registrada com sucesso!");

console.log("---------------");


// 10 - Soma de Números


let soma = 0;
let num = Number(prompt("Digite um número (negativo para parar): "));
while (num >= 0) {
    soma += num;
    num = Number(prompt("Digite outro número (negativo para parar): "));
}
console.log("Soma total: " + soma);

console.log("---------------");


// 11 - Menu Simples


let opcao = 0;
while (opcao !== 3) {
    console.log("1 - Cadastrar");
    console.log("2 - Consultar");
    console.log("3 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));
}
console.log("Programa encerrado.");

console.log("---------------");


// 12 - Contador de Pares (1 a 50)


let par = 1;
while (par <= 50) {
    if (par % 2 === 0) {
        console.log(par);
    }
    par++;
}

console.log("---------------");


// 13 - Login


let usuario = prompt("Usuário: ");
let senhaLogin = prompt("Senha: ");

while (usuario !== "admin" || senhaLogin !== "123") {
    console.log("Dados incorretos!");
    usuario = prompt("Usuário: ");
    senhaLogin = prompt("Senha: ");
}
console.log("Bem-vindo ao sistema!");

console.log("---------------");


// 14 - Jogo do Número


let numeroSecreto = 7;
let tentativa = Number(prompt("Adivinhe o número: "));

while (tentativa !== numeroSecreto) {
    tentativa = Number(prompt("Errou! Tente novamente: "));
}
console.log("Você acertou!");