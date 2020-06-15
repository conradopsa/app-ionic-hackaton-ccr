"use strict";

const express = require('express');
const app = express();

const port = 3000;
const router = require('./router');

//importando as rotas
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log(`API rodando na porta ${port}`);

