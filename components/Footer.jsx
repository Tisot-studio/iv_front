import styles from '../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSpotify, faSoundcloud, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import Link from 'next/link';
import { useSelector } from 'react-redux';



export default function Footer() {


    const player = useSelector((state)=> state.player)
    const { hidden } = player


  return <footer className={styles.footer} style={hidden ? null : {transform: 'translateY(-50px)'}}>
            <div className={styles.container}>
                <div className="icons-wraper">
                    <Link href='https://www.facebook.com/ilyaverano'  > 
                        <a target='_blank'>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        </a>
                    </Link>
                    <Link href='https://open.spotify.com/artist/4ZXJN9bCzeucki6SjUzenV?si=AGnn88sETSakp8WvarEjTgs&nd=1'  > 
                        <a target='_blank'>
                        <FontAwesomeIcon icon={faSpotify} className={styles.icon} />
                        </a>
                    </Link>
                    <Link href='https://soundcloud.com/ilyaverano'  > 
                        <a target='_blank' className={styles.icon}>
                            <FontAwesomeIcon icon={faSoundcloud}  />
                        </a>
                    </Link>
                    <Link href='https://www.instagram.com/ilyaverano/'  > 
                        <a target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.container}>
                <p className={styles.created}> Created with 💖 by tisot_studio </p>
            </div>
        </footer>;
}
