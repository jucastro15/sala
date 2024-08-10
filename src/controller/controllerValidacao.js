import { Router } from "express";
const endpoints = Router();

endpoints.post('/treino/cinema/validacao', (req, resp) => {

    let id1 = req.body.idade1
    let id2 = req.body.idade2
    let c = req.body.classificacao

    let sim = false

    if (id1 >= c && id2 >= c || c == 'livre') {
        sim = true
    }

    resp.send({
        podemAssistir: sim

    })

});


endpoints.get('/treino/combinacaoCores', (req, resp) => {

    if (isNaN(req.query.cor1)|| isNaN(req.query.cor2) ) {
        resp.status(400).send('O parâmetro não podem ser número');
        return;
      }


    let cor1 = req.query.cor1
    let cor2 = req.query.cor2
    let resposta = ""

    if (cor1 == "amarelo" && cor2 == "vermelho" || cor2 == "amarelo" && cor1 == "vermelho") {
        resposta = "laranja"
    }

    else if (cor1 == "azul" && cor2 == "vermelho" || cor2 == "azul" && cor1 == "vermelho") {
        resposta = "roxo"
    }

    else if (cor1 == "amarelo" && cor2 == "azul" || cor2 == "amarelo" && cor1 == "azul") {
        resposta = "verde"
    }

    resp.send({
        corResultante: resposta

    })

});

export default endpoints;