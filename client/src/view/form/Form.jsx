import { useState } from "react"
import { useSelector } from "react-redux"


const Form = ()=>{
    
    const state = useSelector(state => state.countries)
    const [ addedCountries, setAddedCountries ] = useState([])
    const [ search, setSearch ] = useState("")
    const [ inputValues, setInputValues ] = useState({
        inputName : "",
        inputHours : "",
    })

    const handleInput = (event)=>{
        if(event){
            const countrie = event.target.value
            let aux = countrie[0].toUpperCase()
            setSearch(aux + countrie.slice(1))
        }
    }

    const addCountrie = (event)=>{
        if(event.key === "Enter"){
            const country = state.find(p => p.name === search)
            const matchCountry = addedCountries.find(c => c.name === search)

            if(matchCountry){
                       window.alert("The country has already been added")
                return event.target.value = ""
            } 

            if(country){
                setAddedCountries([ ...addedCountries, country ])
                event.target.value = "" 
            }
        }
    }

    const handleActivity = (event)=>{
        const { id, value } = event.target
        setInputValues(prevState => ({
            ...prevState,
            [id] : value    
        }))
        console.log(inputValues)
    }

    return(
        <div>
            <h1>Create Activity</h1>
            <input  id="inputName"
                    value={inputValues.inputName}
                    onChange={handleActivity}
                    type="text"
                    placeholder="Name"
                    required
                    />
            <select name="Difficulty" required >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input  id="inputHours"
                    value={inputValues.inputHours}
                    onChange={handleActivity}
                    type="number"
                    placeholder="Enter the time in hours"
                    required
                    />
            <select name="Season" id="" required >
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
            </select>
            <input  id="inputCountry"
                    type="text"
                    onKeyPress={addCountrie}
                    onChange={handleInput}
                    placeholder="Type a countrie and press Enter"
                    required
                    />
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