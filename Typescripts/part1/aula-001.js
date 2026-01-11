console.log("Nothing us worth more than laughter.");
// function paintPainting(painter, painting){
//     return painter
//     .prepare()
//     .paint(painting, painter.ownMaterials);
//     finish();
// }
// function finish() {
//     throw new Error("Function not implemented.");
// }
var firstName = "Olga";
var LastName = "Oliveira";
var FullName = "Olga de Oliveira";
console.log('hello', firstName + ' ' + LastName);
var nameLength = firstName.length;
function sayNames(fullName) {
    console.log('hello', "".concat(fullName));
}
var singer = "athea";
var bestSong = Math.random() > 0.5 ? "Oh my goodness" : "I love showers";
// let firstNames = "Maria";  erro mostra que esse objeto string não pode ter o método length como função. pois é tipo string e não number
// firstNames.length();
/*=================================================================================================*/
var string = "wat";
var firstNames = "Maria de Oliveira";
firstNames = "João da Silva Mendes";
// firstNames = true; (Uma variavel que já está atribuída como string não pode ser usada para passar a ser um booleano, ou qualquer outro tipo)
/*=================================================================================================*/
var agename = 26;
agename = 30;
// agename = "thirty"; (Uma variavel que já está atribuída como number não pode ser usada para passar a ser uma string, ou qualquer outro tipo)
/*=================================================================================================*/
var rocker; // aqui vai iniciar como uma variavel do tipo ANY
rocker = 'kurt'; // aqui ela passar ser uma variavel do tipo STRING;
rocker.toLowerCase(); // retorna o valor da string original convertido para minúsculo.
rocker = 27; // aqui ela passar ser uma variavel do tipo NUMBER;
rocker.toPrecision(1);
///rocker. toUpperCase(); // aqui vai dar erro, pois a variavel rocker não é mais do tipo string, e sim number.
/*'=================================================================================================*/
var rockers; // aqui vai iniciar como uma variavel do tipo STRING
rockers = 'João Pedro'; // aqui estou passando uma variavel do tipo STRING
/*=================================================================================================*/
var agenames = "vinte seis";
//let isalive string = 42; // aqui está dando erro, pois a variavel isalive está declarada como string, e estou tentando passar um valor number (42).
/*=================================================================================================*/
var rapper = 'eminem';
rapper.length; // aqui a variavel rapper é do tipo string, e o length retorna o tamanho da string (número de caracteres).
// tipo de operação que tupescript pode ver que não funciona e não será permitidas;
//rapper.push('!'); // aqui está dando erro, pois a variavel rapper é do tipo string, e o método push() não é um método válido para o tipo string.
/*=================================================================================================*/
var cars = {
    nameCar: "Fusca",
    yearCar: 1980
};
//cars.middlenamen = "Brasília"; // aqui está dando erro, pois a variavel cars não tem a propriedade middlename declarada no objeto.
