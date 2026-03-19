//01 - Pode Dirigir


let idade = Number(prompt("Qual sua idade?"))
let cnh = prompt("Possui CNH?")
console.log (idade >= 18 && cnh == "sim")
console.log("---------------------------------------")


//02 - Aprovação Escolar


let nota = Number(prompt("Qual sua nota?"))
let faltas = prompt("Quantas faltas você tem?")
console.log (nota >= 6 && faltas <= 10)
console.log("---------------------------------------")


//03 - Acesso ao Evento


let idade_evento = Number(prompt("Qual sua idade?"))
let convite = prompt("Possui convite?")
console.log (idade_evento >= 18 && convite == "sim")
console.log("---------------------------------------")


//04 - Empréstimo Bancário


let salario = Number(prompt("Qual seu salário?"))
let nome_limpo = prompt("Tem o nome limpo?")
console.log (salario >= 2500 && nome_limpo == "sim")
console.log("---------------------------------------")


//05 - Entrada 


let convite_casamento = Number(prompt("Possui convite?"))
let nome_na_lista = prompt("Tem o nome na lista?")
console.log (convite_casamento == "sim" || nome_na_lista == "sim")
console.log("---------------------------------------")


//06 - Desconto na Barbearia


let valor_compra = Number(prompt("Qual o valor da compra?"))
let cliente_vip = prompt("É cliente VIP?")
console.log (valor_compra >= 80 || cliente_vip == "sim")
console.log("---------------------------------------")


//07 - Recuperação Escolar


let nota_recuperacao = Number(prompt("Qual sua nota?"))
let trabalho = prompt("Fez trabalho extra")
console.log (nota_recuperacao > 5 && trabalho == "sim")
console.log("---------------------------------------")


//08 - Liberação de Sistema


let senha_six_seven = Number(prompt("Qual é a senha?"))
let digital = prompt("A digital foi reconhecida?")
console.log (senha_six_seven == 6769 && digital == "sim")
console.log("---------------------------------------")


//09 - Conta Bloqueada


console.log("09 - Conta Bloqueada;\n")
let bloqueada = prompt("A conta está bloqueada? (sim/não)")
console.log("A conta está liberada? R:",bloqueada =="não")


//10 - Cadastro Incompleto


console.log("10 - Cadastro Incompleto;\n")
let temCadastro = prompt("A conta foi criada? (sim/não)")
console.log("Precisa fazer cadastro? R:",temCadastro =="não")



//11 - Acesso Completo


console.log("11 - Acesso Completo;\n")
let login = prompt("Informe o login:")
let senha = prompt("Informe sua senha:")
console.log("Acesso liberado? R:", senha == "senai2026" && login == "ADMIN")


//12 - Compra Parcelada


console.log("12 - Compra Parcelada;\n")
let valorCompra = Number(prompt("Qual o valor da compra?"))
let cartaoLoja = Number(prompt("Possui o cartão da loja? (sim/não):"))
let nomeLimpoCompra = prompt("Está com o nome limpo? (sim/não):")
console.log("Parcelamento liberado? R:", valorCompra > 300 && cartaoLoja == "sim" && nomeLimpoCompra == "sim")


//13 - Matrícula


let idade_matricula = Number(prompt("Qual é a sua idade?"))
let documentos = Number(prompt("Entregou todos os documentos?"))
let matricula = Number(prompt("Pagou a matrícula?"))
console.log (idade >= 17 && documentos == "sim" && matricula == "sim")
console.log("---------------------------------------")


//14 - Entrada no Clube


let idade_natacao = Number(prompt("Qual é a sua idade?"))
let socio = Number(prompt("É sócio?"))
let convidado = Number(prompt("É convidado?"))
console.log (idade_natacao >= 15 && (socio == "sim" || convidado == "sim"))
console.log("---------------------------------------")



























