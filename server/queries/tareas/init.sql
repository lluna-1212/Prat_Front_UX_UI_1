-- Crear la tabla Tareas
CREATE TABLE Tareas (
  id INT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  completada BOOLEAN NOT NULL DEFAULT FALSE
);

-- Insertar algunas tareas de ejemplo
INSERT INTO Tareas (id, titulo, completada) VALUES
  (1, 'Tarea 1', FALSE),
  (2, 'Tarea 2', TRUE),
  (3, 'Tarea 3', FALSE);
