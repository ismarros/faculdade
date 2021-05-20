var express = require('express');
var http = require('http');
var app = express();
const fs = require('fs');
const restify = require('restify');
const errors = require('restify-errors');
var path = require('path');
const bodyParser = require('body-parser');


const server = restify.createServer({
    name: 'pokelista',
    version: '1.0.0'
});


app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body




server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(8001, function(){
    console.log('%s executando em %s', server.name, server.url);
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_faculdade'
    }
})

server.get('/', (req, res, next) => {
    fs.readFile('tela_inicial.html', function(erro, dados){
        if(!erro){
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(dados);
            res.end();
        }
        else{
            console.log(erro);
        }
    
    });

});

server.get('/inserir_pokemon', (req, res, next) => {
    fs.readFile('inserir.html', function(erro, dados){
        if(!erro){
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(dados);
            res.end();
            console.log(dados);
        }
        else{
            console.log(erro);
        }
    
    });
});

server.post('/pokemons', (req, res, next) => {
    console.log(req.body.nomepokemon);
    console.log(req.body.codtipo);
    knex('pokemon')
    .insert(req.body)
    .then((dados) =>{
        res.send(dados);
    },next);
});

server.get('/pokemons', (req, res, next) => {
    knex('pokemon').then((dados) =>{
        res.send(dados);
    },next);
});

server.get('/tipos', (req, res, next) => {
    knex('tipo').then((dados) =>{
        res.send(dados);
    },next);
});


