//Revisão - Função Declarativa
function saudacao(){
    console.log("Boa tarde")
}

saudacao() //chamar função
saudacao()
saudacao()
console.log("----------------------------")
function mult() {
    let num1 = Number(prompt("Informe um número: "))
    let num2 = Number(prompt("Informe outro número: "))
    let multiplicacao = num1*num2
    console.log(multiplicacao)
}
// mult()
// mult()
console.log("---------------------------")
/*Uma loja solicitou um sistema para o caixa. Crie uma função onde pede o valor da compra e o valor pago e mostre: Caso tenha troco, de quanto ele será, senão, mostre, sem troco. Chame a função 2 vezes*/

function valor(){
let compra = Number(prompt("Qual o valor da compra?"))
let pago = Number(prompt("Qual o valor pago?"))
let troco = pago - compra
if (pago > compra) {
console.log("O troco é de "+ troco)
}
else {
    console.log("Sem troco")
}
}
valor()
valor()

console.log("----------------------------")
/*Para ser atendido em um restaurante uma opção do menu precisa ser selecionada. Se o usuário digitar 1, mostre "mostrando cardápio". Se digitar 2, mostre "Chamando o garçom". Se digitar 3 mostre, "Fechando a conta". Toda vez que a função é chamada o menu é mostrado*/

function pedido(){
    let menu = Number(prompt("Qual opção você deseja?"))
    switch (cardapio)
{
    case 1:
        console.log("Motrando cardápio");
        break;
    case 2:
        console.log("Chamando graçom");
        break;
    case 3:
        console.log("Fechando a conta");
        break;
    default:
        console.log("Opção inválida");
        break;
}
}
pedido()