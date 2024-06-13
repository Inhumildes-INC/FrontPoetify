"use client"
import React from 'react';

const MiComponente: React.FC = () => {
  const enviarEntero = async () => {
    const entero = 42; // Tu entero deseado
    try {
      const response = await fetch('http://localhost:4000/biblioteca/crearbiblioteca', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ entero }), // Envía el entero como JSON
      });

      if (response.ok) {
        console.log('Entero enviado correctamente');
      } else {
        console.error('Error al enviar el entero');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      {/* Otros componentes aquí */}
      <button onClick={enviarEntero}>Enviar Entero</button>
    </div>
  );
};

export default MiComponente;
