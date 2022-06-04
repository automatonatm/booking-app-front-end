import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <span className="navbar__logo">anglebooking</span>
                <div className="navbar__items">
                     <button className="navbar-button">Register</button>
                     <button className="navbar-button">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
