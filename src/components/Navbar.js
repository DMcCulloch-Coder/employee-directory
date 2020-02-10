import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className="nav-box">
            <img src="./logo192.png" alt="react logo"></img>
            <h2 className="nav-box__name">Digitech Inc.</h2>
        </div>
    )
};

export default Navbar;