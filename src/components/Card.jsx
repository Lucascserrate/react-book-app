import { IoIosStar } from "react-icons/io";

const Card = ({ book }) => {
    return (
        <div className='flex flex-col items-center gap-1'>
            <div className='relative'>
                <img src={book?.imageLinks.thumbnail} alt="" className='w-[128px] h-[168px] rounded-xl object-cover shadow-lg' />
                {book?.averageRating &&
                    <div className='flex items-center gap-1 absolute bottom-1 right-1 text-white bg-[#222] rounded-lg px-1.5 py-1'>
                        <IoIosStar className='text-yellow-500' size={14} />
                        <div className='text-xs'>{book?.averageRating}</div>
                    </div>}
            </div>
            <div className='w-[128px]'>
                <h3 className='font-medium text-xs text-ellipsis whitespace-nowrap overflow-hidden'>{book?.title}</h3>
                <h3 className='text-gray-400 text-xs text-ellipsis text-nowrap'>{book?.authors !== undefined ? book?.authors[0] : ''}</h3>
            </div>
        </div>
    )
}

export default Card