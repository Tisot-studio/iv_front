const INITIAL_STATE = {
    podcasts: [
        {
            podId: 1,
            cover: '/imgs/rShCovers/a-o-GfQEdpIkkuw-unsplash.jpg',
            header: 'VERANO PARTY',
            episode: '122',
            color: '#4E82B1',
            tracklist: `    01. Friend Within - The Truth  [Toolroom] <br/>
                            02. Agua Sin Gas, Antoine Clamaran - Maghic [Casa Rossa] <br/>
                            03. Weiss UK - Feel My Needs (Gorgon City Extended Mix) [Toolroom] <br/>
                            04. Illyus & Barrientos - Scream [DFTD] <br/>
                            05. David Penn - Nobody (Club Mix) [Defected] <br/>
                            06. Mendo - I Need It [ElRow Music] <br/>
                            07. Yvan Genkins - Party [Cajual] <br/>
                            08. Gene Farris, Erick Morillo, Jamie Jones - Medication feat. Gene Farris (Prok & Fitch Extended Remix) [Subliminal] <br/>
                            09. Harry Romero - Frequency [Knee Deep In Sound] <br/>
                            10. Huxley - Work feat. Ron Carroll [Armada Subjekt] <br/>
                            11. Jack Back - (It Happens) Sometimes [Defected] <br/>
                            12. Pirupa Ft. Mr V - We Must Be (The Piano Track) (Vocal Mix) [Crosstown Rebels] <br/>
                            13. Cozzy D - The Upside Down (Mark Knight Extended Mix) [ABODE Records] <br/>
                            14. Dusky - Amongst The Gods [17 Steps] <br/>
                            15. Eli & Fur - Parfume (Dosem Remix) [Anjunadeep] <br/>
                            16. Mont Blvck - Letting Go (Franky Rizardo Remix) [Gari Recs] <br/>
                            17. Collective Machine - Room 8 [Knee Deep In Sound] <br/>
                            18. KiNK - Leko [Burek] <br/>
                            19. Jonh Mayze, Miguel Faria - Eivissa (Dario D’Attis Remix) [Snatch!] <br/>
                            `,
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
            tracklist: `    01. Josh Butler feat. Hanlei - Feels Good [Defected] <br/>
                            02. Lee Foss, Eli Brown - Freak You Right [Nothing Else Matters] <br/>
                            03. Wh0 - Devotion [Toolroom] <br/>
                            04. Gianni Blu - Work It [SPRS] <br/>
                            05. Purple Disco Machine - Music In You (David Penn Remix) (feat. Lorenz Rhode) [Sweat It Out] <br/>
                            06. Nasser Baker - Say Something (Dennis Ferrer Remix) [Circus Recordings] <br/>
                            07. CamelPhat Solardo - Accelerator [Sola] <br/>
                            08. CamelPhat - Drop It (Mason Maynard Extended Mix) [Sola] <br/>
                            09. Pirupa, Ninho - Bass Bomb  [VIVa LIMITED] <br/>
                            10. Andrea Oliva - Sound Like That  [Hot Creations] <br/>
                            11. Ciclo - Hot Piano [Snatch!] <br/>
                            12. Riva Starr - Britcoin (In Da House) [Truesoul] <br/>
                            13. James Meid - Sometime [Safe Music] <br/>
                            14. Shiba San & Tim Baresko - All I Need [DFTD] <br/>
                            15. Gorgon City - Let It Go  (feat. Naations) (Terrace Dub) [Virgin Emi] <br/>
                            16. Calvin Harris & Sam Smith - Promises (Sonny Fodera Extended Disco Mix) [Columbia Records] <br/>
                            17. Erick Morillo, Chris Child, Junolarc - Pulling Me feat. Ora Solar [Subliminal] <br/>
                            18. Wheats - Warrior Wall [Toolroom] <br/>
                            19. Subismo - Cotard (John Tejada remix) [Massa Records] <br/>
                            20. ATFC - Strong 2 Survive (Dario D'Attis Extended Mix) [Toolroom] <br/>
                       `,
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