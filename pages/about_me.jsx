import styles from '../styles/AboutMe.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import PageTitle from '../components/PageTitle/PageTitle'

export default function AboutMe() {

    const navigation = useSelector((state)=> state.navigation)
    const { currentLanguage } = navigation


    // Animation
    const imageRef = useRef(null)
    const contentRef = useRef(null)



    useEffect(()=>{
        gsap.from(imageRef.current, {opacity: 0, y: 100, delay: 2.3, ease: Power2})
        gsap.from(contentRef.current, {opacity: 0, x: 100, delay: 2.4, ease: Power2})

    }, [])



    return (
        <div className={styles.aboutMePage}>
             <Head>
                <title>Ilya Verano | About Me</title>
                <meta name="description" content="About Me" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.body}>
                <PageTitle en='ABOUT ME' ru='БИОГРАФИЯ' />                
                <div className={styles.contentContainer} > 
                    <div className={styles.imageContainer} ref={imageRef}>
                        <Image src='/imgs/IMG_1006_web.jpg' width={600} height={800} />
                    </div>
                    <div className={styles.textContainer} ref={contentRef}>
                        {
                            currentLanguage === 'en' ? 
                        <p>
                            Ilya Verano was born and raised in Omsk. 
                            Passion for electronic music manifested himself in school and then grew into an 
                            interest in DJing. He quickly bursts into the local scene and becomes a resident 
                            of the best nightclubs in Omsk. 
                            Now Ilya is working on his own sound. His tracks combine deep bass, 
                            dynamic percussion, sensual synth, and sexy vocals. It's energy music for 
                            underground dance floors where people cast their demons out. His first release 
                            came out in 2020, on the British label ODTech Select. Leftwing: Kody supported 
                            this track on their live session on Instagram. Now signed two EPs on Suma Records 
                            and Paranoia Music Label, and a single on Pixelate (Material Series). Stay tuned!
                        </p> 
                        :
                        <p>
                            Илья Верано родился и вырос в Омске. Увлечение электронной музыкой проявилось еще в 
                            школе, а затем переросло в интерес к диджеингу. Он быстро врывается на местную сцену и 
                            становится резидентом лучших ночных клубов Омска. Сейчас Илья работает над собственным 
                            звуком. Его треки сочетают в себе глубокий бас, динамичную перкуссию, чувственный 
                            синтезатор и сексуальный вокал. Это энергетическая музыка для андеграундных танцполов, 
                            где люди изгоняют своих демонов. Его первый релиз вышел в 2020 году на британском лейбле 
                            ODTech Select. Leftwing: Коди поддержал этот трек во время их прямой трансляции в 
                            Instagram. Сейчас подписал два EP на Suma Records и Paranoia Music Label и сингл на 
                            Pixelate (Material Series). Быть в курсе!
                        </p>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}
