console.log("Exercício 1")
let nome = (prompt("Digite seu nome:"))

let saudacao = function(nome){
    console.log("Oi", nome, "! Como vai?")
}
saudacao(nome)


console.log("------------------")
console.log("Exercício 2")
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

let soma = function(num1, num2){
   let resultado = num1 + num2
   return resultado
}
console.log(soma(num1, num2))

console.log("------------------")
console.log("Exercício 3")
let base = Number(prompt("Digite a base do retangulo:"))
let altura = Number(prompt("Digite a altura do retangulo:"))

let area = function(base, altura){
    let resultado = base * altura
    return resultado
}
console.log(area(base, altura))

console.log("------------------")
console.log("Exercício 4")
let numero = Number(prompt("Digite um número:"))

let dobro = function(numero){
    let resultado = numero * 2
    return resultado
}
console.log(dobro(numero))

console.log("------------------")
console.log("Exercício 5")
let N1 = Number(prompt("Digite um número:"))

let quadrado = function(N1){
    let resultado = N1 * N1
    return resultado
}
console.log(quadrado(N1))

console.log("------------------")
console.log("Exercício 6")
let idade = Number(prompt("Digite sua idade:"))

let maiorDeIdade = function (idade){
    if (idade <= 18){
        console.log("Você é menor de idade")
    }else 
    console.log("Você é maior de idade")
}
console.log(maiorDeIdade(idade))

console.log("------------------")
console.log("Exercício 7")
let Nota1 = Number(prompt("Digite a primeira nota:"))
let Nota2 = Number(prompt("Digite a segunda nota:"))
let Nota3 = Number(prompt("Digite a terceira nota:"))

let media = function (Nota1, Nota2, Nota3){
    resultado = (Nota1 + Nota2 + Nota3) / 3
    return resultado
}
console.log(media(Nota1, Nota2, Nota3))