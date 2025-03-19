//Atividade 1:
class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "heroi correndo";
  }

  andar() {
    return "heroi andando";
  }

  atacar() {
    return "heroi atacando";
  }

  defender() {
    return "heroi defendendo";
  }
}

const homemAranha = new Heroi();
homemAranha.nome = "Peter Parker";
homemAranha.vida = 85;
homemAranha.velocidade = 80;
homemAranha.forca = 75;
homemAranha.teia = 1;
homemAranha.sentidoAranha = function () {
  return "detectou perigo";
};

const superMan = new Heroi();
superMan.nome = "Clark Kent";
superMan.vida = 100;
superMan.velocidade = 100;
superMan.forca = 100;
superMan.voar = 1;
superMan.visaoCalor = function () {
  return "usou visão calor";
};

const batman = new Heroi();
batman.nome = "Bruce Wayne";
batman.vida = 85;
batman.velocidade = 70;
batman.forca = 60;
batman.esconder = 1;
batman.investigar = function () {
  return "investigando um crime";
};

console.log(
  `O homem aranha está enfrentando um inimigo e ele ${homemAranha.sentidoAranha()} próximo.`
);
console.log(
  `O super man está enfrentando um inimigo e ele ${superMan.visaoCalor()}.`
);
console.log(`O batman achou o inimigo porque estava ${batman.investigar()}.`);
