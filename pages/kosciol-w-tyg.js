import Layout from '../components/global/Layout.jsx'
import GroupInfo from '../components/week/GroupInfo.jsx'
import Form from '../components/index/Form.jsx'
import SimpleImageSlider from 'react-simple-image-slider'
import styles from '../styles/Week.module.scss'
import groups from '../data/groups'

const images = [
  { url: "/slide1.jpg" },
  { url: "/slide2.png" }
];

export default function Week() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className={styles.sliderBox}>
            <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              autoPlayDelay={5.0}
            />
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
