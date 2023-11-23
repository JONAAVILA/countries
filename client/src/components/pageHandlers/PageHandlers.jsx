import './PageHandlers.css';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { allCountries } from '../../redux/Actions';
import { Link } from "react-router-dom";

export const PageHandlers = ()=>{
    const [ currentPage, setCurrentPage ] = useState(1);
    const itemsPerPage = 10;
    const state = useSelector(state => state.countries)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allCountries())
    }, [])

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const nextHandler = (event)=>{
        if(event){
            setCurrentPage(currentPage + 1)
        }
    }

    const prevHandler = (event)=>{
        if(event && currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    return(
        <div>
            <div className='page_conteiner'>
            {state.slice(startIndex, endIndex).map(p =>{
                return(
                    <div key={p.id} style={{ backgroundImage: `url(${p.flags})`,
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center',    
                                        }} className='page_card'>
                    <Link to={'/detail'} >
                        <h1>{p.name}</h1>
                    </Link>
                       <h2>{p.continents}</h2>
                    </div> 
                )
            })}
            
        </div>
        <div>
            <button onClick={prevHandler} >Prev</button>
            <p>{currentPage}</p>
            <button onClick={nextHandler} >Next</button>
        </div>
        </div>  
    )
}
