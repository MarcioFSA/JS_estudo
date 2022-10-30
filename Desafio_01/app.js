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

for(let cont = 0; cont <3; cont++){
    nome =parseInt(prompt("Informe seu nome: "));
    sobreNome = parseInt(prompt("Informe seu Sobrenome: "));
    idade = parseInt(prompt("Informe sua idade: "));
    valorEmprestimo = parseInt(prompt("Digite o Valor do Emprestimo: "));
    numAnos = parseInt(prompt("Digite o numero de anos"));
    
    if(idade >= 18 && idade <= 25) {
        taxadeJuros = 0.09;
    }else if(idade >= 26 && idade <= 35){
        taxadeJuros = 0.09;
    }else if (idade >= 36 && idade <= 50){
        taxadeJuros = 0.07;
    }else{
        taxadeJuros = 0.06;
    }
    
    juros = valorEmprestimo * taxadeJuros * numAnos;
    montante = valorEmprestimo + juros;
    console.log(montante);

}