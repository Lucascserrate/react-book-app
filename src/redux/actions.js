import * as api from '../api';
export const GET_BOOKS = 'GET_BOOKS';
export const GET_SEARCH = 'GET_SEARCH';

export const getAllBooks = () => async dispatch => {
    try {
        let json = await api.getAll().then(data => dispatch({ type: GET_BOOKS, payload: data }))
        return json
    } catch (error) {
        console.log(error.message)
    }
}

export const getSearch = (value) => async dispatch => {
    try {
        let json = await api.search(value, 20).then((data) => {
            data?.length > 0 && dispatch({ type: GET_BOOKS, payload: data })
        })
        return json
    } catch (error) {
        console.log(error.message)
    }
}
