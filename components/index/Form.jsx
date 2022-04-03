import { useState } from 'react'
import styles from '../../styles/Form.module.scss'

export default function Form() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(message)
  }

  return(
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>Napisz do nas</div>
      <label htmlFor="imie" className={styles.label}>Imię</label>
      <input required type="text" className={styles.textInput} id="imie" value={name} onChange={e => setName(e.target.value)}/>
      <label htmlFor="email" className={styles.label}>Email</label>
      <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <label htmlFor="message" className={styles.label}>Wiadomość</label>
      <input required type="message" className={styles.textInput} id="message" value={message} onChange={e => setMessage(e.target.value)}/>
      <input className={styles.submit} type="submit" value="wyślij"/>
    </form>
  )
}