// Importando o pacote do Express.js

// Modo ES6 de importação:
import express from "express"

//const express = require("express");
// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// Importando os Controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosControllers.js"

// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");

//Configurando a pasta "PUBLIC" para arquivos estáticos
app.use(express.static('public'))

// Configurando o Express para utilizar as rotas dos Controllers
app.use("/",ProdutosController)

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

  // Iniciando o servidor da aplicação na porta 8080
  // O método listen do Express inicia um servidor
  app.listen(8080, (error) => {
    if (error) {
      console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else {
      console.log("Servidor iniciado com sucesso!");
    }
  });



