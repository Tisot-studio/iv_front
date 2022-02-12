import styles from '../styles/RadioShCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPodcast, stopPlay } from '../redux/player/player.actions';
import { gsap } from 'gsap'


export default function RadioShCard({show}) {

    const {podId, cover, header, episode, color, tracklist, description} = show

    const player = useSelector((state)=> state.player)
    const { playMusic, currentPodcast } = player

    const dispatch = useDispatch()

    const [tracklistView, setTracklistView] = useState(true)

    // Animation
    const imageRef = useRef(null)
    const descriptionRef = useRef(null)


    useEffect(()=>{
        gsap.from(imageRef.current, {opacity: 0, x: -100, delay: 2.3})
        gsap.from(descriptionRef.current, {opacity: 0, y: 100, delay: 2.4})
    }, [])

    
  return <div className={styles.container}>
            <div ref={imageRef} className={styles.imageContainer} style={ tracklistView ?  {backgroundImage: `url(${cover})`} : {background:`${color}`}}>

                <div className={styles.tracListContainer} style={{opacity: `${tracklistView ? 0 : 1}`}}>
                    <p dangerouslySetInnerHTML={{ __html: `${tracklist}` }}>
                    </p>

                </div>
                <div className={styles.vTlContainer}>
                    <p className={styles.vTlButton} onClick={()=> setTracklistView(!tracklistView)}> { tracklistView ? 'View Tracklist' : 'Hide Tracklist' }  </p>
                </div>
            </div>
            <div ref={descriptionRef} className={styles.descriptionContainer}>
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
