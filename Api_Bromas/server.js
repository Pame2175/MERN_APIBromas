// server.js
const express = require('express');
const mongoose = require('mongoose');
const jokesRoutes = require('./routes/jokes.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de express
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/my_first_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Importar y usar las rutas de broma con el prefijo /api/jokes
app.use('/api/jokes', jokesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
