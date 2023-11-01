import { useState } from "react"

const PageHandlers = ()=>{
    const [ currentPage, setCurrentPage ] = useState(1);
    let counter = currentPage 

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
            <button onClick={prevHandler} >Prev</button>
            <p>{currentPage}</p>
            <button onClick={nextHandler} >Next</button>
        </div>
    )
}

export default PageHandlers;