import styles from "../../styles/conf/Rejstracja.module.scss"
import Link from "next/link"

export default function Greetings (){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Dziękujemy za rejestrację!</h2>
      <p className={styles.instruction}>Więcej informacji wkrótce prześlemy drogą mailową.</p>
      <p className={styles.instruction}>Jeśli planujesz przyjechać na konferencje całą rodziną to zachęcamy do zarejestrowania dzieci na specjalnie przygotowane zajęcia.</p>
      <Link href='/conf/kids' className={styles.registryButton}>
          Rejestracja na zajęcia dla dzieci
      </Link>
    </div>
  )
}