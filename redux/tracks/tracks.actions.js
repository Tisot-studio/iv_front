import axios from "axios";


export const listTracks = ()=> async (dispatch)=>
    {
        try {
            dispatch( {type: 'TRACKS_LIST_REQUEST'})
            const {data} = await axios.get('http://127.0.0.1:8000/api/tracks')

            dispatch({
                type: 'TRACKS_LIST_SUCCES',
                payload: data
            })
        }
        catch (error) {
            // Обработчик для ошибки, если сервер присылает что-то неправильное
            dispatch({
                type: 'TRACKS_LIST_FAIL',
                payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
            })
        }
    }