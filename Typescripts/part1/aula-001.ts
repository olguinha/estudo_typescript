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

const firstName = "Olga";
const LastName = "Oliveira";
const FullName = "Olga de Oliveira";
console.log("hello", firstName + " " + LastName);

const nameLength = firstName.length;

function sayNames(fullName: any) {
  console.log("hello", `${fullName}`);
}
let singer = "athea";

let bestSong = Math.random() > 0.5 ? "Oh my goodness" : "I love showers";

// let firstNames = "Maria";  erro mostra que esse objeto string não pode ter o método length como função. pois é tipo string e não number
// firstNames.length();

/*=================================================================================================*/
let string = "wat";

let firstNames = "Maria de Oliveira";
firstNames = "João da Silva Mendes";

// firstNames = true; (Uma variavel que já está atribuída como string não pode ser usada para passar a ser um booleano, ou qualquer outro tipo)

/*=================================================================================================*/
let agename = 26;
agename = 30;

// agename = "thirty"; (Uma variavel que já está atribuída como number não pode ser usada para passar a ser uma string, ou qualquer outro tipo)

/*=================================================================================================*/

let rocker; // aqui vai iniciar como uma variavel do tipo ANY

rocker = "kurt"; // aqui ela passar ser uma variavel do tipo STRING;
rocker.toLowerCase(); // retorna o valor da string original convertido para minúsculo.

rocker = 27; // aqui ela passar ser uma variavel do tipo NUMBER;
rocker.toPrecision(1);

///rocker. toUpperCase(); // aqui vai dar erro, pois a variavel rocker não é mais do tipo string, e sim number.

/*'=================================================================================================*/

let rockers: string; // aqui vai iniciar como uma variavel do tipo STRING
rockers = "João Pedro"; // aqui estou passando uma variavel do tipo STRING

/*=================================================================================================*/

let agenames: string = "vinte seis";

//let isalive string = 42; // aqui está dando erro, pois a variavel isalive está declarada como string, e estou tentando passar um valor number (42).

/*=================================================================================================*/

let rapper = "eminem";
rapper.length; // aqui a variavel rapper é do tipo string, e o length retorna o tamanho da string (número de caracteres).

// tipo de operação que tupescript pode ver que não funciona e não será permitidas;

//rapper.push('!'); // aqui está dando erro, pois a variavel rapper é do tipo string, e o método push() não é um método válido para o tipo string.

/*=================================================================================================*/

let cars = {
  nameCar: "Fusca",
  yearCar: 1980,
};

//cars.middlenamen = "Brasília"; // aqui está dando erro, pois a variavel cars não tem a propriedade middlename declarada no objeto.

/*=================================================================================================*/

/* Uninões e literais */

let mathematician = Math.random() > 0.12 ? undefined : "Gauss"; // aqui a variavel mathematician pode ser do tipo UNDEFINED ou STRING.

let thiger: string | null = null; // aqui a variavel thiger pode ser do tipo STRING ou NULL.

if (Math.random() > 0.5) {
  thiger = "Shere Khan";
}

/*=================================================================================================*/

let casos = Math.random() > 0.4 ? "Olga de Oliveira" : 84;

casos.toString(); //ok;

// casos.toUpperCase(); // não existe para para tipo number (por isso do erro)

// casos.tofixed(); // não existe para tipo string (por isso do erro)

//restringir o acesso as propriedades que não existem em todos os tipos união é uma medida de segurança

/* ==========================================================================================================*/

let animal: string | boolean | number | Float32Array | Int32Array;

animal = "olga";

animal.toUpperCase(); // ok é uma string

// animal.tofixed();

/*com a variavel luz declarada o typscript já entendi como string, pela forma que foi adicionado */

let Luz: number | string = "Escuridão";

Luz.toUpperCase();

// Luz.tofixed(); // não funciona para string e number;

let bichos = Math.random() > 0.5 ? "cachorro" : 34;

let peixes = Math.random() > 0.5 ? "manjubinha" : 34;

if (typeof bichos === "string") {
  bichos.toUpperCase();
}

if (!(typeof peixes === "string")) {
  peixes.toFixed();
} else {
  peixes.toUpperCase();
}

// instrução ternaria também funciona

typeof bichos === "string" ? bichos.toUpperCase() : bichos.toFixed();

/* ================================================================*/

let nomes: "Olga";

nomes = "Olga";

//nomes = "maria";

let sometring = ": (";

//nomes = sometring;

/*========================================== */

let car = Math.random() > 0.5 ? "tony Hoare" : undefined;

car?.toLowerCase();

let generico = Math.random() > 0.5 ? "Olga de Oliveita" : undefined;

if (generico){
    generico.toUpperCase();
}

generico?.toUpperCase();


/*================================================ */

let food = Math.random() > 0.5 ? "Olga de Oliveita" : undefined;

 if (food) {
    food; // string
 } else{
    food; // e aqui ele é false | string
 }


 let branco : string;

 //branco?.length; Se colocar antes do valor atribuido pode não dar certo, causando erros; proprio tyoe mostra o erro

 branco= "Maria de Oliviera"
 branco?.length;


 let brancos : string | undefined;

 branco?.length; // mesmo codigo, mas se coloca na tipação das variaveis 
 //é possivel ver que se adcionamos o undefined no com união de string o erro some,
 //  isso acontece quando, o typescript indica que não precisa ser definida, 
 // pois ela do tipo undefined é já está validando seu tipo.

 brancos= "Maria de Oliviera"
 brancos?.length;

 