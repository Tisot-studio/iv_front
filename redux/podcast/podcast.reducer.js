const INITIAL_STATE = {
    podcasts: [],
    loading: true
}


export const podcastReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'PODCASTS_LIST_REQUEST':
            return {
                loading: true,
                podcasts: []
            }
        case 'PODCASTS_LIST_SUCCES':
            return {
                loading: false,
                podcasts: action.payload
            }
        case 'PODCASTS_LIST_FAIL':
            return {
                loading: false,
                error: action.payload
            }
            default:
                return state
    }
}