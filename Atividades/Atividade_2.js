//Atividade 1:
let estadosBrasil = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

console.log(`Os estados do Brasil são:`);

estadosBrasil.forEach((estadosBrasil, i) => {
  console.log(`${i + 1} - ${estadosBrasil}`);
});

//Atividade 2:
let minhaPessoa = {
  nome: "Lucas Parada",
  idade: 19,
  cidade: "Registro",
  hobby: "Jogar Video Games!",
  musicaFavorita: "In the End Linkin Park",
};

console.log(`Meu nome é ${minhaPessoa.nome}`);
console.log(`Tenho meus ${minhaPessoa.idade} anos`);
console.log(`Adoro ${minhaPessoa.hobby}`);
console.log(`E minha música favorita é ${minhaPessoa.musicaFavorita}`);

//Atividade 3:
let filmesAssistidos = [
  {
    titulo: "Sonic 3 - O Filme",
    genero: "Ação/Comédia",
    ano: 2024,
    classificacao: "10 anos de idade",
  },

  {
    titulo: "As Mil Palavras",
    genero: "Comédia/Drama",
    ano: 2012,
    classificacao: "12 anos de idade",
  },

  {
    titulo: "Jogos Mortais",
    genero: "Terror/Crime",
    ano: 2004,
    classificacao: "18 anos de idade",
  },

  {
    titulo: "Homem de Ferro",
    genero: "Ação/Ficção científica",
    ano: 2008,
    classificacao: "12 anos de idade",
  },

  {
    titulo: "Coraline e o Mundo Secreto",
    genero: "Infanil/Terror",
    ano: 2009,
    classificacao: "10 anos de idade",
  },
];

console.log("Meus filmes assistidos são:");
filmesAssistidos.forEach((filmesAssistidos) => {
  console.log(`${filmesAssistidos.titulo}`);
  console.log(`${filmesAssistidos.genero}`);
  console.log(`${filmesAssistidos.ano}`);
  console.log(`${filmesAssistidos.classificacao}`);
});
