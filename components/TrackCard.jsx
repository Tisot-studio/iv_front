import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faSoundcloud, faItunesNote} from '@fortawesome/free-brands-svg-icons' 
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/TrackCard.module.scss'
import Image from 'next/image';
import Link from 'next/link'


export default function TrackCard({cover, title, links}) {


  return <div className={styles.trackCard}>
            <div className={styles.imageContainer}>
                <Image src={cover} width={300} height={300} className={styles.imageCover} />
                {/* <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />
                </div> */}
            </div>
            <div className={styles.titleContainer}>
                <p className={styles.p}>
                    {title}
                </p>
            </div>
            <div className={styles.linksContainer}>
                <Link href={links.spotify}  > 
                    <a target='_blank' title='Listen on Spotify'>
                        <FontAwesomeIcon icon={faSpotify} className={styles.icon} />
                    </a>
                </Link>
                <Link href={links.beatport}  > 
                    <a target='_blank' className={`${styles.icon} `} title='Download from Beatport'>
                       <Image src='/imgs/logos/logo_beatport.svg' width={25} height={25} />
                    </a>
                </Link>
                <Link href={links.itunes}  > 
                    <a target='_blank' title='Listen on iTunes'>
                        <FontAwesomeIcon icon={faItunesNote} className={styles.icon} />
                    </a>
                </Link>
                <Link href={links.soundcloud}  > 
                    <a target='_blank' title='Listen on SoundCloud'>
                        <FontAwesomeIcon icon={faSoundcloud} className={styles.icon} />
                    </a>
                </Link>

            </div>
        </div>;
}
