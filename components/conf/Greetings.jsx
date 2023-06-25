import styles from "../../styles/conf/Rejstracja.module.scss"

export default function Greetings (){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header3}>Dziękujemy za rejstrację!</h2>
      <p className={styles.instruction}>Więcej informacji wkrótce prześlemy drogą mailową.</p>
    </div>
  )
}