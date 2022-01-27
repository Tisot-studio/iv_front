import styles from '../styles/Tracks.module.scss'
import Head from 'next/head'


export default function Tracks() {
    return (
        <div className={styles.tracksPage}>
             <Head>
                <title>Ilya Vearano | Tracks</title>
                <meta name="description" content="Tracks" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.body}>
               
            </main>
        </div>
    )
}
