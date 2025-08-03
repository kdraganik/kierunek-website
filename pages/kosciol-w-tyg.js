import Layout from '../components/global/Layout.jsx'
import GroupInfo from '../components/week/GroupInfo.jsx'
import Form from '../components/index/Form.jsx'
import SimpleImageSlider from 'react-simple-image-slider'
import styles from '../styles/Week.module.scss'
import { useState, useEffect } from 'react'

export default function Week({groups, images}) {

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

export async function getServerSideProps() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  
  let groups = [];
  let images = [];

  try {
    const responseGroups = await fetch("https://api.airtable.com/v0/appUYxhvagqok4gaI/Lista?sort%5B0%5D%5Bfield%5D=order", {
      headers: {
        Authorization: "Bearer " + apiKey
      }
    })
    
    if (responseGroups.ok) {
      const groupsData = await responseGroups.json()
      groups = groupsData.records || [];
    }
  } catch (error) {
    console.error('Error fetching groups:', error);
  }

  try {
    const responseImages = await fetch("https://api.airtable.com/v0/appmg4ln5REExPoSi/Lista?view=Grid%20view", {
      headers: {
        Authorization: "Bearer " + apiKey
      }
    })
    
    if (responseImages.ok) {
      const imagesData = await responseImages.json()
      if (imagesData.records && Array.isArray(imagesData.records)) {
        images = imagesData.records
          .filter(ele => ele.fields && ele.fields.slide && ele.fields.slide[0])
          .map(ele => { return {url: ele.fields.slide[0].url} })
      }
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }

  return {
    props: {
      groups,
      images
    }
  };
}