import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { navReducer } from "./nav/reducer"
import { podcastReducer } from "./podcast/podcast.reducer"
import { playerReducer } from "./player/player.reducer"
import { tracksReducer } from './tracks/tracks.reducer'


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

const combineReducer = combineReducers({
    navigation: navReducer,
    podcast: podcastReducer,
    player: playerReducer,
    tracks: tracksReducer,
})


const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case 'SERVER_ACTION':
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };
    case 'CLIENT_ACTION':
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
      return combineReducer(state, action);
  }
};


const initStore = () => {
return createStore(reducer, bindMiddleware([thunkMiddleware]))
}


export const wrapper = createWrapper(initStore)






