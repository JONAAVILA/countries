import { useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios";


const Form = ()=>{
    
    const state = useSelector(state => state.countries)
    const [ addedCountries, setAddedCountries ] = useState([])
    const [ search, setSearch ] = useState("")
    const [ inputValues, setInputValues ] = useState({
        name : "",
        difficulty : "",
        duration : "",
        season : ""
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
        
    }

    const handleCreateActivity = async (event)=>{
        if(event){
            try {
                const activity = {
                    inputValues,
                    addedCountries
                }

                const response = await axios.post("http://localhost:3001/countries/activities",activity)
                return window.alert("Activity created")
            } catch (error) {
                return window.alert(error)
            }
        }
    }


    return(
        <div>
            <h1>Create Activity</h1>
            <input  id="name"
                    value={inputValues.name}
                    onInput={handleActivity}
                    type="text"
                    placeholder="Name"
                    required
                    />
            <select id="difficulty" onChange={handleActivity} name="Difficulty" required >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input  id="duration"
                    value={inputValues.duration}
                    onChange={handleActivity}
                    type="number"
                    placeholder="Enter the time in hours"
                    required
                    />
            <select id="season" onChange={handleActivity} name="Season" required >
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
            <button onClick={handleCreateActivity} >Create</button>
            {addedCountries.map(c => {
                return(
                    <h3 key={c.id} >{c.name}</h3>
                )
            })}
        </div>
    )
}

export default Form;