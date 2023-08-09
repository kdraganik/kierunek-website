import Head from 'next/head'
import Image from 'next/image'
import KidsForm from '../../components/conf/KidsForm'
import KidsGreetings from '../../components/conf/KidsGreetings'
import styles from '../../styles/conf/Rejstracja.module.scss'
import { useState } from 'react'
import bg from '../../images/confBG.jpg'
import clouds from '../../images/clouds.png'

export default function ConfRegistration() {

  const [isSend, setIsSend] = useState("")

  return (
    <>
      <Head>
        <title>Rejestracja na zajęcia dla dzieci</title>
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
        {isSend ? <KidsGreetings /> : <KidsForm setIsSend={ setIsSend }/>}
      </div>
    </>
  )
}