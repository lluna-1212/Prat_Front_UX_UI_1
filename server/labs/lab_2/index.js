// app.js
const express = require('express');

// const cors = require('cors');
const { Tarea } = require=('../models');
const db = require('./db')


const { Tarea } = require('./models'); // Asegúrate de que models/index.js exporte Tarea

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

// Listar todas las tareas
app.get('/tareas', async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Eliminar una tarea
app.delete('/tareas/:id', async (req, res) =>{
  const tareaId = req.params.id;
  try {
    const tarea = await Tarea.findByPk(tareaId);
    if (tarea) {
      await tarea.destroy();
      res.json({mensaje: 'Tarea eliminada correctamente'});
    } else {
      res.status(404).json({ error: 'Tarea no encontrada'});
    }
  }catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error al eliminar la tarea'});
  }
  db.run(
    'DELETE FROM Tareas WHERE id = ?',
    [tareaId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      // 204 No Content ya que la eliminación fue exitosa
      res.status(204).end();
    })
});

//Obtener una tarea por id
app.get('/tareas/:id', async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /tareas — Crear nueva tarea
app.post('/tareas', async (req, res) => {
  try {
    const { titulo, completada = false } = req.body;
    const nueva = await Tarea.create({ titulo, completada });
    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /tareas/:id — Actualizar tarea
app.put('/tareas/:id', async (req, res) => {
  try {
    const { titulo, completada } = req.body;
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

    // Actualiza solo los campos que vienen en el body
    if (titulo !== undefined) tarea.titulo = titulo;
    if (completada !== undefined) tarea.completada = completada;

    await tarea.save();
    res.json(tarea);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /tareas/:id — Eliminar tarea
app.delete('/tareas/:id', async (req, res) => {
  try {
    const borradas = await Tarea.destroy({ where: { id: req.params.id } });
    if (!borradas) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
