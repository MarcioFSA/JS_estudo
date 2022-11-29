/*
Sistema de cadastro de clientes
*/

// let nome = "Manuel";
// let sobreNome = "Silva";
// let idade = "25"
// const nunCliente = 095864;
// let valorEmprestimo = 1500000;
// let taxadeJuros = 0.10;
// let nuAnos = 6;
// let ehBomPagador = true;

// let juros = valorEmprestimo* taxadeJuros* nuAnos;
// let montante = valorEmprestimo + juros;
// console.log("O Valor total do emprestimo com juros é: " + montante);

// // if(ebBomPagador){
// //     console.log("O Cliente " + nome + ", é bom pagador");
// // }else{
// //     console.log("O cliente " + nome + ", não é bom pagador");
// // }

// /*Operadorres Ternário
// */
// console.log("O cliente " + nome +(ehBomPagador ? " é bom pagador" : "não é bom pagador."));
// //////////////////////////////
// console.log(nome);
// console.log(sobreNome);
// console.log(idade);
// console.log(nunCliente);


////////////////////////////////////////////////////////////////////////////////////////////
/*
DESAFIO NOTA MÉDIA
*/

// let nota1 = 7;
// let nota2 = 8;
// let nota3 = 9;
// let nota4 = 8;

// somaNotas = (nota1+nota2+nota3+nota4) /4;

// console.log("A Nota da Primeira Unidade foi: "+nota1);
// console.log("A Nota da Segunda Unidade foi: "+nota2);
// console.log("A Nota da Terceira Unidade foi: "+nota3);
// console.log("A nota da quarta Unidade foi: "+nota4);


// console.log("A Média do Aluno é: "+somaNotas);

////////////////////////////////////////////////////////////////////////////////////////////
/*
Sistema de cadastro de clientes
/*
18~25 anos -> 9%
26~35 anos -> 8%
36~50 anos -> 7%
51 ou mais -> 6%
*/

// let nome = "Manuel"; 
// let sobreNome = "Silva";
// let idade = 51;
// const nunCliente = 095864;
// let valorEmprestimo = 1500000;
// let taxadeJuros = 0.10;
// let nuAnos = 6;
// let ebBomPagador = true;

// let juros = valorEmprestimo* taxadeJuros* nuAnos;
// let montante = valorEmprestimo + juros;
// console.log("O Valor total do emprestimo com juros é: " + montante);

// if(idade >= 18 && idade <= 25) {
//     taxadeJuros = 0.09;
// }else if(idade >= 26 && idade <= 35){
//     taxadeJuros = 0.09;
// }else if (idade >= 36 && idade <= 50){
//     taxadeJuros = 0.07;
// }else{
//     taxadeJuros = 0.06;
// }

// console.log("A taxa de Juros para o perfil do cliente é: "+taxadeJuros)

/*
EMPRESA DE DESENVOLVIMENTO DE SOFTWARE
Programador Junior -> 4 Mil
Programador Pleno -> 5 Mil
Programador Senior -> 6 Mil
Testador - > 5 Mil
Arquiteto - > 8 Mil
Analista - > 7 Mil
Gerente - > 10 Mil
*/

// let cargo = "Programador Junior";

// switch(cargo){
//     case "Programador Junior":
//         console.log("O programador Junior recebe R$4.000");
//         break;
//     case "Programador Pleno":
//         console.log("O programador Junior recebe R$5.000");
//         break;
//     case "Programador Senior":
//         console.log("O programador Junior recebe R$6.000");
//         break;
//     case "O Testador":
//         console.log("O programador Junior recebe R$5.000");
//         break;
//     case "O Arquiteto":
//         console.log("O programador Junior recebe R$8.000");
//         break;
//     case "O Analista":
//             console.log("O programador Junior recebe R$7.000");
//             break;
//     case "O Gerente":
//             console.log("O programador Junior recebe R$10.000");
//             break;
//     default:
//         console.log("Cargo não encontrado")
// }

// /*
// Desafio 3
// */

// let corredor1 = 10;
// let corredor2 =  8.5;
// let corredor3 = 11;

// if(corredor1 < corredor2 && corredor1 < corredor3){
//     console.log("Corredor 1 foi o vencedor!!")
// }else if(corredor2 < corredor1 && corredor2 < corredor3){
//     console.log("Corredor 2 foi o vencedor!!")
// }else{
//     console.log("Corredor 3 foi o vencedor")
// }

