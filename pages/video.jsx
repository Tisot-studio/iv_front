import styles from '../styles/VideoPage.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'


export default function Video() {

    const navigation = useSelector((state)=> state.navigation)
    const { currentLanguage } = navigation

    const animVideoFrame = useRef(null)
    const animText = useRef(null)
    const head = useRef(null)

    useEffect(()=>{
        gsap.to(head.current, {scale: 1, y:0, delay: 2, ease: Power2})
        gsap.to(animVideoFrame.current, { opacity: 1, y: 0, delay: 2.3, ease: Power2})
        gsap.to(animText.current, {opacity: 1, x: 0, delay: 2.3, ease: Power2})
    }, [])


    return (
        <div className={styles.videoPage}>
            <Head>
                <title>Ilya Verano | Video </title>
                <meta name="description" content="Video" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.body} >
                <div className={styles.title} ref={head}> 
                    {currentLanguage === 'en' ? 'VIDEO' : 'ВИДЕО'}
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.frameContainer}>
                        <iframe className={styles.youTubeFrame} ref={animVideoFrame}  src="https://www.youtube.com/embed/SJUqRjuxgck" 
                                title="YouTube video player" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                <div className={styles.text} ref={animText}>
                    {currentLanguage === 'en' ? 'More videos on' : 'Больше видео на моем'}
                    <Link href='https://www.youtube.com/channel/UCFX7b718jrDeNGUb6bbW2og'>
                        <a className={styles.a} target='_blank'>
                            {currentLanguage === 'en' ? 'my YouTube chanel' : 'YouTube канале'}! 
                        </a>
                    </Link>
                </div>
                </div>
            </main>
        </div>
    )
}
