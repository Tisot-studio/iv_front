import styles from '../styles/Nav.module.scss'
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gsap } from 'gsap';
import Menu from './Menu';
import { switchMenu } from '../redux/nav/actions';



export default function Nav() {

    const dispatch = useDispatch()

    const navigation = useSelector((state)=> state.navigation)
    const { menuOpen } = navigation

    // Menu Button Animation
    const topLine = useRef(null)
    const bottomLine = useRef(null)

    useEffect(()=>{

      if (menuOpen) {
        gsap.to(topLine.current, {rotation: 45, x: -0.5, y: 3, duration: 0.3})
        gsap.to(bottomLine.current, {rotation: -45, x: -0.5, y: -2.5, duration: 0.3})

      }
      else {
        gsap.to(topLine.current, {rotation: 0, x: 0, y: 0, duration: 0.3})
        gsap.to(bottomLine.current, {rotation: 0, x: 0, y: 0, duration: 0.3})
      }
    }, [menuOpen])

      

    return <nav className={styles.nav}>
            
            <div className={styles.logo} onClick={()=> menuOpen ? dispatch(switchMenu()) : null}>
              <Link href='/'> 
                  <a>
                    ILYA <br/> VERANO
                  </a> 
                </Link>   
            </div>

            <div className={styles.buttonsContainer}>
              <div className={styles.navButton} onClick={()=> dispatch(switchMenu())}> 
                <div className={`${styles.burgerLine} ${styles.topLine} `} ref={topLine}>  </div>
                <div className={`${styles.burgerLine} ${styles.bottomLine} `} ref={bottomLine}>  </div> 
              </div>
            </div>
            <Menu/>
          </nav>;


}
