const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(
    `Seja bem vindo ao VPS rodando Node.JS pelo Docker na porta ${port}`
  );
});

app.get("/gatinhos", (req, res, next) => {
  res.json(["Laruska", "Saladin", "Quica", "Chico", "Marie"]);
});



app.get("/momo", (req, res, next) => {
  res.json("Momo é lindona <3");
});
