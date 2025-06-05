import express from "express"
import AnimatronicsCAD from "./controllers/animatronicsCAD.js"
import connection from "./config/sequelize.js"

const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", AnimatronicsCAD)

app.get("/", function(req, res){
    res.render("index")
})

app.get("/clientes", function(req, res){
    res.render("clientes")
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

connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})


