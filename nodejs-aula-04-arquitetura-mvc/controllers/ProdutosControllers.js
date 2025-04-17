import express from "express"
// Carregando o método do Express para gerenciamento de rotas.
const router = express.Router()

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
  
    // Array com lista de produtos
    const produtos = 
    [   {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
        {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos"},
        {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
        {nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"},

    ]
    res.render("produtos", {

      produtos : produtos
    });
  });
  
  // Exportando o módulo
  export default router
