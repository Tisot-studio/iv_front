import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSelector } from 'react-redux'


export default function Home() {

  const navigation = useSelector((state)=> state.navigation)
  const { currentLanguage } = navigation

  return (
    <div className={styles.container}>
      <Head>
        <title>Ilya Vearano | DJ and producer from Russia</title>
        <meta name="description" content="DJ and producer from Russia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.logoContainer}>
          <h1 className={`${styles.h1} ${styles.ilya}`}> ILYA</h1>
          <h1 className={`${styles.h1} ${styles.verano}`}>VERANO</h1>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.indexImage}>
            <Image src='/imgs/IMG_0962_web.jpg' width={600} height={400} />
          </div>
          <div className={styles.text}>
            { currentLanguage === 'en' ? 
            <> DJ and <br/> producer <br/> from Russia </> 
            : 
            <> DJ и <br/> музыкант <br/> из России </> }
          </div>
          <div className={styles.textMobile}>
          { currentLanguage === 'en' ? 
            <> DJ and  producer from Russia </> 
            : 
            <> DJ и музыкант из России </> }
          </div>
        </div>
      </main>
    </div>
  )
}
