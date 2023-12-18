import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import './Nav.css';
import { filterCountries } from "../../redux/Actions";

const Nav = ()=>{

    const dispatch = useDispatch()

    const handleFilter = (event)=>{
        dispatch(filterCountries(event.target.value))
    }

    return(
        <div className="nav_conteiner">
            <select name="Orden" id="">
                <option value={"A"}>Ascendente</option>
                <option value={"D"}>Descendente</option>
            </select>
            <select onChange={handleFilter} name="Continente" id="">
                <option value="AMERICA">America</option>
                <option value={"Africa"}>Africa</option>
                <option value="ASIA">Asia</option>
                <option value="EUROPA">Europa</option>
            </select>
            <input type="text" />
            <button onClick={<SearchBar/>} >Search</button>
        </div>
    )
}

export default Nav;