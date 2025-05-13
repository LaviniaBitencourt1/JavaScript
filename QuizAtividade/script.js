//Cadapergunta tem:
// - A pergunta
// - as opções
// - a alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Qual era o principal produto explorado pelos portugueses no Brasil durante o início da colonização?",
        opcoes: ["Café", "Cana-de-açúcar", "Pau-brasil", "Ouro"], correta:1
    },
    {
        pergunta: "Em que ano foi proclamada a Independência do Brasil?", 
        opcoes: [" 1500", "1822", "1889", "1964"], correta:1
        
    },
    {
        pergunta: "A escravidão foi oficialmente abolida no Brasil com a assinatura de qual lei?",
        opcoes: ["Lei Eusébio de Queirós", "Lei do Ventre Livre", "Lei Áurea", " Constituição de 1824"], correta:2
    },
    {
        pergunta: "Qual foi o primeiro presidente do Brasil após a Proclamação da República?",
        opcoes: ["Getúlio Vargas", "Marechal Deodoro da Fonseca", "Juscelino Kubitschek", "Dom Pedro II"], correta:1
    },
    {
        pergunta: "Em qual ano começou a Ditadura Militar no Brasil?",
        opcoes: ["1930", "1945", "1964", "1988"], correta:2
    },
    {
        pergunta: "Durante o século XIX, qual produto agrícola se tornou a base da economia brasileira?",
        opcoes: [" Cana-de-açúcar", "Tabaco", " Soja", "Café"], correta:3
    },
    {
        pergunta: "A primeira Constituição do Brasil foi promulgada em qual ano?",
        opcoes: ["1500", "1822", "1889", "1824"], correta:3
    },
    {
        pergunta: "Qual foi uma das principais consequências da abolição da escravidão no Brasil?",
        opcoes: [" Distribuição de terras aos ex-escravizados", "Inclusão imediata dos negros no mercado formal", " Marginalização social da população negra", "Fim dos conflitos sociais no país"], correta:2
    },
    {
        pergunta: "Quem foi o primeiro presidente eleito por voto direto após o fim da Ditadura Militar?",
        opcoes: ["Fernando Henrique Cardoso", "José Sarney", "Tancredo Neves", "Fernando Collor de Mello"], correta:3
    },
    {
        pergunta: "O que foi a “Política do Café com Leite” durante a República Velha?",
        opcoes: ["Uma aliança entre militares e industriais do Sudeste", "Um acordo comercial entre Brasil e Europa", "Uma alternância no poder entre as elites de São Paulo e Minas Gerais", "Uma política de distribuição de alimentos durante a seca"], correta:2
    }
]
// variáveis para controlar o quiz 
let perguntaAtual = 0 //Qual pergunta está sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")
//funcao que atualiza o placar
function atualizarPlacar(){ 
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}
//funcao que mostra a pergunta atual
function mostrarPergunta(){
    //Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    //Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" //limpa as opções anteriores
    //Cria um botão para cada opção de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true //desabilita o botão da próxima
}
//Para quando o usuário escolher uma opção
function selecionarOpcao(indice){
    opcaoSelecionada = indice

    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i== indice)
    })
    botaoProxima.disabled = false //habilita o botão de próxima
}
function mostrarProntuacao(){
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
//Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
    //Verifica se a resposta está correta
    if(opcaoSelecionada == perguntas[perguntaAtual].correta){
        pontuacao++
    }else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual < perguntas.length){
        mostrarPergunta()
    }else{
        mostrarProntuacao()
    }
})
//Botão para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    //Reseta todas as variáveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
//Inicia o quiz com a primeira pergunta
mostrarPergunta()