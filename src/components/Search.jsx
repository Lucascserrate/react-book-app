import React, { useEffect, useState } from 'react'
import { getSearch } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Search = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {

        if (inputValue?.length > 1) {
            dispatch(getSearch(inputValue))
        }

    }, [inputValue])

    return (
        <div className='px-6 pb-4'>
            <div className='w-full bg-white p-3 rounded-xl'>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search' className='w-full outline-none' />
            </div>
        </div>
    )
}

export default Search