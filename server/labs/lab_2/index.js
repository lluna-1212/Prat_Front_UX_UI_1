const express = require('express');
// const cors = require('cors');
const { Tarea } = require=('../models');
const db = require('./db')

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

app.get('/tareas', async (req, res) => {
  // Conectar a la db
  // Ejecutar el query de SELECT * ...
  // Devolver la salida de ese query
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las tareas'});
  }
});
// Obtener una tarea por ID
app.get('/tareas/:id', async (req, res) => {
  const tareaId = req.params.id;
try{
  const tarea = await Tarea.findByPk(tareaId);
  if(tarea){
    res.json(tarea);
  } else {
    res.status(404).json({error: 'Tarea no encontrada'});
  }
} catch (error) {
  console.error(error);
  res.status(500).json({error: 'Error al obtener la tarea'});
}
  db.get(
    'SELECT * FROM Tareas WHERE id = ?',
    [tareaId],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      res.json(row);
    }
  );
});

//Crear una nueva tarea
app.post('/tareas', async (req, res) => {
  const { titulo, completada = 0 } = req.body;
  try{
    const nuevaTarea = await Tarea.create({titulo, completada});
    res.status(201).json(nuevaTarea);
  } catch (error){
    console.error(error);
    res.status(500).json({error: 'Error al crear la tarea'});
  }
  db.run(
    'INSERT INTO Tareas (titulo, completada) VALUES (?, ?)',
    [titulo, completada ? 1 : 0],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // this.lastID contiene el id de la tarea recién insertada
      const nuevaTarea = {
        id: this.lastID,
        titulo,
        completada: Boolean(completada)
      };
      res.status(201).json(nuevaTarea);
    }
  );
});

//Actualizar una tarea 
app.put('/tareas/:id', async (req, res) => {
  const tareaId = req.params.id;
  const { titulo, completada } = req.body;
  try {
    const tarea = await Tarea.findByPk(tareaId);
    if (tarea) {
      await tarea.update({titulo, completada});
      res.json({mensaje: 'Tarea actualizada correctamente' });
    } else {
      res.status(404).json({error: 'Tarea no encontrada'});
    }
  } catch (error){
    console.error(error);
    res.status(500).json({error: 'Error al actualizar la tarea'});
  }
  // Construir dinámicamente SET según campos recibidos
  const campos = [];
  const valores = [];
  if (titulo !== undefined) {
    campos.push('titulo = ?');
    valores.push(titulo);
  }
  if (completada !== undefined) {
    campos.push('completada = ?');
    valores.push(completada ? 1 : 0);
  }

  if (campos.length === 0) {
    return res.status(400).json({ error: 'No se han proporcionado campos para actualizar' });
  }

  // Añadir el id al array de valores para la cláusula WHERE
  valores.push(tareaId);

  const sql = `UPDATE Tareas SET ${campos.join(', ')} WHERE id = ?`;

  db.run(sql, valores, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    // Recuperar la tarea actualizada
    db.get('SELECT * FROM Tareas WHERE id = ?', [tareaId], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(row);
    });
  });
});

// Eliminar una tarea
app.delete('/tareas/:id', async (req, res) => {
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
    }
  );
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
