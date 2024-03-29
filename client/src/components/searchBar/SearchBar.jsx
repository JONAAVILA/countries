import { useDispatch, useSelector } from "react-redux";
import { filterCountries, orderCountries, searchCountries } from "../../redux/Actions";
import { useEffect, useState } from "react";
import './SearchBar.css';

const SearchBar = ({onSearch})=>{
    const state = useSelector(state => state.countries)
    const [ searchInputValue, setSearchInputValue ] = useState("")
    const dispatch = useDispatch()

    const handleFilter = (event)=>{
        onSearch()
        const selectedContinent = event.target.value
        dispatch(filterCountries(selectedContinent)) 
    }

    const handleOrder = (event)=>{
        onSearch()
        const selectOrder = event.target.value
        dispatch(orderCountries(selectOrder))
    }

    const handleInputSearch = (event)=>{
        setSearchInputValue(event.target.value)
    } 

    const handleSearch = ()=>{
        const value = searchInputValue[0].toUpperCase() + searchInputValue.toLowerCase().slice(1)
        onSearch()
        if(!state.find(c => c.name === value)){
            window.alert("Invalid name")
            return setSearchInputValue("")
        }
        dispatch(searchCountries(value))
        setSearchInputValue("")
    }

    const handleReload = ()=>{
        onSearch()
        const defaultContinent = 'all'
        dispatch(filterCountries(defaultContinent))
    }

    useEffect(()=>{
        handleReload()
    },[dispatch])

    return(
        <div className="filter_conteiner">
            <select onChange={handleOrder} name="Orden" id="">
                <option value={"Random"}>Random</option> 
                <option value={"A"}>Ascendente</option>
                <option value={"B"}>Descendente</option>
            </select>
            <select onChange={handleFilter} id="">
                <option className="option_select" value={"all"}>All countries</option>
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
            <button onClick={handleReload} >Reload</button>
        </div>
    )
}

export default SearchBar;