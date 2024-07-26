import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
