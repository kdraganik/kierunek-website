import styles from "../../styles/conf/Main.module.scss"

export default function SpeakerCard ({name, description}){

  return (
    <div className={styles.card}>
      <h3 className={styles.cardName}>{name}</h3>
      <p className={styles.instruction}>{description}</p>
    </div>
  )
}