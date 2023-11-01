import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Landing from './view/landing/Landing';
import Home from './view/home/Home';
import SearchBar from './components/SearchBar';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='home' element={<Home/>} />
        <Route path='search' element={<SearchBar/>} />
      </Routes>
    </div>
  )
}

export default App;
