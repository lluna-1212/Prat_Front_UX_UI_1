// use es una API de React que te permite leer el valor de un recurso como una Promesa o contexto.
// useContext es una API de React que te permite leer el valor de un contexto.

// 1. ¿Qué pasaría si movemos el hook use fuera del condicional en el componente Button?
// 2. ¿Cómo se comportaría la aplicación si el ThemeContext.Provider no estuviera presente?
// 3. ¿Por qué es útil poder usar el hook use dentro de condicionales?
// Y, finalmente, cómo se haría esto si no tuviésemos el hook use, ¿sería posible?
//
import { createContext, use } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Bienvenido">
      <Button show={true}>Registrarse</Button>
      <Button show={false}>Iniciar sesión</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = use(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ show, children }) {
  if (show) {
    const theme = use(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
      </button>
    );
  }
  return false
}
