//FUNÇÕES MATEMÁTICAS
let num = 4.7

//Arredondar números
console.log(Math.round(num)) // inteiro mais próximo
console.log(Math.floor(num)) // arrednda para baixo(piso do número)
console.log(Math.ceil(num)) // arredonda para cima (teto do número)

//Número aleatório
console.log(Math.random()) //número aleatório entre 0 e 1
console.log(Math.random() * 10) //número aleatório entre 0 e 10

//FUNÇÕES DE STRING
let texto = "Eu amo JavaScript"
//Maipular String
console.log(texto.toUpperCase()) //Deixa tudo maiusculo
console.log(texto.toLocaleLowerCase()) //Deixa tudo minusculo
console.log(texto.trim()) //Remove espaços antes e depois do texto
//localizar texto
console.log(texto.charAt(5))//mostrar a letra que está nessa posição
//Trocar textos 
console.log(texto.replace("amo", "adoro"))

//Funções Númericas
let numero = "42.85"
console.log(parseInt(numero)) //converse String para número inteiro
console.log(parseFloat(numero)) //converte String para número decimal
console.log(Number (numero).toFixed(1))//Define quantas casas decimais vai mostrar