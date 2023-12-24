import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { allActivities } from "../../redux/Actions";


const Form = ()=>{

    //terminar useEffect de activities para que se carguen al montarse el componente
    //configurar input activities con valores por default
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)
    const state = useSelector(state => state.countries)
    const [ addedCountries, setAddedCountries ] = useState([])
    const [ search, setSearch ] = useState("")
    const [ inputValues, setInputValues ] = useState({
        name : "",
        difficulty : "",
        duration : "",
        season : ""
    })

    useEffect(()=>{
        dispatch(allActivities())
    },[addedCountries])

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
                if(response === undefined) throw new Error({error: error.message})
                setAddedCountries([])
                window.alert("Activity created")
            } catch (error) {
                return window.alert(error)  
            }
        }  
    }

    return(
    <div>
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
        <div>
            {!activities.length? (<h1>Activities not found</h1>) : (
                <div>
                    {activities.map(activity =>{
                        return(
                        <div key={activity.name}>
                        <h2>Name Activity: {activity.name}</h2>
                        <h3>Difficulty: {activity.difficulty}</h3>
                        <h3>Duration: {activity.duration}</h3>
                        <h3>Season: {activity.season}</h3>
                        <h2>Related Countries</h2>
                        {activity.Countries.map(country =>{
                            return(
                                <div key={country.name}>
                                    <h3>{country.name}</h3>
                                </div>
                            )
                            })} 
                        </div>
                        ) 
                    })}
                </div>
            )}
        </div>  
    </div>
        
    )
}

export default Form;