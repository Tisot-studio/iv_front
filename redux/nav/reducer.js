
const INITIAL_STATE = {
    currentLanguage: 'en',
    menuOpen: false
}

export const navReducer = (state=INITIAL_STATE, action)=>{
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
        case 'SWITCH_MENU':
            return{
                ...state,
                menuOpen: !state.menuOpen, 
            }
       
    default: return state
    }
}