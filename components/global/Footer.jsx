import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" passHref>
        <div className={styles.logoBox}>
          <Image fill={true} className={styles.logo} src="/logo_white.svg" alt="logo"/>
        </div>
      </Link>
      <div className={styles.rightBox}>
        <div className={styles.icons}>
          <Link href="https://www.instagram.com/kosciolkierunek" passHref>
            <div className={styles.iconBox}>
              <Image fill={true} className={styles.icon} src="/ig-icon.svg" alt="ig-icon" />
            </div>
          </Link>
          <Link href="https://www.facebook.com/kosciolkierunek" passHref>
            <div className={styles.iconBox}>
              <Image fill={true} className={styles.icon} src="/fb-icon.svg" alt="fb-icon" />
            </div>
          </Link>
        </div>
        <ul className={styles.links}>
          <li><Link href="/poznaj-nas">poznaj nas</Link></li>
          <li><Link href="/kosciol-w-tyg">kosciół w tygodniu</Link></li>
          <li><Link href="/kosciol-dzieciecy">kosciół dziecięcy</Link></li>
          <li><Link href="https://podcast.kosciolkierunek.pl">podcast</Link></li>
          <li><Link href="https://karty-modlitwy.kosciolkierunek.pl/">karty modlitwy</Link></li>
          <li><Link href="https://wspieram.kosciolkierunek.pl/">wsparcie</Link></li>
        </ul>
      </div>
    </footer>
  )
}