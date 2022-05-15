import { useState } from "react"
import styles from "../../styles/wyjazd-karlowice/Form.module.scss"

export default function Form ({ setIsSend }){

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('');
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true);
    setStatus('');
    const data = {
      name,
      phone,
      email
    }

    try{
      await postData(data);
      setIsLoading(false);
      setIsSend(true);
    }
    catch(err){
      console.log(err);
      setIsLoading(false);
      setStatus('ERR')
    } 
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.formContainer} onSubmit={ handleSubmit }>
        <label htmlFor="imie" className={styles.label}>Imię i nazwisko</label>
        <input autoFocus required type="text" className={styles.textInput} id="imie" value={name} onChange={e => setName(e.target.value)}/>
        <label htmlFor="telefon" className={styles.label}>Numer telefonu</label>
        <input required type="tel" className={styles.textInput} id="telefon" value={phone} onChange={e => setPhone(e.target.value)}/>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        {status == 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
        {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Zapisz" />}
      </form>
    </div>
  )
}

async function postData(data){
  try{
    const res = await fetch("/api/wyjazd-karlowice", {
      method: "POST",
      body: JSON.stringify(data)
    })
    console.log(res)
  }
  catch(err){
    setStatus('err');
  }
}