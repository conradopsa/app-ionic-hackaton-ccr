"use strict";

const query = require('../utils/query');
const { find } = query;

module.exports = {
    listarDicas: listarDicas
}

function listarDicas(req, res) {
    find(`SELECT * FROM dicas_saude`,
        (err, result) => {
            if (!err)
                res.json(result);
        });
}
