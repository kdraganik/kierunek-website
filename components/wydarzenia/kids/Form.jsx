import { useState } from "react"
import styles from "../../../styles/wydarzenia/Kids.module.scss"

export default function Form ({ setIsSend }){

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('');
  const [kidName, setKidName] = useState("")
  const [birthday, setBirthday] = useState("")
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true);
    setStatus('');
    const data = {
      kidName,
      birthday,
      parentName,
      phone,
      email
    }
    fetch("/api/wydarzenia-kids", {
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
      <form className={styles.formContainer} onSubmit={ handleSubmit }>
        <label htmlFor="dziecko" className={styles.label}>Imię i nazwisko dziecka</label>
        <input autoFocus required type="text" className={styles.textInput} id="dziecko" value={kidName} onChange={e => setKidName(e.target.value)}/>
        <label htmlFor="birthday" className={styles.label}>Data urodzenia dziecka</label>
        <input required type="date" max="2021-03-03" className={styles.textInput} id="birthday" value={birthday} onChange={e => setBirthday(e.target.value)}/>
        <label htmlFor="rodzic" className={styles.label}>Imię i nazwisko rodzica</label>
        <input required type="text" className={styles.textInput} id="rodzic" value={parentName} onChange={e => setParentName(e.target.value)}/>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="telefon" className={styles.label}>Numer telefonu</label>
        <input required type="tel" className={styles.textInput} id="telefon" value={phone} onChange={e => setPhone(e.target.value)}/>
        {status == 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
        {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Zapisz" />}
      </form>
    </div>
  )
}