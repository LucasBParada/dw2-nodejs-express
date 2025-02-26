//comentário JS
/* comentátio
em 
bloco */

//CTRL + ;

//Declaração de variáveis no JS
//CONST x LET x VAR
//Evitar uso de VAR
//No escopo globar cont não pode ser alterada

const nome = "Lucas"; //Precisa de um valor inicial
let Nome; //Permite iniciar a variável sem valor
var cor = "Azul";
let cidade = "Registro";
cidade = "Jacupiranga";

//Let pode alterar o valor

const message = "Hello, world! Iniciando estudos com JavaScript";
console.log(message);

// Typeof (Esse comando exibirá o tipo da variável)

const estado = "SP";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
// O JavaScript é uma lingugem de tipagem dinâmica e tipagem fraca.

////////////////////////////////////////////////////////////////////////////////////////////////

//Tipos de funções no JavaScript
function minhaFuncao() {}
console.log(typeof minhaFuncao);

//Função simples
function saudacao() {
  console.log("Olá bem vindo");
}
saudacao();

//Função com parâmetro e argumento
// Parâmetro => Função recebe
//Argumento => Dado enviado para a função
function Saudacao(nome) {
  //Parâmetro
  console.log("Olá, bem vindo " + nome); //Concatenando
  //Usando template strings
  console.log(`Olá, bem vindo ${nome} como está`);
  //${} => Placeholder
}

Saudacao("Lucas"); //Argumento

//Função com mais de um parâmetro
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros foi ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

//Função com retorno
function Soma(n1, n2) {
  return n1 + n2;
}

console.log(`Soma dos dois numeros foi ${Soma(2, 6)}`);

//Função com mais de um retorno
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let num = 6;
console.log(parImpar(num));
console.log(`O numero é ${parImpar(num)}`);

//Função anônima
let dobro = function (x) {
  return x * 2;
};

console.log(`O resultado eh ${dobro(15)} `);

//Arrow Function com parâmetro único
//Função flecha
const Dobro = (x) => {
    return x*2
}
console.log(`Função dobro com arrow eh ${Dobro(20)}`)

//Arrow function com mais de um parâmetro
const calc = (num1, operador, num2) => {
    return eval (`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação eh ${calc (6, '*',6)}`)


//Simplificando Arrow Function
const Calc = (num1, operador, num2) => eval (`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação eh ${Calc(7, "*", 7)}`)

//IIFE - Immediately Invoked Function Expression
//Função Imediata

const iife = (function() {
    console.log("Estou sendo executada imediatamente")
})()

//IIFE com Parâmetro
const start = (function(app){
    console.log(`Executando imediatamente o app ${app}`)
})("Whatsapp")