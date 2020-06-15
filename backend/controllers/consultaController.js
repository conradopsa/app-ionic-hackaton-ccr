"use strict";

const query = require('../utils/query');
const { find } = query;

module.exports = {
    listarTodasConsultas: listarTodasConsultas,
    listarConsultasAbertas: listarConsultasAbertas,
    listarConsultasMarcadas: listarConsultasMarcadas
}

function listarConsultasAbertas(req, res) {
    find(`SELECT * FROM consultas_em_aberto`,
        (err, result) => {
            if (!err)
                res.json(result);
        });
}

function listarTodasConsultas(req, res) {
    find(`SELECT * FROM consulta`,
        (err, result) => {
            if (!err)
                res.json(result);
        });
}

function listarConsultasMarcadas(req, res) {
    find(`SELECT * FROM consultas_marcadas`,
        (err, result) => {
            if (!err)
                res.json(result);
        });
}