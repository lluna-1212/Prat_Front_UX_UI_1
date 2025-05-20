-- Query de crear table de "usuarios" 
CREATE TABLE usuarios (
  id INTEGER NOT NULL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);