import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { allCountries } from '../../redux/Actions';

export const PageHandlers = ()=>{
    const [ currentPage, setCurrentPage ] = useState(1);
    const state = useSelector(state => state.countries)
    let counter = currentPage 

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allCountries())
    }, [])

    const nextHandler = (event)=>{
        if(event){
            counter += 1
            setCurrentPage(counter)
        }
    }

    const prevHandler = (event)=>{
        if(event && counter > 1){
            counter -= 1
            setCurrentPage(counter)
        }
    }

    return(
        
        <div>
            {state.slice(counter, counter * 10).map(p =>{
                return(
                    <div key={p.id} >
                       <h1>{p.name}</h1>
                       <img src={p.flags} />
                       <h2>{p.continents}</h2>
                    </div> 
                )
            })}
            <button onClick={prevHandler} >Prev</button>
            <p>{currentPage}</p>
            <button onClick={nextHandler} >Next</button>
        </div>
    )
}
