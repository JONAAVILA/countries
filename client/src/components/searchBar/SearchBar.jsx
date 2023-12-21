import { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = ()=>{
    
    const state = useSelector(state => state.countries);
    const [ search, setSearch ] = useState()

    const handleChange = (event)=>{
        if(event.target.value){
            setSearch(event.target.value)
        }
    }

    const handleSearch = (event)=>{
        if(event.key === 'Enter'){
            state.find(p =>{
                p.name === search
            })
        }
    }

    return(
        <>
            <label htmlFor="Search"></label>
            <input 
                className="input_search" 
                type='search' 
                placeholder="Press Enter" 
                onChange={handleChange} 
                onKeyPress={handleSearch}
            />
            <h1>{state.name}</h1>
        </>
    )
}

export default SearchBar;