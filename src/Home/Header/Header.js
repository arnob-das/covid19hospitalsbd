import React from 'react';
import Navbar from '../../NavBar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header-card">
                <Navbar></Navbar>
                <h2 className="p-3">Welcome To</h2>
                <h3 className="pt-2">Covid19 Hospitals Info</h3>
            </div>
        </div>
    );
};

export default Header;