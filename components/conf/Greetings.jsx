import styles from "../../styles/conf/Rejstracja.module.scss"

export default function Greetings (){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Dziękujemy za rejestrację!</h2>
      <p className={styles.instruction}>Więcej informacji wkrótce prześlemy drogą mailową.</p>
    </div>
  )
}