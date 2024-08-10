import { Router } from "express";
import { Tabuada } from "../service/serviceTabuada/tabuada.js";
const endpoints = Router();


endpoints.get('/treino/tabuada/:n', (req, resp) => {

    if (isNaN(req.body.itens) ) {
        resp.status(400).send('O parâmetro deve ser número');
        return;
      }


    let numero = req.params.n
    let carimbo = []

    Tabuada(numero,carimbo)

    resp.send({
        Tabuada:
            carimbo

    })
})

export default endpoints;