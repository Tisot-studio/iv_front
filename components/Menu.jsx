import styles from '../styles/Menu.module.scss'
import Link from 'next/link'
import { gsap } from 'gsap';
import { useRef } from 'react';

export default function Menu() {

    // Animation
    const menuAnim = useRef(null)

    const anim = ()=> {
        gsap.to(menuAnim.current, {y: -1000, duration: 1})
        }

  return <div className={styles.menu} ref={menuAnim}>

                <div className={styles.menuItem} onClick={()=> anim()}>
                    <Link href='/about_me' >
                        <a>
                            ABOUT ME
                        </a>
                    </Link>   
                </div>
                <div className={styles.menuItem} onClick={()=> anim()}>
                    <Link href='/tracks'>
                        <a>
                        TRACKS
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> anim()}>
                    <Link href='/radio_shows'>
                        <a>
                        RADIO SHOWS
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> anim()}>
                    <Link href='/video'>
                        <a>
                        VIDEO
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> anim()}>
                    <Link href='/contacts'>
                        <a>
                        CONTACTS
                        </a>
                    </Link> 
                </div>
            </div>
}
