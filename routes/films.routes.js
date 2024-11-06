const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/films.controller');


router.get('/', filmsController.renderHome);
// router.get('/film/:title', filmsController, fetchAndRender);
// router.get('/film', filmsController, fetchAndRender);


module.exports = router;