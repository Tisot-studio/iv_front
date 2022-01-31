import styles from '../styles/RadioShows.module.scss'
import Head from 'next/head'
import RadioShCard from '../components/RadioShCard'
import { useSelector } from 'react-redux'


export default function RadioShows() {

    const podcast = useSelector((state)=> state.podcast)
    const { podcasts } = podcast

   
    return (
        <div className={styles.radioShowsPage}>
           <Head>
                <title>Ilya Verano | Radio Shows </title>
                <meta name="description" content="Radio Shows" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.body}>
                <div className={styles.title}> RADIO SHOWS </div>
                <div className={styles.cardsContainer}>

                    {
                        podcasts.map((show, i)=> {
                            return <RadioShCard key={podcasts[i].podId} show={podcasts[i]}/>
                        })
                    }
                    
                </div>
            </main>
        </div>
    )
}
