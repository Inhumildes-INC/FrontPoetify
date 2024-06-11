import { Menu } from '../components/menu/menu'
import { Info } from "../components/info/info"
import styles from './Layaout.module.sass'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        <body className={inter.className}>
          <div className={styles.Grid}>
            <Menu />
            <div className={styles.Center}>
              {children}
            </div>
            <Info />
          </div>
        </body>
    </html>
  );
}
