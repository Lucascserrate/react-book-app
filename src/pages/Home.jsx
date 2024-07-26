import CardList from '../components/CardList';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="scrollbar-width-none h-[98vh] mt-2 max-w-md mx-auto relative bg-primary rounded-2xl overflow-y-scroll">
            <Header />
            <CardList />
        </div>
    )
}

export default Home