// routes/jokes.routes.js
const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');

// Rutas para las bromas
router.get('/random', jokesController.obtenerBromaAleatoria);
router.get('/', jokesController.obtenerTodasLasBromas);
router.get('/:id', jokesController.obtenerBromaPorId);
router.post('/new', jokesController.crearBroma);
router.put('/:id', jokesController.actualizarBroma);
router.delete('/:id', jokesController.eliminarBroma);

module.exports = router;
