import { useState } from "react"
import styles from "../../styles/conf/Rejstracja.module.scss"

export default function Form ({ setIsSend }){

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('');
  const [forename, setForename] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true);
    setStatus('');
    const data = {
      forename,
      surname,
      email
    }
    fetch("/api/conf-rejstracja", {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res =>{
      if(res.ok){
        setIsLoading(false);
        setIsSend(true);
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

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header1}>Rejstracja</h1>
      <form className={styles.formContainer} onSubmit={ handleSubmit }>
        <label htmlFor="imie" className={styles.label}>Imię</label>
        <input autoFocus required type="text" className={styles.textInput} id="imie" value={forename} onChange={e => setForename(e.target.value)}/>
        <label htmlFor="nazwisko" className={styles.label}>Nazwisko</label>
        <input required type="tel" className={styles.textInput} id="nazwisko" value={surname} onChange={e => setSurname(e.target.value)}/>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        {status == 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
        {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Zapisz" />}
      </form>
    </div>
  )
}