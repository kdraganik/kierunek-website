import styles from '../../styles/Placeholder.module.scss';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Placeholder(){
  return(
    <div className={styles.wrapper}>
      <div className={styles.logoBox}>
        <Image objectFit='contain' width={200} height={70} className={styles.logo} src="/logo_black.svg" alt="logo"/>
      </div>
      <div className={styles.animationBox}>
        <h1>Kochamy </h1>
        <Typewriter
          options={{
            strings: ['Boga', 'Ludzi', 'Życie'],
            autoStart: true,
            loop: true,
            pauseFor: 1200,
            cursor: "|"
          }}
        />
      </div>
      <div className={styles.message}>
        Storna dostępna wkrótce
      </div>
    </div>
  )
}