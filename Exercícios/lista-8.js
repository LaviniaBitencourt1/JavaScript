console.log("Exercício 1")
let contador = 1

do {
    console.log(contador)
    contador++
} while (contador <= 20)

console.log("------------------")
console.log("Exercício 2")
let resposta 

do {
    resposta = (prompt("Deseja continuar?"))
} while (resposta == "s")

console.log("------------------")
console.log("Exercício 3")
let numero = 1
let numeroFinal = (prompt("Escolha um número final:"))

do {
    console.log(numero)
    numero++
} while (numero <= numeroFinal)

console.log("------------------")
console.log("Exercício 4")
let num = 1

do {
    console.log(num)
    num +=2
} while (num <=31)

console.log("------------------")
console.log("Exercício 5")
let number = 1
let numeroEscolhido

do {
    numeroEscolhido = (prompt("Digite um número:"))
    if (numeroEscolhido > 0){
        console.log("Número Positivo")
    } else if (numeroEscolhido < 0){
        console.log("Número negativo")
    } else {
        console.log("O número é zero")
    }
    number++
} while (number <= 5)

console.log("------------------")
console.log("Exercício 6")
let operacao 

    do {
        operacao = (prompt("Deseja fazer uma conta?"))
        if (operacao == "s"){
            let Num = Number(prompt("Escolha o primeiro número"))
            let Num2 = Number(prompt("Escolha o segundo número"))
            let soma = (Num + Num2)
            console.log(soma)
        }
    }while (operacao == "s")