/*
Laços de repetição
*/
// for(let cont = 1; cont <=50; cont++ ){
//     console.log(cont);

// }

// let nome ; 
// let sobreNome ;
// let idade;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;


// if(idade >= 18 && idade <= 25) {
//     taxadeJuros = 0.09;
// }else if(idade >= 26 && idade <= 35){
//     taxadeJuros = 0.09;
// }else if (idade >= 36 && idade <= 50){
//     taxadeJuros = 0.07;
// }else{
//     taxadeJuros = 0.06;
// }

// console.log("A taxa de Juros para o perfil do cliente é: "+ taxadeJuros)

// for(let cont = 0; cont <3; cont++){
//     nome =parseInt(prompt("Informe seu nome: "));
//     sobreNome = parseInt(prompt("Informe seu Sobrenome: "));
//     idade = parseInt(prompt("Informe sua idade: "));
//     valorEmprestimo = parseInt(prompt("Digite o Valor do Emprestimo: "));
//     numAnos = parseInt(prompt("Digite o numero de anos"));
    
//     if(idade >= 18 && idade <= 25) {
//         taxadeJuros = 0.09;
//     }else if(idade >= 26 && idade <= 35){
//         taxadeJuros = 0.09;
//     }else if (idade >= 36 && idade <= 50){
//         taxadeJuros = 0.07;
//     }else{
//         taxadeJuros = 0.06;
//     }
    
//     juros = valorEmprestimo * taxadeJuros * numAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante);

// }

/*
while
*/

// let soma = 0;
// let numero;
// while(soma <100){
//     numero = parseInt(prompt("Insira um numero"));
//     soma += numero;
//     console.log(soma);

// }

/*
Continuação - while
*/

// let nome = "Manuel"; 
// let sobreNome = "Silva";
// let idade = 25;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;


// if(idade >= 18 && idade <= 25) {
//     taxadeJuros = 0.09;
// }else if(idade >= 26 && idade <= 35){
//     taxadeJuros = 0.09;
// }else if (idade >= 36 && idade <= 50){
//     taxadeJuros = 0.07;
// }else{
//     taxadeJuros = 0.06;
// }


// valorEmprestimo = 1;
// while(valorEmprestimo != 0){
//     valorEmprestimo = parseInt(prompt("Insira o valor que deseja tomar emprestado "));
//     nuAnos = parseInt(prompt("Insira o tempo de pagamento "));
//     juros = valorEmprestimo * taxadeJuros * nuAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante);

// }

/*
Do while
*/

// let nome = "Manuel"; 
// let sobreNome = "Silva";
// let idade = 25;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;

// if(idade >= 18 && idade <= 25) {
//     taxadeJuros = 0.09;
// }else if(idade >= 26 && idade <= 35){
//     taxadeJuros = 0.09;
// }else if (idade >= 36 && idade <= 50){
//     taxadeJuros = 0.07;
// }else{
//     taxadeJuros = 0.06;
// }

// do{
//     valorEmprestimo = parseInt(prompt("Insira o valor que deseja tomar emprestado "));
//     nuAnos = parseInt(prompt("Insira o tempo de pagamento "));
//     juros = valorEmprestimo * taxadeJuros * nuAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante);
// }while(valorEmprestimo != 0)

/*
Do while break
*/

// let nome = "Manuel"; 
// let sobreNome = "Silva";
// let idade = 25;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;

// if(idade >= 18 && idade <= 25) {
//     taxadeJuros = 0.09;
// }else if(idade >= 26 && idade <= 35){
//     taxadeJuros = 0.09;
// }else if (idade >= 36 && idade <= 50){
//     taxadeJuros = 0.07;
// }else{
//     taxadeJuros = 0.06;
// }

// while(true){
//     valorEmprestimo = parseInt(prompt("Insira o valor que deseja tomar emprestado "));
//     if (valorEmprestimo ===0){
//         break;
//     }
//     nuAnos = parseInt(prompt("Insira o tempo de pagamento "));
//     juros = valorEmprestimo * taxadeJuros * nuAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante);
// }

/*
comando continue
*/
// let valorPadrao = 1.99;
// let qtItem;
// while(true){
//     let qtItem = parseInt(prompt("Qual a Quantidade do item "));
//     if(qtItem === 0){
//         break;
//     }
//     let multiplicaItem = valorPadrao * qtItem;
//     console.log(multiplicaItem);
// }

