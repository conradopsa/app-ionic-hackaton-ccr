"use strict";

const query = require('../utils/query');
const { find } = query;

module.exports = {
    listarQuestionario: listarQuestionario
}

class No {
    constructor(pergunta, sim, nao) {
        this.pergunta = pergunta;
        this.resposta = { sim: sim, nao: nao }
    }
}

function getById(arrayObjeto, id) {
    return arrayObjeto.filter(o => o.id == id)[0];
}

function fluxogramaParaObjeto(perguntas, diagnosticos) {

    /*
    com [] = saidas
    sem [] = perguntas

    Fluxograma:
          1
    sim /    \ não
      [1]      2
         sim /    \ não
           3       [1]
    sim /     \ não
       4      [x]
 sim /   \ não
   [3]    5
      sim | não
          6
     sim /  \ não
     [2]     [x]
 
    */

    //OBSERVAÇÃO: Talvez seja possível automatizar a geração de fluxogramas

    //Definindo a arvore
    let s1 = getById(diagnosticos, 1),
        s2 = getById(diagnosticos, 2),
        s3 = getById(diagnosticos, 3),
        sX = getById(diagnosticos, 9999);

    let p6 = new No(getById(perguntas, 6), s2, sX),
        p5 = new No(getById(perguntas, 5), p6, p6),
        p4 = new No(getById(perguntas, 4), s3, p5),
        p3 = new No(getById(perguntas, 3), p4, sX),
        p2 = new No(getById(perguntas, 2), p3, s1),
        p1 = new No(getById(perguntas, 1), s1, p2); //Raíz

    return p1
}

function listarQuestionario(req, res) {

    find(`SELECT * FROM pergunta`,
        (err, perguntas) => {
            if (!err) {
                find(`SELECT * FROM possivel_diagnostico`,
                    (err, diagnosticos) => {
                        res.json(fluxogramaParaObjeto(perguntas, diagnosticos));
                    })
            }
        });
}
