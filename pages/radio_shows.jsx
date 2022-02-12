import styles from '../styles/RadioShows.module.scss'
import Head from 'next/head'
import RadioShCard from '../components/RadioShCard'
import { useSelector } from 'react-redux'
import PageTitle from '../components/PageTitle/PageTitle'

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
                <PageTitle en='RADIO SHOWS' ru='ПОДКАСТЫ' />
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