/*
DESAFIO SEÇÃO 5
*/
// let valorPadrao = 1.99;
// for(let i = 0; i<=50; i++ ){
    
//     if (i === 50){
//         continue;
//     }
//     /*
//     Minha Forma
//     */
//     console.log(i * valorPadrao)
//     /*
//     Resolução Aula
//     */
//     console.log(`${i} - R$ ${i * valorPadrao}`)
// }

// let temp;
// let somaTemp = 0;
// let numTemp = 0;

// while (true){
//     temp = parseInt(prompt("Informe a temperatura: "));
//     if(temp === 0){
//         break;
//     }
//     somaTemp += temp;
//     numTemp += 1;
// }
// console.log(somaTemp/numTemp);


/*
SEÇÃO 6 - FUNÇÕES
*/

/*
FUNÇÃO DE DECLARAÇÃO
*/ 
// function calculaMedia(num1, num2, num3){
//     let media = (num1 + num2 + num3)/3;
//     return media
// }
// console.log(calculaMedia(7,9,9));
// console.log(calculaMedia(7,98,9));
// console.log(calculaMedia(77,9,9));

/*
NA FUNÇÃO DE DECLARAÇÃO A "CHAMADA PODE SER FEITA ANTES OU DEPOIS DA FUNÇÃO"
*/ 

// console.log(calculaMedia(7,9,9));
// console.log(calculaMedia(7,98,9));
// console.log(calculaMedia(77,9,9));

// function calculaMedia(num1, num2, num3){
//     let media = (num1 + num2 + num3)/3;
//     return media
// }

/*
FUNÇÃO DE DECLARAÇÃO - EXEMPLO SISTEMA DO BANCO
*/ 
// let nome ; 
// let sobreNome;
// let idade ;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;
// let ebBomPagador;

// function cadastraCliente(nomeCliente, sobreNomeCliente, idadeCliente,
//      valorEmprestimoCliente, nuAnosCliente, ehBomPagadorCliente){

//      nome = nomeCliente;
//      sobreNome = sobreNomeCliente;
//      idade = idadeCliente;
//      valorEmprestimo = valorEmprestimoCliente;
//      nuAnos = nuAnosCliente;
//      ebBomPagador = ehBomPagadorCliente;
//      taxadeJuros = defineTaxadeJuros(idadeCliente);
// }
     
// function defineTaxadeJuros(idadeCliente){
//     if(idade >= 18 && idade <= 25) {
//         return 0.09;
//     }else if(idade >= 26 && idade <= 35){
//         return 0.09;
//     }else if (idade >= 36 && idade <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// cadastraCliente("Manuel","Silva",24,15000,2,"true")
// console.log(nome)
// console.log(sobreNome)
// console.log(taxadeJuros)

// cadastraCliente("Edval","Silveira",55,15000,2,"false")
// console.log(nome)
// console.log(sobreNome)
// console.log(taxadeJuros)

/*
FUNÇÃO DE EXPRESSÃO - NÃO ACEITA DE QUE DECLARAÇÃO SEJA FEITA ANTES DA FUNÇÃO
*/ 
// const media = function calculaMedia(num1,num2,num3){
//     let mediaNum = (num1 + num2 + num3)/3;
//     return mediaNum
// }
// console.log(media(90,7,98));

/*FUNCAO ANONIMA
*/

// const media = function (num1,num2,num3){
//     let mediaNum = (num1 + num2 + num3)/3;
//     return mediaNum
// }
// console.log(media(90,7,98));

/*
FUNÇÃO DE FLECHA, SETA OU ARROW FUNCTION
*/ 

// const media = (num1, num2, num3) => {
//     let mediaNum = (num1 + num2 + num3)/3;
//     return mediaNum;
// }

// console.log(media(90,98,95));

// const areaQuadrado = lado =>{
//     return lado * lado;
// }
// console.log(areaQuadrado(45))

/*
EXEMPLO TAREFA DE DAVI
*/
// const areaQuadrado1 = (lado1, lado2) => {
//     return (lado1 * lado2)/2;
// }
// console.log(areaQuadrado1(15,7.5))

/* FORMA SIMPLIFICADA DE FAZER */

// const areaQuadrado = lado =>lado * lado;
// console.log(areaQuadrado(45))

/* ESCOPO GLOBAL OU LOCAL -ISSO É QUE DETERMINA O QUE PODE SER ACESSADO EM CADA PARTE DO CÓDIGO */

