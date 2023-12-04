import { useState } from "react"
import { useSelector } from "react-redux"


const Form = ()=>{
    
    const state = useSelector(state => state.countries)
    const [ addedCountries, setAddedCountries ] = useState([])
    const [ search, setSearch ] = useState("")

    const handleInput = (event)=>{
        if(event){
            const countrie = event.target.value
            let aux = countrie[0].tuUpperCase()
            setSearch(aux + countrie.slice(1))
        }
    }

    const addCountrie = (event)=>{
        if(event.key === "Enter"){
            const country = state.find(p => p.name === search)
            
            if(country){
                setAddedCountries([ ...addedCountries, country ])
                event.target.value = ""
                
            }
        }
        
    }

    return(
        <div>
            <h1>Create Activity</h1>
            <input type="text" placeholder="Name"/>
            <select name="Difficulty" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="number" name="" id="" placeholder="Enter the time in hours"/>
            <select name="Season" id="">
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
            </select>
            <input type="text" onKeyPress={addCountrie} onChange={handleInput} placeholder="Type a countrie and press Enter"/>
            <button>Create</button>
            {addedCountries.map(c => {
                return(
                    <h3 key={c.id} >{c.name}</h3>
                )
            })}
        </div>
    )
}

export default Form;