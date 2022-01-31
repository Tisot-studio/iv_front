export const addPodcast = (podcast)=> ({
    type: 'ADD_PODCAST',
    payload: podcast, 
})


export const stopPlay = ()=> ({
    type: 'STOP_PLAY',
})

export const startPlay = ()=> ({
    type: 'START_PLAY',
})