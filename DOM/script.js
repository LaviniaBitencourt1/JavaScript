let titulo = document.getElementById("titulo")
// document = HTML
//getElementByID = pegue o elemento do id
//logo, quando fizemos isso guardamos o que estava no HTML em uma variável npo js
console.log(titulo.innerText)

//--------------------------------------------------------
let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
//Desse jeito trocamos o texto de uma tag
texto.style.color ="blue"
//Usando o style podemos mexer no CSS
//--------------------------------------------------------
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    alert("botão clicado")
})

//--------------------------------------------------------------
let duplo = document.getElementById("duplo")

duplo.addEventListener("dblclick", function(){
    duplo.style.background = "red"
})
//só acontece quando clica duas vezes 
//-------------------------------------------------------------
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function(){
    passe.innerText = "o mouse  está aqui"
    passe.style.backgroundColor = "Yellow"
})// o mouseover é quando o mouse está sobre o elemeto
passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
}) //o mouseout é quando o mouse está fora do elemento