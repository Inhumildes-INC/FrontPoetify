'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Style from "./Home.module.sass"
import Link from 'next/link'

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

const Categoria = (props: any) => {
  const { categoria } = props.params
  const [data, setData] = useState<Respuesta>()
  const [loading, setLoading] = useState(true)


  const fetchData = async () => {
    const response = await fetch('http://localhost:4000/poemas/categoria/', { cache: 'no-cache' });

    const jsonData = await response.json();
    console.log(jsonData);

    return jsonData;
  
    
  };


  useEffect(() => {
    fetchData().then((responseData ) => {
      setData(responseData)
      setLoading(false)
    })
    
  }, []);

  if (loading) return (<h1>Cargando</h1>)



    

  {
    return (
      <div className=''>
        <Head>
          <title>{ categoria }</title>
          <meta
          />
        </Head>
        <div className={Style.homeContainer}>
        <div className={Style.homeContainer1}>
            <span className={Style.homeText}>{data?.body.poema}</span>
        </div>
        <div >
         
          <button>crear nuevo</button>


          <button className={Style.button} onClick={()=>{
      const fetchData = async () => {
        const response = await fetch('http://localhost:4000/poemas/guardar', { cache: 'no-cache', method: "POST",headers: {
          'Content-Type': 'application/json'
        },  body: JSON.stringify({"poema": data?.body?.poema, "sonetosUsados": data?.body?.sonetosUsados}) });
    
        const jsonData = await response.json();
        console.log(jsonData)
      };
      fetchData(); 

      


      }}>
            guardar</button>

        

        </div>
      </div>
      </div>
    )
  }

}
export default Categoria



