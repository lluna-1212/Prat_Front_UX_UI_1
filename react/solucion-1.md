## ✅ PARTE 1 – `Timer` básico con `useEffect` y `useState`

### 🧠 Objetivo:
- Aprender cómo usar `setInterval` con `useEffect`
- Mostrar segundos transcurridos

### 💡 Código:

```jsx
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    // Limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(intervalId);
  }, []); // Solo se ejecuta al montar (una vez)

  return (
    <div>
      <h2>Timer: {segundos} segundos</h2>
    </div>
  );
}
```