import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'


export default function Home({data}) {

  const { main_photo } = data[0]

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
            <Image src={main_photo} width={750} height={1000} />
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