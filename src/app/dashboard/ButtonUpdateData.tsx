"use client"
import React from 'react'
import Link from 'next/link'
import style from '../perfil/perfil.module.sass'

function ButtonUpdateData() {
  return (
    <Link href="/update">

  <button> Actualizar Datos</button>
    </Link>
  )
}

export default ButtonUpdateData