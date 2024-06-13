import React from 'react'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import ButtonSignOut from '../dashboard/ButtonSignOut'
import ButtonUpdateData from '../dashboard/ButtonUpdateData'
import fotoPerfil from './perfil.jpg'
import style from './perfil.module.sass'
import ButtonBiblioteca from '../dashboard/CrearBiblioteca'

async function ProfilePage() {
    const session = await getServerSession();
    console.log(session);

    return (
        <div className={style.container}>
            <div>
            <h1>bienvenido {session?.user?.name} </h1>
            <p> {session?.user?.email} </p>
            
            <Image
                src={session?.user?.image || fotoPerfil}
                alt="image profile"
                width={200}
                height={200} />
                <ButtonBiblioteca/>
                <ButtonUpdateData/>
                <ButtonSignOut/>
               </div>
        </div>   
    );

}
export default ProfilePage