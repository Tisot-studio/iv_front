const INITIAL_STATE = {
    hidden: true,
    currentPodcast: [],
    playMusic: false,
}

export const playerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_PODCAST':
            return {
                currentPodcast: action.payload,
                playMusic: true,
                hidden: false,
            }
        case 'STOP_PLAY':
            return {
                ...state,
                playMusic: false,
                hidden: false,
            }
        case 'START_PLAY':
            return {
                ...state,
                playMusic: true,
                hidden: false,
            }
        default:
            return state
    }
}
