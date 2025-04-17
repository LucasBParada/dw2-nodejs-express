import express from "express"

import Controller from "./controllers/Controller.js"

const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))

app.use("/", Controller)

app.get("/", function(req, res){
    res.render("index")
})

app.get("/clientes", function(req, res){
    res.render("clientes")
})

app.get("/produtos", function(req, res){
    res.render("produtos")
})

app.get("/pedidos", function(req, res){
    res.render("pedidos")
})

app.get("/avisos", function(req, res){
    res.render("avisos")
})

app.listen(8080, function(error){
    if(error){
        console.log("Erro ao iniciar!" + error)
    }else{
        console.log("Servidor iniciado com sucesso!")
    }

}) 
