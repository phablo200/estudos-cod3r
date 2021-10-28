const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

// Teste
server.get('/', (req, res, next) => res.send('Backend'));

server.listen(3000, () => {
    console.log('Backend executando na porta 3000');
})