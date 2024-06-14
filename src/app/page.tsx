'use client';

import React, { useEffect, useState } from 'react'
import Style from './page.module.sass'
import { getServerSession } from 'next-auth'
import TextInputPopup from '../components/TextInputPopup';

interface Respuesta {
  error: boolean,
  status: number,
  body: Poema,  
}

interface Poema {
  poemaId: number,
  poema: string,
  sonetosUsados: number[]
}



const ButtonGuardarEnBiblioteca: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [poemData, setPoemData] = useState<Respuesta>();
  const [namePoem, setNamePoem] = useState();
  const [message, setMessage] = useState(true);
  const [customField, setCustomField] = useState('');


  const fetchData = async () => {
    const response = await fetch('http://localhost:4000/poemas/categoria/', { cache: 'no-cache' });

    const jsonData = await response.json();
    console.log(jsonData);


    return jsonData;


  };


  useEffect(() => {
    fetchData().then((responseData) => {
      setPoemData(responseData)
      setMessage(false)
    })

  }, []);

  /*const fetchData2 = async () => {
    const response = await fetch('http://localhost:4000/usuario/buscarNombre', { cache: 'no-cache', method: "POST",headers: {
      'Content-Type': 'application/json'
    },  body: JSON.stringify({"identificador": ""}) });

    const jsonData = await response.json();
    console.log(jsonData)
    return jsonData;
  };
  
  useEffect(() => {
  fetchData2().then((responseData) => {
    setNameUser(responseData)
    setMessage(false)
  })
}, []); */

  const handleLikeClick = async () => {
    try {


      

      const response2 = await fetch('http://localhost:4000/poemas/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "poema": poemData?.body?.poema, "sonetosUsados": poemData?.body?.sonetosUsados })
      });

      if (response2.ok) {
        const jsonData2 = await response2.json();
        setPoemData(jsonData2); // Guardar los datos del poema
        console.log(jsonData2);
        setShowConfirmation(true); // Mostrar la confirmación después de obtener los datos
      } else {
        setMessage('Error al guardar el poema');
      }
    } catch (error) {
      setMessage('Error de conexión al guardar el poema');
    }
  };



      const handleYesClick = async () => {
        try {
    
          const response = await fetch('http://localhost:4000/biblioteca/agregar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
              "nombre": customField, 
              "id_poema": poemData?.body?.poemaId,
            "id_biblioteca": "1" })
          });
    
          if (response.ok) {
            setMessage(`El poema llamado "${customField}" ha sido guardado exitosamente`);
            setShowConfirmation(false); // Ocultar la confirmación después de guardar
            setNamePoem(null); // Limpiar los datos del poema
            setCustomField(''); // Limpiar el campo personalizado
          } else {
            setMessage('Error al guardar el poema');
          }
        } catch (error) {
          setMessage('Error de conexión al guardar el poema');
        }
      };
      
  const handleNoClick = () => {
    window.location.href = 'http://localhost:3000/'; // Recargar la página
  };

  return (
    <div>
       <div className={Style.homeContainer1}>
            <span className={Style.homeText}>{poemData?.body.poema}</span>
        </div>
      <button onClick={handleLikeClick}>Me Gusta</button>
      
      {showConfirmation && (
        <div>
          <p>¿Lo quieres guardar?</p>
          <button onClick={handleYesClick}>Sí</button>
          <button onClick={handleNoClick}>No</button>
          <input
            type="text"
            value={customField}
            onChange={(e) => setCustomField(e.target.value)}
            placeholder="Ingrese un campo personalizado"
          />
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default ButtonGuardarEnBiblioteca;