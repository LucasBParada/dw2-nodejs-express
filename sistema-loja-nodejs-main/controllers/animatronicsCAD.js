import express from "express";
import Animatronics from "../models/animatronics.js";
const router = express.Router();

router.get("/animatronics", function (req, res) {
  Animatronics.findAll().then((Animatronics) => {
    res.render("animatronics", {
      Animatronics: Animatronics,
    });
  });
});

router.post("/animatronics",(req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const peso = req.body.peso;
  const descricao = req.body.descricao;
  const categoria = req.body.categoria;

  Animatronics.create({
    nome: nome,
    preco: preco,
    peso: peso,
    descricao: descricao,
    categoria: categoria,
  }).then(() => {
    res.redirect("/animatronics");
  });
});

export default router
