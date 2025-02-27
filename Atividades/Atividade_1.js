//Atividade 1:
function dadosPessoais() {
  console.log("Nome Lucas");
  console.log("Idade 18");
  console.log("Cidade Registro");
}
dadosPessoais();

//Atividade 2:
function operadores(n1, n2) {
  let resposta = n1 / n2;
  console.log(`A resposta da divisão eh ${resposta}`);
}
let n1 = 2;
let n2 = 2;
operadores(n1, n2);

//Atividade 3:
function Retorno(n1, n2, n3) {
  return n1 * n2 * n3;
}
console.log(`A multiplicação eh ${Retorno(2, 2, 2)}`);

//Atividade 4:
function Condicao(n) {
  if (n > 18) {
    console.log("Maior idade");
  } else {
    console.log("Menor idade");
  }
}
Condicao(10);

//Atividade 5:
let Notas = function (Media, num1, num2) {
  media = (num1 * num2) / 2;
  if (media <= 5) {
    console.log("Reprovado");
  } else {
    console.log("Aprovado");
  }
};
Notas(10, 10);

//Atividade 6:
const Triplo = (y) => {
  return y * 3;
};
console.log(`O triplo do numero eh ${Triplo(2)}`);

//Atividade 7:
const somatoria =(N1, N2, N3, N4) =>{
  return N1 + N2 + N3 + N4
}
console.log(`A soma de todos os numeros eh ${somatoria(4,4,4,4)}`)

//Atividade 8:
const inicio = (function(ola){
  console.log(`Ola seja bem-vindo ${ola}`)
})("ao software")