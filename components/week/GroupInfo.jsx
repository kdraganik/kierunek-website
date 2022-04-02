import styles from '../../styles/GroupInfo.module.scss'

export default function GroupInfo({group, i}) {

  const { time, place, name, description } = group;

  return(
    <div className={`${styles.groupBox} ${i % 2 ? styles.left : styles.right}`}>
      <div className={styles.time}>
        {time}
      </div>
      <div className={styles.place}>
        {place}
      </div>
      <h2 className={styles.name}>
        {name}
      </h2>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  )
}