/*variaveis [TYPE ANNOTATIONS]*/
let nome: string = 'Olga de Oliveira';
console.log(nome);


/*Arrays [TYPE ANNOTATIONS] */

let animais: string[] = ['elefante', 'cobra', 'peixe', 'pantera', 'cachorro', 'gato'];
console.log(animais)


/*Objetos [TYPE ANNOTATIONS]*/
let carro:{
    nome: string;
    ano: number;
    preco: number;

}

carro = {nome: 'Toyota', ano: 2025, preco: 80.000}
console.log(carro);


/*Functions [TYPE ANNOTATIONS]*/
function multiplicarNumero(num1: number, num2:number) {
    return num1 * num2;
}

console.log(multiplicarNumero(2,5))