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

const Footer = () => {
    return (
        <footer className="border-top text-center fixed-bottom footer">
            <div className="footer-container">
                &copy; 2022 - Ask-Nasa szanil
            </div>
        </footer>
    );
}

const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="main-container">
                <Outlet/>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Layout;