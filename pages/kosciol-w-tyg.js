import Layout from '../components/global/Layout.jsx'
import GroupInfo from '../components/week/GroupInfo.jsx'
import styles from '../styles/Week.module.scss'
import groups from '../data/groups'

export default function Week() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          
        </div>
        <div className={styles.groups}>
        {
          groups.map((group, i) => {
            return <GroupInfo group={group} i={i} key={i} />
          })
        }
        </div>
      </div>
    </Layout>
  )
}
