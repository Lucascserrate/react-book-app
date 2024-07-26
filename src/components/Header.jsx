import React from 'react'
import Search from './Search';

const Header = () => {
    return (
        <header className='flex flex-col gap-4 w-[448px] px-6 py-4 bg-[#222] rounded-t-2xl rounded-br-3xl z-50'>
            <div className='flex justify-end items-center gap-3'>
                <img src="https://i.pravatar.cc/40?img=3" alt="profile picture" className='rounded-full' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-white font-semibold text-2xl'>The best <br /> books for you!</div>
                <div className='text-gray-400'>Search for your favorite books</div>
            </div>
            <Search />
        </header>
    )
}

export default Header