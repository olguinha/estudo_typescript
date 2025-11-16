"use strict";
// exemplo 1 : TIPO UNKNOWN
let valorvariavel;
valorvariavel = true;
valorvariavel = 123;
valorvariavel = [];
valorvariavel = 'Oi, tudo bem?';
console.log(valorvariavel);
// EXEMPLO 2: ERRO AO TENTAR ATRIBUIR UM VALOR DO TIPO 'UNKNOWN' A OUTROS TIPOS:
// let valor: unknown;
// let valor1: boolean = valor;
// let valor2: any = valor;
// let valor3: any[] = valor;
// let valor4: string = valor;
// EXEMPLO 3: DIFERENÇA ENTRE 'ANY' VS 'UNKNOWN'
let algumacoisa;
let algumascoisas;
console.log(algumacoisa.toFixed(2));
// ele sempre vai te forçar a fazer um if e else, já para não quebrar seu codigo, isso acaba te facilitando na hora de programar...
if (typeof algumascoisas == 'number') {
    console.log(algumascoisas.toFixed(2));
}
