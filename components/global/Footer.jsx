import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logoBox} href="/" passHref><Image className={styles.logo} src="/logo_white.svg" alt="logo"/></Link>
      <div className={styles.rightBox}>
        <div className={styles.icons}>
          <Link href="https://www.instagram.com/kosciolkierunek" passHref>
            <Image className={styles.icon} src="/ig-icon.svg" alt="ig-icon" />
          </Link>
          <Link href="https://www.facebook.com/kosciolkierunek" passHref>
            <Image className={styles.icon} src="/fb-icon.svg" alt="fb-icon" />
          </Link>
        </div>
        <ul className={styles.links}>
          <li><Link href="/poznaj-nas">poznaj nas</Link></li>
          <li><Link href="/kosciol-w-tyg">kosciół w tygodniu</Link></li>
          <li><Link href="/kosciol-dzieciecy">kosciół dziecięcy</Link></li>
          <li><Link href="https://karty-modlitwy.kosciolkierunek.pl/">kart modlitwy</Link></li>
          <li><Link href="https://wspieram.kosciolkierunek.pl/">wsparcie</Link></li>
        </ul>
      </div>
    </footer>
  )
}