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
          <div className={styles.bg}></div>
          <div className={styles.overlay}></div>
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
          <p>Wierzymy, że <span>miłość</span> polega na dawaniu tego co najlepsze. Robimy wszystko z pasją, dbając o jak najwyższą <span>jakość</span>.</p>
          <p>Tworzymy miejsce otwarte, w którym możesz <span>poczuć się jak w domu</span>. Wierzymy, że niemożliwe nie istnieje, a Boża dobroć nie zna granic. <span>Kochamy Wrocław</span>.</p>
          <Button text="więcej" link="/poznaj-nas" />
        </div>
        <div className={`${styles.section} ${styles.week}`}>
          <div className={styles.contentBox}>
            <SectionDescription
              name="kościół w tygodniu"
              header="Wydarzenia i grupy domowe"
              content="Wierzymy, że jesteśmy kościołem każdego dnia w tygodniu, nie tylko w niedzielę. Kościół tworzą ludzie, którzy w różny sposób wyrażają swoją wiarę. Dlatego w naszym kościele odbywają się różne aktywności. Zapraszamy - dowiedz się więcej o naszych grupach domowych i wydarzeniach. Na pewno znajdziesz coś dla siebie."
            />
            <Button text="więcej" link="/kosciol-w-tyg"/>
          </div>
        </div>
        <div className={`${styles.section} ${styles.kids}`}>
          <div className={styles.contentBox}>
            <SectionDescription
              name="kościół dziecięcy"
              header="Kierunek kids"
              content="Kościół Dziecięcy jest miejscem, w którym dzieci poznają Bożą miłość i uczą się budować relację z Bogiem. Znajdują tu bezpieczeństwo, dzięki czemu mogą czuć się wartościowe i ważne."
            />
            <Button text="więcej" link="/kosciol-dzieciecy" />
          </div>
        </div>
        <div className={`${styles.section} ${styles.prayer}`}>
          <Button text="dziękuję" link="https://karty-modlitwy.kosciolkierunek.pl/" light={true}/>
          <div className={styles.contentBox}>
            <SectionDescription
              name="karty modlitwy"
              header="Potrzebujesz modlitwy?"
              content="Chcemy modlić się o Ciebie. Wierzymy, że dla Boga wszystko jest możliwe. Daj nam znać, o co możemy się z Tobą pomodlić i koniecznie napisz nam o wysłuchanej modlitwie - chcemy dziękować Bogu razem z Tobą."
            />
          </div>
          <Button text="proszę" link="https://karty-modlitwy.kosciolkierunek.pl/" light={true}/>
        </div>
        <div className={`${styles.section} ${styles.support}`}>
          <div className={styles.contentBox}>
            <SectionDescription
              name="wsparcie"
              header="Twoja pomoc"
              content="Dbamy o to, aby wszystko, co robimy, miało jak najwyższą jakość. Jeżeli podobają Ci się nasze działania i chcesz mieć w nich realny udział, zachęcamy do wsparcia finansowego."
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
                content="Chcemy być blisko Ciebie, dlatego zapraszamy do śledzenia nas w social mediach. Zainspiruj się i bądź na bieżąco z tym, co się u nas dzieje."
              />
            </div>
            <div className={styles.links}>
              <Link href="https://www.facebook.com/kosciolkierunek" passHref>
                <div className={styles.imageBox}>
                  <Image layout="fill" src="/fb-icon.svg" alt="fb" />
                </div>
              </Link>
              <Link href="https://www.instagram.com/kosciolkierunek" passHref>
                <div className={styles.imageBox}>
                  <Image layout="fill" src="/ig-icon.svg" alt="ig" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="kontakt" className={`${styles.section} ${styles.contact}`}>
          <div className={styles.top}>
            <div className={ styles.infoBox}>
              <div className={styles.contactBox}>
                <div className={styles.name}>kontakt</div>
                <div className={styles.header}>Odnajdź nas</div>
                <div className={styles.dateAndPlace}>
                  <span>Każda niedziela</span>
                  <span>11:00</span>
                  <span>ul. Powstańców Śląskich 159 - lokal na 1 piętrze</span>
                </div>
              </div>
              <Button text="dojazd" link="https://goo.gl/maps/8kxWoqhoaG9Zgyx4A"/>
            </div>
            <Map/>
          </div>
          <div className={styles.bottom}>
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
            <div className={styles.imageBox}>
              <Image
                width={500}
                height={500}
                objectFit='contain'
                className={styles.logo} 
                src="/logo_white.svg" alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
