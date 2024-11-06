// Importamos paquete express
const express = require('express');
const router = express.Router();

// Importamos los controladores de la carpeta controllers en una variable
const filmsController = require('../controllers/films.controller');

// http://http://localhost:3000/
router.get('/', filmsController.renderHome); // Importa la funcion renderHome del archivo controller '../controllers/films.controller'

// http://http://localhost:3000/film/
router.get('/film/:title', filmsController.getfilms); // Importa la funcion getfilms del archivo controller '../controllers/films.controller'

// http://http://localhost:3000/film
router.post('/film', filmsController.postfilms); // Importa la funcion getfilms del archivo controller '../controllers/films.controller'

// Exportamos todas las rutas creadas 
module.exports = router;