import Layout from '../components/global/Layout.jsx'
import Image from 'next/image'
import styles from '../styles/Kids.module.scss'
import kidsBg from '../images/kidsBg.jpg'
import Link from 'next/link.js'

export default function Kids() {
  return (
    <Layout light={true} >
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className={styles.bg}>
            <Image
              src={kidsBg}
              alt="hero background"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
          <div className={styles.overlay}>
            <div className={styles.imageBox}>
              <Image 
                height={500}
                width={500}
                objectFit="contain"
                src="/logo_kids.svg" alt="logo_kids"/>
            </div>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <h2 className={styles.header}>Wizja i cel kościoła dziecięcego</h2>
            <p className={styles.description}>
              Kościół Dziecięcy jest miejscem, w którym dzieci poznają Bożą miłość i uczą się budować relację z Bogiem. Znajdują tu bezpieczeństwo, dzięki czemu mogą czuć się wartościowe i ważne.
            </p>
            <p className={styles.description}>
              Wierzymy, że dzieci są ważną częścią Kościoła, dlatego stworzyliśmy dla nich miejsce pobudzające ich kreatywność i wrażliwość. Naszym zadaniem jest budowanie podstaw wiary oraz przekazywanie wartości adekwatnie do ich wieku i możliwości przyswajania informacji.
            </p>
            <p className={styles.description}>
              Skupiamy się na budowaniu Bożych wartości i przekazywaniu prawd o tym, jaką osobą jest Bóg.
              Uczymy dzieci rozmowy z Bogiem, czyli jak się modlić, jak Go uwielbiać i jak okazywać Mu wdzięczność. Współpracujemy z rodzicami wspierając rozwój ich dzieci. Chcemy, by Kościół Dziecięcy był miejscem otwartym na dzieci, które Boga jeszcze nie znają.
            </p>
            <p className={styles.description}>
              Wierzymy, że inwestycja w młode pokolenie przyniesie owoce w ich dorosłym życiu oraz wzmocni poczucie, że z Bogiem mogą osiągnąć niezwykłe rzeczy.
            </p>
            <p className={styles.description}>
              Chcemy zapewnić najlepsze warunki dla najmłodszych członków kościoła przestrzegając naszej <Link href={"/polityka_ochrony.pdf"}>polityki ochrony dzieci</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
