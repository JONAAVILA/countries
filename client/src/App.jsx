import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allActivities, allCountries } from './redux/Actions';
import Landing from './view/landing/Landing';
import Home from './view/home/Home';
import SearchBar from './components/searchBar/SearchBar';
import Detail from './view/detail/Detail';
import Form from './view/form/Form';
import Nav from './components/nav/Nav';
import Error from './view/404/Error';


function App() {

  const location = useLocation()
  const dispatch = useDispatch();

  useEffect(()=>{
        dispatch(allCountries())
        dispatch(allActivities())
  }, [])

  return (
    <div>
        {(location.pathname === '*' || location.pathname !== '/landing') ?( <Nav /> ):(null)}
      <Routes>
        <Route path='/landing' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/search' element={<SearchBar/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </div>
  )
}

export default App;
