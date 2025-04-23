import { useState, useEffect } from "react";
import Timer from "./Timer.jsx";
import Form from "./Form.jsx";
import { ToastContainer, toast } from 'react-toastify';
import "./App.css";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Solo cuando carga el componente
    console.log("Renderizado inicial del componente");
    toast("Renderizado inicial del componente", {
      theme: "dark"
    });
  }, []);
  useEffect(() => {
    // Cada vez que cambia el estado
    document.title = `Contador: ${contador}`;
    console.log("Contador actualizado:", contador);
    toast("Contador:" + contador, {
      theme: "dark"
    });
  }, [contador]);

  return (
    <div className="App">

      {/* El tamaño de los h1 va a cambiar próximamente (este año) 
      -> Hay que colocar estilos y no dejarlos con los defaults
      */}
      {/* <section>
        <h1>nivel 1</h1>
        <section>
          <h1>nivel 1 anidado</h1>
          <section>
            <h1>nivel 1 anidado 2</h1>
            <section>
              <h1>nivel 1 anidado 3</h1>
            </section>
          </section>
        </section>
      </section> */}

      <h1>Contador: {contador}</h1>
      {/* Ejercicio: hacer un botón de decrementar */}
      {/* Ejercicio: hacer un botón de resetear a 0 */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <ToastContainer />
      <hr />
      <h2>Timer</h2>
      <Timer />
      <hr />
      <Form />
    </div>
  );
}
