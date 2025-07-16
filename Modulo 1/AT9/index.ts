// EXEMPLO 1: NUMERIC ENUMS (ENUMS NUMERICO)

enum Idioma {
    portugues,
    Italiano,
    espanhol,
    frances
}

console.log(Idioma);


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

