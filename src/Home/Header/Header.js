import React from 'react';
import Navbar from '../../NavBar/Navbar';
import './Header.css'
import './Header.css'

const Header = () => {
    return (
        <div>

            <div className="header-card container">
                <Navbar></Navbar>
                <div>
                    <h5>Welcome to</h5>
                    <h2>Covid19 Hospital's Info</h2>
                    <p>COVID19 Dedicated Hospital's Information Is Available Here</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Header;