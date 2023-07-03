import { useState } from "react"
import styles from "../../styles/conf/Rejstracja.module.scss"
import Select from "react-select";

export default function Form ({ setIsSend }){

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('');
  const [forename, setForename] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [day, setDay] = useState("Pt + Sob")
  const [pastor, setPastor] = useState(0)

  const options1 = [
    { value: "Pt + Sob", label: "Cała konferencja — piątek i sobota" },
    { value: "Pt", label: "Tylko piątek" },
    { value: "Sob", label: "Tylko sobota" }
  ]

  const options2 = [
    { value: 0, label: "Nie" },
    { value: 1, label: "Tak" },
  ]

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontSize: "1.4em",
      color: state.isSelected ? "white" : "rgba(40,90,125,1)",
      backgroundColor: state.isSelected ?  "rgba(40,90,125,1)" : "white",
      "&:hover": {
        ...defaultStyles,
        fontSize: "1.4em",
        color: state.isSelected ? "white" : "rgba(40,90,125,1)",
        backgroundColor: state.isSelected ?  "rgba(40,90,125,.8)" : "rgba(40,90,125,.2)",
      }
    }),
    control: (defaultStyles, state) => ({
      ...defaultStyles,
      paddingTop: "2px",
      color: "white",
      backgroundColor: "none",
      border: "none",
      borderBottom: state.isFocused ? "2px solid white" : "1px solid white",
      borderRadius: "none",
      boxShadow: "none",
      outline: "none",
      "&:hover":{
        ...defaultStyles,
        paddingTop: "2px",
        color: "white",
        backgroundColor: "none",
        border: "none",
        borderBottom: state.isFocused ? "2px solid white" : "1px solid white",
        borderRadius: "none",
        boxShadow: "none",
        outline: "none",
      }
    }),
    singleValue: (defaultStyles) => ({ 
      ...defaultStyles,
      fontSize: "1.2em",
      color: "#fff",
    }),
    placeholder: (defaultStyles) => ({ 
      ...defaultStyles, 
      color: "#fff" 
    }),
    dropdownIndicator: (defaultStyles) => ({ 
      ...defaultStyles, 
      color: "#fff"
    }),
  }

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true);
    setStatus('');
    const data = {
      forename,
      surname,
      email,
      day,
      pastor
    }
    console.log(data)
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
      <h1 className={styles.header1}>Rejestracja</h1>
      <form className={styles.formContainer} onSubmit={ handleSubmit }>
        <label htmlFor="imie" className={styles.label}>Imię</label>
        <input autoFocus required type="text" className={styles.textInput} id="imie" value={forename} onChange={e => setForename(e.target.value)}/>
        <label htmlFor="nazwisko" className={styles.label}>Nazwisko</label>
        <input required type="text" className={styles.textInput} id="nazwisko" value={surname} onChange={e => setSurname(e.target.value)}/>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input required type="email" className={styles.textInput} id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="day" className={styles.label}>W jakie dni planujesz być na konferencji?</label>
        <Select id="day" name="day" required className={styles.select} options={options1} styles={customStyles} isClearable={false} isSearchable={false} components={{ IndicatorSeparator: () => null }} onChange={option => setDay(option.value)} placeholder="Wybierz opcję"/>
        <label htmlFor="pastor" className={styles.label}>Czy jesteś pastorem / żoną pastora?</label>
        <Select id="pastor" name="pastor" required className={styles.select} options={options2} styles={customStyles} isClearable={false} isSearchable={false} components={{ IndicatorSeparator: () => null }} onChange={option => setPastor(option.value)} placeholder="Wybierz opcję"/>
        {status == 'ERR' ? <div className={styles.error}>Wystąpił błąd, spróbuj ponownie</div> : ""}
        {isLoading ? <div className={styles.loader}><div></div><div></div><div></div><div></div></div> : <input type="submit" className={styles.submit} value="Zapisz" />}
      </form>
    </div>
  )
}