"use client"
import React from 'react'
import { signOut } from 'next-auth/react';

function ButtonSignOut() {
  return (
    <button onClick={()=>{signOut()}}
    >Cerrar sesion</button>
  )
}

export default ButtonSignOut