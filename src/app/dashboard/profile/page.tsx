"use client"
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

import React from 'react'

function ProfilePage() {
    const {data: session, status, update } = useSession();

    if (status === "loading")return <div>Loading...</div>;

  return (
    <div><div><h1>Bienvenido</h1>
    <p>{session?.user?.name}</p>
    
    <Image 
    src={session?.user?.image || ""}
    alt="image profile"
    width={200}
    height={200}/>
    <button onClick={() => {
        signOut();
    }}
    > cerrar sesion</button>
    </div></div>
  );
}

export default ProfilePage