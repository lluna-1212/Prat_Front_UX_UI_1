import { useEffect } from "react";
import Timer from "./Timer.jsx";
import Timer2 from "./Timer2.jsx";
import Form from "./Form.jsx";
import ThemeChanger from "./ejercicios/ThemeChanger.jsx";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

export default function Contador() {
  // const [contador, setContador] = useState(0);

  useEffect(() => {
    // Solo cuando carga el componente
    // console.log("Renderizado inicial del componente");
    toast("Renderizado inicial del componente", {
      theme: "dark",
    });
  }, []);

  // useEffect(() => {
  //   // Cada vez que cambia el estado
  //   document.title = `Contador: ${contador}`;
  //   console.log("Contador actualizado:", contador);
  //   toast("Contador:" + contador, {
  //     theme: "dark"
  //   });
  // }, [contador]);

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

      {/* Ejemplo con contador básico */}
      {/* <h1>Contador: {contador}</h1> */}

      {/* Ejercicio: hacer un botón de decrementar */}
      {/* Ejercicio: hacer un botón de resetear a 0 */}

      {/* <button onClick={() => setContador(contador + 1)}>Incrementar</button> */}
      {/* <hr /> */}
      {/* Final del ejemplo con contador básico */}

      <ToastContainer />
      <h1>My Awesome App is amazing!</h1>

      <ThemeChanger />
      <hr />

      <h2>Timer</h2>
      <Timer />

      <h2>Timer 2</h2>
      <Timer2 />

      <hr />

      <h2>Form</h2>
      <Form />
    </div>
  );
}
