import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Landing from './view/landing/Landing';
import Home from './view/home/Home';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;
