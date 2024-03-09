import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './Detail.css';

const Detail = ()=>{

    const countries = useSelector(state => state.countries)
    const { id } = useParams();
    console.log(countries)
    const matchCountrie = countries.find(c => c.id === id)

    return(
        <div className="box_detail">
            <div key={matchCountrie.id} style={{ backgroundImage: `url(${matchCountrie.flags})`,
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center',    
                                        }} className='card_detail'>
            </div>
            <div className="card_info" >
                <h2>{matchCountrie.id}</h2>
                <h1>{matchCountrie.name}</h1> 
                <h2>Continents: {matchCountrie.continents}</h2>
                <h2>Capital: {matchCountrie.capital}</h2>
                <h2>Subregion: {matchCountrie.subregion}</h2>
                <h3>Area: {matchCountrie.area} m2</h3>                     
                <h3>Population: {matchCountrie.population}</h3>                     
                <h3>Activities:</h3>
                <div className="card_activity">
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
