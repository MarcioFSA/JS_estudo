/*
Sistema de Cadastro de clientes
*/

let nome = "Manuel";
let sobrenome = "silva";
let idade = 24;
const nunCliente = 0987654
let valorEmprestimo = 15000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = true;

console.log("Boa tarde Sr."+nome+" "+sobrenome+". Sua idade é: "+ idade )

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;

console.log("Valor do montante: " + montante)