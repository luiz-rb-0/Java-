let contador = 1
//while
while( contador <=5){
    console.log("usando while")
contador++
}
//dowhile
do{
    console.log(" usando dowhile")
contador2++
} while (contador2 <=5
    
)
//mostrar do 1 ao 3
let numero = 1
do{
console.log(numero)
    numero++
}while(numero<=3)
    console.log("---------------------------------")

    let resposta = prompt("Deseja continuar?")
    do {
        resposta = prompt("Deseja continuar?")
    } while (resposta == "sim")
        console.log("-----------------------------")
    /* Peça três números para o usuário e classifique se é maior que 10 ou menor que 10 */

    let numero2
    let aux = 1
do {
    numero2 = Number(prompt("Diga um número"))
    if (numero > 10) {
        console.log("é maior que 10")
    } else {
        console.log("é menor ou é 10")
    }
    aux++
    } while (aux <=3)

        // Peça 3 números para o usuário e mostre a soma deles

    let soma = 0
    let aux2 = 1
    let num 
    do {
    num = Number(prompt("Informe um número:"))
    soma = soma + num
    console.log(soma)
    aux2++
    } while(aux2 <= 3)
    console.log("----------------------")
    
    /* mostre a sequência de 0 a 99, pulando de 3 em 3*/
    let sequencia = 0
    do {
        console.log(sequencia)
        sequencia += 3
    } while(sequencia <= 99)

