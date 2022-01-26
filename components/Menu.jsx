import styles from '../styles/Menu.module.scss'
import Link from 'next/link'
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { switchMenu } from '../redux/nav/actions';

export default function Menu() {

    const dispatch = useDispatch()

    const navigation = useSelector((state)=> state.navigation)
    const { menuOpen } = navigation

    // Animation
    const menuItemAnim = useRef([])
    menuItemAnim.current = []

    const addToRefs = el => {
        if (!menuItemAnim.current.includes(el)) {
            menuItemAnim.current.push(el);
        }
    };

    useEffect(()=>{

        if(menuOpen) {
           menuItemAnim.current.forEach(el => gsap.to(el, {opacity: 1, delay: 1, duration: 1, y: -20}))
        }
        else {
            menuItemAnim.current.forEach(el => gsap.to(el, {opacity: 0, delay: 1, duration: 1, y: 20}))
        }

    }, [menuOpen])


  return <div className={`${ menuOpen ? styles.menuOpen : styles.menuClosed } `} >

                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} ref={addToRefs}>
                    <Link href='/about_me' >
                        <a>
                            ABOUT ME
                        </a>
                    </Link>   
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} ref={addToRefs}>
                    <Link href='/tracks'>
                        <a>
                        TRACKS
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} ref={addToRefs}>
                    <Link href='/radio_shows'>
                        <a>
                        RADIO SHOWS
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} ref={addToRefs}>
                    <Link href='/video'>
                        <a>
                        VIDEO
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} ref={addToRefs}>
                    <Link href='/contacts'>
                        <a>
                        CONTACTS
                        </a>
                    </Link> 
                </div>
            </div>
}
