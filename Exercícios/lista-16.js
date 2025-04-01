console.log("Exercício 1")

function arredondamento(){
let numero = document.getElementById("numero").value
console.log(Math.round(numero))
console.log(Math.ceil(numero))
console.log(Math.floor(numero))
}

console.log("------------------")
console.log("Exercício 2")

function mudarNome(){
let nome = document.getElementById("nome").value
console.log(nome.toUpperCase())
console.log(nome.toLocaleLowerCase())
}

console.log("------------------")
console.log("Exercício 3")

console.log( Math.round (Math.random() * 100))


