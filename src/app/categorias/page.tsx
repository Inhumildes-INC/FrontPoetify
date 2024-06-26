'use client';

import styles from './Categoria.module.sass'
import Link from 'next/link';
import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import lunes from './lunes.png'
import martes from  './martes.png'
import miercoles from './miercoles.png'
import jueves from './jueves.png'
import viernes from './viernes.png'
import sabado from './sabado.png'
import domingo from './domingo.png'



const categorias = () => {

  return (
    <div className={styles.categoriasContainer}>
      <Head>
        <title>Categorias - Remarkable Alarmed Albatross</title>
        <meta
          property="og:title"
          content="Categorias - Remarkable Alarmed Albatross"
        />
      </Head>
        <div className={styles.categoriasContainer1}>

          <div className={styles.Grid}>
            <span className={styles.categoriasText}>CATEGORÍAS</span>
            <span className={styles.categoriasText1}>
              Elige la categoría que más te atraiga, y déjate sorprender por un
              poema casi único.
            </span>
            <div>
              <Link href="/categorias/lunes">
                <Image
                  src={lunes} alt="image" width={500} height={500} className={styles.Image} />
                <button type="button" className={styles.Button}>
                  LUNES
                </button>
              </Link>
            </div>
            <div>
              <Link href="/categorias/martes">
                <Image
                  src={martes} alt="image" width={500} height={500} className={styles.Image} />
                <button type="button" className={styles.Button}>
                  MARTES
                </button></Link>
            </div>
            <div>
              <Link href="/categorias/miercoles">
                <Image
                  src={miercoles} alt="image" width={500} height={500} className={styles.Image} />
                <button type="button" className={styles.Button}>
                  MIERCOLES
                </button>
              </Link>
            </div>
            <div>
              <Link href="/categorias/jueves">
                <Image
                  src={jueves} alt="image" width={500} height={500} className={styles.Image} />
                <button type="button" className={styles.Button}>
                  JUEVES
                </button>
              </Link>
            </div><div>
              <br />
              <Link href="/categorias/viernes">
                <Image
                  src={viernes} alt="image" width={500} height={500} className={styles.Image} />
                <button type="button" className={styles.Button}>
                  VIERNES
                </button>
              </Link>
            </div><div>
              <br />
              <Link href="/categorias/sabado">
                <Image
                  src={sabado} alt="image" width={500} height={500} className={styles.Image} />
                <button type="button" className={styles.Button}>
                  SABADO
                </button>
              </Link>
            </div><div>
              <br />
              <Link href="/categorias/domingo">
                <Image
                  src={domingo} alt="image" width={500} height={500} className={styles.Image} />
                <button type="button" className={styles.Button}>
                  DOMINGO
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
export default categorias
