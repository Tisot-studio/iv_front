import styles from '../styles/RadioShows.module.scss'
import Head from 'next/head'
import RadioShCard from '../components/RadioShCard'
import PageTitle from '../components/PageTitle/PageTitle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { wrapper } from '../redux/store'
import { useEffect } from 'react'
import { listPodcasts } from '../redux/podcast/podcast.actions'


function RadioShows({podcasts, listPodcasts}) {


    useEffect(() => {
        listPodcasts()
    
      }, [])

  
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


export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
    store.dispatch(listPodcasts())
  })

  
const mapStateToProps = (state) => ({
    podcasts: state.podcast.podcasts,
  })

  
const mapDispatchToProps = (dispatch) => {
    return {
      listPodcasts: bindActionCreators(listPodcasts, dispatch),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(RadioShows)