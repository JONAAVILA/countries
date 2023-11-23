import './Home.css';
import Nav from "../../components/nav/Nav";
import { PageHandlers } from "../../components/pageHandlers/PageHandlers";

const Home = ()=>{
    return(
        <div className='home_conteiner'>
            <Nav/>
            <PageHandlers/>
        </div>
    )
}

export default Home;