import './Nav.css';
import { useLocation, Link } from 'react-router-dom';

const Nav = ()=>{

    const Location = useLocation()
    Location.pathname === "/form"
    Location.pathname === "/home"

    return(
        <div className='nav_conteiner'>
            <div>
                <h2>Countries app create in React and Redux</h2>
                <p>With Countries app you can search
                   any country in the word, easy and faster</p>
            </div>
            <div className='nav_buttons' >
                <Link to="/form" >
                    <button>Activity</button>
                </Link>
                <Link to="/home" >
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav;