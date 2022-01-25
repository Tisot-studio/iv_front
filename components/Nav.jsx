import styles from '../styles/Nav.module.scss'
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import Menu from './Menu';

import { ruLanguage, enLanguage } from '../redux/nav/actions';


export default function Nav() {

  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch()


  return <nav className={styles.nav}>

          <div className={styles.logo} >
            <Link href='/'> 
                <a>
                  ILYA <br/> VERANO
                </a> 
              </Link>   
          </div>

          <div className={styles.buttonsContainer}>
            <div className={`${styles.navButton} `} onClick={()=> dispatch(ruLanguage())} > RU </div>
            <div className={`${styles.navButton} ${styles.currentLanguge}`} onClick={()=> dispatch(enLanguage())}> EN </div>
            <div className={styles.navButton} > Menu </div>
          </div>

          <Menu />

          

        </nav>;
}
