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
  const tareaIndex = tareas.findIndex(
    tarea => `${tarea.id}` === `${tareaId}`
  );
  res.json(tareas[tareaIndex]);
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
  const tareaId = req.params.id; 
  const tarea = req.body;
  console.log("Tarea recibida:", tarea);
  const tareaIndex = tareas.findIndex(
    tarea => `${tarea.id}` === `${tareaId}`
  );
  if(tareaIndex === -1) {
    res.status(404).json({ error: "Tarea no encontrada" });
    return;
  }
  // tareas[tareaIndex] = tarea; // ❌ sustituye por completo el objeto
  // Editar el campo que me viene en el body
  if (tarea.titulo) {
    tareas[tareaIndex].titulo = tarea.titulo;
  }
  if (tarea.completada) {
    tareas[tareaIndex].completada = tarea.completada;
  }
  // Guardar la tarea en el array (en el id correcto)
  console.log("Tarea editada:");
  console.log(tareas[tareaIndex]); 
  res.status(200).json(tareas[tareaIndex]);
})
app.delete('/tareas/:id', (req, res) => {
  // Encontrar la tarea por id
  const tareaId = req.params.id;
  const tareaIndex = tareas.findIndex(
    tarea => `${tarea.id}` === `${tareaId}`
  );

  // Podríamos poner un bucle if para verificar si existe la tarea
  // Si el id no es mayor que cero o no es entero => 400 

  // Eliminar la tarea
  tareas.pop(tareaIndex);
  res.status(204).json();
})
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
