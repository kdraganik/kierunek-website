import Head from "next/head";
import Navbar from "./Navbar";
import NavbarLight from "./NavbarLight";
import Footer from "./Footer";
import styles from "../../styles/Layout.module.scss"

export default function Layout({ children, light }) {
  return (
    <>
      <Head>
        <title>Kościół Kierunek</title>
        <meta name="description" content="Jesteśmy grupą ludzi, których marzeniem jest zachęcić innych do życia z Bogiem. Spotykamy się w każdą niedzielę o godzinie 11:00." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {light ? <NavbarLight/> : <Navbar/>}
        <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}