import { Link, Outlet } from "react-router-dom";
import NasaLogo from "../assets/Nasa-logo-2.png";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar border-bottom">
                <div>
                    <Link className="nav-link text-light" to={'/'}>Home</Link>
                </div>
                <div className="logo">
                    <img src={NasaLogo} style={{ width: "15%" }}></img>
                </div>
                <div>
                    <Link className="nav-link text-light" to={'/'}>Gallery</Link>
                </div>
            </nav>
        </header>
    );
}

export default NavBar();