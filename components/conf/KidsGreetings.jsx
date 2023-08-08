import styles from "../../styles/conf/Rejstracja.module.scss"

export default function Greetings (){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Dziękujemy za rejestrację!</h2>
      <p className={styles.instruction}>Dzieci będą uczestniczyć w zajęciach w osobnej sali. Szczegóły prześlemy w mailu.</p>
    </div>
  )
}