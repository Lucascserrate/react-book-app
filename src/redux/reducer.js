import { GET_BOOKS, GET_SEARCH } from "./actions"


const initialState = {
    books: [],
   
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {...state, books: action.payload}

        case GET_SEARCH:
            return {...state, books: action.payload}
      
        default: return state
    }
}

export default rootReducer