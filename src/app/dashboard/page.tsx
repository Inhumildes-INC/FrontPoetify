import React from 'react'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import ButtonSignOut from './ButtonSignOut'


async function DashboardPage() {
    const session = await getServerSession();
    console.log(session);
    return (
        <div>
            <h1>bienvenido {session?.usuario?.nombre} </h1>
            <p> {session?.user?.email} </p>
            <Image
                src={session?.usuario?.image || ""}
                alt="image profile"
                width={200}
                height={200} />
               <ButtonSignOut/>
        </div>   
    );

}
export default DashboardPage