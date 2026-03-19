//1 - Dias da semana


let dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido. Insira um valor entre 1 e 7.");
}


//2 - Classificação de idade


let idade = 15;

switch (idade) {
  case 5:
    console.log("Infantil A");
    break;
  case 10:
    console.log("Infantil B");
    break;
  case 15:
    console.log("Juvenil A");
    break;
  case 20:
    console.log("Juvenil B");
    break;
  case 30:
    console.log("Adulto");
    break;
  default:
    console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.");
}


//3 - Turno de Trabalho


let turno = "M";

switch (turno.toUpperCase()) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;
  default:
    console.log("Turno inválido. Insira M, V ou N.");
}


//4 - Números e Mensagens


let numero = 2;

switch (numero) {
  case 1:
    console.log("Você escolheu o número 1.");
    break;
  case 2:
    console.log("Você escolheu o número 2.");
    break;
  case 3:
    console.log("Você escolheu o número 3.");
    break;
  case 4:
    console.log("Você escolheu o número 4.");
    break;
  case 5:
    console.log("Você escolheu o número 5.");
    break;
  default:
    console.log("Número fora do intervalo. Insira um valor entre 1 e 5.");
}


//5 - Estações do Ano


let estacao = 1;

switch (estacao) {
  case 1:
    console.log("Primavera");
    break;
  case 2:
    console.log("Verão");
    break;
  case 3:
    console.log("Outono");
    break;
  case 4:
    console.log("Inverno");
    break;
  default:
    console.log("Estação inválida. Insira um número de 1 a 4.");
}


//6 - Menu de Operações Matemáticas


let opcao = 1;
let num1 = 10;
let num2 = 5;

switch (opcao) {
  case 1:
    console.log("Resultado:", num1 + num2);
    break;
  case 2:
    console.log("Resultado:", num1 - num2);
    break;
  case 3:
    console.log("Resultado:", num1 * num2);
    break;
  case 4:
    if (num2 !== 0) {
      console.log("Resultado:", num1 / num2);
    } else {
      console.log("Não é possível dividir por zero.");
    }
    break;
  default:
    console.log("Operação inválida.");
}


//7 - Código de Produto


let codigo = 200;

switch (codigo) {
  case 100:
    console.log("Caneta");
    break;
  case 200:
    console.log("Lápis");
    break;
  case 300:
    console.log("Borracha");
    break;
  case 400:
    console.log("Caderno");
    break;
  default:
    console.log("Produto não encontrado.");
}


//8 - Nota por Conceito


let conceito = "A";

switch (conceito.toUpperCase()) {
  case "A":
    console.log("Excelente");
    break;
  case "B":
    console.log("Bom");
    break;
  case "C":
    console.log("Regular");
    break;
  case "D":
    console.log("Ruim");
    break;
  case "F":
    console.log("Reprovado");
    break;
  default:
    console.log("Conceito inválido.");
}


//9 - Jogo: Escolha sua Ação


let acao = 3;

switch (acao) {
  case 1:
    console.log("Atacar");
    break;
  case 2:
    console.log("Defender");
    break;
  case 3:
    console.log("Curar");
    break;
  case 4:
    console.log("Fugir");
    break;
  default:
    console.log("Opção inválida. Você perdeu a vez.");
}


//10 - Conversor Simples de Moeda


let opcaoMoeda = 1;
let valor = 100;

switch (opcaoMoeda) {
  case 1:
    console.log("Dólar:", valor / 5);
    break;
  case 2:
    console.log("Real:", valor * 5);
    break;
  case 3:
    console.log("Euro:", valor / 6);
    break;
  default:
    console.log("Opção inválida.");
}


//11 - Tipo de Atendimento


let atendimento = 2;

switch (atendimento) {
  case 1:
    console.log("Suporte Técnico");
    break;
  case 2:
    console.log("Financeiro");
    break;
  case 3:
    console.log("Comercial");
    break;
  case 4:
    console.log("Cancelamento");
    break;
  default:
    console.log("Setor inválido.");
}


//12 - Cardápio de Lanchonete


let pedido = 3;

switch (pedido) {
  case 1:
    console.log("Hambúrguer");
    break;
  case 2:
    console.log("Pizza");
    break;
  case 3:
    console.log("Suco");
    break;
  case 4:
    console.log("Sorvete");
    break;
  default:
    console.log("Pedido inválido.");
}


//13 - Avaliação do Atendimento


let nota = 5;

switch (nota) {
  case 1:
    console.log("Péssimo");
    break;
  case 2:
    console.log("Ruim");
    break;
  case 3:
    console.log("Regular");
    break;
  case 4:
    console.log("Bom");
    break;
  case 5:
    console.log("Excelente");
    break;
  default:
    console.log("Nota inválida.");
}


//14 - Tipo de Usuário


let usuario = 1;

switch (usuario) {
  case 1:
    console.log("Administrador");
    break;
  case 2:
    console.log("Professor");
    break;
  case 3:
    console.log("Aluno");
    break;
  case 4:
    console.log("Visitante");
    break;
  default:
    console.log("Usuário inválido.");
}


//15 - Categoria de Filme


let categoria = 4;

switch (categoria) {
  case 1:
    console.log("Ação");
    break;
  case 2:
    console.log("Comédia");
    break;
  case 3:
    console.log("Drama");
    break;
  case 4:
    console.log("Terror");
    break;
  case 5:
    console.log("Animação");
    break;
  default:
    console.log("Categoria inválida.");
}
