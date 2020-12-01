import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-header">
                        <div className="logo">
                            <Link to="/">
                                LIVE SPORTS
                            </Link> 
                        </div>           
                    </div>

                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-show"><i className="fa fa-bars"></i></label>

                    <div className="nav">
                    <ul className="nav-links">
                        <li className="nav-item nav-link">
                            <Link to="/signinup">
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/signinup">
                                Register
                            </Link>
                        </li>
                        <label htmlFor="menu-toggle" className="menu-hide"><i className="fa fa-times"></i></label>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;