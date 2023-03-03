//crie um programa que receba duas notass de 0 a 10
//calcule a media e com a media
//exiba as seguintes mensagens para cada faixa de valores
//nota < 5 =I, nota >= 5 e < 6.5 = R, nota > 6.5 e < 8.5 = B
// e nota >= 8.5 MB

let entrada = require('prompt-sync')();

let n1 = entrada('Digite a primeira nota: ');

let n2 = entrada('Digite a segunda nota: ');

let nota1 = parseInt(n1)
let nota2 = parseInt(n2)

let summ = nota1 + nota2;

let media = summ /2;

if (media <5) {
    console.log('Sua nota é: I');
}else if
    (media >= 5 && media <6.5) {
    console.log('Sua nota é: R');
}else if 
    (media >= 6.5 && media <8.5){
    console.log('Sua nota é: B');
}else if
    (media >8.5) {
    console.log('Sua nota é: MB');
}