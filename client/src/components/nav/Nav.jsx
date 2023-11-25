import SearchBar from "../SearchBar";
import './Nav.css';

const Nav = ()=>{
    return(
        <div className="nav_conteiner">
            <select name="Orden" id="">
                <option value={"A"}>Ascendente</option>
                <option value={"D"}>Descendente</option>
            </select>
            <select name="Continente" id="">
                <option value="AMERICA">America</option>
                <option value="AFRICA">Africa</option>
                <option value="ASIA">Asia</option>
                <option value="EUROPA">Europa</option>
            </select>
            <button onClick={<SearchBar/>} >Search</button>
        </div>
    )
}

export default Nav;