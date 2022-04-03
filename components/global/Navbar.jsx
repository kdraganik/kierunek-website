import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <navbar className={`${styles.navbar}`}>
      <Link href="/" passHref>
        <div className={styles.logoBox}>
          <Image layout='fill' src="/logo_black.svg" alt="logo"/>
        </div>
      </Link>
      <ul className={styles.links}>
        <li><Link href="/poznaj-nas">poznaj nas</Link></li>
        <li><Link href="/kosciol-w-tyg">kosciół w tygodniu</Link></li>
        <li><Link href="/kosciol-dzieciecy">kosciół dziecięcy</Link></li>
        <li><Link href="https://karty-modlitwy.kosciolkierunek.pl/">karty modlitwy</Link></li>
        <li><Link href="https://wspieram.kosciolkierunek.pl/">wsparcie</Link></li>
        <li><Link href="/#kontakt">kontakt</Link></li>
      </ul>
    </navbar>
  )
}