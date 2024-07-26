import { useEffect, useState } from 'react'
import { getSearch } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {

        if (inputValue?.length > 1) {
            dispatch(getSearch(inputValue))
        }

    }, [inputValue, dispatch])

    return (
        <div className='flex items-center gap-2 w-full bg-white p-3 rounded-xl'>
            <IoSearchOutline size={20} />
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search' className='w-full outline-none' />
        </div>

    )
}

export default Search