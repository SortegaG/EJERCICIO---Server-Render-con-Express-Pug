const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views','./views');
app.use(bodyParser.urlencoded({ extended: true })); //descifra lo que viene en le formulario

// Rutas
const filmRoutes = require("./routes/films.routes")

// Habilitar rutas
app.use('/', filmRoutes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})