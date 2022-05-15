import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/wyjazd-karlowice/Form'
import styles from '../styles/wyjazd-karlowice/Main.module.scss'
import logo from '../public/logo_black.svg'
import { useState } from 'react'
import Greetings from '../components/wyjazd-karlowice/Greetings'

export default function Home() {

  const [isSend, setIsSend] = useState("")

  return (
    <>
      <Head>
        <title>Wyjazd Karłowice</title>
      </Head>
      <div className={styles.container}>
        <Image src={logo} alt="logo" width={133} height={75} className={styles.logo}/>
        <h1 className={styles.header1}>Wyjazd kościoła do Karłowic</h1>
        {isSend ? <Greetings /> : <Form setIsSend={ setIsSend }/>}
      </div>
    </>
  )
}
