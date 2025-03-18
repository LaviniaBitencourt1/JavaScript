console.log("Exercício 1")
function aparece(){
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none"){
        sumir.style.display = "block"
    }else {
        sumir.style.display = "none"
    }
}

console.log("------------------")
console.log("Exercício 2")
let texto = document.getElementById("texto")
function mudarCor(){
    texto.style.color = "white"
    document.body.style.backgroundColor = "black"
}

console.log("------------------")
console.log("Exercício 3")
let mensagem = document.getElementById("mensagem")
function Completar(){
    mensagem.innerText = "Meu nome é Lavinia, tenho 16 anos, moro em Suzano, estudo no SENAI e faço o curso de TDS."
}

console.log("------------------")
console.log("Exercício 4")
let texto1 = document.getElementById("texto1")
    texto1.style.color = "green"
function trocarCor() {
    if (texto1.style.color == "green"){
        texto1.style.color = "yellow"
    } else if (texto1.style.color == "yellow"){
        texto1.style.color = "blue"
    }else {
        texto1.style.color = "green"
    }
}

console.log("------------------")
console.log("Exercício 5")

function NaoClique(){
    alert("Pare de clicar no botão!")
}

console.log("------------------")
console.log("Exercício 6")

let escolhas = document.getElementById("imagem1")
let escolhas2 = document.getElementById("imagem2")
let escolhas3 = document.getElementById("imagem3")

escolhas.style.display = "none"
escolhas2.style.display = "none"
escolhas3.style.display = "none"
function porta1(){
    escolhas.style.display = "block"
    alert("Você ganhou um carro!")
}
function porta2(){
    escolhas2.style.display = "block"
    alert("Você não ganhou nada!")
}
function porta3(){
    escolhas3.style.display = "block"
    alert("Parabéns! Você encontrou o tesouro!")
}

console.log("------------------")
console.log("Exercício 7")
let imagem = document.getElementById("imagemBallet")

imagem.style.width = "200px"
imagem.style.height = "100px"

function redimensionar() {
    let imagem = document.getElementById("imagemBallet");
    let tamanho = Math.floor(Math.random() * (300 - 20 + 1)) + 10;
    imagem.style.width = tamanho + "px"
    imagem.style.height = tamanho + "px"
}

console.log("------------------")
console.log("Exercício 8")
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")

div1.style.backgroundColor = "red"
function semaforo() {
    if(div1.style.backgroundColor == "red"){
        div2.style.backgroundColor = "yellow"
        div1.style.backgroundColor = "black"
        alert("PARE")
    } else if(div2.style.backgroundColor == "yellow"){
        div3.style.backgroundColor = "green"
        div2.style.backgroundColor = "black"
        alert("ATENÇÃO!")
    }else {
        div1.style.backgroundColor = "red"
        div3.style.backgroundColor = "black"
        alert("PODE IR!")
    }
}

console.log("------------------")
console.log("Exercício 9")
let filmeComedia = document.getElementById("filmeComedia")
let filmeAcao = document.getElementById("filmeAcao")
let filmeRomance = document.getElementById("filmeRomance")

function troca(){
    filmeComedia.src = "IMAGENS/filmeComedia2.jpg"
}
function destroca(){
    filmeComedia.src = "IMAGENS/filmeComedia.png"
}

function troca2(){
    filmeAcao.src = "IMAGENS/filmeAcao2.jpg"
}
function destroca2(){
    filmeAcao.src = "IMAGENS/filmeAcao.png"
}

function troca3(){
    filmeRomance.src = "IMAGENS/filmeRomance2.jpg"
}
function destroca3(){
    filmeRomance.src = "IMAGENS/filmeRomance.png"
}