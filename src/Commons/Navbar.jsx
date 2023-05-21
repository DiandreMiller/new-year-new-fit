import { Link } from "react-router-dom"
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <Link to='users/new'><button className="button">Create An Account</button></Link>
            <Link to='/users'><button className="button">View All Users</button></Link>
        </div>
    )
}

export default Navbar