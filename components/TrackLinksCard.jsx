import styles from '../styles/TrackLinksCard.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function TrackLinksCard({cover, title, links}) {


  return <div className={styles.linksCard}>
            <Image src={cover} width={300} height={300} className={styles.trackCover}/>

            <h3 className={styles.title}> {title} </h3>

            <div className={styles.linksContainer}>

                <div className={styles.linkContainer}>
                        <Image src='/imgs/logos/spotify.svg' width={124} height={39.69}/>
                    <Link href={links.spotify}>
                        <a target="_blanck"> PLAY </a>
                    </Link>
                </div>

                <div className={styles.linkContainer}>
                    <Image src='/imgs/logos/beatport.svg' width={124} height={39.69}/>
                    <Link href={links.beatport}>
                        <a target="_blanck"> DOWNLOAD </a>
                    </Link>
                </div>

                <div className={styles.linkContainer}>
                    <Image src='/imgs/logos/applemusic.svg' width={124} height={39.69}/>
                    <Link href={links.itunes}>
                        <a target="_blanck"> PLAY </a>
                    </Link>
                </div>

                <div className={styles.linkContainer}>
                    <Image src='/imgs/logos/soundcloud.svg' width={124} height={39.69}/>
                    <Link href={links.soundcloud}>
                        <a target="_blanck"> PLAY </a>
                    </Link>
                </div>
            </div>
        </div>
    }
