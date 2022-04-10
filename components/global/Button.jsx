import Link from 'next/link'
import styles from '../../styles/Button.module.scss'

export default function Button({text, link, light}) {
  return (
    link ? 
    <Link href={link} passHref>
      <a>
        <div className={`${styles.wrapper} ${light ? styles.light : ""}`}>
          {text}
        </div>
      </a>
    </Link>
    :
    <div className={`${styles.wrapper} ${light ? styles.light : ""}`}>
      {text}
    </div>
  )
}