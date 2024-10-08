import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../../styles/Navbar.module.scss'

export default function Navbar({ light }) {

  const [width, setWidth] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <navbar className={`${styles.navbar}`}>

      <Link href="/" passHref>
        <div className={styles.logoBox}>
        <Image 
          height={50} 
          width={100}
          src={ light ? "/logo_white.svg" : "/logo_black.svg" } 
          alt="logo"
        />
        </div>
      </Link>
      <ul className={`${styles.links} ${light ? styles.light : ""} ${width >= 1024 ? "" : menuOpen ? "" : styles.hidden}`} onClick={()=>setMenuOpen(false)}>
        <div className={styles.close} />
        <Link href="/" passHref>
          <div className={styles.innerLogoBox}>
            <Image 
              height={100} 
              width={100} 
              src={ light ? "/logo_white.svg" : "/logo_black.svg" } 
              alt="logo"
            />
          </div>
        </Link>
        <li><Link href="/poznaj-nas">poznaj nas</Link></li>
        <li><Link href="/kosciol-w-tyg">kościół w tygodniu</Link></li>
        <li><Link href="/kosciol-dzieciecy">kościół dziecięcy</Link></li>
        <li><Link href="https://podcast.kosciolkierunek.pl">podcast</Link></li>
        <li><Link href="https://karty-modlitwy.kosciolkierunek.pl/">karty modlitwy</Link></li>
        <li><Link href="https://wspieram.kosciolkierunek.pl/">wsparcie</Link></li>
        {/* <li><Link href="/conf">conf</Link></li> */}
        <li><Link href="/#kontakt">kontakt</Link></li>
      </ul>
      <div className={`${styles.hamMenu} ${light ? styles.light : ""}`} onClick={()=>setMenuOpen(true)}/>
    </navbar>
  )
}