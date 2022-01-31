import styles from '../styles/RadioShCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPodcast, stopPlay } from '../redux/player/player.actions';



export default function RadioShCard({show}) {

    const {podId, cover, header, episode, color, tracklist, description} = show

    const player = useSelector((state)=> state.player)
    const { playMusic, currentPodcast } = player

    const dispatch = useDispatch()

    useEffect(()=>{


    }, [dispatch])

    const [myOpacity, setMyOpacity] = useState(true)

    function myF(){
            setMyOpacity(!myOpacity)
    }



  return <div className={styles.container}>
            <div className={styles.imageContainer} style={{backgroundImage: `url(${cover})`}}>

                <div className={styles.tracListContainer} style={{opacity: `${myOpacity === true ? 0 : 1}`}}>
                    <p>
                        {tracklist}
                    </p>

                </div>
                <div className={styles.vTlContainer}>
                    <p className={styles.vTlButton} onClick={()=> myF()}> View Tracklist </p>
                </div>
                <div className={styles.blur}> </div>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.headersContainer}>
                    <p className={styles.title1}> {header} </p>
                    <p className={styles.title2} style={{color: `${color}`}}> EPISODE {episode} </p>
                </div>
                <div className={styles.playButtonContainer}>
                    {
                       currentPodcast.podId === podId ? 
                        playMusic === true ? 
                        <>
                        <div> <FontAwesomeIcon icon={faPauseCircle} className={styles.playIcon} onClick={()=> dispatch(stopPlay())}/> </div> 
                        <p className={styles.play}> STOP </p>
                        </> :
                        <>
                        <div> <FontAwesomeIcon icon={faPlayCircle} className={styles.playIcon} onClick={()=> dispatch(addPodcast(show))}/> </div> 
                        <p className={styles.play}> PLAY </p>
                        </>
                        :  
                        <>
                        <div> <FontAwesomeIcon icon={faPlayCircle} className={styles.playIcon} onClick={()=> dispatch(addPodcast(show))}/> </div> 
                        <p className={styles.play}> PLAY </p>
                        </>
                    }
                </div>
                <div className={styles.textContainer}>
                    <p>
                        {description}
                    </p>
                
                </div>
            </div>

        </div>;
}
