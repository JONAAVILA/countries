import SearchBar from "../SearchBar";

const Nav = ()=>{
    return(
        <div>
          <SearchBar/>
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
            
        </div>
    )
}

export default Nav;