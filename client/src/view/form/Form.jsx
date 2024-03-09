import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { allActivities, allCountries } from "../../redux/Actions";
import validate from "./validate";
import './Form.css';


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
        dispatch(allCountries())
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
            }else{
                setAddedCountries([ ...addedCountries, country ])
                event.target.value = "" 
            }
        }   
    }

    const handleActivity = (event)=>{
        const { id, value } = event.target

        if(id === "name" && activities.length){
            if(activities.find(activity => activity.name === value)){
                return window.alert('Name in use')
            }
        }

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

            if(!addedCountries.length) return window.alert("Add a country")

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
    
    const handleDeleteCountry = (event)=>{
        const {id} = event.target

        if(id){
            const countries = addedCountries.filter(country => country.id !== id)
            console.log(countries)
            setAddedCountries(countries)
            return
        }
    }

    return(
    <div className="box_form" >
          <div className="form_conteiner" > 
            <form onSubmit={handleSubmitActivity}  action="">
            <div>
              <h1>Create Activity</h1>  
            </div>
            <div className="input_conteiner" >
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
            </div>
            <div className="button_conteiner" >
              <button type="submit">Create</button> 
            </div>
            </form>
        </div>
        <div className="conteiner_country"  >
            <div>
                {errors.name && <p>{errors.name}</p>}{errors.difficulty && <p>{errors.difficulty}</p>}
                {errors.duration && <p>{errors.duration}</p>}
                {errors.season && <p>{errors.season}</p>}
            </div>
            <div className="box_country"  >
                {addedCountries.map(c => {
                    return(
                        <div key={c.id} >
                            <h3 key={c.id} >{c.name}</h3>
                            <svg key={c.name} id={c.id} onClick={handleDeleteCountry}
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                            </svg>
                        </div>
                    )
                })}
            </div>  
        </div>
        <div className="box_activity" >
            {!activities.length? (<h1>Activities not found</h1>) : (
                <div className="activity_card"  >
                    {activities.map(activity =>{
                        return(
                        <div className="activity_conteiner" >
                            <div>
                                <h2>{activity.name}</h2>    
                            </div>
                            <div className="activity_detail" key={activity.name}>
                                <div className="box_activity_info" >
                                    <h3>Difficulty: {activity.difficulty}</h3>
                                    <h3>Duration: {activity.duration}hrs.</h3>
                                    <h3>Season: {activity.season === "Winter" && <svg xmlns="http://www.w3.org/2000/svg"
                                                                                      class="icon icon-tabler icon-tabler-snowflake"
                                                                                      width="16"
                                                                                      height="16"
                                                                                      viewBox="0 0 22 22"
                                                                                      stroke-width="1.5"
                                                                                      stroke="currentColor"
                                                                                      fill="none"
                                                                                      stroke-linecap="round"
                                                                                      stroke-linejoin="round">
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                                    <path d="M10 4l2 1l2 -1" />
                                                                                    <path d="M12 2v6.5l3 1.72" />
                                                                                    <path d="M17.928 6.268l.134 2.232l1.866 1.232" />
                                                                                    <path d="M20.66 7l-5.629 3.25l.01 3.458" />
                                                                                    <path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
                                                                                    <path d="M20.66 17l-5.629 -3.25l-2.99 1.738" />
                                                                                    <path d="M14 20l-2 -1l-2 1" />
                                                                                    <path d="M12 22v-6.5l-3 -1.72" />
                                                                                    <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
                                                                                    <path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
                                                                                    <path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
                                                                                    <path d="M3.34 7l5.629 3.25l2.99 -1.738" />
                                                                                </svg>}
                                                {activity.season === "Spring" && <svg xmlns="http://www.w3.org/2000/svg"
                                                                                      class="icon icon-tabler icon-tabler-flower"
                                                                                      width="16"
                                                                                      height="16"
                                                                                      viewBox="0 0 22 22"
                                                                                      stroke-width="1.5"
                                                                                      stroke="currentColor"
                                                                                      fill="none"
                                                                                      stroke-linecap="round"
                                                                                      stroke-linejoin="round">
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                                                    <path d="M12 2a3 3 0 0 1 3 3c0 .562 -.259 1.442 -.776 2.64l-.724 1.36l1.76 -1.893c.499 -.6 .922 -1 1.27 -1.205a2.968 2.968 0 0 1 4.07 1.099a3.011 3.011 0 0 1 -1.09 4.098c-.374 .217 -.99 .396 -1.846 .535l-2.664 .366l2.4 .326c1 .145 1.698 .337 2.11 .576a3.011 3.011 0 0 1 1.09 4.098a2.968 2.968 0 0 1 -4.07 1.098c-.348 -.202 -.771 -.604 -1.27 -1.205l-1.76 -1.893l.724 1.36c.516 1.199 .776 2.079 .776 2.64a3 3 0 0 1 -6 0c0 -.562 .259 -1.442 .776 -2.64l.724 -1.36l-1.76 1.893c-.499 .601 -.922 1 -1.27 1.205a2.968 2.968 0 0 1 -4.07 -1.098a3.011 3.011 0 0 1 1.09 -4.098c.374 -.218 .99 -.396 1.846 -.536l2.664 -.366l-2.4 -.325c-1 -.145 -1.698 -.337 -2.11 -.576a3.011 3.011 0 0 1 -1.09 -4.099a2.968 2.968 0 0 1 4.07 -1.099c.348 .203 .771 .604 1.27 1.205l1.76 1.894c-1 -2.292 -1.5 -3.625 -1.5 -4a3 3 0 0 1 3 -3z" />
                                                                                </svg> }
                                                {activity.season === "Summer" && <svg xmlns="http://www.w3.org/2000/svg"
                                                                                      class="icon icon-tabler icon-tabler-sun-filled"
                                                                                      width="16"
                                                                                      height="16"
                                                                                      viewBox="0 0 22 22"
                                                                                      stroke-width="1.5"
                                                                                      stroke="currentColor"
                                                                                      fill="none"
                                                                                      stroke-linecap="round"
                                                                                      stroke-linejoin="round">
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                                    <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                                                                                    <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
                                                                                    <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" /><path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
                                                                                    <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
                                                                                    <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
                                                                                    <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
                                                                                    <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                                                                                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                                                                                </svg>}
                                                {activity.season === "Autumn" && <svg xmlns="http://www.w3.org/2000/svg"
                                                                                      class="icon icon-tabler icon-tabler-leaf"
                                                                                      width="16"
                                                                                      height="16"
                                                                                      viewBox="0 0 22 22"
                                                                                      stroke-width="1.5"
                                                                                      stroke="currentColor"
                                                                                      fill="none"
                                                                                      stroke-linecap="round"
                                                                                      stroke-linejoin="round">
                                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                                    <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
                                                                                    <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
                                                                                </svg>}
                                    </h3>
                                </div>
                                <div className="box_activity_countries" >
                                    <h3>Related Countries:</h3>  
                                    {activity.Countries.map(country =>{
                                    return(
                                        <div key={country.name}>
                                            <h3>{country.name}</h3>
                                        </div>
                                        )
                                    })} 
                                </div>   
                            </div> 
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