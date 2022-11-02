import { useState, useEffect } from "react";

export default function Map({url}) {

  const [size, setSize] = useState(0)

  const handleWindowResize = () => {
    if(window.innerWidth < 320){
      setSize(200)
    }
    else if(window.innerWidth < 480){
      setSize(250)
    }
    else if(window.innerWidth < 1024){
      setSize(350)
    }
    else{
      setSize(450)
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return(
    <iframe 
      src={url} 
      width={size}
      height={size} 
      style={
        {
          border: 0,
          display: "inline-block"
        }
      } 
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  )
}