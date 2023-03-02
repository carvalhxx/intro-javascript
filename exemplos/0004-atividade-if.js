//crie um programa que receba duas notass de 0 a 10
//calcule a media e com a media
//exiba as seguintes mensagens para cada faixa de valores
//nota < 5 =I, nota >= 5 e < 6.5 = R, nota > 6.5 e < 8.5 = B
// e nota >= 8.5 MB

let entrada = require('prompt-sync')();

let nota1 =entrada('Digite a primeira nota: ');

let nota2 =entrada('Digite a segunda nota: ');

let summ = nota1 + nota2;

let divs = summ /2;

if (divs <5) {
    console.log('Sua nota é: I');
}

else if (divs >= 5 && divs <6.5) {
    console.log('Sua nota é: R');
}

else if (divs > 6.5 && divs < 8.5){
    console.log('Sua nota é: B');
}

else if(divs > 8.5) {
    console.log('Sua nota é: MB');
}