// let nome = "Manoel";

// function saudar(){
//     let saudacao = "Olá Sr."+ nome;
//     return saudacao;
// }
// console.log(saudar());

/* PARÂMETROS */

// let nome ; 
// let sobreNome;
// let idade ;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;
// let ehBomPagador;

// function cadastraCliente(nomeCliente, sobreNomeCliente, idadeCliente,
//      valorEmprestimoCliente, nuAnosCliente = 2, ehBomPagadorCliente = false){

//      nome = nomeCliente;
//      sobreNome = sobreNomeCliente;
//      idade = idadeCliente;
//      valorEmprestimo = valorEmprestimoCliente;
//      nuAnos = nuAnosCliente;
//      ehBomPagador = ehBomPagadorCliente;
//      taxadeJuros = defineTaxadeJuros(idadeCliente);
// }
     
// function defineTaxadeJuros(idadeCliente){
//     if(idade >= 18 && idade <= 25) {
//         return 0.09;
//     }else if(idade >= 26 && idade <= 35){
//         return 0.09;
//     }else if (idade >= 36 && idade <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// cadastraCliente("Manuel","Silva",24,15000)
// console.log(nome)
// console.log(sobreNome)
// console.log(taxadeJuros)
// console.log(ehBomPagador)

/* PARÂMETRO REST - NOS PERMITE TRANSFORMAR UM NUMERO INDETERMINADO DE PARÂMETROS
EM UMA LISTA, E FUNCIONA APENAS DENTRO DE UMA FUNÇÃO, SENDO ELE UM DOS ARGUMENTOS DA FUNÇÃO*/

// function interrogar(){
//         let numSim = 0;
//         let pergunta1 = prompt("Telefonou para a vítima?");
//         let pergunta2 = prompt("Esteve no local do crime?");
//         let pergunta3 = prompt("Mora perto da vítima?");
//         let pergunta4 = prompt("Devia para a vítima?");
//         let pergunta5 = prompt("Já trabalhou com a vítima?");
        
//         if (pergunta1 === "sim"){
//             numSim += 1;
//         }
//         if (pergunta2 === "sim"){
//             numSim += 1;
//         }
//         if (pergunta3 === "sim"){
//             numSim += 1;
//         }
//         if (pergunta4 === "sim"){
//             numSim += 1;
//         }
//         if (pergunta5 === "sim"){
//             numSim += 1;
//         }
//         return numSim;
// }

// function classifica(numSim){
//         if (numSim === 5){
//             console.log("Assasino");
//         }else if(numSim === 3 || numSim === 4){
//             console.log("Cumplice");
//         }else if (numSim === 2){
//             console.log("Suspeito")
//         }else{
//             console.log("Inocente");
//         }
// }
// classifica(interrogar());

/*
////////////////////////////////////////////////////ARRAY OU MATRIZ///////////////////////////////////////////////
*/

// let nome ; 
// let sobreNome;
// let idade ;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;
// let ehBomPagador;
// let avalistas;

// function cadastraCliente(nomeCliente, sobreNomeCliente, idadeCliente,
//      valorEmprestimoCliente, nuAnosCliente = 2, ehBomPagadorCliente= false, avalistasCliente){

//      nome = nomeCliente;
//      sobreNome = sobreNomeCliente;
//      idade = idadeCliente;
//      valorEmprestimo = valorEmprestimoCliente;
//      nuAnos = nuAnosCliente;
//      ehBomPagador = ehBomPagadorCliente;
//      taxadeJuros = defineTaxadeJuros(idadeCliente);
//      avalistas = avalistasCliente;
// }
     
// function defineTaxadeJuros(idadeCliente){
//     if(idade >= 18 && idade <= 25) {
//         return 0.09;
//     }else if(idade >= 26 && idade <= 35){
//         return 0.09;
//     }else if (idade >= 36 && idade <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// cadastraCliente("Manuel","Silva",24,15000,2,true, ["Marcio","Anderson","Gomes"])
// console.log(nome);
// // console.log(sobreNome);
// // console.log(taxadeJuros);
// // console.log(ehBomPagador);
// console.log(avalistas);
// console.log(avalistas[0]);
// console.log(avalistas[1]);
// console.log(avalistas[2]);


/*
/////////////////////////////////////////////OPERAÇÕES COM ARRAYS///////////////////////////////////////////////////
*/
// const frutas = [];

