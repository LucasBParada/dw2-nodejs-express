// Arrays (Vetor ou Lista)

let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Celular", "Tablet", "Notebook"];
console.log(Produtos);

console.log("Exibindo a lista pelos índices...");
console.log(`1- ${Produtos[0]}`);
console.log(`2- ${Produtos[1]}`);
console.log(Produtos[2]);
console.log(Produtos[3]);

console.log("Exibindo a lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo a lista através do forEach...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo a lista através do forEach com os índices...");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

//Métodos de Manipulação de Vetores
let vetor = ["Laranja", "Maça", "Banana"];
console.log(`Nosso vetor é o: ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor agora é o: ${vetor}`);

//Método PUSH - Insere um novo elemento no final do VETOR
vetor.push("Abacaxi");
console.log(`Nosso vetor agora eh: ${vetor}`);

//Método UNSHIFT - Insere novo elemento no início do VETOR
vetor.unshift("Pera");
console.log(`Nosso vetor no momento eh: ${vetor}`);

//Método LENGHT - Retorna o número de elementos no vetor
let number = [6, 8, 2, 9, 3, 800, 200];
console.log(`Nossa lista de números é: ${number}`);
console.log(`O número de elementos neste vetor é: ${number.length}`);

//Método SORT - Ordenar o vetor
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}`);
vetor.sort();
console.log(`Agora o primeiro elemento da lista de frutas é: ${vetor.sort()}`);

//Ordenação de números com SORT
console.log(`Nossa lista de números é: ${number}`);
number.sort();
console.log(`Agora nossa lista de números ordenados é: ${number}`);

//Ordenando de forma CRESCENTE
console.log(number.sort((a, b) => a - b));

//Ordenando de forma DECRESCENTE
console.log(number.sort((a, b) => b - a));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Objetos literais (Não são derivados de classes)
//Objetos possuem Atributos(Características) e Métodos(Ações)
//Lado esquerdo: chaves / Lado direito: valores
const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "Vermelho",
  //Métodos
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando...");
  },
};

console.log(`O modelo do carro é: ${carro.modelo}`);
console.log(`A cor do carro é: ${carro.cor}`);
carro.acelerar();
carro.frear();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho",
};
console.log(produto);
console.log(
  `O ${produto.nome} da marca ${produto.marca} custa apenas ${produto.preco} ${produto.descricao}`
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array de objetos
const listaProdutos = [
  {
    nome: "computador",
    marca: "lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "celular",
    marca: "Apple",
    preco: 1200,
    descricao: "Ultra resistente. Muito barato!",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Otímo desempenho e boa qualidade"
  },
];

// Exibindo o ARRAY de OBJETOS com forEach
listaProdutos.forEach((produto) => {
  console.log(`Produto: ${produto.nome}`);
  console.log(`Marca: ${produto.marca}`);
  console.log(`Preco: ${produto.preco}`);
  console.log(`Descricao: ${produto.descricao}`);
  console.log();
});

//console.table
console.table(listaProdutos)