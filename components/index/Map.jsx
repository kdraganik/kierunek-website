import { useState, useEffect } from "react";

export default function Map() {

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
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1568.2246868254629!2d17.01116804976333!3d51.0850864552755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5dd3e0c057362d0e!2zS2_Fm2Npw7PFgiBLaWVydW5law!5e0!3m2!1sen!2spl!4v1648722200266!5m2!1sen!2spl" 
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