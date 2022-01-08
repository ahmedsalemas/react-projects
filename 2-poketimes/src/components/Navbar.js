import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Poke'Times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;