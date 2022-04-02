import Layout from '../components/global/Layout.jsx'
import Image from 'next/image'
import styles from '../styles/Kids.module.scss'

export default function Kids() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <Image src="/logo_kids.svg" alt="logo_kids"/>
        </div>
        <div className={styles.info}>
          <h2 className={styles.header}>Wizja i cel kościoła dziecięcego</h2>
          <p className={styles.description}>
            Kościół Dziecięcy jest miejscem, w którym dzieci znajdują bezpieczeństwo dzięki któremu mogą czuć się wartościowe i ważne, poznają Bożą miłość i uczą się jak budować relację z Bogiem i uczą się jak ta relacja wpływa na nasze życie.
          </p>
          <p className={styles.description}>
            Kościół Dziecięcy ma trafić i mieć w opiece wszystkie dzieci bez względu na wiek, ale również ma być świadectwem i przykładem Bożej miłości i wspaniałości dla rodziców tych dzieci.
          </p>
          <p className={styles.description}>
            Skupiamy się na budowaniu Bożych wartości w dzieciach, na przekazywaniu im prawd o tym, jaką osobą jest Bóg i na ugruntowaniu dzieci w Bożej miłości, tak aby wiedziały, że Bóg jest naszym Ojcem i zastąpi nam wszystkie ziemskie rzeczy, ale również kładziemy mocny nacisk na naukę rozmowy z Bogiem, czyli jak się modlić oraz na Jego uwielbienie, a także wdzięczność, która musi iść w parze ze wszelkimi prośbami.
          </p>
          <p className={styles.description}>
            Chcemy, by Kościół Dziecięcy był otwarty na dzieci, które chodzą do naszego Kościoła, ale również na dzieci, które Boga jeszcze nie znają – Kościół Dziecięcy ma za zadanie przyciągać swoją pozytywną postawą dzieci z zewnątrz, które jeszcze nie wiedzą, jak wspaniały jest Bóg i jak bardzo wszystkich nas kocha. Kościół Dziecięcy ma za zadanie budować podstawy wiary i fundamenty wiary adekwatnie do ich wieku i przyswajania informacji.
          </p>
          <p className={styles.description}>
            Wierzymy, że ugruntowywanie dzieci w Bożych wartościach, uświadamianie dzieci jak wielką miłością są obdarowywane, oraz że są kochane bezwarunkowo, są pierwszymi krokami do tego, by dzieci mogły rozpocząć swoją wspaniałą drogę z Bogiem i by mogły zostać wypuszczone z Kościoła Dziecięcego w nastoletnie, a potem dorosłe życie z poczuciem, że z pomocą Boga mogą w życiu osiągnąć wszystko, ale to, co podoba się Bogu
          </p>
        </div>
      </div>
    </Layout>
  )
}
