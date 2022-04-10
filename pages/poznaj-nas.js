import Layout from '../components/global/Layout.jsx'
import styles from '../styles/About.module.scss'
import Typewriter from 'typewriter-effect'

export default function About() {
  return (
    <Layout>
      <div className={styles.wrapper}> 
        <div className={styles.credo}>
        <p>Wierzymy, że <span>miłość</span> polega na dawaniu tego co najlepsze. Robimy wszystko z pasją, dbając o jak najwyższą <span>jakość</span>.</p>
          <p>Tworzymy miejsce otwarte, w którym możesz <span>poczuć się jak w domu</span>. Wierzymy, że niemożliwe nie istnieje, a Boża dobroć nie zna granic. <span>Kochamy Wrocław</span>.</p>
          <div className={styles.animation}>
            <h2>Kochamy </h2>
            <Typewriter
              options={{
                strings: ['Boga', 'Ludzi', 'Życie'],
                autoStart: true,
                loop: true,
                pauseFor: 1200,
                cursor: ""
              }}
            />
          </div>
        </div>
        <div className={styles.pastors}>
          <div className={styles.bg}></div>
          <div className={styles.text}>
            <div className={styles.title}>pastorzy</div>
            <div className={styles.name}>
              Bartek i Danusia Tomczyńscy
            </div>
            <div className={styles.description}>
              To pełni pasji dla Boga i ludzi szczęśliwi rodzice czwórki dzieci. Z radością prowadzą kościół, zajmując się również innymi działaniami. Bartek jest dyrektorem programowym Szkoły Biblijnego Uczniostwa, mówcą motywacyjnym, wykładowcą oraz działaczem społecznym. Danusia jest nauczycielką języka angielskiego, pedagogiem specjalnym, a także pracuje w Stowarzyszeniu Wrocławskie Forum Kobiet. Oboje przemawiają na różnych konferencjach i szkoleniach. 
            </div>
            <div className={styles.description}>
              „Kościół jest dla nas miejscem, w którym zwykli ludzie spotykają niezwykłego Boga. Mieszkając we Wrocławiu poznaliśmy różne osoby, które szukały autentycznej relacji z Bogiem i pragnęły być częścią kościoła otwartego oraz współczesnego w swojej formie. Kościół Kierunek powstał w wyniku marzenia o miejscu, w którym relacje są ważniejsze niż forma, gdzie każdy czuje się jak w domu i może spotkać się ze zmieniającym życie Bogiem. Jesteśmy dumni i szczęśliwi, widząc, jak ludzie realizują swoje pasje i odnajdują w naszym kościele powołanie dla swojego życia.” 
            </div>
            <div className={styles.description}>
              Odwiedź nas i zainspiruj się!
            </div>
          </div>
        </div>
        <div className={styles.services}>
          
        </div>
      </div>
    </Layout>
  )
}
