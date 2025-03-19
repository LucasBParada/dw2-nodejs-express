// Classes no JAVASCRIPT
class Carro {
  //Nome de classes devem iniciar com a primeira letra maiúscula
  //Atributos:
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  //Métodos:
  buzinar() {
    return "Beep! Beep!";
  }
}

//Criando uma instância (objeto) da classe
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Instância carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";

console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

//Adicionando um novo atributo:
carroEsportivo.corNeon = "Azul";

//Adicionando um novo método:
carroEsportivo.turbo = function () {
  return "Vrummm! O carro está acelerando!!!";
};

console.log(
  `O carro ${carroEsportivo.marca} modelo ${
    carroEsportivo.modelo
  } tem neon da cor ${
    carroEsportivo.corNeon
  } e também faz ${carroEsportivo.turbo()}`
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Manipulando datas no JavaScritpt:
const dataAtual = new Date();
console.log(typeof dataAtual);

//Pegando o dia atual:
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dataAtual}`);

//Pegando o mês atual:
const mes = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mes}`);

//Pegando o ano atual:
const ano = dataAtual.getFullYear();
console.log(`No ano de ${ano}`);

//Adicionando dias, mêses e anos à data atual

//Adicionar 10 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 10);

//Exibe a nova data:
console.log(`Daqui a dez dias será ${dataAtual.getDate()}`);

//Adicionar 3 mêses à data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

//Exibe a nova data:
console.log(`Daqui a três meses será mês ${dataAtual.getMonth() + 1}`);

//Adicionar 2 anos à data atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

//Exibe a nova data:
console.log(`Daqui a dois anos será ${dataAtual.getFullYear()}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Trabalhando com moedas no JavaScript:
let salario = 2500.3;
console.log(salario);
//Mostrando todas as casas decimais:
console.log(salario.toFixed(2));
//Ocultando casas decimais:
console.log(salario.toFixed(0));
//Alterando marcador de casa decimal:
console.log(salario.toFixed(2).replace(".", ","));

//Formatação de moedas:
//Mostrando o salário em Real(R$):
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

//Mostrando salário em Dólar:
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);

//Convertendo real para dólar:
const salarioDolar = salario * 0.176;

console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

//Mostrando salário em EURO:
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "EUR" })
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Formatação de String:
const nome = "Lucas Barros";

//Alterando para letras maiúsculas:
console.log(nome.toUpperCase());

//Alterando para letras minúsculas:
console.log(nome.toLowerCase());

//Contando caracteres de uma string:
console.log(nome.length);

//Removendo espaços:
const novoNome = nome.replace(/\s/g, "");
console.log(novoNome);
console.log(novoNome.length);
