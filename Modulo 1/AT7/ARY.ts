//length é uma propriedade que mostra o tamanho de algo, geralmente de um array ou string.


// Exemplo 1 com Uso de colchetes:

let frutas: string[] = ['A', 'L','M', 'M','M'];
console.log(frutas[2]);

// exemplo 1.1 
let pilot: string[] = ['Lewis Hamilton', 'Carlos Saiz', 'Alex Albon', 'Charles Leclarec', 'Fernando Alonso' ];
console.log(pilot[4]);

// Exemplo 2 Array Object (Objeto Array):

let frutas1: Array<string> = ['A', 'L','M', 'M','M'];
console.log(frutas1[2]);

//exemplo 2.1 

let pilots: Array<string> =  ['Lewis Hamilton', 'Carlos Saiz', 'Alex Albon', 'Charles Leclarec', 'Fernando Alonso' ];
console.log(pilots[5]);

//Exemplo 3 Adicionando mais strings com método 'push'

let idiomas: Array<string> = ['portugues', 'Ingles', 'espanhol', 'Frances']; 
console.log(idiomas);

idiomas.push('madarim');
console.log(idiomas);

idiomas.push('italiano');
console.log(idiomas);



let primas: Array<string> = ['Thaiza', 'Beatriz', 'mariana','Camila'];
console.log(primas);

primas.push('lidiane');
console.log(primas);

//Exemplo 4 Identificar tamanho do array - método 'length'

let idiomas1: Array<string> = ['portugues', 'Ingles', 'espanhol', 'Frances']; 
console.log(idiomas1.length);

let primas1: Array<string> = ['Thaiza', 'Beatriz', 'mariana','Camila'];
console.log(primas1.length);


// Exemplo 5 Exemplo de Array com spread Operador 

let listanumeros = [0, 1, 2, 3, 4, 5];
listanumeros = [... listanumeros, 6, 7, 8, 9, 10];

console.log(listanumeros);

let numlist = [21, 22, 70, 12, 13, 34];
listanumeros = [ ... numlist, 56, 47, 34, 22 ];

console.log(numlist);



// Exemplo 6 Exemplo Array com laço de interação

let linguagemArray:string[] = new Array('javascript', 'python', 'php', 'c#');


function funcaolinguagens(linguagens:string[]){
    for (let i = 0; i < linguagens.length; i++) {
        console.log (linguagemArray[i]); 
        
    }
}

funcaolinguagens(linguagemArray);

// exemplo 2 de array com laço de interação

let ligusns:string[] = new Array('javascript', 'python', 'php', 'c#');

function funcao(ling:string[]){
    for (let i = 0;  i < ling.length; i++) {
        console.log(ligusns[i]);
    }
}

funcao(ligusns);


// exemplo 3 de array com laço de interação

// Esse laço for percorre todos os elementos do array pit, começando do índice 0 até o último (menor que pit.length).
//A variável a serve como índice para acessar os elementos.

let pilotos:string[] = new Array('LEWIS',  'CARLOS', 'CHALES', 'GEORGE');


function funcaos(pit:string[]){
    for(let a = 0; a < pit.length; a++){
        console.log(pilotos[a]);
    }
}

funcaos(pilotos);