// frutas[0] = "abacaxi"
// frutas[1] = "maçã"
// frutas[2] = "Melancia"
// frutas[3] = "limão"
// frutas[4] = "Morango"

// console.log(frutas);

// frutas[0] = "Uva"

// console.log(frutas);

/*
MÉTODOS EM  ARRAYS - PUSH, POP, SHIFT, UNSHIFT, SORT, REVERSE, SPLICE, INDEXOF...ETC
*/
//PUSH -  ADICIONA ELEMENTOS AO FINAL DO ARRAY
// const frutas = ["Uva","Maçã"];
// frutas.push("Melancia");
// console.log(frutas);

// //UNSHIFT - ADICIONA ELEMENTOS NO INICIO DO ARRAY
// const frutas = ["Uva","Maçã"];
// frutas.unshift("Melancia");
// console.log(frutas)

//POP - REMOVE O ULTIMO ELEMENTO - SHIFT REMOVE O PRIMEIRO ELEMENTO - SPLICE REMOVE O INTERVALO
// const frutas = ["Uva","Maçã"];
// frutas.pop();
// console.log(frutas)

////SPLICE
// const frutas = ["Uva","Maçã", "Melancia","banana","mamão"];
// frutas.splice(1,2); // PRIMEIRA INFORMAÇÃO É O INDICE QUE SERÁ REMOVIDO E A SEGUNDA INFORMAÇÃO É A QUANTIDADE ELEMENTOS
// console.log(frutas);

// PODEM SER ARMAZENADOS EM VARIAVEIS PARA ANALISE

// const frutas = ["Uva","Maçã", "Melancia","banana","mamão"];
// let varPop = frutas.pop(); //ultimo
// let varShift = frutas.shift(); //primeiro
// let varSplice = frutas.splice(1,2); //intervalo
// console.log(varPop); // mamão
// console.log(varShift); // uva
// console.log(varSplice); // melancia e banana


// let nome ; 
// let sobreNome;
// let idade ;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;
// let ehBomPagador;
// let avalistas;

// function cadastraCliente(nomeCliente, sobreNomeCliente, idadeCliente,
//      valorEmprestimoCliente, nuAnosCliente = 2, ehBomPagadorCliente= false, avalistasCliente){

//      nome = nomeCliente;
//      sobreNome = sobreNomeCliente;
//      idade = idadeCliente;
//      valorEmprestimo = valorEmprestimoCliente;
//      nuAnos = nuAnosCliente;
//      ehBomPagador = ehBomPagadorCliente;
//      taxadeJuros = defineTaxadeJuros(idadeCliente);
//      avalistas = avalistasCliente;
// }
     
// function defineTaxadeJuros(idadeCliente){
//     if(idade >= 18 && idade <= 25) {
//         return 0.09;
//     }else if(idade >= 26 && idade <= 35){
//         return 0.09;
//     }else if (idade >= 36 && idade <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// cadastraCliente("Manuel","Silva",24,15000,2,true, ["Marcio","Anderson","Gomes"])
// console.log(nome);
// console.log(avalistas);


// function adicionaAvalista(avalista){
//     avalistas.push(avalista);
// }

// function removeAvalista(){
//     avalistas.pop();
// }

// function editaAvalista(nomeAvalista, indice){
//     avalistas[indice] = nomeAvalista;
// }

// function ordenarAvalista(){
//     return avalistas.sort();
// }

// adicionaAvalista("Marcelo");
// adicionaAvalista("Jose");
// adicionaAvalista("Marcos");
// console.log(avalistas);

// removeAvalista();
// console.log(avalistas);

// editaAvalista("Ricardo Solto", 0)
// console.log(avalistas[0])
// console.log(ordenarAvalista())


//METODO MAP
// const numeros= [10,20,30,40,50]

// const novosNumeros = numeros.map((numero) => numero + 10)

// console.log(novosNumeros)

//METODO FILTER - FILTRAR OS ELEMENTOS DE UM ARRAY

// const numeros= [10,20,30,40,50]

// const novosNumeros = numeros.filter((numero) => numero > 25);

// console.log(novosNumeros)

//METODO FIND - RETORNA O PRIMEIRO METODO DO ARRAY MEDIANTE A UMA CONDIÇÃO

// const numeros= [10,20,30,40,50]
// let numeroRetornado = numeros.find((numero) => numero > 25);

