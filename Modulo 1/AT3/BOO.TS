//EXEMPLO 1

 let tarefaConcluida: boolean = true;

   if (!tarefaConcluida) {
       console.log('Tarefa Pendente!');
  } else {
       console.log('Tarefa Concluída COM SUCESSO!');
}

 // continuação do exemplo 1

let tarefa1: boolean = true;
let tarefa2: boolean = false;


if (tarefa1){
    console.log("tarefa 1 feita.");
} else {
    console.log("tarefa 1 não feita.");
}

if (tarefa2) {
    console.log("tarefa 2 feita.");
} else {
    console.log("tarefa 2 não feita.");
}


//EXEMPLO 2

// isso vai verificar se pessoa é maior de idade.

let idade: number = 20;

let maioridade: boolean = idade >= 18;

if (maioridade) {

    console.log ('É maior de idade.');

} else {
    
    console.log ('É menor de idade.');
}


/// Exemplo 3

// Função para calcular a média e retornar se está aprovado

// 1. Criamos uma função chamada estaAprovado que recebe três notas como números
function passou(n1: number, n2: number, n3: number): boolean {
    // 2. Calcula a média (vai fazer a soma e depois dividir para mostrar a média)
    const media = (n1 + n2 + n3) /3;
     // 3. Retorna true se a média for maior ou igual a 7, senão retorna false
    return media >= 7;
}

// 4. Testamos a função com três notas: 8, 6 e 7
let resultados: boolean = passou(8, 7, 6);

// 5. Usamos o resultado (que é um boolean) para exibir a mensagem
if (resultados){
    console.log("Aprovado! Parabéns vamos para próximo ano!!!"); // Se for true, mostra "Aprovado!"
    } else {
        console.log("Reprovado! faça novamente essa matéria..."); // Se for false, mostra "Reprovado!" 
    }
