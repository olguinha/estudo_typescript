/*variaveis [TYPE ANNOTATIONS]*/
let nome: string = 'Olga de Oliveira';
console.log(nome);

let names: string = 'Maria de Oliveira';
console.log(names);

let fornames: string ='Beatriz Parra Oliveira Almeida Souza';
console.log(fornames);

/*Arrays [TYPE ANNOTATIONS] */

let animais: string[] = ['elefante', 'cobra', 'peixe', 'pantera', 'cachorro', 'gato'];
console.log(animais);

let typemarca: string[] = ['Honda', 'Ferarri', 'toyota', 'Mercedes'];
console.log(typemarca);

let typespilot: string[] = ['Lewis Hamilton', 'Carlos Saiz', 'Gabriel Bortoleto'];
console.log(typespilot);


/*Objetos [TYPE ANNOTATIONS]*/
/*primeiro exemplo 1*/
let carro:{
    nome: string;
    ano: number;
    preco: number;

}

carro = {nome: 'Toyota', ano: 2025, preco: 80.000}
console.log(carro);

/*segundo exemplo 2*/

let pilot: {
    nome: string;
    categoria: string;
    equipe: string;
    anoestreia: number;
    champ: number;
    
}

 pilot = {nome:'Lewis Hamilton', categoria: 'f1', equipe:'Ferarri', anoestreia: 2007, champ: 7};
 console.log(pilot);



/*Functions [TYPE ANNOTATIONS]*/

/*exemplo 1 */
function multiplicarNumero(num1: number, num2:number) {
    return num1 * num2;
}

console.log(multiplicarNumero(2,5));

/*exemplo 2 */
function divinum(nums1: number, nums2:number){
    return nums1 - nums2;
}

console.log(divinum(2,5));


/*exemplo 3 */

function adnum (nu1: number, nu2:number){

    return nu1 + nu2;
}

console.log(adnum(2,5));

/*exemplo 4 */

function divnum (um1:number, um2:number){
    return um1 / um2;
}

console.log(divnum(2,5));