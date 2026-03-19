//Operadores Lógicos
// && - e - tudo tem que ser verdadeiro
//|| - ou - apenas um precisa ser verdadeiro
// ! - não - inverte o true para false e vice-versa

let idade = 20
let convite = true
console.log(idade >= 18 && convite == true) //true
//          verdadeiro && verdadeiro = verdadeiro
console.log("--------------------------------")
let ingresso = "sim"
let nomeLista = "sim"
console.log(ingresso == "sim" || nomeLista == "sim") // true
//          falso OU falso = falso
console.log("--------------------------------")
let calor = true
console.log(calor) //true
console.log(!calor) // false
console.log("--------------------------------")
/* Para assistir um filme de terror no cinema é preciso ter idade maior ou igual a 14, ou estar acompanhado do responsável */
let idade_cinema = Number(prompt("Qual sua idade?"))
let acompanhado = prompt("está acompanhado?")
console.log (idade_cinema >= 14 || responsavel == "sim")
console.log("---------------------------------------")
/* Para ser aprovado no Senai o aluno precisa ter nota maior ou igual a 50  ter frequência maior ou igual a 75 */
let nota = Number (prompt("Qual sua nota?"))
let frequencia = Number(prompt("Qual sua frequência"))
console.log(nota >= 50 && frequencia >= 75)
console.log("--------------------------------")
/* Para fazer login no computador, o aluno deve colocar o usuário igual a TDS2 e a senha igual a senai2026*/

let login = (prompt("Qual o login?"))
let senha = (prompt("Qual é a senha?"))
console.log(login == "TDS2" && senha == "senai2026")
console.log("--------------------------------------")
let chuva = true
console.log(chuva == true) //true
console.log(chuva) //true