"use strict";

const query = require('../utils/query');
const { executeQuery, executeFindOne, find } = query;

module.exports = {
    listarUsuarios: listarUsuarios
}

function listarUsuarios(req, res) {
    let q = req.query;

    let whereAnd = Object.entries(q)
        .map(entry => `${entry[0]}='${entry[1]}'`).join(' and ');

    let where = whereAnd ? `WHERE ${whereAnd}` : '';
    //executeQuery(`SELECT * FROM usuario ${where}`, res);

    find(`SELECT * FROM usuario ${where}`,
        (err, result) => {
            if (!err)
                res.json(result);
        });
}