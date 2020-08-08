import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../img/logo2.png';

export default function Navbar() {
    return (
        <nav class="navbar">
            <div class="navbar__logo">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>
            </div>
            <ul class="navbar__menu">
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