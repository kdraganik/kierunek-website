import Layout from '../components/global/Layout.jsx'
import styles from '../styles/About.module.scss'
import Typewriter from 'typewriter-effect'

export default function About() {
  return (
    <Layout>
      <div className={styles.wrapper}> 
        <div className={styles.credo}>
          <p>Wierzymy, że <span>miłość</span> polega na dawaniu tego co najlepsze. Robimy wszystko z pasją, dbając o jak najwyższą <span>jakość</span>.</p>
          <p>Tworzymy miejsce otwarte, w którym możesz <span>poczuć się jak w domu</span>. Wierzymy, że niemożliwe nie istnieje, a Boża dobroć nie zna granic. <span>Kochamy Wrocław</span>.</p>
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
          <div className={styles.text}>
            <div className={styles.title}>pastorzy</div>
            <div className={styles.name}>
              Bartek i Danusia Tomczyńscy
            </div>
            <div className={styles.description}>
              To szczęśliwi rodzice czwórki dzieci, pełni pasji dla Boga i ludzi. Oprócz prowadzenia kościoła zajmują się również innymi działaniami. Bartek jest dyrektorem programowym Szkoły Biblijnego Uczniostwa, mówcą motywacyjnym, wykładowcą oraz działaczem społecznym. Danusia jest nauczycielką języka angielskiego, pedagogiem specjalnym, pracuje w Stowarzyszeniu Wrocławskie Forum Kobiet, a także jest mówczynią konferencyjną.
            </div>
            <div className={styles.description}>
              Kościół jest dla nas miejscem, w którym zwykli ludzie spotykają niezwykłego Boga. Mieszkając we Wrocławiu poznaliśmy wielu młodych ludzi, którzy szukali żywej relacji z Bogiem i pragnęli być częścią kościoła, który byłby otwarty i współczesny w swojej formie.
            </div>
            <div className={styles.description}>
              Kierunek powstał w odpowiedzi na te właśnie potrzeby i marzenia o kościele współczesnym, w którym relacje są ważniejsze niż forma, gdzie każdy czuje się jak w domu i może spotkać się z autentycznym, zmieniającym życie Bogiem. Jesteśmy dumni i szczęśliwi, widząc, jak ludzie realizują swoje pasje i odnajdują powołanie w naszym kościele. Odwiedź nas i zainspiruj się!
            </div>
          </div>
        </div>
        <div className={styles.services}>
          
        </div>
      </div>
    </Layout>
  )
}
