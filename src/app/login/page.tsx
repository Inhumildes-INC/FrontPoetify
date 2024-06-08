'use client';

import styles from './Login.module.sass'
import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from 'app/app/firebase'
import Notification from 'app/components/notification'
import Link from 'next/link'
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { signInWithPopup } from 'firebase/auth'


export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User Info:', result.user);
      router.push('/'); 
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

    const [Credentials, setCredentials] = useState({
      email: "",
      password: "",
    });

    const push = useRouter();

    const changeUser = (e: any) => {
      setCredentials({
        ...Credentials,
        [e.target.name]: e.target.value,
      });
    };
    const [Message, setMessage] = useState("");
    const [ShowNotification, setShowNotification] = useState(false);

    const showMessage = (message: any) => {
      setMessage(message);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2800);
    };

    const loginUser = async () => {
      try {
        await signInWithEmailAndPassword(
          auth,
          Credentials.email,
          Credentials.password
        );
        push.push("/");
      } catch ({ message }) {
        if (message === "Firebase: Error (auth/wrong-password).") {
          showMessage("Contraseña incorrecta")
        }
      }
    };
    return (
      <div>
        <Notification show={ShowNotification} message={Message} />
        <div className="form-signin">
          <h1 className="text-center text-login">Inicia sesión en tu cuenta</h1>
          <div className="center">
            <input
              name="email"
              type="text"
              className="input-form"
              placeholder="Correo"
              onChange={changeUser}
            />
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
              onClick={loginUser}
            >
              Iniciar sesión
            </button>
            <div>
              <h1>Login</h1>
              <button onClick={handleLogin}>Login with Google</button>
            </div>
          </div>
        </div>
        <p className="text-center">O también</p>
        <br />
        <p className="text-center">
          ¿Aún no tienes cuenta? <Link href="/registro">Registrarse</Link>
        </p>

      </div>
    );
  }