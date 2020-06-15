const { findOne } = require('../utils/query');
const hash = require('../utils/hash');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
    autenticar: autenticar
}

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

function autenticar(req, res) {
    let { email, senha, cpf } = req.body;

    //console.log(req)

    findOne(`select *
    from cliente 
    where email='${email}'`, cliente => {

        if (!cliente)
            return res.status(400).send({ error: "Email não encontrado!" });

        if (hash(senha) !== cliente.senha)
            return res.status(400).send({ error: "Senha inválida!" });

        cliente.senha = undefined;

        res.send({
            cliente,
            token: generateToken({ cpf })
        });
    });

}