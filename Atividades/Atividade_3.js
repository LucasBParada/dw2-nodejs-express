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
  `O ${homemAranha.nome } que possui ${homemAranha.vida} de vida, ${homemAranha.velocidade} de velocidade e ${homemAranha.forca} de força, que pode soltar teias ${homemAranha.teia}, está enfrentando um inimigo e ele ${homemAranha.sentidoAranha()} próximo.`
);

console.log(
    `O ${superMan.nome} que possui ${superMan.vida} de vida, ${superMan.velocidade} de velocidade e ${superMan.forca} de força, que pode voar ${superMan.voar}, está enfrentando um inimigo e ele ${superMan.visaoCalor()}.`
);

console.log(
    `O ${batman.nome} que possui ${batman.vida} de vida, ${batman.velocidade} de velocidade e ${batman.forca} de força, que pode se esconder ${batman.esconder}, achou o inimigo pois estava ${batman.investigar()}.`
  );


//Atividade 2:
const data = new Date;

let dataAlterada = () => {
  data.setDate(data.getDate() + 3)
  data.setMonth(data.getMonth() + 2)
  data.setFullYear(data.getFullYear() + 1)
}

dataAlterada()

const diaAlterado = data.getDate()
const mesAlterado = data.getMonth() + 1
const anoAlterado = data.getFullYear()


console.log(`${diaAlterado}/${mesAlterado}/${anoAlterado}`)


//Atividade 3:
let salario = 1500

const salarioConvertido = () => {
  const salarioDolar = salario * 0.176
  const salarioEuro = salario * 0.16

  return {salarioDolar, salarioEuro}

}


const{salarioDolar, salarioEuro} = salarioConvertido()


console.log(salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" }));
console.log(salarioEuro.toLocaleString("en", { style: "currency", currency: "EUR" }));


//Atividade 4:
