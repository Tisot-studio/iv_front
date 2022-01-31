const INITIAL_STATE = {
    podcasts: [
        {
            podId: 1,
            cover: '/imgs/rShCovers/a-o-GfQEdpIkkuw-unsplash.jpg',
            header: 'VERANO PARTY',
            episode: '122',
            color: '#4E82B1',
            description: `Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Debitis atque laboriosam quo sequi. 
                        Ea neque voluptatibus laudantium, exercitationem delectus accusamus magni 
                        fuga necessitatibus sapiente, sunt beatae eum vitae sint? Harum.`,
            audio: '/audio/Ilya_Verano_VeranoParty_001.mp3'
        },
        {
            podId: 2,
            cover: '/imgs/rShCovers/adi-goldstein-Tmc0wu2kf-s-unsplash.jpg',
            header: 'VERANO PARTY',
            episode: '125',
            color: '#4EB164',
            description: `Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Debitis atque laboriosam quo sequi. 
                        Ea neque voluptatibus laudantium, exercitationem delectus accusamus magni 
                        fuga necessitatibus sapiente, sunt beatae eum vitae sint? Harum.`,
            audio: '/audio/Ilya_Verano_VeranoParty_002.mp3'
        },

    ],
    loading: true
}

export const podcastReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        // case productsActionTypes.PRODUCT_LIST_REQUEST:
        //     return {
        //         loading: true,
        //         products: []
        //     }
        // case productsActionTypes.PRODUCT_LIST_SUCCES:
        //     return {
        //         loading: false,
        //         products: action.payload
        //     }
        // case productsActionTypes.PRODUCT_LIST_FAIL:
        //     return {
        //         loading: false,
        //         error: action.payload
        //     }
            default:
                return state
    }
}