'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Style from "./Poema.module.sass"

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

const Domingo = (props: any) => {
  const { categoria } = props.params
  const [data, setData] = useState<Respuesta>()
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch('http://localhost:4000/poemas/categoria/'
      + categoria, { cache: 'no-cache' });

    const jsonData = await response.json();
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
      <div className={Style.container}>
        <Head>
          <title>{ categoria }</title>
          <meta
          />
        </Head>
        <div className="">
          <li className="">
            <span className={Style.text}>{data?.body.poema}</span>
          </li>

        </div>
      </div>
    )
  }

}
export default Domingo