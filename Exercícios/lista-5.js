console.log("Exercício 1")
let idade = (prompt("Qual a sua idade?"))
let temCarteira = true

if (idade >= 18 && temCarteira == true){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


console.log("------------------")
console.log("Exercício 2")
let anosTrabalho = (prompt("Quantos anos de trabalho você tem?"))
let qntProjetos = (prompt("Quantos projetos realizados você fez?"))
let elegivel = true

if (anosTrabalho >= 5 || qntProjetos >= 10) {
    console.log("Você está elegível para a promoção")
} else {
    console.log("Você não está elegível para a promoção")
}


console.log("------------------")
console.log("Exercício 3")
let idadeLiberada = (prompt("Quantos anos você tem?"))

if (idadeLiberada >= 18 && idadeLiberada <= 30){
    console.log("Você foi aceito para a vaga de emprego")
} else {
    console.log("Você não pode entrar no evento")
}


console.log("------------------")
console.log("Exercício 4")
let idadeCandidato = (prompt("Qual a sua idade?"))
let experiencia = true

if (idadeCandidato >= 21 && experiencia == true) {
    console.log ("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para a vaga")
}


console.log("------------------")
console.log("Exercício 5")
let nome = (prompt("Nome de usuário:"))
let senha = (prompt("Senha:"))

if (nome == "admin"  && senha == "1234"){
    console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}


console.log("------------------")
console.log("Exercício 6")
let num = (prompt("Digite um número"))

if (num >= 10 && num <= 20){
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (num >= 30 && num <= 50){
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("Ele não está dentro do intervalo de 10 e 20 nem entre 30 e 50")
}


console.log("------------------")
console.log("Exercício 7")
let numero = (prompt("Digite um número"))

if (numero <= 10 || numero >= 100 && numero == 50){
    console.log ("O número é aceito")
} else {
    console.log("O número não é aceito")
}