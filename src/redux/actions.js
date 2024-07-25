import * as api from '../api';
export const GET_BOOKS = 'GET_BOOKS';

export const getAllBooks = () => async dispatch => {
    try {
        let json = await api.getAll().then((data) => dispatch({ type: GET_BOOKS, payload: data }))
        return json
    } catch (error) {
        console.log(error.message)
    }
}
