const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const listaAlimentos = [
    { id: 1, nombre: 'Pizza' },
    { id: 2, nombre: 'Hamburguesa' },
    { id: 3, nombre: 'Asado' }
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views")); 

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  

app.use(express.static(path.join(__dirname, "../public")));

app.get("/express", (req, res) => {
    res.render("index", { listaAlimentos: listaAlimentos });
});
app.get("/cliente-servidor", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(listaAlimentos);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server ready on port ${PORT}.`);
});
