Atividade 1 

let a = true
let b = false 
let c = true

console.log(a&&b)
console.log(b&&c)
console.log(a&&c)
console.log(a&&b&&c)

console.log(a||b)
console.log(b||c)
console.log(a||c)
console.log(a||b||c)

let nome;
let idade;

// Perguntar ao usuário seu nome
nome = prompt("Qual é o seu nome?");

// Perguntar ao usuário sua idade e converter para número
idade = prompt("Qual é a sua idade?");

// Imprimir a mensagem na tela
console.log("Olá " + nome + ", você tem " + idade + " anos.");

Atividade 2 

// Fazendo as perguntas
let pergunta1 = prompt("Você está usando uma roupa azul hoje? (sim ou não)");
let pergunta2 = prompt("Você gosta de comer pizza? (sim ou não)");
let pergunta3 = prompt("Você já visitou outro país? (sim ou não)");

// Criando novas variáveis contendo as respostas
let resposta1 = "Sim";
let resposta2 = "Não";
let resposta3 = "Não";

// Imprimindo na tela todas as perguntas seguidas por suas respectivas respostas
console.log("Você está usando uma roupa azul hoje? " + resposta1);
console.log("Você gosta de comer pizza? " + resposta2);
console.log("Você já visitou outro país? " + resposta3);


Atividade 3 

let a = 10;
let b = 25;

// Exibindo os valores iniciais
console.log("Valores iniciais:");
console.log("a:", a);
console.log("b:", b);

// Trocando os valores das variáveis a e b
a = a + b;
b = a - b; 
a = a - b; 

// Exibindo os valores após a troca
console.log("Valores após a troca:");
console.log("a:", a);
console.log("b:", b);

