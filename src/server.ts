import express from "express";
import {createServer} from "http";
import {Server, Socket} from "socket.io";

import "./database";
import {routes} from "./routes";

const app =  express();

const http = createServer();
const io = new Server(http);

io.on("connection", (socket: Socket ) =>{
    console.log("Se conectou", socket.id);
})

app.use(express.json());

app.use(routes);

http.listen(3000, () => console.log("Servidor Voando"));

//para rodar o servidor: yarn dev
