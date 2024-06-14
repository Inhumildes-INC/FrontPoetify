import { Menu } from '../components/menu/menu'
//import { Info } from "../components/info/info"
import styles from './Layout.module.sass'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        <body className={styles.fondo}>
          <div className={styles.Grid}>
            <Menu />
            {children}              
          </div>
        </body>
    </html>
  );
}
