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

function interrogar(){
        let numSim = 0;
        let pergunta1 = prompt("Telefonou para a vítima?");
        let pergunta2 = prompt("Esteve no local do crime?");
        let pergunta3 = prompt("Mora perto da vítima?");
        let pergunta4 = prompt("Devia para a vítima?");
        let pergunta5 = prompt("Já trabalhou com a vítima?");
        
        if (pergunta1 === "sim"){
            numSim += 1;
        }
        if (pergunta2 === "sim"){
            numSim += 1;
        }
        if (pergunta3 === "sim"){
            numSim += 1;
        }
        if (pergunta4 === "sim"){
            numSim += 1;
        }
        if (pergunta5 === "sim"){
            numSim += 1;
        }
        return numSim;
}

function classifica(numSim){
        if (numSim === 5){
            console.log("Assasino");
        }else if(numSim === 3 || numSim === 4){
            console.log("Cumplice");
        }else if (numSim === 2){
            console.log("Suspeito")
        }else{
            console.log("Inocente");
        }
}
classifica(interrogar());