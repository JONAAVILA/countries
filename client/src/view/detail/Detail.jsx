import { useParams } from "react-router-dom";
import { allCountries } from "../../redux/Actions";
import { useSelector } from "react-redux";

const Detail = ()=>{

    const countries = useSelector(state => state.countries)
    const { id } = useParams();
    
    const matchCountrie = countries.find(c => c.id === id)

    return(
        <div  key={matchCountrie.id} style={{ backgroundImage: `url(${matchCountrie.flags})`,
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center',    
                                        }} className='page_card'>
            <h1>{matchCountrie.name}</h1> 
        </div>
    )
}
export default Detail;
