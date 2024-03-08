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
                    <button>GO <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </button> 
                </Link>  
           </div> 
           <footer>Create with passion and <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-heart-filled"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 22 22"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor" />
                                                </svg>
            </footer>
        </div>
        
         
    )
}

export default Landing;