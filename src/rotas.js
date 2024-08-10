
import controllerAnalise from "./controller/controllerAnalise.js";
import controllerLeitura from "./controller/controllerLeitura.js";
import controllerTabuada from "./controller/controllerTabuada.js";
import controllerValidacao from "./controller/controllerValidacao.js";

export default  function AdicionaRotas(servidor){


    //arquivos controllers
    servidor.use(controllerAnalise);
    servidor.use(controllerLeitura);
    servidor.use(controllerTabuada);
    servidor.use(controllerValidacao);

    
}