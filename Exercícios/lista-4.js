console.log("Exercício 1")
let idade = (prompt("Qual sua idade?"))

if (idade <=12){
    console.log("Você é criança")
} else if (idade <=17){
    console.log("Você é adolescente")
} else if (idade <=59){
    console.log("Você é adulto")
} else if (idade >= 60){
    console.log("Você é idoso")
}

console.log("------------------")
console.log("Exercício 2")
let temperatura = (prompt("Qual a temperatura?"))

if (temperatura <=10){
    console.log("Muito frio")
} else if (temperatura <=20){
    console.log("Frio")
} else if (temperatura <30){
    console.log("Agradável")
} else if (temperatura >= 30){
    console.log("Muito quente")
}


console.log("------------------")
console.log("Exercício 3")
let turno = (prompt("Qual seu turno?(M, V ou N)"))

if (turno ="M"){
    console.log("Matutino")
} else if (turno ="V"){
    console.log("Vespertino")
} else if (turno ="N"){
    console.log("Noturno")
} else {
    console.log("Turno invalido")}

console.log("------------------")
console.log("Exercício 4")
let valorCompra = (prompt ("Digite o valor da compra:"))

if (valorCompra <= 100){
    console.log("Desconto de 5%")
} else if (valorCompra <=200){
    console.log("Desconto de 10%")
} else if (valorCompra >=200){
    console.log("Desconto de 20%")
}

console.log("------------------")
console.log("Exercício 5")
let nota = (prompt("Qual a nota?"))

if (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")
} else if (nota >= 70) {
    console.log("C")
}  else if (nota >= 60) {
    console.log("D")
}  else if (nota < 60) {
    console.log("F")
} 

console.log("------------------")
console.log("Exercício 6")
let diaSemana = (prompt("Digite um número(De 1 á 7)"))

if (diaSemana = 1){
    console.log("Domingo")
} else if (diaSemana = 2){
    console.log("Segunda")
}  else if (diaSemana = 3){
    console.log("Terça")
}  else if (diaSemana = 4){
    console.log("Quarta")
}  else if (diaSemana = 5){
    console.log("Quinta")
}  else if (diaSemana = 6){
    console.log("Sexta")
}  else if (diaSemana = 7){
    console.log("Sábado")
}

console.log("------------------")
console.log("Exercício 7")
let pista = (prompt("Digite a distancia da pista?"))

if (pista <= 400){
    console.log("Pista Curta")
} else if (pista <= 800){
    console.log("Pista média")
}

console.log("------------------")
console.log("Exercício 8")

let pontos = (prompt("Qual a sua pontuação?"))

if (pontos < 1000){
    console.log("Iniciante")
} else if (pontos < 5000){
    console.log("Intermediário")
} else if (pontos < 10000){
    console.log("Avançado")
} else if (pontos > 10000){
    console.log("Mestre")
}