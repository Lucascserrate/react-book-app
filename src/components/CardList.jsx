import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../redux/actions';
import { Link } from "react-router-dom";
import Card from '../components/Card';

const CardList = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)

    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch])

    return (
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 pt-4 pb-6'>
            {books?.map((book) => (
                <Link to={`/${book.id}`}>
                    <Card book={book} key={book.id} />
                </Link>
            ))}
        </div>
    )
}

export default CardList