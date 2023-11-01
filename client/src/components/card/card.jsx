import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries } from "../../redux/Actions";

const Card = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allCountries())
    }, [dispatch])

    const country = useSelector(state => state.countries)
    
    return(
        <div>
            {country.map(p =>{
                return(
                    <div key={p.id} >
                       <h1>{p.name}</h1>
                       <img src={p.flags} />
                       <h2>{p.continents}</h2>
                    </div> 
                )
            })}
        </div>
    )
}

export default Card;