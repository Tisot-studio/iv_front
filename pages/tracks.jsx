import styles from '../styles/Tracks.module.scss'
import Head from 'next/head'
import TrackCard from '../components/TrackCard'
import PageTitle from '../components/PageTitle/PageTitle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { wrapper } from '../redux/store'
import { listTracks } from '../redux/tracks/tracks.actions'
import { useEffect } from 'react'

function Tracks({releases, listTracks} ) {


    useEffect(() => {
        listTracks()
    
      }, [])


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
                        releases.map((item, i) => {
                        return <TrackCard 
                                key={releases[i].id} 
                                cover={releases[i].cover} 
                                title={releases[i].title}
                                links={releases[i].links}
                                delay= {2.3 + i / 10}
                                />
                        })
                    }
                </div>
            </main>
        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
    store.dispatch(listTracks())
  })

  
const mapStateToProps = (state) => ({
    releases: state.tracks.tracks,
  })

  
const mapDispatchToProps = (dispatch) => {
    return {
      listTracks: bindActionCreators(listTracks, dispatch),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Tracks)