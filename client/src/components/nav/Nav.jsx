import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import './Nav.css';
import { filterCountries } from "../../redux/Actions";

const Nav = ()=>{

    const dispatch = useDispatch()
    const state = useSelector(state => state.countriesFiltered)

    const handleFilter = (event)=>{
        const selectedContinent = event.target.value
        dispatch(filterCountries(selectedContinent))
        console.log(selectedContinent)
        
    }
    console.log(state)
    return(
        <div className="nav_conteiner">
            <select name="Orden" id="">
                <option value={"A"}>Ascendente</option>
                <option value={"D"}>Descendente</option>
            </select>
            <select onChange={handleFilter} id="">
                <option value={'America'}>America</option>
                <option value={'Africa'}>Africa</option>
                <option value={'Asia'}>Asia</option>
                <option value={'Europa'}>Europa</option>
            </select>
            <input type="text" />
            <button>Search</button>
        </div>
    )
}

export default Nav;