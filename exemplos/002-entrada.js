// fazendo refeência para biblioteca de entrada de dados
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome');

console.log('Nome digitado: ' + nome);


//Trabalhando com números

let n1 = parseInt (entrada('Digite o 1º numero: '))
let n2 = parseInt (entrada('Digite o 2º numero: '))
/*
let numN1 = parseInt(n1);
let numN2 = parseInt(n2);
*/

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2
let divisao = n1 / n2; 

console.log('Resultado da soma entre ' + n1 + ' e ' + n2 + ' = ' + soma);
console.log('Resultado da subtrção entre ' + n1 + ' e ' + n2 + ' = ' + subtracao)
console.log('Resultado da multiplicação entre ' + n1 + ' e ' + n2 + ' = ' + multiplicacao)
console.log('Resultado da divisão entre ' + n1 + ' e ' + n2 + ' = ' + divisao)



entrada('Pressione enter para encerrar...');  