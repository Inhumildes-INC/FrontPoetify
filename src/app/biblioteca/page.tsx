'use client';

import styles from './Biblioteca.module.sass'
import React from 'react'
import Head from 'next/head'

const Biblioteca = () => {
  return (
    <div className={styles.bibliotecaContainer}>
    <Head>
      <title>BIblioteca - Remarkable Alarmed Albatross</title>
      <meta
        property="og:title"
        content="BIblioteca - Remarkable Alarmed Albatross"
      />
    </Head>
    <div className={styles.bibliotecaContainer1}>
      <li className={styles.bibliotecaList}>
        <span className={styles.bibliotecatext}>Text</span>
      </li>
      <li className={styles.bibliotecaList}>
        <span className={styles.bibliotecaText}>Text</span>
      </li>
      <li className={styles.bibliotecaList}>
        <span className={styles.bibliotecaText}>Text</span>
      </li>
      <li className={styles.bibliotecaList}>
        <span className={styles.bibliotecaText}>Text</span>
      </li>
      <li className={styles.bibliotecaList}>
        <span className={styles.bibliotecaText}>Text</span>
      </li>
    </div>
  </div>
  )
}

export default Biblioteca