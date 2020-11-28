import { Link } from 'react-router-dom'


const Navigtion = () => {
    return ( 

        <nav className="nav">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li> <Link to="/Entertainment">Entertainment</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
     );
}
 
export default Navigtion;
