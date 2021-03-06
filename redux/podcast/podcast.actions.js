import axios from "axios";


export const listPodcasts = ()=> async (dispatch)=>
    {
        try {
            dispatch( {type: 'PODCASTS_LIST_REQUEST'})
            const {data} = await axios.get('http://127.0.0.1:8000/api/radio_shows')

            dispatch({
                type: 'PODCASTS_LIST_SUCCES',
                payload: data
            })
        }
        catch (error) {
            // Обработчик для ошибки, если сервер присылает что-то неправильное
            dispatch({
                type: 'PODCASTS_LIST_FAIL',
                payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
            })
        }
    }