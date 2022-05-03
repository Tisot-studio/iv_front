import styles from '../styles/Player.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faRedo, faVolumeUp, faPlayCircle, faPauseCircle, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stopPlay, startPlay } from '../redux/player/player.actions';

export default function Player() {

    // Запуск и остановка воспроизведения через пробел
    // document.addEventListener('keydown', function(event){
	// 	console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
       
    // })

    const podcast = useRef(null)
    const pb = useRef(null)

    const player = useSelector((state)=> state.player)
    const { currentPodcast, playMusic, hidden } = player
    const {cover, header, episode, color, audio} = currentPodcast

    const dispatch = useDispatch()

    const [openMobilePlayer, setOpenMobilePlayer] = useState(false)

    // Progress Bar Settings
    const [progressWidth, setProgressWidth] = useState(0)

    const [durationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)

    const [currentMinute, setCurrentMinute] = useState(0)
    const [currentSecond, setCurrentSecond] = useState(0)

    // Volume Slider 
    const [volumeValue, setVolumeValue] = useState(0.3);

    let isMove = false;

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
    }, [podcast.current]);

    // функция перемотки песни с помощью курсора
    function scurb(e) {
        const newCurrentTime = ((e.clientX - pb.current.getBoundingClientRect().left) / pb.current.offsetWidth ) * podcast.current.duration;
        podcast.current.currentTime = newCurrentTime;
  }
    
    return <>
        <div className={`${styles.progressBarMobileWraper} ${ hidden ? styles.hiddenPlayer : null}`}>
            <div className={styles.progressBar} 
            style={{width: `${progressWidth}%`, 
                    background: `${color}`,
                    }}> </div>
        </div>
        <div className={`${styles.playerContainer} ${ hidden ? styles.hiddenPlayer : null}`}>

                    {/* Podcast */}
                    <audio src={audio} ref={podcast} preload="auto"></audio>

                    <div className={styles.buttonContainer}>
                        <FontAwesomeIcon 
                            icon={!playMusic ? faPlayCircle : faPauseCircle} 
                            onClick={()=> (!playMusic ? dispatch(startPlay()) : dispatch(stopPlay()))}
                            />
                    </div>
                    <div className={styles.coverContainer} style={{backgroundImage: `url('${cover}')`}}> </div>
                    <div className={styles.titleContainer}>
                        {header} EPISODE {episode}
                        
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

                    {/*  */}
                    <div className={styles.progressBarContainer}>
                        <div className={styles.timeContainer}>
                            {currentMinute < 10? `0${currentMinute}` : currentMinute }:{ currentSecond < 10 ? `0${currentSecond}` : currentSecond}
                        </div>

                        {/* Progress Bar */}
                        <div className={styles.progressBarWraper} 
                            onPointerDown={e => {
                                scurb(e);
                                isMove = true;
                            }}

                            onPointerMove={e => {
                                if (isMove) {
                                    scurb(e); 
                                }
                            }}
                            onPointerUp={() => {
                                isMove = false;
                            }}
                        ref={openMobilePlayer ? null : pb}>
                            <div className={styles.progressBar} 
                                style={{width: `${progressWidth}%`, background: `${color}`}}> 
                            </div>
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
                    <FontAwesomeIcon icon={faChevronUp} className={styles.arrowUp} onClick={()=> setOpenMobilePlayer(true)}/> 
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
                    <div className={openMobilePlayer ? styles.mobilePopUpOpen : styles.mobilePopUpClosed}>
                        <div className={styles.arrowDownContainer}>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.arrowDownIcon} onClick={()=> setOpenMobilePlayer(false)}/>
                        </div>
                        <div className={styles.mobCoverContainer}>
                            <div className={styles.mobCover} style={{backgroundImage: `url('${cover}')`}}> </div>
                        </div>
                        <div className={styles.mobProgressBarContainer}>
                            <div className={styles.mobProgressBarContainer}  >
                                <div className={styles.mobTimeContainer}>
                                    {currentMinute < 10? `0${currentMinute}` : currentMinute }:{ currentSecond < 10 ? `0${currentSecond}` : currentSecond}
                                </div>
                                <div className={styles.mobProgressBarWraper} 
                                    onPointerDown={e => {
                                        scurb(e);
                                        isMove = true;
                                    }}
        
                                    onPointerMove={e => {
                                        if (isMove) {
                                            scurb(e); 
                                        }
                                    }}
                                    onPointerUp={() => {
                                        isMove = false;
                                    }}
                                ref={openMobilePlayer ? pb : null} >
                                    <div className={styles.mobProgressBar} style={{width: `${progressWidth}%`, background: `${color}`}}> </div>
                                </div>
                                {
                                    durationSeconds >= 0 ? 
                                    <div className={styles.mobTimeContainer}>
                                    - {durationMinutes < 10 ? `0${durationMinutes}` : durationMinutes}:{durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}
                                </div>
                                :
                                null
                                }
                            </div>

                        </div>
                        <div className={styles.mobTitleContainer}>
                            {header} EPISODE {episode}
                        </div>

                        <div className={styles.mobButtonsContainer}>
                        <div className={styles.mobRewindButtonContainer}>
                            <FontAwesomeIcon icon={faUndo} onClick={()=> rewind(-30)}/>
                            <p className={styles.mobRewindTime}> 30s </p>
                        </div>

                        <div className={styles.mobButtonContainer}>
                        <FontAwesomeIcon 
                            icon={!playMusic ? faPlayCircle : faPauseCircle} 
                            onClick={()=> (!playMusic ? dispatch(startPlay()) : dispatch(stopPlay()))}
                            />
                        </div>

                        <div className={styles.mobRewindButtonContainer} onClick={()=> rewind(30)}>
                            <FontAwesomeIcon icon={faRedo} />
                            <p className={styles.mobRewindTime}> 30s </p>
                        </div>
                            
                        </div>

                    </div>
                </div>
            </>
    }
