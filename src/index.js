import 'dotenv/config';
import endpoints from './endpoints.js';
import express from "express";
import cors from "cors";
const server = express();
server.use(cors());
server.use(endpoints);

 
server.use(express.json());


server.listen(process.env.PORT, 
            () => console.log(`API online na porta ${process.env.PORT}`));