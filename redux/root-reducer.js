// В этом файле сводятся все функции redux
import { combineReducers } from "redux";

import { navReducer } from "./nav/reducer";
import { podcastReducer } from "./podcast/podcast.reducer";
import { playerReducer } from "./player/player.reducer";

const rootReducer = combineReducers({
    navigation: navReducer,
    podcast: podcastReducer,
    player: playerReducer,
})




export default rootReducer;