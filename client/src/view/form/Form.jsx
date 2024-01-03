import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { allActivities } from "../../redux/Actions";
import validate from "./validate";


const Form = ()=>{

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
    const [ errors, setErrors ] = useState({})

    useEffect(()=>{
        dispatch(allActivities())
    },[addedCountries])

    const handleInput = (event)=>{
        if(event){
            const countrie = event.target.value
            let aux = countrie[0].toUpperCase()
            setSearch(aux + countrie.slice(1).toLowerCase())
        }
    }

    const addCountrie = (event)=>{
        if(event.key === "Enter"){
            event.preventDefault()
            const country = state.find(p => p.name === search)
            const matchCountry = addedCountries.find(c => c.name === search)

            if(matchCountry){
                window.alert("The country has already been added")
                return event.target.value = ""
            }

            if(country === undefined){
                window.alert('Invalid country')
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

        const validationErrors = validate({ ...inputValues, [id]: value });
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...validationErrors,
        }));

        setInputValues(prevState => ({
            ...prevState,
            [id] : value    
        }))
    }

    const handleSubmitActivity = async (event)=>{
        try {
            event.preventDefault()
            const activity = {
                inputValues,
                addedCountries
            }

            const response = await axios.post("http://localhost:3001/countries/activities",activity)
            if(response === undefined) throw new Error({error: error.message})
            setAddedCountries([])

            setInputValues(prevState => ({
                ...prevState,
                name : "",
                difficulty : "",
                duration : "",
                season : ""
            }))

            return window.alert(response.data.message) 
        } catch (error) {
            return window.alert(error.message)
        }
        
    }   

    return(
    <div>
          <div> 
            <form onSubmit={handleSubmitActivity}  action="">
            <h1>Create Activity</h1>
            <input  id="name"
                    value={inputValues.name}
                    onChange={handleActivity}
                    type="text"
                    placeholder="Name"
                    required
                    />
            <input  id="difficulty"
                    value={inputValues.difficulty}
                    type="text"
                    onChange={handleActivity}
                    name="Difficulty"
                    placeholder="Enter a number from 1 to 5"
                    required
                    />
            <input  id="duration"
                    value={inputValues.duration}
                    onChange={handleActivity}
                    type="text"
                    placeholder="Enter the time in hours"
                    required
                    />
            <input  id="season"
                    value={inputValues.season}
                    type="text"
                    onChange={handleActivity}
                    name="Season"
                    placeholder="Enter a season"
                    required
                    />
            <input  id="inputCountry"
                    type="text"
                    onKeyPress={addCountrie}
                    onChange={handleInput}
                    placeholder="Type a countrie and press Enter"
                    />
            <button type="submit">Create</button> 
            </form>
            <div>
                {errors.name && <p>{errors.name}</p>}
                {errors.difficulty && <p>{errors.difficulty}</p>}
                {errors.duration && <p>{errors.duration}</p>}
                {errors.season && <p>{errors.season}</p>}
            </div>
            
            
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