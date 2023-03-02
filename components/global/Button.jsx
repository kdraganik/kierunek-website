import Link from 'next/link'
import styles from '../../styles/Button.module.scss'

export default function Button({text, light, link, open}) {
  return (
    link ? 
    <Link href={link} passHref>
        <div className={`${styles.wrapper} ${light ? styles.light : ""}`}>
          {text}
        </div>
    </Link>
    :
    open ?
    <div onClick={()=>open(true)} className={`${styles.wrapper} ${light ? styles.light : ""}`}>
      {text}
    </div>
    :
    <div className={`${styles.wrapper} ${light ? styles.light : ""}`}>
      {text}
    </div>
  )
}