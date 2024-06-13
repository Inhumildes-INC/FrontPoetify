"use cliente"
import React from 'react'
import Link from 'next/link'
import style from '../perfil/perfil.module.sass'

function ButtonUpdateData() {
  return (
    <Link href="/update">
   <button className={style.button}>
    Actualizar Datos</button>
    </Link>
  )
}

export default ButtonUpdateData