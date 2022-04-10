import styles from '../../styles/SectionDescription.module.scss'

export default function SectionDescription({name, header, content, dark}) {
  return (
    <div className={` ${styles.wrapper} ${dark ? styles.dark : styles.light}`}>
      <div className={styles.name}>{name}</div>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  )
}