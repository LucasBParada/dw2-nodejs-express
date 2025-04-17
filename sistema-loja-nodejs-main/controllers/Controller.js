import express from "express"
const router = express.Router()

router.get("/produtos", function(req, res){
    const produtos = [
        
        {imagem: "freddy.jpeg", nome: "Freddy Fazbear", preco: 180000, categoria: "Animatronics", peso: "190kg", descricao:"Freddy sendo o segundo líder da turma e principal voz da banda."},
        {imagem: "bonnie.jpeg", nome: "Bonnie the Rabbit", preco: 175000, categoria: "Animatronics", peso: "180kg", descricao: "Bonnie sendo o guitarrista da turma, coelho arrogante e otimista."},
        {imagem: "chica.jpg", nome: "Chica the Duck", preco: 165000, categoria: "Animatronics", peso: "175kg", descricao:"Chica adorando comer pizza e sendo a segunda voz do grupo."},
        {imagem: "foxy.jpg", nome: "Foxy the Fox", preco: 145000, categoria: "Animatronics", peso: "150kg", descricao: "Foxy o pirata, arrogante e realizando um show a parte da turma para as crianças."},
        {imagem: "goldenf.jpg", nome: "Golden Freddy", preco: 500000, categoria: "Animatronics/Fantasia", peso: "200kg", descricao: "Com certeza o melhor amigo das crianças, além de ser o líder principal da turma e rosto de nossa marca."},
    ]
    
    res.render('produtos',{
        produtos:produtos
    })
})

router.get("/clientes", function(req, res){
    const clientes = [
        
        {nome: "William Afton", cpf: "123.456.789-00", endereco: "Rua das Violetas, 666 – Bairro Escondido, Hurricane Hills – SC, CEP 88222-999"},
        {nome: "Mike Schmidt", cpf:"987.654.321-00", endereco: "Av. Noite Eterna, 1987 – Prédio Freddy Fazbear, Sala 5B – São Vicente, SP, CEP 11320-000"},
        {nome: "Jeremy Fitzgerald", cpf:"111.222.333-44", endereco: "Rua dos Segredos, 404 – Bairro Animatronic, Fazbear City – MG, CEP 30100-404"},
        {nome: "Henry Emily", cpf:"555.444.333-22", endereco: " Av. do Criador, 78 – Bairro Industrial, Fazbear Town – MG, CEP 23145-678"},
        {nome: "Randy", cpf:" 222.333.444-55", endereco: "Rua do Chamada, 112 – Bairro Central, Fazbear City – PR, CEP 98765-432"},
    ]
    
    res.render('clientes',{
        clientes:clientes
    })
})

router.get("/pedidos", function(req, res){
    const pedidos = [
        
        {numero: "#1001", valor: 180000, itens: "- Freddy Fazbear"},
        {numero: "#1002", valor: 175000, itens: "- Bonnie the Rabbit"},
        {numero: "#1003", valor: 165000, itens: "- Chica the Duck"},
        {numero: "#1004", valor: 145000, itens: "- Foxy the Fox"},
        {numero: "#1005", valor: 500000, itens: "- Golden Freddy"},
    ]
    
    res.render('pedidos',{
        pedidos:pedidos
    })
})


























export default router