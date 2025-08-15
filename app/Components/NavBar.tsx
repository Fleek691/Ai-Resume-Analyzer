import {Link} from "react-router";
import type {JSX} from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">Upload Resume</Link>
        </nav>
    )
}

export default Navbar
