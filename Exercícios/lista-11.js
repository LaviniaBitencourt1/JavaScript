console.log("Exercício 1")
function  JavaScript(){
    console.log("Eu gosto de JavaScript")
}
JavaScript()


console.log("------------------")
console.log("Exercício 2")

function contarAteCinco (){
    for (let i = 1; i <= 5; i++){
        console.log(i)
    }
}
contarAteCinco()


console.log("------------------")
console.log("Exercício 3")

let nome = (prompt("Digite seu nome:"))
function saudacao (){
    console.log("Olá,", nome, "! Seja bem-vindo(a)!")
}
saudacao()


console.log("------------------")
console.log("Exercício 4")

function multiplicarDoisNumeros (num1, num2){
    let mult = num1 * num2
    return mult
}
console.log(multiplicarDoisNumeros (5,3))
multiplicarDoisNumeros()

console.log("------------------")
console.log("Exercício 5")
let idade = (prompt("Qual a sua idade?"))

function verificarIdade (){
    if (idade <= 18){
        console.log("Você é menor de idade.")
    } else {
        console.log("Você é maior de idade.")
    }
}
verificarIdade()

console.log("------------------")
console.log("Exercício 6")
let a = Number(prompt("Digite o primeiro número:"))
let b = Number(prompt("Digite o segundo número:"))

function somar (a,b){
    let  resultado = a + b
    return resultado
}
console.log(somar (a , b))
somar()

console.log("------------------")
console.log("Exercício 7")
let largura = Number(prompt("Digite a largura"))
let altura = Number(prompt("Digite a altura"))

function calcularAreaRetangular(largura, altura){
    let area = largura * altura
    return area
}
console.log(calcularAreaRetangular(largura, altura))
calcularAreaRetangular()

console.log("------------------")
console.log("Exercício 8")
let idade1 = Number(prompt("Digite a primeira idade:"))
let idade2 = Number(prompt("Digite a segunda idade:"))

function compararIdade(idade1, idade2){
    if (idade1 > idade2){
        console.log("A primeira pessoa é mais velha.")
    } else 
        console.log("A segunda pessoa é mais velha.")
}
console.log(compararIdade(idade1, idade2))
