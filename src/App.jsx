import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Search from './components/Search';


function App() {


  return (
    <div className="app h-screen max-w-md mx-auto relative bg-primary rounded-2xl overflow-y-scroll">
      <Navbar />
      <div className='pt-16'>
        <Search />
        <CardList />
      </div>
    </div>
  );
}

export default App;
