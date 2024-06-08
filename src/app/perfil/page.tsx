'use client';

import styles from './perfil.module.sass'
import React from 'react'

const Login = () => {
  return (
    <div className={styles.perfilContainer}>
    <div className={styles.perfilContainer1}>
      <div className={styles.perfilContainer2}>
        <input
          type="text"
          placeholder="Verificar  Contraseña "
          className={styles.perfilTextinput}
                    />
        <input
          type="text"
          placeholder="Ciudad"
          className={styles.perfilTextinput1}

        />
        <input
          type="text"
          placeholder="Móvil"
          className={styles.perfilTextinput2}

        />
        <input
          type="text"
          placeholder="Apellido"
          className={styles.perfilTextinput3}

        />
        <input
          type="text"
          placeholder="Contraseña"
          className={styles.perfilTextinput4}

        />
        <input
          type="text"
          placeholder="E-Mail"
          className={styles.perfilTextinput5}

        />
        <input
          type="text"
          placeholder="Ocupación"
          className={styles.perfilTextinput6}

        />
        <input
          type="text"
          placeholder="Nombre"
          className={styles.perfilTextinput7}

        />
        <span className={styles.perfilText}>APELLIDO</span>
        <span className={styles.perfilText1}>NOMBRE</span>
        <span className={styles.perfilText2}>CONTRASEÑA</span>
        <span className={styles.perfilText3}>OCUPACIÓN</span>
        <span className={styles.perfilText4}>CIUDAD</span>
        <span className={styles.perfilText5}>VERIFICAR CONTRASEÑA</span>
        <span className={styles.perfilText6}>MÓVIL</span>
        <span className={styles.perfilText7}>E-MAIL</span>
        <button type="button" className={styles.perfilButton}>
          GUARDAR
        </button>
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="image"
          className={styles.perfilImage}
        />
        <span className={styles.perfilText8}>NOMBRE DE USUARIO</span>
      </div>
    </div>
  </div>
  )
}

export default Login
