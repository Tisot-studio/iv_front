import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// import { Provider } from 'react-redux'
// import { store } from '../redux/store'

import '../styles/globals.css'


import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Player from '../components/Player'
import { wrapper } from '../redux/store'


function MyApp({ Component, pageProps }) {
  return <div>
              <Nav/>
              <Component {...pageProps} />
              <Footer/>
              <Player/>
        </div>
}

export default wrapper.withRedux(MyApp)
