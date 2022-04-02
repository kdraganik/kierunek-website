import styles from '../../styles/SectionDescription.module.scss'

export default function SectionDescription({name, header, content}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{name}</div>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  )
}