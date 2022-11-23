import Layout from '../components/global/Layout.jsx'
import SimpleImageSlider from 'react-simple-image-slider'
import styles from '../styles/Info.module.scss'
import { useState, useEffect } from 'react'

export default function Info({images}) {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    const tempHeight = window.innerHeight
    const tempWidth = 16 / 9 * tempHeight
    setWidth(tempWidth)
    setHeight(tempHeight)
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className={styles.sliderBox}>
    { 
        images.length > 0
        ?
        <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={5.0}
        />
        :
        ""
    }
    </div>
  )
}

export async function getServerSideProps() {

    const apiKey = process.env.AIRTABLE_API_KEY;

    const response1 = await fetch("https://api.airtable.com/v0/appmg4ln5REExPoSi/Lista?maxRecords=3&view=Grid%20view", {
    headers: {
        Authorization: "Bearer " + apiKey
    }
    })
    const data1 = await response1.json()
    const images1 = data1.records.map(ele => { return {url: ele.fields.slide[0].url} })

    const response2 = await fetch("https://api.airtable.com/v0/appDdMOI2fKeW39Ka/Lista?maxRecords=3&view=Grid%20view", {
    headers: {
        Authorization: "Bearer " + apiKey
    }
    })
    const data2 = await response2.json()
    const images2 = data2.records.map(ele => { return {url: ele.fields.slide[0].url} })

    const images = [...images1, ...images2]

  return {
    props: {
      images
    }
  };
}