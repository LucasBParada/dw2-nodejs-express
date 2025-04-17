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
    res.render("index")
})

//ROTA DE PERFIL
// :nome => obrigatorio
// :nome? => opcional
app.get("/perfil/:nome?", (req, res) => {
    res.render("perfil") 
})
// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
    //Coletando o parâmetro da rota
    const produto = req.params.produto
    res.render("produtos",{produto : produto})
    //Enviando a variável produto para a página
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
