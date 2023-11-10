import Head from 'next/head'
import Image from 'next/image'
import Form from '../../components/wydarzenia/kids/Form'
import Greetings from '../../components/wydarzenia/kids/Greetings'
import styles from '../../styles/wydarzenia/Kids.module.scss'
import { useState } from 'react'

export default function KidsEvent() {

  const [isSend, setIsSend] = useState("")

  return (
    <>
      <Head>
        <title>Wydarzenie wielkanocne</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.imageBox}>
            <Image 
            height={200}
            width={200}
            objectFit="contain"
            src="/logo_kids.svg" alt="logo_kids"/>
        </div>
        <h1 className={styles.header1}>Urodziny Jezusa</h1>
        {isSend ? <Greetings /> : <Form setIsSend={ setIsSend }/>}
      </div>
    </>
  )
}
