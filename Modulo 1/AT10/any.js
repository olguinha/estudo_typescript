"use strict";
// EXEMPLO 1 : TIPO ANY
const a = 22;
const b = ['Olga'];
const result = a + b;
console.log(result);
// EXEMPLO 2 : Quando o tipo 'Any' é inferido implicitamente
//   let frase;
//   frase = 'Oi, pessoal!! Todo bem ?' ;
//   console.log(frase);
// exemplo 3: Quando devemos usar o tipo any;
const formulario = {
    nome: 'Olga',
    sobrenome: 'de Oliveira',
    idade: '22',
};
console.log(formulario);
