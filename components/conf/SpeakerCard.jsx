import styles from "../../styles/conf/Main.module.scss"
import Image from "next/image"

export default function SpeakerCard ({name, description, img}){

  return (
    <div className={styles.card}>
      <div className={styles.cardPhoto}>
        <Image
            width={256}
            height={256}
            src={img}
            alt={`${name} zdjęcie`}
            quality={50}
        />
      </div>
      <h3 className={styles.cardName}>{name}</h3>
      <p className={styles.instruction}>{description}</p>
    </div>
  )
}