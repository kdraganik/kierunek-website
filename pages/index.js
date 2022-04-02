import Layout from '../components/global/Layout.jsx'
import Button from '../components/global/Button.jsx';
import Map from '../components/index/Map.jsx';
import Form from '../components/index/Form.jsx';
import SectionDescription from '../components/index/SectionDescription.jsx';
import styles from '../styles/Home.module.scss'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={`${styles.section} ${styles.startBanner}`}>
          <div className={styles.center}>
            <h1>Kochamy </h1>
            <Typewriter
              options={{
                strings: ['Boga', 'Ludzi', 'Życie'],
                autoStart: true,
                loop: true,
                pauseFor: 1200,
                cursor: "|"
              }}
            />
          </div>
          <div className={styles.sideLeftBottom}>Każda niedziela 11:00</div>
          <div className={styles.sideRightBottom}>Powstańców Śląskich 159, Wrocław</div>
        </div>
        <div className={`${styles.section} ${styles.credo}`}>
          <p>Wierzymy, że <span>miłość</span> polega na dawaniu tego co najlepsze. Robimy wszystko z pasją, dbając o jak najwyższą <span>jakość</span>.</p>
          <p>Tworzymy miejsce otwarte, w którym możesz <span>poczuć się jak w domu</span>. Wierzymy, że niemożliwe nie istnieje, a Boża dobroć nie zna granic. <span>Kochamy Wrocław</span>.</p>
          <Button text="więcej" link="/poznaj-nas" />
        </div>
        <div className={`${styles.section} ${styles.week}`}>
          <div className={styles.contentBox}>
            <SectionDescription
              name="kościół w tygodniu"
              header="Wydarzenia i grupy domowe"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere quam eget sodales. Aenean viverra felis sit amet velit finibus, nec dapibus ligula vestibulum. Sed pellentesque elit turpis, quis laoreet nisl mattis eget. Vivamus nunc nulla, ullamcorper non justo vel, vehicula gravida nisi. Curabitur dolor diam, feugiat eu erat sit amet, accumsan accumsan erat. Aliquam sed tortor eu est commodo efficitur. Duis suscipit at nisi quis facilisis."
            />
            <Button text="więcej" link="/kosciol-w-tyg"/>
          </div>
        </div>
        <div className={`${styles.section} ${styles.kids}`}>
          <div className={styles.contentBox}>
            <SectionDescription
              name="kościół dziecięcy"
              header="Kierunek kids"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere quam eget sodales. Aenean viverra felis sit amet velit finibus, nec dapibus ligula vestibulum. Sed pellentesque elit turpis, quis laoreet nisl mattis eget. Vivamus nunc nulla, ullamcorper non justo vel, vehicula gravida nisi. Curabitur dolor diam, feugiat eu erat sit amet, accumsan accumsan erat. Aliquam sed tortor eu est commodo efficitur. Duis suscipit at nisi quis facilisis."
            />
            <Button text="więcej" link="/kosciol-dzieciecy" />
          </div>
        </div>
        <div className={`${styles.section} ${styles.prayer}`}>
          <Button text="dziękuję za" link="https://karty-modlitwy.kosciolkierunek.pl/" />
          <div className={styles.contentBox}>
            <SectionDescription
              name="karty modlitwy"
              header="Potrzebujesz modlitwy?"
              content="Wierzymy, że Bóg słucha naszych modlitw. Chcemy modlić się o Ciebie. Daj nam znać o co możemy się z Tobą pomodlić i koniecznie napisz nam o wysłuchanej modlitwie - chcemy dziękować Bogu razem z Tobą."
            />
          </div>
          <Button text="proszę o" link="https://karty-modlitwy.kosciolkierunek.pl/" />
        </div>
        <div className={`${styles.section} ${styles.support}`}>
          <div className={styles.contentBox}>
            <SectionDescription
              name="wsparcie"
              header="Twoja pomoc"
              content="Dbamy o to, aby wszystko, co robimy miało jak najwyższą jakość. Jeżeli podobają Ci się nasze działania i chcesz mieć w nich realny udział, zachęcamy do wsparcia nas finansowo."
            />
            <Button text="wspieram" link="https://wspieram.kosciolkierunek.pl/" />
          </div>
        </div>
        <div className={`${styles.section} ${styles.social}`}>
          <div className={styles.top}>
            <div className={styles.contentBox}>
              <SectionDescription
                name="social media"
                header="Zobacz jak działamy"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere quam eget sodales. Aenean viverra felis sit amet velit finibus, nec dapibus ligula vestibulum. Sed pellentesque elit turpis, quis laoreet nisl mattis eget. Vivamus nunc nulla, ullamcorper non justo vel, vehicula gravida nisi. Curabitur dolor diam, feugiat eu erat sit amet, accumsan accumsan erat. Aliquam sed tortor eu est commodo efficitur. Duis suscipit at nisi quis facilisis."
              />
            </div>
            <div className={styles.links}>
              <Link href="https://www.facebook.com/kosciolkierunek" passHref><Image src="/fb-icon.svg" alt="fb" /></Link>
              <Link href="https://www.instagram.com/kosciolkierunek" passHref><Image src="/ig-icon.svg" alt="ig" /></Link>
            </div>
          </div>
          <div className={styles.bottom}>
            <Image src="/rect.png" alt="insta1"/>
            <Image src="/rect.png" alt="insta2"/>
            <Image src="/rect.png" alt="insta3"/>
          </div>
        </div>
        <div className={`${styles.section} ${styles.contact}`}>
          <div className={styles.top}>
            <div className={ styles.infoBox}>
              <div className={styles.contactBox}>
                <div className={styles.name}>kontakt</div>
                <div className={styles.header}>Odnajdź nas</div>
                <div className={styles.dateAndPlace}>
                  <span>Każda niedziela</span>
                  <span>11:00</span>
                  <span>ul. Powstańców Śląskich 159</span>
                </div>
              </div>
              <Button text="dojazd" link="https://goo.gl/maps/8kxWoqhoaG9Zgyx4A"/>
            </div>
            <Map/>
          </div>
          <div className={styles.bottom}>
            <div className={styles.header}>Napisz do nas</div>
            <Form />
          </div>
        </div>
        <div className={`${styles.section} ${styles.endBanner}`}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h1>Kochamy Boga</h1>
              <h1>Kochamy Ludzi</h1>
              <h1>Kochamy Życie</h1>
            </div>
            <Image className={styles.logo} src="/logo_white.svg" alt="logo"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
