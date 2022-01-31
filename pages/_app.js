import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import '../styles/globals.css'


import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Player from '../components/Player'

function MyApp({ Component, pageProps }) {
  return <div>
            <Provider store={store}>
              <Nav/>
              <Component {...pageProps} />
              <Footer/>
              <Player/>
            </Provider>
        </div>
}

export default MyApp
