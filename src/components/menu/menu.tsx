'use client';

import styles from './Menu.module.sass'
import Link from 'next/link';
import React, {  useEffect, useState } from 'react';

interface Biblioteca {
  nombre: string;
  contenido: string;
}

export const Menu = () => {
    const [bibliotecas, setBibliotecas] = useState<Biblioteca[]>([]);
    const [selectedBiblioteca, setSelectedBiblioteca] = useState<Biblioteca | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBibliotecas = async () => {
          try {
            const response = await fetch('http://localhost:4000/biblioteca/11/poemas', {
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
        <nav>
        <div className={styles.ContenedorEncabezado}>

            <Link href="/perfil"><button className={styles.BotonPerfil}>
                🤯</button></Link>
                <br />
            <Link href="/"><button className={styles.Boton} onClick={handleNoClick}>
            🏠Inicio</button></Link>
            <br />
            <Link href="/categorias"><button className={styles.Boton}>
                📁Categorias</button></Link>    
          
        </div>
        <section>
              <div className={styles.ContenedorBiblioteca}>
                <Link href="/biblioteca"><button className={styles.Boton}>
                📚Biblioteca</button></Link>
                <br/>
                

              
      <h1 className={styles.text}>tus poemas guardados</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.bibliotecaList}>
        {bibliotecas.map((biblioteca, index) => (
          <button className={styles.boton} key={index} onClick={() => handleButtonClick(biblioteca)}>
            {biblioteca.nombre}
          </button>
        ))}
      </div>

      {selectedBiblioteca  && (
        <div className={styles.bibliotecaList} onClick={handleClosePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBiblioteca.nombre}</h2>
            <p>{selectedBiblioteca.contenido}</p>
            <button className={styles.boton} onClick={handleClosePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>

                

        
        </section>

        </nav>
       
    )
}
