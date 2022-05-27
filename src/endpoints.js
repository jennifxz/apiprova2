import { Router } from "express";

const server = Router();
import { corSemaforo, diaSemana } from "./services.js";
export default server;

server.get('/corSemaforo/:cor', (req, resp) => {
    try {
        const cor = String(req.params.cor);

        const x = corSemaforo(cor);

        resp.send({
            cor : x
        })

    }
    catch (err) {
        resp.status(404).send({
            err: err.message
        });

    }

})
server.get('/diaSemana', (req, resp) => {
    try {
        const dia = Number (req.query.dia);
        const x = diaSemana(dia);

        resp.send({
            dia : x
        })
    } 
    catch (err) {
        resp.status(404).send({
            err: err.message
        });
    }
})

server.get('./Fatorial', (req,resp) => {
    try {
        
    } catch () {
        
    }
}
)