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
function comida(c) {
    return 'Amo essa comidas';
}
console.log(comida(2 /* Comida.Pizza */));
console.log(comida(4 /* Comida.Churrasco */));
//console.log(comida(2));
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
