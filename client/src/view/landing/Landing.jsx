import { Link } from 'react-router-dom'


const Landing = ()=>{
    return(
        <div>
            <h1>Countries in the word</h1>
            <Link to="/home" >
               <button>GO</button> 
            </Link>
            
        </div>
    )
}

export default Landing;