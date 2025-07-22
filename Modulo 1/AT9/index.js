"use strict";
// EXEMPLO 1: NUMERIC ENUMS (ENUMS NUMERICO)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["portugues"] = 0] = "portugues";
    Idioma[Idioma["Italiano"] = 1] = "Italiano";
    Idioma[Idioma["espanhol"] = 2] = "espanhol";
    Idioma[Idioma["frances"] = 3] = "frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// isso é um enum por numero, sempre medi a quantidade que esta dentros dos valores;
var comidafav;
(function (comidafav) {
    comidafav[comidafav["lasanha"] = 0] = "lasanha";
    comidafav[comidafav["bolo"] = 1] = "bolo";
    comidafav[comidafav["coxinha"] = 2] = "coxinha";
    comidafav[comidafav["pamonha"] = 3] = "pamonha";
    comidafav[comidafav["brigadeiro"] = 4] = "brigadeiro";
})(comidafav || (comidafav = {}));
console.log(comidafav);
var series;
(function (series) {
    series[series["dexter"] = 0] = "dexter";
    series[series["greys"] = 1] = "greys";
    series[series["suts"] = 2] = "suts";
    series[series["brighton"] = 3] = "brighton";
})(series || (series = {}));
console.log(series);
//EXEMPLO 2: STRING ENUMS  
var dia;
(function (dia) {
    dia["Segunda"] = "SEG";
    dia["Terca"] = "TER";
    dia["Quarta"] = "QUA";
    dia["Quinta"] = "QUI";
    dia["Sexta"] = "SEX";
    dia["Sabado"] = "SAB";
    dia["Domingo"] = "DOM";
})(dia || (dia = {}));
console.log(dia);
// Já esse é um enum por string, entao é uma string por enum
var estados;
(function (estados) {
    estados["MS"] = "MATO GROSSO DO SUL";
    estados["SP"] = "S\u00C3O PAULO";
    estados["MG"] = "MINAS GERAIS";
    estados["RJ"] = "RIO DE JANEIRO";
})(estados || (estados = {}));
console.log(estados);
function comida(c) {
    return 'Amo essa comidas';
}
console.log(comida(2 /* Comida.Pizza */));
console.log(comida(4 /* Comida.Churrasco */));
function SERIES(s) {
    return 'Adoro muito essas series da Nexflix';
}
console.log(series.dexter);
console.log(series.brighton);
// EXEMPLO 4: QUANDO USAR ENUM?
var Tarefas;
(function (Tarefas) {
    Tarefas[Tarefas["Todo"] = 0] = "Todo";
    Tarefas[Tarefas["Progress"] = 1] = "Progress";
    Tarefas[Tarefas["CodeReviens"] = 2] = "CodeReviens";
    Tarefas[Tarefas["Done"] = 3] = "Done";
})(Tarefas || (Tarefas = {}));
const concluidatarefa = {
    id: 1,
    status: Tarefas.Done,
    descricao: 'Parabéns voce concluiu a sua tarefas',
};
if (concluidatarefa.status == Tarefas.Done) {
    console.log('Enviar E-mail: tarefa concluida!!');
}
else {
    console.log('tarefa não concluida com sucesso!');
}
//O código verifica se a comida feita é uma coxinha usando uma enumeração, e imprime uma mensagem com base nisso.
var comidafavs;
(function (comidafavs) {
    comidafavs[comidafavs["lasanha"] = 0] = "lasanha";
    comidafavs[comidafavs["bolo"] = 1] = "bolo";
    comidafavs[comidafavs["coxinha"] = 2] = "coxinha";
    comidafavs[comidafavs["pamonha"] = 3] = "pamonha";
    comidafavs[comidafavs["brigadeiro"] = 4] = "brigadeiro";
})(comidafavs || (comidafavs = {}));
const comidafeita = {
    id: 2,
    status: comidafavs.coxinha,
    descricao: 'A comida estava uma delicia !!! ',
};
if (comidafeita.status == comidafavs.coxinha) {
    console.log('muito boa essa coxinha');
}
else {
    console.log('não estava bem feita infelizmente');
}
