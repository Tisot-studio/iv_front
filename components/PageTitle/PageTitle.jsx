import styles from './PageTitle.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'

export default function PageTitle({en, ru}) {

    const navigation = useSelector((state)=> state.navigation)
    const { currentLanguage } = navigation

    const head = useRef(null)

    useEffect(()=>{
        gsap.to(head.current, {scale: 1, y:0, delay: 2, ease: Power2})
    })


  return    <div className={styles.title} ref={head}> 
                    {currentLanguage === 'en' ? en : ru}
            </div>
}
