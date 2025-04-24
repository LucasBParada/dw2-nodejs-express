import express from "express";
const router = express.Router();

//Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {

  //Fazendo o select na tabela de Clientes
  //findAll() - Retorna uma promisse
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes:clientes,
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

//Rota cadastro de cliente
router.post("/clientes/new",(req,res) => {
const nome = req.body.nome
const cpf = req.body.cpf
const endereco = req.body.endereco

//Enviando dados para o banco
Cliente.create({
  nome : nome,
  cpf : cpf,
  endereco : endereco,
}).then(()=> {
  console.log(`${nome} ${endereco} ${cpf}`)
  res.redirect("/clientes")
}).catch(error => {
  console.log(error)
  })
})

//Rota exclusão de clientes:
router.get("/clientes/delete/:id", (req,res) => {
  //Coletando parâmetro id na rota.
  const id = req.params.id
  Cliente.destroy({
    where:{
      id : id
    }
  }).then(() => {
    console.log(`Cliente com o ID: ${id} excluido com sucesso`)
    res.redirect("/clientes")
  }).catch(error => {
    console.log(error)
  })
})

export default router;