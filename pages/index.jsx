import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'

export default function Home() {

  const navigation = useSelector((state)=> state.navigation)
  const { currentLanguage } = navigation

  // Animation
  const imageRef = useRef(null)
  const logoRef = useRef(null)

  
  useEffect(()=>{
      gsap.from(imageRef.current, {opacity: 0, y: 100, delay:0.6, ease: Power2})
      gsap.from(logoRef.current, {opacity: 0, x: 100, delay:0.5, ease: Power2})

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Ilya Verano | DJ and producer from Russia</title>
        <meta name="description" content="DJ and producer from Russia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contentContainer}>
            <div className={styles.textAndLogoContainer}>
              <div className={styles.logo} ref={logoRef}>
                   <p> ILYA </p>  
                   <p> VERANO </p>  
              </div>
            </div>
          <div className={styles.indexImage} ref={imageRef}>
            <Image src='/imgs/IMG_0852_web.jpg' width={750} height={1000} />
          </div>
        </div>
      </main>
    </div>
  )
}
