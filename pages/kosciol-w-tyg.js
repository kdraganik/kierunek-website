import Layout from '../components/global/Layout.jsx'
import GroupInfo from '../components/week/GroupInfo.jsx'
import Form from '../components/index/Form.jsx'
import SimpleImageSlider from 'react-simple-image-slider'
import styles from '../styles/Week.module.scss'
import groups from '../data/groups'
import { useState, useEffect } from 'react'

const images = [
  { url: "/slide1.png" },
  { url: "/slide2.png" }
];

export default function Week() {


  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

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


  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className={styles.sliderBox}>
            <SimpleImageSlider
              width={width}
              height={height}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              autoPlayDelay={5.0}
            />
          </div>
          <div className={styles.arrowBox}>
            <div className={styles.text}>Nasze grupy domowe</div>
            <div className={styles.arrow}></div>
          </div>
        </div>
        <div className={styles.groups}>
        {
          groups.map((group, i) => {
            return <GroupInfo group={group} i={i} key={i} />
          })
        }
        </div>
        <div className={styles.formBox}>
          <Form />
        </div>
      </div>
    </Layout>
  )
}
