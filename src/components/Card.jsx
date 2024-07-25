import React from 'react'

const Card = ({ book }) => {
    return (
        <div className='flex flex-col items-center gap-1'>
            <img src={book.imageLinks.thumbnail} alt="" className='w-[128px] h-[168px] rounded-xl object-cover shadow-lg' />
            <div className='w-[128px]'>
                <h3 className='font-medium text-xs text-ellipsis whitespace-nowrap overflow-hidden'>{book.title}</h3>
                <h3 className='text-gray-400 text-xs text-ellipsis text-nowrap'>{book.authors[0]}</h3>
            </div>
        </div>
    )
}

export default Card