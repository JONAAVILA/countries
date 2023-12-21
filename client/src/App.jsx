import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allCountries } from './redux/Actions';
import Landing from './view/landing/Landing';
import Home from './view/home/Home';
import SearchBar from './components/searchBar/SearchBar';
import Detail from './view/detail/Detail';
import Form from './view/form/Form';


function App() {


  const dispatch = useDispatch();

  useEffect(()=>{
        dispatch(allCountries())
  }, [])

  return (
    <div className='app_conteiner'>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/search' element={<SearchBar/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </div>
  )
}

export default App;
