
const INITIAL_STATE = {
    currentLanguage: 'en'
}

export const languageReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type) {
        case 'RU':
            return{
                ...state,
                currentLanguage: 'ru' 
            }
        case 'EN':
            return{
                ...state,
                currentLanguage: 'en' 
            }
       
    default: return state
    }
}