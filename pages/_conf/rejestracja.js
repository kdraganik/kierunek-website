import Head from 'next/head'
import Image from 'next/image'
import Form from '../../components/conf/Form'
import Greetings from '../../components/conf/Greetings'
import styles from '../../styles/conf/Rejstracja.module.scss'
import { useState } from 'react'
import bg from '../../images/confBG.jpg'
import clouds from '../../images/clouds.png'

export default function ConfRegistration() {

  const [isSend, setIsSend] = useState("")

  return (
    <>
      <Head>
        <title>Rejestracja</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.bg}>
            <Image
                fill={true}
                style={{objectFit: "cover"}}
                src={bg}
                alt="bg"
                quality={100}
            />
            <div className={styles.bgSlides}>
                <Image
                    fill={true}
                    style={{objectFit: "cover"}}
                    src={clouds}
                    alt="chmury"
                    quality={10}
                />
            </div>
        </div>
        <div className={styles.logoBox}>
          <Image
              fill={true}
              src="/logo_conf_white.svg" 
              alt="logo konferencji"
          />
        </div>
        {isSend ? <Greetings /> : <Form setIsSend={ setIsSend }/>}
      </div>
    </>
  )
}
