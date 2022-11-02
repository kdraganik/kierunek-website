import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/GroupInfo.module.scss'
import Button from '../global/Button';
import Popup from '../global/Popup';
import Map from '../global/Map'

export default function GroupInfo({group, i}) {
  const { dzien, czas, info, miejsce, nazwa, opis, lider, lm, zdj, urlMapa, urlDojazd } = group;
  let [isPopupVisible, setIsPopupVisible] = useState(false);

  return(
    <>
      <div className={`${styles.groupBox} ${i % 2 ? styles.leftAlign : styles.rightAlign}`}>
        <div className={styles.headerBox}>
          <div className={styles.dayTimeBox}>
            <div className={styles.day}>
              {dzien}
            </div>
            <div className={styles.time}>
              {czas}
            </div>
          </div>
          <div className={styles.placeNameBox}>
            <h2 className={styles.name}>
              {nazwa}
            </h2>
            <div className={styles.place}>
              {miejsce}
            </div>
            {
              info
              ?
              <div className={styles.more}>
                ({info})
              </div>
              :
              ""
            }
          </div>
        </div>
        <p className={styles.description}>
          {opis}
        </p>
        <Button open={setIsPopupVisible} text="Więcej informacji" />
      </div>
      {isPopupVisible ? 
        <Popup setIsPopupVisible={setIsPopupVisible}>
          <div className={styles.popupBox}>
            <div className={styles.headerBox}>
              <div className={styles.dayTimeBox}>
                <div className={styles.day}>
                  {dzien}
                </div>
                <div className={styles.time}>
                  {czas}
                </div>
              </div>
              <div className={styles.placeNameBox}>
                <h2 className={styles.name}>
                  {nazwa}
                </h2>
                <div className={styles.place}>
                  {miejsce}
                </div>
              </div>
            </div>
            <div className={styles.leftBox}>
              <div className={styles.descriptionBox}>
                <h3>Opis</h3>
                <p className={styles.description}>
                  {opis}
                </p>
              </div>
              <div className={styles.leaderBox}>
                {
                  lm
                  ?
                  <h3>Liderzy</h3>
                  :
                  <h3>Lider</h3>
                }
                {
                  zdj
                  ?
                  <div className={styles.photoBox}>
                    <img className={styles.photo} src={zdj[0].url} />
                  </div>
                  :
                  ""
                }
                <p>{lider}</p>
              </div>
            </div>
            <div className={styles.rightBox}>
              <div className={styles.directionsBox}>
                <h3>Mapa</h3>
                <Map url={urlMapa}/>
                <Button text="dojazd" link={urlDojazd}/>
              </div>
            </div>
          </div>
        </Popup>
        :
        ""
      }
    </>
  )
}