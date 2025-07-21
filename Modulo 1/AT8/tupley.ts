// -> EXEMPLO 1 USO SIMPLES DE TUPLAS EM TYPESCRIPT 
let pessoa: [string, string, number];
pessoa = ['Olga de Oliveira' ,'Desenvolvedora-web', 22];

console.log(pessoa);


// exemplo 2 USO SIMPLES DE TUPLAS EM TYPESCRIPT 
let animais: [string, number, number];
animais =['Neguinha', 10, 13];

console.log(animais);

// -> EXEMPLO2 ACESSADO O VALOR DA TUPLA 

let pessoa1: [string, string, number];
pessoa1 = ['Olga de Oliveira' ,'Desenvolvedora-web', 22];
console.log(pessoa1[1]);

// exemplo ACESSADO O VALOR DA TUPLA 

let animais1: [string, string, string];
animais1 = ['Neguinha', 'fofa', 'gordinha'];

console.log(animais1[1]);


// -> EXEMPLO3 OUTRA FORMA DE USAR TUPLAS EM TYPESCRIPT (COM LABELS)

let pessoa2: [nome: string, posicao: string, idade: number] = ['Olga de Oliveira' ,'Desenvolvedora-web', 22];
console.log(pessoa2);

// exemplo FORMA DE USAR TUPLAS EM TYPESCRIPT (COM LABELS)

let animais2: [nome: string, raca: string, idade:number, peso:number]= ['neguinha', 'vira-lata', 10, 23];
console.log(animais2);

// -> EXEMPLO4 USANDO TUPLAS COM SPREND OPERATOR

let frutas: [string, ...string[]] = ['Manga', 'Melancia', 'Feijão', 'Arroz', 'Pera'];
console.log(...frutas);

// USANDO TUPLAS COM SPREND OPERATOR

let legumes: [string, ...string[]] = ['batata', 'chuchu', 'abobora', 'cenoura', 'quiabo'];
console.log(...legumes);


// -> EXEMPLO5 LISTA HETOGENEA DE TUPLA:

let  listafruntas2: [number, boolean, ...string[]] = [5, true, ...frutas];
console.log(listafruntas2);

let listalegumes: [number, boolean, ...string[]] = [5, true, ...legumes];
console.log(listalegumes);

// -> EXEMPLO6 USO DE FUNÇÃO COM TUPLAS 

function listarpessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}

let resultado = listarpessoas(['Olga', 'Maria'], [22, 70]);

console.log(resultado);

// A função listasanimais recebe dois arrays, um de nomes (string[]) e outro de idades (number[]).
// Ela usa o operador ... (spread) para juntar os dois arrays em um só.
// O resultado é uma única lista com os nomes seguidos das idades.

function listasanimais(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
} 

let result = listasanimais(['cao', 'gato'], [12, 13]);


console.log(result);

// -> EXEMPLO7 LABELED  TUPLES COM SPREAD OPERATOR  NUMA FUNÇÃO


type Nome = 
    | [primeironome: string, sobrenome: string] // isso são premissas 
    | [primeironome: string, nomemeio: string, sobrenome: string] // isso também são premissas


function criarpessoa(...nome: Nome){
    return [...nome];
}

console.log(criarpessoa ('Olga', 'Oliveira'));
console.log(criarpessoa ('Olga','não tenho', 'Oliveira'));


// continuação do exemplo 7 TUPLES COM SPREAD OPERATOR


type Pilotosf1 =
    | [nomespelitos: string, sobrenome: string]
    | [nomespelitos: string, nomeequipe: string, sobrenome: string]


function criapilotos (...nome: Nome){
    return [...nome];
}



console.log(criapilotos ('Olga', 'Oliveira'));
console.log(criapilotos ('Olga','ferrari', 'Oliveira'));