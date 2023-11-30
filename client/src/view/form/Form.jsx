import { useSelector } from "react-redux"


const Form = ()=>{

    const countrie = useSelector(state => state.countries)

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
            <input type="text" placeholder="Type a countrie and press Enter"/>
            <button>Create</button>
        </div>
    )
}

export default Form;