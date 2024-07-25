import React from 'react'
import { FiBook } from "react-icons/fi";


const Navbar = () => {
    return (
        <nav className='flex justify-between fixed w-[448px] h-14 bg-primary/80 backdrop-blur rounded-t-2xl z-50'>
            <div className='flex items-center gap-2 px-6'>
                <FiBook size={18} />
                <h1 className="font-medium">Book Store</h1>
            </div>
        </nav>
    )
}

export default Navbar