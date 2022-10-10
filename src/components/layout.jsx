import {
    Link,
    Outlet
} from "react-router-dom";
import NasaLogo from "../assets/Nasa-logo-2.png"

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 navbar-dark text-light">
                <img src={NasaLogo} style={{ width: "3%" }}></img>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li>
                            <Link className="nav-link text-light" to={'/'}>Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
