import { useState } from "react"
import { useSelector } from "react-redux"


const Form = ()=>{

    const countrie = useSelector(state => state.countries)
    console.log(countrie)
    const [ addedCountries, setAddedCountries ] = useState([])

    const addCountrie = (event)=>{
        if(event.key === "Enter"){
            const c = countrie.find(p => p.name === event.target.value)
            if(c){
                setAddedCountries([ ...addedCountries, c ])
                event.target.value = ""
                
            }
            console.log(addedCountries)
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
            <input type="text" onKeyPress={addCountrie} placeholder="Type a countrie and press Enter"/>
            <button>Create</button>
            <div>
               {addedCountries.map(c => {
                return(
                    <div>
                      <h3>{c.name}</h3>  
                    </div> 
                )
            })} 
            </div>
            
        </div>
    )
}

export default Form;