// В этом файле сводятся все функции redux
import { combineReducers } from "redux";

import { navReducer } from "./nav/reducer";

const rootReducer = combineReducers({
    navigation: navReducer,
})




export default rootReducer;