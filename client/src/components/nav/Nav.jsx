import { useDispatch } from "react-redux";
import './Nav.css';
import { filterCountries, orderCountries, searchCountries } from "../../redux/Actions";
import { useEffect, useState } from "react";

const Nav = ()=>{
    const [ searchInputValue, setSearchInputValue ] = useState("")
    const dispatch = useDispatch()

    const handleFilter = (event)=>{
        const selectedContinent = event.target.value
        dispatch(filterCountries(selectedContinent)) 
    }

    const handleOrder = (event)=>{
        const selectOrder = event.target.value
        dispatch(orderCountries(selectOrder))
    }

    const handleInputSearch = (event)=>{
        const value = event.target.value[0].toUpperCase()
        setSearchInputValue(value + event.target.value.slice(1))
    } 

    const handleSearch = ()=>{
        dispatch(searchCountries(searchInputValue))
    }

    useEffect(()=>{
        const defaultContinent = 'all'
        dispatch(filterCountries(defaultContinent))
    },[dispatch])

    return(
        <div className="nav_conteiner">
            <select onChange={handleOrder} name="Orden" id="">
                <option value={"A"}>Ascendente</option>
                <option value={"B"}>Descendente</option>
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
            <input value={searchInputValue} onChange={handleInputSearch} type="text" />
            <button onClick={handleSearch} >Search</button>
        </div>
    )
}

export default Nav;