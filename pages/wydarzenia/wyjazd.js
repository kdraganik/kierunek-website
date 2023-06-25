import Head from 'next/head'
import Image from 'next/image'
import Form from '../../components/wydarzenia/wyjazd/Form'
import Greetings from '../../components/wydarzenia/wyjazd/Greetings'
import styles from '../../styles/wydarzenia/Wyjazd.module.scss'
import { useState } from 'react'

export default function ChurchEvent() {

  const [isSend, setIsSend] = useState("")

  return (
    <>
      <Head>
        <title>Wyjazd kościoła - Nowy Gierałtów</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.imageBox}>
              <Image 
              height={102}
              width={125}
              src="/logo_black.svg" alt="logo_kids"/>
          </div>
        <h1 className={styles.header1}>Wyjazd kościoła - Nowy Gierałtów</h1>
        {isSend ? <Greetings /> : <Form setIsSend={ setIsSend }/>}
      </div>
    </>
  )
}
