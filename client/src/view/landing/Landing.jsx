import { Link } from 'react-router-dom'
import './Landing.css';


const Landing = ()=>{
    return(
        <div className='box_landing'>
           <div className='landing_tittle' >
                <h1>Countries in the word</h1>
           </div>
           <div className='landing_button' >
                <Link to="/home" >
                    <button>GO</button> 
                </Link>  
           </div> 
        </div>
        
         
    )
}

export default Landing;