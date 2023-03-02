let entrada = require('prompt-sync')();

let idade = entrada('Digite sua idade: ');


if (idade <= 18) {
    console.log('Voce pode se matricular na auto-escola!');
}

else if (idade > 18) {
    console.log('Voce tem idade para dirigir caso tenha habilitação');
}

if (idade < 18) {
    console.log('Voce não tem idade para diirigir!');
}
if (idade >= 18) {
    console.log('Maior');
} else {
    console.log('Menor');
}