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
    // Create array with React refs
    const menuItemAnim = useRef([])
    menuItemAnim.current = []

    const addToRefs = el => {
        if (!menuItemAnim.current.includes(el)) {
            menuItemAnim.current.push(el);
        }
    };

    useEffect(()=>{
        if(menuOpen === true) {
           menuItemAnim.current.forEach(el =>  gsap.to(el, {y: 0, delay: 0.5, duration: 0.7}))
        }
        else {
            menuItemAnim.current.forEach(el => gsap.to(el, { y: 100, delay: 0.4, duration: 0.7}))
        }
    }, [menuOpen])


  return <div className={`${ menuOpen ? styles.menuOpen : styles.menuClosed } `} >

                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} >
                    <Link href='/about_me' >
                        <a>
                           <p className={styles.a} ref={addToRefs}> ABOUT ME </p>
                           <div className={styles.underline} ref={addToRefs}></div> 
                        </a>
                    </Link>   
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} >
                    <Link href='/tracks' >
                        <a>
                            <p className={styles.a} ref={addToRefs}> TRACKS </p>
                            <div className={styles.underline} ref={addToRefs}></div>
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} >
                    <Link href='/radio_shows' >
                        <a>
                            <p className={styles.a} ref={addToRefs}> RADIO SHOWS </p>
                            <div className={styles.underline} ref={addToRefs}></div>
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} >
                    <Link href='/video' >
                        <a>
                            <p className={styles.a} ref={addToRefs}> VIDEO </p>
                            <div className={styles.underline} ref={addToRefs}></div>
                        </a>
                    </Link> 
                </div>
                <div className={styles.menuItem} onClick={()=> dispatch(switchMenu())} >
                    <Link href='/contacts' >
                        <a>
                            <p className={styles.a} ref={addToRefs}> CONTACTS </p>
                            <div className={styles.underline} ref={addToRefs}></div>
                        </a>
                    </Link> 
                </div>
            </div>
}
