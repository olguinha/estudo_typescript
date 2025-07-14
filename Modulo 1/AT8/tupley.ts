// -> EXEMPLO 1 USO SIMPLES DE TUPLAS EM TYPESCRIPT 
let pessoa: [string, string, number];
pessoa = ['Olga de Oliveira' ,'Desenvolvedora-web', 22];

console.log(pessoa);

// -> EXEMPLO2 ACESSADO O VALOR DA TUPLA 

let pessoa1: [string, string, number];
pessoa1 = ['Olga de Oliveira' ,'Desenvolvedora-web', 22];
console.log(pessoa1[1]);


// -> EXEMPLO3 OUTRA FORMA DE USAR TUPLAS EM TYPESCRIPT (COM LABELS)

let pessoa2: [nome: string, posicao: string, idade: number] = ['Olga de Oliveira' ,'Desenvolvedora-web', 22];

console.log(pessoa2);

// -> EXEMPLO4 USANDO TUPLAS COM SPREND OPERATOR

let frutas: [string, ...string[]] = ['Manga', 'Melancia', 'Feijão', 'Arroz', 'Pera'];
console.log(...frutas);


// -> EXEMPLO5 LISTA HETOGENEA DE TUPLA:



// -> EXEMPLO6 USO DE FUNÇÃO COM TUPLAS 



// -> EXEMPLO7 LABELED  TUPLES COM SPREAD OPERATOR  NUMA FUNÇÃO