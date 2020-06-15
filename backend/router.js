"use strict";

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const usuarioController = require('./controllers/usuarioController');
const dicasSaudeController = require('./controllers/dicasSaudeController');
const consultaController = require('./controllers/consultaController');
const perguntasController = require('./controllers/perguntasController');

//Liberando acesso CORS para qualquer front-end
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');

    if (req.method === 'OPTIONS')
        return res.sendStatus(200);
    else
        return next();
});

//Configurando o body parser para pegar POSTS mais tarde
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));


router.get('/usuarios', usuarioController.listarUsuarios);
//router.post('/usuarios', clienteController.inserirCliente);

router.get('/dicas_saude', dicasSaudeController.listarDicas);

router.get('/consultas', consultaController.listarTodasConsultas);
router.get('/consultas/abertas', consultaController.listarConsultasAbertas);
router.get('/consultas/marcadas', consultaController.listarConsultasMarcadas);

router.get('/questionario', perguntasController.listarQuestionario);


module.exports = router;