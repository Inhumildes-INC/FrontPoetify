'use client';

import styles from './page.module.sass'
import React from 'react'
import Head from 'next/head'


const Home = () => {
  return (
    <div className={styles.homeContainer}>
    <Head>
      <title>Remarkable Alarmed Albatross</title>
      <meta property="og:title" content="Remarkable Alarmed Albatross" />
    </Head>
    <div className={styles.homeContainer1}>
      <button type="button" className={styles.homButton}>
        Volver a generar
      </button>
      <button type="button" className={styles.homeButton1}>
        Guardar Poema
      </button>
      <span className={styles.homeText}>
        <span>Bajo la luna, el susurro de un beso,</span>
        <br></br>
        <span>el latido de dos corazones,</span>
        <br></br>
        <span>dragones vuelan en mágicos cielos,</span>
        <br></br>
        <span>y los unicornios danzan en libertad.</span>
        <br></br>
        <span>La angustia es compañera del viaje,</span>
        <br></br>
        <span>la libertad, un peso que se siente,</span>
        <br></br>
        <span>la montaña se alza, majestuoso suelo,</span>
        <br></br>
        <span>y Afrodita su belleza tierna.</span>
        <br></br>
        <span>¿Quién soy en este vasto universo?</span>
        <br></br>
        <span>el viento canta una vieja canción,</span>
        <br></br>
        <span>las puertas del ayer están abiertas,</span>
        <br></br>
        <span>forjarán su nombre, verdaderos.</span>
        <br></br>
        <span>Épica historia de noble batalla,</span>
        <br></br>
        <span>iluminas con tu sabia broche.</span>
      </span>
      <span className={styles.homeText28}>VIERNES</span>
    </div>
  </div>
  )
}

export default Home
