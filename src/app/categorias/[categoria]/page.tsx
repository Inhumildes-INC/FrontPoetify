'use client';

//import styles from './Biblioteca.module.sass'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { json } from 'stream/consumers';

const Domingo = (props: any) => {
  const { categoria } = props.params
  const [data, setData] = useState<any>()

  console.log("HOLA")
  useEffect(() =>  {

    const fetchData = async () => {
      console.log("Se ejecuta")
      const response = await fetch('http://localhost:4000/poemas/categoria/' + categoria, {cache: 'no-cache'});
      const jsonData = response.json();
      setData(jsonData)
      console.log(jsonData)
    };
    console.log("Se ejecuta")
    fetchData()
    

}, []);
  return (
    <div className="">
    <Head>
      <title>Domingo</title>
      <meta
      />
    </Head>
    <div className="">
      <li className="">
        <span className="">aquí se va a colocar el poema</span>
      </li>
      
    </div>
  </div>
  )
}

export default Domingo