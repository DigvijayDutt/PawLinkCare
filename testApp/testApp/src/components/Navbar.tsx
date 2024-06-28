import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="nav">
            <ul>
                <li><Link to={'../Signup'}>Signup</Link></li>
                <li className="site-title"><Link to={'../Home'}>PawlinkCare</Link></li>
                <li><Link to={'../About'}>About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;