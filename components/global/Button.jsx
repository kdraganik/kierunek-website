import Link from 'next/link'
import styles from '../../styles/Button.module.scss'

export default function Button({text, link}) {
  return (
    link ? 
    <Link href={link} passHref>
      <a>
        <div className={styles.wrapper}>
          {text}
        </div>
      </a>
    </Link>
    :
    <div className={styles.wrapper}>
      {text}
    </div>
  )
}