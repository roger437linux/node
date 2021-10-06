const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello, World');
})

app.get('/oi', function (req, res) {
    res.send('Olá, mundo');
}) 

// Lista de heróis
const lista = ['Home de Ferro', 'Thor', 'Hulk', 'Mulher Maravilha', 'Homem Aranha']

// Endpoint de Read All
app.get('/herois', function (req, res) {
    res.send(lista);
})

app.listen(3000);
