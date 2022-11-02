import styles from '../../styles/Popup.module.scss'

export default function Popup({children, setIsPopupVisible}) {
  return (
    <>
      <div onClick={()=>setIsPopupVisible(false)} className={styles.overlay}></div>
      <div className={styles.popup}>
        {children}
      </div>
    </>
  )
}