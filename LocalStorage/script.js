//QUANDO CARREGAR A PÁGINA, MOSTRAR O QUE JÁ ESTAVA SALVO

//SALVAR QUANDO CLICAR NO BOTÃO
function salvarAnotacao(){
    const conteudo = document.getElementById("anotacao").value
    localStorage.setItem("minhaAnotacao", conteudo)
    alert ("Nota salva com sucesso")
}