// const novosNumeros = numeros.filter((numero) => numero > 25);

// console.log(numeroRetornado) //30

// + ARRAY

// const numeros = [-7,-10,-3,0,10,20,30,40,50]

// let numeroRetornado = numeros.find((numero) => numero >0);
// let indiceRetornado = numeros.findIndex((numero) => numero > 0);
// console.log(numeroRetornado);
// console.log(indiceRetornado);

//ACESSO ALEATÓRIO ARRAYS

// const nomes = ["Joao","Carlos","Rodrigo","Caio","Pedro","Bruno"];

// let indiceAleatorio =Math.floor(Math.random() * 6);

// console.log(nomes[indiceAleatorio]);

//PERCORRER ARRAYS

// => EX1 FOR TRADICIONAL
// const nomes = ["Joao","Carlos","Rodrigo","Caio","Pedro","Bruno"];
// for(let i = 0; i < nomes.length; i++){
//     console.log(nomes[i])
// }

// => EX2 FOR IN
// const nomes = ["Joao","Carlos","Rodrigo","Caio","Pedro","Bruno"];
// for(let indice in nomes){
//     console.log(nomes[indice]);
// }

// => EX3 FOR EACH COM ARROW FUNCTION
// const nomes = ["Joao","Carlos","Rodrigo","Caio","Pedro","Bruno"];
// nomes.forEach((nomes, indice) => {
//     console.log(nomes);
//     console.log("Nome " + indice + ":" + nomes);
// });

// => EX4 - ARRAYS NO SISTEMA DO BANCO

// let nome ; 
// let sobreNome;
// let idade ;
// let valorEmprestimo;
// let taxadeJuros;
// let nuAnos;
// let ehBomPagador;
// let avalistas;

// function cadastraCliente(nomeCliente, sobreNomeCliente, idadeCliente,
//      valorEmprestimoCliente, nuAnosCliente = 2, ehBomPagadorCliente= false, avalistasCliente){

//      nome = nomeCliente;
//      sobreNome = sobreNomeCliente;
//      idade = idadeCliente;
//      valorEmprestimo = valorEmprestimoCliente;
//      nuAnos = nuAnosCliente;
//      ehBomPagador = ehBomPagadorCliente;
//      taxadeJuros = defineTaxadeJuros(idadeCliente);
//      avalistas = avalistasCliente;
// }
     
// function defineTaxadeJuros(idadeCliente){
//     if(idade >= 18 && idade <= 25) {
//         return 0.09;
//     }else if(idade >= 26 && idade <= 35){
//         return 0.09;
//     }else if (idade >= 36 && idade <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// cadastraCliente("Manuel","Silva",24,15000,2,true, ["Marcio","Anderson","Gomes"])
// console.log(nome);
// console.log(avalistas);


// function adicionaAvalista(avalista){
//     avalistas.push(avalista);
// }

// function removeAvalista(){
//     avalistas.pop();
// }

// function editaAvalista(nomeAvalista, indice){
//     avalistas[indice] = nomeAvalista;
// }

// function ordenarAvalista(){
//     return avalistas.sort();
// }

// function exibeAvalistas(){
//     avalistas.forEach((avalista, indice) => {
//         console.log(`O ${indice + 1} avalista é ${avalista}`);
//     })
// }

// adicionaAvalista("Marcelo");
// adicionaAvalista("Jose");
// adicionaAvalista("Marcos");
// console.log(avalistas);

// removeAvalista();
// console.log(avalistas);

// editaAvalista("Ricardo Solto", 0)
// console.log(avalistas[0])
// console.log(ordenarAvalista())

// exibeAvalistas();

// ARRAY MULTIDIMENSIONAL

// const clientes = [["Marcio",22,true],["Carlos", 51, true],["Ricardo", 33, false]];

// console.table(clientes);

////LOOPS ANINHADOS - PERCORRER ARRAYS MULTIDIMENSIONAIS

// const quadroFuncionarios = [["Financeiro","Kilma","Daniel"],["Marketing","Sarah","Leticia"]
// ,["Diretoria","Keila","Marcos"]];

// quadroFuncionarios.forEach((departamento, indiceDep) =>{
//     departamento.forEach((funcionario, indiceFunc)=>{
//         console.log(`${indiceDep + 1} - ${funcionario}` );

//     })
// })

// DESAFIO ARRAY

