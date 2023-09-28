import React, { useState, useEffect } from 'react';

function Counter() {
  // Definir el estado inicial del contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const incrementarContador = () => {
    setCount(count + 1);
  }

  // Función para decrementar el contador
  const decrementarContador = () => {
    setCount(count - 1);
  }

  // useEffect se utiliza para gestionar efectos secundarios cuando 'count' cambia
  useEffect(() => {
    console.log('El componente se montó o se actualizó');
    // Puedes realizar operaciones adicionales aquí si es necesario
  }, [count]);

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor del contador: {count}</p>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
    </div>
  );
}

export default Counter;
