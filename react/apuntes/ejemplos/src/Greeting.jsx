import {useState, memo } from "react";

const Greeting = memo(function Greeting() {
  const [name, setName] = useState("");
  console.log("⚡ render", name);
  return (
    <>
      <input
        type="text"
        placeholder="Nombre..."
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hola {name}</p>
    </>
  );
});

export default Greeting;
