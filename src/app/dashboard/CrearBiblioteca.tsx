"use client"
import React from 'react'
import style from '../perfil/perfil.module.sass'
import TextInputPopup from '../../components/TextInputPopup';



function ButtonCrearBiblioteca(email: any) {



  return (
    
      <button className={style.button} onClick={()=>{
      const fetchData = async () => {
        const response = await fetch('http://localhost:4000/usuario/buscarNombre', { cache: 'no-cache', method: "POST",headers: {
          'Content-Type': 'application/json'
        },  body: JSON.stringify({"identificador": email.email}) });
    
        const jsonData = await response.json();
        console.log(jsonData)
      
        const response2 = await fetch('http://localhost:4000/biblioteca/crearbiblioteca', { cache: 'no-cache', method: "POST", 
          headers: {
          'Content-Type': 'application/json'
        },  body: JSON.stringify({"usuarioId": jsonData?.body?.id}) });
    
        const jsonData2 = await response2.json();
        console.log(jsonData2)
      
        
        
      };
      fetchData(); 
      }}>
    craar biblioteca</button>

  )
}

export default ButtonCrearBiblioteca