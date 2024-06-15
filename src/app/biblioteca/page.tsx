'use client'

import React, { useEffect, useState } from 'react'
import Style from './Biblioteca.module.sass'

interface Biblioteca {
  nombre: string;
  contenido: string;
}

const BibliotecaPage: React.FC = () => {
  const [bibliotecas, setBibliotecas] = useState<Biblioteca[]>([]);
  const [selectedBiblioteca, setSelectedBiblioteca] = useState<Biblioteca | null>(null);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const fetchBibliotecas = async () => {
      try {
        const response = await fetch('http://localhost:4000/biblioteca/13/poemas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          console.log('API response:', jsonData); // Depuración

          if (jsonData.body && Array.isArray(jsonData.body)) {
            setBibliotecas(jsonData.body);
          } else {
            setError('La respuesta de la API no contiene un arreglo en la propiedad body');
            console.error('La respuesta de la API no contiene un arreglo en la propiedad body:', jsonData);
          }
        } else {
          setError('Error al obtener las bibliotecas');
          console.error('Error al obtener las bibliotecas:', response.statusText);
        }
      } catch (error) {
        setError('Error de conexión al obtener las bibliotecas');
        console.error('Error de conexión al obtener las bibliotecas:', error);
      }
    };

    fetchBibliotecas();
  }, []);

  const handleButtonClick = (biblioteca: Biblioteca) => {
    setSelectedBiblioteca(biblioteca);
  };

  const handleClosePopup = () => {
    setSelectedBiblioteca(null);
  };
  const handleNoClick = () => {
    window.location.href = 'http://localhost:3000/'; // Recargar la página
  };

  return (
    <div>
      <h1 className={Style.text}>tus poemas guardados</h1>
      {error && <p className={Style.error}>{error}</p>}
      <div className={Style.bibliotecaList}>
        {bibliotecas.map((biblioteca, index) => (
          <button className={Style.boton} key={index} onClick={() => handleButtonClick(biblioteca)}>
            {biblioteca.nombre}
          </button>
        ))}
      </div>

      {selectedBiblioteca  && (
        <div className={Style.bibliotecaList} onClick={handleClosePopup}>
          <div className={Style.popupContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBiblioteca.nombre}</h2>
            <p>{selectedBiblioteca.contenido}</p>
            <button className={Style.boton} onClick={handleClosePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BibliotecaPage;
