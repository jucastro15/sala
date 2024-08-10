import { Router } from "express";
const endpoints = Router();
import { Media } from "../service/serviceAnalise/notas.js";

endpoints.post('/treino/ordenacao', (req, resp) => {

    if (isNaN(req.body.itens) ) {
        resp.status(400).send('O parâmetro deve ser número');
        return;
      }


    let itens = req.body.itens
    let ordem = ""

    for (let i = 0; i < itens.length - 1; i++) {


        if (itens[0] > itens[i]) {
            ordem = "decrescente"
        }
        else if (itens[itens.length - 1] > itens[i]) {
            ordem = "crescente"
        }
        else {
            ordem = "desordenado"
        }
    }

    resp.send({
        ordem: ordem
    })

});


endpoints.post('/treino/analiseNotas', (req, resp) => {

    if (isNaN(req.body.notas) && (req.body.notas) <= 10) {
        resp.status(400).send('Os parâmetro deve ser número. Os numeros não podem ser maior que 10');
        return;
      }


    let ndn  = req.body.notas

   
  
    let menor = Infinity;
    let maior = -Infinity;
  

    for (let i = 0; i < ndn.length; i++) {
        let a = ndn[i];
    
        if (a < menor) {
            menor = a;
        }
    
        if (a > maior) {
            maior = a;
        }
    
      
    }

    let media = Media(ndn)

    resp.send({


        media: Number(media.toFixed(1)),
        maior: maior,
        menor: menor


    })
})
export default endpoints;