import styles from '../styles/Player.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faRedo, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import { useRef, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { stopPlay, startPlay } from '../redux/player/player.actions';

export default function Player() {

    const player = useSelector((state)=> state.player)
    const { currentPodcast, playMusic } = player
    const {podId, cover, header, episode, color, tracklist, description, audio} = currentPodcast

    const dispatch = useDispatch()

    const [playPodcast, setPlayPodcast] = useState(false)
    const [progressWidth, setProgressWidth] = useState(0)
    const [durationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)

    const [currentMinute, setCurrentMinute] = useState(0)
    const [currentSecond, setCurrentSecond] = useState(0)

    const podcast = useRef(null)
    const pb = useRef(null)

    // Buttons
    function playSong() {
        setPlayPodcast(true)
       podcast.current.play();
      }
      

    function pauseSong() {
        setPlayPodcast(false)
        podcast.current.pause();
      }


    function rewind(param) {
        podcast.current.currentTime += param;
    }

    useEffect(()=>{
        
        if (playMusic) {
            playSong()
        } 
        else {
            pauseSong()
        }

    })


    useEffect(()=>{
        podcast.current.ontimeupdate = (event)=> {
            const {currentTime, duration} = event.target
            setProgressWidth((currentTime / duration) * 100)
            
            // Current time
            setCurrentSecond(Math.floor(currentTime % 60))
            setCurrentMinute(Math.floor(currentTime / 60))
            
            // Time left
            setDurationSeconds(Math.floor(duration - currentTime) % 60)
            setDurationMinutes(Math.floor((duration - currentTime) / 60))
            
        }

    }, [podcast.current])






    function updateProgressBar(event) {
        let width = pb.current.clientWidth;
        let clickX = event.offsetX;
        const { duration } = podcast.current;
        podcast.current.currentTime = (clickX / width) * duration;
    }


    
  return <div className={styles.playerContainer} >
            <audio src={audio} ref={podcast}></audio>
            <div className={styles.buttonContainer}>
                <FontAwesomeIcon 
                    icon={ playPodcast === false? faPlayCircle : faPauseCircle} 
                    onClick={()=> (playPodcast === false? dispatch(startPlay()) : dispatch(stopPlay()))} 
                    />
            </div>
            <div className={styles.coverContainer}>
                
            </div>
            <div className={styles.titleContainer}>
                VERANO PARTY EPISODE {episode}
                
            </div>
            <div className={styles.rewindButtonsContainer}>
                <div className={styles.rewindButtonContainer}>
                    <FontAwesomeIcon icon={faUndo} onClick={()=> rewind(-30)}/>
                    <p className={styles.rewindTime}> 30s </p>
                </div>
                <div className={styles.rewindButtonContainer} onClick={()=> rewind(30)}>
                    <FontAwesomeIcon icon={faRedo} />
                    <p className={styles.rewindTime}> 30s </p>
                </div>
            </div>
            <div className={styles.progressBarContainer}  >
                <div className={styles.timeContainer}>
                    {currentMinute < 10? `0${currentMinute}` : currentMinute }:{ currentSecond < 10 ? `0${currentSecond}` : currentSecond}
                </div>
                <div className={styles.progressBarWraper} onClick={()=> updateProgressBar(event)} ref={pb}>
                    <div className={styles.circus} style={{marginLeft: `${progressWidth - 1.5}%`}}> </div> 
                    <div className={styles.progressBar} style={{width: `${progressWidth}%`}}> </div>
                </div>
                {
                    durationSeconds >= 0 ? 
                    <div className={styles.timeContainer}>
                    - {durationMinutes < 10 ? `0${durationMinutes}` : durationMinutes}:{durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}
                   </div>
                   :
                   null
                }
            </div>
            <div className={styles.volumeButtonContainer}>
                <FontAwesomeIcon icon={faVolumeUp} />
            </div>

        </div>;
}
