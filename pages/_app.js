import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/globals.css'


import Footer from '../components/Footer'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return <div>
            <Nav/>
            <Component {...pageProps} />
            <Footer/>
        </div>
}

export default MyApp
