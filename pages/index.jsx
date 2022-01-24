import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ilya Vearano | DJ and producer from Russia</title>
        <meta name="description" content="DJ and producer from Russia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.logoContainer}>
          <h1 className={`${styles.h1} ${styles.ilya}`}>ILYA</h1>
          <h1 className={`${styles.h1} ${styles.verano}`}>VERANO</h1>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.indexImage}>
            <Image src='/imgs/IMG_0962_web.jpg' width={600} height={400} />
          </div>
          <div className={styles.text}>
              DJ and <br/> producer <br/> from Russia
          </div>
          <div className={styles.textMobile}>
              DJ and  producer from Russia
          </div>
        </div>
      </main>
    </div>
  )
}
