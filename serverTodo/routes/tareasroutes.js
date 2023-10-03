const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');



router.get('/tareas', tareasController.tareasFrecuentes);


module.exports = router;