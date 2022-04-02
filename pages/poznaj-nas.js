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
              Bartek Tomczyński
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere quam eget sodales. Aenean viverra felis sit amet velit finibus, nec dapibus ligula vestibulum. Sed pellentesque elit turpis, quis laoreet nisl mattis eget. Vivamus nunc nulla, ullamcorper non justo vel, vehicula gravida nisi. Curabitur dolor diam, feugiat eu erat sit amet, accumsan accumsan erat. Aliquam sed tortor eu est commodo efficitur. Duis suscipit at nisi quis facilisis.
            </div>
            <div className={styles.name}>
              Danusia Tomczyńska
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere quam eget sodales. Aenean viverra felis sit amet velit finibus, nec dapibus ligula vestibulum. Sed pellentesque elit turpis, quis laoreet nisl mattis eget. Vivamus nunc nulla, ullamcorper non justo vel, vehicula gravida nisi. Curabitur dolor diam, feugiat eu erat sit amet, accumsan accumsan erat. Aliquam sed tortor eu est commodo efficitur. Duis suscipit at nisi quis facilisis.
            </div>
          </div>
        </div>
        <div className={styles.services}>
          
        </div>
      </div>
    </Layout>
  )
}
