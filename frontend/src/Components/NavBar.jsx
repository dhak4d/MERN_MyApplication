import React from 'react'

import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>                
                <nav className="navbar" >
                            <ul className="navbar-ul">
                                <li className="nav-item">
                                    <Link to="/" className="navlink" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="navlink">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="navlink">Contact Us</Link>
                                </li>
                            </ul>
                       
                  
                </nav>
        </>
    )
}
