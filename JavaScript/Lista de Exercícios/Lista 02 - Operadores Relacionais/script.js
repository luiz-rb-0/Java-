//1 - Comparando Dois Números


let numero1 = Number(prompt("Insira o primeiro número?"))
let numero2 = Number(prompt("Insira o segundo número?"))
console.log(numero1 > numero2)
console.log(numero1 < numero2)
console.log(numero1 == numero2)


//2 - Idade para Votar


let idade = Number(prompt("Qual a sua idade?"))
console.log(idade >= 16)


//3 - Maioridade


let maioridade = Number(prompt("Qual a sua idade"))
console.log(maioridade >=18)
console.log(maioridade >=60)


//4 - Verificação de Login


let nome = Number(prompt("Qual é o nome de usuário?"))
console.log(nome == 'admin')


//5 - Saldo Bancário


let saldo = Number(prompt("Qual o valor da conta?"))
let saque = Number(prompt("Qual o valor do saque?"))
let restante = saldo - saque
console.log(saldo >= saque)
console.log (restante > 100)


//6 - Média do Aluno


let nota1 = Number(prompt("Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
console.log((nota1 + nota2) / 2 >= 6)


//7 - Preço do Produto


let valor = Number(prompt("Qual o valor do produto?"))
console.log(valor > 50)
console.log(valor <= 20)


//8 - Velocidade da Via


let velocidade = Number(prompt("Qual a velocidade do carro?"))
console.log(velocidade > 80)
console.log(velocidade > 120)


//9 - Altura para Brinquedo


let altura = Number(prompt("Qual a sua altura? (em metros)"))
console.log(altura >= 1.40)


//10 - Nome Cadastrado


let nome_maria_ou_joao = Number(prompt("Qual o seu nome?"))
console.log(nome_maria_ou_joao == "Maria")
console.log(nome_maria_ou_joao != "João")


//11 - Senha Simples


let senha = Number (prompt("Qual a senha?"))
console.log(senha == 1234)


//12 - Parcelamento


let compra = Number (prompt("Qual o valor da compra?"))
let parcela = Number ("Qual o valor da parcela?")
console.log(parcela <= 200)


//13 - Idade em Meses


let anos = Number (prompt("Qual a sua idade?"))
let meses = anos * 12
console.log(meses > 200)