import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = ()=>{

    const countries = useSelector(state => state.countries)
    const { id } = useParams();
    console.log(countries)
    const matchCountrie = countries.find(c => c.id === id)

    return(
        <div>
            <div  key={matchCountrie.id} style={{ backgroundImage: `url(${matchCountrie.flags})`,
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center',    
                                        }} className='page_card'>
                
            </div>
            <div>
                <h2>{matchCountrie.id}</h2>
                <h1>{matchCountrie.name}</h1> 
                <h2>{matchCountrie.continents}</h2>
                <h2>{matchCountrie.capital}</h2>
                <h2>{matchCountrie.subregion}</h2>
                <h3>Area: {matchCountrie.area}</h3>                     
                <h3>Population: {matchCountrie.population}</h3>                     
                <div>
                    {matchCountrie.Activities.map(act => {
                        return(
                            <div>
                                <h3>{act.name}</h3>
                            </div>
                        )
                    })}
                </div>                  
            </div>  
        </div>
        
    )
}
export default Detail;
