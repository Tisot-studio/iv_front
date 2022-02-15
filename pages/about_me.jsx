import styles from '../styles/AboutMe.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import PageTitle from '../components/PageTitle/PageTitle'


export default function AboutMe({data}) {

    const { bio_photo, bio_en, bio_ru } = data[0]

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
                        <Image src={bio_photo} width={600} height={800} />
                    </div>
                    <div className={styles.textContainer} ref={contentRef}>
                        { currentLanguage === 'en' ? bio_en : bio_ru }
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps() {

    const res = await fetch(`http://127.0.0.1:8000/api/main`)
    const data = await res.json()
  
    return { props: { data } }
  }