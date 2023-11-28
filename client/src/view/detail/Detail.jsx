import { allCountries } from "../../redux/Actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Detail = ()=>{

    const { id } = useParams();
    const [ countrie, setCountrie ] = useEffect({})

    useEffect( async ()=>{
        try {
            const response = await axios(`http://localhost:3001/countries/${id}`)
            if(!response.name) throw new Error('NO HAY RESPUESTA DEL SERVIDOR')
            
            return setCountrie(response)
        } catch (error) {
            return console.log({error:error.message})
        }
    }, [id] )

    return(
        <div>
            <p>{countrie.name}</p>  
        </div>
    )
}
export default Detail;
