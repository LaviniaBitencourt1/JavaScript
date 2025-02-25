//Jogo Pedra, Papel e Tesoura
let placarJogador = 0
let placarPC = 0

//Variavel para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

//Laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {



    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
    //Solicita que o usuário informe qual ele quer

    const escolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]
    //Gera uma escolha aleatoria para o computador
    //Criamos um array com as opções e usamos o random para escolher uma de forma aletória

    alert(`Você escolheu ${(escolhaJogador)}`)
    alert(`O computador escolheu ${(escolhaPC)}`)
    //Mostrando qual foi a escolha do computador

    //Compara se a nossa escolha foi igual a do computador
    if (escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
        //criamos a primeira verificada de vitoria
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
        //criamos a segunda verificação
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
        //criamos a terceira verificação
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
        placarPC++
    }
    //Exibe o placar no console
    console.log("Placar Jogador: ", placarJogador)
    console.log("Placar Computador: ", placarPC)
}
//Placar Final
alert(`Fim do jogo! Plcar final: Jogador ${placarjogador} x ${placarPC} Computador`)