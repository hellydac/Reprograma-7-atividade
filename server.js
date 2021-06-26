//## [GET] "/estados/todos"

//Retorna lista completa de estados-cidades

//### [GET] "/estados/{sigla}"

//Retorna nome, sigla e cidades de uma sigla especifica

//O exercício para casa devera ser feito dentro da pasta servidor-para-casa. 
//Lá você devera criar um novo servidor e configurar sua porta e criar essas duas rotas. 

const express = require('express')
const app = express()
const estadosCidades = require("./data/estados-cidades.json")

app.get("/", (request, response) => {
    response.status(200).send({mensagem: "Olá!"})
}) 

app.get("/estados/:todos", (request, response) =>  {
    response.status(200).send(estadosCidades)
})

app.get("/estados/:todos/:siglas", (request, response) => {
    const siglaRequisitada = request.params.siglas
    console.log(siglaRequisitada)

    response.status(200).send(estadosCidades.find(siglas => siglas.sigla == siglaRequisitada))
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})