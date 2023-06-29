import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/conf/Main.module.scss'
import bg from '../../images/confBG.jpg'
import clouds from '../../images/clouds.png'
import SpeakerCard from '../../components/conf/SpeakerCard'
import Ania from '../../images/Ania.jpg'
import Bartek from '../../images/BartekDanusia.jpg'
import Luke from '../../images/LukeAnia.jpg'
import Mirek from '../../images/MirosławEwa.jpg'
import Ronnie from '../../images/Ronnie.jpg'
import Ryszard from '../../images/RyszardHalina.jpg'

export default function Conf(){

    return(
        <div className={styles.container}>
            <div className={styles.bg}>
                <Image
                    fill={true}
                    style={{objectFit: "cover"}}
                    src={bg}
                    alt="bg"
                    quality={100}
                />
                <div className={styles.bgSlides}>
                    <Image
                        fill={true}
                        style={{objectFit: "cover"}}
                        src={clouds}
                        alt="chmury"
                        quality={10}
                    />
                    <Image
                        fill={true}
                        style={{objectFit: "cover"}}
                        src={clouds}
                        alt="chmury"
                        quality={10}
                    />
                </div>
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
                <Link href='/conf/rejestracja' className={styles.button}>
                    Rejestracja
                </Link>
                <a href="#content" className={styles.arrow}></a>
            </div>
            <div id="content" className={styles.contentWrapper}>
                <div className={styles.contentBox}>
                    <div className={styles.infoBox}>
                        <h2 className={`${styles.sectionTitle} ${styles.dateTitle}`}>Data</h2>
                        <h2 className={`${styles.sectionTitle} ${styles.placeTitle}`}>Miejsce</h2>
                        <h2 className={`${styles.sectionTitle} ${styles.priceTitle}`}>Cena</h2>
                        <div className={styles.card}>
                            <div><b>15-16 września 2023</b></div>
                            <div>(piątek - sobota)</div>
                        </div>
                        <div className={styles.card}>
                            <div><b>Wrocław</b></div>
                            <div>ul. Powstańców Śląskich 199</div>
                            <div>budynek kościoła „Antiochia”</div>
                        </div>
                        <div className={styles.card}>
                            <p>Udział w konferencji jest <b>bezpłatny</b>.</p>
                            <p>Wyżywienie i noclegi <br/><b>we własnym zakresie</b>.</p>
                        </div>
                        <div className={`${styles.card} ${styles.desc}`}>
                            <p>
                                Z ogromną radością zapraszamy na pierwszą Okręgową Konferencję Przebudzeniową Kierunek Conf! 
                            </p>
                            <p> 
                                Wizja konferencji zrodziła się w sercu ludzi poruszonych żywą obecnością Ducha Świętego oraz pragnieniem doświadczania Jego darów w naszych kościołach, regionie i kraju. 
                            </p>
                            <p>
                                Spotkajmy się, aby doświadczać Bożej obecności w uwielbieniu, modlitwie i głoszonym Słowie Bożym. Chcemy wspólnie oczekiwać na działanie Ducha Świętego. Będziemy modlić się o uzdrowienie i słowo prorocze dla każdego z nas.
                            </p>
                        </div>
                    </div>
                    <h2 class={styles.sectionTitle}>Mówcy</h2>
                    <div className={styles.speakersBox}>
                        <SpeakerCard
                            name="Ryszard i Halina Krzywy"
                            description="Zaangażowani są w działalność proroczą. Mają trójkę dzieci. Obecnie są członkami Kościoła Zielonoświątkowego w Nysie. Ryszard ukończył Wydział Medycyny Weterynaryjnej na Akademii Rolniczej we Wrocławiu oraz Zaoczne Seminarium Teologiczne w Ustroniu. Przez cztery lata pełnił funkcję pastora w zborze ZKE w Łambinowicach, a następnie w Prudniku w Kościele Zielonoświątkowym. Od 1996 r. wspólnie usługują w służbie proroczej w wielu kościołach w kraju i za granicą, a od kilkunastu lat organizują i prowadzą obozy prorocze."
                            img={Ryszard}
                        />
                        <SpeakerCard
                            name="Mirosław i Ewa Szatkowscy"
                            description="Autorzy książki o trwałości małżeńskiej pt. „Z jakich klocków zbudować ten dom”. Są małżeństwem od 37 lat, mają pięcioro dzieci i dziewięcioro wnucząt. Przez 25 lat wspólnie prowadzili wspólnotę Kościoła Zielonoświątkowego w Głogowie. Pastor Mirek jest absolwentem Seminarium Teologicznego w Ustroniu. Od października 2016 r. pełni funkcję Prezbitera Okręgowego okręgu zachodniego, równocześnie jest członkiem Rady Kościoła Zielonoświątkowego w Polsce."
                            img={Mirek}
                        />
                        {/* <SpeakerCard
                            name="Mariusz i Wioletta Antoszczuk"
                            description="Pastorzy Kościoła Zielonoświątkowego „Kanaan” w Namysłowie. Razem z synem Maciejem z pasją wspierają misję „King’s Kids”, która misyjnie działa wśród młodzieży. Mariusz i Wioletta to absolwenci Warszawskiego Seminarium Teologicznego. Prężnie pomagają liderom i wspólnotom odnaleźć ponadnaturalne działanie Ducha Świętego w codziennym życiu. Pastor Mariusz jest autorem największej monografii z zakresu pentekostalizmu na rynku polskim, zatytułowanej „Obdarowani”."
                        /> */}
                        <SpeakerCard
                            name="Bartek i Danusia Tomczyńscy"
                            description="Pełni pasji dla Boga Pastorzy Kościoła Kierunek. Są rodzicami czwórki dzieci. Bartek jest dyrektorem programowym Szkoły Biblijnego Uczniostwa, mówcą motywacyjnym, wykładowcą oraz działaczem społecznym. Danusia jest nauczycielką języka angielskiego, pedagogiem specjalnym, a także pracuje w Stowarzyszeniu Wrocławskie Forum Kobiet. Oboje przemawiają na różnych konferencjach i szkoleniach."
                            img={Bartek}
                        />
                        <SpeakerCard
                            name="Luke i Ania Greenwood "
                            description="Ewangeliści, mówcy i artyści. Razem z dwójką dzieci mieszkają we Wrocławiu, gdzie zaangażowani są w pracę Kościoła Kierunek. Luke jest dyrektorem organizacji misyjnej Steiger Europe. Napisał też książkę „Global Youth Culture”. Ania jest misjonarką Steigera od 2006 r. Założyła Fundację Steiger Polska, która dociera z ewangelią do młodego pokolenia w naszym kraju. Razem są wykładowcami Szkoły Misyjnej Stegiera, gdzie aktywnie angażują się w szkolenie zespołów misyjnych."
                            img={Luke}
                        />
                        <SpeakerCard
                            name="Ania Nieżurawska"
                            description="Wykładowca akademicki storytellingu i coachingu. Autorka programów szkoleniowych dotyczących storytellingu, coachingu, komunikacji interpersonalnej oraz pracy zespołowej. Z pasją podąża za Bogiem, czynnie zaangażowana jest w rozwój Społeczności Chrześcijańskiej Południe w Warszawie. Od ponad dekady prowadzi procesy indywidualne i grupowe, których celem jest wsparcie liderów lokalnych wspólnot w sztuce wystąpień publicznych, budowaniu i zarządzaniu zespołami oraz w rozwoju zawodowym i osobistym."
                            img={Ania}
                        />
                        <SpeakerCard
                            name="Ronnie Kołodziejski"
                            description="Pastor, kaznodzieja i misjonarz. W wieku 12 lat razem z rodzicami wyjechał na stałe z Polski do Kanady. Tam oddał swoje życie Bogu, założył rodzinę i został pastorem polonijnego kościoła w Calgary. W 2021 roku razem z żoną Sarą i dwójką dzieci na stałe wrócił do Polski, gdzie został pastorem pomocniczym w Społeczności Chrześcijańskiej we Wrocławiu. Zajmuje się pracą misyjną, regularnie wyjeżdża w najdalsze zakątki świata, by dzielić się ewangelią. Odwiedził już około 50 krajów na 6 kontynentach."
                            img={Ronnie}
                        />
                    </div>
                    
                    <h2 class={styles.sectionTitle}>Plan konferencji</h2>
                    <div className={styles.planBox}>
                        <h3 className={styles.dayHeader}>Piątek</h3>
                        <div className={styles.planItemBox}><div className={styles.planItemTitle}><span className={styles.time}>16:00</span>otwarcie rejestracji</div></div>

                        <div className={styles.planItemBox}>
                            <div className={styles.planItemTitle}><span className={styles.time}>18:00</span>sesja 1</div>
                            <div className={styles.planItemDesc}>
                                <div className={styles.descriptionItem}>Uwielbienie — zespół kościoła Kierunek</div>
                                <div className={styles.descriptionItem}>Wykład — Ronnie Kołodziejski</div>
                                <div className={styles.descriptionItem}>Czas modlitwy</div>
                            </div>
                        </div>

                        <h3 className={styles.dayHeader}>Sobota</h3>
                        <div className={styles.planItemBox}>
                            <div className={styles.planItemTitle}><span className={styles.time}>10:00</span>sesja 2</div>
                            <div className={styles.planItemDesc}>
                                <div className={styles.descriptionItem}>Uwielbienie — zespół kościoła Narody</div>
                                <div className={styles.descriptionItem}>Wykład — Luke Greenwood</div>
                                <div className={styles.descriptionItem}>Czas modlitwy</div>
                            </div>
                        </div>
                        
                        
                        <div className={styles.planItemBox}>
                            <div className={styles.planItemTitle}><span className={styles.time}>12:30 - 13:20</span>warsztaty / tura 1</div>
                            <div className={styles.planItemTitle}><span className={styles.time}>13:40 - 14:30</span>warsztaty / tura 2</div>
                            <div className={styles.planItemDesc}>
                                <div className={styles.descriptionItem}>Warsztaty do wyboru na obu turach:</div>
                                <div className={styles.descriptionItem}>Sztuka słuchania Boga (warsztat proroczy) — Ryszard Krzywy</div>
                                <div className={styles.descriptionItem}>Globalna kultura młodzieżowa (warsztat misyjno-młodzieżowy) — Ania Greenwood</div>
                                <div className={styles.descriptionItem}>Silne małżeństwo (warsztat duszpasterski) — Mirosław i Ewa Szatkowscy</div>
                            </div>
                        </div>
                        
                        
                        <div className={styles.planItemBox}>
                            <div className={styles.planItemTitle}><span className={styles.time}>17:00</span>sesja 3</div>
                            <div className={styles.planItemDesc}>
                                <div className={styles.descriptionItem}>Uwielbienie — zespół kościoła Kierunek</div>
                                <div className={styles.descriptionItem}>Wykład — Bartek i Danusia Tomczyńscy</div>
                                <div className={styles.descriptionItem}>Czas modlitwy</div>
                            </div>
                        </div>

                        <div className={styles.planItemBox}><div className={styles.planItemTitle}><span className={styles.time}>19:00</span>zakończenie</div></div>
                         
                    </div>

                    <Link href='/conf/rejestracja' className={styles.button}>
                        Rejestracja
                    </Link>
                </div>
            </div>
        </div>
    )
}