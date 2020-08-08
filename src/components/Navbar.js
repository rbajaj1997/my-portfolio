import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import logo from '../img/logo2.png';

export default function Navbar() {
    let location = useLocation();
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                {location.pathname !== '/' ? <NavLink to="/">
                    <img className="logo" src={logo} alt="logo" />
                </NavLink> : null }

            </div>
            <ul className="navbar__menu">
                <li>
                    <NavLink
                        to="/about"
                        activeClassName="active-link"
                        className="primary-link">
                        About
							</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        activeClassName="active-link"
                        className="primary-link">
                        Projects
							</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        activeClassName="active-link"
                        className="primary-link">
                        Contact
							</NavLink>
                </li>
            </ul>
        </nav>
    );
}