'use client';

import styles from './Registro.module.sass'
import React, { useState } from 'react'
import Head from 'next/head'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth, provider} from 'app/app/firebase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'  
import { useEffect } from 'react'
import { signInWithPopup } from 'firebase/auth'

function Register() {
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User Info:', result.user);
      // Aquí puedes manejar el registro del usuario, como guardar datos adicionales en Firestore
      router.push('/'); // Redirigir al home u otra página después de registrar
    } catch (error) {
      console.error('Error registering:', error);
    }
  };
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const  push  = useRouter();

  const changeUser = (e: any) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      push.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <div>
        <div className="form-signin">
          <h1 className="text-center text-login">Registra tu cuenta</h1>
          <div className="center">
            <input
              name="email"
              type="text"
              className="input-form"
              placeholder="Correo"
              onChange={changeUser}
            />
          </div>
          <div>
      <h1>Register</h1>
      <button onClick={handleRegister}>Register with Google</button>
    </div>
          <div className="center">
            <input
              name="password"
              type="password"
              className="input-form"
              placeholder="Contraseña"
              onChange={changeUser}
            />
          </div>
          <br />
          <div className="center">
            <button
              className="button-signup fondo-color-signup"
              onClick={registerUser}
            >
              Registrarse
            </button>
          </div>
          <p className="text-center">O también</p>
          <br />
          <p className="text-center">
            ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
          </p>
        </div>
      </div>
  );
}

export default Register;