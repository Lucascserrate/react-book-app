import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBook } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { BiArrowBack } from "react-icons/bi";
import { FaRegStar } from 'react-icons/fa6';
import { RiBookOpenLine } from 'react-icons/ri';
import { IoLanguage } from 'react-icons/io5';

const BookDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const book = useSelector(state => state.bookDetail)

    useEffect(() => {
        dispatch(getBook(id))
    }, [])

    return (
        <div className="scrollbar-width-none h-screen max-w-md mx-auto relative bg-primary rounded-2xl overflow-y-scroll">
            <div className='flex items-center fixed w-[448px] h-14 bg-primary/80 backdrop-blur rounded-t-2xl z-50 px-6'>
                <Link to={'/'}>
                    <BiArrowBack size={24} />
                </Link>
            </div>
            <div className='pt-16 pb-6'>
                <div className='flex flex-col items-center gap-5 px-4'>
                    <div className='w-full relative py-4'>
                        <div className='flex items-end gap-9'>
                            <img src={book?.imageLinks?.thumbnail} className='relative left-5 w-[140px] h-[220px] rounded-xl object-cover shadow-lg z-10' alt="image" />
                            <div className='flex flex-col gap-2 relative z-10'>
                                <div>
                                    <div className='text-xs text-gray-400'>Authors</div>
                                    <div className='text-sm font-medium text-white'>{book?.authors}</div>
                                </div>
                                {
                                    book?.publisher &&
                                    <div>
                                        <div className='text-xs text-gray-400'>Publisher</div>
                                        <div className='text-sm font-medium text-white'>{book?.publisher}</div>
                                    </div>
                                }
                                <div>
                                    <div className='text-xs text-gray-400'>Published</div>
                                    <div className='text-sm font-medium text-white'>{book?.publishedDate}</div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 bg-[#222] w-full h-40 rounded-2xl' >

                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-medium'>{book?.title}</div>
                        <div className='text-gray-400 whitespace-nowrap text-ellipsis overflow-x-hidden'>{book?.subtitle}</div>
                    </div>
                    <div className='flex gap-4 w-full px-4'>
                        {
                            book?.averageRating &&
                            <div className='flex flex-col justify-center items-center bg-white w-full gap-3 p-2 rounded-lg'>
                                <FaRegStar size={18} />
                                <div className='text-sm font-semibold'>{book?.averageRating} stars</div>
                            </div>
                        }
                        <div className='flex flex-col justify-center items-center bg-white w-full gap-3 p-2 rounded-lg'>
                            <RiBookOpenLine size={18} />
                            <div className='text-sm font-semibold'>{book?.pageCount} pages</div>
                        </div>
                        <div className='flex flex-col items-center bg-white w-full gap-3 p-2 rounded-lg'>
                            <IoLanguage size={18} />
                            <div className='text-sm font-semibold'>{book?.language}</div>
                        </div>
                    </div>
                    <section className='flex flex-col gap-3'>
                        <div>
                            <div className='text-sm text-gray-400'>Description</div>
                            <div className='text-lg'>{book?.description}</div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default BookDetail