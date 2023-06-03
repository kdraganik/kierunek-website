import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Map.module.scss"

export default function Map({url}) {
  const ref = useRef(null);
  const [size, setSize] = useState(0);
  useEffect(() => {
      setSize(ref.current.offsetWidth);
  }, []);

  return(
    <div className={styles.mapBox} ref={ref}>
      <iframe 
        src={url} 
        width={size}
        height={size - 50} 
        style={
          {
            border: 0,
            display: "inline-block"
          }
        } 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}