import { useState } from 'react'
import styles from '../../styles/Form.module.scss'

export default function Form() {

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('');
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    const data = {
      name,
      email, 
      message
    }
    fetch("/api/kontakt", {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res =>{
      if(res.ok){
        setIsLoading(false);
        setStatus('SUC')
        setTimeout(() => setStatus(""), 5000);
      }
      else{
        throw new Error("Bad request")
      }
    }).catch(err => {
      console.log(err);
      setIsLoading(false);
      setStatus('ERR')
    })
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
      {status == 'SUC' ? <div className={styles.success}>Dziękujemy za kontakt, wkrótce się odezwiemy!</div> : ""}
      {status == 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
      {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Wyślij" />}
    </form>
  )
}