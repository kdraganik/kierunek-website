import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../../styles/Layout.module.scss"

export default function Layout({ children, light }) {
  return (
    <>
      <Head>
        <title>Kościół Kierunek</title>
        <meta name="description" content="Jesteśmy grupą ludzi, których marzeniem jest zachęcić innych do życia z Bogiem. Spotykamy się w każdą niedzielę o godzinie 11:00. Kościół Zielonoświątkowy Kierunek." />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar light={light} />
        <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}