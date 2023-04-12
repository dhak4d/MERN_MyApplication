import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>                
                <nav className="navbar navbar-expand-lg bg-info my-3 mx-5">
                
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link active">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link active">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}
