// EXEMPLO 1: NUMERIC ENUMS (ENUMS NUMERICO)

enum Idioma {
    portugues,
    Italiano,
    espanhol,
    frances
}

console.log(Idioma);

// isso é um enum por numero, sempre medi a quantidade que esta dentros dos valores;
enum comidafav{
    lasanha,
    bolo,
    coxinha,
    pamonha,
    brigadeiro
}

console.log(comidafav);


enum series{
    dexter,
    greys,
    suts,
    brighton
}

console.log(series);

//EXEMPLO 2: STRING ENUMS  

enum dia {

    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

 console.log(dia);

// Já esse é um enum por string, entao é uma string por enum
 enum estados{
    MS = 'MATO GROSSO DO SUL',
    SP = 'SÃO PAULO',
    MG = 'MINAS GERAIS',
    RJ = 'RIO DE JANEIRO',

 }
 console.log(estados);


// EXEMPLO 3: COMO PODEMOS ACESSAR UM VALOR DE UM ENUM COM UMA CHAVE: (USANDO O CONST)

//    const  enum Comida {
//       Hamburger,
//       Massa, 
//       Pizza, 
//       Torta,
//       Churrasco,
//    }

//    function comida(c: Comida){
//       return 'Amo essa comidas';
//    }

//    console.log(comida(Comida.Pizza));
//    console.log(comida(Comida.Churrasco));
//    console.log(comida(2));


    const  enum Comida {
      Hamburger,
      Massa, 
      Pizza, 
      Torta,
      Churrasco,
   }

    function comida(c: Comida){
      return 'Amo essa comidas';
   }

   console.log(comida(Comida.Pizza));
   console.log(comida(Comida.Churrasco));
  //console.log(comida(2));

   const enum serie{
    dexter,
    greys,
    suts,
    brighton
}

function SERIES (s: series){
    return 'Adoro muito essas series da Nexflix';
}

console.log(series.dexter);
console.log(series.brighton);


// EXEMPLO 4: QUANDO USAR ENUM?


enum Tarefas {
    Todo,
    Progress,
    CodeReviens,
    Done
    
}

const concluidatarefa = {
    id: 1,
    status: Tarefas.Done,
    descricao:'Parabéns voce concluiu a sua tarefas',
};

if (concluidatarefa.status == Tarefas.Done) {
    console.log('Enviar E-mail: tarefa concluida!!');
} else {
    console. log('tarefa não concluida com sucesso!');
}

//O código verifica se a comida feita é uma coxinha usando uma enumeração, e imprime uma mensagem com base nisso.

enum comidafavs{
    lasanha,
    bolo,
    coxinha,
    pamonha,
    brigadeiro
}


const comidafeita ={
    id: 2,
    status: comidafavs.coxinha,
    descricao: 'A comida estava uma delicia !!! ',

};

if (comidafeita.status == comidafavs.coxinha){
    console.log('muito boa essa coxinha');
} else{
    console.log('não estava bem feita infelizmente');
}
