const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/films.controller');


router.get('/', filmsController.renderHome);
router.get('/film/:title', filmsController.getfilms);
router.post('/film', filmsController.postfilms);


module.exports = router;