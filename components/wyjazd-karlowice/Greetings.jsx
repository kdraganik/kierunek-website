import styles from "../../styles/wyjazd-karlowice/Greetings.module.scss"

export default function Greetings (){

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header3}>Dziękujemy za rejestrację!</h2>
      <p>Wkrótce prześlemy więcej informacji na maila.</p>
    </div>
  )
}