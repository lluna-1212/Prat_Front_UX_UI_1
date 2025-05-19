const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
// app.use(cors()); // Permitir CORS para todos los orígenes (ajustable si quieres limitar)
app.use(express.json()); // Para parsear JSON en el body

const tareas = [
    { id: 1, titulo: "Tarea 1", completada: false },
    { id: 2, titulo: "Tarea 2", completada: true },
    { id: 3, titulo: "Tarea 3", completada: false },
  ]
// Rutas
app.get('/', (req, res) => {
  res.send('Hola mundo! Bienvenid@ a mi servidor! 👋');
})
app.get('/tareas', (req, res) => {
  res.json(tareas);
})
app.get('/tareas/:id', (req, res) => {
  const tareaId = req.params.id;
  // Filtro por id
  res.json({ id: tareaId });
})
app.post('/tareas', (req, res) => {
  const tarea = req.body;
  console.log(tarea);
  const newId = tareas.length + 1;
  tarea.id = newId;
  // Agregar tarea
  tareas.push(tarea);
  res.json(tarea);
})
app.put('/tareas/:id', (req, res) => {
  // Encontrar la tarea por id
  
  // Editar el campo que me viene en el body

  // Guardar la tarea en el array (en el id correcto)

})
app.delete('/tareas/:id', (req, res) => {
  // Encontrar la tarea por id

  // Eliminar la tarea
  
})
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
