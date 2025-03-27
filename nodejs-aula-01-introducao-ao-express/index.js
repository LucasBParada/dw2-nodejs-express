//Importando o pacote do Express.js
const express = require ("express")
//Carregando o método principal do Express
const app = express() //Iniciando o Express

//Configurando a view engine - EJS
app.set('view engine', 'ejs')

// Criando a rota principal (RAIZ) do site
// Método .get cria uma rota na aplicação
// REQ => Trata a requisicão
// RES => Trata a resposta
app.get("/", (req, res) => {
    res.send("Bem-vindo ao meu primeiro site em Node.js!<h1><br><p>Iniciando estudos com Node.js</p>")
})

//ROTA DE PERFIL
// :nome => obrigatorio
// :nome? => opcional
app.get("/perfil/:nome?", (req, res) => {
    //Coletando o parâmetro da rota e gravando na variável
    const nome = req.params.nome
    if(nome){
        res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil</h2>`)
    }else{
        res.send(`<h2>Faça login para acessar seu perfil</h2>`)
    }
    // res.send("<h1>Perfil do usuário</h1>")
})
// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
    res.render("produtos")
})



//Iniciando servidor da aplicação na porta 8080
//O método listen do Express inicia um servidor
app.listen(8082, (error) => {
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error)
    } else{
        console.log("Servidor iniciado com sucesso!")
    }

})
