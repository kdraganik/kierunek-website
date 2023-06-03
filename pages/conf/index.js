import Image from 'next/image'
import styles from '../../styles/conf/Main.module.scss'
import clouds from '../../images/clouds.png'

export default function Conf(){

    return(
        <div className={styles.container}>
            <div className={styles.bg}>             
                <Image
                    fill={true}
                    style={{objectFit: "cover"}}
                    src={clouds}
                    alt="chmury"
                />
            </div>
            <div className={styles.hero}>
                <div className={styles.title}>
                    OKRĘGOWA KONFERENCJA PRZEBUDZENIOWA
                </div>
                <div className={styles.logoBox}>
                    <Image
                        fill={true}
                        src="/logo_conf_white.svg" 
                        alt="logo konferencji"
                    />
                </div>
                <div className={styles.placeAndTime}>
                    <div className={styles.date}>15-16 IX 2023</div>
                    <div className={styles.line}></div>
                    <div className={styles.place}>Wrocław</div>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentBox}>
                    <p>Z ogromną radością zapraszamy na Okręgową Konferencję Przebudzeniową Kierunek Conf, która odbędzie się we Wrocławiu 15-16 września 2023 r. Jesteśmy poruszeni działaniem Ducha Świętego w naszych kościołach, regionie i kraju. Celem konferencji jest wspólne doświadczanie Bożej obecności w uwielbieniu, modlitwie i głoszonym Słowie Bożym.</p> 
                    
                    <p>Wizja konferencji zrodziła się w sercu ludzi poruszonych żywą obecnością Ducha Świętego oraz pragnieniem doświadczania Jego darów, dlatego podczas wszystkich spotkań stworzymy przestrzeń, aby Bóg mógł do nas mówić w proroczy sposób. Modląc się o ludzi, będziemy oczekiwać uzdrowienia, uwolnienia, cudów i manifestacji Ducha Świętego.</p>
                    
                    <p>Konferencja będzie składać się z trzech głównych spotkań (w piątek wieczór, sobotę rano i sobotę wieczorem) oraz sesji wykładowych o różnej tematyce do wyboru.</p>
                    
                    <div className={styles.speakersBox}>
                        Mówcami konferencji będą:
                        <div className={styles.speaker}>Mirosław i Ewa Szatkowscy</div>
                        <div className={styles.speaker}>Luke i Ania Greenwood</div>
                        <div className={styles.speaker}>Ronnie Kołodziejski</div>
                        <div className={styles.speaker}>Ryszard i Halina Krzywy</div>
                        <div className={styles.speaker}>Anna Nieżurawska</div>
                        <div className={styles.speaker}>Bartłomiej i Danuta Tomczyńscy</div>
                    </div>
                    
                    <p>Ze względu na ograniczoną ilość miejsc, obowiązywać będzie rejestracja. Udział w konferencji jest bezpłatny, a podczas sesji głównych zbierzemy pieniądze, które w całości przeznaczymy na rozwój i pracę trzech kościołów z naszego regionu. Konferencja odbędzie się w kościele Antiocha we Wrocławiu przy ul. Powstańców Śląskich 199.</p>
                    
                    <p>Zapraszamy całe rodziny! Podczas głównych spotkań odbędą się specjalne zajęcia dla dzieci w wieku 3-12 lat, natomiast jedna z sesji do wyboru będzie przeznaczona dla młodzieży od 13 roku życia.</p>
                    
                    <p>Specjalnie dla Pastorów przygotowaliśmy sesję dodatkową oraz darmowy obiad w sali kościoła Kierunek przy ul. Powstańców Śląskich 159.</p>

                    <div className={styles.moreBox}>
                        Zapisy i więcej informacji wkrótce
                    </div>
                </div>
            </div>
        </div>
    )
}