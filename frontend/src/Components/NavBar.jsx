import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>                
                <nav className="navbar" >
                            <ul className="navbar-ul">
                                <li className="nav-item">
                                    <Link to="/" className="navlink" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="navlink">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="navlink">Contact Us</Link>
                                </li>
                            </ul>
                       
                  
                </nav>
        </>
    )
}