// function geraRelatorio(array){
//     let contAprovados = 0;
//     let contReprovados = 0;
//     for (const nota of array){
//         if (nota >= 7){
//          contAprovados += 1;
//         }else{
//             contReprovados += 1;
//         }
//     }

//     return `Aprovados: ${contAprovados}. Reprovados: ${contReprovados}`;
// }

// console.log(geraRelatorio([10,8,6,5,7,8,4,3]));

//////coleçao de dados

////##########notacao liteal
// const carro ={
//     nome: "Tiggo",
//     marca: "Cherry",
//     cor:"Preto",
//     ano:"2015",
//     emplacado: true,
//     motor:{
//         cavalos: 150,
//         cilindradas: 2.0,

//     }
// };

// console.log(carro.motor); //ACESSO VIA NOTAÇÃO POR PONTOS(MAIS)
// console.log(carro['nome']); //ACESSO VIA NOTAÇÃO POR COLCHETES

//MELHORANDO O SISTEMA DO BANCO


// function cadastraCliente(nomeCliente, sobreNomeCliente, idadeCliente,
//      valorEmprestimoCliente, nuAnosCliente = 2, ehBomPagadorCliente= false, avalistasCliente){
//         cliente ={
//             nome: nomeCliente,
//             sobreNome: sobreNomeCliente,
//             idade: idadeCliente,
//             emprestimo: {
//                 valorEmprestimo: valorEmprestimoCliente,
//                 nuAnos: nuAnosCliente,
//                 ehBomPagador: ehBomPagadorCliente,
//                 taxadeJuros: defineTaxadeJuros(idadeCliente),
//                 avalistas: avalistasCliente
//         }
//     }
//         return cliente;
// }
     
// function defineTaxadeJuros(idadeCliente){
//     if(idadeCliente >= 18 && idadeCliente <= 25) {
//         return 0.09;
//     }else if(idadeCliente >= 26 && idadeCliente <= 35){
//         return 0.09;
//     }else if (idadeCliente >= 36 && idadeCliente <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// const cliente1 = cadastraCliente("Manuel","Silva",24,15000,2,true, ["Marcio","Anderson","Gomes"])
// console.log(cliente1);

// conceito de metodos

// const carro ={
//     nome: "Tiggo",
//     marca: "Cherry",
//     cor:"Preto",
//     ano:"2015",
//     consumo:11,
//     capacidadeTanque:55,
//     emplacado: true,
//     motor:{
//         cavalos: 150,
//         cilindradas: 2.0,

//     },
//     kmPercorridos: function(){
//         return `O ${this.nome} percorre ${this.consumo * this.capacidadeTanque} KM com um tanque cheio.}`
        

//     }
    
// };

function cadastraCliente(nomeCliente, sobreNomeCliente, idadeCliente,
     valorEmprestimoCliente, nuAnosCliente = 2, ehBomPagadorCliente= false, avalistasCliente){
        cliente ={
            nome: nomeCliente,
            sobreNome: sobreNomeCliente,
            idade: idadeCliente,
            emprestimo: {
                valorEmprestimo: valorEmprestimoCliente,
                nuAnos: nuAnosCliente,
                ehBomPagador: ehBomPagadorCliente,
                taxadeJuros: defineTaxadeJuros(idadeCliente),
                avalistas: avalistasCliente
        },
        adicionaAvalista: function(avalista){
            this.emprestimo.avalistas.push(avalista);

        },
        removeAvalista: function(){
            this.emprestimo.avalistas.pop();
        },
        editaAvalista: function(nomeAvalista, indice) {
            this.emprestimo.avalistas[indice] = nomeAvalista;
        },
        ordenaAvlista: function(){
            this.emprestimo.avalistas.sort();
        },
        exibeAvalistas: function(){
            this.emprestimo.avalistas.forEach((avalista, indice) => {
                console.log()
                
            });

        }


    }
        return cliente;
}
     
function defineTaxadeJuros(idadeCliente){
    if(idadeCliente >= 18 && idadeCliente <= 25) {
        return 0.09;
    }else if(idadeCliente >= 26 && idadeCliente <= 35){
        return 0.09;
    }else if (idadeCliente >= 36 && idadeCliente <= 50){
        return 0.07;
    }else{
        return 0.06;
    }
}

const cliente1 = cadastraCliente("Manuel","Silva",24,15000,2,true, ["Marcio","Anderson","Gomes"])
console.log(cliente1);




