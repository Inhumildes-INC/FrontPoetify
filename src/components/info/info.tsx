'use client';

import styles from './Info.module.sass'
import React from 'react'

export const Info = () => {
  return (
    <div className={styles.infoContainer}>
    <nav className={styles.infoContainer1}>
      <img
        src=""
        alt="image"
        className={styles.infoImage}
      />
      <div className={styles.infoContainer2}>
        <span className={styles.infoText}>Categoria</span>
        <span className={styles.infoText1}>
          Aquí encontrarás información de la categoría seleccionada, además
          de información relevante acerca del proyecto y la generación de
          los poemas
        </span>
      </div>
    </nav>
  </div>
  )
}

