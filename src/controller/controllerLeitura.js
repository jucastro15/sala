import { Router } from "express";
import { Hora } from "../service/serviceLeitura/tempoPorPagina.js";
const endpoints = Router();


endpoints.post('/treino/leituraLivro', (req, resp) => {
    let nome = req.body.livro
    let pagina = req.body.pagina
    let tempo = req.body.tempo

    let tpp = Hora(pagina, tempo)

    resp.send({
        entrada: {
            nome: nome,
            pagina: pagina,
            tempo: tempo
        },
        tempoPorPagina: Number(tpp.toFixed(2))
    })

});
export default endpoints;