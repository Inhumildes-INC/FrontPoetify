'use client';

import styles from './Menu.module.sass'
import Link from 'next/link';



export const Menu = () => {
    return (
        <nav>
        <div className={styles.ContenedorEncabezado}>

            <Link href="/perfil"><button className={styles.BotonPerfil}>
                🤯</button></Link>
                <br />
            <Link href="/home"><button className={styles.Boton}>
            🏠Inicio</button></Link>
            <br />
            <Link href="/categorias"><button className={styles.Boton}>
                📁Categorias</button></Link>    
          
        </div>
        <section>
              <div className={styles.ContenedorBiblioteca}>
                <Link href="/biblioteca"><button className={styles.Boton}>
                📚Biblioteca</button></Link>
                <br/>
                <span className={styles.text}>aqui vas a poder encontrar los poemas que guardes</span>

                

                

            </div>
        </section>

        </nav>
       
    )
}
