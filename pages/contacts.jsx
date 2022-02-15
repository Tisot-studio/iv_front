import styles from '../styles/ContactsPage.module.scss'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import axios from "axios"

import PageTitle from '../components/PageTitle/PageTitle'

export default function Contacts() {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(false)

    const navigation = useSelector((state)=> state.navigation)
    const { currentLanguage } = navigation

    // Animation
    const title_1 = useRef(null)
    const title_2 = useRef(null)
    const address = useRef(null)
    const formRef = useRef(null)


    useEffect(()=>{
        gsap.from(title_1.current, {opacity: 0, x: -100, delay: 2.3})
        gsap.from(title_2.current, {opacity: 0, x: -100, delay: 2.4})
        gsap.from(address.current, {opacity: 0, x: 100, delay: 2.5})
        gsap.from(formRef.current, {opacity: 0, x: 100, delay: 2.6})
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/follow', { email: email } )
        setMessage(true)
    }


    return (
        <div className={styles.contactsPage}>
        <Head>
            <title>Ilya Verano | Contacts </title>
            <meta name="description" content="Contacts" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.body} >
            <PageTitle en='CONTACTS' ru='КОНТАКТЫ' />
            <div className={styles.contentContainer}>
                <div className={styles.emailContainer}>
                    <div className={styles.titleContainer} ref={title_1}>
                        {currentLanguage === 'en' ? 'FOR BOOKING AND PROMOS' : 'ВЫСТУПЛЕНИЯ И ПРОМО'}:
                    </div>
                    <div className={styles.addressContainer} ref={address}>
                        info@ilyaverano.com
                    </div>
                </div>
                <div className={styles.subscribeContainer}>
                    <div className={styles.titleContainer} ref={title_2}>
                    {currentLanguage === 'en' ? 'SIGN UP FOR NEWS' : 'ПОДПИШИСЬ НА НОВОСТИ'}:
                    </div>

                        <form className={styles.formContainer} ref={formRef} onSubmit={submitHandler}>
                        {
                            message ? <div> Thank you for submit! </div> 
                                    : 
                                    <>
                                    <input 
                                        className={styles.input}
                                        type='email' 
                                        placeholder='Your email'
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        required
                                    />
                                    <button className={styles.button} type='submit' value='Submit Form'> SUBMIT </button>
                                    </>
                        }
                        </form>
                </div>
            </div>
        </main>
    </div>
    )
}
