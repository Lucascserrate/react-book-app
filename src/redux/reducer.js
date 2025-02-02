import { GET_BOOKS, GET_SEARCH, GET_BOOK } from "./actions"


const initialState = {
    books: [],
    bookDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {...state, books: action.payload}

        case GET_SEARCH:
            return {...state, books: action.payload}

        case GET_BOOK:
            return {...state, bookDetail: action.payload}
      
        default: return state
    }
}

export default rootReducer