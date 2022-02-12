import styles from '../styles/Tracks.module.scss'
import Head from 'next/head'
import TrackCard from '../components/TrackCard'
import PageTitle from '../components/PageTitle/PageTitle'


export default function Tracks() {

    const db = [
        {   
            id: 0,
            cover: '/imgs/covers/amazing_machine.jpg',
            title: 'Ilya Verano - Amazing Machine EP',
            links: {
                spotify: 'hi',
                beatport: 'hi',
                itunes: 'hi',
                soundcloud: 'hi'
            },
        },
        {   
            id: 1,
            cover: '/imgs/covers/bassline.jpg',
            title: 'Ilya Verano - Bassline (Original Mix)',
            links: {
                spotify: 'hi',
                beatport: 'hi',
                itunes: 'hi',
                soundcloud: 'hi'
            },
        },
        {   
            id: 2,
            cover: '/imgs/covers/keep_moving.jpg',
            title: 'Ilya Verano - Keep Moving EP',
            links: {
                spotify: 'hi',
                beatport: 'hi',
                itunes: 'hi',
                soundcloud: 'hi'
            },
        },
        {   
            id: 3,
            cover: '/imgs/covers/what_you_want.jpg',
            title: 'Ilya Verano - What You Want (Original Mix)',
            links: {
                spotify: 'hi',
                beatport: 'hi',
                itunes: 'hi',
                soundcloud: 'hi'
            },
        }
        
    ]


    return (
        <div className={styles.tracksPage}>
             <Head>
                <title>Ilya Verano | Tracks</title>
                <meta name="description" content="Tracks" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.body}>
                <PageTitle en='TRACKS' ru='ТРЕКИ' />
                <div className={styles.cardsContainer}>
                    {
                        db.map((item, i) => {
                        return <TrackCard 
                                key={db[i].id} 
                                cover={db[i].cover} 
                                title={db[i].title}
                                links={db[i].links}
                                delay= {2.3 + i / 10}
                                />
                        })
                    }
                </div>
                
               
            </main>
        </div>
    )
}
