//Primer paso: Instalamos los paquetes necesarios:
// Express: Inicia un servidor express
const express = require('express')
const app = express()

// Dotenv: Paquete para enlazar las variables de entorno
require('dotenv').config()

// BodyParser: Paquete para recibir los valores del formulario
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static('public')); // Importa los ficheros estaticos (css y js) de la carpeta public

// Motores de visualizacion de plantillas. Uno de los paquetes a instalar es PUG
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: true })); //descifra lo que viene en le formulario

// Segundo paso. Crear el archivo rutas e importarlo en la siguiente linea. También es obligatorio habilitarlo
// Rutas
const filmRoutes = require("./routes/films.routes")

// Habilitar rutas
app.use('/', filmRoutes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})