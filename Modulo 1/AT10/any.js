"use strict";
// EXEMPLO 1 : TIPO ANY
const a = 22;
const b = ['Olga'];
const result = a + b;
console.log(result);
// O código concatena o número 70 com a string "MARIA DE OLIVEIRA", porque o operador + com uma string faz junção de texto, e o tipo any permite isso sem erro
const mae = 70;
const nome = 'MARIA DE OLIVEIRA';
const resultado = mae + nome;
console.log(resultado);
// EXEMPLO 2 : Quando o tipo 'Any' é inferido implicitamente
//   let frase;
//   frase = 'Oi, pessoal!! Todo bem ?' ;
//   console.log(frase);
// exemplo 3: Quando devemos usar o tipo any;
// Explicação da tipagem:
//formulario é um objeto.
//A anotação { [campoFormulario: string]: any } significa:
//O objeto pode ter qualquer número de propriedades com nomes do tipo string (como 'nome', 'sobrenome', etc.).
//O valor de cada propriedade pode ser de qualquer tipo (any), ou seja, string, número, boolean, etc.
const formulario = {
    nome: 'Olga',
    sobrenome: 'de Oliveira',
    idade: 22,
};
console.log(formulario);
//Resumo:
// Esse código cria um objeto flexível que representa um formulário com campos de qualquer nome e qualquer tipo de valor, e depois imprime esse objeto no console.
const formuslarios = {
    nomeuser: 'João papão',
    sobrenome: 'silva',
    idade: 30,
};
console.log(formuslarios);
