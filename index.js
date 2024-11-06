const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views','./views');

// Rutas
const filmRoutes = require("./routes/films.routes")

// Habilitar rutas
app.use('/', filmRoutes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})