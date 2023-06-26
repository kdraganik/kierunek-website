import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/conf/Main.module.scss'
import clouds from '../../images/clouds.png'
import SpeakerCard from '../../components/conf/SpeakerCard'

export default function Conf(){

    return(
        <div className={styles.container}>
            <div className={styles.bg}>             
                <Image
                    fill={true}
                    style={{objectFit: "cover"}}
                    src={clouds}
                    alt="chmury"
                    quality={10}
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
                    
                    <p>Mówcami konferencji będą:</p>
                    <div className={styles.speakersBox}>
                        <SpeakerCard
                            name="Ryszard i Halina Krzywy"
                            description="Zaangażowani są w działalność proroczą. Są rodzicami trójki dzieci. Obecnie są członkami Kościoła Zielonoświątkowego w Nysie. Ryszard ukończył Wydział Medycyny Weterynaryjnej na Akademii Rolniczej we Wrocławiu oraz Zaoczne Seminarium Teologiczne w Ustroniu. Przez cztery lata pełnił funkcję pastora w zborze ZKE w Łambinowicach, a następnie w Prudniku w Kościele Zielonoświątkowym. Od 1996 r. roku w służbie proroczej – usługuje w wielu kościołach w kraju i za granicą, a od 2010 r. co roku prowadzi obóz proroczy."
                        />
                        <SpeakerCard
                            name="Mirosław i Ewa Szatkowscy"
                            description="Autorzy książki o trwałości małżeńskiej pt. „Z jakich klocków zbudować ten dom”. Są małżeństwem od 37 lat, mają 5 piątki dzieci i dziewięcioro wnucząt. Przez 25 lat wspólnie prowadzili wspólnotę Kościoła Zielonoświątkowego w Głogowie. Pastor Mirek jest absolwentem KSB Ustroń (obecna BST). Od października 2016 r. powierzono mu funkcję Prezbiter Okręgowego okręgu zachodniego, równocześnie jest człowiek Rady Kościoła."
                        />
                        {/* <SpeakerCard
                            name="Mariusz i Wioletta Antoszczuk"
                            description="Pastorzy Kościoła Zielonoświątkowego „Kanaan” w Namysłowie. Razem z synem Maciejem z pasją wspierają misję „King’s Kids”, która misyjnie działa wśród młodzieży. Mariusz i Wioletta to absolwenci Warszawskiego Seminarium Teologicznego. Prężnie pomagają liderom i wspólnotom odnaleźć ponadnaturalne działanie Ducha Świętego w codziennym życiu. Pastor Mariusz jest autorem największej monografii z zakresu pentekostalizmu na rynku polskim, zatytułowanej „Obdarowani”."
                        /> */}
                        <SpeakerCard
                            name="Bartek i Danusia Tomczyńscy"
                            description="Pełni pasji dla Boga Pastorzy Kościoła Kierunek. Są rodzicami czwórki dzieci. Bartek jest dyrektorem programowym Szkoły Biblijnego Uczniostwa, mówcą motywacyjnym, wykładowcą oraz działaczem społecznym. Danusia jest nauczycielką języka angielskiego, pedagogiem specjalnym, a także pracuje w Stowarzyszeniu Wrocławskie Forum Kobiet. Oboje przemawiają też na różnych konferencjach i szkoleniach."
                        />
                        <SpeakerCard
                            name="Luke i Ania Greenwood "
                            description="Ewangeliści, mówcy i artyści. Razem są wykładowcami Szkoły Misyjnej Stegiera, gdzie aktywnie angażują się w szkolenie zespołów misyjnych. Razem z dwójką dzieci mieszkają we Wrocławiu, gdzie zaangażowani są w pracę Kościoła Kierunek. Lukę jest dyrektorem organizacji Steiger Europe. Napisał też książkę „Global Youth Culture”. Ania założyła Fundację Steiger Polska. Jest misjonarką Steigera od 2006 r."
                        />
                        <SpeakerCard
                            name="Ania Nieżurawska"
                            description="Wykładowca akademicki storytellingu i coachingu. Autorka programów szkoleniowych dotyczących storytellingu, coachingu, komunikacji interpersonalnej oraz pracy zespołowej. Z pasją podąża za Bogiem, czynnie zaangażowana jest w rozwój Społeczności Chrześcijańskiej Południe w Warszawie. Od ponad dekady prowadzi procesy indywidualne i grupowe, których celem jest wsparcie liderów lokalnych wspólnot w sztuce wystąpień publicznych, budowaniu i zarządzaniu zespołami oraz w rozwoju zawodowym i osobistym."
                        />
                        <SpeakerCard
                            name="Ronnie Kołodziejski"
                            description="Pastor w Społeczności Chrześcijańskiej we Wrocławiu. W wieku 12 lat razem z rodzicami wyjechał na stałe do Kanady, gdzie oddał swoje życie Bogu, założył rodzinę i został pastorem. W 2021 roku razem z żoną Sarą i dwójką dzieci, na stałe wrócił do Polski. Zajmuje się pracą misyjną, głosił ewangelię na 6 kontynentach w około 50 krajach."
                        />
                    </div>
                    
                    <p>Ze względu na ograniczoną ilość miejsc, obowiązywać będzie rejestracja. Udział w konferencji jest bezpłatny, a podczas sesji głównych zbierzemy pieniądze, które w całości przeznaczymy na rozwój i pracę trzech kościołów z naszego regionu. Konferencja odbędzie się w kościele Antiocha we Wrocławiu przy ul. Powstańców Śląskich 199.</p>
                    
                    <p>Zapraszamy całe rodziny! Podczas głównych spotkań odbędą się specjalne zajęcia dla dzieci w wieku 3-12 lat, natomiast jedna z sesji do wyboru będzie przeznaczona dla młodzieży od 13 roku życia.</p>
                    
                    <p>Specjalnie dla Pastorów przygotowaliśmy sesję dodatkową oraz darmowy obiad w sali kościoła Kierunek przy ul. Powstańców Śląskich 159.</p>

                    <Link href='/conf/rejestracja' className={styles.button}>
                        Rejestracja
                    </Link>
                </div>
            </div>
        </div>
    )
}