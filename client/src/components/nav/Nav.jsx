import './Nav.css';
import { useLocation, Link } from 'react-router-dom';

const Nav = ()=>{

    const Location = useLocation()
    Location.pathname === "/form"
    Location.pathname === "/home"

    return(
        <div>
            <Link to="/form" >
                <button>Create Activity</button>
            </Link>
            <Link to="/home" >
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Nav;