import styles from "../../styles/conf/Main.module.scss"

export default function SpeakerCard ({name, description}){

  return (
    <div className={styles.card}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.instruction}>{description}</p>
    </div>
  )
}