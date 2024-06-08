import { Menu } from "app/components/menu/menu";
import { Info } from "app/components/info/info";
import styles from "./Layout.module.sass"
import { Inter } from "next/font/google";

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
