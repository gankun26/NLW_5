import express from "express";

import "./database";

const app =  express();

app.get("/", (req, resp) =>{
    return resp.json({
        message: "Ola NLW 05"
    });
});

app.post("/", (req, resp) =>{
    return resp.json({
        message: "Usuário salvo com sucesso!"
    })
})

app.listen(3000, () => console.log("Servidor Voando"));

//para rodar o servidor: yarn dev
