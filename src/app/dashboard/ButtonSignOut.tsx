"use client"
import React from 'react'
import { signOut } from 'next-auth/react';
import style from '../perfil/perfil.module.sass'


function ButtonSignOut() {
  return (
    <button className={style.button} onClick={()=>{signOut()}}
    >Cerrar sesion</button>
  )
}

export default ButtonSignOut