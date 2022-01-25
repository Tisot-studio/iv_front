// В этом файле сводятся все функции redux
import { combineReducers } from "redux";

import { languageReducer } from "./nav/reducer";

const rootReducer = combineReducers({
    language: languageReducer,
})




export default rootReducer;