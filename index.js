// Este arquivo (JavaScript) permite gerenciar as páginas a serem navegadas pelo usuário
const express = require("express");

const app = express();

app.get("/index", function(req, res){
    res.send("Gerenciador de Paginas!")
});

app.get("/sobre", function(req, res){
    res.send("Gerenciador de Sobre o Autor!")
});

app.get("/portfolio", function(req, res){
    res.send("Gerenciador de Portfolio!")
});

app.listen(8081)