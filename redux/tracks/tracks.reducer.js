const INITIAL_STATE = {
    tracks: [],
    loading: true
}


export const tracksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TRACKS_LIST_REQUEST':
            return {
                loading: true,
                tracks: []
            }
        case 'TRACKS_LIST_SUCCES':
            return {
                loading: false,
                tracks: action.payload
            }
        case 'TRACKS_LIST_FAIL':
            return {
                loading: false,
                error: action.payload
            }
            default:
                return state
    }
}

