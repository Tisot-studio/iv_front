import styles from '../styles/Player.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faRedo, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stopPlay, startPlay } from '../redux/player/player.actions';

export default function Player() {

    const podcast = useRef(null)
    const pb = useRef(null)

    const player = useSelector((state)=> state.player)
    const { currentPodcast, playMusic } = player
    const {podId, cover, header, episode, color, tracklist, description, audio} = currentPodcast

    const dispatch = useDispatch()

    // Progress Bar Settings
    const [progressWidth, setProgressWidth] = useState(0)

    const [durationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)

    const [currentMinute, setCurrentMinute] = useState(0)
    const [currentSecond, setCurrentSecond] = useState(0)

    // Volume Slider 
    const [volumeValue, setVolumeValue] = useState(0.5)

    if(podcast.current){
        podcast.current.volume = volumeValue
    }

    // Rewind Button
    function rewind(param) {
        podcast.current.currentTime += param;
    }


    useEffect(()=>{
        
        if (playMusic) {
            podcast.current.play()
        } 
        else {
            podcast.current.pause()
        }
    })


    useEffect(()=>{
        podcast.current.ontimeupdate = (event)=> {
            const {currentTime, duration} = event.target

            // Progress Bar Width
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


    function updateProgressBarOnDrag(event){
            podcast.current.currentTime += Math.floor(event.offsetX % 10);
    }

    
    return <div className={styles.playerContainer} >
                <audio src={audio} ref={podcast}></audio>
                <div className={styles.buttonContainer}>
                    <FontAwesomeIcon 
                        icon={!playMusic ? faPlayCircle : faPauseCircle} 
                        onClick={()=> (!playMusic ? dispatch(startPlay()) : dispatch(stopPlay()))} 
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
                    <div className={styles.progressBarWraper}
                        onClick={()=> updateProgressBar(event)} 
                        ref={pb} >
                        <div draggable
                        onDragStart={()=>dispatch(stopPlay())} 
                        onDrag={()=>updateProgressBarOnDrag(event)} 
                        onDragEnd={()=>dispatch(startPlay())}
                        className={styles.circus} 
                        style={{marginLeft: `${progressWidth - 1.5}%`}}> </div> 
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
                        
                        <div className={styles.volumeSliderContainer}>
                        <input className={styles.slider} 
                        type="range" 
                        min="0" 
                        max="1" 
                        value={volumeValue}
                        step='0.01'
                        onChange={(e)=>setVolumeValue(e.target.value)}
                        />
                        </div>
                        <FontAwesomeIcon icon={faVolumeUp} className={styles.volumeIcon}/>
                </div>
            </div>;
    }
