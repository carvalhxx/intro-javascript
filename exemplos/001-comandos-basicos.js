//comentário de 1 linha
console.log('Hello World');
/*
    comentário de mais 
    de uma linha
*/

/*
    Pesquisar a diferença entre as instruções
    var, let e const na linguagem java-script
*/

let nome = 'kayky';
let idade = 18;
let altura = 1.76;
let trabalha = false;
let corFavorita = 'roxo';
let cores_favoritas = ['roxo', 'verde', 'preto', 'branco'];
let endereco = {
    'logadouro' : 'Rua',
    'nome_log'  : 'Floriano sales',
    'n'         : '185',
    'bairro'    : 'Vila Industria'
};
let covid;
let dengue = null;
const exfunc = () => {};

console.log('Variável nome = ' + typeof(nome));
console.log('Variável idade = ' + typeof(idade));
console.log('Variável altura = ' + typeof(altura));
console.log('Variável trabalha = ' + typeof(trabalha));
console.log('Variável Cor Favorita = ' + typeof(corFavorita));
console.log('Variável Cores Favoritas = ' + typeof(cores_favoritas));
console.log('Variável Endereço = ' + typeof(endereco));
console.log('Variável dengue = ' + typeof(dengue));
console.log('Variável covid = ' + typeof(covid));
console.log('Variável exfunc = ' + typeof(exfunc));

