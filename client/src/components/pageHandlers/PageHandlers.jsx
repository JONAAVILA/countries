import './PageHandlers.css';
import { useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from '../searchBar/SearchBar';

export const PageHandlers = ()=>{
    const [ currentPage, setCurrentPage ] = useState(1);
    const itemsPerPage = 12;
    const state = useSelector(state => state.countriesFiltered)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const nextHandler = (event)=>{
        if(event && currentPage < 21){
            setCurrentPage(currentPage + 1)
        }
    }

    const prevHandler = (event)=>{
        if(event && currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }
    return(
        <div className='box_page' >
            <div>
                <SearchBar/>
            </div>
            <div className='page_conteiner'>
            {state.slice(startIndex, endIndex).map(p =>{
                return(
                    <div className='box_card' >
                        <Link to={`/detail/${p.id}`} >
                        <div key={p.id} style={{ backgroundImage: `url(${p.flags})`,
                                                 backgroundSize: 'cover',
                                                 backgroundRepeat: 'no-repeat',
                                                 backgroundPosition: 'center',    
                                            }} className='page_card'>
                        </div>
                        </Link>
                        <div className='page_tittle' >
                                <h1>{p.name}</h1>
                                <h2>{p.continents}</h2>
                        </div> 
                    </div>
                    
                )
            })}
            
            </div>
            <div className='paginator_conteiner'>
                <button onClick={prevHandler} >Prev</button>
                <p>{currentPage}</p>
                <button onClick={nextHandler} >Next</button>
            </div>
        </div>  
    )
}
