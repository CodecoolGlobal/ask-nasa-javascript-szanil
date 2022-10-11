import { Link, Outlet } from "react-router-dom";
import NasaLogo from "../assets/Nasa-logo-2.png";
import NavBar from "./navBar.jsx";

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