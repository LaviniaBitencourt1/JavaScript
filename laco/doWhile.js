let contador = 0
let contador1 = 0
while (contador < 0 ) {
    //verifica primeiro, depois executa
    console.log("While:", contador)
    contador++
}

do { //executa primeiro, depois verifica
    console.log("Do while", contador1)
    contador1++
} while (contador1 < 0 )

    //SEGUNDO EXEMPLO
let numero = 5

do {
    console.log(numero)
    numero -= 2
} while (numero >= 0 )

    //TERCEIRO EXEMPLO
let idade = (prompt("Qual sua idade?"))

do {
    if (idade > 0){
        console.log("Idade valida")
    } else {
        console.log("Idade invalida")
    }
    idade = (prompt("Qual sua idade?"))
} while (idade >= 0)