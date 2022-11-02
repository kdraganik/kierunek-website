import Layout from '../components/global/Layout.jsx'
import GroupInfo from '../components/week/GroupInfo.jsx'
import Form from '../components/index/Form.jsx'
import SimpleImageSlider from 'react-simple-image-slider'
import styles from '../styles/Week.module.scss'
import { useState, useEffect } from 'react'

export default function Week() {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [groups, setGroups] = useState([])
  const [images, setImages] = useState([])

  const handleWindowResize = () => {
    let tempWidth = window.innerWidth * 0.8;
    let tempHeight = 9 / 16 * tempWidth;
    if( tempHeight > 0.7 * window.innerHeight){
      tempHeight = 0.7 * window.innerHeight
      tempWidth = 16 / 9 * tempHeight
    }
    setWidth(tempWidth)
    setHeight(tempHeight)
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    fetch('/api/info-grupy')
      .then(async response => {
          if (!response.ok) {
              const error = (data && data.message) || response.statusText;
              return Promise.reject(error);
          }
          const data = await response.json();
          setGroups(data.records)
      })
      .catch(error => {
          console.error(error);
      });
  }, [])

  useEffect(() => {
    fetch('/api/ogloszenia')
      .then(async response => {
          if (!response.ok) {
              const error = (data && data.message) || response.statusText;
              return Promise.reject(error);
          }
          const data = await response.json();
          console.log(data)
          setImages(data)
      })
      .catch(error => {
          console.error(error);
      });
  }, [])

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className={styles.sliderBox}>
            { 
              images.length > 0
              ?
              <SimpleImageSlider
                width={width}
                height={height}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={5.0}
              />
              :
              ""
            }
          </div>
          <div className={styles.arrowBox}>
            <div className={styles.text}>Spotkania i grupy domowe</div>
            <div className={styles.arrow}></div>
          </div>
        </div>
        <div className={styles.groups}>
        {
          groups 
          ?
          groups.map((group, i) => {
            return <GroupInfo group={group.fields} i={i} key={i} />
          })
          :
          ""
        }
        </div>
        <div className={styles.formBox}>
          <Form />
        </div>
      </div>
    </Layout>
  )
}
