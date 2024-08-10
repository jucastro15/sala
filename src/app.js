import express from "express";
import AdicionaRotas from "./rotas.js";
const servidor = express();
servidor.use(express.json());


AdicionaRotas(servidor)

const PORTA = process.env.PORTA
  
servidor.listen(
    PORTA,
    () => console.log(`API subida com sucesso na porta ${PORTA}`));