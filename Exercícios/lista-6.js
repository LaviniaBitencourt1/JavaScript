console.log("Exercício 1")
let opcao = (prompt("Digite um número entre 1 e 7:"))

switch (opcao){
    case "1":
        console.log("Domingo")
        break
    case "2":
        console.log("Segunda-Feira")
        break
    case "3":
        console.log("Terça-Feira")
        break
    case "4":
        console.log("Quarta-Feira")
        break
    case "5":
        console.log("Quinta-Feira")
        break
    case "6":
        console.log("Sexta-Feira")
        break
    case "7":
        console.log("Sábado-Feira")
        break
        default:
        console.log("Número inválido. Inssira um valor entre 1 e 7;")
}

console.log("------------------")
console.log("Exercício 2")
let idade = (prompt("Digite sua idade:"))

switch (idade){
    case "5":
        console.log("Infantil A")
        break
    case "10":
        console.log("Infantil B")
        break 
    case "15":
        console.log("Juvenil A")
        break
    case "20":
        console.log("Juvenil B")
        break
    case "30":
        console.log("Adulto")
        break
        default:
            console.log("Idade inválida. Insira 5, 10, 15, 20, 30")
    }

console.log("------------------")
console.log("Exercício 3")
let turno = (prompt("Informe seu turno(M, V ou N)"))

switch(turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
        default:
        console.log("Turno inválido. Insira M, V ou N.")
    }

console.log("------------------")
console.log("Exercício 4")
let nota = (prompt("Digite uma nota entre 1 e 5. Em que 1 equivale a  muito ruim, e 5 equivale a excelente"))

switch(nota){
    case "1":
        console.log("Muito ruim")
        break
    case "2":
        console.log("Ruim")
        break
    case "3":
        console.log("Bom")
        break
    case "4":
        console.log("Muito bom")
        break
    case "5":
        console.log("Excelente")
        break
        default:
            console.log("Número fora do intervalo. Insira um valor entre 1 e 5")
}

console.log("------------------")
console.log("Exercício 5")
let numero = (prompt ("Digite um valor de 1 a 4:"))

switch (numero){
    case "1":
        console.log("Primaveira")
        break
    case "2":
        console.log("Verão")
        break
    case "3":
        console.log("Outono")
        break
    case "4":
        console.log("Inverno")
        break
        default:
            console.log("Estação inválida. Insira um número de 1 a 4.")
}