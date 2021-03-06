import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar  navbar-light container">
                <Link to=""  className="navbar-brand"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="" className="nav-link text-light">About Application <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link text-light">Terms And Condition</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link text-light">Developer</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;