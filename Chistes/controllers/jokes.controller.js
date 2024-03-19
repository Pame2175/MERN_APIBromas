// controladores/jokes.controller.js
const Joke = require('../models/jokes.model');

exports.obtenerTodasLasBromas = async (req, res) => {
  try {
    const bromas = await Joke.find();
    res.json(bromas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las bromas' });
  }
};

// Función para obtener una broma por ID
exports.obtenerBromaPorId = async (req, res) => {
  try {
    const broma = await Joke.findById(req.params.id);
    if (!broma) {
      return res.status(404).json({ mensaje: 'Broma no encontrada' });
    }
    res.json(broma);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la broma' });
  }
};

// Función para crear una nueva broma
exports.crearBroma = async (req, res) => {
  try {
    const nuevaBroma = await Joke.create(req.body);
    res.status(201).json(nuevaBroma);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la broma' });
  }
};

// Función para actualizar una broma existente
exports.actualizarBroma = async (req, res) => {
  try {
    const bromaActualizada = await Joke.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bromaActualizada) {
      return res.status(404).json({ mensaje: 'Broma no encontrada' });
    }
    res.json(bromaActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la broma' });
  }
};

// Función para eliminar una broma existente
exports.eliminarBroma = async (req, res) => {
  try {
    const bromaEliminada = await Joke.findByIdAndDelete(req.params.id);
    if (!bromaEliminada) {
      return res.status(404).json({ mensaje: 'Broma no encontrada' });
    }
    res.json({ mensaje: 'Broma eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la broma' });
  }
};
// Función para obtener una broma aleatoria
exports.obtenerBromaAleatoria = async (req, res) => {
  try {
    const count = await Joke.countDocuments();
    const random = Math.floor(Math.random() * count);
    const broma = await Joke.findOne().skip(random);
    res.json(broma);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la broma aleatoria' });
  }
};
