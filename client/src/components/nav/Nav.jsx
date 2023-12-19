import { useDispatch } from "react-redux";
import './Nav.css';
import { filterCountries } from "../../redux/Actions";
import { useEffect } from "react";

const Nav = ()=>{
    const dispatch = useDispatch()

    const handleFilter = (event)=>{
        const selectedContinent = event.target.value
        dispatch(filterCountries(selectedContinent)) 
    }

    useEffect(()=>{
        const defaultContinent = 'all'
        dispatch(filterCountries(defaultContinent))
    },[dispatch])

    return(
        <div className="nav_conteiner">
            <select name="Orden" id="">
                <option value={"A"}>Ascendente</option>
                <option value={"D"}>Descendente</option>
            </select>
            <select onChange={handleFilter} id="">
                <option value={"all"}>All countries</option>
                <option value={'South America'}>South America</option>
                <option value={'North America'}>North America</option>
                <option value={'Africa'}>Africa</option>
                <option value={'Asia'}>Asia</option>
                <option value={'Oceania'}>Oceania</option>
                <option value={'Europe'}>Europe</option>
                <option value={'Antarctica'}>Antarctica</option>
            </select>
            <input type="text" />
            <button>Search</button>
        </div>
    )
}

export default Nav;